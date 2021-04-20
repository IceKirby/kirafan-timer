var thumbnailMap = {
    "none": "imgs/kirara.png",
    "kirara": "imgs/kirara.png",
    "lamp": "imgs/lamp.png",
    "match": "imgs/match.png",
    "maintenance": "imgs/maintenance.png",
    "kanna": "imgs/kanna.png",
    "clea": "imgs/clea.png",
    "leine": "imgs/leine.png",
    "cork": "imgs/cork.png",
    "polka": "imgs/polka.png"
};
var elementsMap = {
    Sun: "imgs/Attribute_Sun.png",
    Moon: "imgs/Attribute_Moon.png",
    Fire: "imgs/Attribute_Fire.png",
    Water: "imgs/Attribute_Water.png",
    Wind: "imgs/Attribute_Wind.png",
    Earth: "imgs/Attribute_Earth.png",
    Gold: "imgs/Currency_gold_coin.png",
    Warrior: "imgs/Class_Warrior.png",
    Mage: "imgs/Class_Mage.png",
    Priest: "imgs/Class_Priest.png",
    Knight: "imgs/Class_Knight.png",
    Alchemist: "imgs/Class_Alchemist.png"
};

Vue.filter('addStars', function (str) {
    return str.replace(/3\*/g, "3★").replace(/4\*/g, "4★").replace(/5\*/g, "5★");
});
Vue.filter('elementImage', function (val) {
    return elementsMap[val];
});

Vue.directive('tooltip', {
    bind: function (el, binding) {
        $(el).tooltip({
            title: binding.value,
            placement: binding.arg,
            trigger: 'hover',
            html: true
        });
    },
    update: function(el, binding) {
        $(el).attr('data-original-title', binding.value);
    },
    unbind: function(el, binding) {
        $(el).tooltip('dispose');
    }
});

var vm = new Vue({
    el: '#app',
    data: {
        currentZone: "japan",
        japanTime: null,
        localTime: null,
        timersData: null,
        thumbChangeCount: 0,
        thumbChangeTime: 7,
        showHeader: true,
        columns: 3,
        filters: null,
        alerts: alertMessages,
        alertTypes: alertTypes
    },
    methods: {
        changeTimezone: function() {
            var c, t, e, col, ev, timer, data = this.timersData;

            for (c = 0; c < data.length; c++) { // Check each column
                col = data[c];
                for (e = 0; e < col.length; e++) { // Check each event group
                    ev = col[e];
                    if (ev.type == "DailyQuest") {
                        ev.displayMode = this.currentZone;
                        continue;
                    }
                    for (t = 0; t < ev.timers.length; t++) { // Check each individual timer
                        timer = ev.timers[t];
                        timer.displayMode = this.currentZone;
                    }
                }
            }
        },

        // SETUP FUNCTIONS
        loadQueryParams: function() {
            let uri = window.location.search.substring(1);
            let params = new URLSearchParams(uri);

            let tz = params.get("tz");
            if (tz && (tz == "japan" || tz == "local")) {
                this.currentZone = tz;
            }

            if (params.get("header")) {
                this.showHeader = params.get("header").toLowerCase() != "false";
            }

            let cols = parseInt(params.get("columns"), 10);
            if (cols && !isNaN(cols) && cols > 0) {
                this.columns = cols;
            }

            let filters = {};
            if (params.get("type")) {
                filters.type = params.get("type").split(",").map(function(x){ return x.trim().toLowerCase(); });
            }
            if (params.get("id")) {
                filters.id = params.get("id").split(",").map(function(x){ return parseInt(x, 10); });
            }
            if (params.get("title")) {
                filters.title = params.get("title").split(",").map(function(x){ return x.trim().toLowerCase(); });
            }
            if (Object.keys(filters).length > 0) {
                this.filters = filters;
            }
        },
        buildTimerData: function(data) {
            var res = [];
            var ev, i, col;
            var nowMoment = moment.tz("Asia/Tokyo");
            var localZone = moment.tz.guess();

            for (i = 1; i <= this.columns; i++) {
                res.push([]);
            }

            // Loops through all data to build the event timers
            for (i = 0; i < data.length; i++) {
                ev = data[i];
                if (!ev.priority) {
                    ev.priority = 0;
                }
                ev.bonusPriority = 0;
                ev.visible = true;

                if (ev.type == "DailyQuest") {
                    ev = this.buildDailyQuestTimer(ev, nowMoment);
                } else {
                    ev = this.buildEventGroup(ev, localZone);
                }

                if (this.filterCheck(ev, this.filters, i)){
                    col = ev.column ? ev.column : 0;
                    if (col >= res.length) {
                        col = 0;
                    }
                    res[col].push(ev);
                }
            }

            // Sort timers and remove empty columns
            for (i = res.length; i--; ) {
                if (res[i].length === 0) {
                    res.splice(i, 1);
                }
            }

            this.timersData = res;
        },
        buildDailyQuestTimer: function(ev, nowMoment) {
            ev.displayMode = "japan";
            ev.deadlineMoment = nowMoment.clone().endOf("day");
            ev.current = "";
            ev.deadline = "";
            ev.japanend = "";
            ev.localend = "";
            return ev;
        },
        buildEventGroup: function(ev, localZone) {
            let evExtra, timer, e;

            // Default settings
            ev.expiration = 0;
            ev.nextTimer = "";
            ev.normalTimerIndex = 0;

            // Sets event image
            if (!ev.image) {
                ev.image = thumbnailMap.none;
            } else {
                // If array, image will rotate through all images listed every few seconds
                if (Array.isArray(ev.image)) {
                    ev.imageStep = Math.floor(Math.random() * ev.image.length);
                    ev.imageList = ev.image.map(function(x) {
                        return thumbnailMap.hasOwnProperty(x.toLowerCase()) ? thumbnailMap[x.toLowerCase()] : x;
                    });
                    ev.image = ev.imageList[ev.imageStep];
                } else if (thumbnailMap.hasOwnProperty(ev.image.toLowerCase())) {
                    ev.image = thumbnailMap[ev.image.toLowerCase()];
                }
            }

            // How long the event will still be displayed after all of its timers are finished
            evExtra = this.toDurationObject(ev.keepAfterFinished);

            // Create all individual timers
            for (e = 0; e < ev.timers.length; e++) {
                timer = this.buildEventTimer(ev.timers[e], ev, localZone, e, evExtra);
            }

            return ev;
        },
        buildEventTimer: function(timer, ev, localZone, normalTimerIndex, evExtra) {
            let timerExtra, startMoment, endMoment, expiration, extraDays = 0;

            // Default settings
            timer.visible = true;
            timer.progress = 0;
            timer.displayMode = "japan";

            // Sets timer type; Also adds start/end time for dates
            if (timer.hasOwnProperty("date")) {
                timer.start = timer.date + ", 0:00";
                timer.end = timer.date + ", 23:59";
                if (timer.days) {
                    extraDays = timer.days - 1;
                }
                timer.type = "date";
            } else if (ev.type == "WeekendBoss") {
                if (!timer.type) {
                    timer.type = "weekend";
                } else if (timer.type == "normal") {
                    ev.normalTimerIndex = normalTimerIndex;
                }
            } else {
                timer.type = "normal";
            }

            // Converts start/end moments to Japan time
            var strFormat = "MMM Do<br>ddd, H:mm";
            startMoment = moment.tz(timer.start, "MMM D YYYY, H:mm", "Asia/Tokyo");
            endMoment = moment.tz(timer.end, "MMM D YYYY, H:mm", "Asia/Tokyo");
            if (extraDays > 0) {
                endMoment = endMoment.add(extraDays, "days");
            }

            timer.rawStart = startMoment._d.getTime();
            timer.rawEnd  = endMoment._d.getTime();

            // Creates markers
            var marks = [];
            if (timer.hasOwnProperty("markers")) {
                let marker;
                for (var m = 0; m < timer.markers.length; m++) {
                    marker = this.createMarker(timer.markers[m], timer, localZone);
                    marks.push(marker);
                }
                timer.nextMarker = "";
            }
            if (timer.hasOwnProperty("banners")) {
                let marker;
                for (var m = 0; m < timer.banners.length; m++) {
                    marker = this.createMarker(timer.banners[m], timer, localZone);
                    if (marker.rawtime != timer.rawStart) {
                        marks.push(marker);
                    }
                }
                timer.nextMarker = "";
            }
            timer.markersInfo = marks;


            // Timer expiration = End Time + Timer's extra time
            timerExtra = this.toDurationObject(timer.keepAfterFinished);
            expiration = endMoment.clone().add(timerExtra);
            timer.expiration = expiration._d.getTime();

            // Event expiration = Last Timer's Expiration + Event's extra time
            expiration = expiration.add(evExtra)._d.getTime();
            if (expiration > ev.expiration) {
                ev.expiration = expiration;
            }

            // Stores date/time strings to display in timers
            if (timer.type == "date") {
                strFormat = "MMM Do<br>H:mm";
            } else if (timer.type == "weekend") {
                strFormat = "MMM Do";
            }
            timer.dateDisplay = {
                jpstart: startMoment.format(strFormat),
                localstart: startMoment.tz(localZone).format(strFormat),
                jpend: endMoment.format(strFormat),
                localend: endMoment.tz(localZone).format(strFormat),
                badgeStart: "",
                badgeEnd: "",
                barLabel: ""
            };
            return timer;
        },
        createMarker: function(marker, timer, localZone) {
            var markTime = moment.tz(marker.time, "MMM D YYYY, H:mm", "Asia/Tokyo");
            var tooltipFormat = "ddd, MMM Do, H:mm";
            var rawTime = markTime._d.getTime();
            var mark = {
                label: marker.title,
                type: marker.type || "star",
                jptime: markTime.format(tooltipFormat),
                localtime: markTime.tz(localZone).format(tooltipFormat),
                rawtime: rawTime,
                position: (rawTime - timer.rawStart) / (timer.rawEnd - timer.rawStart) * 100 + "%",
                started: false,
                tip: ""
            };
            return mark;
        },
        filterCheck: function(data, filters, id) {
            if (filters == null) {
                return true;
            }
            if (filters.hasOwnProperty("type")) {
                if (filters.type.indexOf(data.type.toLowerCase()) != -1) {
                    return true;
                }
            }
            if (filters.hasOwnProperty("title")) {
                let titles = Array.isArray(data.title) ? data.title : [data.title];
                let words = filters.title;
                for (let e = 0; e < titles.length; e++) {
                    for (let i = 0; i < words.length; i++) {
                        if (titles[e].toLowerCase().indexOf(words[i]) != -1) {
                            return true;
                        }
                    }
                }

            }
            if (filters.hasOwnProperty("id")) {
                if (filters.id.indexOf(id) != -1) {
                    return true;
                }
            }
            return false;
        },

        // UPDATE FUNCTIONS
        updateClocks: function() {
            this.japanTime = moment().tz('Asia/Tokyo').format("ddd D MMM, H:mm");
            this.localTime = moment().format("ddd D MMM, H:mm");
            this.updateTimerData();
        },
        updateTimerData: function() {
            var c, e, ev, col, data = this.timersData;
            var nowMoment = moment.tz("Asia/Tokyo");
            var now = nowMoment._d.getTime();
            var localZone = moment.tz.guess();

            var changeThumbs = this.thumbChangeCount >= this.thumbChangeTime;
            this.thumbChangeCount += 1;
            if (changeThumbs) {
                this.thumbChangeCount = 0;
            }

            for (c = 0; c < data.length; c++) { // Check each column
                col = data[c];
                for (e = 0; e < col.length; e++) { // Check each event group
                    ev = col[e];
                    ev.bonusPriority = 0;
                    if (ev.type == "DailyQuest") {
                        this.updateDailyQuest(ev, now, nowMoment, localZone);
                    } else {
                        this.updateEventGroup(ev, now, changeThumbs);
                    }

                }

                col.sort(this.prioritySort);
            }
        },
        updateDailyQuest: function(ev, now, nowMoment, localZone) {
            let deadline = ev.deadlineMoment;
            if (deadline.date() != nowMoment.date()) {
                deadline = ev.deadlineMoment = nowMoment.clone().endOf("day");
            }
            ev.current = nowMoment.format("dddd").toLowerCase();

            ev.deadline = this.remainingTimeString(now, deadline._d.getTime(), 2);
            ev.japanend = deadline.format("MMM Do, H:mm");
            ev.localend = deadline.clone().tz(localZone).format("MMM Do, H:mm");
        },
        updateEventGroup: function(ev, now, changeThumbs) {
            let allExpired = true,
                nextDate = Infinity,
                nextType = "finished",
                lastDate = 0;

            // Check each individual timer
            for (t = 0; t < ev.timers.length; t++) {
                timer = ev.timers[t];
                this.updateEventTimer(timer, ev, now);

                if (timer.rawStart > now && timer.rawStart < nextDate) {
                    nextDate = timer.rawStart;
                    nextType = "upcoming";
                }
                if (timer.rawEnd > now && timer.rawEnd < nextDate) {
                    nextDate = timer.rawEnd;
                    nextType = "ongoing";
                }
                if (timer.rawEnd > lastDate) {
                    lastDate = timer.rawEnd;
                }
            }

            // Updates text for LoginDays timers
            if (nextType == "finished") {
                ev.nextTimer = "Finished " + this.remainingTimeString(now, lastDate, 2) + " ago";
            } else if (nextType == "upcoming") {
                ev.nextTimer = "Next date starts in " + this.remainingTimeString(now, nextDate, 2);
            } else {
                ev.nextTimer = "Current date finishes in " + this.remainingTimeString(now, nextDate, 2);
            }

            // Changes thumbnail for Event Group
            if (changeThumbs && ev.imageList) {
                ev.imageStep++;
                if (ev.imageStep >= ev.imageList.length) {
                    ev.imageStep = 0;
                }
                ev.image = ev.imageList[ev.imageStep];
            }

            // Check if event should be visible
            if (allExpired && now >= ev.expiration && (typeof ev.keepAfterFinished != "boolean" || ev.keepAfterFinished === false)) {
                ev.visible = false;
            }
        },
        updateEventTimer: function(timer, ev, now) {
            // Check if timer should be visible
            timer.visible = false;
            timer.progress = this.countProgress(now, timer.rawStart, timer.rawEnd);
            if (timer.keepAfterFinished === true || timer.type == "weekend" || timer.expiration > now) {
                timer.visible = true;
                if (timer.type != "weekend") {
                    allExpired = false;
                }

                // Write strings for progress bar dates according to state
                if (timer.progress <= 0) {
                    timer.dateDisplay.barLabel = "Starts in " + this.remainingTimeString(now, timer.rawStart, 2);
                    timer.dateDisplay.badgeStart = "Starts in " + this.remainingTimeString(now, timer.rawStart, 5);
                    timer.dateDisplay.badgeEnd = "Ends in " + this.remainingTimeString(now, timer.rawEnd, 5);
                } else if (timer.progress >= 100) {
                    timer.dateDisplay.barLabel = "Finished " + this.remainingTimeString(now, timer.rawEnd, 2) + " ago";
                    timer.dateDisplay.badgeEnd = "Finished " + this.remainingTimeString(now, timer.rawEnd, 5) + " ago";
                    timer.dateDisplay.badgeStart = "Started " + this.remainingTimeString(now, timer.rawStart, 5) + " ago";
                } else {
                    timer.dateDisplay.barLabel = "Ends in " + this.remainingTimeString(now, timer.rawEnd, 2) + (timer.type == "weekend" ? "" : " (" + timer.progress.toFixed(1) + "%)");
                    timer.dateDisplay.badgeEnd = "Ends in " + this.remainingTimeString(now, timer.rawEnd, 5);
                    timer.dateDisplay.badgeStart = "Started " + this.remainingTimeString(now, timer.rawStart, 5) + " ago";

                    // Increase priority if timer is active
                    if (timer.extraPriority) {
                        ev.bonusPriority += timer.extraPriority;
                    }
                }

                // Update markers
                if (timer.markersInfo.length > 0) {
                    var marks = timer.markersInfo, m, mark, next = Infinity, nextName, nextFound = false;
                    for (m = 0; m < marks.length; m++) {
                        mark = marks[m];
                        mark.tip = "<b>" + mark.label + "</b><br/>" + (timer.displayMode == "japan" ? mark.jptime : mark.localtime) + (now >= mark.rawtime ? "" : "<br/>(starts in " + this.remainingTimeString(now, mark.rawtime, 5)+")");
                        if (mark.rawtime > now && mark.rawtime < next) {
                            nextFound = true;
                            nextName = mark.label;
                            next = mark.rawtime;
                        }
                        if (now >= mark.rawtime) {
                            mark.started = true;
                            mark.color = "#2fc551";
                        }
                    }
                    if (nextFound && now >= timer.rawStart) {
                        timer.nextMarker = nextName + " starts in " + this.remainingTimeString(now, next, 2);
                    } else {
                        timer.nextMarker = "";
                    }
                } else {
                    timer.nextMarker = "";
                }
            }
        },

        // HELPER FUNCTIONS
        prioritySort: function(a, b) {
            return (b.priority + b.bonusPriority) - (a.priority + a.bonusPriority);
        },
        toDurationObject: function(str) {
            if (typeof str !== "string") {
                return {};
            }
            var info = str.split(","),
                out = {},
                unitNames = ["seconds", "minutes", "hours", "days", "weeks", "months", "years"],
                part, val, unit;

            for (var i = 0; i < info.length; i++) {
                part = info[i].toLowerCase().trim().split(" ");
                val = parseInt(part[0], 10);
                unit = part[1];
                if (unit[unit.length-1] != "s") {
                    unit = unit + "s";
                }
                if (unitNames.indexOf(unit) !== -1 && !isNaN(val)) {
                    out[unit] = val;
                }
            }
            return out;
        },
        countProgress: function(now, start, end) {
            var duration = end - start;
            var elapsed = now - start;

            if (elapsed <= 0) {
                return 0;
            } else if (elapsed >= duration) {
                return 100;
            } else {
                return elapsed / duration * 100;
            }
        },
        timeDescription: function(time, steps) {
            var sec = time / 1000;

            var s = [];
            var n;
            var d = [[24*60*60, "day"], [60*60, "hour"], [60, "minute"], [1, "second"]];
            for (var j = 0; j < 4; ++j) {
                n = parseInt(sec / d[j][0], 10);
                if (n > 0) {
                    s.push((n + " " + d[j][1] + (n > 1 ? "s" : "")));
                    sec -= n * d[j][0];
                }
            }
            if (s.length === 0) {
                return "0 seconds";
            } else {
                return s.splice(0, steps).join(", ");
            }
        },
        remainingTimeString: function(now, target, steps) {
            var diff = target - now;

            if (diff >= 0) {
                return this.timeDescription(diff, steps||2);
            } else {
                return this.timeDescription(-diff, steps||2);
            }
        }
    },
    created: function() {
        this.loadQueryParams();
        this.buildTimerData(timerData);
        this.updateTimerData();
        this.updateClocks();
        this.changeTimezone();
        setInterval(this.updateClocks, 1 * 1000);
    }
});

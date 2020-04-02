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
        alerts: alertMessages
    },
    methods: {
        changeTimezone: function(place) {
            this.currentZone = place;
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
        updateClocks: function() {
            this.japanTime = moment().tz('Asia/Tokyo').format("ddd D MMM, H:mm");
            this.localTime = moment().format("ddd D MMM, H:mm");
            this.updateTimerData();
        },
        buildTimerData: function(data) {
            var res = [[],[],[]];
            var ev, i, e, timer, exp, evExtra, timerExtra, startMoment, endMoment;
            var nowMoment = moment.tz("Asia/Tokyo");
            var localZone = moment.tz.guess();

            for (i = 0; i < data.length; i++) {
                ev = data[i];
                ev.visible = true;
                if (!ev.priority) {
                    ev.priority = 0;
                }
                ev.bonusPriority = 0;
                if (ev.type == "DailyQuest") {
                    ev.displayMode = "japan";
                    ev.deadlineMoment = nowMoment.clone().endOf("day");
                    ev.current = "";
                    ev.deadline = "";
                    ev.japanend = "";
                    ev.localend = "";
                    res[ev.column ? ev.column : 0].push(ev);
                    continue;
                }

                ev.expiration = 0;
                ev.nextTimer = "";
                ev.normalTimerIndex = 0;

                if (!ev.image) {
                    ev.image = thumbnailMap.none;
                } else {
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

                evExtra = this.toDurationObject(ev.keepAfterFinished);

                for (e = 0; e < ev.timers.length; e++) {
                    timer = ev.timers[e];
                    timer.visible = true;
                    timer.progress = 0;
                    timer.displayMode = "japan";
                    
                    var extraDays = 0;

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
                            ev.normalTimerIndex = e;
                        }
                    } else {
                        timer.type = "normal";
                    }

                    var strFormat = "ddd, MMM Do, H:mm";
                    startMoment = moment.tz(timer.start, "MMM D YYYY, H:mm", "Asia/Tokyo");
                    endMoment = moment.tz(timer.end, "MMM D YYYY, H:mm", "Asia/Tokyo");
                    if (extraDays > 0) {
                        endMoment = endMoment.add(extraDays, "days");
                    }

                    timer.rawStart = startMoment._d.getTime();
                    timer.rawEnd  = endMoment._d.getTime();

                    var marks = [];
                    if (timer.hasOwnProperty("markers")) {
                        for (var m in timer.markers) {
                            var markTime = moment.tz(timer.markers[m], "MMM D YYYY, H:mm", "Asia/Tokyo");
                            var rawTime = markTime._d.getTime();
                            var ma = {
                                label: m,
                                jptime: markTime.format(strFormat),
                                localtime: markTime.tz(localZone).format(strFormat),
                                rawtime: rawTime,
                                position: (rawTime - timer.rawStart) / (timer.rawEnd - timer.rawStart) * 100 + "%",
                                color: "#dc3545",
                                started: false,
                                tip: ""
                            };
                            marks.push(ma);
                        }
                        timer.nextMarker = "";
                    }
                    timer.markersInfo = marks;



                    // Timer expiration = End Time + Timer's extra time
                    timerExtra = this.toDurationObject(timer.keepAfterFinished);
                    exp = endMoment.clone().add(timerExtra);
                    timer.expiration = exp._d.getTime();

                    // Event expiration = Last Timer's Expiration + Event's extra time
                    exp = exp.add(evExtra)._d.getTime();
                    if (exp > ev.expiration) {
                        ev.expiration = exp;
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
                }
                res[ev.column ? ev.column : 0].push(ev);
            }

            // Sort timers and remove empty columns
            for (i = res.length; i--; ) {
                if (res[i].length == 0) {
                    res.splice(i, 1);
                } else {
                    res[i] = res[i];
                }
            }

            this.timersData = res;
        },
        updateTimerData: function() {
            var c, t, e, ev, col, timer, allExpired, nextDate, nextType, lastDate, deadline, data = this.timersData;
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
                        deadline = ev.deadlineMoment;
                        if (deadline.date() != nowMoment.date()) {
                            deadline = ev.deadlineMoment = nowMoment.clone().endOf("day");
                        }
                        ev.current = nowMoment.format("dddd").toLowerCase();

                        ev.deadline = this.remainingTimeString(now, deadline._d.getTime(), 2);
                        ev.japanend = deadline.format("MMM Do, H:mm");
                        ev.localend = deadline.clone().tz(localZone).format("MMM Do, H:mm");

                        continue;
                    }
                    allExpired = true;
                    nextDate = Infinity;
                    nextType = "finished";
                    lastDate = 0;
                    for (t = 0; t < ev.timers.length; t++) { // Check each individual timer
                        timer = ev.timers[t];

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
                                // Adds priority if timer is active
                                if (timer.extraPriority) {
                                    ev.bonusPriority += timer.extraPriority;
                                }
                                timer.dateDisplay.barLabel = "Ends in " + this.remainingTimeString(now, timer.rawEnd, 2) + (timer.type == "weekend" ? "" : " (" + timer.progress.toFixed(1) + "%)");
                                timer.dateDisplay.badgeEnd = "Ends in " + this.remainingTimeString(now, timer.rawEnd, 5);
                                timer.dateDisplay.badgeStart = "Started " + this.remainingTimeString(now, timer.rawStart, 5) + " ago";
                            }

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
                    if (nextType == "finished") {
                        // nextDate = lastDate;
                        ev.nextTimer = "Finished " + this.remainingTimeString(now, lastDate, 2) + " ago";
                    } else if (nextType == "upcoming") {
                        ev.nextTimer = "Next date starts in " + this.remainingTimeString(now, nextDate, 2);
                    } else {
                        ev.nextTimer = "Current date finishes in " + this.remainingTimeString(now, nextDate, 2);
                    }
                    
                    if (changeThumbs && ev.imageList) {
                        ev.imageStep++;
                        if (ev.imageStep >= ev.imageList.length) {
                            ev.imageStep = 0;
                        }
                        ev.image = ev.imageList[ev.imageStep];
                    }

                    // Check if event should be visible
                    if (allExpired && now >= ev.expiration && (typeof ev.keepAfterFinished != "boolean" || ev.keepAfterFinished == false)) {
                        ev.visible = false;
                    }
                }
                
                col.sort(this.prioritySort);
            }
        },
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
            if (s.length == 0) {
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
        this.buildTimerData(timerData);
        this.updateTimerData();
        this.updateClocks();
        setInterval(this.updateClocks, 1 * 1000);
    }
});

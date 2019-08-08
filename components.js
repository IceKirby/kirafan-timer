Vue.component("ev-content", {
    props: ["ev"],
    template: "<ev-content-dates v-if='ev.type == \"LoginDays\"' v-bind:ev='ev'></ev-content-dates> <ev-content-weekend v-else-if='ev.type == \"WeekendBoss\"' v-bind:ev='ev'></ev-content-weekend><div class='content' v-else> <normal-timer v-for='(t, index) in ev.timers' v-bind:timer='t' :key='index' v-if='t.visible'></normal-timer> </div>"
});

Vue.component("ev-content-dates", {
    props: ["ev"],
    template: "<div class='content dates'> <span class='date-next'>{{ ev.nextTimer }}</span><date-timer v-for='(t, index) in ev.timers' v-bind:timer='t' :key='index'></date-timer><div class='date-timer empty'></div><div class='date-timer empty'></div><div class='date-timer empty'></div><div class='date-timer empty'></div><div class='date-timer empty'></div><div class='date-timer empty'></div><div class='date-timer empty'></div> </div>"
});

Vue.component("date-timer", {
    props: ["timer"],
    template: "<div class='date-timer text-white' :class='{ \"bg-success\": timer.progress > 0, \"bg-danger\": timer.progress >= 100 }' v-tooltip:top='replaceStars(timer.name)' v-html='timer.displayMode == \"japan\" ? timer.dateDisplay.jpstart : timer.dateDisplay.localstart'></div>",
    methods: {
        replaceStars: function(str) {
            return Vue.filter('addStars')(str);
        }
    }
});

Vue.component("ev-content-weekend", {
    props: ["ev"],
    template: "<div class='content weekend'> <weekend-timer v-for='(t, index) in ev.timers' v-bind:timer='t' :key='index'></weekend-timer><div class='date-timer empty'></div><div class='date-timer empty'></div><normal-timer class='fullwidth' v-bind:timer='ev.timers[ev.normalTimerIndex]'></normal-timer></div>"
});

Vue.component("weekend-timer", {
    props: ["timer"],
    template: "<div v-if='timer.type == \"weekend\"' class='date-timer text-white' :class='{ \"bg-success\": timer.progress > 0, \"bg-danger\": timer.progress >= 100 }' v-tooltip:top='replaceStars(timer.name)'>{{ timer.dateDisplay.jpstart }} ~ {{timer.dateDisplay.jpend }}<br><small>{{timer.dateDisplay.barLabel}}</small></div>",
    methods: {
        replaceStars: function(str) {
            return Vue.filter('addStars')(str);
        }
    }
});

Vue.component("normal-timer", {
    props: ["timer"],
    template: "<div class='timer'><div class='label'><span>{{timer.name | addStars}} <span v-if='timer.info' class='info-icon' v-tooltip:top='replaceStars(timer.info)'>(?)</span> </span></div><div class='counters'> <div class='absolute'> <div class='starts'>{{ timer.displayMode == \"japan\" ? timer.dateDisplay.jpstart : timer.dateDisplay.localstart }}</div> <div class='ends'>{{ timer.displayMode == \"japan\" ? timer.dateDisplay.jpend : timer.dateDisplay.localend }}</div> </div> <timer-bar v-bind:timer='timer'></timer-bar></div><span class='mark-next' v-if='timer.nextMarker'>{{ timer.nextMarker }}</span></div>",
    methods: {
        replaceStars: function(str) {
            return Vue.filter('addStars')(str);
        }
    }
});


Vue.component("timer-bar", {
    props: ["timer"],
    template: "<div class='bar timerbar'><bar-badge :class='{ \"badge-success\": timer.progress > 0 }' :tip='timer.dateDisplay.badgeStart'>Start</bar-badge><bar-progress v-bind:timer='timer'></bar-progress><bar-badge :class='{ \"badge-danger\": timer.progress >= 100 }' :tip='timer.dateDisplay.badgeEnd'>End</bar-badge> </div>"
});

Vue.component("bar-badge", {
    props: ["tip"],
    template: "<span class='badge badge-pill badge-secondary' data-toggle='tooltip' v-tooltip:top='tip'><slot></slot></span>"
});
Vue.component("bar-progress", {
    props: ["timer"],
    template: "<div class='progress-holder position-relative'><bar-mark v-for='mark in timer.markersInfo' v-bind:mark='mark'></bar-mark><div class='progress position-relative'><div class='progress-bar' role='progressbar' v-bind:style='{ width: timer.progress + \"%\" }' :aria-valuenow='timer.progress' aria-valuemin='0' aria-valuemax='100'></div> <div class='bar-label-holder'><span>{{ timer.dateDisplay.barLabel }}</span></div></div></div>"
});

Vue.component("bar-mark", {
    props: ["mark"],
    template: "<img :src='mark.started ? \"imgs/marker-green.png\" : \"imgs/marker-red.png\"' class='bar-mark' data-toggle='tooltip' v-tooltip:top='mark.tip' v-bind:style='{ left: mark.position }'>"
});


Vue.component("ev-thumb", {
    props: ["ev"],
    template: "<div class='thumb'><transition name='thumb-change'><img :src='currentImg' :key='currentImg' class='img-fluid'></transition> <div class='type'><span>{{ ev.type | typeName }}</span></div> </div>",
    filters: {
        typeName: function (value) {
            switch (value.toLowerCase()) {
                case "logindays":
                    return "Login Bonus";
                case "weekendboss":
                    return "Weekend Boss";
                default:
                    return value.charAt(0).toUpperCase() + value.slice(1);
            }
        }
    },
    data: function() {
        return {
            currentImg: "",
            currentCount: 0,
            timer: null
        };
    },
    methods: {
        rotateThumb: function() {
            this.currentCount += 1;
            if (this.currentCount >= this.ev.image.length) {
                this.currentCount = 0;
            }
            this.currentImg = this.ev.image[this.currentCount];
        }
    },
    created: function() {
        if (Array.isArray(this.ev.image)) {
            this.currentCount = Math.floor(Math.random() * this.ev.image.length);
            this.currentImg = this.ev.image[this.currentCount];
            timer = setInterval(this.rotateThumb, 7 * 1000);
        } else {
            this.currentImg = this.ev.image;
        }
    }
});

Vue.component("ev-title", {
    props: ["ev"],
    template: "<div class='title'> <ev-title-line v-for='(line, index) in ev.title' :key='index' v-bind:index='index'>{{ line | addStars }}</ev-title-line> </div>"
});

Vue.component("ev-title-line", {
    props: ["index"],
    template: "<div class='line' v-bind:class='{ header: index == 0 }'><span><slot></slot></span></div>"
});

Vue.component("ev-header", {
    props: ["ev"],
    template: "<div class='topbar' v-bind:class='ev.type | toptype'><ev-thumb v-bind:ev='ev'></ev-thumb><ev-title v-bind:ev='ev'></ev-title></div>",
    filters: {
        toptype: function (value) {
            value = value.toLowerCase();
            if (["maintenance", "event", "mission", "gacha"].indexOf(value) == -1) {
                return "top-other";
            } else {
                return "top-" + value;
            }
        }
    }
});

Vue.component("daily-quest-bar", {
    props: ["ev"],
    template: "<div class='daily-bar'><div class='title'><div class='line header'><span>{{ev.title}}</span></div></div><div class='days-holder'><div class='daily-bar-item' :class='{active: index == ev.current }' v-for='(el, index) in ev.days' :key='index'><div><img class='daily-icon-img' v-for='icon in el.elements' :src='icon | elementImage' :title='icon' data-toggle='tooltip' v-tooltip:top='icon' ></div>{{el.short}}</div></div><div class='daily-timer'>Ends in {{ ev.deadline }} (at {{ ev.displayMode == \"japan\" ? ev.japanend : ev.localend }})</div></div>"
});
Vue.component("event-group-content", {
    props: ["ev"],
    template: "<div><ev-header v-bind:ev='ev'></ev-header v-bind:ev='ev'><ev-content v-bind:ev='ev'></ev-content></div>"
});

Vue.component("event-group", {
    props: ["ev"],
    template: "<div class='event-group' v-if='ev.visible'><daily-quest-bar v-bind:ev='ev' v-if='ev.type == \"DailyQuest\"'></daily-quest-bar><event-group-content v-bind:ev='ev' v-else></event-group-content></div>"
});

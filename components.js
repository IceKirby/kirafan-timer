Vue.component("ev-charicon", {
    props: ["data"],
    template: `<div class='char-icon' data-toggle='tooltip' v-tooltip:top='tip'>
        <img class='char-icon-img' :src='data.img'>
        <img class='char-icon-rarity' :src='charFrame'>
        <img class='char-icon-element' :src='charElement'>
        <img class='char-icon-job' :src='charJob'>
    </div>`,
    computed: {
        charFrame: function() {
            return "imgs/frame" + this.data.rarity + ".png";
        },
        charJob: function() {
            return "imgs/Class_" + this.cap(this.data.job) + ".png";
        },
        charElement: function() {
            return "imgs/Attribute_" + this.cap(this.data.element) + ".png";
        },
        tip: function() {
            return `${this.data.rarity}★ ${this.data.name}<br>
            ${this.cap(this.data.element)} ${this.cap(this.data.job)}<br>
            ${this.data.series}`;
        }
    },
    methods: {
        cap: function(str) {
            return str[0].toUpperCase() + str.substr(1);
        }
    }
});

Vue.component("ev-content", {
    props: ["ev"],
    template: `<ev-content-dates v-if='ev.type == \"LoginDays\"' v-bind:ev='ev'></ev-content-dates>
    <ev-content-weekend v-else-if='ev.type == \"WeekendBoss\"' v-bind:ev='ev'></ev-content-weekend>
    <div class='content' v-else>
        <normal-timer v-for='(t, index) in ev.timers' v-bind:timer='t' :key='index' v-if='t.visible'></normal-timer>
    </div>`
});

Vue.component("ev-content-dates", {
    props: ["ev"],
    template: `<div class='content dates'>
        <span class='date-next'>{{ ev.nextTimer }}</span>
        <date-timer v-for='(t, index) in ev.timers' v-bind:timer='t' :key='index'></date-timer>
        <div class='date-timer empty'></div>
        <div class='date-timer empty'></div>
        <div class='date-timer empty'></div>
        <div class='date-timer empty'></div>
        <div class='date-timer empty'></div>
        <div class='date-timer empty'></div>
        <div class='date-timer empty'></div>
    </div>`
});

Vue.component("date-timer", {
    props: ["timer"],
    template: `<div class='date-timer text-white' :class='{ \"bg-success\": timer.progress > 0, \"bg-danger\": timer.progress >= 100 }' v-tooltip:top='replaceStars(timer.name)' v-html='startTime'></div>`,
    methods: {
        replaceStars: function(str) {
            return Vue.filter('addStars')(str);
        }
    },
    computed: {
        startTime: function() {
            return this.timer.displayMode == "japan" ? this.timer.dateDisplay.jpstart : this.timer.dateDisplay.localstart;
        }
    }
});

Vue.component("ev-content-weekend", {
    props: ["ev"],
    template: `<div class='content weekend'>
        <weekend-timer v-for='(t, index) in ev.timers' v-bind:timer='t' :key='index'></weekend-timer>
        <div class='date-timer empty'></div>
        <div class='date-timer empty'></div>
        <normal-timer class='fullwidth' v-bind:timer='ev.timers[ev.normalTimerIndex]'></normal-timer>
    </div>`
});

Vue.component("weekend-timer", {
    props: ["timer"],
    template: `<div v-if='timer.type == \"weekend\"' class='date-timer text-white' :class='{ \"bg-success\": timer.progress > 0, \"bg-danger\": timer.progress >= 100 }' v-tooltip:top='replaceStars(timer.name)'>
        {{ timer.dateDisplay.jpstart }} ~ {{timer.dateDisplay.jpend }}
        <br>
        <small>{{timer.dateDisplay.barLabel}}</small>
    </div>`,
    methods: {
        replaceStars: function(str) {
            return Vue.filter('addStars')(str);
        }
    }
});

Vue.component("normal-timer", {
    props: ["timer"],
    template: `<div class='timer'>
        <div class='label' v-if='timer.name'>
            <span>{{timer.name | addStars}} <span v-if='timer.info' class='info-icon' v-tooltip:top='replaceStars(timer.info)'>(?)</span> </span>
        </div>
        <summon-banner v-for='(banner, index) in timer.banners' :banner='banner'></summon-banner>
        <div class='counters'>
            <timer-bar v-bind:timer='timer'></timer-bar>
        </div>
        <span class='mark-next' v-if='timer.nextMarker'>{{ timer.nextMarker }}</span>
    </div>`,
    methods: {
        replaceStars: function(str) {
            return Vue.filter('addStars')(str);
        }
    }
});

Vue.component("summon-banner", {
    data: function() {
        return {
            visible: false
        };
    },
    props: ["banner"],
    template: `<div class='summon-banner' :class='{ visible: visible }'>
        <div class='label' :class='{ hascards: banner.cards }' v-on:click='toggleVisibility()'>
            <span><span class="toggle-icon"></span>{{ replaceStars(banner.title) }}<span v-if='banner.desc'>: {{ replaceStars(banner.desc) }}</span></span>
        </div>
        <transition-collapse-height>
            <div class='banner-cards' v-show='visible'>
                <ev-charicon v-for='(card, index) in banner.cards' :data='card'></ev-charicon>
                <span class='banner-info' v-if='banner.info'>{{ replaceStars(banner.info) }}</span>
            </div>
        </transition-collapse-height>
    </div>`,
    methods: {
        toggleVisibility: function() {
            if (!this.banner.cards) {
                return;
            }
            this.visible = !this.visible;
        },
        replaceStars: function(str) {
            return Vue.filter('addStars')(str);
        }
    }
});


Vue.component("timer-bar", {
    props: ["timer"],
    template: `<div class='bar timerbar'>
        <bar-badge :class='{ \"badge-success\": timer.progress > 0 }' :tip='timer.dateDisplay.badgeStart' v-html='startTime'></bar-badge>
        <bar-progress v-bind:timer='timer'></bar-progress>
        <bar-badge :class='{ \"badge-danger\": timer.progress >= 100 }' :tip='timer.dateDisplay.badgeEnd' v-html='endTime'></bar-badge>
    </div>`,
    computed: {
        startTime: function() {
            return this.timer.displayMode == "japan" ? this.timer.dateDisplay.jpstart : this.timer.dateDisplay.localstart;
        },
        endTime: function() {
            return this.timer.displayMode == "japan" ? this.timer.dateDisplay.jpend : this.timer.dateDisplay.localend;
        }
    }
});

Vue.component("bar-badge", {
    props: ["tip"],
    template: `<span class='badge badge-pill badge-secondary' data-toggle='tooltip' v-tooltip:top='tip'><slot></slot></span>`
});
Vue.component("bar-progress", {
    props: ["timer"],
    template: `<div class='progress-holder position-relative'>
        <bar-mark v-for='mark in timer.markersInfo' v-bind:mark='mark'></bar-mark>
        <div class='progress position-relative'>
            <div class='progress-bar' role='progressbar' v-bind:style='{ width: timer.progress + \"%\" }' :aria-valuenow='timer.progress' aria-valuemin='0' aria-valuemax='100'></div>
            <div class='bar-label-holder'>
                <span>{{ timer.dateDisplay.barLabel }}</span>
            </div>
        </div>
    </div>`
});

Vue.component("bar-mark", {
    props: ["mark"],
    template: `<img :src='markImg' class='bar-mark' data-toggle='tooltip' v-tooltip:top='mark.tip' v-bind:style='{ left: mark.position }'>`,
    computed: {
        markImg: function() {
            let color = this.mark.started ? "green" : "red";
            return "imgs/marker-" + this.mark.type + "-" + color + ".png";
        }
    }
});


Vue.component("ev-thumb", {
    props: ["ev"],
    template: `<div class='thumb'>
        <transition name='thumb-change'>
            <img :src='ev.image' :key='ev.image' class='img-fluid'>
        </transition>
        <div class='type'>
            <span>{{ ev.type | typeName }}</span>
        </div>
    </div>`,
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
    }
});

Vue.component("ev-title", {
    props: ["ev"],
    template: `<div class='title'>
        <ev-title-line v-for='(line, index) in ev.title' :key='index' v-bind:index='index'>{{ line | addStars }}</ev-title-line>
    </div>`
});

Vue.component("ev-title-line", {
    props: ["index"],
    template: `<div class='line' v-bind:class='{ header: index == 0 }'><span><slot></slot></span></div>`
});

Vue.component("ev-header", {
    props: ["ev"],
    template: `<div class='topbar' v-bind:class='ev.type | toptype'>
        <ev-thumb v-bind:ev='ev'></ev-thumb>
        <ev-title v-bind:ev='ev'></ev-title>
    </div>`,
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
    template: `<div class='daily-bar'>
        <div class='title'>
            <div class='line header'>
                <span>{{ev.title}}</span>
            </div>
        </div>
        <div class='days-holder'>
            <div class='daily-bar-item' :class='{active: index == ev.current }' v-for='(el, index) in ev.days' :key='index'>
                <div><img class='daily-icon-img' v-for='icon in el.elements' :src='icon | elementImage' :title='icon' data-toggle='tooltip' v-tooltip:top='icon' ></div>
                {{el.short}}
            </div>
        </div>
        <div class='daily-timer'>Ends in {{ ev.deadline }} (at {{ ev.displayMode == \"japan\" ? ev.japanend : ev.localend }})</div>
    </div>`
});
Vue.component("event-group-content", {
    props: ["ev"],
    template: `<div>
        <ev-header v-bind:ev='ev'></ev-header>
        <ev-content v-bind:ev='ev'></ev-content>
    </div>`
});

Vue.component("event-group", {
    props: ["ev"],
    template: `<div class='event-group' v-if='ev.visible'>
        <daily-quest-bar v-bind:ev='ev' v-if='ev.type == \"DailyQuest\"'></daily-quest-bar>
        <event-group-content v-bind:ev='ev' v-else></event-group-content>
    </div>`
});

// Source: https://stackoverflow.com/a/55137929
Vue.component('transition-collapse-height', {
  template: `<transition
    enter-active-class="enter-active"
    leave-active-class="leave-active"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave">
        <slot></slot>
  </transition>`,
  methods: {
    /**
     * @param {HTMLElement} element
     */
    beforeEnter(element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.height = '0px';
        }

        element.style.display = null;
      });
    },
    /**
     * @param {HTMLElement} element
     */
    enter(element) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.height = `${element.scrollHeight}px`;
        });
      });
    },
    /**
     * @param {HTMLElement} element
     */
    afterEnter(element) {
      element.style.height = null;
    },
    /**
     * @param {HTMLElement} element
     */
    beforeLeave(element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.height = `${element.offsetHeight}px`;
        }
      });
    },
    /**
     * @param {HTMLElement} element
     */
    leave(element) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.height = '0px';
        });
      });
    },
    /**
     * @param {HTMLElement} element
     */
    afterLeave(element) {
      element.style.height = null;
    },
  },
});

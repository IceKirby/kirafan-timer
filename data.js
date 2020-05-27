var alertMessages = [];
var timerData = [
    {
        type: "DailyQuest",
        title: "Daily Quests",
        priority: 10,
        days: {
            "sunday": { elements: ["Sun", "Priest", "Mage", "Alchemist"], short:"Sun" },
            "monday": { elements: ["Moon", "Gold", "Warrior"], short:"Mon" },
            "tuesday": { elements: ["Fire", "Knight", "Priest"], short:"Tue" },
            "wednesday": { elements: ["Water", "Gold", "Mage"], short:"Wed" },
            "thursday": { elements: ["Wind", "Warrior", "Alchemist"], short:"Thu" },
            "friday": { elements: ["Gold", "Priest", "Mage"], short:"Fri" },
            "saturday": { elements: ["Earth", "Warrior", "Knight"], short:"Sat" }
        }
    },
    {
        type: "Maintenance",
        title: [
            "Maintenance",
            "Event Preparation",
            "Summon Renovation"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "May 28 2020, 16:00",
                end: "May 28 2020, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Onee-chans 11",
            "お姉ちゃんズ１１",
            "Siscon Event"
        ],
        "image": [
            "https://i.imgur.com/XLrdgCH.png",
            "https://i.imgur.com/9oifevq.png",
            "https://i.imgur.com/LsmaBQO.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "May 14 2020, 17:00",
                "end": "May 28 2020, 15:59",
                "markers": {
                    "Extra Chapter 1": "May 20 2020, 0:00",
                    "Extra Chapter 2": "May 21 2020, 0:00",
                    "Extra Chapter 3": "May 22 2020, 0:00",
                    "Extra Chapter 4": "May 23 2020, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Melee Quest",
                "start": "May 16 2020, 17:00",
                "end": "May 28 2020, 15:59"
            },
            {
                "name": "EX Quest",
                "start": "May 19 2020, 17:00",
                "end": "May 28 2020, 15:59"
            },
            {
                "name": "Event Shop",
                "start": "May 14 2020, 17:00",
                "end": "June 4 2020, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "The Great Sports Festival & The Goddess' Holy Grail",
            "大運動会と女神の聖杯",
            "Sports Festival 2020 Event"
        ],
        "image": [
            "https://i.imgur.com/g3U0JRe.png",
            "https://i.imgur.com/Sb95tZL.png",
            "https://i.imgur.com/I8KWxUF.png",
            "https://i.imgur.com/CldfjiV.png",
            "https://i.imgur.com/BNoYbfW.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "May 28 2020, 17:00",
                "end": "June 9 2020, 15:59",
                "markers": {
                    "Season 2": "May 30 2020, 17:00",
                    "Season 3": "June 1 2020, 17:00",
                    "Extra Chapter": "June 3 2020, 17:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "June 3 2020, 17:00",
                "end": "June 9 2020, 15:59"
            },
            {
                "name": "Event Shop",
                "start": "May 28 2020, 17:00",
                "end": "June 16 2020, 13:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "The Maid Saw! ~Flaky Incident in The Blonde Manor~ Missions",
            "メイドは見た！～金髪館怪人事件～",
            "Maid Event missions"
        ],
         "image": [
            "https://i.imgur.com/ukwEJsF.png",
            "https://i.imgur.com/tFtYdXo.png",
            "https://i.imgur.com/uFpQf73.png",
            "https://i.imgur.com/lrCTyTr.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "April 23 2020, 17:00",
                "end": "May 14 2020, 23:59",
                "markers": {
                    "Mission Set 2": "April 29 2020, 0:00"
                },
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "The Great Sports Festival & The Goddess' Holy Grail Missions",
            "大運動会と女神の聖杯",
            "Sports Festival 2020 Event missions"
        ],
        "image": [
            "https://i.imgur.com/g3U0JRe.png",
            "https://i.imgur.com/Sb95tZL.png",
            "https://i.imgur.com/I8KWxUF.png",
            "https://i.imgur.com/CldfjiV.png",
            "https://i.imgur.com/BNoYbfW.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "May 28 2020, 17:00",
                "end": "June 9 2020, 23:59",
                "markers": {
                    "Mission Set 2": "June 3 2020, 0:00"
                },
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Onee-chans 11 Missions",
            "お姉ちゃんズ１１",
            "Siscon Event missions"
        ],
        "image": [
            "https://i.imgur.com/XLrdgCH.png",
            "https://i.imgur.com/9oifevq.png",
            "https://i.imgur.com/LsmaBQO.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "May 14 2020, 17:00",
                "end": "May 28 2020, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Onee-chans 11 Summon",
            "お姉ちゃんズ１１ピックアップ召喚",
            "Siscon Event summon"
        ],
        "image": [
            "https://i.imgur.com/XLrdgCH.png",
            "https://i.imgur.com/9oifevq.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "First Half: Featuring 5* Nishimikado Tami, 4* Takayama Haruka, 4* Sonoda Yuu",
                "start": "May 14 2020, 17:00",
                "end": "May 28 2020, 15:59",
                "extraPriority": 6
            },
            {
                "name": "Second Half: Featuring 5* Thomas Emily, 4* Thomas Claire, 4* Thomas Emily",
                "start": "May 18 2020, 0:00",
                "end": "May 28 2020, 15:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "The Great Sports Festival & The Goddess' Holy Grail Summon",
            "大運動会と女神の聖杯ピックアップ召喚",
            "Sports Festival 2020 Event summon"
        ],
        "image": [
            "https://i.imgur.com/g3U0JRe.png",
            "https://i.imgur.com/Sb95tZL.png",
            "https://i.imgur.com/I8KWxUF.png",
            "https://i.imgur.com/CldfjiV.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "White Team: Featuring 5* Shamiko [Sports Festival], 5* Kirin [Sports Festival]",
                "start": "May 28 2020, 17:00",
                "end": "June 9 2020, 15:59",
                "extraPriority": 6
            },
            {
                "name": "Red Team: Featuring 5* Karen [Sports Festival], 5* Tamaki [Sports Festival]",
                "start": "May 28 2020, 17:00",
                "end": "June 9 2020, 15:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Recommended Theme Limited-time Step-up Summon Part 1 (Onee-chan)",
            "期間限定いちおしテーマ！おまけ付き10回召喚 第1弾",
            "Receive a Random 5* Ticket on 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period: Featuring 5* Isami [New Year], 5* Irokawa Ruki, 5* Hirasawa Yui, 5* Yui [Swimsuit], 5* Mocha, 5* Yoshida Yuuko, 5* Leine",
                start: "May 14 2020, 17:00",
                end: "May 21 2020, 16:59",
                info: "Also 4* Oomiya Isami, 4* Natsume Nina, 4* Irokawa Ruki, 4* Thomas Emily",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "May 14 2020, 17:00",
                end: "May 28 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Recommended Theme Limited-time 5* Ticket Summon Part 1 (Onee-chan)",
            "いちおしテーマ第1弾★5キャラクター確定召喚チケット",
            "240 Paid Gems for a 10x Summon + Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                start: "May 14 2020, 17:00",
                end: "May 21 2020, 16:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "May 14 2020, 17:00",
                end: "May 28 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Recommended themed Limited-time Step-up Summon Part 2 (Imouto)",
            "期間限定いちおしテーマ！おまけ付き10回召喚 第2弾",
            "Receive a Random 5* Ticket on 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period: Featuring 5* Oomiya Shinobu, 5* Oomiya Shinobu, 5* Natsume Nono, 5* Sonoda Yuu, 5* Sakuranomiya Maika, 5* Maika [Swimsuit], 5* Sekiya Naru, 5* Claire [Halloween], 5* Cocoa, 5* Cocoa [Christmas], 5* Lamp, 5* Lamp [Swimsuit]",
                start: "May 21 2020, 17:00",
                end: "May 28 2020, 15:59",
                info: "Also 4* Oomiya Shinobu, 4* Natsume Nono, 4* Nono [Halloween], 4* Sonoda Yuu, 4* Sakuranomiya Maika, 4* Maika [Doll's Festival], 4* Irokawa Miki, 4* Thomas Claire",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "May 21 2020, 17:00",
                end: "June 4 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Recommended Theme Limited-time 5* Ticket Summon Part 2 (Imouto)",
            "いちおしテーマ第1弾★5キャラクター確定召喚チケット",
            "240 Paid Gems for a 10x Summon + Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                start: "May 21 2020, 17:00",
                end: "May 28 2020, 15:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "May 21 2020, 17:00",
                end: "June 4 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "900 Days Celebration Choosable 5* Summon Ticket",
            "リリース900日記念★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                start: "May 28 2020, 17:00",
                end: "June 10 2020, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "May 28 2020, 17:00",
                end: "June 17 2020, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "900 Days Celebration Login Bonus",
            "900日記念ログインボーナス",
            "Log in on 10 days for up to 300 Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "May 28 2020, 17:00",
                "end": "June 10 2020, 23:59"
            }
        ]
    },
    {
        type: "LoginDays",
        title: [
            "Tamayomi participation Login Bonus",
            "球詠参戦決定記念ログインボーナス",
            "20 Gems on days the anime airs"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Episode 1",
                date: "April 1 2020",
                days: 2
            },
            {
                name: "Episode 2",
                date: "April 8 2020",
                days: 2
            },
            {
                name: "Episode 3",
                date: "April 15 2020",
                days: 2
            },
            {
                name: "Episode 4",
                date: "April 22 2020",
                days: 2
            },
            {
                name: "Episode 5",
                date: "April 29 2020",
                days: 2
            },
            {
                name: "Episode 6",
                date: "May 6 2020",
                days: 2
            },
            {
                name: "Episode 7",
                date: "May 13 2020",
                days: 2
            },
            {
                name: "Episode 8",
                date: "May 20 2020",
                days: 2
            },
            {
                name: "Episode 9",
                date: "May 27 2020",
                days: 2
            },
            {
                name: "Episode 10",
                date: "June 3 2020",
                days: 2
            },
            {
                name: "Episode 11",
                date: "June 10 2020",
                days: 2
            },
            {
                name: "Episode 12",
                date: "June 17 2020",
                days: 2
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Daily Quests Half Stamina Campaign",
            "曜日クエストスタミナ半減キャンペーン",
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "January 20 2020, 0:00",
                "end": "January 30 2020, 13:59"
            }
        ]
    },
    {
        type: "WeekendBoss",
        title: [
            "May Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/8vVU0Ot.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "May 2 2020, 0:00",
                end: "May 3 2020, 23:59"
            },
            {
                name: "Weekend 2",
                start: "May 9 2020, 0:00",
                end: "May 10 2020, 23:59"
            },
            {
                name: "Weekend 3",
                start: "May 16 2020, 0:00",
                end: "May 17 2020, 23:59"
            },
            {
                name: "Weekend 4",
                start: "May 23 2020, 0:00",
                end: "May 24 2020, 23:59"
            },
            {
                name: "Weekend 5",
                start: "May 30 2020, 0:00",
                end: "May 31 2020, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "May 2 2020, 0:00",
                end: "June 5 2020, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "WeekendBoss",
        title: [
            "June Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/zso90Ea.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "June 6 2020, 0:00",
                end: "June 7 2020, 23:59"
            },
            {
                name: "Weekend 2",
                start: "June 13 2020, 0:00",
                end: "June 14 2020, 23:59"
            },
            {
                name: "Weekend 3",
                start: "June 20 2020, 0:00",
                end: "June 21 2020, 23:59"
            },
            {
                name: "Weekend 4",
                start: "June 27 2020, 0:00",
                end: "June 28 2020, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "June 6 2020, 0:00",
                end: "July 3 2020, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Hinamatsuri Room Decorations",
            "ヒナ祭り限定のルームアイテム"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "February 28 2020, 17:00",
                end: "March 13 2020, 13:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "900 Days Celebration Special Gems Set",
            "お得な星彩石セット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "May 28 2020, 17:00",
                "end": "June 10 2020, 23:59"
            }
        ]
    }
];

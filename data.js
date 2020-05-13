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
                start: "May 14 2020, 16:00",
                end: "May 14 2020, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Rerun - Sansha Sanyou's Casual Trip",
            "復刻・三者三葉ぶらり旅",
            "Sansha Sanyou event re-run"
        ],
        "image": [
            "https://i.imgur.com/tf9WPfT.png",
            "https://i.imgur.com/HTYjMXA.png",
            "https://i.imgur.com/F5NOKFT.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "April 14 2020, 17:00",
                "end": "April 23 2020, 11:59",
                "markers": {
                    "Extra Chapter 1": "April 16 2020, 0:00",
                    "Extra Chapter 2": "April 17 2020, 0:00",
                    "Extra Chapter 3": "April 18 2020, 0:00",
                    "Extra Chapter 4": "April 19 2020, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "April 14 2020, 17:00",
                "end": "April 23 2020, 11:59"
            },
            {
                "name": "EX Quest",
                "start": "April 15 2020, 17:00",
                "end": "April 23 2020, 11:59"
            },
            {
                "name": "Event Shop",
                "start": "April 14 2020, 17:00",
                "end": "April 30 2020, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "The Maid Saw! ~Flaky Incident in The Blonde Manor~",
            "メイドは見た！～金髪館怪人事件～",
            "Maid Event"
        ],
         "image": [
            "https://i.imgur.com/ukwEJsF.png",
            "https://i.imgur.com/tFtYdXo.png",
            "https://i.imgur.com/uFpQf73.png",
            "https://i.imgur.com/lrCTyTr.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "April 23 2020, 17:00",
                "end": "May 14 2020, 15:59",
                "markers": {
                    "Season 2": "April 29 2020, 0:00",
                    "Extra Chapter 1": "May 7 2020, 0:00",
                    "Extra Chapter 2": "May 8 2020, 0:00",
                    "Extra Chapter 3": "May 9 2020, 0:00",
                    "Extra Chapter 4": "May 10 2020, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "April 29 2020, 0:00",
                "end": "May 14 2020, 15:59"
            },
            {
                "name": "EX Quest",
                "start": "May 1 2020, 17:00",
                "end": "May 14 2020, 15:59"
            },
            {
                "name": "Super EX Quest",
                "start": "May 1 2020, 17:00",
                "end": "May 14 2020, 15:59"
            },
            {
                "name": "Event Shop",
                "start": "April 23 2020, 17:00",
                "end": "May 21 2020, 13:59",
                "makers": {
                    "Part 2": "April 29 2020, 0:00"
                }
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
        "type": "Gacha",
        "title": [
            "The Maid Saw! ~Flaky Incident in The Blonde Manor~ Summon",
            "メイドは見た！～金髪館怪人事件～ピックアップ召喚",
            "Maid Event summon"
        ],
         "image": [
            "https://i.imgur.com/ukwEJsF.png",
            "https://i.imgur.com/tFtYdXo.png",
            "https://i.imgur.com/uFpQf73.png",
            "https://i.imgur.com/lrCTyTr.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Part 1: Featuring 5* Hifumi [Maid], 5* Yutaka [Maid]",
                "start": "April 23 2020, 17:00",
                "end": "May 14 2020, 15:59",
                "extraPriority": 6
            },
            {
                "name": "Part 2: Featuring 5* Cork [Maid], 5* Hizume [Maid]",
                "start": "April 29 2020, 0:00",
                "end": "May 14 2020, 15:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kiniro Mosaic Limited-time Summon",
            "きんいろモザイク 期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/cfdVuJe.png",
            "https://i.imgur.com/A4qtaHG.png",
            "https://i.imgur.com/HCouEl3.png",
            "https://i.imgur.com/1EKjsPt.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Karen [Foreign Magician], 5* Alice [New Year], 5* Aya [Valentine], 5* Youko [Sports Meeting]",
                "start": "April 27 2020, 17:00",
                "end": "May 4 2020, 16:59",
                "info": "Also 3* and 4* characters from Kiniro Mosaic",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Alchemist only Summon",
            "アルケミスト限定キャラクター召喚"
        ],
        "image": [
            "https://i.imgur.com/t2rB9A6.png",
            "https://i.imgur.com/jM4VN9h.png",
            "https://i.imgur.com/TQmiGMn.png",
            "https://i.imgur.com/XVYlX88.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Cork, 5* Alice Cartelet, 5* Irokawa Ruki, 5* Machiko Ryou",
                "start": "May 4 2020, 17:00",
                "end": "May 11 2020, 16:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kiniro Mosaic Choosable 5* Ticket Summon",
            "きんいろモザイク ★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                start: "April 27 2020, 17:00",
                end: "May 4 2020, 16:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "April 27 2020, 17:00",
                end: "May 11 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Random 5* Summon Ticket Summon",
            "★5確定チケット引換券付き！有償限定10回召喚",
            "240 Paid Gems for 10x Summon + Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                start: "April 17 2020, 0:00",
                end: "April 24 2020, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "April 17 2020, 0:00",
                end: "May 1 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Golden Week Choosable 5* Ticket Summon",
            "ゴールデンウィーク★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                start: "April 25 2020, 0:00",
                end: "May 10 2020, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "April 25 2020, 0:00",
                end: "May 17 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Crea Mate Commu Celebration Step-up Summon",
            "クリエメイトコミュ実装記念！おまけ付き10回召喚",
            "Receive a Guaranteed Limited-time 5* Ticket on 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period: All 5* are Limited characters, limited 4* also included",
                start: "April 23 2020, 17:00",
                end: "April 28 2020, 23:59",
                extraPriority: 5,
                info: "Limited characters are only from Crea Craft series (Hidamari Sketch, Yuyushiki, A-Channel, Kiniro Mosaic, Gakkou Gurashi, Stella no Mahou, NEW GAME! and Urara Meirochou), other series' 4* and 3* will not include Limited characters."
            },
            {
                name: "Ticket Expiration",
                start: "April 23 2020, 17:00",
                end: "May 5 2020, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Golden Week Login Bonus",
            "ゴールデンウィークログインボーナス",
            "Log in on 10 days for up to 200 Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "April 25 2020, 0:00",
                "end": "May 10 2020, 23:59"
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
            "April Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/DgLc5yo.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "April 4 2020, 0:00",
                end: "April 5 2020, 23:59"
            },
            {
                name: "Weekend 2",
                start: "April 11 2020, 0:00",
                end: "April 12 2020, 23:59"
            },
            {
                name: "Weekend 3",
                start: "April 18 2020, 0:00",
                end: "April 19 2020, 23:59"
            },
            {
                name: "Weekend 4",
                start: "April 25 2020, 0:00",
                end: "April 26 2020, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "April 4 2020, 0:00",
                end: "May 1 2020, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
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
            "Golden Week Special Gems Set",
            "お得な星彩石セット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "April 25 2020, 0:00",
                end: "May 10 2020, 23:59"
            }
        ]
    }
];

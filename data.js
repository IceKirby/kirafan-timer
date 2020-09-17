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
            "Summon Renovation",
            "Version 2.2.4 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "September 10 2020, 16:00",
                end: "September 10 2020, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Operation: Love Love Travel",
            "ラブラブトラベル大作戦",
            "Acchi Kocchi Event"
        ],
        "image": [
            "https://i.imgur.com/I2ZWBH2.png",
            "https://i.imgur.com/mKTstzs.png",
            "https://i.imgur.com/6HebhMI.png",
            "https://i.imgur.com/0AnwVLl.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "September 10 2020, 17:00",
                "end": "September 29 2020, 15:59",
                "markers": {
                    "Extra Chapter 1": "September 19 2020, 0:00",
                    "Extra Chapter 2": "September 20 2020, 0:00",
                    "Extra Chapter 3": "September 21 2020, 0:00",
                    "Extra Chapter 4": "September 22 2020, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "September 12 2020, 17:00",
                "end": "September 29 2020, 15:59"
            },
            {
                "name": "EX Quest",
                "start": "September 16 2020, 17:00",
                "end": "September 29 2020, 15:59"
            },
            {
                "name": "Event Shop",
                "start": "September 10 2020, 17:00",
                "end": "October 6 2020, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Cardamom's Stile Warrior Training",
            "カルダモンのスティーレ武者修行",
            "Cardamom Mini-Event"
        ],
        "image": [
            "https://i.imgur.com/k7DTh8Y.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "September 19 2020, 0:00",
                "end": "September 29 2020, 15:59",
                "markers": {
                    "Chapter 2": "September 20 2020, 0:00",
                    "Chapter 3": "September 21 2020, 0:00",
                    "Chapter 4": "September 22 2020, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "September 19 2020, 0:00",
                "end": "September 29 2020, 15:59"
            },
            {
                "name": "Event Shop",
                "start": "September 19 2020, 0:00",
                "end": "October 6 2020, 13:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Operation: Love Love Travel Missions",
            "ラブラブトラベル大作戦",
            "Acchi Kocchi Event missions"
        ],
        "image": [
            "https://i.imgur.com/I2ZWBH2.png",
            "https://i.imgur.com/mKTstzs.png",
            "https://i.imgur.com/6HebhMI.png",
            "https://i.imgur.com/0AnwVLl.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "September 10 2020, 17:00",
                "end": "September 29 2020, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Cardamom's Stile Warrior Training Missions",
            "カルダモンのスティーレ武者修行",
            "Cardamom Mini-Event missions"
        ],
        "image": [
            "https://i.imgur.com/k7DTh8Y.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "September 19 2020, 0:00",
                "end": "September 29 2020, 15:59",
                "markers": {},
                "extraPriority": 1
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Operation: Love Love Travel Summon",
            "ラブラブトラベル大作戦ピックアップ召喚",
            "Acchi Kocchi Event summon"
        ],
        "image": [
            "https://i.imgur.com/I2ZWBH2.png",
            "https://i.imgur.com/mKTstzs.png",
            "https://i.imgur.com/6HebhMI.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "First Half: Featuring 5* Miniwa Tsumiki, 4* Haruno Hime",
                "start": "September 10 2020, 17:00",
                "end": "September 29 2020, 15:59",
                "extraPriority": 6
            },
            {
                "name": "Second Half: Featuring 5* Tokura Eiko, 4* Tokura Eiko",
                "start": "September 12 2020, 0:00",
                "end": "September 29 2020, 15:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Cardamom's Stile Warrior Training Summon",
            "カルダモンのスティーレ武者修行ピックアップ召喚",
            "Cardamom Mini-Event summon"
        ],
        "image": [
            "https://i.imgur.com/k7DTh8Y.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Cardamom",
                "start": "September 19 2020, 0:00",
                "end": "September 29 2020, 15:59",
                "extraPriority": 5
            }
        ]
    },
     {
        "type": "Gacha",
        "title": [
            "Slow Start Limited-time Summon",
            "スロウスタート期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/q2ysJH4.png",
            "https://i.imgur.com/jM0WuhZ.png",
            "https://i.imgur.com/4PM36MN.png",
            "https://i.imgur.com/UXVKI0Z.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Ichinose Hana (Sun Knight), 5* Momochi Tamate (Sun Alchemist), 5* Shion [Doll's Festival], 5* Enami Kiyose, 4* Eiko [Swimsuit]",
                "start": "September 12 2020, 17:00",
                "end": "September 18 2020, 16:59",
                "info": "Also 3* and 4* characters from Slow Start",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "1000  Days Celebration 10x Random 5* Summon Ticket",
            "★5確定チケット引換券10枚付き！有償限定10回召喚",
            "1000 Paid Gems for a 10x Summon + 10x Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                "start": "September 5 2020, 0:00",
                "end": "September 18 2020, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                "start": "September 5 2020, 0:00",
                "end": "September 25 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "1000  Days Celebration Choosable 5* Summon Ticket",
            "リリース1000日記念★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                "start": "September 5 2020, 0:00",
                "end": "September 18 2020, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                "start": "September 5 2020, 0:00",
                "end": "September 25 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Daily Kira-Kira Limited-time Summon",
            "1日1回期間限定きらきら召喚",
            "40 Paid Gems once per day for 3 summons, all 4* or above"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Includes Limited-time 4* and 5*",
                "start": "September 19 2020, 0:00",
                "end": "September 27 2020, 23:59",
                "extraPriority": 4
            }
        ]
    },
    {
        type: "Other",
        title: [
            "1000 Days Celebration Login Bonus",
            "1000日記念ログインボーナス",
            "Log in on 10 days for up to 300 Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "September 5 2020, 0:00",
                "end": "September 18 2020, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Silver Week Login Bonus",
            "1シルバーウィークログインボーナス",
            "Log in on 5 days for up to 100 Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "September 19 2020, 0:00",
                "end": "September 27 2020, 23:59"
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
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Main Quest Chapters 1~7 (Hard Mode) Half Stamina Campaign",
            "1～7章ハードモード消費スタミナ1/2",
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "September 10 2020, 17:00",
                "end": "September 18 2020, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Main Quest Chapters 1~8 (Normal Mode) Half Stamina Campaign",
            "メインクエストノーマルモード1～8章スタミナ1/2",
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "September 19 2020, 0:00",
                "end": "September 27 2020, 23:59"
            }
        ]
    },
    {
        type: "WeekendBoss",
        title: [
            "September Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/sVDXbrx.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "September 5 2020, 0:00",
                end: "September 6 2020, 23:59"
            },
            {
                name: "Weekend 2",
                start: "September 12 2020, 0:00",
                end: "September 13 2020, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "September 5 2020, 0:00",
                end: "October 2 2020, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Past Summer Room Decorations",
            "夏限定のルームアイテム"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "July 29 2020, 17:00",
                "end": "August 27 2020, 15:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "1000 Days Celebration Special Sales",
            "1000日記念セール"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Special Gem Sets",
                "start": "September 5 2020, 0:00",
                "end": "September 18 2020, 23:59"
            },
            {
                name: "Special Item Set",
                "start": "September 5 2020, 0:00",
                "end": "September 18 2020, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Acchi Kocchi Celebration Gem Set",
            "あっちこっち参戦記念！星彩石2,000個セット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Special Gem Set",
                "start": "September 10 2020, 17:00",
                "end": "September 29 2020, 15:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Silver Week Gem Set Sale",
            "シルバーウィークお得な星彩石セット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Special Gem Set",
                "start": "September 19 2020, 0:00",
                "end": "September 27 2020, 23:59"
            }
        ]
    }
];

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
            "Summon Renovation",
            "Event Preparation",
            "Version 1.16.2 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "April 25 2019, 14:00",
                end: "April 25 2019, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Ama Usa An's Ambition",
            "甘兎庵の野望",
            "Chiya & Sharo Event"
        ],
        "image": "https://i.imgur.com/a6ee68Y.png",
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "April 25 2019, 17:00",
                "end": "May 14 2019, 13:59",
                "markers": {
                    "Season 2": "April 27 2019, 17:00",
                    "Season 3": "April 29 2019, 17:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Melee Quest",
                "start": "May 5 2019, 17:00",
                "end": "May 14 2019, 13:59"
            },
            {
                "name": "Event Shop",
                "start": "April 25 2019, 17:00",
                "end": "May 21 2019, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Golden Memories",
            "黄金の記憶",
            "Ginger Mini Event"
        ],
        "image": "https://i.imgur.com/QA16URT.png",
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario, Missions and Boss Quest",
                "start": "April 29 2019, 0:00",
                "end": "May 10 2019, 23:59",
                "markers": {
                    "Chapter 2": "April 30 2019, 0:00",
                    "Chapter 3": "May 1 2019, 0:00",
                    "Chapter 4": "May 2 2019, 0:00"
                },
                "extraPriority": 3
            },
            {
                "name": "Medal Exchange Period",
                "start": "April 29 2019, 0:00",
                "end": "May 17 2019, 23:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Hitsugi Katsugi, GA and the Golden Kuromon Statue",
            "棺担ぎとGAと黄金のクロモン像",
            "GA and Kuro event"
        ],
        "image": "https://i.imgur.com/2WcDO38.png",
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "April 11 2019, 17:00",
                "end": "April 24 2019, 13:59",
                "markers": {
                    "Extra Story 1": "April 18 2019, 0:00",
                    "Extra Story 2": "April 19 2019, 0:00",
                    "Extra Story 3": "April 20 2019, 0:00",
                    "Extra Story 4": "April 21 2019, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Melee Quest",
                "start": "April 15 2019, 17:00",
                "end": "April 24 2019, 13:59"
            },
            {
                "name": "Event Shop",
                "start": "April 11 2019, 17:00",
                "end": "May 1 2019, 13:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Ama Usa An's Ambition Missions",
            "甘兎庵の野望",
            "Chiya & Sharo Event missions"
        ],
        "image": "https://i.imgur.com/a6ee68Y.png",
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "April 25 2019, 17:00",
                "end": "May 14 2019, 13:59",
                "markers": {
                    "Mission Set 2": "April 29 2019, 0:00",
                    "Mission Set 3": "May 5 2019, 0:00"
                },
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Ama Usa An's Ambition Summon",
            "甘兎庵の野望ピックアップ召喚",
            "Chiya & Sharo Event summon"
        ],
        "image": "https://i.imgur.com/a6ee68Y.png",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Chiya's Side: Featuring 5* Chiya, 4* Sharo",
                "start": "April 25 2019, 17:00",
                "end": "May 15 2019, 13:59",
                "extraPriority": 6
            },
            {
                "name": "Sharo's Side: Featuring 5* Sharo, 4* Sharo",
                "start": "April 25 2019, 17:00",
                "end": "May 15 2019, 13:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Golden Memories Limited Time Summon",
            "黄金の記憶期間限定ピックアップ召喚"
        ],
        image: "https://i.imgur.com/QA16URT.png",
        column: 1,
        priority: 1,
        timers: [
            {
                name: "Featuring 5* Ginger",
                start: "April 29 2019, 0:00",
                end: "May 10 2019, 23:59",
                extraPriority: 5
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Gochuumon wa Usagi Desu Ka? Selection Summon",
            "ご注文はうさぎですか？セレクション召喚"
        ],
        image: "https://i.imgur.com/aD9xuCy.png",
        column: 1,
        priority: 1,
        timers: [
            {
                name: "Featuring 5* Cocoa, 5* Chino, 5* Rize",
                start: "April 27 2019, 0:00",
                end: "May 7 2019, 23:59",
                extraPriority: 5
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "500 Days Celebration Summon",
            "リリース500日記念★5選べるチケット付き！有償限定10回召喚",
            "400 paid gems for a 10x Summon + a Choosable 5* Summon Ticket"
        ],
        image: "clea",
        column: 1,
        priority: 1,
        timers: [
            {
                name: "Summon Period",
                start: "April 25 2019, 17:00",
                end: "May 7 2019, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "April 25 2019, 17:00",
                end: "May 19 2019, 23:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Golden Week Summon",
            "ゴールデンウィーク★5選べるチケット付き！有償限定10回召喚",
            "400 paid gems for a 10x Summon + a Choosable 5* Summon Ticket"
        ],
        image: "clea",
        column: 1,
        priority: 1,
        timers: [
            {
                name: "Summon Period",
                start: "April 27 2019, 0:00",
                end: "May 12 2019, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "April 25 2019, 17:00",
                end: "May 19 2019, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "500 Days Celebration Login Bonus",
            "500日記念ログインボーナス",
            "Login on 10 days for up to 300 gems"
        ],
        image: "kirara",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "April 25 2019, 17:00",
                end: "May 10 2019, 23:59",
                keepAfterFinished: "1 hours"
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
        image: "https://i.imgur.com/GV5OBbm.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "April 6 2019, 0:00",
                end: "April 7 2019, 23:59"
            },
            {
                name: "Weekend 2",
                start: "April 13 2019, 0:00",
                end: "April 14 2019, 23:59"
            },
            {
                name: "Weekend 3",
                start: "April 20 2019, 0:00",
                end: "April 21 2019, 23:59"
            },
            {
                name: "Weekend 4",
                start: "April 27 2019, 0:00",
                end: "April 28 2019, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "April 6 2019, 0:00",
                end: "May 3 2019, 23:59",
                keepAfterFinished: "6 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Valentine Room Decorations",
            "New and Past Valentine-themed items"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "January 31 2019, 17:00",
                end: "February 15 2019, 13:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "500 Days Celebration Sale",
            "500日記念セール",
            "Discounted Gem Set prices"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "April 25 2019, 17:00",
                end: "May 10 2019, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Golden Week Sale",
            "ゴールデンウィーク特別セール",
            "Special Gem Set"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "April 27 2019, 0:00",
                end: "May 12 2019, 23:59"
            }
        ]
    }
];

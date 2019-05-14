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
            "Event Preparation"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "May 15 2019, 14:00",
                end: "May 15 2019, 17:00",
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
            "Etowaria's Big Sports Meeting",
            "開催！エトワリア大運動会",
            "Sports Meeting event"
        ],
        "image": "https://i.imgur.com/BzkQ1Ll.png",
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "May 15 2019, 17:00",
                "end": "May 29 2019, 13:59",
                "markers": {
                    "Season 1": "May 15 2019, 17:00",
                    "Season 2": "May 17 2019, 17:00",
                    "Season 3": "May 19 2019, 17:00",
                    "Season 4": "May 21 2019, 17:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "May 21 2019, 17:00",
                "end": "May 29 2019, 13:59"
            },
            {
                "name": "Event Shop / Rewards Redemption",
                "start": "May 15 2019, 17:00",
                "end": "June 5 2019, 13:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Etowaria's Big Sports Meeting Missions",
            "開催！エトワリア大運動会",
            "Sports Meeting event missions"
        ],
        "image": "https://i.imgur.com/BzkQ1Ll.png",
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "May 15 2019, 17:00",
                "end": "May 29 2019, 23:59",
                "markers": {
                    "Mission Set 2": "May 19 2019, 0:00",
                    "Mission Set 3": "May 21 2019, 0:00"
                },
                "extraPriority": 1
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
        "type": "Gacha",
        "title": [
            "Etowaria's Big Sports Meeting Summon",
            "開催！エトワリア大運動会",
            "Sports Meeting event summon"
        ],
        "image": "https://i.imgur.com/BzkQ1Ll.png",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Aoba [Sports Meeting], 5* Youko [Sports Meeting], 5* Eiko [Sports Meeting]",
                "start": "May 15 2019, 17:00",
                "end": "May 30 2019, 11:59",
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Etowaria's Big Sports Meeting Event Bonus Characters",
            "開催！エトワリア大運動会 イベントボーナスキャラクター召喚",
            "Event Bonus characters summon"
        ],
        "image": "https://i.imgur.com/U14X4tN.png",
        "column": 1,
        "priority": 1,
        "timers": [
            
            {
                "name": "First Half: Featuring 5* Karen, 5* Aoba, 5* Kamuri, 5* Tamate, 5* Cocoa, 5* Rize, 5* Chiya, 5* Archive",
                "start": "May 15 2019, 17:00",
                "end": "May 22 2019, 16:59",
                "info": "Also featuring many 4* characters from Kiniro Mosaic, NEW GAME!, Slow Start, Gochuumon wa Usagi Desu ka? and Anima Yell!"
            },
            {
                "name": "Featuring 5* Shinobu, 5* Hifumi, 5* Hana, 5* Chino, 5* Sharo, 5* Kohane, 5* Lamp, 5* Sugar",
                "start": "May 22 2019, 17:00",
                "end": "May 30 2019, 11:59",
                "info": "Also featuring many 4* characters from Kiniro Mosaic, NEW GAME!, Slow Start, Gochuumon wa Usagi Desu ka? and Anima Yell!"
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
            "May Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/QA16URT.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "May 11 2019, 0:00",
                end: "May 12 2019, 23:59"
            },
            {
                name: "Weekend 2",
                start: "May 18 2019, 0:00",
                end: "May 19 2019, 23:59"
            },
            {
                name: "Weekend 3",
                start: "May 25 2019, 0:00",
                end: "May 26 2019, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "May 11 2019, 0:00",
                end: "May 31 2019, 23:59",
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

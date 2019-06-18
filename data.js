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
            "New Quest Preparation",
            "Summon Renovation"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "June 19 2019, 14:00",
                end: "June 19 2019, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Wandering Bounty Hunters Rin & Karen",
            "さすらいの賞金稼ぎ　リン＆カレン",
            "Touyama Nao event"
        ],
        "image": "https://i.imgur.com/tqBweWK.png",
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "May 30 2019, 17:00",
                "end": "June 13 2019, 13:59",
                "markers": {
                    "Extra Chapter 1": "June 7 2019, 0:00",
                    "Extra Chapter 2": "June 8 2019, 0:00",
                    "Extra Chapter 3": "June 9 2019, 0:00",
                    "Extra Chapter 4": "June 10 2019, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "June 1 2019, 17:00",
                "end": "June 13 2019, 13:59"
            },
            {
                "name": "EX Quest",
                "start": "June 5 2019, 17:00",
                "end": "June 13 2019, 13:59"
            },
            {
                "name": "Event Shop",
                "start": "May 30 2019, 17:00",
                "end": "June 20 2019, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "[Re-run] First Issue! Comic Etowaria",
            "復刻・創刊！コミックエトワリア",
            "Comic Girls event re-run"
        ],
        "image": "https://i.imgur.com/vydrUg1.png",
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "June 13 2019, 17:00",
                "end": "June 26 2019, 13:59",
                "markers": {
                    "Extra Story 1": "June 21 2019, 0:00",
                    "Extra Story 2": "June 22 2019, 0:00",
                    "Extra Story 3": "June 23 2019, 0:00",
                    "Extra Story 4": "June 24 2019, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "June 15 2019, 17:00",
                "end": "June 26 2019, 13:59"
            },
            {
                "name": "EX Quest",
                "start": "June 17 2019, 17:00",
                "end": "June 26 2019, 13:59"
            },
            {
                "name": "Event Shop",
                "start": "June 13 2019, 17:00",
                "end": "July 3 2019, 11:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "[Re-run] First Issue! Comic Etowaria Missions",
            "復刻・創刊！コミックエトワリア",
            "Comic Girls event re-run missions"
        ],
        "image": "https://i.imgur.com/vydrUg1.png",
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "June 13 2019, 0:00",
                "end": "June 26 2019, 23:59",
                "markers": {
                    "Mission Set 2": "June 15 2019, 0:00",
                    "Mission Set 3": "June 17 2019, 0:00"
                },
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "PECO -A trial version- Missions",
            "PECO -A trial version-",
            "NEW GAME! Author Quest missions"
        ],
        "image": "https://i.imgur.com/Z9QgBrj.png",
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "June 19 2019, 17:00",
                "end": "July 2 2019, 23:59",
                "extraPriority": 2,
                "info": "In addition to this, there will be another set of permanent missions."
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "[Re-run] First Issue! Comic Etowaria Summon",
            "復刻・創刊！コミックエトワリア",
            "Comic Girls event re-run summon"
        ],
        "image": "https://i.imgur.com/vydrUg1.png",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Koizuka Koyume, 4* Koizuka Koyume, 4* Irokawa Ruki, 4* Katsuki Tsubasa",
                "start": "June 13 2019, 17:00",
                "end": "June 26 2019, 16:59",
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "PECO -A trial version- Summon",
            "PECO -A trial version-",
            "NEW GAME! Author Quest summon"
        ],
        "image": "https://i.imgur.com/Z9QgBrj.png",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Hotaru's side: Featuring 5* Hoshikawa Hotaru",
                "start": "June 19 2019, 17:00",
                "end": "July 3 2019, 11:59",
                "extraPriority": 5
            },
            {
                "name": "Momiji's side: Featuring 5* Mochizuki Momiji",
                "start": "June 21 2019, 0:00",
                "end": "July 3 2019, 11:59"
            },
            {
                "name": "Tsubame's side: Featuring 5* Narumi Tsubame",
                "start": "June 21 2019, 0:00",
                "end": "July 3 2019, 11:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "NEW GAME! Limited Selection Summon",
            "NEW GAME! 期間限定特別セレクション召喚"
        ],
        "image": "https://i.imgur.com/VD0BoAY.png",
        "column": 1,
        "priority": 1,
        "timers": [
            
            {
                "name": "Featuring 5* Hifumi [Christmas], 5* Hajime [Christmas], 5* Yun [Doll's Festival]",
                "start": "June 14 2019, 17:00",
                "end": "June 28 2019, 16:59",
                "extraPriority": 5
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "5* Ticket Summon",
            "★5確定チケット付き！有償限定10回召喚",
            "240 paid gems for a 10x Summon + a Random 5* Summon Ticket"
        ],
        image: "clea",
        column: 1,
        priority: 1,
        timers: [
            {
                name: "Summon Period",
                start: "May 30 2019, 17:00",
                end: "June 13 2019, 16:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "May 30 2019, 17:00",
                end: "June 20 2019, 23:59"
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
        type: "Other",
        title: [
            "Main Quest Half Stamina Campaign",
            "メインクエスト消費スタミナ1/2キャンペーン"
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "For Main Quest chapters 1~8 + Extra Chapter",
                start: "June 19 2019, 17:00",
                end: "July 3 2019, 11:59",
                keepAfterFinished: "1 hours",
                info: "Doesn't include Prologue quest and Hard Mode"
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
        image: "https://i.imgur.com/4pOeoDv.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "June 1 2019, 0:00",
                end: "June 2 2019, 23:59"
            },
            {
                name: "Weekend 2",
                start: "June 8 2019, 0:00",
                end: "June 9 2019, 23:59"
            },
            {
                name: "Weekend 3",
                start: "June 15 2019, 0:00",
                end: "June 16 2019, 23:59"
            },
            {
                name: "Weekend 4",
                start: "June 22 2019, 0:00",
                end: "June 23 2019, 23:59"
            },
            {
                name: "Weekend 5",
                start: "June 29 2019, 0:00",
                end: "June 30 2019, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "June 1 2019, 0:00",
                end: "July 5 2019, 23:59",
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
    }
];

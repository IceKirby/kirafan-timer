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
            "Version 1.17.0 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "May 30 2019, 12:00",
                end: "May 30 2019, 17:00",
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
            "Wandering Bounty Hunters Rin & Karen Missions",
            "さすらいの賞金稼ぎ　リン＆カレン",
            "Touyama Nao event missions"
        ],
        "image": "https://i.imgur.com/tqBweWK.png",
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "May 30 2019, 17:00",
                "end": "June 13 2019, 23:59",
                "markers": {
                    "Mission Set 2": "June 1 2019, 0:00",
                    "Mission Set 3": "June 5 2019, 0:00"
                },
                "extraPriority": 2
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
        "type": "Gacha",
        "title": [
            "Wandering Bounty Hunters Rin & Karen Summon",
            "さすらいの賞金稼ぎ　リン＆カレン",
            "Touyama Nao event summon"
        ],
        "image": "https://i.imgur.com/tqBweWK.png",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Rin [Traveler of the Wasteland], 4* Kagamihara Nadeshiko",
                "start": "May 30 2019, 17:00",
                "end": "June 13 2019, 16:59",
                "extraPriority": 6
            },
            {
                "name": "Featuring 5* Karen [Foreign Magician], 4* Hanakoizumi An",
                "start": "June 1 2019, 0:00",
                "end": "June 13 2019, 16:59"
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
            "Urara Meirochou Limited Selection",
            "うらら迷路帖 期間限定特別セレクション召喚"
        ],
        "image": "https://i.imgur.com/B9VWqIJ.png",
        "column": 1,
        "priority": 1,
        "timers": [
            
            {
                "name": "Featuring 5* Chiya [Christmas], 5* Kon [Swimsuit], 5* Koume [Valentine]",
                "start": "May 31 2019, 17:00",
                "end": "June 14 2019, 16:59",
                "extraPriority": 5
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

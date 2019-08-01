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
            "Version 1.18.1 update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "July 24 2019, 12:00",
                end: "July 24 2019, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Etowaria Summer One-Shots 2019",
            "エトワリア夏の一幕2019",
            "Summer 2019 Mini-Event"
        ],
        "image": "https://i.imgur.com/HjBxxvM.png",
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "July 18 2019, 0:00",
                "end": "July 24 2019, 23:59",
                "markers": {
                    "Chapter 2": "July 19 2019, 0:00",
                    "Chapter 3": "July 20 2019, 0:00",
                    "Chapter 4": "July 21 2019, 0:00",
                    "Chapter 5": "July 22 2019, 0:00"
                },
                "extraPriority": 3
            },
            {
                "name": "Melee Quest",
                "start": "July 18 2019, 0:00",
                "end": "July 24 2019, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "July 18 2019, 0:00",
                "end": "July 31 2019, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Ryuuguu Adventure",
            "リュウグウ・アドベンチャー",
            "Summer 2019 Event"
        ],
        "image": "https://i.imgur.com/OVJl0qa.png",
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "July 24 2019, 17:00",
                "end": "August 26 2019, 13:59",
                "markers": {
                    "Season 2": "July 27 2019, 17:00",
                    "Season 3": "July 29 2019, 17:00",
                    "Intermission 1": "August 2 2019, 0:00",
                    "Intermission 2": "August 3 2019, 0:00",
                    "Intermission 3": "August 4 2019, 0:00",
                    "Intermission 4": "August 5 2019, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "July 31 2019, 17:00",
                "end": "August 26 2019, 13:59"
            },
            {
                "name": "EX Quest",
                "start": "August 1 2019, 17:00",
                "end": "August 26 2019, 13:59"
            },
            {
                "name": "Event Shop",
                "start": "July 24 2019, 17:00",
                "end": "September 2 2019, 13:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Ryuuguu Adventure Missions",
            "リュウグウ・アドベンチャー",
            "Summer 2019 Event missions"
        ],
        "image": "https://i.imgur.com/OVJl0qa.png",
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "July 24 2019, 17:00",
                "end": "August 26 2019, 23:59",
                "markers": {
                    "Mission Set 2": "July 31 2019, 0:00",
                    "Mission Set 3": "August 1 2019, 0:00"
                },
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Limited-time Swimsuit Characters 2019 Summon",
            "期間限定2019水着キャラクターピックアップ召喚"
        ],
        "image": "https://i.imgur.com/1OpWxtQ.png",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Part 1: Featuring 5* Maika [Swimsuit], 5* Aoi [Swimsuit]",
                "start": "July 24 2019, 17:00",
                "end": "August 27 2019, 11:59",
                "extraPriority": 6
            },
            {
                "name": "Part 2: Featuring 5* Kurumi [Swimsuit], 5* Kaos [Swimsuit]",
                "start": "July 31 2019, 0:00",
                "end": "August 27 2019, 11:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "600 Days Celebration Choosable 5* Ticket Summon",
            "リリース600日記念★5選べるチケット付き！有償限定10回召喚",
            "400 paid gems for a 10x Summon + a Choosable 5* Summon Ticket"
        ],
        image: "clea",
        column: 1,
        priority: 1,
        timers: [
            {
                name: "Summon Period",
                start: "August 2 2019, 17:00",
                end: "August 15 2019, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "August 2 2019, 0:00",
                end: "August 22 2019, 23:59"
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
                start: "July 24 2019, 17:00",
                end: "August 2 2019, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "July 24 2019, 17:00",
                end: "September 3 2019, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "600 Days Celebration Login Bonus",
            "600日記念ログインボーナス",
            "Login on 10 days for up to 300 gems"
        ],
        image: "kirara",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "August 2 2019, 0:00",
                end: "August 15 2019, 23:59",
                keepAfterFinished: "1 hours"
            }
        ]
    },
    {
        type: "LoginDays",
        title: [
            "Machikado Mazoku participation Login Bonus",
            "まちカドまぞく参戦決定記念ログインボーナス",
            "20 Gems on days the anime airs"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Episode 1",
                date: "July 11 2019"
            },
            {
                name: "Episode 2",
                date: "July 18 2019"
            },
            {
                name: "Episode 3",
                date: "July 25 2019"
            },
            {
                name: "Episode 4",
                date: "August 1 2019"
            },
            {
                name: "Episode 5",
                date: "August 8 2019"
            },
            {
                name: "Episode 6",
                date: "August 15 2019"
            },
            {
                name: "Episode 7",
                date: "August 22 2019"
            },
            {
                name: "Episode 8",
                date: "August 29 2019"
            },
            {
                name: "Episode 9",
                date: "September 5 2019"
            },
            {
                name: "Episode 10",
                date: "September 12 2019"
            },
            {
                name: "Episode 11",
                date: "September 19 2019"
            },
            {
                name: "Episode 12",
                date: "September 26 2019"
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
                name: "For Main Quest",
                start: "July 18 2019, 0:00",
                end: "July 24 2019, 23:59",
                keepAfterFinished: "1 hours",
                info: "Doesn't include Hard Mode"
            }
        ]
    },
    {
        type: "WeekendBoss",
        title: [
            "July Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/EOBbkLn.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "July 6 2019, 0:00",
                end: "July 7 2019, 23:59"
            },
            {
                name: "Weekend 2",
                start: "July 20 2019, 0:00",
                end: "July 21 2019, 23:59"
            },
            {
                name: "Weekend 3",
                start: "July 27 2019, 0:00",
                end: "July 28 2019, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "July 6 2019, 0:00",
                end: "August 2 2019, 23:59",
                keepAfterFinished: "6 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "WeekendBoss",
        title: [
            "August Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/SeyUKHM.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "August 3 2019, 0:00",
                end: "August 4 2019, 23:59"
            },
            {
                name: "Weekend 2",
                start: "August 10 2019, 0:00",
                end: "August 11 2019, 23:59"
            },
            {
                name: "Weekend 3",
                start: "August 17 2019, 0:00",
                end: "August 18 2019, 23:59"
            },
            {
                name: "Weekend 4",
                start: "August 24 2019, 0:00",
                end: "August 25 2019, 23:59"
            },
            {
                name: "Weekend 5",
                start: "August 31 2019, 0:00",
                end: "September 1 2019, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "August 3 2019, 0:00",
                end: "September 6 2019, 23:59",
                keepAfterFinished: "6 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Summer Festival Room Decorations",
            "夏祭りを感じる！ルームアイテム"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Part 1",
                start: "July 24 2019, 17:00",
                end: "August 27 2019, 11:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Fresh Summer's Bottle Weapon",
            "トレードショップに夏限定のぶきが再登場",
            "Limited alchemist weapon at Trade Shop"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "July 24 2019, 17:00",
                end: "August 27 2019, 11:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Special Evolution Sets",
            "期間限定！お得な進化セット登場！",
            "Evolution Item Sets on Trade Shop"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "July 18 2019, 0:00",
                end: "July 24 2019, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Summer Vacation Gem Sale",
            "夏休み限定！星彩石2000個セット",
            "Discounted Gem Set prices"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "July 24 2019, 17:00",
                end: "August 15 2019, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "600 Days Celebration Gem Sale",
            "６００日記念セールお得な星彩石セット",
            "Discounted Gem Set prices"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "August 2 2019, 0:00",
                end: "August 15 2019, 23:59"
            }
        ]
    }
];

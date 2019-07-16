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
            "Version 1.18.0 update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "July 3 2019, 12:00",
                end: "July 3 2019, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "[Re-run] Mysterious Island and the Trial of Bonds",
            "復刻・謎の島と絆の試練",
            "Harukana Receive event re-run"
        ],
        "image": "https://i.imgur.com/PENyYB5.png",
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "July 3 2019, 17:00",
                "end": "July 17 2019, 13:59",
                "markers": {
                    "Extra Chapter 1": "July 12 2019, 0:00",
                    "Extra Chapter 2": "July 13 2019, 0:00",
                    "Extra Chapter 3": "July 14 2019, 0:00",
                    "Extra Chapter 4": "July 15 2019, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "July 5 2019, 17:00",
                "end": "July 17 2019, 13:59"
            },
            {
                "name": "EX Quest",
                "start": "July 7 2019, 17:00",
                "end": "July 17 2019, 13:59"
            },
            {
                "name": "Event Shop",
                "start": "July 3 2019, 17:00",
                "end": "July 24 2019, 11:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "NEW EMOTION!",
            "ＮＥＷ ＥＭＯＴＩＯＮ！",
            "Cesame Mini-Event"
        ],
        "image": "https://i.imgur.com/tPbYDk4.png",
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "July 13 2019, 0:00",
                "end": "July 19 2019, 23:59",
                "markers": {
                    "Chapter 2": "July 14 2019, 0:00",
                    "Chapter 3": "July 15 2019, 0:00",
                    "Chapter 4": "July 16 2019, 0:00"
                },
                "extraPriority": 3
            },
            {
                "name": "Challenge Quest",
                "start": "July 13 2019, 0:00",
                "end": "July 19 2019, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "July 13 2019, 0:00",
                "end": "July 26 2019, 23:59"
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
        "type": "Mission",
        "title": [
            "[Re-run] Mysterious Island and the Trial of Bonds Missions",
            "復刻・謎の島と絆の試練",
            "Harukana Receive event re-run missions"
        ],
        "image": "https://i.imgur.com/PENyYB5.png",
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "July 3 2019, 17:00",
                "end": "July 17 2019, 13:59",
                "markers": {
                    "Mission Set 2": "July 5 2019, 0:00",
                    "Mission Set 3": "July 7 2019, 0:00"
                },
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "[Re-run] Mysterious Island and the Trial of Bonds Summon",
            "復刻・謎の島と絆の試練",
            "Harukana Receive event re-run summon"
        ],
        "image": "https://i.imgur.com/PENyYB5.png",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "First Half: Featuring 5* Higa Kanata, 4* Higa Kanata, 4* Ooshiro Akari",
                "start": "July 3 2019, 17:00",
                "end": "July 17 2019, 16:59",
                "extraPriority": 6,
                "info": "Waku Waku Shequasar"
            },
            {
                "name": "Second Half: Featuring 5* Tooyama Rin, 4* Thomas Claire, 4* Thomas Emily",
                "start": "July 5 2019, 0:00",
                "end": "July 17 2019, 16:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Swimsuit Characters 2018 Limited Summon",
            "期間限定2018水着キャラクターピックアップ召喚"
        ],
        "image": "https://i.imgur.com/qRigDpN.png",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "First Half: Featuring 5* Yuki [Swimsuit], 5* Kaho [Swimsuit], 5* Aya [Swimsuit], 5* Kou [Swimsuit], 4* Tooru [Swimsuit], 4* Eiko [Swimsuit]",
                "start": "June 28 2019, 17:00",
                "end": "July 12 2019, 16:59",
                "extraPriority": 5
            },
            {
                "name": "Second Half: Featuring 5* Kon [Swimsuit], 5* Yuzuko [Swimsuit], 5* Nadeshiko [Swimsuit], 5* Shizuku [Swimsuit], 4* Yumine [Swimsuit], 4* Kotone [Swimsuit]",
                "start": "July 12 2019, 17:00",
                "end": "July 26 2019, 23:59",
                "extraPriority": 5
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "NEW EMOTION! Summon",
            "ＮＥＷ ＥＭＯＴＩＯＮ！",
            "Cesame Mini-Event summon"
        ],
        "image": "https://i.imgur.com/tPbYDk4.png",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Cesame",
                "start": "July 13 2019, 0:00",
                "end": "July 24 2019, 11:59",
                "extraPriority": 5
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Daily Free 10x Summon",
            "1日1回無料10回召喚",
            "One free 10x Summon per day"
        ],
        image: "clea",
        column: 1,
        priority: 1,
        timers: [
            {
                name: "Period",
                start: "July 18 2019, 0:00",
                end: "July 24 2019, 23:59",
                extraPriority: 7
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
        type: "LoginDays",
        title: [
            "Summer Preparation Login Bonus",
            "夏の育成応援ログインボーナス",
            "Up to 700 Exchange Medals"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "1st Login: 400 Exchange Medals",
                date: "July 18 2019"
            },
            {
                name: "2nd Login: 50 Exchange Medals",
                date: "July 19 2019"
            },
            {
                name: "3rd Login: 50 Exchange Medals",
                date: "July 20 2019"
            },
            {
                name: "4th Login: 50 Exchange Medals",
                date: "July 21 2019"
            },
            {
                name: "5th Login: 50 Exchange Medals",
                date: "July 22 2019"
            },
            {
                name: "6th Login: 50 Exchange Medals",
                date: "July 23 2019"
            },
            {
                name: "7th Login: 50 Exchange Medals",
                date: "July 24 2019"
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

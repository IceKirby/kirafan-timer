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
            "Version 2.2.7 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "October 27 2020, 16:00",
                end: "October 27 2020, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "A Miracle Encounter and the Dream Party",
            "キセキの出会いと夢のパーティー",
            "Sanrio Collab Event"
        ],
        "image": [
            "https://i.imgur.com/NFAvp06.png",
            "https://i.imgur.com/nWzS6eI.png",
            "https://i.imgur.com/4qlZQyY.png",
            "https://i.imgur.com/UinqL2N.png",
            "https://i.imgur.com/Ln3VdJx.png",
            "https://i.imgur.com/LBve7Ux.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Event",
                "start": "September 29 2020, 17:00",
                "end": "October 13 2020, 15:59",
                "markers": [
                    {
                        title: "Boss Quest",
                        time: "October 2 2020, 17:00",
                        type: "battle"
                    },
                    {
                        title: "EX Quest",
                        time: "October 5 2020, 17:00",
                        type: "battle"
                    },
                    {
                        title: "Extra Chapter 1",
                        time: "October 8 2020, 0:00",
                        type: "story"
                    },
                    {
                        title: "Extra Chapter 2",
                        time: "October 9 2020, 0:00",
                        type: "story"
                    },
                    {
                        title: "Extra Chapter 3",
                        time: "October 10 2020, 0:00",
                        type: "story"
                    },
                    {
                        title: "Extra Chapter 4",
                        time: "October 11 2020, 0:00",
                        type: "story"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Missions",
                "start": "September 29 2020, 17:00",
                "end": "October 13 2020, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "September 29 2020, 17:00",
                "end": "October 20 2020, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Dropout Idol's Another World TV",
            "おちこぼれアイドルの異世界ＴＶ",
            "Ochikobore Fruit Tart Event"
        ],
        "image": [
            "https://i.imgur.com/jZZmzvZ.png",
            "https://i.imgur.com/9Fxkxvc.png",
            "https://i.imgur.com/yM7pTJ0.png",
            "https://i.imgur.com/F9tcms4.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Event",
                "start": "October 13 2020, 17:00",
                "end": "October 27 2020, 15:59",
                "markers": [
                    {
                        "title": "Extra Chapter 1",
                        "time": "October 22 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "October 23 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "October 24 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "October 25 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Melee Quest",
                        "time": "October 15 2020, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "EX Quest",
                        "time": "October 21 2020, 17:00",
                        "type": "battle"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Missions",
                "start": "October 13 2020, 17:00",
                "end": "October 27 2020, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "October 13 2020, 17:00",
                "end": "November 3 2020, 13:59"
            }
        ]
    },
     {
        "type": "Gacha",
        "title": [
            "Dropout Idol's Another World TV Summon",
            "おちこぼれアイドルの異世界ＴＶピックアップ召喚",
            "Ochikobore Fruit Tart Event summon"
        ],
        "image": [
            "https://i.imgur.com/jZZmzvZ.png",
            "https://i.imgur.com/9Fxkxvc.png",
            "https://i.imgur.com/yM7pTJ0.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Sakura Ino, 4* Sekino Roko, 4* Nukui Hayu",
                "start": "October 13 2020, 17:00",
                "end": "October 27 2020, 15:59",
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Sanrio Characters Collab Step-up Summon",
            "サンリオキャラ コラボ限定おまけ付き10回召喚",
            "Get a Sandom Sanrio 5* Summon Ticket on 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                "start": "September 29 2020, 17:00",
                "end": "October 13 2020, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                "start": "September 29 2020, 17:00",
                "end": "October 20 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Gochuumon wa Usagi Desu Ka? Limited-time Summon",
            "ご注文はうさぎですか？★5確定チケット付き！有償限定10回召喚",
            "240 Paid Gems for a 10x Summon + Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Part 1: Featuring 5* Cocoa [Christmas], 5* Cocoa [Swimsuit], 5* Chino [Swimsuit], 5* Rize [Halloween]",
                "start": "October 10 2020, 17:00",
                "end": "October 17 2020, 16:59",
                extraPriority: 4
            },
            {
                name: "Part 2: Featuring 5* Cocoa [Christmas], 5* Cocoa [Swimsuit], 5* Chino [Swimsuit], 5* Rize [Halloween]",
                "start": "October 17 2020, 17:00",
                "end": "October 24 2020, 16:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                "start": "October 10 2020, 17:00",
                "end": "October 24 2020, 23:59"
            },
            {
                name: "Ticket Expiration (Part 2)",
                "start": "October 17 2020, 17:00",
                "end": "October 31 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Hanayamata Limited-time Summon",
            "ハナヤマタ期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/5OpuQTN.png",
            "https://i.imgur.com/FlD4AXg.png",
            "https://i.imgur.com/H7SkY8n.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Sekiya Naru, 5* Hana [Swimsuit], 5* Nishimikado Tami, 4* Hana N. Fountainstand, 4* Sasame Yaya",
                "start": "October 13 2020, 17:00",
                "end": "October 20 2020, 16:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Hanayamata Limited-time Summon Ticket",
            "ハナヤマタ★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Featuring 5* Sekiya Naru, 5* Hana [Swimsuit], 5* Nishimikado Tami",
                "start": "October 13 2020, 17:00",
                "end": "October 20 2020, 16:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                "start": "October 13 2020, 17:00",
                "end": "October 27 2020, 23:59"
            }
        ]
    },
     {
        "type": "Gacha",
        "title": [
            "Gochuumon wa Usagi Desu Ka? Limited-time Summon",
            "ご注文はうさぎですか？期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/r8r2woQ.png",
            "https://i.imgur.com/EfQBxMM.png",
            "https://i.imgur.com/or0rU6G.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Cocoa [Christmas], 5* Chino [Swimsuit], 5* Mocha, 4* Chino, 4* Syaro, 4* Megu",
                "start": "October 20 2020, 17:00",
                "end": "October 27 2020, 15:59",
                "extraPriority": 4
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
                "name": "Includes only characters that appear in the current event's story, including limited-time ones",
                "start": "October 21 2020, 0:00",
                "end": "October 27 2020, 15:59",
                "extraPriority": 4
            }
        ]
    },
    {
        type: "Other",
        title: [
            "A Miracle Encounter and the Dream Party Login Bonus",
            "キセキの出会いと夢のパーティーログインボーナス",
            "Log in on 10 days for up to 200 Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "September 29 2020, 17:00",
                "end": "October 13 2020, 23:59"
            }
        ]
    },
    {
        type: "LoginDays",
        title: [
            "Ochikobore Fruit Tart participation Login Bonus",
            "おちこぼれフルーツタルト参戦決定記念ログインボーナス",
            "20 Gems on days the anime airs"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Episode 2",
                date: "October 19 2020",
                days: 2
            },
            {
                name: "Episode 3",
                date: "October 26 2020",
                days: 2
            },
            {
                name: "Episode 4",
                date: "November 2 2020",
                days: 2
            },
            {
                name: "Episode 5",
                date: "November 9 2020",
                days: 2
            },
            {
                name: "Episode 6",
                date: "November 16 2020",
                days: 2
            },
            {
                name: "Episode 7",
                date: "November 23 2020",
                days: 2
            },
            {
                name: "Episode 8",
                date: "November 30 2020",
                days: 2
            },
            {
                name: "Episode 9",
                date: "December 7 2020",
                days: 2
            },
            {
                name: "Episode 10",
                date: "December 14 2020",
                days: 2
            },
            {
                name: "Episode 11",
                date: "December 21 2020",
                days: 2
            },
            {
                name: "Episode 12",
                date: "December 28 2020",
                days: 2
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
            "October Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/moHDg7y.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "October 3 2020, 0:00",
                end: "October 4 2020, 23:59"
            },
            {
                name: "Weekend 2",
                start: "October 10 2020, 0:00",
                end: "October 11 2020, 23:59"
            },
            {
                name: "Weekend 3",
                start: "October 17 2020, 0:00",
                end: "October 18 2020, 23:59"
            },
            {
                name: "Weekend 4",
                start: "October 24 2020, 0:00",
                end: "October 25 2020, 23:59"
            },
            {
                name: "Weekend 5",
                start: "October 31 2020, 0:00",
                end: "November 1 2020, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "October 3 2020, 0:00",
                end: "November 6 2020, 23:59",
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
            "Ochikobore Fruit Tart Participation Sales",
            "おちこぼれフルーツタルト参戦記念セール"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Special Gem Sets",
                "start": "October 13 2020, 17:00",
                "end": "October 27 2020, 15:59"
            }
        ]
    }
];

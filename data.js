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
            "Version 2.2.5 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "September 29 2020, 16:00",
                end: "September 29 2020, 17:00",
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
                "markers": [
                    {
                        title: "Boss Quest",
                        time: "September 12 2020, 17:00",
                        type: "battle"
                    },
                    {
                        title: "EX Quest",
                        time: "September 16 2020, 17:00",
                        type: "battle"
                    },
                    {
                        title: "Extra Chapter 1",
                        time: "September 19 2020, 0:00",
                        type: "story"
                    },
                    {
                        title: "Extra Chapter 2",
                        time: "September 20 2020, 0:00",
                        type: "story"
                    },
                    {
                        title: "Extra Chapter 3",
                        time: "September 21 2020, 0:00",
                        type: "story"
                    },
                    {
                        title: "Extra Chapter 4",
                        time: "September 22 2020, 0:00",
                        type: "story"
                    }
                ],
                "extraPriority": 4
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
        "type": "Gacha",
        "title": [
            "A Miracle Encounter and the Dream Party Summon",
            "キセキの出会いと夢のパーティーピックアップ召喚",
            "Sanrio Collab Event summon"
        ],
        "image": [
            "https://i.imgur.com/NFAvp06.png",
            "https://i.imgur.com/nWzS6eI.png",
            "https://i.imgur.com/4qlZQyY.png",
            "https://i.imgur.com/UinqL2N.png",
            "https://i.imgur.com/Ln3VdJx.png",
            "https://i.imgur.com/LBve7Ux.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Limited Summon",
                "start": "September 29 2020, 17:00",
                "end": "October 13 2020, 15:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5* Alice [Cinnamoroll], 5* Yuu [Pompompurin]",
                        "time": "September 29 2020, 17:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5* Kamuri [My Melody], 5* Hanako [Kuromi]",
                        "time": "September 29 2020, 17:00"
                    },
                    {
                        "title": "Part 3",
                        "desc": "Featuring 5* Merry [Hello Kitty], 5* Sonobe [Gudetama]",
                        "time": "September 29 2020, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Head Priest & Seven Sages Limited-time Summon",
            "筆頭神官＆七賢者限定★5確定チケット",
            "400 Paid Gems for a 10x Summon + Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                "start": "September 19 2020, 0:00",
                "end": "September 29 2020, 15:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                "start": "September 19 2020, 0:00",
                "end": "October 6 2020, 23:59"
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
                name: "Ticket Expiration",
                "start": "October 10 2020, 17:00",
                "end": "October 24 2020, 23:59"
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
            "Collab Celebration Special Sales",
            "コラボ記念セール"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Special Gem Sets",
                "start": "September 29 2020, 17:00",
                "end": "October 13 2020, 15:59"
            },
            {
                name: "Special Item Sets",
                "start": "September 29 2020, 17:00",
                "end": "October 13 2020, 15:59"
            }
        ]
    }
];

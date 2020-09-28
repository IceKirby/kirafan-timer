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
                "name": "Main Scenario",
                "start": "September 29 2020, 17:00",
                "end": "October 13 2020, 15:59",
                "markers": {
                    "Extra Chapter 1": "October 8 2020, 0:00",
                    "Extra Chapter 2": "October 9 2020, 0:00",
                    "Extra Chapter 3": "October 10 2020, 0:00",
                    "Extra Chapter 4": "October 11 2020, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "October 2 2020, 17:00",
                "end": "October 13 2020, 15:59"
            },
            {
                "name": "EX Quest",
                "start": "October 5 2020, 17:00",
                "end": "October 13 2020, 15:59"
            },
            {
                "name": "Event Shop",
                "start": "September 29 2020, 17:00",
                "end": "October 20 2020, 13:59"
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
        "type": "Mission",
        "title": [
            "A Miracle Encounter and the Dream Party Missions",
            "キセキの出会いと夢のパーティー",
            "Sanrio Collab Event missions"
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
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "September 29 2020, 17:00",
                "end": "October 13 2020, 23:59",
                "markers": {},
                "extraPriority": 2
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
                "name": "Part 1: Featuring 5* Alice [Cinnamoroll], 5* Yuu [Pompompurin]",
                "start": "September 29 2020, 17:00",
                "end": "October 13 2020, 15:59",
                "extraPriority": 6
            },
            {
                "name": "Part 2: Featuring 5* Kamuri [My Melody], 5* Hanako [Kuromi]",
                "start": "September 29 2020, 17:00",
                "end": "October 13 2020, 15:59"
            },
            {
                "name": "Part 3: Featuring 5* Merry [Hello Kitty], 5* Sonobe [Gudetama]",
                "start": "September 29 2020, 17:00",
                "end": "October 13 2020, 15:59"
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

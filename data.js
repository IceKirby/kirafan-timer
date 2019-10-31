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
            "Version 1.19.5 update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "November 1 2019, 14:00",
                end: "November 1 2019, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Operation Trick-or-Treat",
            "トリックオアトリート大作戦",
            "Halloween Event"
        ],
        "image": [
            "https://i.imgur.com/MmFCXNg.png",
            "https://i.imgur.com/2QiQCl8.png",
            "https://i.imgur.com/TmrfVqd.png",
            "https://i.imgur.com/9C6f9Ok.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "October 16 2019, 17:00",
                "end": "November 1 2019, 13:59",
                "markers": {
                    "Extra Chapter 1": "October 26 2019, 0:00",
                    "Extra Chapter 2": "October 27 2019, 0:00",
                    "Extra Chapter 3": "October 28 2019, 0:00",
                    "Extra Chapter 4": "October 29 2019, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Melee Quest",
                "start": "October 18 2019, 17:00",
                "end": "November 1 2019, 13:59"
            },
            {
                "name": "EX Quest",
                "start": "October 20 2019, 17:00",
                "end": "November 1 2019, 13:59"
            },
            {
                "name": "Event Shop",
                "start": "October 16 2019, 17:00",
                "end": "November 8 2019, 13:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Operation Trick-or-Treat Missions",
            "トリックオアトリート大作戦",
            "Halloween Event missions"
        ],
        "image": [
            "https://i.imgur.com/MmFCXNg.png",
            "https://i.imgur.com/2QiQCl8.png",
            "https://i.imgur.com/TmrfVqd.png",
            "https://i.imgur.com/9C6f9Ok.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "October 16 2019, 17:00",
                "end": "November 1 2019, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Operation Trick-or-Treat Limited-time Summon",
            "トリックオアトリート大作戦",
            "Halloween Event summon"
        ],
        "image": [
            "https://i.imgur.com/MmFCXNg.png",
            "https://i.imgur.com/2QiQCl8.png",
            "https://i.imgur.com/TmrfVqd.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Claire [Halloween], 5* Rize [Halloween], 4* Nono [Halloween]",
                "start": "October 16 2019, 17:00",
                "end": "November 1 2019, 13:59",
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Harukana Receive & Gochuumon wa Usagi Desu Ka? Limited-time Summon",
            "はるかなレシーブ&ご注文はうさぎですか？ 期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/w8jvzda.png",
            "https://i.imgur.com/2J0EJTg.png",
            "https://i.imgur.com/AOmpst1.png",
            "https://i.imgur.com/BeTdz6c.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Chino [Swimsuit], 5* Rize, 5* Oozora Haruka, 5* Higa Kanata",
                "start": "October 18 2019, 17:00",
                "end": "October 25 2019, 16:59",
                "extraPriority": 4,
                "info": "Also 4* characters from Harukana Receive and Gochuumon wa Usagi Desu Ka?"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Urara Meirochou & Comic Girls Limited-time Summon",
            "うらら迷路帖&こみっくがーるず 期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/pmPnjIt.png",
            "https://i.imgur.com/T59FWCS.png",
            "https://i.imgur.com/a5qzy56.png",
            "https://i.imgur.com/LKhiMLc.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Kon [Swimsuit], 5* Natsume Nono, 5* Kaos [Swimsuit], 5* Koizuka Koyume",
                "start": "October 25 2019, 17:00",
                "end": "November 1 2019, 13:59",
                "extraPriority": 4,
                "info": "Also 4* characters from Comic Girls, 4* and 3* from Urara Meirochou"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Manga Time Kirara Exhibition in Osaka Celebration Summon",
            "まんがタイムきらら展in大阪記念★5確定チケット付き！有償限定10回召喚",
            "240 paid gems for a 10x Summon + a Random 5* Summon Ticket"
        ],
        image: "clea",
        column: 1,
        priority: 1,
        timers: [
            {
                name: "Summon Period - First Half",
                start: "October 12 2019, 17:00",
                end: "October 22 2019, 23:59",
                extraPriority: 4
            },
            {
                name: "Summon Period - Second Half",
                start: "October 17 2019, 17:00",
                end: "October 22 2019, 23:59"
            },
            {
                name: "Ticket Expiration",
                start: "October 12 2019, 17:00",
                end: "October 29 2019, 23:59"
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
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Author Quest Half Stamina Campaign",
            "作家クエスト消費スタミナ1/2キャンペーン"
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "For Author Quests",
                start: "August 15 2019, 0:00",
                end: "August 27 2019, 13:59",
                keepAfterFinished: "1 hours"
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
        image: "https://i.imgur.com/5bGQaq3.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "October 5 2019, 0:00",
                end: "October 6 2019, 23:59"
            },
            {
                name: "Weekend 2",
                start: "October 12 2019, 0:00",
                end: "October 13 2019, 23:59"
            },
            {
                name: "Weekend 3",
                start: "October 19 2019, 0:00",
                end: "October 20 2019, 23:59"
            },
            {
                name: "Weekend 4",
                start: "October 26 2019, 0:00",
                end: "October 27 2019, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "October 5 2019, 0:00",
                end: "November 1 2019, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "WeekendBoss",
        title: [
            "November Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/DyjmRln.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "November 2 2019, 0:00",
                end: "November 3 2019, 23:59"
            },
            {
                name: "Weekend 2",
                start: "November 9 2019, 0:00",
                end: "November 10 2019, 23:59"
            },
            {
                name: "Weekend 3",
                start: "November 16 2019, 0:00",
                end: "November 17 2019, 23:59"
            },
            {
                name: "Weekend 4",
                start: "November 23 2019, 0:00",
                end: "November 24 2019, 23:59"
            },
            {
                name: "Weekend 5",
                start: "November 30 2019, 0:00",
                end: "December 1 2019, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "November 2 2019, 0:00",
                end: "December 6 2019, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Summer Room Decorations",
            "夏祭りを感じる！ルームアイテム"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Part 1 - Summer Festival Set",
                start: "July 24 2019, 17:00",
                end: "August 27 2019, 11:59"
            },
            {
                name: "Part 2 - Pirates Set",
                start: "August 8 2019, 17:00",
                end: "August 27 2019, 11:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Halloween Gem Sale",
            "ハロウィン限定！星彩石2000個セット",
            "Discounted Gem Set prices"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "October 16 2019, 17:00",
                end: "November 1 2019, 13:59"
            }
        ]
    }
];

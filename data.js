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
            "Version 1.19.3 update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "October 8 2019, 14:00",
                end: "October 8 2019, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Chimame Corps at Work",
            "はたらくチマメ隊",
            "Chimame Corps Event"
        ],
        "image": [
            "https://i.imgur.com/ftFcJlL.png",
            "https://i.imgur.com/ic9RlPU.png",
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "September 26 2019, 17:00",
                "end": "October 7 2019, 13:59",
                "markers": {
                    "Extra Chapter 1": "October 2 2019, 0:00",
                    "Extra Chapter 2": "October 3 2019, 0:00",
                    "Extra Chapter 3": "October 4 2019, 0:00",
                    "Extra Chapter 4": "October 5 2019, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "September 28 2019, 17:00",
                "end": "October 7 2019, 13:59"
            },
            {
                "name": "EX Quest",
                "start": "September 30 2019, 17:00",
                "end": "October 7 2019, 13:59"
            },
            {
                "name": "Event Shop",
                "start": "September 26 2019, 17:00",
                "end": "October 14 2019, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Lamp's Limit Challenge",
            "ランプの限界チャレンジ！",
            "Beat ultra hard quest, send video, get prize"
        ],
        "image": "lamp",
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Challenge Quest",
                "start": "October 8 2019, 17:00",
                "end": "October 16 2019, 13:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Chimame Corps at Work Missions",
            "はたらくチマメ隊",
            "Chimame Corps Event missions"
        ],
        "image": [
            "https://i.imgur.com/ftFcJlL.png",
            "https://i.imgur.com/ic9RlPU.png",
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "September 26 2019, 17:00",
                "end": "October 7 2019, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Spicymination Missions",
            "からみねーしょん",
            "Harumination Author Quest missions"
        ],
        "image": "https://i.imgur.com/BI6jcDn.png",
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "October 8 2019, 17:00",
                "end": "October 22 2019, 23:59",
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Chimame Corps at Work Summon",
            "はたらくチマメ隊 ピックアップ召喚",
            "Chimame Corps Event summon"
        ],
        "image": [
            "https://i.imgur.com/ftFcJlL.png",
            "https://i.imgur.com/ic9RlPU.png",
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Maya's side: Featuring 5* Maya, 4* Megu",
                "start": "September 26 2019, 17:00",
                "end": "October 8 2019, 13:59",
                "extraPriority": 6
            },
            {
                "name": "Megu's side: Featuring 5* Megu, 4* Megu",
                "start": "September 26 2019, 17:00",
                "end": "October 8 2019, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Spicymination Summon",
            "からみねーしょん",
            "Harumination Author Quest summon"
        ],
        "image": "https://i.imgur.com/BI6jcDn.png",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Hosono Harumi",
                "start": "October 8 2019, 17:00",
                "end": "October 16 2019, 13:59",
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Gochuumon wa Usagi Desu Ka? Selection Summon",
            "ご注文はうさぎですか？ セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/VqsSOBX.png",
            "https://i.imgur.com/WYX1UHo.png",
            "https://i.imgur.com/BMZwHHd.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Chino, 5* Chiya, 5* Syaro, 4* Chino, 4* Syaro",
                "start": "September 30 2019, 17:00",
                "end": "October 8 2019, 13:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Lamp's Limit Challenge Limited-time Summon",
            "ランプの限界チャレンジ！期間限定召喚"
        ],
        "image": [
            "https://i.imgur.com/egjqDoR.png",
            "https://i.imgur.com/jGxvF4G.png",
            "https://i.imgur.com/NiT3jdX.png",
            "https://i.imgur.com/06FMmSI.png",
            "https://i.imgur.com/crXjfzV.png",
            "https://i.imgur.com/v7QlZvZ.png",
            "https://i.imgur.com/gZEWzdR.png",
            "https://i.imgur.com/yKYOYoX.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Water side: Featuring 5* Takeya Yuki, 5* Hoshikawa Hotaru, 5* Kaho [Swimsuit], 5* Hannen Hiroe",
                "start": "October 8 2019, 17:00",
                "end": "October 16 2019, 13:59",
                "extraPriority": 4
            },
            {
                "name": "Earth side: Featuring 5* Oribe Yasuna, 5* Sonya, 5* Eiko [Sports Meeting], 5* Moeta Kaoruko",
                "start": "October 8 2019, 17:00",
                "end": "October 16 2019, 13:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Paid-only Summon + Random 5* Summon Ticket",
            "★5確定チケット付き！有償限定10回召喚",
            "240 paid gems for a 10x Summon + a Random 5* Summon Ticket"
        ],
        image: "clea",
        column: 1,
        priority: 1,
        timers: [
            {
                name: "Summon Period",
                start: "September 26 2019, 17:00",
                end: "October 8 2019, 13:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "September 26 2019, 17:00",
                end: "October 15 2019, 23:59"
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
            "Summer Vacation Gem Sale",
            "夏休み限定！星彩石2000個セット",
            "Discounted Gem Set prices"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Part 1",
                start: "July 24 2019, 17:00",
                end: "August 15 2019, 23:59"
            },
            {
                name: "Part 2",
                start: "August 8 2019, 17:00",
                end: "August 27 2019, 23:59"
            }
        ]
    }
];

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
            "Version 2.2.3 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "August 27 2020, 16:00",
                end: "August 27 2020, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Summer Vacation Project: Ultimate Quiz",
            "夏休み企画アルティメットクイズ",
            "Summer 2020 Event 2"
        ],
        "image": [
            "https://i.imgur.com/k7GMqzq.png",
            "https://i.imgur.com/JOlXlY5.png",
            "https://i.imgur.com/Dqgiqud.png",
            "https://i.imgur.com/BV6J36X.png",
            "https://i.imgur.com/kPZWUB7.png",
            "https://i.imgur.com/2yKdoO9.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "August 12 2020, 17:00",
                "end": "August 27 2020, 15:59",
                "markers": {
                    "Extra Chapter 1": "August 22 2020, 0:00",
                    "Extra Chapter 2": "August 23 2020, 0:00",
                    "Extra Chapter 3": "August 24 2020, 0:00",
                    "Extra Chapter 4": "August 25 2020, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "August 14 2020, 17:00",
                "end": "August 27 2020, 15:59"
            },
            {
                "name": "EX Quest",
                "start": "August 19 2020, 17:00",
                "end": "August 27 2020, 15:59"
            },
            {
                "name": "Super EX Quest",
                "start": "August 19 2020, 17:00",
                "end": "August 27 2020, 15:59"
            },
            {
                "name": "Mystery Treasure Chest & Event Shop",
                "start": "August 12 2020, 17:00",
                "end": "September 3 2020, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Summer Vacation! Homework Operation",
            "夏休み！宿題大作戦",
            "Summer 2020 Event"
        ],
         "image": [
            "https://i.imgur.com/KWilLZc.png",
            "https://i.imgur.com/4QbYAEv.png",
            "https://i.imgur.com/F2A718S.png",
            "https://i.imgur.com/GXAqDJ8.png",
            "https://i.imgur.com/N48Vwkp.png",
            "https://i.imgur.com/Ut2Jife.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "July 29 2020, 17:00",
                "end": "August 27 2020, 15:59",
                "markers": {
                    "Extra Chapter 1": "August 8 2020, 0:00",
                    "Extra Chapter 2": "August 9 2020, 0:00",
                    "Extra Chapter 3": "August 10 2020, 0:00",
                    "Extra Chapter 4": "August 11 2020, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "July 31 2020, 17:00",
                "end": "August 27 2020, 15:59"
            },
            {
                "name": "EX Quest",
                "start": "August 5 2020, 17:00",
                "end": "August 27 2020, 15:59"
            },
            {
                "name": "Event Shop",
                "start": "July 29 2020, 17:00",
                "end": "September 3 2020, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Battle of Pirates -The Imprisoned Cheer and the Swimsuit Pirates-",
            "バトルオブパイレーツ -囚われのチアと水着海賊-",
            "Harukana Receive x Anima Yell Event"
        ],
        "image": [
            "https://i.imgur.com/hWSBzTq.png",
            "https://i.imgur.com/3uoHNm8.png",
            "https://i.imgur.com/LBqs8nS.png",
            "https://i.imgur.com/YLbbmH5.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "August 27 2020, 17:00",
                "end": "September 10 2020, 15:59",
                "markers": {
                    "Extra Chapter 1": "September 5 2020, 0:00",
                    "Extra Chapter 2": "September 6 2020, 0:00",
                    "Extra Chapter 3": "September 7 2020, 0:00",
                    "Extra Chapter 4": "September 8 2020, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "August 29 2020, 17:00",
                "end": "September 10 2020, 15:59"
            },
            {
                "name": "EX Quest",
                "start": "September 1 2020, 17:00",
                "end": "September 10 2020, 15:59"
            },
            {
                "name": "Event Shop",
                "start": "August 27 2020, 17:00",
                "end": "September 17 2020, 13:59"
            }
        ]
    },
     {
        "type": "Mission",
        "title": [
            "Summer Vacation Project: Ultimate Quiz Missions",
            "夏休み企画アルティメットクイズ",
            "Summer 2020 Event 2 missions"
        ],
        "image": [
            "https://i.imgur.com/k7GMqzq.png",
            "https://i.imgur.com/JOlXlY5.png",
            "https://i.imgur.com/Dqgiqud.png",
            "https://i.imgur.com/BV6J36X.png",
            "https://i.imgur.com/kPZWUB7.png",
            "https://i.imgur.com/2yKdoO9.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "August 12 2020, 17:00",
                "end": "August 27 2020, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Summer Vacation! Homework Operation Missions",
            "夏休み！宿題大作戦",
            "Summer 2020 Event missions"
        ],
         "image": [
            "https://i.imgur.com/KWilLZc.png",
            "https://i.imgur.com/4QbYAEv.png",
            "https://i.imgur.com/F2A718S.png",
            "https://i.imgur.com/GXAqDJ8.png",
            "https://i.imgur.com/N48Vwkp.png",
            "https://i.imgur.com/Ut2Jife.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "July 29 2020, 17:00",
                "end": "August 27 2020, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
     {
        "type": "Mission",
        "title": [
            "Battle of Pirates -The Imprisoned Cheer and the Swimsuit Pirates- Missions",
            "バトルオブパイレーツ -囚われのチアと水着海賊-",
            "Harukana Receive x Anima Yell Event missions"
        ],
        "image": [
            "https://i.imgur.com/hWSBzTq.png",
            "https://i.imgur.com/3uoHNm8.png",
            "https://i.imgur.com/LBqs8nS.png",
            "https://i.imgur.com/YLbbmH5.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "August 27 2020, 17:00",
                "end": "September 10 2020, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Swimsuit 2020 Limited-time Summon",
            "期間限定2020水着キャラクターピックアップ召喚",
            "Summer 2020 summon"
        ],
         "image": [
            "https://i.imgur.com/KWilLZc.png",
            "https://i.imgur.com/4QbYAEv.png",
            "https://i.imgur.com/F2A718S.png",
            "https://i.imgur.com/GXAqDJ8.png",
            "https://i.imgur.com/N48Vwkp.png",
            "https://i.imgur.com/k7GMqzq.png",
            "https://i.imgur.com/JOlXlY5.png",
            "https://i.imgur.com/Dqgiqud.png",
            "https://i.imgur.com/BV6J36X.png",
            "https://i.imgur.com/kPZWUB7.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Part 1: Featuring 5* Yuno [Swimsuit], 5* Yukari [Swimsuit], 5* Futaba [Swimsuit]",
                "start": "July 29 2020, 17:00",
                "end": "August 27 2020, 15:59",
                "extraPriority": 6
            },
            {
                "name": "Part 2: Featuring 5* Youko [Swimsuit], 5* Haruka [Swimsuit]",
                "start": "August 3 2020, 0:00",
                "end": "August 27 2020, 15:59"
            },
            {
                "name": "Part 3: Featuring 5* Koyume [Swimsuit], 5* Cocoa [Swimsuit], 5* Ryou [Swimsuit]",
                "start": "August 12 2020, 17:00",
                "end": "August 27 2020, 15:59"
            },
            {
                "name": "Part 4: Featuring 5* Yuuko [Swimsuit], 5* Mikan [Swimsuit]",
                "start": "August 17 2020, 0:00",
                "end": "August 27 2020, 15:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Battle of Pirates -The Imprisoned Cheer and the Swimsuit Pirates- Summon",
            "バトルオブパイレーツ -囚われのチアと水着海賊-ピックアップ召喚",
            "Harukana Receive x Anima Yell Event summon"
        ],
        "image": [
            "https://i.imgur.com/hWSBzTq.png",
            "https://i.imgur.com/3uoHNm8.png",
            "https://i.imgur.com/LBqs8nS.png",
            "https://i.imgur.com/YLbbmH5.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Narumi side: Featuring 5* Tooi Narumi, 4* Tachibana Ayasa",
                "start": "August 27 2020, 17:00",
                "end": "September 10 2020, 15:59",
                "extraPriority": 6
            },
            {
                "name": "Uki side: Featuring 5* Sawatari Uki, 4* Sawatari Uki, 4* Inaba Towa",
                "start": "August 27 2020, 17:00",
                "end": "September 10 2020, 15:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Swimsuit 2018 Limited-time Step-up Summon",
            "期間限定2018水着復刻 おまけ付き10回召喚",
            "Get a Random 5* Summon Ticket on 7th step",
            "Up to 4 steps for free"
        ],
        "image": ["clea"],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Yuzuko [Swimsuit], 5* Aya [Swimsuit], 5* Yuki [Swimsuit], 5* Kou [Swimsuit], 5* Kon [Swimsuit], 5* Shizuku [Swimsuit], 5* Kaho [Swimsuit], 5* Nadeshiko [Swimsuit]",
                "start": "July 29 2020, 17:00",
                "end": "August 12 2020, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Free 10x Summon (once per day)",
                "start": "July 29 2020, 17:00",
                "end": "August 1 2020, 23:59",
                "extraPriority": 1
            },
            {
                name: "Ticket Expiration",
                "start": "July 29 2020, 17:00",
                end: "August 19 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Swimsuit 2019 Limited-time Step-up Summon",
            "期間限定2019水着復刻 おまけ付き10回召喚",
            "Get a Random 5* Summon Ticket on 7th step",
            "Up to 4 steps for free"
        ],
        "image": ["clea"],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Kurumi, 5* Nene [Swimsuit], 5* Maika [Swimsuit], 5* Aoi [Swimsuit], 5* Hana [Swimsuit], 5* Kaos [Swimsuit], 5* Yui [Swimsuit], 5* Chino [Swimsuit], 5* Lamp [Swimsuit]",
                "start": "August 12 2020, 17:00",
                "end": "August 27 2020, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Free 10x Summon (once per day)",
                "start": "August 12 2020, 17:00",
                "end": "August 15 2020, 23:59",
                "extraPriority": 1
            },
            {
                name: "Ticket Expiration",
                "start": "August 12 2020, 17:00",
                "end": "September 3 2020, 15:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "2018 & 2019 Swimsuit Choosable 5* Summon",
            "2018年＆2019年の水着★5キャラが選べる！有償限定10回召喚",
            "600 Paid Gems for a 10x + Choosable Past 5* Swimsuit Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period 1",
                "start": "July 29 2020, 17:00",
                "end": "August 12 2020, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Summon Period 2",
                "start": "August 12 2020, 17:00",
                "end": "August 27 2020, 15:59",
                "extraPriority": 4
            },
            {
                name: "Ticket Expiration",
                "start": "July 29 2020, 17:00",
                "end": "September 3 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Daily Kira-Kira Summon",
            "1日1回きらきら召喚",
            "40 Paid Gems once per day for 3 summons, all 4* or above"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Period",
                "start": "August 2 2020, 0:00",
                "end": "August 8 2020, 23:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Manga Time Kirara Exhibition in Niigata Celebration Summon - Second Half",
            "きらら展in新潟記念期間限定★5確定チケット付き！有償限定10回召喚・後半",
            "400 Paid Gems for a 10x Summon + Random Limited-time 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period: Featuring Limited-time characters from specific series",
                start: "August 22 2020, 0:00",
                end: "August 28 2020, 23:59",
                extraPriority: 4,
                info: "Limited-time characters from Kiniro Mosaic, Gakkou Gurashi!, Stella no Mahou, Urara Meirochou, Sakura Trick, Yuru Camp△, Hanayamata, Comic Girls, Anne Happy♪, Harukana Receive, Gochuumon wa Usagi Desu Ka?, Koufuku Graffiti and Kirara Fantasia"
            },
            {
                name: "Ticket Expiration",
                start: "August 22 2020, 0:00",
                end: "September 4 2020, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Etowaria's Summer Vacation 2020 Login Bonus",
            "2020エトワリアの夏休みログインボーナス",
            "Log in on 10 days for up to 200 Gems on each half"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "First Half",
                "start": "July 29 2020, 17:00",
                "end": "August 12 2020, 23:59"
            },
            {
                name: "Second Half",
                "start": "August 12 2020, 17:00",
                "end": "August 27 2020, 23:59"
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
            "#KiraFan Summer Vacation Twitter Campaign",
            "Twitter連動企画！#きらファン夏休み キャンペーン",
            "Retweet and Like Tweets, get Stamps, exchange for Waku Waku Summon Tickets"
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "Campaign Period",
                "start": "July 29 2020, 17:00",
                "end": "August 12 2020, 15:59"
            },
            {
                name: "Tickets Expiration",
                "start": "July 29 2020, 17:00",
                "end": "August 19 2020, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Main Quest Half Stamina Campaign",
            "メインクエストスタミナ半減キャンペーン",
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "July 29 2020, 17:00",
                "end": "August 12 2020, 15:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Author Quest Half Stamina Campaign",
            "作家クエストスタミナ半減キャンペーン",
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "August 12 2020, 17:00",
                "end": "August 27 2020, 15:59"
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
        image: "https://i.imgur.com/uTmIULA.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "August 1 2020, 0:00",
                end: "August 2 2020, 23:59"
            },
            {
                name: "Weekend 2",
                start: "August 8 2020, 0:00",
                end: "August 9 2020, 23:59"
            },
            {
                name: "Weekend 3",
                start: "August 15 2020, 0:00",
                end: "August 16 2020, 23:59"
            },
            {
                name: "Weekend 4",
                start: "August 22 2020, 0:00",
                end: "August 23 2020, 23:59"
            },
            {
                name: "Weekend 5",
                start: "August 29 2020, 0:00",
                end: "August 30 2020, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "August 1 2020, 0:00",
                end: "September 4 2020, 23:59",
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
            "Summer Vacation Special Sales",
            "夏休み限定！お得な星彩石セット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Special Gem Sets - Part 1",
                "start": "July 29 2020, 17:00",
                "end": "August 12 2020, 15:59"
            },
            {
                name: "Special Gem Sets - Part 2",
                "start": "August 12 2020, 17:00",
                "end": "August 27 2020, 15:59"
            },
            {
                name: "Scorching Swimsuit 5★ Summon Special Support Set",
                "start": "July 29 2020, 17:00",
                "end": "August 12 2020, 15:59"
            },
            {
                name: "Training Item Sets",
                "start": "July 29 2020, 17:00",
                "end": "August 27 2020, 15:59"
            },
            {
                name: "Weapon Evolution Item Sets",
                "start": "August 12 2020, 17:00",
                "end": "August 27 2020, 15:59"
            }
        ]
    }
];

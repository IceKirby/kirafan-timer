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
            "Yutaka's Disciple Aspiration",
            "ユタカの弟子入り志願",
            "Yutaka event"
        ],
        "image": [
            "https://i.imgur.com/WCNDasP.png",
            "https://i.imgur.com/bNyci9X.png",
            "https://i.imgur.com/8phqTKe.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "November 8 2019, 17:00",
                "end": "November 20 2019, 13:59",
                "markers": {
                    "Extra Chapter 1": "November 15 2019, 0:00",
                    "Extra Chapter 2": "November 16 2019, 0:00",
                    "Extra Chapter 3": "November 17 2019, 0:00",
                    "Extra Chapter 4": "November 18 2019, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "November 10 2019, 17:00",
                "end": "November 20 2019, 13:59"
            },
            {
                "name": "EX Quest",
                "start": "November 13 2019, 17:00",
                "end": "November 20 2019, 13:59"
            },
            {
                "name": "Event Shop",
                "start": "November 8 2019, 17:00",
                "end": "November 27 2019, 13:59"
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
            "Yutaka's Disciple Aspiration Missions",
            "ユタカの弟子入り志願",
            "Yutaka event missions"
        ],
        "image": [
            "https://i.imgur.com/WCNDasP.png",
            "https://i.imgur.com/bNyci9X.png",
            "https://i.imgur.com/8phqTKe.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "November 8 2019, 17:00",
                "end": "November 20 2019, 23:59",
                "markers": {},
                "extraPriority": 2
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
        "type": "Mission",
        "title": [
            "Yuyushiki Costume in the Forest's Lodge Missions",
            "森の小屋のゆゆしき着ぐるみ",
            "Yuyushiki Author Quest missions"
        ],
        "image": [
            "https://i.imgur.com/w9TzLsf.png",
            "https://i.imgur.com/9NtxxmZ.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "November 1 2019, 17:00",
                "end": "November 14 2019, 23:59",
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Yutaka's Disciple Aspiration Summon",
            "ユタカの弟子入り志願",
            "Yutaka event summon"
        ],
        "image": [
            "https://i.imgur.com/WCNDasP.png",
            "https://i.imgur.com/bNyci9X.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Umiko side: Featuring 5* Ahagon Umiko",
                "start": "November 8 2019, 17:00",
                "end": "November 21 2019, 13:59",
                "extraPriority": 6
            },
            {
                "name": "Engi side: Featuring 5* Engi Threepiece",
                "start": "November 8 2019, 17:00",
                "end": "November 21 2019, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Yuyushiki Costume in the Forest's Lodge Summon",
            "森の小屋のゆゆしき着ぐるみ",
            "Yuyushiki Author Quest summon"
        ],
        "image": [
            "https://i.imgur.com/w9TzLsf.png",
            "https://i.imgur.com/9NtxxmZ.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Yui side: Featuring 5* Ichii Yui (Water Knight)",
                "start": "November 1 2019, 17:00",
                "end": "November 8 2019, 16:59",
                "extraPriority": 6
            },
            {
                "name": "Aikawa-san side: Featuring 5* Aikawa Chiho",
                "start": "November 1 2019, 17:00",
                "end": "November 8 2019, 16:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Yuyushiki Limited-time Summon",
            "ゆゆ式 期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/KrPAj6v.png",
            "https://i.imgur.com/2BTSJ5I.png",
            "https://i.imgur.com/IZXeYB7.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Yuzuko [Swimsuit], 5* Ichii Yui (Wind Knight), 5* Hinata Yukari",
                "start": "November 1 2019, 17:00",
                "end": "November 8 2019, 16:59",
                "extraPriority": 4,
                "info": "Also 3* and 4* characters from Yuyushiki"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "NEW GAME! Limited-time Summon",
            "NEW GAME! 期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/iwj7vk7.png",
            "https://i.imgur.com/WpuxzQE.png",
            "https://i.imgur.com/zMGAG2U.png",
            "https://i.imgur.com/eNeHjZ8.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "First half: Featuring 5* Yun [Doll's Festival], 5* Nene [Swimsuit], 5* Mochizuki Momiji, 5* Narumi Tsubame, 4* Momiji [New Year], 4* Tsubame [Valentine]",
                "start": "November 8 2019, 17:00",
                "end": "November 15 2019, 16:59",
                "extraPriority": 4,
                "info": "Also 3* and 4* characters from NEW GAME!"
            }
        ]
    },
     {
        "type": "Gacha",
        "title": [
            "A-Channel Limited-time Summon",
            "Aチャンネル 期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/MkCgmcj.png",
            "https://i.imgur.com/PZVrQ1r.png",
            "https://i.imgur.com/4X8BB8U.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Run, 5* Yuuko [Christmas], 5* Nagi, 4* Tooru [Swimsuit], 4* Run [Christmas]",
                "start": "November 8 2019, 17:00",
                "end": "November 15 2019, 16:59",
                "extraPriority": 4,
                "info": "Also 3* and 4* characters from A-Channel"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "700 Days Celebration Summon",
            "リリース700日記念★5選べるチケット付き！有償限定10回召喚",
            "300 paid gems for a 10x Summon + a Choosable 5* Summon Ticket"
        ],
        image: "clea",
        column: 1,
        priority: 1,
        timers: [
            {
                name: "Summon Period",
                start: "November 10 2019, 0:00",
                end: "November 23 2019, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "November 10 2019, 0:00",
                end: "November 30 2019, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "700 Days Celebration Login Bonus",
            "700日記念ログインボーナス",
            "Login on 10 days for up to 300 gems"
        ],
        image: "kirara",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "November 10 2019, 0:00",
                end: "November 23 2019, 23:59",
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
            "700 Days Celebration Gem Sale",
            "700日記念お得な星彩石セット販売",
            "Discounted Gem Set prices"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "November 10 2019, 0:00",
                end: "November 23 2019, 23:59"
            }
        ]
    }
];

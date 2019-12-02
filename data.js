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
            "Summon Renovation"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "November 21 2019, 14:00",
                end: "November 21 2019, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Etowaria & Explorer",
            "エトワリア＆エクスプローラー",
            "RPG Event"
        ],
        "image": [
            "https://i.imgur.com/z1qhKZJ.png",
            "https://i.imgur.com/IEmFUyL.png",
            "https://i.imgur.com/gtIcnHe.png",
            "https://i.imgur.com/ZBMU1kY.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "November 21 2019, 17:00",
                "end": "December 4 2019, 13:59",
                "markers": {
                    "Extra Chapter 1": "November 28 2019, 0:00",
                    "Extra Chapter 2": "November 29 2019, 0:00",
                    "Extra Chapter 3": "November 30 2019, 0:00",
                    "Extra Chapter 4": "December 1 2019, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "November 23 2019, 17:00",
                "end": "December 4 2019, 13:59"
            },
            {
                "name": "EX Quest",
                "start": "November 25 2019, 17:00",
                "end": "December 4 2019, 13:59"
            },
            {
                "name": "Event Shop",
                "start": "November 21 2019, 17:00",
                "end": "December 11 2019, 13:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Boss Challenge Quest Rush!",
            "強敵チャレンジクエストラッシュ！",
            "One boss per day, get Lottery Tickets by beating them"
        ],
        image: "https://i.imgur.com/QyVo28T.png",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "December 4 2019, 0:00",
                end: "December 10 2019, 23:59",
                "markers": {
                    "Mecha Kokeshi": "December 4 2019, 0:00",
                    "Pera Pera Dragon": "December 5 2019, 0:00",
                    "Blanket Society": "December 6 2019, 0:00",
                    "Bull Brothers": "December 7 2019, 0:00",
                    "Berserk Sabo": "December 8 2019, 0:00",
                    "Black Snowman General": "December 9 2019, 0:00",
                    "Sweets Golem": "December 10 2019, 0:00"
                }
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Lottery Tickets Exchange Shop",
            "Exchange unused Lottery Tickets for items"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "December 11 2019, 14:00",
                end: "December 26 2019, 23:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Etowaria & Explorer Missions",
            "エトワリア＆エクスプローラー",
            "RPG Event missions"
        ],
        "image": [
            "https://i.imgur.com/z1qhKZJ.png",
            "https://i.imgur.com/IEmFUyL.png",
            "https://i.imgur.com/gtIcnHe.png",
            "https://i.imgur.com/ZBMU1kY.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "November 21 2019, 17:00",
                "end": "December 4 2019, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
    {
        type: "Mission",
        title: [
            "2nd Anniversary Countdown Missions",
            "2周年直前！特別ミッション"
        ],
        image: "https://i.imgur.com/QyVo28T.png",
        column: 0,
        timers: [
            {
                name: "Period",
                start: "December 4 2019, 0:00",
                end: "December 10 2019, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Etowaria & Explorer Summon",
            "エトワリア＆エクスプローラー ピックアップ召喚",
            "RPG Event summon"
        ],
        "image": [
            "https://i.imgur.com/z1qhKZJ.png",
            "https://i.imgur.com/IEmFUyL.png",
            "https://i.imgur.com/gtIcnHe.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Mii-kun side: Featuring 5* Naoki Miki",
                "start": "November 21 2019, 17:00",
                "end": "December 3 2019, 23:59",
                "extraPriority": 6
            },
            {
                "name": "Kaho side: Featuring 5* Hinata Kaho",
                "start": "November 21 2019, 17:00",
                "end": "December 3 2019, 23:59"
            },
            {
                "name": "Isana side: Featuring 5* Tachibana Isana",
                "start": "November 21 2019, 17:00",
                "end": "December 3 2019, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Blend-S Limited-time Summon",
            "ブレンド・S 期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/ZMtMFRY.png",
            "https://i.imgur.com/CbcrIVq.png",
            "https://i.imgur.com/silLJ0S.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Maika [Swimsuit], 5* Kaho [New Year], 5* Hoshikawa Mafuyu, 4* Maika [Doll's Festival]",
                "start": "November 25 2019, 17:00",
                "end": "December 2 2019, 16:59",
                "extraPriority": 4,
                "info": "Also 3* and 4* characters from Blend-S"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Gakkou Gurashi! Limited-time Summon",
            "がっこうぐらし！ 期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/2AT3pwP.png",
            "https://i.imgur.com/2ZlmgEy.png",
            "https://i.imgur.com/2VN6PXL.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Yuki [Swimsuit], 5* Kurumi [Swimsuit], 5* Wakasa Yuuri",
                "start": "November 25 2019, 17:00",
                "end": "December 2 2019, 16:59",
                "extraPriority": 4,
                "info": "Also 3* and 4* characters from Gakkou Gurashi!"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Christmas 2017 Limited-time Summon",
            "期間限定2017クリスマスキャラクターピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/U9nbwpa.png",
            "https://i.imgur.com/Cj54UYs.png",
            "https://i.imgur.com/KVNJMPX.png",
            "https://i.imgur.com/7GBd6j7.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Yuuko [Christmas], 5* Alice [Christmas], 5* Hajime [Christmas], 5* Chiya [Christmas], 4* Run [Christmas], 4* Tamaki [Christmas]",
                "start": "December 2 2019, 17:00",
                "end": "December 10 2019, 23:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Christmas 2018 Limited-time Summon",
            "期間限定2018クリスマスキャラクターピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/LjVJ7D6.png",
            "https://i.imgur.com/XYiJkN8.png",
            "https://i.imgur.com/Qe7xpPR.png",
            "https://i.imgur.com/40vbktO.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Yuno [Christmas], 5* Tooru [Christmas], 5* Hifumi [Christmas], 5* Merry [Christmas]",
                "start": "December 2 2019, 17:00",
                "end": "December 10 2019, 23:59",
                "extraPriority": 4
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Choosable 5* Summon Ticket",
            "★5選べるチケット付き！有償限定10回召喚"
        ],
        image: "clea",
        column: 1,
        timers: [
            {
                name: "1st Half",
                start: "December 4 2019, 0:00",
                end: "December 26 2019, 23:59"
            },
            {
                name: "2nd Half",
                start: "December 11 2019, 0:00",
                end: "December 26 2019, 23:59"
            },
            {
                name: "Ticket Expiration",
                start: "December 11 2019, 0:00",
                end: "December 26 2019, 23:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "10x Step-up Summon with Extra Rewards",
            "大×2感謝抽選会 おまけ付き10回召喚",
            "Lottery Tickets for 1st~6th step, Random 5* Ticket for 7th step"
        ],
        image: "clea",
        column: 1,
        timers: [
            {
                name: "Period",
                start: "December 4 2019, 0:00",
                end: "December 10 2019, 23:59"
            },
            {
                name: "Ticket Expiration",
                start: "December 4 2019, 0:00",
                end: "December 17 2019, 23:59"
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
            "Main Quest & Author Quest Half Stamina Campaign",
            "メインクエスト＆作家クエストスタミナ半減キャンペーン",
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "December 4 2019, 0:00",
                end: "December 10 2019, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Very x2 Thanks Countdown Login Bonus",
            "大×2感謝カウントダウンログインボーナス",
            "22 Lottery Tickets per Login"
        ],
        image: "https://i.imgur.com/QyVo28T.png",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "December 4 2019, 0:00",
                end: "December 10 2019, 23:59"
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
        type: "WeekendBoss",
        title: [
            "December Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/ZS04jT8.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "December 7 2019, 0:00",
                end: "December 8 2019, 23:59"
            },
            {
                name: "Weekend 2",
                start: "December 14 2019, 0:00",
                end: "December 15 2019, 23:59"
            },
            {
                name: "Weekend 3",
                start: "December 21 2019, 0:00",
                end: "December 22 2019, 23:59"
            },
            {
                name: "Weekend 4",
                start: "December 28 2019, 0:00",
                end: "December 29 2019, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "December 7 2019, 0:00",
                end: "January 3 2020, 23:59",
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
            "2nd Anniversary Celebration Gem Sale",
            "2周年記念特別セール！星彩石セット販売"
        ],
        image: "https://i.imgur.com/QyVo28T.png",
        column: 2,
        timers: [
            {
                name: "Discounted Gem Sets",
                start: "December 4 2019, 0:00",
                end: "December 26 2019, 23:59"
            },
            {
                name: "2000 Gems + Choosable 5* Ticket",
                start: "December 11 2019, 0:00",
                end: "December 26 2019, 23:59"
            },
            {
                name: "Ticket Expiration",
                start: "December 11 2019, 0:00",
                end: "January 2 2020, 23:59"
            },
            
        ]
    }
];

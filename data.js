var alertMessages = [];
var alertTypes = [];
var timerData = [
    {
        type: "DailyQuest",
        title: "Daily Quests",
        priority: 50,
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
        priority: 40,
        timers: [
            {
                name: "Scheduled Time",
                start: "August 5 2021, 16:00",
                end: "August 5 2021, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Summer Night Radio",
            "サマーナイト・レディオ",
            "Summer 2021 Event"
        ],
        "image": [
            "https://i.imgur.com/xRxyFOS.png",
            "https://i.imgur.com/9p7nWjo.png",
            "https://i.imgur.com/b945uWJ.png",
            "https://i.imgur.com/eC1qgpZ.png",
            "https://i.imgur.com/6w0SCbt.png",
            "https://i.imgur.com/JgJ80hO.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "July 21 2021, 17:00",
                "end": "August 20 2021, 11:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "July 27 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "July 23 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "August 1 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "August 2 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "August 3 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "August 4 2021, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "July 21 2021, 17:00",
                "end": "August 20 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "July 21 2021, 17:00",
                "end": "August 27 2021, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Summer Night Resort",
            "サマーナイト・リゾート",
            "Summer 2021 Event Part 2"
        ],
        "image": [
            "https://i.imgur.com/IswZuBu.png",
            "https://i.imgur.com/nvyz3TC.png",
            "https://i.imgur.com/RwibocS.png",
            "https://i.imgur.com/zqqwHYm.png",
            "https://i.imgur.com/VRRWYG4.png",
            "https://i.imgur.com/F2q5GC1.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "August 5 2021, 17:00",
                "end": "August 20 2021, 11:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "August 10 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "August 7 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Super EX Quest",
                        "time": "August 12 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "August 15 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "August 16 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "August 17 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "August 18 2021, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "August 5 2021, 17:00",
                "end": "August 20 2021, 23:59"
            },
            {
                "name": "Event Shop/Mysterious Treasure Chest",
                "start": "August 5 2021, 17:00",
                "end": "August 27 2021, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Swimsuit Character 2021 Limited-time Summon",
            "期間限定2021水着キャラクターピックアップ召喚",
            "Summer 2021 Event Summon"
        ],
        "image": [
            "https://i.imgur.com/xRxyFOS.png",
            "https://i.imgur.com/9p7nWjo.png",
            "https://i.imgur.com/b945uWJ.png",
            "https://i.imgur.com/eC1qgpZ.png",
            "https://i.imgur.com/6w0SCbt.png",
            "https://i.imgur.com/IswZuBu.png",
            "https://i.imgur.com/nvyz3TC.png",
            "https://i.imgur.com/RwibocS.png",
            "https://i.imgur.com/zqqwHYm.png",
            "https://i.imgur.com/VRRWYG4.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "July 21 2021, 17:00",
                "end": "August 20 2021, 11:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5★ Nazuna [Swimsuit], 5★ Nagi [Swimsuit], 5★ Kotetsu [Swimsuit]",
                        "time": "July 21 2021, 17:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5★ Yui [Swimsuit], 5★ Megumi [Swimsuit]",
                        "time": "July 21 2021, 17:00"
                    },
                    {
                        "title": "Part 3",
                        "desc": "Featuring 5★ Yui [Swimsuit], 5★ Syaro [Swimsuit], 5★ Sakura [Swimsuit]",
                        "time": "August 5 2021, 17:00"
                    },
                    {
                        "title": "Part 4",
                        "desc": "Featuring 5★ Botan [Swimsuit], 5★ Ryoko [Swimsuit]",
                        "time": "August 5 2021, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Past 2017~2019 Limited-time Paid Summon + Choosable 5★ Summon Ticket",
            "期間限定復刻★5選べるチケット付き！有償限定10回召喚",
            "1,000 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "July 21 2021, 17:00",
                "end": "July 28 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "July 21 2021, 17:00",
                "end": "August 4 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Manga Time Kirara MAX Limited-time Deluxe Summon",
            "まんがタイムきららMAX期間限定デラックス召喚",
            "1000 Paid Gems for a 10x 5* Summon"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "July 29 2021, 0:00",
                "end": "August 5 2021, 15:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Past 2021 Paid Summon + Choosable 5★ Summon Ticket",
            "期間限定2021復刻★5選べるチケット付き！有償限定10回召喚",
            "600 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "July 21 2021, 17:00",
                "end": "July 28 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "July 21 2021, 17:00",
                "end": "August 4 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Past Limited-time Swimsuit 2020 Step-up Summon",
            "期間限定2020水着復刻おまけ付き10回召喚",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Yuno [Swimsuit], 5★ Yukari [Swimsuit], 5★ Yuuko [Swimsuit], 5★ Youko [Swimsuit], 5★ Haruka [Swimsuit], 5★ Koyume [Swimsuit], 5★ Cocoa [Swimsuit], 5★ Futaba [Swimsuit], 5★ Mikan [Swimsuit], 5★ Ryou [Swimsuit]",
                "start": "July 21 2021, 17:00",
                "end": "July 28 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "July 21 2021, 17:00",
                "end": "August 4 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Limited-time Swimsuit Paid Summon + Choosable 5★ Summon Ticket",
            "期間限定水着★5選べるチケット付き！有償限定10回召喚",
            "1,000 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "First Half",
                "start": "July 21 2021, 17:00",
                "end": "August 5 2021, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "July 21 2021, 17:00",
                "end": "August 27 2021, 23:59"
            },
            {
                "name": "Second Half",
                "start": "August 5 2021, 17:00",
                "end": "August 20 2021, 11:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration (Second Half)",
                "start": "August 5 2021, 17:00",
                "end": "August 27 2021, 23:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Manga Time Kirara Forward Limited-time Deluxe Summon",
            "まんがタイムきららフォワード期間限定デラックス召喚",
            "1000 Paid Gems for a 10x 5* Summon"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "August 5 2021, 17:00",
                "end": "August 12 2021, 23:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Daily KiraKira Limited-time Summon",
            "1日1回期間限定きらきら召喚",
            "40 Paid Gems once per day for 3 summons, all 4* or above",
            "Receive Ticket Pieces and exchange for a Past Swimsuit Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period & Ticket Exchange",
                "start": "July 21 2021, 17:00",
                "end": "August 4 2021, 23:59",
                "extraPriority": 1
            },
            {
                "name": "Ticket Expiration",
                "start": "July 21 2021, 17:00",
                "end": "August 11 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Daily KiraKira Limited-time Summon",
            "1日1回期間限定きらきら召喚",
            "40 Paid Gems once per day for 3 summons, all 4* or above"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Yuno [Christmas], 5★ Yuno [Swimsuit], 5★ Miyako [Christmas], 5★ Yuzuko [Swimsuit], 5★ Yukari [Swimsuit], 5★ Tooru [Christmas], 5★ Run [New Year], 5★ Yuuko [Christmas], 5★ Yuuko [Swimsuit], 5★ Yuki [Swimsuit], 5★ Kurumi [Swimsuit], 5★ Kurumi [Christmas], 5★ Yuuri [New Year], 5★ Yuuri [Hot Spring], 5★ Miki [Halloween], 5★ Kohane [Bridal], 5★ Hizume [Maid], 5★ Kotetsu [Christmas], 5★ Kana [White Day], 5★ Lamp [Swimsuit], 5★ Lamp [Tanabata], 4★ Tooru [Swimsuit], 4★ Run [Christmas]",
                "start": "July 28 2021, 0:00",
                "end": "August 4 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Daily KiraKira Limited-time Summon",
            "1日1回期間限定きらきら召喚",
            "40 Paid Gems once per day for 3 summons, all 4* or above"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring characters from the Summer Night Resort event",
                "start": "August 5 2021, 17:00",
                "end": "August 11 2021, 23:59",
                "extraPriority": 4
            }
        ]
    },
    {
        type: "Other",
        title: [
            "1200 Days Celebration Login Bonus",
            "1200日記念ログインボーナス",
            "Log in on 10 days for up to 300 Free Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "March 24 2021, 0:00",
                "end": "April 6 2021, 23:59"
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
        priority: 14,
        timers: [
            {
                name: "Part 2",
                "start": "June 17 2021, 0:00",
                "end": "July 1 2021, 23:59"
            },
            {
                name: "Part 1 (Normal Mode)",
                "start": "June 24 2021, 17:00",
                "end": "July 7 2021, 15:59"
            }
        ]
    },
    {
        "type": "WeekendBoss",
        "title": [
            "July Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        "image": "https://i.imgur.com/NJ8BaFX.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "July 3 2021, 0:00",
                "end": "July 4 2021, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "July 10 2021, 0:00",
                "end": "July 11 2021, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "July 17 2021, 0:00",
                "end": "July 18 2021, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "July 24 2021, 0:00",
                "end": "July 25 2021, 23:59"
            },
            {
                "name": "Weekend 5",
                "start": "July 31 2021, 0:00",
                "end": "August 1 2021, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "July 3 2021, 0:00",
                "end": "August 6 2021, 23:59",
                "keepAfterFinished": "2 hours",
                "type": "normal"
            }
        ]
    },
    {
        "type": "WeekendBoss",
        "title": [
            "August Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        "image": "https://i.imgur.com/GlitMVy.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "August 7 2021, 0:00",
                "end": "August 8 2021, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "August 14 2021, 0:00",
                "end": "August 15 2021, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "August 21 2021, 0:00",
                "end": "August 22 2021, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "August 28 2021, 0:00",
                "end": "August 29 2021, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "August 7 2021, 0:00",
                "end": "September 3 2021, 23:59",
                "keepAfterFinished": "2 hours",
                "type": "normal"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "KiraFan Summer Night Campaign Missions",
            "きらファンサマーナイトキャンペーンミッション",
            "Daily Missions for a Summon Ticket"
        ],
        "image": "match",
        "column": 0,
        "priority": 30,
        "timers": [
            {
                "name": "Period",
                "start": "July 10 2021, 0:00",
                "end": "August 20 2021, 23:59",
                "extraPriority": 1
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "KiraFan Summer Night Heart-throbbing Summon",
            "きらファンサマーナイトドキドキ召喚",
            "Receive Ticket Pieces to exchange for 5* Summon Tickets"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "July 10 2021, 0:00",
                "end": "August 20 2021, 23:59",
                "extraPriority": 5
            },
            {
                "name": "Ticket Expiration",
                "start": "July 10 2021, 0:00",
                "end": "August 27 2021, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Etowaria's Summer Vacation 2021 Login Bonus",
            "2021エトワリアの夏休み 前半 ログインボーナス",
            "Log in on 10 days to receive up to 200 Starlight Stones."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "First Half",
                "start": "July 21 2021, 17:00",
                "end": "August 5 2021, 23:59"
            },
            {
                "name": "Second Half",
                "start": "August 5 2021, 17:00",
                "end": "August 20 2021, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Summer Campaign Special Sale",
            "お得なアイテムセット販売"
        ],
        "image": "cork",
        "column": 2,
        "priority": 12,
        "timers": [
            {
                "name": "First Half: Item & Gem Sets",
                "start": "July 21 2021, 17:00",
                "end": "August 5 2021, 15:59"
            },
            {
                "name": "First Half: Past Swimsuit 5★ Summon Special Support Set, Midsummer 5★ Summon Special Support Set, Past Swimsuit 2020 Random 5★ Summon Ticket",
                "start": "July 21 2021, 17:00",
                "end": "July 28 2021, 23:59"
            },
            {
                "name": "Second Half: Item & Gem Sets",
                "start": "August 5 2021, 17:00",
                "end": "August 20 2021, 11:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Summer-themed Room Decoration Items",
            "夏限定ルームアイテム再登場"
        ],
        "image": "kanna",
        "column": 2,
        "priority": 10,
        "timers": [
            {
                "name": "Period",
                "start": "July 21 2021, 17:00",
                "end": "August 20 2021, 11:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Main Quest Half Stamina Campaign",
            "メインクエストスタミナ半減キャンペーン"
        ],
        "image": "match",
        "column": 2,
        "priority": 14,
        "timers": [
            {
                "name": "Main Quest Part 1 & 2",
                "start": "July 21 2021, 17:00",
                "end": "August 20 2021, 11:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Summer-themed BGM",
            "音楽も夏仕様に！BGM変更"
        ],
        "image": "leine",
        "column": 2,
        "priority": 10,
        "timers": [
            {
                "name": "Period",
                "start": "July 21 2021, 17:00",
                "end": "August 20 2021, 11:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "KiraFan Summer Night Twitter Campaign",
            "きらファンサマーナイトTwitterキャンペーン",
            "Login to receive the Retweets/Likes Campaign rewards"
        ],
        "image": "kirara",
        "column": 2,
        "priority": 11,
        "timers": [
            {
                "name": "Retweet Reward Retrieval Period",
                "start": "July 21 2021, 17:00",
                "end": "July 22 2021, 23:59",
                "extraPriority": 10
            },
            {
                "name": "Likes Reward Retrieval Period",
                "start": "August 5 2021, 17:00",
                "end": "August 6 2021, 23:59",
                "extraPriority": 10
            }
        ]
    }
];

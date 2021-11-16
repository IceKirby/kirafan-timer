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
                start: "November 11 2021, 16:00",
                end: "November 11 2021, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Halloween's Witch Castle",
            "ハロウィン魔女魔城",
            "Halloween 2021 Event"
        ],
        "image": [
            "https://i.imgur.com/42KMULm.png",
            "https://i.imgur.com/fFx9Zda.png",
            "https://i.imgur.com/j6ZKoot.png",
            "https://i.imgur.com/Ya314qo.png",
            "https://i.imgur.com/tr5Ijub.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "October 27 2021, 17:00",
                "end": "November 11 2021, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "November 1 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "October 29 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "November 5 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "November 6 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "November 7 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "November 8 2021, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "October 27 2021, 17:00",
                "end": "November 11 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "October 27 2021, 17:00",
                "end": "November 18 2021, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Cut the Jabon!",
            "ジャボンを斬る！",
            "Tamayomi x Harukana Receive x Power of Smile. x Anima Yell! Event"
        ],
        "image": [
            "https://i.imgur.com/7xLj4Pw.png",
            "https://i.imgur.com/mUDIevI.png",
            "https://i.imgur.com/ivslxhB.png",
            "https://i.imgur.com/R4jkJvX.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "November 11 2021, 17:00",
                "end": "November 25 2021, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "November 16 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "November 13 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "November 19 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "November 20 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "November 21 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "November 22 2021, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "November 11 2021, 17:00",
                "end": "November 25 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "November 11 2021, 17:00",
                "end": "December 2 2021, 13:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "4th Anniversary Heart-Throbbing Summon",
            "4th ANNIVERSARYドキドキ召喚",
            "Clear missions to receive Summon Tickets",
            "Use Ticket Pieces to receive a Random 5* Summon Ticket"
        ],
        "image": ["kirara"],
        "column": 0,
        "priority": 31,
        "timers": [
            {
                "name": "Missions & Ticket Exchange",
                "start": "November 14 2021, 0:00",
                "end": "November 20 2021, 23:59",
                "extraPriority": 3
            },
            {
                "name": "Ticket Expiration",
                "start": "November 14 2021, 0:00",
                "end": "November 27 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Cut the Jabon! Summon",
            "ジャボンを斬る！ピックアップ召喚",
            "Tamayomi x Harukana Receive x Power of Smile. x Anima Yell! Event Summon"
        ],
        "image": [
            "https://i.imgur.com/7xLj4Pw.png",
            "https://i.imgur.com/mUDIevI.png",
            "https://i.imgur.com/ivslxhB.png",
            "https://i.imgur.com/R4jkJvX.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "November 11 2021, 17:00",
                "end": "November 18 2021, 16:59",
                "banners": [
                    {
                        "title": "Nozomi Side",
                        "desc": "Featuring 5★ Nakamura Nozomi",
                        "time": "November 11 2021, 17:00"
                    },
                    {
                        "title": "Miku Side",
                        "desc": "Featuring 5★ Souenji Miku",
                        "time": "November 11 2021, 17:00"
                    }
                ],
                "extraPriority": 6
            },
            {
                "name": "Summon Period",
                "start": "November 18 2021, 17:00",
                "end": "November 25 2021, 15:59",
                "banners": [
                    {
                        "title": "Hizume Side",
                        "desc": "Featuring 5★ Arima Hizume, 4★ Arima Hizume",
                        "time": "November 18 2021, 17:00"
                    },
                    {
                        "title": "Ayasa Side",
                        "desc": "Featuring 5★ Tachibana Ayasa, 4★ Tachibana Ayasa",
                        "time": "November 18 2021, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Past Limited-Time Halloween Step-up Summon",
            "期間限定ハロウィン復刻おまけ付き10回召喚",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Miki [Halloween], 5★ Sonya [Halloween], 5★ Claire [Halloween], 5★ Rize [Halloween], 5★ Syaro [Halloween], 5★ Noda Miki [Halloween]",
                "start": "November 10 2021, 0:00",
                "end": "November 17 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "November 10 2021, 0:00",
                "end": "November 24 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Limited-Time Priest Step-up & Paid Summon",
            "2つの召喚を同時開催！そうりょのキャラクターを仲間にしよう！",
            "240 Paid Gems for a 10x Summon + Random 5★ Summon Ticket",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Yuno, 5★ Karen [Sports Festival], 5★ Merry [Valentine], 5★ Rin [White Day], 5★ Moeta Kaoruko, 5★ Kumegawa Botan, 5★ Chiya, 5★ Lamp [Tanabata]",
                "start": "November 17 2021, 17:00",
                "end": "November 23 2021, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "November 17 2021, 17:00",
                "end": "November 30 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "GochiUsa Exhibit Limited-Time Paid Summon",
            "ごちうさ展記念期間限定★5確定チケット付き！有償限定10回召喚・大阪編",
            "700 Paid Gems for a 10x Summon + 2x Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Cocoa [Christmas], 5★ Cocoa [Swimsuit], 5★ Chino [Swimsuit], 5★ Rize [Halloween], 5★ Chiya [Christmas], 5★ Syaro [Halloween], 5★ Syaro [Swimsuit]",
                "start": "November 18 2021, 0:00",
                "end": "November 30 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "November 18 2021, 0:00",
                "end": "December 7 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara Exhibition in Nagoya Paid Summon + Random 5★ Summon Ticket",
            "きらら展in名古屋記念期間限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "November 3 2021, 0:00",
                "end": "November 9 2021, 23:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "",
                        "time": "November 3 2021, 0:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "",
                        "time": "November 3 2021, 0:00"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "November 3 2021, 0:00",
                "end": "November 16 2021, 23:59"
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
                name: "Part 2 (Chapters 1~3)",
                "start": "September 18 2021, 0:00",
                "end": "September 29 2021, 15:59"
            },
            {
                name: "Part 1 (Chapters 1~Prologue, Normal Mode)",
                "start": "September 2 2021, 17:00",
                "end": "September 14 2021, 15:59"
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
        "type": "WeekendBoss",
        "title": [
            "November Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        "image": "https://i.imgur.com/Q85rPpa.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "November 6 2021, 0:00",
                "end": "November 7 2021, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "November 13 2021, 0:00",
                "end": "November 14 2021, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "November 20 2021, 0:00",
                "end": "November 21 2021, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "November 27 2021, 0:00",
                "end": "November 28 2021, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "November 6 2021, 0:00",
                "end": "December 3 2021, 23:59",
                "keepAfterFinished": "2 hours",
                "type": "normal"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Special Item Bundle",
            "お得なアイテムセット販売"
        ],
        "image": "cork",
        "column": 2,
        "priority": 12,
        "timers": [
            {
                "name": "Halloween Special Item Bundle",
                "start": "November 10 2021, 0:00",
                "end": "November 17 2021, 23:59"
            },
            {
                "name": "New Halloween Summon Ticket Expiration",
                "start": "October 27 2021, 17:00",
                "end": "November 18 2021, 23:59"
            },
            {
                "name": "Kirara Exhibition in Nagoya Starlight Stone Bundle",
                "start": "November 3 2021, 0:00",
                "end": "November 9 2021, 23:59"
            },
            {
                "name": "GochiUsa Exhibit Item Bundles",
                "start": "November 18 2021, 0:00",
                "end": "November 30 2021, 23:59"
            }
        ]
    }
];

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
            "Summon Renovation",
            "Version 3.2.3 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 40,
        timers: [
            {
                name: "Scheduled Time",
                start: "November 25 2021, 16:00",
                end: "November 25 2021, 17:00",
                keepAfterFinished: "30 minutes"
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
            "Use Ticket Pieces to receive up to 8x Random 5* Summon Ticket"
        ],
        "image": ["kirara"],
        "column": 0,
        "priority": 31,
        "timers": [
            {
                "name": "Missions & Ticket Exchange",
                "start": "November 14 2021, 0:00",
                "end": "January 8 2022, 23:59",
                "extraPriority": 3
            },
            {
                "name": "Ticket Expiration",
                "start": "November 14 2021, 0:00",
                "end": "January 15 2022, 23:59"
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
            "Past Kirara Fantasia Main Quest Part 2 Limited-time Summon",
            "きららファンタジア第2部限定復刻ピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/rdrvGmy.png",
            "https://i.imgur.com/p9OHB8T.png",
            "https://i.imgur.com/WgjwdJP.png",
            "https://i.imgur.com/6NcsqPF.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Lilith [Part 2], 5★ Fennel [Part 2], 5★ Namiko-san [Part 2], 5★ Cardamom [Part 2]",
                "start": "November 21 2021, 0:00",
                "end": "November 25 2021, 15:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Main Quest Part 2 Limited Paid Summon + Random 5★ Summon Ticket",
            "きららファンタジア第2部限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Namiko-san [Part 2], 5★ Lilith [Part 2], 5★ Cardamom [Part 2], 5★ Fennel [Part 2]",
                "start": "November 21 2021, 0:00",
                "end": "November 25 2021, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "November 21 2021, 0:00",
                "end": "December 2 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Past Limited-Time Paid Summon + Choosable 5★ Summon Ticket",
            "期間限定復刻★5選べるチケット付き！有償限定10回召喚",
            "1,000 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring Limited-time characters from 2017~2020",
                "start": "November 19 2021, 0:00",
                "end": "November 21 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "November 19 2021, 0:00",
                "end": "November 28 2021, 23:59"
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
                name: "Part 2 (Chapters 1~4)",
                "start": "November 21 2021, 0:00",
                "end": "December 2 2021, 23:59"
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
            "All Limited-time Room Decoration Items Available",
            "ルームショップに全ての限定アイテムが再登場"
        ],
        "image": "kanna",
        "column": 2,
        "priority": 10,
        "timers": [
            {
                "name": "Period",
                "start": "November 25 2021, 17:00",
                "end": "December 10 2021, 23:59"
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
                "name": "GochiUsa Exhibit Item Bundles",
                "start": "November 18 2021, 0:00",
                "end": "November 30 2021, 23:59"
            },
            {
                "name": "4th Anniversary Fes Starlight Stone Bundle",
                "start": "November 19 2021, 0:00",
                "end": "November 21 2021, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "4th Anniversary Fes. Login Bonus",
            "4th ANNIVERSARY FES.記念ログインボーナス",
            "Log in everyday to receive up to 3 Summon Tickets."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "November 19 2021, 0:00",
                "end": "November 21 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "FES. Cast Characters Paid Summon + Choosable 5★ Summon Ticket",
            "FES.出演キャラクター★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Stones for a 10x Summon + Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Period",
                "start": "November 19 2021, 0:00",
                "end": "November 21 2021, 23:59"
            },
            {
                "name": "Ticket Expiration",
                "start": "November 19 2021, 0:00",
                "end": "November 28 2021, 23:59"
            }
        ]
    }
];

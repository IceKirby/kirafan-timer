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
            "Version 3.2.11 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 40,
        timers: [
            {
                name: "Scheduled Time",
                start: "July 27 2022, 16:00",
                end: "July 27 2022, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Midsummer's Etowaria Fes",
            "真夏のエトワリアフェス",
            "Swimsuit 2022 Event"
        ],
        "image": [
            "https://i.imgur.com/VoZSUoW.png",
            "https://i.imgur.com/pesnGNF.png",
            "https://i.imgur.com/Zb0gGYI.png",
            "https://i.imgur.com/fDBfrCn.png",
            "https://i.imgur.com/XBMQ6Bf.png",
            "https://i.imgur.com/IRZLDwg.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "July 27 2022, 17:00",
                "end": "August 25 2022, 14:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "August 3 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "July 29 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "August 6 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "August 7 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "August 8 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "August 9 2022, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "July 27 2022, 17:00",
                "end": "August 25 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "July 27 2022, 17:00",
                "end": "September 1 2022, 13:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Main Quest Part 2 Chapter 8 Missions",
            "メインクエスト第2部8章&最終章追加記念 期間限定ミッション"
        ],
        "image": "match",
        "column": 0,
        "priority": 30,
        "timers": [
            {
                "name": "Period",
                "start": "July 12 2022, 17:00",
                "end": "July 27 2022, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "KiraFan Summer Memory Campaign",
            "きらファンサマーメモリーキャンペーン"
        ],
        "image": "kirara",
        "column": 0,
        "priority": 30,
        "timers": [
            {
                "name": "Daily Missions",
                "start": "July 16 2022, 0:00",
                "end": "September 9 2022, 23:59",
                "extraPriority": 2
            },
            {
                "name": "Summer Memory Quest",
                "start": "July 16 2022, 0:00",
                "end": "August 3 2022, 23:59",
                "markers": [
                    {
                        "title": "Otohime",
                        "time": "July 16 2022, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Locco & Lotte",
                        "time": "July 20 2022, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Angalga & Summer Sweets Golem",
                        "time": "July 24 2022, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Pirate's Henchman & Nowhere's Pierrot",
                        "time": "July 27 2022, 17:00",
                        "type": "battle"
                    }
                ]
            },
            {
                "name": "Ticket Expiration",
                "start": "July 16 2022, 0:00",
                "end": "September 16 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "July 16 2022, 0:00",
                "end": "August 10 2022, 13:59"
            },
            {
                "name": "Twitter Campaign Retweets Goal + Extra Reward",
                "start": "July 27 2022, 17:00",
                "end": "July 28 2022, 23:59"
            },
            {
                "name": "Twitter Campaign Likes Goal Reward",
                "start": "August 10 2022, 17:00",
                "end": "August 11 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Main Quest Part 2 Limited-time Summon",
            "きららファンタジア断ち切られし絆第2部限定ピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/98KF03s.png",
            "https://i.imgur.com/HNnlgOI.png",
            "https://i.imgur.com/VlNKwEP.png",
            "https://i.imgur.com/dBtLGdM.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "July 12 2022, 17:00",
                "end": "July 27 2022, 15:59",
                "banners": [
                    {
                        "title": "Kirara side",
                        "desc": "Featuring 5★ Kirara [Part 2]",
                        "time": "July 12 2022, 17:00"
                    },
                    {
                        "title": "Kaos side",
                        "desc": "Featuring 5★ Kaos [Part 2]",
                        "time": "July 12 2022, 17:00"
                    },
                    {
                        "title": "Amisawa side",
                        "desc": "Featuring 5★ Amisawa [Part 2]",
                        "time": "July 12 2022, 17:00"
                    },
                    {
                        "title": "Sesame side",
                        "desc": "Featuring 5★ Sesame [Part 2]",
                        "time": "July 12 2022, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Midsummer's Etowaria Fes Summon",
            "期間限定2022水着キャラクターピックアップ召喚",
            "Swimsuit 2022 Event Summon"
        ],
        "image": [
            "https://i.imgur.com/VoZSUoW.png",
            "https://i.imgur.com/pesnGNF.png",
            "https://i.imgur.com/Zb0gGYI.png",
            "https://i.imgur.com/fDBfrCn.png",
            "https://i.imgur.com/XBMQ6Bf.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "July 27 2022, 17:00",
                "end": "August 25 2022, 14:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5★ Hifumi [Swimsuit], 5★ Shiina [Swimsuit], 5★ Koharu [Swimsuit]",
                        "time": "July 27 2022, 17:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5★ Hayu [Swimsuit], 5★ Fa [Swimsuit]",
                        "time": "July 27 2022, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Limited-time Past Swimsuit Step-up Summon",
            "期間限定水着復刻おまけ付き10回召喚",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring past Swimsuit characters",
                "start": "July 27 2022, 17:00",
                "end": "August 3 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "July 27 2022, 17:00",
                "end": "August 10 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Past Limited-time Swimsuit Paid Summon + Choosable 5★ Summon Ticket",
            "期間限定水着復刻★5選べるチケット付き！有償限定10回召喚",
            "1000 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "First Half",
                "start": "July 27 2022, 17:00",
                "end": "August 3 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Second Half",
                "start": "August 4 2022, 0:00",
                "end": "August 10 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "July 27 2022, 17:00",
                "end": "August 17 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "All Stars Paid Summon + Choosable 5★ Summon Ticket",
            "オールスター★5選べるチケット付き！有償限定10回召喚",
            "700 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "July 27 2022, 17:00",
                "end": "August 2 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "July 27 2022, 17:00",
                "end": "August 9 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Comic Girls Limited-time Paid Summon + Random 5★ Summon Ticket",
            "こみっくがーるず期間限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + 2x Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Kaos [Swimsuit], 5★ Kaos [Christmas], 5★ Koyume [Swimsuit], 5★ Ruki [Bridal], 5★ Tsubasa [Tanabata], 5★ Fuura [Hot Springs]",
                "start": "July 12 2022, 17:00",
                "end": "July 19 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "July 12 2022, 17:00",
                "end": "July 26 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Head Priest & Seven Sages Paid Summon + Choosable 5★ Summon Ticket",
            "筆頭神官＆七賢者限定★5選べるチケット付き！有償限定10回召喚",
            "600 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Archive, 5★ Sugar, 5★ Sesame, 5★ Cardamom, 5★ Salt, 5★ Ginger, 5★ Fennel, 5★ Hakka",
                "start": "July 12 2022, 17:00",
                "end": "July 19 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "July 12 2022, 17:00",
                "end": "July 26 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara Fantasia Limited-time Paid Summon + Random 5★ Summon Ticket",
            "きららファンタジア期間限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + 2x Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "July 12 2022, 17:00",
                "end": "July 19 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "July 12 2022, 17:00",
                "end": "July 26 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Past 2017~2018 Limited-time Paid Summon + Choosable 5★ Summon Ticket",
            "期間限定2017・2018復刻★5選べるチケット付き！有償限定10回召喚",
            "1,000 Paid Gems for a 10x Summon + 5x Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Part 1: Featuring Limited-time characters released in 2017~2018",
                "start": "July 16 2022, 0:00",
                "end": "July 19 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "July 16 2022, 0:00",
                "end": "July 26 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Past 2019 Limited-time Paid Summon + Choosable 5★ Summon Ticket",
            "期間限定2019復刻★5選べるチケット付き！有償限定10回召喚",
            "1,000 Paid Gems for a 10x Summon + 5* Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring Limited-time characters released in 2019",
                "start": "July 20 2022, 0:00",
                "end": "July 23 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "July 20 2022, 0:00",
                "end": "July 30 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Past 2020 Limited-time Paid Summon + Choosable 5★ Summon Ticket",
            "期間限定2020復刻★5選べるチケット付き！有償限定10回召喚",
            "1,000 Paid Gems for a 10x Summon + 5x Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring Limited-time characters released in 2020",
                "start": "July 24 2022, 0:00",
                "end": "July 27 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "July 24 2022, 0:00",
                "end": "August 3 2022, 23:59"
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
                "name": "Summon Period: Featuring past Swimsuit characters",
                "start": "July 27 2022, 17:00",
                "end": "August 3 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "July 27 2022, 17:00",
                "end": "August 10 2022, 23:59"
            }
        ]
    },
    {
        type: "LoginDays",
        title: [
            "RPG Fudousan participation Login Bonus",
            "RPG不動産参戦決定記念ログインボーナス",
            "20 Gems on days the anime airs"
        ],
        image: "lamp",
        column: 2,
        priority: 15,
        timers: [
            {
                name: "Episode 2",
                date: "April 13 2022",
                days: 2
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
        priority: 14,
        timers: [
            {
                name: "Part 2 (Chapters 1~7)",
                "start": "July 5 2022, 0:00",
                "end": "July 12 2022, 15:59"
            },
            {
                name: "Part 1 (Chapters 1~Epilogue)",
                "start": "July 12 2022, 17:00",
                "end": "July 27 2022, 15:59"
            },
            {
                "name": "Part 1 (Chapters 1~Epilogue, Normal Mode) and Part 2 (Chapters 1~7)",
                "start": "July 27 2022, 17:00",
                "end": "August 10 2022, 15:59"
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
        "image": "https://i.imgur.com/VY0qyap.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "July 2 2022, 0:00",
                "end": "July 3 2022, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "July 9 2022, 0:00",
                "end": "July 10 2022, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "July 16 2022, 0:00",
                "end": "July 17 2022, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "July 23 2022, 0:00",
                "end": "July 24 2022, 23:59"
            },
            {
                "name": "Weekend 5",
                "start": "July 30 2022, 0:00",
                "end": "July 31 2022, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "July 2 2022, 0:00",
                "end": "August 5 2022, 23:59",
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
                "name": "Main Quest Part 2 Chapter 8 Item & Starlight Stone Sets",
                "start": "July 12 2022, 0:00",
                "end": "July 27 2022, 15:59"
            },
            {
                "name": "Summer Memory Starlight Stone Set",
                "start": "July 16 2022, 0:00",
                "end": "July 27 2022, 15:59"
            },
            {
                "name": "Summer Memory 5* Summon Set D",
                "start": "July 24 2022, 0:00",
                "end": "July 27 2022, 15:59"
            },
            
            {
                "name": "Summer Vacation Campaign Item & Starlight Stone Sets A",
                "start": "July 27 2022, 17:00",
                "end": "August 25 2022, 14:59"
            },
            {
                "name": "Summer Vacation Campaign Item & Starlight Stone Sets B",
                "start": "July 27 2022, 17:00",
                "end": "August 10 2022, 15:59"
            },
            {
                "name": "Summer Vacation Campaign Item & Starlight Stone Sets C",
                "start": "July 27 2022, 17:00",
                "end": "August 2 2022, 23:59"
            },
            {
                "name": "Random Past Swimsuit 5★ Summon Ticket Sets",
                "start": "July 27 2022, 17:00",
                "end": "August 3 2022, 23:59"
            },
            {
                "name": "Summer Vacation 2022 Set",
                "start": "July 27 2022, 17:00",
                "end": "August 10 2022, 15:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Etowaria's Summer Vacation 2022 First Half Login Bonus",
            "2022エトワリアの夏休み 前半 ログインボーナス",
            "Log in on 10 days to receive up to 200 Starlight Stones."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "July 27 2022, 17:00",
                "end": "August 10 2022, 23:59"
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
                "start": "July 27 2022, 17:00",
                "end": "August 25 2022, 14:59"
            }
        ]
    }
];

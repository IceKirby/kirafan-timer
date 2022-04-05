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
            "Version 3.2.7 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 40,
        timers: [
            {
                name: "Scheduled Time",
                start: "March 30 2022, 16:00",
                end: "March 30 2022, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Fly Fishing Memory",
            "フライフィッシュメモリー",
            "Slow Loop Event"
        ],
        "image": [
            "https://i.imgur.com/aLnZt2V.png",
            "https://i.imgur.com/Ku6gTOm.png",
            "https://i.imgur.com/FHQCNwW.png",
            "https://i.imgur.com/aSsvOKn.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "March 15 2022, 17:00",
                "end": "March 30 2022, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "March 19 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "March 17 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "March 24 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "March 25 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "March 26 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "March 27 2022, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "March 15 2022, 17:00",
                "end": "March 30 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "March 15 2022, 17:00",
                "end": "April 6 2022, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Interspecies Mixed Bath Hot Springs Resort",
            "異種族混浴温泉街",
            "Hot Springs 2022 Event"
        ],
        "image": [
            "https://i.imgur.com/ZlHU4Lm.png",
            "https://i.imgur.com/wFdNvHR.png",
            "https://i.imgur.com/t9jxPBZ.png",
            "https://i.imgur.com/zj0UhXD.png",
            "https://i.imgur.com/AItn6PD.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "March 30 2022, 17:00",
                "end": "April 13 2022, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "April 3 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "April 1 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "April 7 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "April 8 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "April 9 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "April 10 2022, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "March 30 2022, 17:00",
                "end": "April 13 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "March 30 2022, 17:00",
                "end": "April 20 2022, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Interspecies Mixed Bath Hot Springs Resort Summon",
            "異種族混浴温泉街期間限定ピックアップ召喚",
            "Hot Springs 2022 Event Summon"
        ],
        "image": [
            "https://i.imgur.com/ZlHU4Lm.png",
            "https://i.imgur.com/wFdNvHR.png",
            "https://i.imgur.com/t9jxPBZ.png",
            "https://i.imgur.com/zj0UhXD.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "March 30 2022, 17:00",
                "end": "April 13 2022, 15:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5★ Kana [Hot Springs], 5★ Leine [Hot Springs]",
                        "time": "March 30 2022, 17:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5★ Fuura [Hot Springs], 5★ Archive [Hot Springs]",
                        "time": "March 30 2022, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Past Hot Springs Limited-time Step-up Summon",
            "期間限定温泉復刻おまけ付き10回召喚",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Yuuri [Hot Springs], 5★ Hiroe [Hot Springs], 5★ Hibari [Hot Springs], 5★ Haruka [Hot Springs]",
                "start": "March 30 2022, 17:00",
                "end": "April 6 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "March 30 2022, 17:00",
                "end": "April 13 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Main Quest Part 2 Limited-time Step-up Summon",
            "きららファンタジア第2部限定復刻おまけ付き10回召喚",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Mio [Part 2], 5★ Cocoa [Part 2], 5★ Chino [Part 2], 5★ Namiko-san [Part 2], 5★ Lilith [Part 2], 5★ Cardamom [Part 2], 5★ Fennel [Part 2], 5★ Media [Part 2]",
                "start": "April 7 2022, 0:00",
                "end": "April 13 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "April 7 2022, 0:00",
                "end": "April 20 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Main Quest Part 2 Limited-time Paid Summon + Random 5★ Summon Ticket",
            "きららファンタジア第2部限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Mio [Part 2], 5★ Cocoa [Part 2], 5★ Chino [Part 2], 5★ Namiko-san [Part 2], 5★ Lilith [Part 2], 5★ Cardamom [Part 2], 5★ Fennel [Part 2], 5★ Media [Part 2]",
                "start": "April 7 2022, 0:00",
                "end": "April 13 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "April 7 2022, 0:00",
                "end": "April 20 2022, 23:59"
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
                "name": "Summon Period: Featuring 5★ Yuuri [Hot Springs], 5★ Hiroe [Hot Springs], 5★ Hibari [Hot Springs], 5★ Haruka [Hot Springs]",
                "start": "March 30 2022, 17:00",
                "end": "April 6 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "March 30 2022, 17:00",
                "end": "April 13 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Mixed Past Limited-time Paid Summon + Choosable 5★ Summon Ticket",
            "期間限定ミックス復刻★5選べるチケット付き！有償限定10回召喚",
            "600 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket + 1 Voucher",
            "Featuring past Hinamatsuri, Maid and Sports Festival characters, 5* Karen [Foreign Magician], 5* [Traveler of the Wasteland] Rin"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "First Half",
                "start": "March 15 2022, 17:00",
                "end": "March 22 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Second Half",
                "start": "March 23 2022, 0:00",
                "end": "March 30 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "March 15 2022, 17:00",
                "end": "April 6 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara Forward Paid Summon + Choosable 5★ Summon Ticket",
            "きららフォワード期間限定★5選べるチケット付き！有償限定10回召喚",
            "1,000 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "March 23 2022, 0:00",
                "end": "March 30 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "March 23 2022, 0:00",
                "end": "April 6 2022, 23:59"
            }
        ]
    },
    {
        type: "LoginDays",
        title: [
            "Slow Loop participation Login Bonus",
            "スローループ参戦決定記念ログインボーナス",
            "20 Gems on days the anime airs"
        ],
        image: "lamp",
        column: 2,
        priority: 15,
        timers: [
            {
                name: "Episode 2",
                date: "January 14 2022",
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
                name: "Part 2 (Chapters 1~6)",
                "start": "April 7 2022, 0:00",
                "end": "April 13 2022, 15:59"
            },
            {
                name: "Part 1 (Chapters 1~Prologue, Normal Mode)",
                "start": "January 27 2022, 17:00",
                "end": "February 10 2022, 15:59"
            }
        ]
    },
    {
        "type": "WeekendBoss",
        "title": [
            "April Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        "image": "https://i.imgur.com/CKRTmPp.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "April 2 2022, 0:00",
                "end": "April 3 2022, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "April 9 2022, 0:00",
                "end": "April 10 2022, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "April 16 2022, 0:00",
                "end": "April 17 2022, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "April 23 2022, 0:00",
                "end": "April 24 2022, 23:59"
            },
            {
                "name": "Weekend 5",
                "start": "April 30 2022, 0:00",
                "end": "May 1 2022, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "April 2 2022, 0:00",
                "end": "May 6 2022, 23:59",
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
                "name": "Hot Springs Event Starlight Stone & Item Sets",
                "start": "March 30 2022, 17:00",
                "end": "April 13 2022, 15:59"
            },
            {
                "name": "Past Hot Springs 5* Summon Ticket Set",
                "start": "March 30 2022, 17:00",
                "end": "April 6 2022, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Etowaria Town Tax Payment Goods",
            "エトワリア里納税納税品"
        ],
        "image": "cork",
        "column": 2,
        "priority": 11,
        "timers": [
            {
                "name": "Item Sets at Trade and Exchange Shops",
                "start": "April 1 2022, 0:00",
                "end": "April 1 2022, 23:59",
                "extraPriority": 10
            },
            {
                "name": "Ticket Expiration",
                "start": "April 1 2022, 0:00",
                "end": "April 8 2022, 23:59"
            }
        ]
    },
];

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
                start: "April 27 2022, 16:00",
                end: "April 27 2022, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "The Goddess' Easter Egg",
            "女神のイースターエッグ",
            "Easter 2022 Event"
        ],
        "image": [
            "https://i.imgur.com/IGX7sFG.png",
            "https://i.imgur.com/kmO7OTo.png",
            "https://i.imgur.com/pDvB4Ig.png",
            "https://i.imgur.com/pWhFU9K.png",
            "https://i.imgur.com/Bk67q23.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "April 27 2022, 17:00",
                "end": "May 17 2022, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "May 1 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "April 29 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "May 11 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "May 12 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "May 13 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "May 14 2022, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "April 27 2022, 17:00",
                "end": "May 17 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "April 27 2022, 17:00",
                "end": "May 24 2022, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Road to Giga EX - Titan Side",
            "超難関への道～タイタン編～"
        ],
        "image": [
            "https://i.imgur.com/Jd4FOPo.png"
        ],
        "column": 0,
        "priority": 31,
        "timers": [
            {
                "name": "Main Event",
                "start": "May 5 2022, 0:00",
                "end": "May 17 2022, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "Giga EX Quest",
                        "time": "May 8 2022, 0:00",
                        "type": "battle"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "May 5 2022, 0:00",
                "end": "May 17 2022, 23:59",
                "markers": [
                    {
                        "title": "Exchange Medal Missions",
                        "time": "May 14 2022, 0:00",
                        "type": "mission"
                    }
                ]
            },
            {
                "name": "Past Event 4★ Call Ticket Missions",
                "start": "May 5 2022, 0:00",
                "end": "May 13 2022, 23:59"
            },
            {
                "name": "Totteoki Training Quest Challenge Ticket Missions",
                "start": "May 5 2022, 0:00",
                "end": "May 14 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "May 5 2022, 0:00",
                "end": "May 24 2022, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "The Goddess' Easter Egg Summon",
            "女神のイースターエッグ期間限定ピックアップ召喚",
            "Easter 2022 Event Summon"
        ],
        "image": [
            "https://i.imgur.com/IGX7sFG.png",
            "https://i.imgur.com/kmO7OTo.png",
            "https://i.imgur.com/pDvB4Ig.png",
            "https://i.imgur.com/pWhFU9K.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "April 27 2022, 17:00",
                "end": "May 17 2022, 15:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5★ Kayo [Easter], 5★ Chiya [Easter]",
                        "time": "April 27 2022, 17:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5★ Sonobe [Easter], 5★ Polka [Easter]",
                        "time": "April 27 2022, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Limited-time Wind Element Step-up/Paid Summon",
            "2つの召喚を同時開催！風属性のキャラクターを仲間にしよう！",
            "240 Paid Gems for a 10x Summon + 2x Random 5★ Summon Ticket",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Tooru [Christmas], 5★ Naoki Miki, 5★ Nono [Maid], 5★ Suzukaze Aoba, 5★ Hifumi [Maid], 5★ Yagami Kou, 5★ Kotone [Valentine], 5★ Cocoa",
                "start": "May 9 2022, 0:00",
                "end": "May 16 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "May 9 2022, 0:00",
                "end": "May 23 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Lamp's Birthday Celebration Paid Summon + Choosable 5★ Summon Ticket",
            "ランプお誕生日記念★5選べるチケット付き！有償限定10回召喚",
            "1,000 Paid Gems for a 10x Summon + 5x Choosable 5★ Summon Ticket + User Title Medal"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Lamp, 5★ Lamp [Swimsuit], 5★ Lamp [Tanabata], 5★ Lamp [Cross Chara]",
                "start": "May 5 2022, 0:00",
                "end": "May 7 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "May 5 2022, 0:00",
                "end": "May 14 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Golden Week Paid Summon + Choosable 5★ Summon Ticket",
            "ゴールデンウィーク★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket + 1x Golden Week Voucher"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "First Half",
                "start": "April 29 2022, 0:00",
                "end": "May 3 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Second Half",
                "start": "May 4 2022, 0:00",
                "end": "May 8 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "April 29 2022, 0:00",
                "end": "May 15 2022, 23:59"
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
            },
            {
                name: "Episode 3",
                date: "April 20 2022",
                days: 2
            },
            {
                name: "Episode 4",
                date: "April 27 2022",
                days: 2
            },
            {
                name: "Episode 5",
                date: "May 4 2022",
                days: 2
            },
            {
                name: "Episode 6",
                date: "May 11 2022",
                days: 2
            },
            {
                name: "Episode 7",
                date: "May 18 2022",
                days: 2
            },
            {
                name: "Episode 8",
                date: "May 25 2022",
                days: 2
            },
            {
                name: "Episode 9",
                date: "June 1 2022",
                days: 2
            },
            {
                name: "Episode 10",
                date: "June 8 2022",
                days: 2
            },
            {
                name: "Episode 11",
                date: "June 15 2022",
                days: 2
            },
            {
                name: "Episode 12",
                date: "June 22 2022",
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
                "start": "April 13 2022, 17:00",
                "end": "April 17 2022, 23:59"
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
            "May Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        "image": "https://i.imgur.com/3kxYBAT.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "May 7 2022, 0:00",
                "end": "May 8 2022, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "May 14 2022, 0:00",
                "end": "May 15 2022, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "May 21 2022, 0:00",
                "end": "May 22 2022, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "May 28 2022, 0:00",
                "end": "May 29 2022, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "May 7 2022, 0:00",
                "end": "June 3 2022, 23:59",
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
                "name": "Limited-time Easter 2022 5* Summon Ticket Expiration",
                "start": "April 27 2022, 17:00",
                "end": "May 24 2022, 23:59"
            },
            {
                "name": "1600 Days Celebration Starlight Stone & Item Bundles",
                "start": "April 29 2022, 0:00",
                "end": "May 12 2022, 23:59"
            },
            {
                "name": "Golden Week Starlight Stone & Item Bundles",
                "start": "April 29 2022, 0:00",
                "end": "May 17 2022, 15:59"
            },
            {
                "name": "Lamp's Birthday Starlight Stone Set",
                "start": "May 5 2022, 0:00",
                "end": "May 7 2022, 23:59"
            },
            {
                "name": "Giga EX Mini-event Starlight Stone & Item Bundles",
                "start": "May 5 2022, 0:00",
                "end": "May 17 2022, 15:59"
            }
            
        ]
    },
    {
        "type": "Other",
        "title": [
            "Lamp's Birthday Celebration Login Bonus",
            "ランプお誕生日記念ログインボーナス",
            "1st Login: User Title; 2nd & 3rd Login: Summon Ticket"
        ],
        "image": "lamp",
        "column": 2,
        "priority": 16,
        "timers": [
            {
                "name": "Period",
                "start": "May 5 2022, 0:00",
                "end": "May 7 2022, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "1600 Days Celebration Login Bonus",
            "1600日記念ログインボーナス",
            "Log in on 10 days to receive up to 300 Starlight Stones."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "April 29 2022, 0:00",
                "end": "May 12 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "1600 Days Celebration Paid Summon + Choosable 5★ Summon Ticket",
            "リリース1600日記念★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Stones for a 10x Summon + Choosable 5★ Summon Ticket + 1x Golden Week Voucher"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period & Voucher Exchange",
                "start": "April 29 2022, 0:00",
                "end": "May 8 2022, 23:59"
            },
            {
                "name": "Ticket Expiration",
                "start": "April 29 2022, 0:00",
                "end": "May 15 2022, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Golden Week Login Bonus",
            "ゴールデンウィークログインボーナス",
            "Log in on 10 days to receive up to 200 Starlight Stones."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "April 29 2022, 0:00",
                "end": "May 17 2022, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Main Quest & Author Quests Half Stamina Campaign",
            "メインクエスト＆作家クエストスタミナ半減キャンペーン"
        ],
        "image": "match",
        "column": 2,
        "priority": 14,
        "timers": [
            {
                "name": "Period",
                "start": "April 29 2022, 0:00",
                "end": "May 17 2022, 15:59"
            }
        ]
    }
];

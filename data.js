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
                start: "September 8 2022, 16:00",
                end: "September 8 2022, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "[Rerun] Kurumi in Wonderland",
            "復刻・くるみインワンダーランド",
            "Rerun of Kurumi 2018 Event"
        ],
        "image": ["https://i.imgur.com/wgnhxt2.png"],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "August 25 2022, 17:00",
                "end": "September 8 2022, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "Melee Quest",
                        "time": "August 27 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "September 1 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "September 2 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "September 3 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "September 4 2022, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "August 25 2022, 17:00",
                "end": "September 8 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "August 25 2022, 17:00",
                "end": "September 15 2022, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "[Rerun] Hibari, Rii-san and the Flower of Happiness",
            "復刻・ヒバリとりーさんと幸福の花",
            "Rerun of Hibari/Rii-san 2018 Event"
        ],
        "image": ["https://i.imgur.com/wgnhxt2.png"],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "August 25 2022, 17:00",
                "end": "September 8 2022, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "August 29 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "August 27 2022, 17:00",
                        "type": "battle"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "August 25 2022, 17:00",
                "end": "September 8 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "August 25 2022, 17:00",
                "end": "September 15 2022, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Opening! Etowaria Academy's Cultural Festival",
            "開催！エトワリア学園文化祭",
            "Power of Smile. & Koharu Biyori. Event"
        ],
        "image": [
            "https://i.imgur.com/C8ShvcS.png",
            "https://i.imgur.com/wkEvXSI.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "September 8 2022, 17:00",
                "end": "September 27 2022, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "September 12 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "September 10 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "September 21 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "September 22 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "September 23 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "September 24 2022, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "September 8 2022, 17:00",
                "end": "September 27 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "September 8 2022, 17:00",
                "end": "October 4 2022, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Treasure Hoarding Campaign",
            "お宝ザクザクキャンペーン"
        ],
        "image": "cork",
        "column": 0,
        "priority": 31,
        "timers": [
            {
                "name": "Main Event",
                "start": "September 17 2022, 0:00",
                "end": "September 27 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Event Shop / Mystery Treasure Chest",
                "start": "September 17 2022, 0:00",
                "end": "October 4 2022, 13:59"
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
            "Opening! Etowaria Academy's Cultural Festival Summon",
            "開催！エトワリア学園文化祭ピックアップ召喚",
            "Power of Smile. & Koharu Biyori. Event Summon"
        ],
        "image": [
            "https://i.imgur.com/C8ShvcS.png",
            "https://i.imgur.com/wkEvXSI.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "September 8 2022, 17:00",
                "end": "September 27 2022, 15:59",
                "banners": [
                    {
                        "title": "Nina Side",
                        "desc": "Featuring 5★ Tachibana Nina, 4★ Tachibana Nina",
                        "time": "September 8 2022, 17:00"
                    },
                    {
                        "title": "Tamaki Side",
                        "desc": "Featuring 5★ Kodou Tamaki, 4★ Kodou Tamaki",
                        "time": "September 8 2022, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Treasure Hoarding Campaign Summon",
            "お宝ザクザクキャンペーンピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/Fgp276Z.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Sonoda Mitsuki",
                "start": "September 17 2022, 0:00",
                "end": "September 27 2022, 15:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Cultural Festival-themed Step-up + Paid Summon",
            "2つの召喚を同時開催！文化祭を楽しんでいる生徒を仲間にしよう！",
            "600 Paid Gems for a 10x Summon + 4x Random 5★ Summon Ticket",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring characters from the current event",
                "start": "September 9 2022, 0:00",
                "end": "September 16 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "September 9 2022, 0:00",
                "end": "September 23 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "All-Stars 2022 Deluxe Summon",
            "2022オールスターデラックス召喚",
            "1000 Paid Gems for a 10x 5* Summon"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring all characters released in 2022 (Until July 12th)",
                "start": "August 25 2022, 17:00",
                "end": "September 1 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Summon Period (Encore): Featuring all characters released in 2022 (Until July 12th)",
                "start": "September 2 2022, 0:00",
                "end": "September 8 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "August 25 2022, 17:00",
                "end": "September 15 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "All-Stars 2022 Deluxe Summon",
            "2022オールスターデラックス召喚",
            "1000 Paid Gems for a 10x 5* Summon"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring all characters released in 2022 (Until August 10th)",
                "start": "September 17 2022, 0:00",
                "end": "September 21 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Summon Period (Encore): Featuring all characters released in 2022 (Until August 10th)",
                "start": "September 22 2022, 0:00",
                "end": "September 27 2022, 15:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "All-Stars Paid Summon + Choosable 5★ Summon Ticket",
            "オールスター★5選べるチケット付き！有償限定10回召喚",
            "700 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket + 1x All-Stars Voucher"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "First Half",
                "start": "September 17 2022, 0:00",
                "end": "September 21 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Second Half",
                "start": "September 22 2022, 0:00",
                "end": "September 27 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "September 17 2022, 0:00",
                "end": "October 4 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Limited-time Paid Summon + Choosable 5★ Summon Ticket",
            "期間限定★5選べるチケット付き！有償限定10回召喚",
            "1,000 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket + 1x Extra Call Voucher"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "First Half",
                "start": "September 17 2022, 0:00",
                "end": "September 21 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Second Half",
                "start": "September 22 2022, 0:00",
                "end": "September 27 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "September 17 2022, 0:00",
                "end": "October 4 2022, 23:59"
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
                name: "Part 2",
                "start": "August 25 2022, 17:00",
                "end": "September 8 2022, 15:59"
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
            "September Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        "image": "https://i.imgur.com/OGDN8sd.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "September 3 2022, 0:00",
                "end": "September 4 2022, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "September 10 2022, 0:00",
                "end": "September 11 2022, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "September 17 2022, 0:00",
                "end": "September 18 2022, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "September 24 2022, 0:00",
                "end": "September 25 2022, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "September 3 2022, 0:00",
                "end": "September 30 2022, 23:59",
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
                "name": "Silver Week Campaign Item & Starlight Stone Sets",
                "start": "September 17 2022, 0:00",
                "end": "September 27 2022, 15:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Manga Volume 4 Release Paid Summon + Random 5★ Summon Ticket",
            "コミカライズ第4巻発売記念★5確定チケット付き！有償限定10回召喚",
            "240 Paid Gems for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring characters that appear on Volume 4.",
                "start": "September 1 2022, 0:00",
                "end": "September 8 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "September 1 2022, 0:00",
                "end": "September 15 2022, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Silver Week 2022 Login Bonus",
            "2022シルバーウィーク ログインボーナス",
            "Log in on 5 days to receive up to 100 Starlight Stones."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "September 17 2022, 0:00",
                "end": "September 27 2022, 23:59"
            }
        ]
    }
    
];

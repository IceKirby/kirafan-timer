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
            "Version 3.2.13 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 40,
        timers: [
            {
                name: "Scheduled Time",
                start: "August 25 2022, 15:00",
                end: "August 25 2022, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Beach Shark Panic",
            "ビーチシャークパニック",
            "Swimsuit 2022 Event 2"
        ],
        "image": [
            "https://i.imgur.com/vM8YbCb.png",
            "https://i.imgur.com/WOBBp7N.png",
            "https://i.imgur.com/hjSF34s.png",
            "https://i.imgur.com/H7kQbXZ.png",
            "https://i.imgur.com/RD2shlE.png",
            "https://i.imgur.com/GuM2lt7.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "August 10 2022, 17:00",
                "end": "August 25 2022, 14:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "August 14 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "August 12 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Super EX Quest",
                        "time": "August 17 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "August 19 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "August 20 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "August 21 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "August 22 2022, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "August 10 2022, 17:00",
                "end": "August 25 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "August 10 2022, 17:00",
                "end": "September 1 2022, 13:59"
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
            "Swimsuit 2022 Limited-time Summon",
            "期間限定2022水着キャラクターピックアップ召喚",
            "Swimsuit 2022 Event Summon"
        ],
        "image": [
            "https://i.imgur.com/VoZSUoW.png",
            "https://i.imgur.com/pesnGNF.png",
            "https://i.imgur.com/Zb0gGYI.png",
            "https://i.imgur.com/fDBfrCn.png",
            "https://i.imgur.com/XBMQ6Bf.png",
            "https://i.imgur.com/vM8YbCb.png",
            "https://i.imgur.com/WOBBp7N.png",
            "https://i.imgur.com/hjSF34s.png",
            "https://i.imgur.com/H7kQbXZ.png",
            "https://i.imgur.com/RD2shlE.png"
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
                    },
                    {
                        "title": "Part 3",
                        "desc": "Featuring 5★ Shiina [Swimsuit], 5★ Tamate [Swimsuit], 5★ Utsutsu [Swimsuit]",
                        "time": "August 10 2022, 17:00"
                    },
                    {
                        "title": "Part 4",
                        "desc": "Featuring 5★ Rize [Swimsuit], 5★ Kisaragi [Swimsuit]",
                        "time": "August 10 2022, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Anne Happy♪ Rerun Summon",
            "新規キャラクターピックアップ召喚"
        ],
        "image": ["https://i.imgur.com/wgnhxt2.png"],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Sayama Tsubaki",
                "start": "August 25 2022, 17:00",
                "end": "September 8 2022, 15:59",
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Super EX Quest Support Limited-time Summon",
            "超高難易度クエスト応援期間限定ピックアップ召喚"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Chiya [Easter], 5★ Koume [Valentine], 5★ Ruki [Bridal], 5★ Hibari [Hot Springs]",
                "start": "August 14 2022, 0:00",
                "end": "August 25 2022, 14:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Super EX Quest Support Paid Summon + Choosable 5★ Summon Ticket",
            "超高難易度クエスト応援★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket + Super EX Quest Voucher"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "First Half",
                "start": "August 14 2022, 0:00",
                "end": "August 19 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Second Half",
                "start": "August 20 2022, 0:00",
                "end": "August 25 2022, 14:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "August 14 2022, 0:00",
                "end": "September 1 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Paid Summon + Choosable 5★ Summon Ticket",
            "★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket + 1x Summer Vacation Voucher"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "First Half",
                "start": "August 10 2022, 17:00",
                "end": "August 17 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Second Half",
                "start": "August 18 2022, 0:00",
                "end": "August 25 2022, 14:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "August 10 2022, 17:00",
                "end": "September 1 2022, 23:59"
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
                "start": "August 10 2022, 17:00",
                "end": "August 17 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Second Half",
                "start": "August 18 2022, 0:00",
                "end": "August 25 2022, 14:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "August 10 2022, 17:00",
                "end": "September 1 2022, 23:59"
            }
        ]
    },
    
    {
        "type": "Gacha",
        "title": [
            "Main Quest Part 2 Paid Summon + Random 5★ Summon Ticket",
            "きららファンタジア第2部限定★5確定チケット付き！有償限定10回召喚",
            "700 Paid Gems for a 10x Summon +2x Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Part 1: Featuring 5★ Amisawa [Part 2], 5★ Mio [Part 2], 5★ Cocoa [Part 2], 5★ Namiko-san [Part 2], 5★ Sesame [Part 2], 5★ Cardamom [Part 2], 5★ Kirara [Part 2], 5★ Utsutsu [Part 2]",
                "start": "August 25 2022, 17:00",
                "end": "September 1 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Part 2: Featuring 5★ Kaos [Part 2], 5★ Chino [Part 2], 5★ Lilith [Part 2], 5★ Lamp [Part 2], 5★ Fennel [Part 2], 5★ Hakka [Part 2], 5★ Media [Part 2]",
                "start": "September 2 2022, 0:00",
                "end": "September 8 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "August 25 2022, 17:00",
                "end": "September 8 2022, 23:59"
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
            "Daily KiraKira Limited-time Summon",
            "1日1回期間限定きらきら召喚",
            "40 Paid Gems once per day for 3 summons, all 4* or above"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring characters from the Anne Happy♪ rerun events",
                "start": "August 25 2022, 17:00",
                "end": "August 31 2022, 23:59",
                "extraPriority": 4
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
            "August Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        "image": "https://i.imgur.com/uXUtgKZ.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "August 6 2022, 0:00",
                "end": "August 7 2022, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "August 13 2022, 0:00",
                "end": "August 14 2022, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "August 20 2022, 0:00",
                "end": "August 21 2022, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "August 27 2022, 0:00",
                "end": "August 28 2022, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "August 6 2022, 0:00",
                "end": "September 2 2022, 23:59",
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
                "name": "Summer Vacation Campaign Item & Starlight Stone Sets A",
                "start": "July 27 2022, 17:00",
                "end": "August 25 2022, 14:59"
            },
            {
                "name": "Summer Vacation Voucher Exchange",
                "start": "August 6 2022, 0:00",
                "end": "August 25 2022, 14:59"
            },
            {
                "name": "Summer Vacation Campaign Item & Starlight Stone Sets C",
                "start": "August 10 2022, 17:00",
                "end": "August 25 2022, 14:59"
            },
            {
                "name": "Anne Happy♪ Rerun Campaign Item & Starlight Stone Sets",
                "start": "August 25 2022, 17:00",
                "end": "September 1 2022, 23:59"
            },
            {
                "name": "KiraFan Summer Memory Post-Festival Campaign Item & Starlight Stone Sets",
                "start": "August 25 2022, 17:00",
                "end": "September 8 2022, 15:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Etowaria's Summer Vacation 2022 Login Bonus",
            "2022エトワリアの夏休み ログインボーナス",
            "Log in on 10 days to receive up to 200 Starlight Stones for each half."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "First Half",
                "start": "July 27 2022, 17:00",
                "end": "August 10 2022, 23:59"
            },
            {
                "name": "Second Half",
                "start": "August 10 2022, 17:00",
                "end": "August 25 2022, 23:59"
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
    },
    {
        "type": "Other",
        "title": [
            "Training Support Campaign",
            "育成応援キャンペーン"
        ],
        "image": "leine",
        "column": 0,
        "priority": 30,
        "timers": [
            {
                "name": "Quests Period",
                "start": "August 14th 2022, 0:00",
                "end": "August 25th 2022, 14:59",
                "extraPriority": 2
            },
            {
                "name": "Event Missions",
                "start": "August 14th 2022, 0:00",
                "end": "August 25th 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "August 14th 2022, 0:00",
                "end": "September 1st 2022, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "1700 Days Celebration Paid Summon + Choosable 5★ Summon Ticket",
            "リリース1700日記念★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Stones for a 10x Summon + 2x Choosable 5★ Summon Ticket + Summer Vacation Voucher"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Period",
                "start": "August 6 2022, 0:00",
                "end": "August 13 2022, 23:59"
            },
            {
                "name": "Ticket Expiration",
                "start": "August 6 2022, 0:00",
                "end": "September 1 2022, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "KiraFan Summer Memory Post-Festival Login Bonus",
            "きらファンサマーメモリー 後夜祭ログインボーナス",
            "Log in on each day to receive various items."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "August 25 2022, 17:00",
                "end": "September 8 2022, 23:59"
            }
        ]
    }
];

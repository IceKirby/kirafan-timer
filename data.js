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
            "Version 3.2.0 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 40,
        timers: [
            {
                name: "Scheduled Time",
                start: "June 24 2021, 12:00",
                end: "June 24 2021, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "The Girls from a Close yet Distant World",
            "まんがタイムコラボ近くて遠い世界の少女たち",
            "Manga Time Collab Event"
        ],
        "image": [
            "https://i.imgur.com/YrpaqFy.png",
            "https://i.imgur.com/LzTctJv.png",
            "https://i.imgur.com/xSXNJvR.png",
            "https://i.imgur.com/Coo0Gtq.png",
            "https://i.imgur.com/dF2sSeI.png",
            "https://i.imgur.com/Nxutzun.png",
            "https://i.imgur.com/4MZWpVJ.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "June 9 2021, 17:00",
                "end": "June 24 2021, 11:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "June 16 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "June 11 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "June 18 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "June 19 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "June 20 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "June 21 2021, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "June 9 2021, 17:00",
                "end": "June 24 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "June 9 2021, 17:00",
                "end": "July 1 2021, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Let's Train and Challenge! Ability Tree Implementation Quest",
            "育てて挑もう！アビリティツリー実装記念クエスト",
            "Ability Tree Mini-Event"
        ],
        "image": ["kirara"],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "June 24 2021, 17:00",
                "end": "July 13 2021, 23:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "Farming Quest Part 2 + Super Hard Quest",
                        "time": "July 2 2021, 0:00",
                        "type": "battle"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "June 24 2021, 17:00",
                "end": "July 13 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "June 24 2021, 17:00",
                "end": "July 20 2021, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Main Quest Part 2 Limited-Time Summon",
            "きららファンタジア断ち切られし絆第2部限定ピックアップ召喚"
        ],
        "image": "https://i.imgur.com/nhIm5ha.png",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Namiko-san [Part 2]",
                "start": "June 24 2021, 17:00",
                "end": "July 7 2021, 15:59",
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "GA Limited-time Random 5* Summon Ticket",
            "GA期間限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Noda Miki [Halloween], 5★ Kyouju [Tanabata]",
                "start": "June 24 2021, 17:00",
                "end": "July 1 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "June 24 2021, 17:00",
                "end": "July 8 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Ability Tree Celebration Daily KiraKira Limited-time Summon",
            "アビリティツリー実装記念1日1回期間限定きらきら召喚・特装版",
            "40 Paid Gems once per day for 3 summons, all 4* or above",
            "Collect Ticket Scraps and exchange for a Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring Limited-Time 5★ Characters released in 2020",
                "start": "June 24 2021, 17:00",
                "end": "July 1 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Exchange",
                "start": "June 24 2021, 17:00",
                "end": "July 1 2021, 23:59"
            },
            {
                "name": "Ticket Expiration",
                "start": "June 24 2021, 17:00",
                "end": "July 8 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "2020 Limited-time Step-up Summon",
            "アビリティツリー実装記念期間限定2020復刻おまけ付き10回召喚",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring Limited-Time 5★ Characters released in 2020",
                "start": "June 24 2021, 17:00",
                "end": "July 1 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "June 24 2021, 17:00",
                "end": "July 8 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Ability Tree Celebration Choosable 5* Summon Ticket",
            "アビリティツリー実装記念★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "June 24 2021, 17:00",
                "end": "July 1 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "June 24 2021, 17:00",
                "end": "July 22 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Ability Tree Celebration Past Limited-Time 5* Paid Summon",
            "アビリティツリー実装記念　期間限定復刻★5選べるチケット付き！有償限定10回召喚",
            "1,000 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring Limited-Time 5★ Characters released between 2017~2019",
                "start": "June 24 2021, 17:00",
                "end": "June 29 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "June 24 2021, 17:00",
                "end": "July 6 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara Fantasia Part 2 Paid Summon",
            "きららファンタジア第2部限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Lilith [Part 2], 5★ Fennel [Part 2]",
                "start": "June 17 2021, 0:00",
                "end": "June 24 2021, 11:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "June 17 2021, 0:00",
                "end": "July 1 2021, 23:59"
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
            "June Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        "image": "https://i.imgur.com/nfrALgB.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "June 5 2021, 0:00",
                "end": "June 6 2021, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "June 12 2021, 0:00",
                "end": "June 13 2021, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "June 19 2021, 0:00",
                "end": "June 20 2021, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "June 26 2021, 0:00",
                "end": "June 27 2021, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "June 5 2021, 0:00",
                "end": "July 2 2021, 23:59",
                "keepAfterFinished": "2 hours",
                "type": "normal"
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
        "priority": 15,
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
        type: "Other",
        title: [
            "Limited Past Sports Festival Room Decorations",
            "運動会限定ルームアイテム再登場"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "May 14 2021, 17:00",
                "end": "May 20 2021, 16:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Manga Time Collab-Limited Step-up Summon",
            "まんがタイムコラボ限定おまけ付き10回召喚",
            "Random 5★ Summon Ticket on 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Period: Featuring 5★ Satonaka Chie, 5★ Shirai Reiko, 5★ Kurahashi Riko, 5★ Maki Natsuo, 5★ Komori Shuri, 5★ Nishitori Megumi",
                "start": "June 9 2021, 17:00",
                "end": "June 24 2021, 11:59"
            },
            {
                "name": "Ticket Expiration",
                "start": "June 9 2021, 17:00",
                "end": "July 1 2021, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Special Starlight Stone Bundle",
            "お得な星彩石セット販売"
        ],
        "image": "cork",
        "column": 2,
        "priority": 12,
        "timers": [
            {
                "name": "Period",
                "start": "June 9 2021, 17:00",
                "end": "June 24 2021, 11:59"
            },
            {
                "name": "Period",
                "start": "June 24 2021, 17:00",
                "end": "July 7 2021, 15:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Ver 3.2.0 Celebration Login Bonus",
            "Ver 3.2.0記念ログインボーナス",
            "Log in on 7 days to receive up to 4x Quest Key - Tree + 15x Stamina Recovery Item - Large."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "June 24 2021, 17:00",
                "end": "July 13 2021, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Ver 3.2.0 Celebration Campaign Sales",
            "Ver 3.2.0記念セール"
        ],
        "image": "cork",
        "column": 2,
        "priority": 12,
        "timers": [
            {
                "name": "Ability Tree-related Items",
                "start": "June 24 2021, 17:00",
                "end": "July 13 2021, 23:59"
            },
            {
                "name": "Gem Set",
                "start": "June 24 2021, 17:00",
                "end": "July 13 2021, 23:59"
            },
            {
                "name": "Item Sets",
                "start": "June 24 2021, 17:00",
                "end": "July 13 2021, 23:59"
            },
            {
                "name": "Limited-time 2020 Random 5★ Summon Ticket, Star Festival 5★ Support Set",
                "start": "June 24 2021, 17:00",
                "end": "July 1 2021, 23:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Ver 3.2.0 Celebration Missions",
            "Ver 3.2.0記念ミッション"
        ],
        "image": "match",
        "column": 0,
        "priority": 30,
        "timers": [
            {
                "name": "Period",
                "start": "June 24 2021, 17:00",
                "end": "July 13 2021, 23:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Main Quest Part 2 Chapter 3 Missions",
            "メインクエスト第2部3章追加記念 期間限定ミッション"
        ],
        "image": "match",
        "column": 0,
        "priority": 30,
        "timers": [
            {
                "name": "Period",
                "start": "June 24 2021, 17:00",
                "end": "July 7 2021, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "1300 Days Celebration Login Bonus",
            "1300日記念ログインボーナス",
            "Log in on 10 days to receive up to 300 Starlight Stones."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "July 2 2021, 0:00",
                "end": "July 15 2021, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Special Starlight Stone Bundle",
            "お得な星彩石セット販売"
        ],
        "image": "cork",
        "column": 2,
        "priority": 12,
        "timers": [
            {
                "name": "Period",
                "start": "July 2 2021, 0:00",
                "end": "July 15 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "1300 Days Celebration Paid Summon + Choosable 5★ Summon Ticket",
            "リリース1300日記念★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Stones for a 10x Summon + Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Period",
                "start": "July 2 2021, 0:00",
                "end": "July 15 2021, 23:59"
            },
            {
                "name": "Ticket Expiration",
                "start": "July 2 2021, 0:00",
                "end": "July 22 2021, 23:59"
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
                "name": "Period",
                "start": "July 2 2021, 0:00",
                "end": "July 15 2021, 23:59"
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
                "name": "Summon Period",
                "start": "July 2 2021, 0:00",
                "end": "July 7 2021, 15:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara Fantasia Cross Chara Limited-time Summon",
            "きららファンタジアクロスキャラ限定ピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/jDhVcee.png",
            "https://i.imgur.com/v5zDj5L.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "July 2 2021, 0:00",
                "end": "July 7 2021, 15:59",
                "extraPriority": 4,
                "banners": [
                    {
                        "title": "Polka side",
                        "desc": "Featuring 5★ Polka [Cross Chara]",
                        "time": "July 2 2021, 0:00"
                    },
                    {
                        "title": "Cork Side",
                        "desc": "Featuring 5★ Cork [Cross Chara]",
                        "time": "July 2 2021, 0:00"
                    }
                ]
            }
        ]
    }
];

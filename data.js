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
                start: "July 7 2021, 16:00",
                end: "July 7 2021, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Heart-Throbbing Etowaria Academy - Newly-Appointed Teachers Arc",
            "どきどきエトワリア学園　新任教師編",
            "Teachers Event"
        ],
        "image": [
            "https://i.imgur.com/T8RkPAq.png",
            "https://i.imgur.com/xE5HpSb.png",
            "https://i.imgur.com/kklA5Co.png",
            "https://i.imgur.com/eFBGxsc.png",
            "https://i.imgur.com/oSCTTWx.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "July 7 2021, 17:00",
                "end": "July 21 2021, 11:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "July 14 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "July 9 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "July 16 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "July 17 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "July 18 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "July 19 2021, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "July 7 2021, 17:00",
                "end": "July 21 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "July 7 2021, 17:00",
                "end": "July 28 2021, 13:59"
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
            "Heart-Throbbing Etowaria Academy - Newly-Appointed Teachers Arc Summon",
            "どきどきエトワリア学園　新任教師編ピックアップ召喚",
            "Teachers Event Summon"
        ],
        "image": [
            "https://i.imgur.com/T8RkPAq.png",
            "https://i.imgur.com/xE5HpSb.png",
            "https://i.imgur.com/kklA5Co.png",
            "https://i.imgur.com/eFBGxsc.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "July 7 2021, 17:00",
                "end": "July 14 2021, 16:59",
                "extraPriority": 6,
                "banners": [
                    {
                        "title": "Yuki Side",
                        "desc": "Featuring 5★ Uchiki Yuki",
                        "time": "July 7 2021, 17:00"
                    },
                    {
                        "title": "Karasuma-sensei Side",
                        "desc": "Featuring 5★ Karasuma Sakura, 4★ Karasuma Sakura",
                        "time": "July 7 2021, 17:00"
                    }
                ]
            },
            {
                "name": "Summon Period",
                "start": "July 14 2021, 17:00",
                "end": "July 21 2021, 11:59",
                "extraPriority": 6,
                "banners": [
                    {
                        "title": "Tsubaki Side",
                        "desc": "Featuring 5★ Hanahara Tsubaki",
                        "time": "July 14 2021, 17:00"
                    },
                    {
                        "title": "Nijino-sensei Side",
                        "desc": "Featuring 5★ Nijino Miharu",
                        "time": "July 14 2021, 17:00"
                    }
                ]
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
            "Past Tanabata Limited-time Step-up Summon",
            "期間限定七夕復刻おまけ付き10回召喚",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Featuring 5* Saitou [Tanabata], 5* Tsubasa [Tanabata], 5* Kyouju [Tanabata], 5* Lamp [Tanabata]",
                "start": "July 9 2021, 0:00",
                "end": "July 13 2021, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "July 9 2021, 0:00",
                "end": "July 20 2021, 23:59"
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
        "type": "Other",
        "title": [
            "Kirara's Birthday Celebration Login Bonus",
            "きららお誕生日記念2021ログインボーナス",
            "Log in on 3 days to receive up to 3 Summon Tickets."
        ],
        "image": "kirara",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "July 7 2021, 17:00",
                "end": "July 9 2021, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Kirara's Birthday Celebration Sale",
            "きららお誕生日記念セール"
        ],
        "image": "kirara",
        "column": 2,
        "priority": 12,
        "timers": [
            {
                "name": "Period",
                "start": "July 7 2021, 17:00",
                "end": "July 9 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Past Kirara's Birthday Celebration Cross Chara Limited-time Summon",
            "きららお誕生日記念クロスキャラ限定復刻ピックアップ召喚"
        ],
        "image": "kirara",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Period",
                "start": "July 7 2021, 17:00",
                "end": "July 9 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara's Birthday Celebration Paid Summon + Random 5★ Summon Ticket",
            "きららお誕生日記念★5確定チケット付き！有償限定10回召喚",
            "400 Paid Stones for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "kirara",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Period",
                "start": "July 7 2021, 17:00",
                "end": "July 9 2021, 23:59"
            },
            {
                "name": "Ticket Expiration",
                "start": "July 7 2021, 17:00",
                "end": "July 16 2021, 23:59"
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
                "name": "Summon Period: Featuring students from the current event",
                "start": "July 7 2021, 17:00",
                "end": "July 21 2021, 11:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Tanabata Item Set Sale",
            "七夕セール"
        ],
        "image": "cork",
        "column": 2,
        "priority": 12,
        "timers": [
            {
                "name": "Period",
                "start": "July 9 2021, 0:00",
                "end": "July 13 2021, 16:59"
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
            "KiraFan Summer Night Twitter Campaign",
            "きらファンサマーナイトTwitterキャンペーン",
            "Login to receive the Retweets/Likes Campaign rewards"
        ],
        "image": "kirara",
        "column": 2,
        "priority": 31,
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

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
            "Version 3.2.1 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 40,
        timers: [
            {
                name: "Scheduled Time",
                start: "July 21 2021, 12:00",
                end: "July 21 2021, 17:00",
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
        "type": "Event",
        "title": [
            "Etowaria's Summer One-Shots 2021",
            "エトワリア夏の一幕2021",
            "Summer Mini-Event"
        ],
        "image": ["kirara"],
        "column": 0,
        "priority": 31,
        "timers": [
            {
                "name": "Main Event",
                "start": "July 14 2021, 0:00",
                "end": "July 21 2021, 11:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "Chapter 2",
                        "time": "July 15 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Chapter 3",
                        "time": "July 16 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Chapter 4",
                        "time": "July 17 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Chapter 5",
                        "time": "July 18 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Chapter 6",
                        "time": "July 19 2021, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "July 14 2021, 0:00",
                "end": "July 21 2021, 23:59"
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
            "Summer Night Radio Summon",
            "期間限定2021水着キャラクターピックアップ召喚",
            "Summer 2021 Event Summon"
        ],
        "image": [
            "https://i.imgur.com/xRxyFOS.png",
            "https://i.imgur.com/9p7nWjo.png",
            "https://i.imgur.com/b945uWJ.png",
            "https://i.imgur.com/eC1qgpZ.png",
            "https://i.imgur.com/6w0SCbt.png"
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
                    }
                ],
                "extraPriority": 6
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
        "type": "Gacha",
        "title": [
            "Etowaria Academy's Teacher Step-up + Paid Summon",
            "期間限定いちおしテーマ召喚",
            "Random 5★ Summon Ticket on the 7th step",
            "240 Paid Gems for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5* Matsumoto Yoriko, 5* Yoriko [Maid], 5* Sakura Megumi, 5* Natsume Nina, 5* Enami Kiyose",
                "start": "July 14 2021, 17:00",
                "end": "July 20 2021, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "July 14 2021, 17:00",
                "end": "July 27 2021, 23:59"
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
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Manga Time Kirara & Miracle Limited-time Deluxe Summon",
            "まんがタイムきらら＆ミラク期間限定デラックス召喚",
            "1,000 Paid Gems for a 10x 5* Summon"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "July 21 2021, 17:00",
                "end": "July 28 2021, 23:59",
                "extraPriority": 5
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
                "name": "Item & Gem Sets",
                "start": "July 21 2021, 17:00",
                "end": "August 5 2021, 15:59"
            },
            {
                "name": "Past Swimsuit 5★ Summon Special Support Set, Midsummer 5★ Summon Special Support Set, Past Swimsuit 2020 Random 5★ Summon Ticket",
                "start": "July 21 2021, 17:00",
                "end": "July 28 2021, 23:59"
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

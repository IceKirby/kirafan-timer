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
            "Version 3.2.2 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 40,
        timers: [
            {
                name: "Scheduled Time",
                start: "August 20 2021, 12:00",
                end: "August 20 2021, 17:00",
                keepAfterFinished: "30 minutes"
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
            "Summer Night Resort",
            "サマーナイト・リゾート",
            "Summer 2021 Event Part 2"
        ],
        "image": [
            "https://i.imgur.com/IswZuBu.png",
            "https://i.imgur.com/nvyz3TC.png",
            "https://i.imgur.com/RwibocS.png",
            "https://i.imgur.com/zqqwHYm.png",
            "https://i.imgur.com/VRRWYG4.png",
            "https://i.imgur.com/F2q5GC1.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "August 5 2021, 17:00",
                "end": "August 20 2021, 11:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "August 10 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "August 7 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Super EX Quest",
                        "time": "August 12 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "August 15 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "August 16 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "August 17 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "August 18 2021, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "August 5 2021, 17:00",
                "end": "August 20 2021, 23:59"
            },
            {
                "name": "Event Shop/Mysterious Treasure Chest",
                "start": "August 5 2021, 17:00",
                "end": "August 27 2021, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Golden Post Office and the Goat's Letter",
            "きんいろ郵便局とヤギさんのてがみ",
            "Kiniro Mosaic Movie Celebration Event"
        ],
        "image": [
            "https://i.imgur.com/bidJAcJ.png",
            "https://i.imgur.com/mWBf6TA.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "August 20 2021, 17:00",
                "end": "September 2 2021, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "August 24 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "August 22 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "August 27 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "August 28 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "August 29 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "August 30 2021, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "August 20 2021, 17:00",
                "end": "September 2 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "August 20 2021, 17:00",
                "end": "September 9 2021, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Swimsuit Character 2021 Limited-time Summon",
            "期間限定2021水着キャラクターピックアップ召喚",
            "Summer 2021 Event Summon"
        ],
        "image": [
            "https://i.imgur.com/xRxyFOS.png",
            "https://i.imgur.com/9p7nWjo.png",
            "https://i.imgur.com/b945uWJ.png",
            "https://i.imgur.com/eC1qgpZ.png",
            "https://i.imgur.com/6w0SCbt.png",
            "https://i.imgur.com/IswZuBu.png",
            "https://i.imgur.com/nvyz3TC.png",
            "https://i.imgur.com/RwibocS.png",
            "https://i.imgur.com/zqqwHYm.png",
            "https://i.imgur.com/VRRWYG4.png"
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
                    },
                    {
                        "title": "Part 3",
                        "desc": "Featuring 5★ Yui [Swimsuit], 5★ Syaro [Swimsuit], 5★ Sakura [Swimsuit]",
                        "time": "August 5 2021, 17:00"
                    },
                    {
                        "title": "Part 4",
                        "desc": "Featuring 5★ Botan [Swimsuit], 5★ Ryoko [Swimsuit]",
                        "time": "August 5 2021, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Golden Post Office and the Goat's Letter Summon",
            "きんいろ郵便局とヤギさんのてがみ期間限定ピックアップ召喚",
            "Kiniro Mosaic Movie Celebration Event Summon"
        ],
        "image": [
            "https://i.imgur.com/bidJAcJ.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Event Summon: Featuring 5★ Shinobu [Postman of Happiness]",
                "start": "August 20 2021, 17:00",
                "end": "September 2 2021, 15:59",
                "extraPriority": 6
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
            },
            {
                "name": "Second Half",
                "start": "August 5 2021, 17:00",
                "end": "August 20 2021, 11:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration (Second Half)",
                "start": "August 5 2021, 17:00",
                "end": "August 27 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Super EX Quest Support Step-up Summon",
            "2つの召喚を同時開催！超高難易度クエストで活躍するキャラを仲間にしよう！",
            "240 Paid Gems for a 10x Summon + Random 5★ Summon Ticket",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Yuzuko [Swimsuit], 5★ Takeya Yuki, 5★ Yun [Doll's Festival], 5★ Moeta Kaoruko, 5★ Hibari [Hot Spring], 5★ Haruka [Hot Spring], 5★ Mira [Valentine], 5★ Sugar [Valentine]",
                "start": "August 12 2021, 17:00",
                "end": "August 20 2021, 11:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "August 12 2021, 17:00",
                "end": "August 27 2021, 23:59"
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
            "https://i.imgur.com/1gT1j41.png",
            "https://i.imgur.com/dHyXAgj.png",
            "https://i.imgur.com/IDi0eUE.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Lilith [Part 2], 5★ Fennel [Part 2], 5★ Namiko-san [Part 2]",
                "start": "August 28 2021, 0:00",
                "end": "September 2 2021, 15:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara Fantasia Main Quest Part 2 Paid Summon + Random 5★ Summon Ticket",
            "きららファンタジア第2部限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Namiko-san [Part 2], 5★ Lilith [Part 2], 5★ Fennel [Part 2]",
                "start": "August 28 2021, 0:00",
                "end": "September 2 2021, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "August 28 2021, 0:00",
                "end": "September 9 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Earth Element Characters Step-up Summon + Paid Summon",
            "2つの召喚を同時開催！土属性のキャラクターを仲間にしよう！",
            "240 Paid Gems for a 10x Summon + Random 5★ Summon Ticket",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Tooru, 5★ Ebisuzawa Kurumi, 5★ Yuuri [New Year], 5★ Sonya, 5★ Merry Nightmare, 5★ Ryou [Swimsuit], 5★ Mira [Valentine], 5★ Ao [White Day]",
                "start": "August 27 2021, 17:00",
                "end": "September 2 2021, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "August 27 2021, 17:00",
                "end": "September 9 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Skill Update Step-up Summon",
            "スキルアップデートおまけ付き10回召喚",
            "Random 5★ Summon Ticket on the 3rd step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Hinata Yukari, 5★ Tooru, 5★ Merry Nightmare, 5★ Hirasawa Yui",
                "start": "August 20 2021, 17:00",
                "end": "August 27 2021, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "August 20 2021, 17:00",
                "end": "September 3 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara MAX Limited-time Paid Summon + Choosable 5★ Summon Ticket",
            "きららMAX期間限定★5選べるチケット付き！有償限定10回召喚",
            "1,000 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "August 20 2021, 17:00",
                "end": "August 27 2021, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "August 20 2021, 17:00",
                "end": "September 3 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kiniro Mosaic Limited-time Summon",
            "きんいろモザイク期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/fbxQUTj.png",
            "https://i.imgur.com/HdLaGIi.png",
            "https://i.imgur.com/JWSa2jI.png",
            "https://i.imgur.com/tURX7dp.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Karen [Sports Festival], 5★ Alice [Christmas], 5★ Aya [Christmas], 5★ Youko [Swimsuit]",
                "start": "August 20 2021, 17:00",
                "end": "August 27 2021, 16:59",
                "extraPriority": 4,
                "info": "Also featuring 3* and 4* characters from Kiniro Mosaic"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kiniro Mosaic Paid Summon + Choosable 5★ Summon Ticket",
            "きんいろモザイク★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring characters from Kiniro Mosaic",
                "start": "August 20 2021, 17:00",
                "end": "August 27 2021, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "August 20 2021, 17:00",
                "end": "September 3 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Manga Time Kirara Carat Limited-time Deluxe Summon",
            "まんがタイムきららキャラット期間限定デラックス召喚",
            "1000 Paid Gems for a 10x 5* Summon"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "August 13 2021, 0:00",
                "end": "August 20 2021, 11:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Head Priest & Seven Sages Paid Summon + Random 5★ Summon Ticket",
            "筆頭神官＆七賢者限定★5確定チケット付き！有償限定10回召喚",
            "700 Paid Gems for a 10x Summon + 2x Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Archive, 5★ Sugar, 5★ Sesame, 5★ Cardamom, 5★ Salt, 5★ Ginger, 5★ Fennel, 5★ Hakka",
                "start": "August 13 2021, 0:00",
                "end": "August 20 2021, 11:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "August 13 2021, 0:00",
                "end": "August 27 2021, 23:59"
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
            },
            {
                "name": "Second Half",
                "start": "August 5 2021, 17:00",
                "end": "August 20 2021, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Summer Campaign Special Sale",
            "お得なアイテムセット販売"
        ],
        "image": "cork",
        "column": 2,
        "priority": 12,
        "timers": [
            {
                "name": "First Half: Item & Gem Sets",
                "start": "July 21 2021, 17:00",
                "end": "August 5 2021, 15:59"
            },
            {
                "name": "First Half: Past Swimsuit 5★ Summon Special Support Set, Midsummer 5★ Summon Special Support Set, Past Swimsuit 2020 Random 5★ Summon Ticket",
                "start": "July 21 2021, 17:00",
                "end": "July 28 2021, 23:59"
            },
            {
                "name": "Second Half: Item & Gem Sets",
                "start": "August 5 2021, 17:00",
                "end": "August 20 2021, 11:59"
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
            "Special Item Bundle",
            "お得なアイテムセット販売"
        ],
        "image": "cork",
        "column": 2,
        "priority": 12,
        "timers": [
            {
                "name": "Item & Gem Sets",
                "start": "August 20 2021, 17:00",
                "end": "September 2 2021, 15:59"
            },
            {
                "name": "Memorial Quest Unlock Support Set (KinMoza Thank you), Memorial Quest Completion Support Set (KinMoza Thank you), Kiniro Mosaic Summon Support Set",
                "start": "August 20 2021, 17:00",
                "end": "August 27 2021, 16:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Author Quest \"Kiniro Darkness\" Half Stamina Campaign",
            "作家クエスト「きんいろダークネス」スタミナ半減キャンペーン"
        ],
        "image": "match",
        "column": 2,
        "priority": 14,
        "timers": [
            {
                "name": "Period",
                "start": "August 20 2021, 17:00",
                "end": "September 2 2021, 15:59"
            }
        ]
    }
];

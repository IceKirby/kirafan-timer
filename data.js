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
                start: "December 28 2021, 16:00",
                end: "December 28 2021, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Super Christmas Carol: Etowaria Stage",
            "スーパー・クリスマス・キャロル　エトワリア公演",
            "Christmas 2021 Event"
        ],
        "image": [
            "https://i.imgur.com/G5ENix1.png",
            "https://i.imgur.com/DLKKtWE.png",
            "https://i.imgur.com/nwydpZn.png",
            "https://i.imgur.com/eCTUAki.png",
            "https://i.imgur.com/JjqnvIP.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "December 11 2021, 12:00",
                "end": "December 28 2021, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "December 17 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "December 13 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "December 21 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "December 22 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "December 23 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "December 24 2021, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "December 11 2021, 12:00",
                "end": "December 28 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "December 11 2021, 12:00",
                "end": "January 4 2022, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Prevent the New Year's Suspension: The Twelve Zodiac Signs' Big Gathering!",
            "お正月中止を阻止せよ 十二支大集結！",
            "New Year 2022 Event"
        ],
        "image": [
            "https://i.imgur.com/f1wDszu.png",
            "https://i.imgur.com/DhmNdd2.png",
            "https://i.imgur.com/fdKfdu9.png",
            "https://i.imgur.com/gGGPyOh.png",
            "https://i.imgur.com/WvfIOY5.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "December 28 2021, 17:00",
                "end": "January 14 2022, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "Chapters 5~15",
                        "time": "January 1 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "EX Quest",
                        "time": "January 4 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "January 1 2022, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "January 8 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "January 9 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "January 10 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "January 11 2022, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "December 28 2021, 17:00",
                "end": "January 14 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "December 28 2021, 17:00",
                "end": "January 21 2022, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Christmas Training Support Campaign",
            "クリスマス育成応援キャンペーン",
            "Includes daily missions"
        ],
        "image": [
            "https://i.imgur.com/Kag6pGL.png"
        ],
        "column": 0,
        "priority": 31,
        "timers": [
            {
                "name": "Quests and Missions",
                "start": "December 20 2021, 0:00",
                "end": "December 28 2021, 15:59",
                "extraPriority": 3
            },
            {
                "name": "Event Shop",
                "start": "December 20 2021, 0:00",
                "end": "January 4 2022, 13:59"
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
        "type": "Other",
        "title": [
            "Limited-time Unlocked Daily Quests",
            "曜日クエスト期間限定開放",
            "Some Daily Quests available every day of the week"
        ],
        "image": ["kirara"],
        "column": 0,
        "priority": 31,
        "timers": [
            {
                "name": "Period",
                "start": "December 10 2021, 17:00",
                "end": "December 28 2021, 15:59",
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Super Christmas Carol: Etowaria Stage Summon",
            "期間限定2021クリスマスキャラクターピックアップ召喚",
            "Christmas 2021 Event Summon"
        ],
        "image": [
            "https://i.imgur.com/G5ENix1.png",
            "https://i.imgur.com/DLKKtWE.png",
            "https://i.imgur.com/nwydpZn.png",
            "https://i.imgur.com/eCTUAki.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "December 11 2021, 0:00",
                "end": "December 28 2021, 15:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5★ Karen [Christmas], 5★ Clione [Christmas]",
                        "time": "December 11 2021, 0:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5★ Kaho [Christmas], 5★ Kaos [Christmas]",
                        "time": "December 11 2021, 0:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Prevent the New Year's Suspension: The Twelve Zodiac Signs' Big Gathering! Summon",
            "期間限定2022お正月キャラクターピックアップ召喚",
            "New Year 2022 Event Summon"
        ],
        "image": [
            "https://i.imgur.com/f1wDszu.png",
            "https://i.imgur.com/DhmNdd2.png",
            "https://i.imgur.com/fdKfdu9.png",
            "https://i.imgur.com/gGGPyOh.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "December 28 2021, 17:00",
                "end": "January 14 2022, 15:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5★ Aoyama-san [New Year], 5★ Ryou [New Year]",
                        "time": "December 28 2021, 17:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5★ Yukari [New Year], 5★ Ayano [New Year]",
                        "time": "December 28 2021, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "2021 All Stars Deluxe Summon",
            "2021オールスターデラックス召喚",
            "1000 Paid Gems for a 10x Limited-time 5* Summon"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring every 5* released in 2021 (except Christmas and New Year 2022)",
                "start": "December 28 2021, 17:00",
                "end": "December 31 2021, 23:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Main Quest Part 2 Limited Paid Summon + Choosable 5★ Summon Ticket",
            "きららファンタジア第2部限定★5選べるチケット付き！有償限定10回召喚",
            "600 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Namiko-san [Part 2], 5★ Lilith [Part 2], 5★ Cardamom [Part 2], 5★ Fennel [Part 2]",
                "start": "December 20 2021, 0:00",
                "end": "December 20 2021, 23:59",
                "extraPriority": 8
            },
            {
                "name": "Ticket Expiration",
                "start": "December 20 2021, 0:00",
                "end": "December 27 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Manga Ver. Limited Paid Summon + Choosable 5★ Summon Ticket",
            "きららファンタジアマンガ版限定★5選べるチケット付き！有償限定10回召喚",
            "600 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Clea [Manga ver.], 5★ Kirara [Manga ver.]",
                "start": "December 20 2021, 0:00",
                "end": "December 20 2021, 23:59",
                "extraPriority": 8
            },
            {
                "name": "Ticket Expiration",
                "start": "December 20 2021, 0:00",
                "end": "December 27 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Past Limited-time Christmas Step-up Summon",
            "期間限定クリスマス復刻おまけ付き10回召喚",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring Christmas 2017~2020 characters",
                "start": "December 20 2021, 0:00",
                "end": "December 28 2021, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "December 20 2021, 0:00",
                "end": "January 4 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Limited-time Special Deluxe Summon",
            "期間限定スペシャルデラックス召喚",
            "1000 Paid Gems for a 10x Limited-time 5* Summon"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "December 11 2021, 0:00",
                "end": "December 19 2021, 23:59",
                "banners": [
                    {
                        "title": "Part 1: Featuring Limited-time characters from Manga Time Kirara, Manga Time Kirara Miracle and Manga Time Kirara Carat",
                        "desc": "",
                        "time": "December 11 2021, 0:00"
                    },
                    {
                        "title": "Part 2: Featuring Limited-time characters from Manga Time Kirara MAX, Manga Time Kirara Forward and original Kirara Fantasia characters",
                        "desc": "",
                        "time": "December 11 2021, 0:00"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Summon Period (2nd Edition)",
                "start": "December 20 2021, 0:00",
                "end": "December 28 2021, 15:59",
                "banners": [
                    {
                        "title": "Part 1: Featuring Limited-time characters from Manga Time Kirara, Manga Time Kirara Miracle and Manga Time Kirara Carat",
                        "desc": "",
                        "time": "December 20 2021, 0:00"
                    },
                    {
                        "title": "Part 2: Featuring Limited-time characters from Manga Time Kirara MAX, Manga Time Kirara Forward and original Kirara Fantasia characters",
                        "desc": "",
                        "time": "December 20 2021, 0:00"
                    }
                ],
                "extraPriority": 4
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
                "name": "4th Anniversary Countdown Item Bundles",
                "start": "December 3 2021, 0:00",
                "end": "December 28 2021, 15:59"
            },
            {
                "name": "4th Anniversary Starlight Stone Bundles",
                "start": "December 3 2021, 17:00",
                "end": "December 28 2021, 15:59"
            },
            {
                "name": "4th Anniversary Starlight Stone Bundles + Bonus 2",
                "start": "December 11 2021, 0:00",
                "end": "December 28 2021, 15:59"
            },
            {
                "name": "Christmas Item & Starlight Stone Bundles",
                "start": "December 11 2021, 0:00",
                "end": "December 28 2021, 15:59"
            },
            {
                "name": "Past Christmas Random 5★ Summon Ticket (2021)",
                "start": "December 20 2021, 0:00",
                "end": "December 28 2021, 15:59"
            },
            {
                "name": "Birthday Campaign Special Item Bundles",
                "start": "December 11 2021, 0:00",
                "end": "December 28 2021, 15:59"
            },
            {
                "name": "End of Year Item Bundles",
                "start": "December 28 2021, 17:00",
                "end": "January 8 2022, 23:59"
            },
            {
                "name": "End of Year Gem Sale",
                "start": "December 28 2021, 17:00",
                "end": "January 14 2022, 15:59"
            },
            {
                "name": "New Year Gem & Item Sale",
                "start": "January 1 2022, 0:00",
                "end": "January 14 2022, 15:59"
            },
            {
                "name": "2022 Gorgeous Lucky Bag Set, Past New Year Random 5★ Summon Ticket (2022)",
                "start": "January 1 2022, 0:00",
                "end": "January 8 2022, 23:59"
            },
            {
                "name": "2022 Lucky Bag Set",
                "start": "January 1 2022, 0:00",
                "end": "January 14 2022, 15:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "4th ANNIVERSARY Exchange Shop",
            "4th ANNIVERSARY交換所",
            "Exchange Vouchers for items"
        ],
        "image": "cork",
        "column": 0,
        "priority": 30,
        "timers": [
            {
                "name": "Voucher Exchange Period",
                "start": "December 3 2021, 0:00",
                "end": "January 4 2022, 11:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Seven Sages Challenge Quest Rush",
            "七賢者チャレンジクエストラッシュ！"
        ],
        "image": "leine",
        "column": 0,
        "priority": 30,
        "timers": [
            {
                "name": "Period",
                "start": "December 3 2021, 0:00",
                "end": "December 28 2021, 23:59",
                "extraPriority": 8,
                "markers": [
                    {
                        "title": "Sesame",
                        "time": "December 4 2021, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Cardamon",
                        "time": "December 5 2021, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Salt",
                        "time": "December 6 2021, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Ginger",
                        "time": "December 7 2021, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Fennel",
                        "time": "December 8 2021, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Hakka",
                        "time": "December 9 2021, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Archive",
                        "time": "December 10 2021, 0:00",
                        "type": "battle"
                    }
                ]
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Quest Key Rainbow Gift",
            "「クエストキー　虹」プレゼント",
            "Log in once to receive a Quest Key Rainbow."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "December 10 2021, 17:00",
                "end": "December 28 2021, 15:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Past Limited-time Christmas Step-up Summon",
            "期間限定クリスマス復刻おまけ付き10回召喚",
            "Past Christmas Random 5★ Summon Ticket on 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Period",
                "start": "December 20 2021, 0:00",
                "end": "December 28 2021, 15:59"
            },
            {
                "name": "Ticket Expiration",
                "start": "December 20 2021, 0:00",
                "end": "January 4 2022, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Christmas-themed Room Decoration Items",
            "クリスマス限定ルームアイテム再登場"
        ],
        "image": "kanna",
        "column": 2,
        "priority": 10,
        "timers": [
            {
                "name": "Period",
                "start": "December 11 2021, 0:00",
                "end": "December 28 2021, 15:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Christmas-themed BGM",
            "音楽もクリスマス仕様に！BGM変更"
        ],
        "image": "leine",
        "column": 2,
        "priority": 10,
        "timers": [
            {
                "name": "Period",
                "start": "December 11 2021, 0:00",
                "end": "December 28 2021, 15:59"
            }
        ]
    },
    
    {
        "type": "Mission",
        "title": [
            "Birthday Special Missions",
            "バースデー特別ミッション",
            "Includes Daily Missions"
        ],
        "image": "match",
        "column": 0,
        "priority": 30,
        "timers": [
            {
                "name": "Period",
                "start": "December 11 2021, 0:00",
                "end": "December 28 2021, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Special Login Bonus",
            "スペシャルログインボーナス",
            "Log in on 14 days to receive up to 400 Starlight Stones."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "December 11 2021, 0:00",
                "end": "December 28 2021, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Year Out, Year In Login Bonus",
            "ゆく年くる年ログインボーナス",
            "Log in on 10 days to receive up to 200 Starlight Stones."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "December 28 2021, 17:00",
                "end": "January 14 2022, 23:59"
            }
        ]
    },
    
    {
        "type": "Other",
        "title": [
            "New Year-themed Room Decoration Items",
            "お正月限定ルームアイテム再登場"
        ],
        "image": "kanna",
        "column": 2,
        "priority": 10,
        "timers": [
            {
                "name": "Period",
                "start": "December 28 2021, 17:00",
                "end": "January 14 2022, 15:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "New Year's Gift Login Bonus",
            "お年玉ログインボーナス",
            "Log in once to receive 100 Starlight Stones."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "January 1 2022, 0:00",
                "end": "January 1 2022, 23:59",
                "extraPriority": 5
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "New Year-themed BGM",
            "音楽もお正月仕様に！BGM変更"
        ],
        "image": "leine",
        "column": 2,
        "priority": 10,
        "timers": [
            {
                "name": "Period",
                "start": "January 1 2022, 0:00",
                "end": "January 14 2022, 15:59"
            }
        ]
    }
];

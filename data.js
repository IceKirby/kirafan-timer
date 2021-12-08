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
            "Version 3.2.4 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 40,
        timers: [
            {
                name: "Scheduled Time",
                start: "December 10 2021, 16:00",
                end: "December 10 2021, 17:00",
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
        "type": "Mission",
        "title": [
            "Main Quest Part 2 Chapter 5 Missions",
            "メインクエスト第2部5章追加記念 期間限定ミッション",
            "Clear Chapter 5 to receive 1 Etowarium"
        ],
        "image": ["kirara"],
        "column": 0,
        "priority": 31,
        "timers": [
            {
                "name": "Missions",
                "start": "November 25 2021, 17:00",
                "end": "December 10 2021, 23:59",
                "extraPriority": 3
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
            "Kirara Fantasia Severed Bonds Main Quest Part 2 Limited-time Summon",
            "きららファンタジア断ち切られし絆第2部限定ピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/fJSeRaN.png",
            "https://i.imgur.com/Yb95S3P.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "November 25 2021, 17:00",
                "end": "December 10 2021, 23:59",
                "banners": [
                    {
                        "title": "Chino side",
                        "desc": "Featuring 5★ Chino [Part 2]",
                        "time": "November 25 2021, 17:00"
                    },
                    {
                        "title": "Cocoa side",
                        "desc": "Featuring 5★ Cocoa [Part 2]",
                        "time": "November 25 2021, 17:00"
                    }
                ],
                "extraPriority": 4
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
            "Limited-time Water Element Step-up & Paid Summon",
            "2つの召喚を同時開催！水属性のキャラクターを仲間にしよう！",
            "240 Paid Gems for a 10x Summon + Random 5★ Summon Ticket",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Nagi [Swimsuit], 5★ Sakura Megumi, 5★ Haruka [Hot Spring], 5★ Rize, 5★ Kotetsu [Christmas], 5★ Shinohana Mayu, 5★ Onosaka Koharu, 5★ Sesame [Bridal]",
                "start": "November 25 2021, 17:00",
                "end": "December 2 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "November 25 2021, 17:00",
                "end": "December 9 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Gochuumon wa Usagi Desu Ka? Limited-time Paid Summon + Random 5★ Summon Ticket",
            "ご注文はうさぎですか？期間限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Cocoa [Christmas], 5★ Cocoa [Swimsuit], 5★ Chino [Swimsuit], 5★ Rize [Halloween], 5★ Chiya [Christmas], 5★ Syaro [Halloween], 5★ Syaro [Swimsuit]",
                "start": "November 25 2021, 17:00",
                "end": "December 3 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "November 25 2021, 17:00",
                "end": "December 10 2021, 23:59"
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
                "name": "Summon Period & Ticket Exchange",
                "start": "November 25 2021, 17:00",
                "end": "December 2 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "November 25 2021, 17:00",
                "end": "December 9 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "GochiUsa Exhibit Limited-Time Paid Summon",
            "ごちうさ展記念期間限定★5確定チケット付き！有償限定10回召喚・大阪編",
            "700 Paid Gems for a 10x Summon + 2x Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Cocoa [Christmas], 5★ Cocoa [Swimsuit], 5★ Chino [Swimsuit], 5★ Rize [Halloween], 5★ Chiya [Christmas], 5★ Syaro [Halloween], 5★ Syaro [Swimsuit]",
                "start": "November 18 2021, 0:00",
                "end": "November 30 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "November 18 2021, 0:00",
                "end": "December 7 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Manga Time Collab-Limited Paid Summon + Choosable 5★ Summon Ticket",
            "まんがタイムコラボ限定★5選べるチケット付き！有償限定10回召喚",
            "600 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Satonaka Chie, 5★ Shirai Reiko, 5★ Kurahashi Riko, 5★ Maki Natsuo, 5★ Komori Shuri, 5★ Nishitori Megumi",
                "start": "December 3 2021, 0:00",
                "end": "December 3 2021, 23:59",
                "extraPriority": 8
            },
            {
                "name": "Ticket Expiration",
                "start": "December 3 2021, 0:00",
                "end": "December 10 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Paid Summon + Choosable 5★ Summon Ticket",
            "★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "First Half",
                "start": "December 3 2021, 0:00",
                "end": "December 10 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Second Half",
                "start": "December 11 2021, 0:00",
                "end": "December 19 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "December 3 2021, 0:00",
                "end": "December 26 2021, 23:59"
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
        "type": "Other",
        "title": [
            "All Limited-time Room Decoration Items Available",
            "ルームショップに全ての限定アイテムが再登場"
        ],
        "image": "kanna",
        "column": 2,
        "priority": 10,
        "timers": [
            {
                "name": "Period",
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
                "name": "Main Quest Part 2 Chapter 5 Starlight Stone & Item Bundles",
                "start": "November 25 2021, 17:00",
                "end": "December 10 2021, 23:59"
            },
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
                "name": "4th Anniversary Starlight Stone Bundles + Bonus 1",
                "start": "December 11 2021, 0:00",
                "end": "December 19 2021, 23:59"
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
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "4th ANNIVERSARY Countdown Login Bonus",
            "4th ANNIVERSARYカウントダウンログインボーナス",
            "Log in on 7 days to receive up to 388x 4th Anniversary Vouchers."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "December 3 2021, 0:00",
                "end": "December 10 2021, 23:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "4th ANNIVERSARY Countdown Missions",
            "4th ANNIVERSARYカウントダウン特別ミッション",
            "Includes daily missions"
        ],
        "image": "match",
        "column": 0,
        "priority": 30,
        "timers": [
            {
                "name": "Period",
                "start": "December 3 2021, 0:00",
                "end": "December 10 2021, 23:59"
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
            "Author Quests Half Stamina Campaign",
            "作家クエストスタミナ半減キャンペーン"
        ],
        "image": "match",
        "column": 2,
        "priority": 14,
        "timers": [
            {
                "name": "Period",
                "start": "December 3 2021, 0:00",
                "end": "December 10 2021, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Christmas Login Bonus",
            "クリスマスログインボーナス",
            "Log in once to receive 1 Summon Ticket."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "December 25 2021, 0:00",
                "end": "December 25 2021, 23:59",
                "extraPriority": 8
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
    }
];

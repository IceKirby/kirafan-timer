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
                start: "September 14 2021, 16:00",
                end: "September 14 2021, 17:00",
                keepAfterFinished: "30 minutes"
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
        "type": "Mission",
        "title": [
            "Main Quest Part 2 Chapter 4 Special Missions",
            "メインクエスト第2部4章追加記念 期間限定ミッション"
        ],
        "image": "match",
        "column": 0,
        "priority": 31,
        "timers": [
            {
                "name": "Period",
                "start": "September 2 2021, 17:00",
                "end": "September 14 2021, 15:59",
                "extraPriority": 3
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
            "Kirara Fantasia Severed Bonds Main Quest Part 2 Limited-time Summon",
            "きららファンタジア断ち切られし絆第2部限定ピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/MdcMj0z.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Cardamom [Part 2]",
                "start": "September 2 2021, 17:00",
                "end": "September 14 2021, 15:59",
                "extraPriority": 4
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
            "Kirara Fantasia Limited-time Paid Summon + Random 5★ Summon Ticket",
            "きららファンタジア期間限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Lamp [Swimsuit], 5★ Lamp [Tanabata], 5★ Clea [Doll's Festival], 5★ Cork [Maid], 5★ Archive [New Year], 5★ Sugar [Valentine], 5★ Sesame [Bridal], 5★ Salt [White Day], 5★ Ginger [Maid]",
                "start": "September 2 2021, 17:00",
                "end": "September 9 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "September 2 2021, 17:00",
                "end": "September 16 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Head Priest & Seven Sages Paid Summon + Random 5★ Summon Ticket",
            "筆頭神官＆七賢者限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Archive, 5★ Sugar, 5★ Sesame, 5★ Cardamom, 5★ Salt, 5★ Ginger, 5★ Fennel, 5★ Hakka",
                "start": "September 2 2021, 17:00",
                "end": "September 9 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "September 2 2021, 17:00",
                "end": "September 16 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Limited-time Warrior Step-up Summon/Paid Summon",
            "2つの召喚を同時開催！せんしのキャラクターを仲間にしよう！",
            "240 Paid Gems for a 10x Summon + Random 5★ Summon Ticket",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Karasuma Sakura, 5★ Nene [Swimsuit], 5★ Ahagon Umiko, 5★ Nijino Miharu, 5★ Kana [White Day], 5★ Nishiyama [Maid], 5★ Shamiko [Sports Festival], 5★ Miniwa Tsumiki",
                "start": "September 4 2021, 17:00",
                "end": "September 12 2021, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "September 4 2021, 17:00",
                "end": "September 19 2021, 23:59"
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
                name: "Part 2 (Chapters 1~3)",
                "start": "August 28 2021, 0:00",
                "end": "September 9 2021, 23:59"
            },
            {
                name: "Part 1 (Chapters 1~Prologue, Normal Mode)",
                "start": "September 2 2021, 17:00",
                "end": "September 14 2021, 15:59"
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
        "type": "WeekendBoss",
        "title": [
            "September Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        "image": "https://i.imgur.com/XoUiniG.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "September 4 2021, 0:00",
                "end": "September 5 2021, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "September 11 2021, 0:00",
                "end": "September 12 2021, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "September 18 2021, 0:00",
                "end": "September 19 2021, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "September 25 2021, 0:00",
                "end": "September 26 2021, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "September 4 2021, 0:00",
                "end": "October 1 2021, 23:59",
                "keepAfterFinished": "2 hours",
                "type": "normal"
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
            },
            {
                "name": "Scroll & Star Beads Set, Fruit Set, Gem Set",
                "start": "September 2 2021, 17:00",
                "end": "September 14 2021, 15:59"
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

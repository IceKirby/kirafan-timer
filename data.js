var alertMessages = ["Thank you for everything, Kirara Fantasia!"];
var alertTypes = ["primary"];
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
            "Version 3.2.17 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 40,
        timers: [
            {
                name: "Scheduled Time",
                start: "November 18 2022, 16:00",
                end: "November 18 2022, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "The Realists' Future",
            "メインクエスト第2部外伝リアリストたちの未来",
            "Main Quest Part 2 Extra Story"
        ],
        "image": [
            "kirara"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "November 7 2022, 17:00",
                "end": "February 28 2023, 15:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Special Missions",
            "期間限定特別ミッション",
            "Clear quests to receive Comm Cards, Starlight Stones and All-Stars Choosable 5* Summon Ticket"
        ],
        "image": [
            "lamp"
        ],
        "column": 0,
        "priority": 31,
        "timers": [
            {
                "name": "Period",
                "start": "November 7 2022, 17:00",
                "end": "February 28 2023, 15:59",
                "extraPriority": 3
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "All-Stars Summons",
            "オールスターキャラクター召喚",
            "All characters released so far (except Sanrio collab)"
        ],
        "image": "clea",
        "column": 1,
        "priority": 22,
        "timers": [
            {
                "name": "Summon Period",
                "start": "November 7 2022, 0:00",
                "end": "February 28 2023, 15:59",
                "banners": [
                    {
                        "title": "Manga Time Kirara & Miracle",
                        "time": "November 7 2022, 0:00"
                    },
                    {
                        "title": "Manga Time Kirara MAX",
                        "time": "November 7 2022, 0:00"
                    },
                    {
                        "title": "Manga Time Kirara Forward",
                        "time": "November 7 2022, 0:00"
                    },
                    {
                        "title": "Manga Time Kirara Carat",
                        "time": "November 7 2022, 0:00"
                    },
                    {
                        "title": "Kirara Fantasia & Manga Time",
                        "time": "November 7 2022, 0:00"
                    }
                ]
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Magazine-specific Step-up Summons",
            "雑誌別おまけ付き10回召喚の終了",
            "Last run for the Magazine-specific summons"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Manga Time Kirara & Miracle",
                "start": "November 7 2022, 0:00",
                "end": "November 13 2022, 12:59"
            },
            {
                "name": "Manga Time Kirara MAX",
                "start": "November 14 2022, 0:00",
                "end": "November 20 2022, 12:59"
            },
            {
                "name": "Manga Time Kirara Forward",
                "start": "November 21 2022, 0:00",
                "end": "November 27 2022, 12:59"
            },
            {
                "name": "Manga Time Kirara Carat",
                "start": "November 28 2022, 0:00",
                "end": "December 4 2022, 12:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Daily KiraKira Summon",
            "1日1回オールスターきらきら召喚・外伝版",
            "400 Paid Gems once per day for 3 summons, all 5*"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "October 20 2022, 0:00",
                "end": "October 26 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "October 20 2022, 0:00",
                "end": "November 2 2022, 23:59"
            }
        ]
    },
    {
        type: "LoginDays",
        title: [
            "Bocchi the Rock! participation Login Bonus",
            "ぼっち・ざ・ろっく！参戦決定記念ログインボーナス",
            "20 Gems on days the anime airs"
        ],
        image: "lamp",
        column: 2,
        priority: 15,
        timers: [
            {
                name: "Episode 2",
                date: "October 15 2022",
                days: 2
            },
            {
                name: "Episode 3",
                date: "October 22 2022",
                days: 2
            },
            {
                name: "Episode 4",
                date: "October 29 2022",
                days: 2
            },
            {
                name: "Episode 5",
                date: "November 5 2022",
                days: 2
            },
            {
                name: "Episode 6",
                date: "November 12 2022",
                days: 2
            },
            {
                name: "Episode 7",
                date: "November 19 2022",
                days: 2
            },
            {
                name: "Episode 8",
                date: "November 26 2022",
                days: 2
            },
            {
                name: "Episode 9",
                date: "December 3 2022",
                days: 2
            },
            {
                name: "Episode 10",
                date: "December 10 2022",
                days: 2
            },
            {
                name: "Episode 11",
                date: "December 17 2022",
                days: 2
            },
            {
                name: "Episode 12",
                date: "December 24 2022",
                days: 2
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Main Quest & Author Quests Half Stamina Campaign",
            "メインクエスト＆作家クエストスタミナ半減キャンペーン",
        ],
        image: "match",
        column: 2,
        priority: 14,
        timers: [
            {
                name: "Period",
                "start": "November 7 2022, 17:00",
                "end": "February 28 2023, 15:59",
                "markers": [
                    {
                        "title": "Main Quest Part 1 (Chapters 1~Epilogue, Normal Mode)",
                        "time": "November 7 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Main Quest Part 2 (Chapters 1~Final Chapter)",
                        "time": "December 1 2022, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Author Quests",
                        "time": "January 1 2023, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Main Quest Part 1 (Chapters 1~8, Hard Mode)",
                        "time": "February 1 2023, 0:00",
                        "type": "battle"
                    },
                ]
            }
        ]
    },
    {
        "type": "WeekendBoss",
        "title": [
            "October Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        "image": "https://i.imgur.com/r9kfa7x.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "October 1 2022, 0:00",
                "end": "October 2 2022, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "October 8 2022, 0:00",
                "end": "October 9 2022, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "October 15 2022, 0:00",
                "end": "October 16 2022, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "October 22 2022, 0:00",
                "end": "October 23 2022, 23:59"
            },
            {
                "name": "Weekend 5",
                "start": "October 29 2022, 0:00",
                "end": "October 30 2022, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "October 1 2022, 0:00",
                "end": "November 4 2022, 23:59",
                "keepAfterFinished": "2 hours",
                "type": "normal"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "November Boss Challenge",
            "Fight past Boss and Super EX quests",
            "Receive Challenge Medals"
        ],
        "image": "match",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Period",
                "start": "November 5 2022, 0:00",
                "end": "December 2 2022, 23:59",
                "markers": [
                    {
                        "title": "Steel Titan & Hina Boss",
                        "time": "November 5 2022, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Risyuka",
                        "time": "November 12 2022, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Combined Matango",
                        "time": "November 19 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Sweets Golem",
                        "time": "November 26 2022, 0:00",
                        "type": "story"
                    }
                ]
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "December Boss Challenge",
            "Fight past Boss and Super EX quests",
            "Receive Challenge Medals"
        ],
        "image": "match",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Period",
                "start": "December 3 2022, 0:00",
                "end": "January 6 2023, 23:59",
                "markers": [
                    {
                        "title": "Orba & Rose",
                        "time": "December 3 2022, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Tamami",
                        "time": "December 10 2022, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Etowaria's Evil God Statue",
                        "time": "December 17 2022, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Christmas Sweets Golem",
                        "time": "December 24 2022, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Dada Morashi Bird",
                        "time": "December 31 2022, 0:00",
                        "type": "battle"
                    }
                ]
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "January Boss Challenge",
            "Fight past Boss and Super EX quests",
            "Receive Challenge Medals"
        ],
        "image": "match",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Period",
                "start": "January 7 2023, 0:00",
                "end": "February 3 2023, 23:59",
                "markers": [
                    {
                        "title": "Titan & Ginger's Head Maid",
                        "time": "January 7 2023, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Ibis",
                        "time": "January 14 2023, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Gaming Space Alien",
                        "time": "January 21 2023, 0:00",
                        "type": "battle"
                    },
                    {
                        "title": "Summer Sweets Golem",
                        "time": "January 28 2023, 0:00",
                        "type": "battle"
                    }
                ]
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
                "name": "Main Quest Part 2 Extra Story Item & Starlight Stone Sets 1",
                "start": "October 8 2022, 0:00",
                "end": "October 27 2022, 15:59"
            },
            {
                "name": "Main Quest Part 2 Extra Story Set",
                "start": "October 12 2022, 17:00",
                "end": "October 27 2022, 15:59"
            },
            {
                "name": "Bocchi the Rock! Item & Starlight Stone Sets 1",
                "start": "October 12 2022, 17:00",
                "end": "October 27 2022, 15:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "1800 Days Since Release Login Bonus",
            "リリース1800日記念",
            "Log in to receive 300 Starlight Stones"
        ],
        "image": "Lamp",
        "column": 2,
        "priority": 18,
        "timers": [
            {
                "name": "Period",
                "start": "November 14 2022, 0:00",
                "end": "November 14 2022, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Past Limited-time Room Items",
            "期間限定ルームアイテム再登場",
            "All limited-time Room Items will be available"
        ],
        "image": "kanna",
        "column": 2,
        "priority": 12,
        "timers": [
            {
                "name": "Period",
                "start": "November 7 2022, 17:00",
                "end": "February 28 2023, 15:59",
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Autumn of Adventures Campaign",
            "冒険の秋キャンペー",
        ],
        image: "match",
        column: 0,
        priority: 30,
        timers: [
            {
                name: "Half Stamina Campaign (Main Quest Parts 1 & 2, Author Quests)",
                "start": "October 27 2022, 17:00",
                "end": "November 7 2022, 14:59",
                "extraPriority": 4
            },
            {
                name: "Login Bonus (1x Large Stamina Recovery Item and 1x Quest Key Rainbow per day)",
                "start": "October 27 2022, 17:00",
                "end": "November 7 2022, 23:59"
            }
        ]
    }
];

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
                start: "April 27 2022, 16:00",
                end: "April 27 2022, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "The Goddess' Easter Egg",
            "女神のイースターエッグ",
            "Easter 2022 Event"
        ],
        "image": [
            "https://i.imgur.com/IGX7sFG.png",
            "https://i.imgur.com/kmO7OTo.png",
            "https://i.imgur.com/pDvB4Ig.png",
            "https://i.imgur.com/pWhFU9K.png",
            "https://i.imgur.com/Bk67q23.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "April 27 2022, 17:00",
                "end": "May 17 2022, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "May 1 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "April 29 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "May 11 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "May 12 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "May 13 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "May 14 2022, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "April 27 2022, 17:00",
                "end": "May 17 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "April 27 2022, 17:00",
                "end": "May 24 2022, 13:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Main Quest Part 2 Chapter 7 Missions",
            "メインクエスト第2部7章追加記念 期間限定ミッション"
        ],
        "image": "leine",
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Etowarium Mission",
                "start": "April 13 2022, 17:00",
                "end": "April 27 2022, 23:59",
                "extraPriority": 5
            },
            {
                "name": "Head Priest & Seven Sages Choosable 5* Summon Ticket Mission",
                "start": "April 13 2022, 17:00",
                "end": "April 17 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Main Quest Part 2 Limited-time Summon",
            "きららファンタジア断ち切られし絆第2部限定ピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/D0j6Mv9.png",
            "https://i.imgur.com/3TXBkdf.png",
            "https://i.imgur.com/gaSmwxP.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "April 13 2022, 17:00",
                "end": "April 27 2022, 15:59",
                "banners": [
                    {
                        "title": "Lamp side",
                        "desc": "Featuring 5★ Lamp [Part 2]",
                        "time": "April 13 2022, 17:00"
                    },
                    {
                        "title": "Hakka side",
                        "desc": "Featuring 5★ Hakka [Part 2]",
                        "time": "April 13 2022, 17:00"
                    },
                    {
                        "title": "Utsutsu side",
                        "desc": "Featuring 5★ Utsutsu [Part 2]",
                        "time": "April 20 2022, 0:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "The Goddess' Easter Egg Summon",
            "女神のイースターエッグ期間限定ピックアップ召喚",
            "Easter 2022 Event Summon"
        ],
        "image": [
            "https://i.imgur.com/IGX7sFG.png",
            "https://i.imgur.com/kmO7OTo.png",
            "https://i.imgur.com/pDvB4Ig.png",
            "https://i.imgur.com/pWhFU9K.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "April 27 2022, 17:00",
                "end": "May 17 2022, 15:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5★ Kayo [Easter], 5★ Chiya [Easter]",
                        "time": "April 27 2022, 17:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5★ Sonobe [Easter], 5★ Polka [Easter]",
                        "time": "April 27 2022, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "筆頭神官＆七賢者限定 Paid Summon + Choosable 5★ Summon Ticket",
            "筆頭神官＆七賢者限定★5選べるチケット付き！有償限定10回召喚",
            "600 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Archive, 5★ Sugar, 5★ Sesame, 5★ Cardamom, 5★ Salt, 5★ Ginger, 5★ Fennel, 5★ Hakka",
                "start": "April 13 2022, 17:00",
                "end": "April 19 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "April 13 2022, 17:00",
                "end": "April 26 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara Fantasia Limited-time Paid Summon + Random 5★ Summon Ticket",
            "きららファンタジア期間限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + 2s Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Lamp [Swimsuit], 5★ Lamp [Tanabata], 5★ Clea [Doll's Festival], 5★ Cork [Maid], 5★ Archive [New Year], 5★ Sugar [Valentine], 5★ Sesame [Bridal], 5★ Salt [White Day], 5★ Ginger [Maid]",
                "start": "April 13 2022, 17:00",
                "end": "April 19 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "April 13 2022, 17:00",
                "end": "April 26 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara Fantasia Limited-time Deluxe Summon",
            "きららファンタジア期間限定デラックス召喚",
            "1000 Paid Gems for a 10x 5* Summon"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "April 21 2022, 0:00",
                "end": "April 27 2022, 15:59",
                "extraPriority": 4
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
                "start": "April 21 2022, 0:00",
                "end": "April 27 2022, 15:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Manga Time Kirara Forward Limited-time Deluxe Summon",
            "まんがタイムきららフォワード期間限定デラックス召喚",
            "1000 Paid Gems for a 10x 5* Summon"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "April 21 2022, 0:00",
                "end": "April 27 2022, 15:59",
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
            },
            {
                name: "Episode 3",
                date: "April 20 2022",
                days: 2
            },
            {
                name: "Episode 4",
                date: "April 27 2022",
                days: 2
            },
            {
                name: "Episode 5",
                date: "May 4 2022",
                days: 2
            },
            {
                name: "Episode 6",
                date: "May 11 2022",
                days: 2
            },
            {
                name: "Episode 7",
                date: "May 18 2022",
                days: 2
            },
            {
                name: "Episode 8",
                date: "May 25 2022",
                days: 2
            },
            {
                name: "Episode 9",
                date: "June 1 2022",
                days: 2
            },
            {
                name: "Episode 10",
                date: "June 8 2022",
                days: 2
            },
            {
                name: "Episode 11",
                date: "June 15 2022",
                days: 2
            },
            {
                name: "Episode 12",
                date: "June 22 2022",
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
                name: "Part 2 (Chapters 1~7)",
                "start": "April 13 2022, 17:00",
                "end": "April 17 2022, 23:59"
            },
            {
                name: "Part 1 (Chapters 1~Prologue, Normal Mode)",
                "start": "January 27 2022, 17:00",
                "end": "February 10 2022, 15:59"
            }
        ]
    },
    {
        "type": "WeekendBoss",
        "title": [
            "April Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        "image": "https://i.imgur.com/CKRTmPp.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "April 2 2022, 0:00",
                "end": "April 3 2022, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "April 9 2022, 0:00",
                "end": "April 10 2022, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "April 16 2022, 0:00",
                "end": "April 17 2022, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "April 23 2022, 0:00",
                "end": "April 24 2022, 23:59"
            },
            {
                "name": "Weekend 5",
                "start": "April 30 2022, 0:00",
                "end": "May 1 2022, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "April 2 2022, 0:00",
                "end": "May 6 2022, 23:59",
                "keepAfterFinished": "2 hours",
                "type": "normal"
            }
        ]
    },
    {
        "type": "WeekendBoss",
        "title": [
            "May Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        "image": "https://i.imgur.com/3kxYBAT.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "May 7 2022, 0:00",
                "end": "May 8 2022, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "May 14 2022, 0:00",
                "end": "May 15 2022, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "May 21 2022, 0:00",
                "end": "May 22 2022, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "May 28 2022, 0:00",
                "end": "May 29 2022, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "May 7 2022, 0:00",
                "end": "June 3 2022, 23:59",
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
                "name": "Main Quest Part 2 Chapter 7 Starlight Stone & Item Sets",
                "start": "April 13 2022, 17:00",
                "end": "April 27 2022, 13:59"
            },
            {
                "name": "Easter Event Starlight Stone & Item Sets",
                "start": "April 27 2022, 17:00",
                "end": "May 17 2022, 15:59"
            },
            {
                "name": "Limited-time Easter 2022 5* Summon Ticket Expiration",
                "start": "April 27 2022, 17:00",
                "end": "May 24 2022, 23:59"
            }
            
        ]
    }
];

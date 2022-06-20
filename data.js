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
            "Version 3.2.9 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 40,
        timers: [
            {
                name: "Scheduled Time",
                start: "June 14 2022, 16:00",
                end: "June 14 2022, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Haunted Bridal",
            "ホーンテッド・ブライダル",
            "Bridal Event 2022"
        ],
        "image": [
            "https://i.imgur.com/kr9G4qK.png",
            "https://i.imgur.com/NEU30II.png",
            "https://i.imgur.com/9JxGj2P.png",
            "https://i.imgur.com/qfi1Mfp.png",
            "https://i.imgur.com/6lUfknn.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "May 31 2022, 17:00",
                "end": "June 14 2022, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "June 4 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "June 2 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "June 9 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "June 10 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "June 11 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "June 12 2022, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "May 31 2022, 17:00",
                "end": "June 14 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "May 31 2022, 17:00",
                "end": "June 21 2022, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Looking for a Job and a House",
            "お仕事探しとおうち探し",
            "RPG Fudousan Event"
        ],
        "image": [
            "https://i.imgur.com/7f6sQwb.png",
            "https://i.imgur.com/mY0n4lr.png",
            "https://i.imgur.com/8maE1KO.png",
            "https://i.imgur.com/YTjoUnb.png",
            "https://i.imgur.com/DLUGcsx.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "June 14 2022, 17:00",
                "end": "June 28 2022, 14:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "June 18 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "June 16 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "June 23 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "June 24 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "June 25 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "June 26 2022, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "June 14 2022, 17:00",
                "end": "June 28 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "June 14 2022, 17:00",
                "end": "July 5 2022, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Looking for a Job and a House Summon",
            "お仕事探しとおうち探しピックアップ召喚",
            "RPG Fudousan Event Summon"
        ],
        "image": [
            "https://i.imgur.com/7f6sQwb.png",
            "https://i.imgur.com/mY0n4lr.png",
            "https://i.imgur.com/8maE1KO.png",
            "https://i.imgur.com/YTjoUnb.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "June 14 2022, 17:00",
                "end": "June 28 2022, 14:59",
                "banners": [
                    {
                        "title": "Ino-Senpai Side",
                        "desc": "Featuring 5★ Inose Mai, 4★ Manaka Ao",
                        "time": "June 14 2022, 17:00"
                    },
                    {
                        "title": "Kotone Side",
                        "desc": "Featuring 5★ Kazairo Kotone, 4★ Rufuria, 4★ Rakira",
                        "time": "June 14 2022, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "All Stars Paid Summon + Choosable 5★ Summon Ticket",
            "オールスター★5選べるチケット付き！有償限定10回召喚",
            "390 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "June 14 2022, 17:00",
                "end": "June 21 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "June 14 2022, 17:00",
                "end": "June 28 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Paid Summon + Choosable 5★ Summon Ticket",
            "★5選べるチケット付き！有償限定10回召喚",
            "390 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket + 1x KiraFan 39 Campaign Voucher"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "First Half",
                "start": "June 14 2022, 17:00",
                "end": "June 17 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Second Half",
                "start": "June 18 2022, 0:00",
                "end": "June 21 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Voucher Exchange",
                "start": "June 14 2022, 17:00",
                "end": "June 21 2022, 23:59"
            },
            {
                "name": "Ticket Expiration",
                "start": "June 14 2022, 17:00",
                "end": "June 28 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Limited-time Past Tanabata Step-up Summon",
            "期間限定七夕復刻おまけ付き10回召喚",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Ena [Tanabata], 5★ Tsubasa [Tanabata], 5★ Kyouju [Tanabata], 5★ Lamp [Tanabata]",
                "start": "June 22 2022, 0:00",
                "end": "June 29 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "June 22 2022, 0:00",
                "end": "July 6 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara Carat Paid Summon + Choosable 5★ Summon Ticket",
            "きららキャラット期間限定★5選べるチケット付き！有償限定10回召喚",
            "1,000 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "June 22 2022, 0:00",
                "end": "June 28 2022, 14:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "June 22 2022, 0:00",
                "end": "July 5 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Daily KiraKira Summon - 39 Limited Edition",
            "1日1回オールスターきらきら召喚",
            "390 Paid Gems once per day for 3 summons, all 5* + All-Stars Ticket Fragment"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period & Ticket Fragment Exchange",
                "start": "June 15 2022, 0:00",
                "end": "June 21 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "June 15 2022, 0:00",
                "end": "June 30 2022, 23:59"
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
                "name": "Summon Period: Featuring 5★ Mira [Valentine], 5★ Ao [White Day], 5★ Leine [Hot Springs], 4★ Tooru [Swimsuit], 4★ Run [Christmas], 4★ Momiji [New Year], 4★ Tsubame [Valentine], 4★ Maika [Doll's Festival]",
                "start": "June 14 2022, 17:00",
                "end": "June 28 2022, 14:59",
                "extraPriority": 4
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
                "name": "Summon Period & Ticket Piece Exchange: Featuring past Tanabata characters",
                "start": "June 22 2022, 0:00",
                "end": "June 29 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "June 22 2022, 0:00",
                "end": "July 6 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Mixed Past Limited-time Paid Summon + Choosable 5★ Summon Ticket",
            "期間限定ミックス復刻★5選べるチケット付き！有償限定10回召喚",
            "600 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket + 1x Voucher"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "First Half: Featuring past Tanabata, Hot Springs, Bridal characters",
                "start": "May 31 2022, 17:00",
                "end": "June 7 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Second Half: Featuring past Tanabata, Hot Springs, Bridal characters",
                "start": "June 8 2022, 0:00",
                "end": "June 14 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Voucher Exchange",
                "start": "May 31 2022, 17:00",
                "end": "June 14 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "May 31 2022, 17:00",
                "end": "June 21 2022, 23:59"
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
                "start": "May 17 2022, 17:00",
                "end": "May 23 2022, 23:59"
            },
            {
                name: "Part 1 (Chapters 1~Prologue)",
                "start": "May 24 2022, 0:00",
                "end": "May 31 2022, 15:59"
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
        "image": "https://i.imgur.com/ZxtzQYc.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "June 4 2022, 0:00",
                "end": "June 5 2022, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "June 11 2022, 0:00",
                "end": "June 12 2022, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "June 18 2022, 0:00",
                "end": "June 19 2022, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "June 25 2022, 0:00",
                "end": "June 26 2022, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "June 4 2022, 0:00",
                "end": "July 1 2022, 23:59",
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
                "name": "RPG Fudousan Event Item & Starlight Stone Sets",
                "start": "June 14 2022, 17:00",
                "end": "June 28 2022, 14:59"
            },
            {
                "name": "KiraFan 39 (Thank You) Campaign Item & Starlight Stone Sets",
                "start": "June 14 2022, 17:00",
                "end": "June 21 2022, 23:59"
            },
            {
                "name": "Past Tanabata Random 5* Summon Ticket",
                "start": "June 22 2022, 0:00",
                "end": "June 29 2022, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "KiraFan 39 Campaign Login Bonus",
            "きらファン39キャンペーンログインボーナス",
            "Log in on 5 days to receive up to 390 Starlight Stones."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "June 14 2022, 17:00",
                "end": "June 21 2022, 23:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "KiraFan 39 (Thank You) Campaign Special Missions",
            "きらファン39キャンペーン期間限定特別ミッション"
        ],
        "image": "match",
        "column": 0,
        "priority": 30,
        "timers": [
            {
                "name": "Period",
                "start": "June 14 2022, 17:00",
                "end": "June 21 2022, 23:59"
            }
        ]
    }
];

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
            "Version 3.2.10 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 40,
        timers: [
            {
                name: "Scheduled Time",
                start: "June 28 2022, 15:00",
                end: "June 28 2022, 17:00",
                keepAfterFinished: "30 minutes"
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
        "type": "Event",
        "title": [
            "Tanabata's Parting Star",
            "七夕のわかれ星",
            "Tanabata 2022 Event"
        ],
        "image": [
            "https://i.imgur.com/QWVV6C0.png",
            "https://i.imgur.com/KCtcSql.png",
            "https://i.imgur.com/qBZ3vMx.png",
            "https://i.imgur.com/UmxCNwm.png",
            "https://i.imgur.com/LDnMVby.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "June 28 2022, 17:00",
                "end": "July 12 2022, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "July 2 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "June 30 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "July 7 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "July 8 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "July 9 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "July 10 2022, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "June 28 2022, 17:00",
                "end": "July 12 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "June 28 2022, 17:00",
                "end": "July 19 2022, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Tanabata's Parting Star Summon",
            "七夕のわかれ星期間限定ピックアップ召喚",
            "Tanabata 2022 Event Summon"
        ],
        "image": [
            "https://i.imgur.com/QWVV6C0.png",
            "https://i.imgur.com/KCtcSql.png",
            "https://i.imgur.com/qBZ3vMx.png",
            "https://i.imgur.com/UmxCNwm.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "June 28 2022, 17:00",
                "end": "July 12 2022, 15:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5★ Ao [Tanabata], 5★ Saori [Tanabata]",
                        "time": "June 28 2022, 17:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5★ Uki [Tanabata], 5★ Cork [Tanabata]",
                        "time": "June 28 2022, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Summer Camp△ Limited-time Summon",
            "さまキャン△期間限定ピックアップ召喚"
        ],
        "image": "https://i.imgur.com/VwHurrx.png",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Rin [Adult Version]",
                "start": "July 1 2022, 0:00",
                "end": "July 8 2022, 23:59",
                "extraPriority": 4
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
            "Main Quest Part 2 Limited-time Paid Summon + Random 5★ Summon Ticket",
            "きららファンタジア第2部限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "July 5 2022, 0:00",
                "end": "July 12 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "July 5 2022, 0:00",
                "end": "July 19 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Main Quest Part 2 Limited-time Step-up Summon",
            "きららファンタジア第2部限定復刻おまけ付き10回召喚",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "July 5 2022, 0:00",
                "end": "July 12 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "July 5 2022, 0:00",
                "end": "July 19 2022, 23:59"
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
                "start": "July 5 2022, 0:00",
                "end": "July 12 2022, 15:59"
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
            "July Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        "image": "https://i.imgur.com/VY0qyap.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "July 2 2022, 0:00",
                "end": "July 3 2022, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "July 9 2022, 0:00",
                "end": "July 10 2022, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "July 16 2022, 0:00",
                "end": "July 17 2022, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "July 23 2022, 0:00",
                "end": "July 24 2022, 23:59"
            },
            {
                "name": "Weekend 5",
                "start": "July 30 2022, 0:00",
                "end": "July 31 2022, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "July 2 2022, 0:00",
                "end": "August 5 2022, 23:59",
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
                "name": "Tanabata Event Item & Starlight Stone Sets",
                "start": "June 28 2022, 17:00",
                "end": "July 12 2022, 15:59"
            },
            {
                "name": "Summer Festa 2022 Starlight Stone Sets",
                "start": "June 28 2022, 17:00",
                "end": "July 3 2022, 23:59"
            },
            {
                "name": "Summer Camp△ Campaign Item & Starlight Stone Sets",
                "start": "July 1 2022, 0:00",
                "end": "July 8 2022, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Summer Festa 2022 Login Bonus",
            "サマーフェスタ2022記念ログインボーナス",
            "Log in everyday to receive up to 6 Summon Tickets."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "June 28 2022, 17:00",
                "end": "July 3 2022, 23:59"
            }
        ]
    },
     {
        "type": "Gacha",
        "title": [
            "Summer Festa 2022 Paid Summon + Choosable 5★ Summon Ticket",
            "サマーフェスタ2022★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Stones for a 10x Summon + Summer Festa 2022 Choosable 5★ Summon Ticket + Summer Festa 2022 Voucher"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "First Half",
                "start": "June 28 2022, 17:00",
                "end": "June 30 2022, 23:59"
            },
            {
                "name": "Second Half",
                "start": "July 1 2022, 0:00",
                "end": "July 3 2022, 23:59"
            },
            {
                "name": "Voucher Exchange Period",
                "start": "June 28 2022, 17:00",
                "end": "July 3 2022, 23:59"
            },
            {
                "name": "Ticket Expiration",
                "start": "June 28 2022, 17:00",
                "end": "July 10 2022, 23:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Summer Camp△ Special Missions",
            "さまキャン△期間限定特別ミッション"
        ],
        "image": "match",
        "column": 0,
        "priority": 30,
        "timers": [
            {
                "name": "Period",
                "start": "July 1 2022, 0:00",
                "end": "July 8 2022, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Author Quest \"OutClub and the Roar of Steel\" Half Stamina Campaign",
            "作家クエスト「野クルと鋼鉄の咆哮」スタミナ半減キャンペーン"
        ],
        "image": "match",
        "column": 2,
        "priority": 14,
        "timers": [
            {
                "name": "Period",
                "start": "July 1 2022, 0:00",
                "end": "July 8 2022, 23:59"
            }
        ]
    }
];

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
            "Version 3.2.6 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 40,
        timers: [
            {
                name: "Scheduled Time",
                start: "March 15 2022, 16:00",
                end: "March 15 2022, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "White Day's Big Explosion",
            "ホワイトデー大爆発",
            "White Day 2022 Event"
        ],
        "image": [
            "https://i.imgur.com/BmiPTqw.png",
            "https://i.imgur.com/vlM35PI.png",
            "https://i.imgur.com/ZstcAaN.png",
            "https://i.imgur.com/f7WaFne.png",
            "https://i.imgur.com/lE5TcF4.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "February 28 2022, 17:00",
                "end": "March 15 2022, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "March 4 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "March 2 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Super EX Quest",
                        "time": "March 7 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "March 10 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "March 11 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "March 12 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "March 13 2022, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "February 28 2022, 17:00",
                "end": "March 15 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "February 28 2022, 17:00",
                "end": "March 22 2022, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Valentine and the Love Square",
            "バレンタインと恋の四角関係",
            "Valentine 2022 Event"
        ],
        "image": [
            "https://i.imgur.com/Ps58Ptk.png",
            "https://i.imgur.com/uHp3WsJ.png",
            "https://i.imgur.com/RHzDDOG.png",
            "https://i.imgur.com/uY5zDMj.png",
            "https://i.imgur.com/4V9RRrE.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "February 10 2022, 17:00",
                "end": "March 15 2022, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "February 17 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "February 12 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "February 21 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "February 22 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "February 23 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "February 24 2022, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "February 10 2022, 17:00",
                "end": "March 15 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "February 10 2022, 17:00",
                "end": "March 22 2022, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Fly Fishing Memory",
            "フライフィッシュメモリー",
            "Slow Loop Event"
        ],
        "image": [
            "https://i.imgur.com/aLnZt2V.png",
            "https://i.imgur.com/Ku6gTOm.png",
            "https://i.imgur.com/FHQCNwW.png",
            "https://i.imgur.com/aSsvOKn.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "March 15 2022, 17:00",
                "end": "March 30 2022, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "March 19 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "March 17 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "March 24 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "March 25 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "March 26 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "March 27 2022, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "March 15 2022, 17:00",
                "end": "March 30 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "March 15 2022, 17:00",
                "end": "April 6 2022, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "White Day's Big Explosion Summon",
            "期間限定2022ホワイトデーキャラクターピックアップ召喚",
            "White Day 2022 Event Summon"
        ],
        "image": [
            "https://i.imgur.com/BmiPTqw.png",
            "https://i.imgur.com/vlM35PI.png",
            "https://i.imgur.com/ZstcAaN.png",
            "https://i.imgur.com/f7WaFne.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "February 28 2022, 17:00",
                "end": "March 15 2022, 15:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5★ Sae [White Day], 5★ Enami [White Day]",
                        "time": "February 28 2022, 17:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5★ Tooru [White Day], 5★ Nina [White Day]",
                        "time": "February 28 2022, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Valentine and the Love Square Summon",
            "期間限定2022バレンタインキャラクターピックアップ召喚",
            "Valentine 2022 Event Summon"
        ],
        "image": [
            "https://i.imgur.com/Ps58Ptk.png",
            "https://i.imgur.com/uHp3WsJ.png",
            "https://i.imgur.com/RHzDDOG.png",
            "https://i.imgur.com/uY5zDMj.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "February 10 2022, 17:00",
                "end": "March 15 2022, 15:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5★ Hiro [Valentine], 5★ Eiko [Valentine]",
                        "time": "February 10 2022, 17:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5★ Run [Valentine], 5★ Roko [Valentine]",
                        "time": "February 10 2022, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Fly Fishing Memory Summon",
            "フライフィッシュメモリーピックアップ召喚",
            "Slow Loop Event Summon"
        ],
        "image": [
            "https://i.imgur.com/aLnZt2V.png",
            "https://i.imgur.com/Ku6gTOm.png",
            "https://i.imgur.com/FHQCNwW.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "March 15 2022, 17:00",
                "end": "March 30 2022, 15:59",
                "banners": [
                    {
                        "title": "Kirin Side",
                        "desc": "Featuring 5★ Morino Kirin, 4★ Morino Kirin",
                        "time": "March 15 2022, 17:00"
                    },
                    {
                        "title": "Hiyori Side",
                        "desc": "Featuring 5★ Minagi Hiyori, 4★ Minagi Koharu",
                        "time": "March 15 2022, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Super EX Quest Support Limited-time Summon",
            "超高難易度クエスト応援期間限定ピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/FlqlmC1.png",
            "https://i.imgur.com/SsNybKz.png",
            "https://i.imgur.com/u7d53Is.png",
            "https://i.imgur.com/GF7A1go.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Yoriko [Maid], 5★ Yuuri [Hot Spring], 5★ Koume [Halloween], 5★ [Traveler of the Wasteland] Rin",
                "start": "February 28 2022, 17:00",
                "end": "March 15 2022, 15:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Super EX Quest Support Paid Summon + Choosable 5★ Summon Ticket",
            "超高難易度クエスト応援★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket + Super Ex Quest Support Voucher"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "First Half",
                "start": "February 28 2022, 17:00",
                "end": "March 7 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Second Half",
                "start": "March 8 2022, 0:00",
                "end": "March 15 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Voucher Exchange",
                "start": "February 28 2022, 17:00",
                "end": "March 15 2022, 15:59"
            },
            {
                "name": "Ticket Expiration",
                "start": "February 28 2022, 17:00",
                "end": "March 22 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Mixed Past Limited-time Paid Summon + Choosable 5★ Summon Ticket",
            "期間限定ミックス復刻★5選べるチケット付き！有償限定10回召喚",
            "600 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket + 1 Voucher",
            "Featuring past Hinamatsuri, Maid and Sports Festival characters, 5* Karen [Foreign Magician], 5* [Traveler of the Wasteland] Rin"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "First Half",
                "start": "March 15 2022, 17:00",
                "end": "March 22 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Second Half",
                "start": "March 23 2022, 0:00",
                "end": "March 30 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "March 15 2022, 17:00",
                "end": "April 6 2022, 23:59"
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
                "name": "Summon Period: Featuring 5★ Engi Threepiece, 5★ Maya, 5★ Takeda Yomi, 5★ Onosaka Koharu",
                "start": "March 15 2022, 17:00",
                "end": "March 22 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "March 15 2022, 17:00",
                "end": "March 29 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Skill Update Paid Summon + Choosable 5★ Summon Ticket",
            "スキルアップデート★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Engi Threepiece, 5★ Maya, 5★ Takeda Yomi, 5★ Onosaka Koharu",
                "start": "March 15 2022, 17:00",
                "end": "March 22 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "March 15 2022, 17:00",
                "end": "March 29 2022, 23:59"
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
                "name": "Summon Period: Featuring 5★ Ryou [Swimsuit], 5★ Ryou [New Year], 5★ Kirin [Sports Festival], 5★ Cork [Maid], 4★ Nono [Halloween], 4★ Kotone [Swimsuit]",
                "start": "March 15 2022, 17:00",
                "end": "March 30 2022, 15:59",
                "extraPriority": 4
            }
        ]
    },
    {
        type: "LoginDays",
        title: [
            "Slow Loop participation Login Bonus",
            "スローループ参戦決定記念ログインボーナス",
            "20 Gems on days the anime airs"
        ],
        image: "lamp",
        column: 2,
        priority: 15,
        timers: [
            {
                name: "Episode 2",
                date: "January 14 2022",
                days: 2
            },
            {
                name: "Episode 3",
                date: "January 21 2022",
                days: 2
            },
            {
                name: "Episode 4",
                date: "January 28 2022",
                days: 2
            },
            {
                name: "Episode 5",
                date: "February 4 2022",
                days: 2
            },
            {
                name: "Episode 6",
                date: "February 11 2022",
                days: 2
            },
            {
                name: "Episode 7",
                date: "February 18 2022",
                days: 2
            },
            {
                name: "Episode 8",
                date: "February 25 2022",
                days: 2
            },
            {
                name: "Episode 9",
                date: "March 4 2022",
                days: 2
            },
            {
                name: "Episode 10",
                date: "March 11 2022",
                days: 2
            },
            {
                name: "Episode 11",
                date: "March 18 2022",
                days: 2
            },
            {
                name: "Episode 12",
                date: "March 25 2022",
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
                name: "Part 2 (Chapters 1~5)",
                "start": "January 22 2022, 0:00",
                "end": "January 27 2022, 15:59"
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
            "March Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        "image": "https://i.imgur.com/e6HLnK2.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "March 5 2022, 0:00",
                "end": "March 6 2022, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "March 12 2022, 0:00",
                "end": "March 13 2022, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "March 19 2022, 0:00",
                "end": "March 20 2022, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "March 26 2022, 0:00",
                "end": "March 27 2022, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "March 5 2022, 0:00",
                "end": "April 1 2022, 23:59",
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
                "name": "White Day Starlight Stone & Item Sets",
                "start": "February 28 2022, 17:00",
                "end": "March 15 2022, 15:59"
            },
            {
                "name": "Slow Loop Participation Starlight Stone & Scroll Sets",
                "start": "March 15 2022, 17:00",
                "end": "March 30 2022, 15:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "White Day Login Bonus",
            "ホワイトデーログインボーナス",
            "Log in on 10 days to receive up to 200 Starlight Stones."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "February 28 2022, 17:00",
                "end": "March 15 2022, 23:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Training Support Campaign",
            "育成応援キャンペーン"
        ],
        "image": "leine",
        "column": 0,
        "priority": 31,
        "timers": [
            {
                "name": "Quests",
                "start": "February 19 2022, 0:00",
                "end": "March 15 2022, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "Totteoki Training Quest",
                        "time": "March 4 2022, 0:00",
                        "type": "battle"
                    }
                ]
            },
            {
                "name": "Event Missions",
                "start": "February 19 2022, 0:00",
                "end": "March 15 2022, 23:59"
            },
            {
                "name": "Past Event Call Ticket Missions",
                "start": "February 19 2022, 0:00",
                "end": "February 27 2022, 23:59"
            },
            {
                "name": "Exchange Medal Missions",
                "start": "February 28 2022, 0:00",
                "end": "March 3 2022, 23:59"
            },
            {
                "name": "Totteoki Training Quest Ticket Missions",
                "start": "March 4 2022, 0:00",
                "end": "March 14 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "February 19 2022, 0:00",
                "end": "March 22 2022, 13:59",
                "markers": [
                    {
                        "title": "Totteoki Training Quest Ticket",
                        "time": "March 4 2022, 0:00",
                        "type": "star"
                    }
                ]
            }
        ]
    }
];

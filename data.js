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
                start: "January 14 2022, 16:00",
                end: "January 14 2022, 17:00",
                keepAfterFinished: "30 minutes"
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
                        "title": "Chapters 5~15 & Boss Quest",
                        "time": "January 1 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "EX Quest",
                        "time": "January 4 2022, 17:00",
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
            "SNS Club and the Resurrected Demon Lord",
            "SNS部と復活の魔王",
            "Stella no Mahou Finale Event"
        ],
        "image": [
            "https://i.imgur.com/1WCy3pF.png",
            "https://i.imgur.com/wTzff7B.png",
            "https://i.imgur.com/9bs4Nsc.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "January 14 2022, 17:00",
                "end": "January 27 2022, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "January 18 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "January 16 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "January 21 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "January 22 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "January 23 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "January 24 2022, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "January 14 2022, 17:00",
                "end": "January 27 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "January 14 2022, 17:00",
                "end": "February 3 2022, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "New Year! Training Support Campaign",
            "新春！育成応援キャンペーン",
            "Includes daily missions"
        ],
        "image": [
            "https://i.imgur.com/RhfITA0.png"
        ],
        "column": 0,
        "priority": 31,
        "timers": [
            {
                "name": "Farming, Melee & Totteoki Quests",
                "start": "January 5 2022, 0:00",
                "end": "January 14 2022, 15:59",
                "extraPriority": 3
            },
            {
                "name": "Event Missions",
                "start": "January 5 2022, 0:00",
                "end": "January 14 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "January 5 2022, 0:00",
                "end": "January 21 2022, 13:59",
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
            "SNS Club and the Resurrected Demon Lord Summon",
            "SNS部と復活の魔王ピックアップ召喚",
            "Stella no Mahou Finale Event Summon"
        ],
        "image": [
            "https://i.imgur.com/1WCy3pF.png",
            "https://i.imgur.com/wTzff7B.png",
            "https://i.imgur.com/9bs4Nsc.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "January 14 2022, 17:00",
                "end": "January 27 2022, 15:59",
                "banners": [
                    {
                        "title": "Tamaki Side",
                        "desc": "Featuring 5★ Honda Tamaki, 4★ Honda Tamaki",
                        "time": "January 14 2022, 17:00"
                    },
                    {
                        "title": "Teru Side",
                        "desc": "Featuring 5★ Hyakutake Teru",
                        "time": "January 14 2022, 17:00"
                    },
                    {
                        "title": "Minaha Side",
                        "desc": "Featuring 5★ Iino Minaha, 4★ Iino Minaha",
                        "time": "January 18 2022, 0:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Head Priest & Seven Sages Paid Summon + Choosable 5★ Summon Ticket",
            "筆頭神官＆七賢者限定★5選べるチケット付き！有償限定10回召喚",
            "600 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Archive, 5★ Sugar, 5★ Sesame, 5★ Cardamom, 5★ Salt, 5★ Ginger, 5★ Fennel, 5★ Hakka",
                "start": "January 5 2022, 0:00",
                "end": "January 9 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "January 5 2022, 0:00",
                "end": "January 16 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Stella no Mahou Limited-time Summon",
            "ステラのまほう期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/FMYVJgY.png",
            "https://i.imgur.com/ZdBxiHu.png",
            "https://i.imgur.com/3aTb8rV.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Tamaki [Sports Festival], 5★ Shiina [Valentine], 5★ Nono [Maid], 4★ Tamaki [Christmas], 4★ Yumine [Swimsuit]",
                "start": "January 14 2022, 17:00",
                "end": "January 21 2022, 23:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Stella no Mahou Paid Summon + Choosable 5★ Summon Ticket",
            "ステラのまほう★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Honda Tamaki, 5★ Tamaki [Sports Festival], 5★ Fujikawa Kayo, 5★ Shiina [Valentine], 5★ Murakami Shiina, 5★ Seki Ayame, 5★ Fuda Yumine, 5★ Iketani Nono, 5★ Nono [Maid]",
                "start": "January 14 2022, 17:00",
                "end": "January 21 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "January 14 2022, 17:00",
                "end": "January 28 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Stella no Mahou Limited-time Paid Summon + Choosable 5★ Summon Ticket",
            "ステラのまほう期間限定★5選べるチケット付き！有償限定10回召喚",
            "1,000 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Tamaki [Sports Festival], 5★ Shiina [Valentine], 5★ Nono [Maid]",
                "start": "January 14 2022, 17:00",
                "end": "January 21 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "January 14 2022, 17:00",
                "end": "January 28 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Past Limited-time New Year Step-up Summon",
            "期間限定お正月復刻おまけ付き10回召喚",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring New Year 2018~2021 characters",
                "start": "January 1 2022, 0:00",
                "end": "January 8 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "January 1 2022, 0:00",
                "end": "January 15 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "First Dream Choosable 5★ Summon Ticket",
            "★5選べるチケット付き！初夢有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket + Post-Anniversary Voucher"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "First Half",
                "start": "January 1 2022, 0:00",
                "end": "January 8 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Second Half",
                "start": "January 9 2022, 0:00",
                "end": "January 17 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "January 1 2022, 0:00",
                "end": "February 7 2022, 23:59"
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
                "start": "January 1 2022, 0:00",
                "end": "January 8 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "January 1 2022, 0:00",
                "end": "January 15 2022, 23:59"
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
            "January Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        "image": "https://i.imgur.com/DiSEdXA.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "January 1 2022, 0:00",
                "end": "January 2 2022, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "January 8 2022, 0:00",
                "end": "January 9 2022, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "January 15 2022, 0:00",
                "end": "January 16 2022, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "January 22 2022, 0:00",
                "end": "January 23 2022, 23:59"
            },
            {
                "name": "Weekend 5",
                "start": "January 29 2022, 0:00",
                "end": "January 30 2022, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "January 1 2022, 0:00",
                "end": "February 4 2022, 23:59",
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
                "name": "2022 Lucky Bag Set",
                "start": "January 1 2022, 0:00",
                "end": "January 14 2022, 15:59"
            },
            {
                "name": "Stella no Mahou Finale Gem Set",
                "start": "January 14 2022, 17:00",
                "end": "January 27 2022, 15:59"
            },
            {
                "name": "1500 Days Celebration Gem & Item Sale",
                "start": "January 18 2022, 0:00",
                "end": "January 31 2022, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "4th ANNIVERSARY Post-Birthday Exchange Shop",
            "4th ANNIVERSARY後夜祭交換所",
            "Exchange Vouchers for items"
        ],
        "image": "cork",
        "column": 0,
        "priority": 29,
        "timers": [
            {
                "name": "Voucher Exchange Period",
                "start": "January 1 2022, 0:00",
                "end": "January 31 2022, 23:59"
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
    },
    {
        "type": "Other",
        "title": [
            "1500 Days Celebration Login Bonus",
            "1500日記念ログインボーナス",
            "Log in on 10 days to receive up to 300 Starlight Stones."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "January 18 2022, 0:00",
                "end": "January 31 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "1500 Days Celebration Paid Summon + Choosable 5★ Summon Ticket",
            "リリース1500日記念★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Stones for a 10x Summon + Choosable 5★ Summon Ticket + 4th Anniversary Post-Birthday Voucher"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Period",
                "start": "January 18 2022, 0:00",
                "end": "January 31 2022, 23:59"
            },
            {
                "name": "Ticket Expiration",
                "start": "January 18 2022, 0:00",
                "end": "February 7 2022, 23:59"
            }
        ]
    }
];

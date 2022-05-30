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
                start: "May 31 2022, 16:00",
                end: "May 31 2022, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Blend Call Accident",
            "ブレンドコールアクシデント",
            "Blend-S Finale Event"
        ],
        "image": [
            "https://i.imgur.com/zck0vCg.png",
            "https://i.imgur.com/8SE6jq3.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "May 17 2022, 17:00",
                "end": "May 31 2022, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "May 21 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "May 19 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "May 26 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "May 27 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "May 28 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "May 29 2022, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "May 17 2022, 17:00",
                "end": "May 31 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "May 17 2022, 17:00",
                "end": "June 7 2022, 13:59"
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
        "type": "Gacha",
        "title": [
            "Limited-time Past Bridal Step-up Summon",
            "期間限定ブライダル復刻おまけ付き10回召喚",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Kon [Bridal], 5★ Ruki [Bridal], 5★ Kohane [Bridal], 5★ Sesame [Bridal]",
                "start": "May 31 2022, 17:00",
                "end": "June 7 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "May 31 2022, 17:00",
                "end": "June 14 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Blend Call Accident Summon",
            "ブレンドコールアクシデントピックアップ召喚",
            "Blend-S Finale Event Summon"
        ],
        "image": [
            "https://i.imgur.com/zck0vCg.png",
            "https://i.imgur.com/8SE6jq3.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "May 17 2022, 17:00",
                "end": "May 31 2022, 15:59",
                "banners": [
                    {
                        "title": "Kaho Side",
                        "desc": "Featuring 5★ Hinata Kaho, 4★ Hinata Kaho",
                        "time": "May 17 2022, 17:00"
                    },
                    {
                        "title": "Maika Side",
                        "desc": "Featuring 5★ Sakuranomiya Maika, 4★ Sakuranomiya Maika",
                        "time": "May 17 2022, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Haunted Bridal Summon",
            "ホーンテッド・ブライダル期間限定ピックアップ召喚",
            "Bridal Event 2022 Summon"
        ],
        "image": [
            "https://i.imgur.com/kr9G4qK.png",
            "https://i.imgur.com/NEU30II.png",
            "https://i.imgur.com/9JxGj2P.png",
            "https://i.imgur.com/qfi1Mfp.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "May 31 2022, 17:00",
                "end": "June 14 2022, 15:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5★ Kanata [Bridal], 5★ Clea [Bridal]",
                        "time": "May 31 2022, 17:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5★ Haruka [Bridal], 5★ Hanako [Bridal]",
                        "time": "May 31 2022, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Gakkou Gurashi! 10 Years Limited-time Summon",
            "がっこうぐらし！10周年期間限定ピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/oegtM7y.png",
            "https://i.imgur.com/q7eqoCw.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "May 24 2022, 0:00",
                "end": "May 31 2022, 15:59",
                "banners": [
                    {
                        "title": "Adult Kurumi side",
                        "desc": "Featuring 5★ Kurumi [Grown-up]",
                        "time": "May 24 2022, 0:00"
                    },
                    {
                        "title": "Adult Rii-san side",
                        "desc": "Featuring 5★ Yuuri [Grown-up]",
                        "time": "May 24 2022, 0:00"
                    }
                ],
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Blend-S Limited-time Paid Summon + Choosable 5★ Summon Ticket",
            "ブレンド・S期間限定★5選べるチケット付き！有償限定10回召喚",
            "1,000 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Maika [Swimsuit], 5★ Kaho [Swimsuit], 5★ Kaho [New Year], 5★ Kaho [Christmas], 5★ Mafuyu [Christmas], 5★ Hideri [Doll's Festival]",
                "start": "May 17 2022, 17:00",
                "end": "May 23 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "May 17 2022, 17:00",
                "end": "May 30 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Blend-S Paid Summon + Choosable 5★ Summon Ticket",
            "ブレンド・S★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "May 17 2022, 17:00",
                "end": "May 23 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "May 17 2022, 17:00",
                "end": "May 30 2022, 23:59"
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
                "name": "Second Half",
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
                "name": "Summon Period & Ticket Piece Exchange: Featuring past Bridal characters",
                "start": "May 31 2022, 17:00",
                "end": "June 7 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "May 31 2022, 17:00",
                "end": "June 14 2022, 23:59"
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
                "name": "Blend-S Event Starlight Stone Set",
                "start": "May 17 2022, 17:00",
                "end": "May 31 2022, 15:59"
            },
            {
                "name": "Haunted Bridal Item & Starlight Stone Sets",
                "start": "May 31 2022, 17:00",
                "end": "June 14 2022, 15:59"
            },
            {
                "name": "Past Limited-time Bridal Random 5* Summon Ticket",
                "start": "May 31 2022, 17:00",
                "end": "June 7 2022, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Fall to Darkness Campaign",
            "闇堕ちして来たキャンペーン"
        ],
        "image": "https://i.imgur.com/1j6Khxn.png",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "5★ Yoshida Yuko Gift Period",
                "start": "May 17 2022, 17:00",
                "end": "May 23 2022, 23:59"
            },
            {
                "name": "Special Missions",
                "start": "May 17 2022, 17:00",
                "end": "May 23 2022, 23:59"
            },
            {
                "name": "Demon Lord Weapon Exchange Period",
                "start": "May 17 2022, 17:00",
                "end": "May 30 2022, 23:59"
            },
            {
                "name": "Item & Starlight Stone Bundles",
                "start": "May 17 2022, 17:00",
                "end": "May 23 2022, 23:59"
            },
            {
                "name": "Summon Ticket Expiration",
                "start": "May 17 2022, 17:00",
                "end": "May 30 2022, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Gakkou Gurashi! 10 Years Campaign",
            "がっこうぐらし！10周年キャンペーン"
        ],
        "image": [
            "https://i.imgur.com/oegtM7y.png",
            "https://i.imgur.com/q7eqoCw.png"
        ],
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Special Missions",
                "start": "May 24 2022, 0:00",
                "end": "May 31 2022, 23:59"
            },
            {
                "name": "Exchange Shop Sets",
                "start": "May 24 2022, 0:00",
                "end": "May 31 2022, 23:59"
            },
            {
                "name": "Item & Starlight Stone Bundles",
                "start": "May 24 2022, 0:00",
                "end": "May 31 2022, 15:59"
            },
            {
                "name": "Summon Ticket Expiration",
                "start": "May 24 2022, 0:00",
                "end": "June 7 2022, 23:59"
            }
        ]
    }
];

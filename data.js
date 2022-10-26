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
            "Version 3.2.16 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 40,
        timers: [
            {
                name: "Scheduled Time",
                start: "October 27 2022, 16:00",
                end: "October 27 2022, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Bocchi the Street Live Tour",
            "ぼっち・ざ・路上ライブツアー",
            "Bocchi the Rock! Event"
        ],
        "image": [
            "https://i.imgur.com/CEkHwIZ.png",
            "https://i.imgur.com/zdl48i6.png",
            "https://i.imgur.com/CSeIyOK.png",
            "https://i.imgur.com/VHSOBjc.png",
            "https://i.imgur.com/WGuENWA.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "October 12 2022, 17:00",
                "end": "October 27 2022, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "October 16 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "October 14 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "October 21 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "October 22 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "October 23 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "October 24 2022, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "October 12 2022, 17:00",
                "end": "October 27 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "October 12 2022, 17:00",
                "end": "November 3 2022, 13:59"
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
            "https://i.imgur.com/aoKoBX4.png",
            "https://i.imgur.com/csi5N7W.png",
            "https://i.imgur.com/pZoPBNa.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "October 12 2022, 17:00",
                "end": "October 27 2022, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "October 16 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "October 14 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "October 21 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "October 22 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "October 23 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "October 24 2022, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "October 12 2022, 17:00",
                "end": "October 27 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "October 12 2022, 17:00",
                "end": "November 3 2022, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Bocchi the Street Live Tour Summon",
            "ぼっち・ざ・路上ライブツアーピックアップ召喚",
            "Bocchi the Rock! Event Summon"
        ],
        "image": [
            "https://i.imgur.com/CEkHwIZ.png",
            "https://i.imgur.com/zdl48i6.png",
            "https://i.imgur.com/CSeIyOK.png",
            "https://i.imgur.com/VHSOBjc.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "October 12 2022, 17:00",
                "end": "October 27 2022, 15:59",
                "banners": [
                    {
                        "title": "Hitori Side",
                        "desc": "Featuring 5★ Gotoh Hitori, 4★ Yamada Ryo, 4★ Kita Ikuyo",
                        "time": "October 12 2022, 17:00"
                    },
                    {
                        "title": "Sawako Side",
                        "desc": "Featuring 5★ Yamanaka Sawako",
                        "time": "October 15 2022, 0:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "The Realists' Future Summon",
            "リアリストたちの未来第2部限定ピックアップ召喚",
            "Main Quest Part 2 Extra Story Summon"
        ],
        "image": [
            "https://i.imgur.com/aoKoBX4.png",
            "https://i.imgur.com/csi5N7W.png",
            "https://i.imgur.com/pZoPBNa.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Highpris [Part 2], 5★ Sunstone [Part 2], 5★ Enishida [Part 2]",
                "start": "October 12 2022, 17:00",
                "end": "October 27 2022, 15:59",
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Main Quest Part 2 Special Deluxe Summon",
            "第2部限定スペシャルデラックス召喚",
            "1200 Paid Gems for a 10x 5* Summon + 1x Item Voucher"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring past Main Quest Part 2 characters",
                "start": "October 8 2022, 0:00",
                "end": "October 12 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Summon Period (Encore): Featuring past Main Quest Part 2 characters",
                "start": "October 12 2022, 17:00",
                "end": "October 19 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "October 8 2022, 0:00",
                "end": "October 26 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara MAX Paid Summon + Choosable 5★ Summon Ticket",
            "きららMAX期間限定★5選べるチケット付き！有償限定10回召喚",
            "1,000 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "October 20 2022, 0:00",
                "end": "October 27 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "October 20 2022, 0:00",
                "end": "November 3 2022, 23:59"
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
                "name": "Summon Period: Featuring 5★ Hanako [Bridal], 5★ Hibari [Hot Springs], 5★ Botan [Swimsuit], 5★ Yui [Swimsuit], 5★ Mio [Valentine], 5★ Cork [Maid], 5★ Cork [Tanabata], 4★ Tamaki [Christmas], 4★ Yumine [Swimsuit], 4★ Nono [Halloween], 4★ Eiko [Swimsuit]",
                "start": "October 12 2022, 17:00",
                "end": "October 27 2022, 15:59",
                "info": "5★ Yui [Swimsuit] refers to K-ON's Yui, not Yuyushiki's",
                "extraPriority": 4
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
            "Main Quest Half Stamina Campaign",
            "メインクエストスタミナ半減キャンペーン",
        ],
        image: "match",
        column: 2,
        priority: 14,
        timers: [
            {
                name: "Part 2",
                "start": "October 8 2022, 0:00",
                "end": "October 12 2022, 15:59"
            },
            {
                name: "Part 1 (Chapters 1~Epilogue)",
                "start": "July 12 2022, 17:00",
                "end": "July 27 2022, 15:59"
            },
            {
                "name": "Part 1 (Chapters 1~Epilogue, Normal Mode) and Part 2 (Chapters 1~7)",
                "start": "July 27 2022, 17:00",
                "end": "August 10 2022, 15:59"
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
    },
];

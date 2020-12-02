var alertMessages = [];
var timerData = [
    {
        type: "DailyQuest",
        title: "Daily Quests",
        priority: 10,
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
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "November 25 2020, 16:00",
                end: "November 25 2020, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Summoned to Another World as its Savior?",
            "異世界召喚されたら救世主だった？",
            "Koharu Biyori & Power of Smile Event"
        ],
        "image": [
            "https://i.imgur.com/ce9YZ9h.png",
            "https://i.imgur.com/94eZ9Ua.png",
            "https://i.imgur.com/AHZRnqr.png",
            "https://i.imgur.com/8XtqHaA.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Event",
                "start": "November 11 2020, 17:00",
                "end": "November 25 2020, 15:59",
                "markers": [
                    {
                        "title": "Extra Chapter 1",
                        "time": "November 20 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "November 21 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "November 22 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "November 23 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "November 13 2020, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "EX Quest",
                        "time": "November 18 2020, 17:00",
                        "type": "battle"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Missions",
                "start": "November 11 2020, 17:00",
                "end": "November 25 2020, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "November 11 2020, 17:00",
                "end": "December 2 2020, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "The Forgotten Dream Demons",
            "忘却の夢魔たち",
            "Yumekui Merry Finale Event"
        ],
        "image": [
            "https://i.imgur.com/0RtsIej.png",
            "https://i.imgur.com/gam0KVd.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Event",
                "start": "November 25 2020, 17:00",
                "end": "December 10 2020, 11:59",
                "markers": [
                    {
                        "title": "Extra Chapter 1",
                        "time": "December 4 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "December 5 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "December 6 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "December 7 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "November 27 2020, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "EX Quest",
                        "time": "December 2 2020, 17:00",
                        "type": "battle"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Missions",
                "start": "November 25 2020, 17:00",
                "end": "December 10 2020, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "November 25 2020, 17:00",
                "end": "December 17 2020, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Unite! Seven Sages Meeting",
            "結束せよ！七賢者会議",
            "Hakka Mini-Event"
        ],
        "image": [
            "https://i.imgur.com/q17T0vS.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Event",
                "start": "November 25 2020, 17:00",
                "end": "December 3 2020, 23:59",
                "markers": [
                    {
                        "title": "Extra Chapter 2",
                        "time": "November 26 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "November 27 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "November 28 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Challenge Quest",
                        "time": "November 25 2020, 17:00",
                        "type": "battle"
                    }
                ],
                "extraPriority": 3
            },
            {
                "name": "Missions",
                "start": "November 25 2020, 17:00",
                "end": "December 3 2020, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "November 25 2020, 17:00",
                "end": "December 10 2020, 11:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Many Thanks!! Real Goods Lottery",
            "大感謝！！！リアルグッズ抽選会",
            "Obtain Lottery Tickets for a chance to win real prizes"
        ],
        "image": "match",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Special Missions",
                "start": "December 4 2020, 0:00",
                "end": "December 10 2020, 23:59",
                "extraPriority": 2
            },
            {
                "name": "Event Shop",
                "start": "December 11 2020, 17:00",
                "end": "December 26 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "The Forgotten Dream Demons Summon",
            "忘却の夢魔たちピックアップ召喚",
            "Yumekui Merry Finale Event summon"
        ],
        "image": [
            "https://i.imgur.com/0RtsIej.png",
            "https://i.imgur.com/gam0KVd.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Merry Nightmare, 4* Kounagi Yui",
                "start": "November 25 2020, 17:00",
                "end": "December 10 2020, 11:59",
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Unite! Seven Sages Meeting Summon",
            "結束せよ！七賢者会議ピックアップ召喚",
            "Hakka Mini-Event summon"
        ],
        "image": [
            "https://i.imgur.com/q17T0vS.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Hakka",
                "start": "November 25 2020, 17:00",
                "end": "December 3 2020, 23:59",
                "extraPriority": 5
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Yumekui Merry Choosable 5* Summon Ticket",
            "夢喰いメリー★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                "start": "November 25 2020, 17:00",
                "end": "December 2 2020, 16:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                "start": "November 25 2020, 17:00",
                "end": "December 9 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Seven Sages & Head Priest Limited-time Summon",
            "筆頭神官＆七賢者限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                "start": "November 25 2020, 17:00",
                "end": "December 3 2020, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                "start": "November 25 2020, 17:00",
                "end": "December 10 2020, 11:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Fes. Participants Limited-time Summon",
            "FES.出演キャラクター★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period: Featuring 5★ Kou [Swimsuit], 5★ Tooyama Rin, 5★ Sakuranomiya Maika, 5★ Maika [Swimsuit], 5★ Yoshida Yuuko, 5★ Shamiko [Sports Festival], 5★ Takeda Yomi, 5★ Lamp, 5★ Lamp [Swimsuit], 5★ Lamp [Tanabata], 5★ Clea [Doll's Festival], 5★ Polka, 5★ Cork, 5★ Cork [Maid], 5★ Kanna, 5★ Leine",
                "start": "December 4 2020, 0:00",
                "end": "December 6 2020, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                "start": "December 4 2020, 0:00",
                "end": "December 13 2020, 23:59",
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "2020 Limited-time Step-up Summon Part 2",
            "期間限定2020復刻 おまけ付き10回召喚・第2弾",
            "Up to 4 steps for free, Random 5* Summon Ticket on 7th step"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 2020 Valentine, Tanabata and Swimsuit (First Half) characters ",
                "start": "November 20 2020, 0:00",
                "end": "November 26 2020, 23:59",
                "extraPriority": 5,
                "markers": [
                    {
                        "title": "Free Summon 1",
                        "time": "November 20 2020, 0:00",
                        "type": "star"
                    },
                    {
                        "title": "Free Summon 2",
                        "time": "November 21 2020, 0:00",
                        "type": "star"
                    },
                    {
                        "title": "Free Summon 3",
                        "time": "November 22 2020, 0:00",
                        "type": "star"
                    },
                    {
                        "title": "Free Summon 4",
                        "time": "November 23 2020, 0:00",
                        "type": "star"
                    }
                ]
            },
            {
                name: "Ticket Expiration",
                "start": "November 20 2020, 0:00",
                "end": "December 3 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "2020 Limited-time Step-up Summon Part 3",
            "期間限定2020復刻 おまけ付き10回召喚・第3弾",
            "Up to 4 steps for free, Random 5* Summon Ticket on 7th step"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 2020 Maid, Sports Festival and Halloween characters ",
                "start": "November 27 2020, 0:00",
                "end": "December 3 2020, 23:59",
                "extraPriority": 5,
                "markers": [
                    {
                        "title": "Free Summon 1",
                        "time": "November 27 2020, 0:00",
                        "type": "star"
                    },
                    {
                        "title": "Free Summon 2",
                        "time": "November 28 2020, 0:00",
                        "type": "star"
                    },
                    {
                        "title": "Free Summon 3",
                        "time": "November 29 2020, 0:00",
                        "type": "star"
                    },
                    {
                        "title": "Free Summon 4",
                        "time": "November 30 2020, 0:00",
                        "type": "star"
                    }
                ]
            },
            {
                name: "Ticket Expiration",
                "start": "November 27 2020, 0:00",
                "end": "December 10 2020, 11:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "2017~2018 Limited-time Step-up Summon",
            "期間限定2017・2018復刻 おまけ付き10回召喚",
            "Up to 4 steps for free, Random 5* Summon Ticket on 7th step"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 2017 and 2018 Limited-time characters ",
                "start": "December 4 2020, 0:00",
                "end": "December 10 2020, 23:59",
                "extraPriority": 5,
                "markers": [
                    {
                        "title": "Free Summon 1",
                        "time": "December 4 2020, 0:00",
                        "type": "star"
                    },
                    {
                        "title": "Free Summon 2",
                        "time": "December 5 2020, 0:00",
                        "type": "star"
                    },
                    {
                        "title": "Free Summon 3",
                        "time": "December 6 2020, 0:00",
                        "type": "star"
                    },
                    {
                        "title": "Free Summon 4",
                        "time": "December 7 2020, 0:00",
                        "type": "star"
                    }
                ]
            },
            {
                name: "Ticket Expiration",
                "start": "December 4 2020, 0:00",
                "end": "December 17 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Random 5* Summon Ticket",
            "★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "First Half",
                "start": "December 4 2020, 0:00",
                "end": "December 10 2020, 23:59",
                "extraPriority": 3,
            },
            {
                "name": "Second Half",
                "start": "December 11 2020, 0:00",
                "end": "December 17 2020, 23:59",
                "extraPriority": 3,
            },
            {
                name: "Ticket Expiration",
                "start": "December 4 2020, 0:00",
                "end": "January 7 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Many Thanks!!! Lottery Step-up Summon",
            "大感謝！！！抽選会 おまけ付き10回召喚",
            "333 Lottery Tickets on steps 1~6, Random 5* Summon Ticket on step 7"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period",
                "start": "December 4 2020, 0:00",
                "end": "December 10 2020, 11:59",
                "extraPriority": 3,
            },
            {
                name: "Ticket Expiration",
                "start": "December 4 2020, 0:00",
                "end": "December 17 2020, 23:59",
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Daily Kira-Kira Limited-time Summon",
            "1日1回期間限定きらきら召喚",
            "40 Paid Gems once per day for 3 summons, all 4* or above"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Includes only characters that appear in the current event's story, including limited-time ones",
                "start": "October 21 2020, 0:00",
                "end": "October 27 2020, 15:59",
                "extraPriority": 4
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Pre-3rd Anniversary Login Bonus",
            "3周年直前ログインボーナス",
            "Log in on 14 days for up to 300 Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "November 11 2020, 17:00",
                "end": "December 3 2020, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "3rd Anniversary Fes. Login Bonus",
            "3RD ANNIVERSARY FES.記念ログインボーナス",
            "Log in on 3 days for up to 3 Summon Tickets"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "December 4 2020, 0:00",
                "end": "December 6 2020, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Many Thanks!!! Countdown Login Bonus",
            "大感謝！！！カウントダウンログインボーナス",
            "Log in on 7 days for up to 231 Lottery Tickets"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "December 4 2020, 0:00",
                "end": "December 10 2020, 23:59"
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
            {
                name: "Episode 3",
                date: "October 26 2020",
                days: 2
            },
            {
                name: "Episode 4",
                date: "November 2 2020",
                days: 2
            },
            {
                name: "Episode 5",
                date: "November 9 2020",
                days: 2
            },
            {
                name: "Episode 6",
                date: "November 16 2020",
                days: 2
            },
            {
                name: "Episode 7",
                date: "November 23 2020",
                days: 2
            },
            {
                name: "Episode 8",
                date: "November 30 2020",
                days: 2
            },
            {
                name: "Episode 9",
                date: "December 7 2020",
                days: 2
            },
            {
                name: "Episode 10",
                date: "December 14 2020",
                days: 2
            },
            {
                name: "Episode 11",
                date: "December 21 2020",
                days: 2
            },
            {
                name: "Episode 12",
                date: "December 28 2020",
                days: 2
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Main Quest Part 1 (Normal Mode) Half Stamina Campaign",
            "メインクエスト第1部スタミナ半減キャンペーン",
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "December 4 2020, 0:00",
                "end": "December 26 2020, 16:59"
            }
        ]
    },
    {
        type: "WeekendBoss",
        title: [
            "November Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/Ga6cBj5.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "November 7 2020, 0:00",
                end: "November 8 2020, 23:59"
            },
            {
                name: "Weekend 2",
                start: "November 14 2020, 0:00",
                end: "November 15 2020, 23:59"
            },
            {
                name: "Weekend 3",
                start: "November 21 2020, 0:00",
                end: "November 22 2020, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "November 7 2020, 0:00",
                end: "December 4 2020, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "WeekendBoss",
        title: [
            "December Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/og5AuRU.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "December 5 2020, 0:00",
                end: "December 6 2020, 23:59"
            },
            {
                name: "Weekend 2",
                start: "December 12 2020, 0:00",
                end: "December 13 2020, 23:59"
            },
            {
                name: "Weekend 3",
                start: "December 19 2020, 0:00",
                end: "December 20 2020, 23:59"
            },
            {
                name: "Weekend 4",
                start: "December 26 2020, 0:00",
                end: "December 27 2020, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "December 5 2020, 0:00",
                end: "January 1 2021, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Past Summer Room Decorations",
            "夏限定のルームアイテム"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "July 29 2020, 17:00",
                "end": "August 27 2020, 15:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Pre-3rd Anniversary Sales",
            "3周年直前セール"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Special Gem Sets",
                "start": "November 13 2020, 0:00",
                "end": "December 3 2020, 23:59"
            },
            {
                name: "Special Item Set",
                "start": "November 13 2020, 0:00",
                "end": "December 3 2020, 23:59",
                "markers": [
                    {
                        "title": "Item Set 1",
                        "time": "November 13 2020, 0:00",
                        "type": "star"
                    },
                    {
                        "title": "Item Set 2",
                        "time": "November 20 2020, 0:00",
                        "type": "star"
                    },
                    {
                        "title": "Item Set 3",
                        "time": "November 27 2020, 0:00",
                        "type": "star"
                    }
                ]
            }
        ]
    },
    {
        type: "Other",
        title: [
            "3rd Anniversary Celebration Sales",
            "3周年記念特別セール"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Countdown Week Gem Sets",
                "start": "December 4 2020, 0:00",
                "end": "December 26 2020, 16:59"
            },
            {
                name: "Countdown Week Item Sets",
                "start": "December 4 2020, 0:00",
                "end": "December 26 2020, 16:59"
            },
            {
                name: "2017~2018 Limited-time 5* Summon Ticket",
                "start": "December 4 2020, 0:00",
                "end": "December 10 2020, 23:59"
            },
            {
                name: "3rd Anniversary Gem Set with Special Call Ticket",
                "start": "December 11 2020, 0:00",
                "end": "December 26 2020, 16:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "3rd Anniversary Fes Gem Set Sales",
            "3RD ANNIVERSARY FES.記念星彩石セット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Special Gem Sets",
                "start": "December 4 2020, 0:00",
                "end": "December 6 2020, 23:59"
            }
        ]
    }
];

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
            "Legend of the Halloween Phantom Thief",
            "ハロウィンの怪盗伝説",
            "Halloween 2020 Event"
        ],
        "image": [
            "https://i.imgur.com/eol7bM4.png",
            "https://i.imgur.com/I0TZWxf.png",
            "https://i.imgur.com/Ny15uLF.png",
            "https://i.imgur.com/f2rpryI.png",
            "https://i.imgur.com/HUoAsqA.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Event",
                "start": "October 27 2020, 17:00",
                "end": "November 11 2020, 15:59",
                "markers": [
                    {
                        "title": "Extra Chapter 1",
                        "time": "November 5 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "November 6 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "November 7 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "November 8 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "October 30 2020, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "EX Quest",
                        "time": "November 2 2020, 17:00",
                        "type": "battle"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Missions",
                "start": "October 27 2020, 17:00",
                "end": "November 11 2020, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "October 27 2020, 17:00",
                "end": "November 18 2020, 13:59"
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
        "type": "Gacha",
        "title": [
            "Legend of the Halloween Phantom Thief Summon",
            "ハロウィンの怪盗伝説ピックアップ召喚",
            "Halloween 2020 Event summon"
        ],
        "image": [
            "https://i.imgur.com/eol7bM4.png",
            "https://i.imgur.com/I0TZWxf.png",
            "https://i.imgur.com/Ny15uLF.png",
            "https://i.imgur.com/f2rpryI.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period",
                "start": "October 27 2020, 17:00",
                "end": "November 11 2020, 15:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5* Syaro [Halloween], 5* Noda Miki [Halloween]",
                        "time": "October 27 2020, 17:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5* Miki [Halloween], 5* Sonya [Halloween]",
                        "time": "October 27 2020, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
     {
        "type": "Gacha",
        "title": [
            "Summoned to Another World as its Savior? Summon",
            "異世界召喚されたら救世主だった？ピックアップ召喚",
            "Koharu Biyori & Power of Smile Event summon"
        ],
        "image": [
            "https://i.imgur.com/ce9YZ9h.png",
            "https://i.imgur.com/94eZ9Ua.png",
            "https://i.imgur.com/AHZRnqr.png",
            "https://i.imgur.com/8XtqHaA.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period",
                "start": "November 11 2020, 17:00",
                "end": "November 25 2020, 15:59",
                "banners": [
                    {
                        "title": "Mayu Side",
                        "desc": "Featuring 5* Shinohana Mayu, 4* Kodou Tamaki",
                        "time": "November 11 2020, 17:00"
                    },
                    {
                        "title": "Koharu Side",
                        "desc": "Featuring 5* Onosaka Koharu, 4* Tachibana Nina",
                        "time": "November 11 2020, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Limited-time Past Halloween Step-up Summon",
            "期間限定ハロウィン復刻！おまけ付き10回召喚",
            "Get a Random 5* Summon Ticket on 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                "start": "October 27 2020, 17:00",
                "end": "November 3 2020, 16:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                "start": "October 27 2020, 17:00",
                "end": "November 10 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Poverty Alley-themed Limited-time Step-up Summon",
            "期間限定いちおしテーマ！おまけ付き10回召喚",
            "Get a Random 5* Summon Ticket on 7th step"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Miyako, 5* Miyako [Christmas], 5* Syaro, 5* Nishikawa Youko, 5* Yoshida Yuuko, 5* Shamiko [Sports Festival], 4* Miyako, 4* Syaro",
                "start": "November 3 2020, 17:00",
                "end": "November 11 2020, 15:59",
                "extraPriority": 4
            },
            {
                name: "Ticket Expiration",
                "start": "November 3 2020, 17:00",
                "end": "November 18 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Poverty Alley-themed Limited-time Summon Ticket",
            "期間限定いちおしテーマ！★5確定チケット付き！有償限定10回召喚",
            "240 Paid Gems for a 10x Summon + Random 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Miyako, 5* Miyako [Christmas], 5* Syaro, 5* Nishikawa Youko, 5* Yoshida Yuuko, 5* Shamiko [Sports Festival], 4* Miyako, 4* Syaro",
                "start": "November 3 2020, 17:00",
                "end": "November 11 2020, 15:59",
                "extraPriority": 4
            },
            {
                name: "Ticket Expiration",
                "start": "November 3 2020, 17:00",
                "end": "November 18 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "2020 Limited-time Step-up Summon Part 1",
            "期間限定2020復刻 おまけ付き10回召喚・第1弾",
            "Up to 4 steps for free, Random 5* Summon Ticket on 7th step"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 2020 New Year, Hinamatsuri and Swimsuit (Second Half) characters ",
                "start": "November 13 2020, 0:00",
                "end": "November 19 2020, 23:59",
                "extraPriority": 5,
                "markers": [
                    {
                        "title": "Free Summon 1",
                        "time": "November 13 2020, 0:00",
                        "type": "star"
                    },
                    {
                        "title": "Free Summon 2",
                        "time": "November 14 2020, 0:00",
                        "type": "star"
                    },
                    {
                        "title": "Free Summon 3",
                        "time": "November 15 2020, 0:00",
                        "type": "star"
                    },
                    {
                        "title": "Free Summon 4",
                        "time": "November 16 2020, 0:00",
                        "type": "star"
                    }
                ]
            },
            {
                name: "Ticket Expiration",
                "start": "November 13 2020, 0:00",
                "end": "November 26 2020, 23:59"
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
            "Kirara Fantasia Limited-time Summon",
            "きららファンタジア期間限定ピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/92F2uHA.png",
            "https://i.imgur.com/xoBDxhX.png",
            "https://i.imgur.com/Ng1X8fs.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Cork, 5* Cork [Maid], 5* Cesame",
                "start": "November 11 2020, 17:00",
                "end": "November 18 2020, 16:59",
                "extraPriority": 4
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
            "Halloween Login Bonus",
            "ハロウィンログインボーナス",
            "Log in on 10 days for up to 200 Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "October 27 2020, 17:00",
                "end": "November 11 2020, 23:59"
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
            "Main Quest Chapters 1~8 (Normal Mode) Half Stamina Campaign",
            "メインクエストノーマルモード1～8章スタミナ1/2",
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "September 19 2020, 0:00",
                "end": "September 27 2020, 23:59"
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
            "Halloween Sales",
            "ハロウィンセール"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Special Gem Sets",
                "start": "October 27 2020, 17:00",
                "end": "November 11 2020, 15:59"
            },
            {
                name: "Special Item Sets",
                "start": "October 27 2020, 17:00",
                "end": "November 3 2020, 16:59"
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
    }
];

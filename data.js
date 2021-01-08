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
                start: "December 24 2020, 16:00",
                end: "December 24 2020, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "You are the star of the day! Everyone assemble, it's New Year's Party",
            "本日の主役は君だ！新年会だョ全員集合",
            "New Year 2021 Event"
        ],
        "image": [
            "https://i.imgur.com/f2NatnT.png",
            "https://i.imgur.com/Nlzx9Vb.png",
            "https://i.imgur.com/Bz1Mt8D.png",
            "https://i.imgur.com/08MvKwR.png",
            "https://i.imgur.com/lAOiySf.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Event",
                "start": "December 26 2020, 17:00",
                "end": "January 14 2021, 15:59",
                "markers": [
                    {
                        "title": "Story Part 2 + Boss Quest",
                        "time": "January 1 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "January 7 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "January 8 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "January 9 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "January 10 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "EX Quest",
                        "time": "January 4 2021, 17:00",
                        "type": "battle"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Missions",
                "start": "December 26 2020, 17:00",
                "end": "January 14 2021, 23:59",
                "markers": [
                    {
                        "title": "Mission Set 2",
                        "time": "January 1 2021, 0:00",
                        "type": "mission"
                    }
                ]
            },
            {
                "name": "Event Shop",
                "start": "December 26 2020, 17:00",
                "end": "January 21 2021, 13:59",
                "markers": [
                    {
                        "title": "Part 2",
                        "time": "January 1 2021, 0:00",
                        "type": "star"
                    }
                ]
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "New Year! Training Support Campaign",
            "新春！育成応援キャンペーン"
        ],
        "image": [
            "https://i.imgur.com/M8g8EKu.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Farming & Melee Quest",
                "start": "January 7 2021, 0:00",
                "end": "January 14 2021, 15:59",
                "extraPriority": 3
            },
            {
                "name": "Missions",
                "start": "January 7 2021, 0:00",
                "end": "January 14 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "January 7 2021, 0:00",
                "end": "January 21 2021, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "You are the star of the day! Everyone assemble, it's New Year's Party Summon",
            "本日の主役は君だ！新年会だョ全員集合ピックアップ召喚",
            "New Year 2021 Event summon"
        ],
        "image": [
            "https://i.imgur.com/f2NatnT.png",
            "https://i.imgur.com/Nlzx9Vb.png",
            "https://i.imgur.com/Bz1Mt8D.png",
            "https://i.imgur.com/08MvKwR.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period",
                "start": "December 26 2020, 17:00",
                "end": "January 14 2021, 15:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5* Kou [New Year], 5* Agiri [New Year]",
                        "time": "December 26 2020, 17:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5* Youko [New Year], 5* Archive [New Year]",
                        "time": "January 1 2021, 0:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Head Priest & Seven Sages Summon",
            "筆頭神官＆七賢者限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring Christmas characters from 2017~2019",
                "start": "January 7 2021, 0:00",
                "end": "January 14 2021, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "January 7 2021, 0:00",
                "end": "January 21 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Yuru Camp△ Random 5* Summon Ticket",
            "ゆるキャン△★5確定チケット付き！有償限定10回召喚",
            "240 Paid Gems for a 10x Summon + Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* [Traveler of the Wasteland] Rin, 5* Nadeshiko [Swimsuit], 5* Aoi [Swimsuit], 5* Ena [Tanabata]",
                "start": "January 7 2021, 17:00",
                "end": "January 14 2021, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "January 7 2021, 17:00",
                "end": "January 21 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Past New Year Limited-time Step-up Summon",
            "期間限定お正月復刻おまけ付き10回召喚",
            "Up to 4 Free Summons, Random 5* Summon Ticket on 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring New Year characters from 2017~2020",
                "start": "January 1 2021, 0:00",
                "end": "January 14 2021, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "Free Summon 1",
                        "time": "January 1 2021, 0:00",
                        "type": "star"
                    },
                    {
                        "title": "Free Summon 2",
                        "time": "January 2 2021, 0:00",
                        "type": "star"
                    },
                    {
                        "title": "Free Summon 3",
                        "time": "January 3 2021, 0:00",
                        "type": "star"
                    },
                    {
                        "title": "Free Summon 4",
                        "time": "January 4 2021, 0:00",
                        "type": "star"
                    }
                ]
            },
            {
                "name": "Ticket Expiration",
                "start": "January 18 2021, 0:00",
                "end": "January 21 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "First Dream Choosable 4* & 5* Summon Ticket",
            "★5＆★4選べるチケット付き！初夢有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 4* & 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period",
                "start": "January 1 2021, 0:00",
                "end": "January 14 2021, 15:59",
                "extraPriority": 3,
            },
            {
                name: "Ticket Expiration",
                "start": "January 1 2021, 0:00",
                "end": "January 21 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Illustrations Choosable 5* Summon Ticket",
            "イラストレーションズ★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period: Featuring characters in the Illustrations book cover",
                "start": "January 12 2021, 0:00",
                "end": "January 19 2021, 23:59",
                "extraPriority": 3,
            },
            {
                name: "Ticket Expiration",
                "start": "January 12 2021, 0:00",
                "end": "January 26 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Illustrations Limited-time Choosable 5* Summon Ticket",
            "イラストレーションズ期間限定★5選べるチケット付き！有償限定10回召喚",
            "600 Paid Gems for a 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period: Featuring Limited-time characters in the Illustrations book cover",
                "start": "January 12 2021, 0:00",
                "end": "January 19 2021, 23:59",
                "extraPriority": 3,
            },
            {
                name: "Ticket Expiration",
                "start": "January 12 2021, 0:00",
                "end": "January 26 2021, 23:59"
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
            "Year Out, Year In Login Bonus",
            "ゆく年くる年ログインボーナス",
            "Log in on 10 days for up to 200 Free Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "December 26 2020, 17:00",
                "end": "January 10 2021, 23:59"
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
            "January Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/grVeHF1.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "January 2 2021, 0:00",
                end: "January 3 2021, 23:59"
            },
            {
                name: "Weekend 2",
                start: "January 9 2021, 0:00",
                end: "January 10 2021, 23:59"
            },
            {
                name: "Weekend 3",
                start: "January 16 2021, 0:00",
                end: "January 17 2021, 23:59"
            },
            {
                name: "Weekend 4",
                start: "January 23 2021, 0:00",
                end: "January 24 2021, 23:59"
            },
            {
                name: "Weekend 5",
                start: "January 30 2021, 0:00",
                end: "January 31 2021, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "January 2 2021, 0:00",
                end: "February 5 2021, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Past New Year Room Decorations",
            "お正月限定ルームアイテム再登場"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "January 1 2021, 0:00",
                "end": "January 14 2021, 15:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "New year Sales",
            "お正月特別セール"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "New Year Lucky Item Bag",
                "start": "January 1 2021, 0:00",
                "end": "January 14 2021, 15:59"
            },
            {
                name: "Gems and Item Sets",
                "start": "January 1 2021, 0:00",
                "end": "January 14 2021, 15:59"
            },
            {
                name: "Gem Set (New Year Day)",
                "start": "January 1 2021, 0:00",
                "end": "January 1 2021, 23:59",
                extraPriority: 3
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Illustrations Book Celebration Sales",
            "イラスト集発売記念お得な星彩石セット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Gem Sets",
                "start": "January 12 2021, 0:00",
                "end": "January 19 2021, 23:59"
            }
        ]
    }
];

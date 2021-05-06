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
            "Version 3.1.0 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 40,
        timers: [
            {
                name: "Scheduled Time",
                start: "April 27 2021, 12:00",
                end: "April 27 2021, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "We Wanna Play Baseball Too!",
            "私たちだって野球したい！",
            "Yoshino Event"
        ],
        "image": [
            "https://i.imgur.com/wCkUtuq.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "April 14 2021, 17:00",
                "end": "April 27 2021, 11:59",
                "markers": [
                    {
                        "title": "Extra Chapter 1",
                        "time": "April 22 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "April 23 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "April 24 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "April 25 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "April 16 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "EX Quest",
                        "time": "April 21 2021, 17:00",
                        "type": "battle"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Missions",
                "start": "April 14 2021, 17:00",
                "end": "April 27 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "April 14 2021, 17:00",
                "end": "May 4 2021, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "No Laughing in the Maid Manor!",
            "メイド館では笑えない！",
            "Maid 2021 Event"
        ],
        "image": [
            "https://i.imgur.com/NjKzQaN.png",
            "https://i.imgur.com/5UpNoBs.png",
            "https://i.imgur.com/XVjhDho.png",
            "https://i.imgur.com/pLSTVc3.png",
            "https://i.imgur.com/g8JoM7F.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "April 27 2021, 17:00",
                "end": "May 14 2021, 15:59",
                "markers": [
                    {
                        "title": "Extra Chapter 1",
                        "time": "May 5 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "May 6 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "May 7 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "May 8 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "April 29 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "EX Quest",
                        "time": "May 1 2021, 17:00",
                        "type": "battle"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Missions",
                "start": "April 27 2021, 17:00",
                "end": "May 14 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "April 27 2021, 17:00",
                "end": "May 21 2021, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "No Laughing in the Maid Manor! Summon",
            "メイド館では笑えない！ピックアップ召喚",
            "Maid 2021 Event summon"
        ],
        "image": [
            "https://i.imgur.com/NjKzQaN.png",
            "https://i.imgur.com/5UpNoBs.png",
            "https://i.imgur.com/XVjhDho.png",
            "https://i.imgur.com/pLSTVc3.png",
            "https://i.imgur.com/g8JoM7F.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "April 27 2021, 17:00",
                "end": "May 14 2021, 15:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5* Nishiyama [Maid], 5* Ginger [Maid]",
                        "time": "April 27 2021, 17:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5* Yoriko [Maid], 5* Nono [Maid]",
                        "time": "April 27 2021, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Past Maid Limited-Time Step-up Summon",
            "期間限定メイド復刻おまけ付き10回召喚",
            "Random 5* Summon Ticket on 7th step"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5* Yutaka [Maid], 5* Hifumi [Maid], 5* Hizume [Maid], 5* Cork [Maid]",
                "start": "April 30 2021, 0:00",
                "end": "May 4 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "April 30 2021, 0:00",
                "end": "May 11 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara MAX 200th Edition Limited-Time Step-up Summon",
            "きららMAX200号記念期間限定おまけ付き10回召喚",
            "Random 5* Summon Ticket on 7th step"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring Limited-time characters from Kirara MAX",
                "start": "April 19 2021, 0:00",
                "end": "April 25 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "April 19 2021, 0:00",
                "end": "May 2 2021, 23:59",
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara MAX 200th Edition Limited-Time Summon Ticket",
            "きららMAX200号記念期間限定★5選べるチケット付き！有償限定10回召喚",
            "600 Paid Gems for 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring Limited-time characters from Kirara MAX",
                "start": "April 19 2021, 0:00",
                "end": "April 25 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "April 19 2021, 0:00",
                "end": "May 2 2021, 23:59",
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "1200 Days Celebration Choosable 5* Summon Ticket",
            "リリース1200日記念★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "March 24 2021, 0:00",
                "end": "April 6 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "March 24 2021, 0:00",
                "end": "April 13 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Golden Week Limited-time Choosable 5* Summon Ticket",
            "ゴールデンウィーク期間限定★5選べるチケット付き！有償限定10回召喚",
            "600 Paid Gems for a 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "April 29 2021, 0:00",
                "end": "April 29 2021, 23:59",
                "extraPriority": 15,
            },
            {
                "name": "Ticket Expiration",
                "start": "April 29 2021, 0:00",
                "end": "May 6 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Golden Week Choosable 5* Summon Ticket",
            "ゴールデンウィーク★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: First Half",
                "start": "April 29 2021, 0:00",
                "end": "May 4 2021, 23:59",
                "extraPriority": 3,
            },
            {
                "name": "Summon Period: Second Half",
                "start": "May 5 2021, 0:00",
                "end": "May 10 2021, 23:59",
                "extraPriority": 3,
            },
            {
                "name": "Ticket Expiration",
                "start": "April 29 2021, 0:00",
                "end": "May 17 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Head Priest & Seven Sages Random Summon Ticket",
            "筆頭神官＆七賢者限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "April 27 2021, 0:00",
                "end": "May 4 2021, 23:59",
                "extraPriority": 3,
            },
            {
                "name": "Ticket Expiration",
                "start": "April 27 2021, 0:00",
                "end": "May 11 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Lamp's Birthday Cross Chara Limited-time Summon",
            "ランプお誕生日記念クロスキャラ限定復刻ピックアップ召喚"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5* Lamp [Cross Chara]",
                "start": "May 5 2021, 0:00",
                "end": "May 7 2021, 23:59",
                "extraPriority": 4,
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Lamp's Birthday Celebration 5* Summon Ticket",
            "ランプお誕生日記念★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Lamp [Swimsuit], 5★ Lamp [Tanabata], 5★ Lamp [Cross Chara], 5★ Clea [Doll's Festival], 5★ Cork [Maid], 5★ Archive [New Year], 5★ Sugar [Valentine], 5★ Salt [White Day]",
                "start": "May 5 2021, 0:00",
                "end": "May 7 2021, 23:59",
                "extraPriority": 3,
            },
            {
                "name": "Ticket Expiration",
                "start": "May 5 2021, 0:00",
                "end": "May 14 2021, 23:59"
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
                "name": "Part 1: Featuring 5* Shiina [Valentine], 5* Sonya [Halloween], 5* Rin [Traveler of the Wasteland], 5* Rin [White Day], 5* Archive, 5* Archive [New Year]",
                "start": "May 8 2021, 0:00",
                "end": "May 14 2021, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Part 2: Featuring 5* Yuzuko [Swimsuit], 5* Yukari [Swimsuit], 5* Tamaki [Sports Festival], 5* Youko [New Year], 5* Futaba [Swimsuit], 4* Tamaki [Christmas]",
                "start": "May 8 2021, 0:00",
                "end": "May 14 2021, 15:59",
                "extraPriority": 4
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Golden Week Login Bonus",
            "ゴールデンウィークログインボーナス",
            "Log in on 10 days for up to 200 Free Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "April 29 2021, 0:00",
                "end": "May 14 2021, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Lamp's Birthday Login Bonus",
            "ランプお誕生日記念ログインボーナス",
            "Log in on 2 days for up to 3 Summon Tickets"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "May 5 2021, 0:00",
                "end": "May 7 2021, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "1200 Days Celebration Login Bonus",
            "1200日記念ログインボーナス",
            "Log in on 10 days for up to 300 Free Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "March 24 2021, 0:00",
                "end": "April 6 2021, 23:59"
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
            "Main Quest & Author Quest Half Stamina Campaign",
            "メインクエスト＆作家クエストスタミナ半減キャンペーン",
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "April 29 2021, 0:00",
                "end": "May 10 2021, 23:59",
                "markers": [
                    {
                        "title": "Main Quest Part 2",
                        "time": "April 29 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Main Quest Part 1 & Author Quests",
                        "time": "May 5 2021, 0:00",
                        "type": "story"
                    }
                ]
            }
        ]
    },
    {
        type: "WeekendBoss",
        title: [
            "April Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/EcVglFg.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "April 3 2021, 0:00",
                end: "April 4 2021, 23:59"
            },
            {
                name: "Weekend 2",
                start: "April 10 2021, 0:00",
                end: "April 11 2021, 23:59"
            },
            {
                name: "Weekend 3",
                start: "April 17 2021, 0:00",
                end: "April 18 2021, 23:59"
            },
            {
                name: "Weekend 4",
                start: "April 24 2021, 0:00",
                end: "April 25 2021, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "April 3 2021, 0:00",
                end: "April 30 2021, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "WeekendBoss",
        title: [
            "May Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/c4ktfLx.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "May 1 2021, 0:00",
                end: "May 2 2021, 23:59"
            },
            {
                name: "Weekend 2",
                start: "May 8 2021, 0:00",
                end: "May 9 2021, 23:59"
            },
            {
                name: "Weekend 3",
                start: "May 15 2021, 0:00",
                end: "May 16 2021, 23:59"
            },
            {
                name: "Weekend 4",
                start: "May 22 2021, 0:00",
                end: "May 23 2021, 23:59"
            },
            {
                name: "Weekend 5",
                start: "May 29 2021, 0:00",
                end: "May 30 2021, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "May 1 2021, 0:00",
                end: "June 4 2021, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Past Hinamatsuri Room Decorations",
            "ひな祭り限定ルームアイテム再登場"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "February 26 2021, 17:00",
                "end": "March 5 2021, 16:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Golden Week Special Sale",
            "ゴールデンウィークセット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Gem Sets",
                "start": "April 29 2021, 0:00",
                "end": "May 10 2021, 23:59",
                "markers": [
                    {
                        "title": "Bonus Set 2",
                        "time": "May 5 2021, 0:00",
                        "type": "star"
                    }
                ]
            },
            {
                name: "Gem Sets + Maid Bonus",
                "start": "April 27 2021, 17:00",
                "end": "May 14 2021, 15:59"
            },
            {
                name: "Item Sets 1",
                "start": "April 29 2021, 0:00",
                "end": "May 4 2021, 23:59"
            },
            {
                name: "Item Sets 2",
                "start": "April 29 2021, 0:00",
                "end": "May 10 2021, 23:59"
            },
            {
                name: "Extra Call Ticket",
                "start": "April 29 2021, 0:00",
                "end": "April 29 2021, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Lamp's Birthday Special Sale",
            "ランプお誕生日記念セール"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Gem Sets",
                "start": "May 5 2021, 0:00",
                "end": "May 7 2021, 23:59"
            }
        ]
    }
];

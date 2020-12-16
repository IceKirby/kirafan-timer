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
            "Summon Renovation",
            "Version 3.0.0 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "December 10 2020, 12:00",
                end: "December 10 2020, 17:00",
                keepAfterFinished: "30 minutes"
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
            "Kuromon and the Giant Christmas Tree",
            "クロモンと巨大なクリスマスツリー",
            "Christmas 2020 Event"
        ],
        "image": [
            "https://i.imgur.com/vu2qnyP.png",
            "https://i.imgur.com/7xooXMs.png",
            "https://i.imgur.com/RGmIBoS.png",
            "https://i.imgur.com/QehelsI.png",
            "https://i.imgur.com/GW3clMu.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Event",
                "start": "December 11 2020, 12:00",
                "end": "December 26 2020, 16:59",
                "markers": [
                    {
                        "title": "Extra Chapter 1",
                        "time": "December 21 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "December 22 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "December 23 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "December 24 2020, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "December 13 2020, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "EX Quest",
                        "time": "December 16 2020, 17:00",
                        "type": "battle"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Missions",
                "start": "December 11 2020, 12:00",
                "end": "December 26 2020, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "December 11 2020, 12:00",
                "end": "January 2 2021, 13:59"
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
        "column": 0,
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
        "type": "Mission",
        "title": [
            "Many Thanks!! Birthday Special Missions",
            "大感謝！！！バースデー特別ミッション",
            "Includes Daily Missions"
        ],
        "image": "match",
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Special Missions",
                "start": "December 11 2020, 0:00",
                "end": "December 26 2020, 23:59",
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kuromon and the Giant Christmas Tree Summon",
            "クロモンと巨大なクリスマスツリーピックアップ召喚",
            "Christmas 2020 Event summon"
        ],
        "image": [
            "https://i.imgur.com/vu2qnyP.png",
            "https://i.imgur.com/7xooXMs.png",
            "https://i.imgur.com/RGmIBoS.png",
            "https://i.imgur.com/QehelsI.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period",
                "start": "December 11 2020, 0:00",
                "end": "December 26 2020, 16:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5* Kurumi [Christmas], 5* Chiya [Christmas]",
                        "time": "December 11 2020, 0:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5* Aya [Christmas], 5* Mafuyu [Christmas]",
                        "time": "December 15 2020, 0:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "3rd Anniversary Cross Chara Summon",
            "3周年記念きららファンタジアクロスキャラ限定ピックアップ召喚",
            "Cross Character Kirara & Lamp summon"
        ],
        "image": [
            "https://i.imgur.com/qZ9cRi1.png",
            "https://i.imgur.com/mVVLoKW.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period",
                "start": "December 11 2020, 0:00",
                "end": "December 17 2020, 23:59",
                "banners": [
                    {
                        "title": "Kirara Side",
                        "desc": "Featuring 5* Kirara [Cross Chara]",
                        "time": "December 11 2020, 0:00"
                    },
                    {
                        "title": "Lamp Side",
                        "desc": "Featuring 5* Lamp [Cross Chara]",
                        "time": "December 11 2020, 0:00"
                    }
                ],
                "extraPriority": 5
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara Fantasia Severed Bonds Limited Summon",
            "きららファンタジア断ち切られし絆第2部限定ピックアップ召喚",
            "Main Quest Part 2 Summon"
        ],
        "image": [
            "https://i.imgur.com/Sx6OnNj.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Lilith [Part 2]",
                "start": "December 18 2020, 0:00",
                "end": "December 26 2020, 16:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Machikado Mazoku Limited-time 5* Summon Ticket",
            "まちカドまぞく期間限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Shamiko [Sports Festival], 5* Momo [Christmas], 5* Mikan [Swimsuit]",
                "start": "December 18 2020, 0:00",
                "end": "December 26 2020, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "December 18 2020, 0:00",
                "end": "January 2 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara [Manga Ver.] Summon",
            "きららファンタジア期間限定復刻ピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/GlCumbd.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Kirara [Manga Ver.]",
                "start": "December 11 2020, 0:00",
                "end": "December 17 2020, 23:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Choosable Limited-time 5* Summon Ticket",
            "期間限定★5選べるチケット付き！有償限定10回召喚",
            "600 Paid Gems for a 10x Summon + Choosable Limited-time 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                "start": "December 11 2020, 0:00",
                "end": "December 11 2020, 23:59",
                extraPriority: 9
            },
            {
                name: "Ticket Expiration",
                "start": "December 11 2020, 0:00",
                "end": "December 18 2020, 23:59"
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
            "2019 Limited-time Step-up Summon",
            "期間限定2019復刻 おまけ付き10回召喚",
            "Up to 4 steps for free, Random 5* Summon Ticket on 7th step"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 2019 Limited-time characters (except Kirara [Manga ver.])",
                "start": "December 11 2020, 0:00",
                "end": "December 17 2020, 23:59",
                "extraPriority": 5,
                "markers": [
                    {
                        "title": "Free Summon 1",
                        "time": "December 11 2020, 0:00",
                        "type": "star"
                    },
                    {
                        "title": "Free Summon 2",
                        "time": "December 12 2020, 0:00",
                        "type": "star"
                    },
                    {
                        "title": "Free Summon 3",
                        "time": "December 13 2020, 0:00",
                        "type": "star"
                    },
                    {
                        "title": "Free Summon 4",
                        "time": "December 14 2020, 0:00",
                        "type": "star"
                    }
                ]
            },
            {
                name: "Ticket Expiration",
                "start": "December 11 2020, 0:00",
                "end": "December 24 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Choosable 5* Summon Ticket",
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
            "1100 Days Celebration Choosable 5* Summon Ticket",
            "リリース1100日記念★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period",
                "start": "December 18 2020, 0:00",
                "end": "December 31 2020, 23:59",
                "extraPriority": 3,
            },
            {
                name: "Ticket Expiration",
                "start": "December 18 2020, 0:00",
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
            "Past Christmas Limited-time Step-up Summon",
            "期間限定クリスマス復刻おまけ付き10回召喚",
            "Random 5* Summon Ticket on step 7"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period: Featuring Christmas characters from 2017, 2018 and 2019",
                "start": "December 18 2020, 0:00",
                "end": "December 24 2020, 11:59",
                "extraPriority": 3,
            },
            {
                name: "Ticket Expiration",
                "start": "December 18 2020, 0:00",
                "end": "December 31 2020, 23:59",
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
            "Many Thanks!!! Special Login Bonus",
            "大感謝！！！スペシャルログインボーナス",
            "Log in on 14 days for up to 400 Free Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "December 11 2020, 0:00",
                "end": "December 26 2020, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Christmas Login Bonus",
            "クリスマスログインボーナス",
            "Log in on Christmas for 1 Summon Ticket"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "December 25 2020, 0:00",
                "end": "December 25 2020, 23:59",
                "extraPriority": 6
            }
        ]
    },
    {
        type: "Other",
        title: [
            "1100 Days Celebration Login Bonus",
            "1100日記念ログインボーナス",
            "Log in on 10 days for up to 300 Free Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "December 18 2020, 0:00",
                "end": "December 31 2020, 23:59"
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
            "Limited Past Christmas Room Decorations",
            "クリスマス限定ルームアイテム再登場"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "December 11 2020, 0:00",
                "end": "December 26 2020, 16:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Christmas Item Shop Sale",
            "クリスマス限定！アイテムショップに期間限定アイテム！"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Special Item Set",
                "start": "December 18 2020, 0:00",
                "end": "December 24 2020, 23:59"
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
            },
            {
                name: "Extra Call Ticket",
                "start": "December 11 2020, 0:00",
                "end": "December 11 2020, 23:59",
                "extraPriority": 5
            },
            {
                name: "Limited-time 2019 5* Summon Ticket",
                "start": "December 11 2020, 0:00",
                "end": "December 17 2020, 23:59"
            },
            {
                name: "Keyholder Introduction Set",
                "start": "December 11 2020, 0:00",
                "end": "December 26 2020, 16:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "1100 Days Celebration Sales",
            "1100日記念特別セール"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Gems and Item Sets",
                "start": "December 18 2020, 0:00",
                "end": "December 31 2020, 23:59"
            }
        ]
    }
];

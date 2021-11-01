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
                start: "October 27 2021, 16:00",
                end: "October 27 2021, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "I'll Keep Walking for You",
            "歩き続ける君のために",
            "Gakkou Gurashi! Otayori Finale Event"
        ],
        "image": [
            "https://i.imgur.com/1DWZUHQ.png",
            "https://i.imgur.com/ncIc2zo.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "October 13 2021, 17:00",
                "end": "October 27 2021, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "October 19 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "October 15 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "October 22 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "October 23 2021, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "October 13 2021, 17:00",
                "end": "October 27 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "October 13 2021, 17:00",
                "end": "November 3 2021, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Halloween's Witch Castle",
            "ハロウィン魔女魔城",
            "Halloween 2021 Event"
        ],
        "image": [
            "https://i.imgur.com/42KMULm.png",
            "https://i.imgur.com/fFx9Zda.png",
            "https://i.imgur.com/j6ZKoot.png",
            "https://i.imgur.com/Ya314qo.png",
            "https://i.imgur.com/tr5Ijub.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "October 27 2021, 17:00",
                "end": "November 11 2021, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "November 1 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "October 29 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "November 5 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "November 6 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "November 7 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "November 8 2021, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "October 27 2021, 17:00",
                "end": "November 11 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "October 27 2021, 17:00",
                "end": "November 18 2021, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Road to Super Difficulty ~Orba Side~",
            "超難関への道～オルバ編～",
            "Orba Mini-Event"
        ],
        "image": [
            "https://i.imgur.com/ECP1loG.png"
        ],
        "column": 0,
        "priority": 31,
        "timers": [
            {
                "name": "Main Event, Event Missions",
                "start": "October 16 2021, 0:00",
                "end": "November 4 2021, 23:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "Farming Quest Part 2, EX Quest",
                        "time": "October 21 2021, 0:00",
                        "type": "battle"
                    }
                ]
            },
            {
                "name": "Event Shop",
                "start": "October 16 2021, 0:00",
                "end": "November 11 2021, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Halloween's Witch Castle Summon",
            "期間限定2021ハロウィンキャラクターピックアップ召喚",
            "Halloween 2021 Event Summon"
        ],
        "image": [
            "https://i.imgur.com/42KMULm.png",
            "https://i.imgur.com/fFx9Zda.png",
            "https://i.imgur.com/j6ZKoot.png",
            "https://i.imgur.com/Ya314qo.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "October 27 2021, 17:00",
                "end": "November 11 2021, 15:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5★ Koume [Halloween], 5★ Kuro [Halloween]",
                        "time": "October 27 2021, 17:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5★ Yuzuko [Halloween], 5★ Hana [Halloween]",
                        "time": "October 27 2021, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara Fantasia Manga Version LimitedSummon",
            "きららファンタジアマンガ版限定ピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/vMXI8dm.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Clea [Manga ver.]",
                "start": "November 1 2021, 0:00",
                "end": "November 9 2021, 23:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "GochiUsa Exhibit Paid Summon",
            "ごちうさ展記念期間限定★5確定チケット付き！有償限定10回召喚・東京編",
            "700 Paid Gems for 10x Summon + 2x Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Cocoa [Christmas], Cocoa [Swimsuit], Chino [Swimsuit], Rize [Halloween], Chiya [Christmas], Syaro [Halloween], Syaro [Swimsuit]",
                "start": "October 29 2021, 0:00",
                "end": "November 7 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "October 29 2021, 0:00",
                "end": "November 14 2021, 23:59"
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
                "name": "Summon Period: Featuring 5★ Yui [Swimsuit], 5★ Yukari [Swimsuit], 5★ Yuuko [Christmas], 5★ Yuuko [Swimsuit], 5★ Miki [Halloween], 5★ Hifumi [Christmas], 5★ Hifumi [Maid], 5★ Momiji [Valentine], 5★ Chiya [Christmas], 5★ Sonya [Halloween], 5★ Kotone [Valentine], 5★ Eiko [Sports Festival], 5★ Claire [Halloween], 5★ Rize [Halloween], 5★ Noda Miki [Halloween], 4★ Momiji [New Year], 4★ Tsubame [Valentine], 4★ Nono [Halloween], 4★ Kotone [Swimsuit], 4★ Eiko [Swimsuit]",
                "start": "October 28 2021, 0:00",
                "end": "November 2 2021, 23:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Limited-time Alchemist Step-up Summon + Paid Summon",
            "2つの召喚を同時開催！アルケミストのキャラクターを仲間にしよう！",
            "240 Paid Gems for a 10x Summon + Random 5★ Summon Ticket",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Matsumoto Yoriko, 5★ Tooru [Christmas], 5★ Isami [New Year], 5★ Fujikawa Kayo, 5★ Omi [New Year], 5★ Amano Miu, 5★ Sengoku Kamuri, 5★ Cocoa [Swimsuit]",
                "start": "October 21 2021, 0:00",
                "end": "October 27 2021, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "October 21 2021, 0:00",
                "end": "November 3 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Past Limited-time Paid Summon + Choosable 5★ Summon Ticket",
            "期間限定復刻★5選べるチケット付き！有償限定10回召喚",
            "1,000 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "October 21 2021, 0:00",
                "end": "October 27 2021, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "October 21 2021, 0:00",
                "end": "November 3 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara Exhibition in Nagoya Paid Summon + Random 5★ Summon Ticket",
            "きらら展in名古屋記念期間限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "November 3 2021, 0:00",
                "end": "November 9 2021, 23:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "",
                        "time": "November 3 2021, 0:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "",
                        "time": "November 3 2021, 0:00"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "November 3 2021, 0:00",
                "end": "November 16 2021, 23:59"
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
            "Main Quest Half Stamina Campaign",
            "メインクエストスタミナ半減キャンペーン",
        ],
        image: "match",
        column: 2,
        priority: 14,
        timers: [
            {
                name: "Part 2 (Chapters 1~3)",
                "start": "September 18 2021, 0:00",
                "end": "September 29 2021, 15:59"
            },
            {
                name: "Part 1 (Chapters 1~Prologue, Normal Mode)",
                "start": "September 2 2021, 17:00",
                "end": "September 14 2021, 15:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Summer-themed Room Decoration Items",
            "夏限定ルームアイテム再登場"
        ],
        "image": "kanna",
        "column": 2,
        "priority": 10,
        "timers": [
            {
                "name": "Period",
                "start": "July 21 2021, 17:00",
                "end": "August 20 2021, 11:59"
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
        "image": "https://i.imgur.com/wpjQvC8.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "October 2 2021, 0:00",
                "end": "October 3 2021, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "October 9 2021, 0:00",
                "end": "October 10 2021, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "October 16 2021, 0:00",
                "end": "October 17 2021, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "October 23 2021, 0:00",
                "end": "October 24 2021, 23:59"
            },
            {
                "name": "Weekend 5",
                "start": "October 30 2021, 0:00",
                "end": "October 31 2021, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "October 2 2021, 0:00",
                "end": "November 5 2021, 23:59",
                "keepAfterFinished": "2 hours",
                "type": "normal"
            }
        ]
    },
    {
        "type": "WeekendBoss",
        "title": [
            "November Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        "image": "https://i.imgur.com/Q85rPpa.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "November 6 2021, 0:00",
                "end": "November 7 2021, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "November 13 2021, 0:00",
                "end": "November 14 2021, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "November 20 2021, 0:00",
                "end": "November 21 2021, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "November 27 2021, 0:00",
                "end": "November 28 2021, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "November 6 2021, 0:00",
                "end": "December 3 2021, 23:59",
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
                "name": "Super EX Item & Gem Sets",
                "start": "October 16 2021, 0:00",
                "end": "November 4 2021, 23:59"
            },
            {
                "name": "Halloween Special Item Bundle",
                "start": "November 10 2021, 0:00",
                "end": "November 17 2021, 23:59"
            },
            {
                "name": "Halloween Special Starlight Stone Bundle",
                "start": "October 27 2021, 17:00",
                "end": "November 11 2021, 15:59"
            },
            {
                "name": "New Halloween Summon Ticket Expiration",
                "start": "October 27 2021, 17:00",
                "end": "November 18 2021, 23:59"
            },
            {
                "name": "GochiUsa Exhibit Item Bundles",
                "start": "October 29 2021, 0:00",
                "end": "November 7 2021, 23:59"
            },
            {
                "name": "Manga 3rd Volume Starlight Stone Bundle",
                "start": "November 1 2021, 0:00",
                "end": "November 9 2021, 23:59"
            },
            {
                "name": "Kirara Exhibition in Nagoya Starlight Stone Bundle",
                "start": "November 3 2021, 0:00",
                "end": "November 9 2021, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Halloween Login Bonus",
            "ハロウィンログインボーナス",
            "Log in on 10 days to receive up to 200 Starlight Stones."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "October 27 2021, 17:00",
                "end": "November 11 2021, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Halloween-themed BGM",
            "音楽もハロウィン仕様に！BGM変更"
        ],
        "image": "leine",
        "column": 2,
        "priority": 10,
        "timers": [
            {
                "name": "Period",
                "start": "October 27 2021, 17:00",
                "end": "November 11 2021, 15:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "3rd Manga Volume Login Bonus",
            "コミカライズ第3巻発売記念ログインボーナス",
            "Log in on each day to receive various items."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "November 1 2021, 0:00",
                "end": "November 9 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Daily KiraKira Summon",
            "コミカライズ第3巻発売記念1日1回期間限定きらきら召喚",
            "40 Paid Stones for a 3x Summon, all 4★ or above"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Period",
                "start": "November 1 2021, 0:00",
                "end": "November 9 2021, 23:59"
            }
        ]
    }
];

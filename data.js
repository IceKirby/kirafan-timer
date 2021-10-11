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
                start: "September 29 2021, 16:00",
                end: "September 29 2021, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "NEW GAME Now in Production",
            "現在NEW GAME制作中",
            "NEW GAME! Finale Event"
        ],
        "image": [
            "https://i.imgur.com/h7oCPoy.png",
            "https://i.imgur.com/ZcIxD33.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "September 29 2021, 17:00",
                "end": "October 13 2021, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "October 5 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "October 1 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "October 8 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "October 9 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "October 10 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "October 11 2021, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "September 29 2021, 17:00",
                "end": "October 13 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "September 29 2021, 17:00",
                "end": "October 20 2021, 13:59"
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
        "type": "Gacha",
        "title": [
            "NEW GAME Now in Production Summon",
            "現在NEW GAME制作中ピックアップ召喚",
            "NEW GAME! Finale Event Summon"
        ],
        "image": [
            "https://i.imgur.com/h7oCPoy.png",
            "https://i.imgur.com/ZcIxD33.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "September 29 2021, 17:00",
                "end": "October 13 2021, 15:59",
                "banners": [
                    {
                        "title": "Kou Side",
                        "desc": "Featuring 5★ Yagami Kou, 4★ Yagami Kou",
                        "time": "September 29 2021, 17:00"
                    },
                    {
                        "title": "Aoba Side",
                        "desc": "Featuring 5★ Suzukaze Aoba, 4★ Suzukaze Aoba",
                        "time": "September 29 2021, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "I'll Keep Walking for You Summon",
            "歩き続ける君のために期間限定ピックアップ召喚・大人のゆき編",
            "Gakkou Gurashi! Otayori Finale Event Summon"
        ],
        "image": [
            "https://i.imgur.com/1DWZUHQ.png",
            "https://i.imgur.com/ncIc2zo.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "October 13 2021, 17:00",
                "end": "October 27 2021, 15:59",
                "banners": [
                    {
                        "title": "Adult Yuki Side",
                        "desc": "Featuring 5★ Yuki [Grown-up]",
                        "time": "October 13 2021, 17:00"
                    },
                    {
                        "title": "Adult Mii-kun Side",
                        "desc": "Featuring 5★ Miki [Grown-up]",
                        "time": "October 13 2021, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Limited-time Fire Characters Summon",
            "2つの召喚を同時開催！炎属性のキャラクターを仲間にしよう！",
            "240 Paid Gems for a 10x Summon + Random 5★ Summon Ticket",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Yoriko [Maid], 5★ Ikeno Kaede, 5★ Hiroe [Hot Spring], 5★ Tooi Narumi, 5★ Cocoa [Christmas], 5★ Syaro, 5★ Kohane [Bridal], 5★ Machiko Ryou",
                "start": "September 29 2021, 17:00",
                "end": "October 6 2021, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "September 29 2021, 17:00",
                "end": "October 13 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Limited-time Knight Step-up + Paid Summon",
            "2つの召喚を同時開催！ナイトのキャラクターを仲間にしよう！",
            "240 Paid Gems for a 10x Summon + Random 5★ Summon Ticket",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Yuno [Swimsuit], 5★ Ichii Yui, 5★ Yuuko [Christmas], 5★ Naoki Miki, 5★ Oozora Haruka, 5★ Claire [Halloween], 5★ Chino [Swimsuit], 5★ Kanna",
                "start": "October 6 2021, 17:00",
                "end": "October 13 2021, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "October 6 2021, 17:00",
                "end": "October 20 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "NEW GAME! Paid Summon + Choosable 5★ Summon Ticket",
            "NEW GAME!★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "September 29 2021, 17:00",
                "end": "October 6 2021, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "September 29 2021, 17:00",
                "end": "October 13 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "NEW GAME! Limited-time Paid Summon + Choosable 5★ Summon Ticket",
            "NEW GAME!期間限定★5選べるチケット付き！有償限定10回召喚",
            "1,000 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Aoba [Sports Festival], 5★ Hifumi [Christmas], 5★ Hifumi [Maid], 5★ Hajime [Christmas], 5★ Yun [Doll's Festival], 5★ Kou [Swimsuit], 5★ Kou [New Year], 5★ Nene [Swimsuit], 5★ Momiji [Valentine]",
                "start": "September 29 2021, 17:00",
                "end": "October 6 2021, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "September 29 2021, 17:00",
                "end": "October 13 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Gakkou Gurashi! Limited-time Summon",
            "がっこうぐらし！期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/cAySEVg.png",
            "https://i.imgur.com/LAUs1mp.png",
            "https://i.imgur.com/QnrTIGq.png",
            "https://i.imgur.com/sOJVwTM.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Yuki [Swimsuit], 5★ Kurumi [Christmas], 5★ Yuuri [Hot Spring], 5★ Miki [Halloween]",
                "start": "October 13 2021, 17:00",
                "end": "October 20 2021, 23:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Gakkou Gurashi! Paid Summon + Choosable 5★ Summon Ticket",
            "がっこうぐらし！★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "October 13 2021, 17:00",
                "end": "October 20 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "October 13 2021, 17:00",
                "end": "October 27 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Gakkou Gurashi! Limited-time Paid Summon + Choosable 5★ Summon Ticket",
            "がっこうぐらし！期間限定★5選べるチケット付き！有償限定10回召喚",
            "1,000 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Yuki [Swimsuit], 5★ Kurumi [Swimsuit], 5★ Kurumi [Christmas], 5★ Yuuri [New Year], 5★ Yuuri [Hot Spring], 5★ Miki [Halloween], 5★ Megumi [Swimsuit]",
                "start": "October 13 2021, 17:00",
                "end": "October 20 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "October 13 2021, 17:00",
                "end": "October 27 2021, 23:59"
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
                "name": "NEW GAME! Finale Celebration Starlight Stone Set",
                "start": "September 29 2021, 17:00",
                "end": "October 13 2021, 15:59"
            },
            {
                "name": "1400 Days Celebration Item & Gem Sets",
                "start": "October 10 2021, 0:00",
                "end": "October 23 2021, 23:59"
            },
            {
                "name": "Gakkou Gurashi! Otayori Finale Celebration Gem Set",
                "start": "October 13 2021, 17:00",
                "end": "October 27 2021, 15:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Author Quests 「ＰＥＣＯ　-A trial version-」 Half Stamina Campaign",
            "作家クエスト「ＰＥＣＯ　-A trial version-」スタミナ半減キャンペーン"
        ],
        "image": "match",
        "column": 2,
        "priority": 14,
        "timers": [
            {
                "name": "Period",
                "start": "September 29 2021, 17:00",
                "end": "October 13 2021, 15:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "1400 Days Celebration Login Bonus",
            "1400日記念ログインボーナス",
            "Log in on 10 days to receive up to 300 Starlight Stones."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "October 10 2021, 0:00",
                "end": "October 23 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "1400 Days Celebration Paid Summon + Choosable 5★ Summon Ticket",
            "リリース1400日記念★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Stones for a 10x Summon + Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Period",
                "start": "October 10 2021, 0:00",
                "end": "October 23 2021, 23:59"
            },
            {
                "name": "Ticket Expiration",
                "start": "October 10 2021, 0:00",
                "end": "October 30 2021, 23:59"
            }
        ]
    }
];

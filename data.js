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
            "Version 3.1.2 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 40,
        timers: [
            {
                name: "Scheduled Time",
                start: "June 9 2021, 16:00",
                end: "June 9 2021, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Bridal or Hell",
            "ブライダル・オア・ヘル",
            "Bride Event"
        ],
        "image": [
            "https://i.imgur.com/z2sEpxB.png",
            "https://i.imgur.com/b6tUoUR.png",
            "https://i.imgur.com/H93nXSz.png",
            "https://i.imgur.com/DNgHfjm.png",
            "https://i.imgur.com/PWfoSfW.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "May 27 2021, 17:00",
                "end": "June 9 2021, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "May 31 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "May 29 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "June 4 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "June 5 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "June 6 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "June 7 2021, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "May 27 2021, 17:00",
                "end": "June 9 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "May 27 2021, 17:00",
                "end": "June 16 2021, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "The Girls from a Close yet Distant World",
            "まんがタイムコラボ近くて遠い世界の少女たち",
            "Manga Time Collab Event"
        ],
        "image": [
            "https://i.imgur.com/YrpaqFy.png",
            "https://i.imgur.com/LzTctJv.png",
            "https://i.imgur.com/xSXNJvR.png",
            "https://i.imgur.com/Coo0Gtq.png",
            "https://i.imgur.com/dF2sSeI.png",
            "https://i.imgur.com/Nxutzun.png",
            "https://i.imgur.com/4MZWpVJ.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "June 9 2021, 17:00",
                "end": "June 24 2021, 11:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "June 16 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "June 11 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "June 18 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "June 19 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "June 20 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "June 21 2021, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "June 9 2021, 17:00",
                "end": "June 24 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "June 9 2021, 17:00",
                "end": "July 1 2021, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Bridal or Hell Summon",
            "ブライダル",
            "Bride Event Summon"
        ],
        "image": [
            "https://i.imgur.com/z2sEpxB.png",
            "https://i.imgur.com/b6tUoUR.png",
            "https://i.imgur.com/H93nXSz.png",
            "https://i.imgur.com/DNgHfjm.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "May 27 2021, 17:00",
                "end": "June 9 2021, 15:59",
                "extraPriority": 6,
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5★ Kon [Bridal], 5★ Kohane [Bridal]",
                        "time": "May 27 2021, 17:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5★ Ruki [Bridal], 5★ Sesame [Bridal]",
                        "time": "May 27 2021, 17:00"
                    }
                ]
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "The Girls from a Close yet Distant World Summon",
            "まんがタイムコラボ限定ピックアップ召喚・大家さんは思春期！編",
            "Manga Time Collab Event Summon"
        ],
        "image": [
            "https://i.imgur.com/YrpaqFy.png",
            "https://i.imgur.com/LzTctJv.png",
            "https://i.imgur.com/xSXNJvR.png",
            "https://i.imgur.com/Coo0Gtq.png",
            "https://i.imgur.com/dF2sSeI.png",
            "https://i.imgur.com/Nxutzun.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "June 9 2021, 17:00",
                "end": "June 24 2021, 11:59",
                "extraPriority": 6,
                "banners": [
                    {
                        "title": "Ooya-san wa Shishunki! Side",
                        "desc": "Featuring 5★ Satonaka Chie, 5★ Shirai Reiko",
                        "time": "June 9 2021, 17:00"
                    },
                    {
                        "title": "Love Lab Side",
                        "desc": "Featuring 5★ Kurahashi Riko, 5★ Maki Natsuo",
                        "time": "June 9 2021, 17:00"
                    },
                    {
                        "title": "Komori-san wa Kotowarenai! Side",
                        "desc": "Featuring 5★ Komori Shuri, 5★ Nishitori Megumi",
                        "time": "June 9 2021, 17:00"
                    }
                ]
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Collab Celebration Choosable 5★ Summon Ticket",
            "コラボ開催記念★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "June 9 2021, 17:00",
                "end": "June 16 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "June 9 2021, 17:00",
                "end": "June 23 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Limited-time Alchemist Step-up Summon / Paid Summon",
            "2つの召喚を同時開催！アルケミストのキャラクターを仲間にしよう！",
            "Random 5★ Summon Ticket on the 7th step",
            "240 Paid Gems for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Nagi, 5★ Aya [Valentine], 5★ Miki [Halloween], 5★ Koume [Valentine], 5★ Nadeshiko [Valentine], 5★ Kuro, 5★ Konohata Mira, 5★ Kawaguchi Yoshino",
                "start": "June 4 2021, 17:00",
                "end": "June 9 2021, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "June 4 2021, 17:00",
                "end": "June 16 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Head Priest & Seven Sages Random Summon Ticket",
            "筆頭神官＆七賢者限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Archive, 5★ Sugar, 5★ Sesame, 5★ Cardamom, 5★ Salt, 5★ Ginger, 5★ Fennel, 5★ Hakka",
                "start": "May 27 2021, 17:00",
                "end": "June 1 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "May 27 2021, 17:00",
                "end": "June 8 2021, 23:59"
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
                "name": "Summon Period: Featuring 5★ Yui [Swimsuit], 5★ Mio [Valentine], 5★ Ryou [Swimsuit], 5★ Kirin [Sports Festival], 5★ Sugar, 5★ Sugar [Valentine], 5★ Cardamom, 5★ Salt, 5★ Salt [White Day], 5★ Ginger, 5★ Ginger [Maid]",
                "start": "June 17 2021, 0:00",
                "end": "June 24 2021, 11:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Past Kirara Fantasia Part 2 Limited-time Summon",
            "きららファンタジア第2部限定復刻ピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/rpBGZJF.png",
            "https://i.imgur.com/fMuI7nP.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Lilith [Part 2], 5★ Fennel [Part 2]",
                "start": "June 17 2021, 0:00",
                "end": "June 24 2021, 11:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara Fantasia Part 2 Paid Summon",
            "きららファンタジア第2部限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Lilith [Part 2], 5★ Fennel [Part 2]",
                "start": "June 17 2021, 0:00",
                "end": "June 24 2021, 11:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "June 17 2021, 0:00",
                "end": "July 1 2021, 23:59"
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
            "Main Quest Part 2 Half Stamina Campaign",
            "メインクエスト第2部スタミナ半減キャンペーン",
        ],
        image: "match",
        column: 2,
        priority: 12,
        timers: [
            {
                name: "Period",
                "start": "June 17 2021, 0:00",
                "end": "July 1 2021, 23:59"
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
        "image": "https://i.imgur.com/nfrALgB.png",
        "column": 2,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "June 5 2021, 0:00",
                "end": "June 6 2021, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "June 12 2021, 0:00",
                "end": "June 13 2021, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "June 19 2021, 0:00",
                "end": "June 20 2021, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "June 26 2021, 0:00",
                "end": "June 27 2021, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "June 5 2021, 0:00",
                "end": "July 2 2021, 23:59",
                "keepAfterFinished": "2 hours",
                "type": "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Past Sports Festival Room Decorations",
            "運動会限定ルームアイテム再登場"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "May 14 2021, 17:00",
                "end": "May 20 2021, 16:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Event Celebration Gem Set Sale",
            "イベント開催記念特別セール！星彩石セット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Gem Sets",
                "start": "May 27 2021, 17:00",
                "end": "June 9 2021, 16:59"
            },
            {
                name: "Ticket Expiration",
                "start": "May 27 2021, 17:00",
                "end": "June 16 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Manga Volume 2 Celebration Daily KiraKira Limited-time Summon",
            "コミカライズ第2巻発売記念1日1回期間限定きらきら召喚",
            "40 Paid Gems once per day for 3 summons, all 4* or above"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Yuno [Christmas], 5★ Yuno [Swimsuit], 5★ Miyako [Christmas], 5★ Yasuna [New Year], 5★ Cocoa [Christmas], 5★ Cocoa [Swimsuit]",
                "start": "June 1 2021, 0:00",
                "end": "June 9 2021, 15:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Manga Volume 2 Celebration Paid Summon + Random 5* Summon Ticket",
            "コミカライズ第2巻発売記念★5確定チケット付き！有償限定10回召喚",
            "240 Paid Gems for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring characters that appear in the Volume 2",
                "start": "June 1 2021, 0:00",
                "end": "June 9 2021, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "June 1 2021, 0:00",
                "end": "June 16 2021, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "The Girls from a Close yet Distant World Login Bonus",
            "近くて遠い世界の少女たちログインボーナス",
            "Log in on 10 days to receive up to 200 Starlight Stones."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "June 9 2021, 17:00",
                "end": "June 24 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Manga Time Collab-Limited Step-up Summon",
            "まんがタイムコラボ限定おまけ付き10回召喚",
            "Random 5★ Summon Ticket on 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Period: Featuring 5★ Satonaka Chie, 5★ Shirai Reiko, 5★ Kurahashi Riko, 5★ Maki Natsuo, 5★ Komori Shuri, 5★ Nishitori Megumi",
                "start": "June 9 2021, 17:00",
                "end": "June 24 2021, 11:59"
            },
            {
                "name": "Ticket Expiration",
                "start": "June 9 2021, 17:00",
                "end": "July 1 2021, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Collab-Limited Weapons",
            "コラボ限定ぶき登場",
            "Special Weapon Vouchers at Item Shop"
        ],
        "image": "cork",
        "column": 2,
        "priority": 12,
        "timers": [
            {
                "name": "Voucher Purchase",
                "start": "June 9 2021, 17:00",
                "end": "June 24 2021, 23:59"
            },
            {
                "name": "Voucher Exchange",
                "start": "June 9 2021, 17:00",
                "end": "June 24 2021, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Special Starlight Stone Bundle",
            "お得な星彩石セット販売"
        ],
        "image": "cork",
        "column": 2,
        "priority": 12,
        "timers": [
            {
                "name": "Period",
                "start": "June 9 2021, 17:00",
                "end": "June 24 2021, 11:59"
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
                "name": "Period",
                "start": "June 9 2021, 17:00",
                "end": "June 24 2021, 11:59"
            }
        ]
    }
];

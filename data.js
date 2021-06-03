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
                start: "May 27 2021, 16:00",
                end: "May 27 2021, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Giant Kuromon vs Mecha Match",
            "ジャイアントクロモンＶＳメカマッチ",
            "Sansha Sanyou x Sakura Trick x Slow Start Event"
        ],
        "image": [
            "https://i.imgur.com/tSo0hvG.png",
            "https://i.imgur.com/utNa9rr.png",
            "https://i.imgur.com/ZzaoI92.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "May 14 2021, 17:00",
                "end": "May 27 2021, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "Chapters 5~10",
                        "time": "May 15 2021, 17:00",
                        "type": "story"
                    },
                    {
                        "title": "Chapters 11~16",
                        "time": "May 16 2021, 17:00",
                        "type": "story"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "May 19 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "EX Quest",
                        "time": "May 21 2021, 17:00",
                        "type": "battle"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "May 14 2021, 17:00",
                "end": "May 27 2021, 23:59"
            },
            {
                "name": "Event Shop/Global Points Rewards",
                "start": "May 14 2021, 17:00",
                "end": "June 3 2021, 13:59"
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
        "type": "Gacha",
        "title": [
            "Giant Kuromon vs Mecha Match Summon",
            "ジャイアントクロモンＶＳメカマッチピックアップ召喚",
            "Sansha Sanyou x Sakura Trick x Slow Start Event Summon"
        ],
        "image": [
            "https://i.imgur.com/tSo0hvG.png",
            "https://i.imgur.com/utNa9rr.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "May 14 2021, 17:00",
                "end": "May 27 2021, 15:59",
                "extraPriority": 6,
                "banners": [
                    {
                        "title": "First Half",
                        "desc": "Featuring 5★ Hayama Kou, 4★ Odagiri Futaba, 4★ Hayama Teru",
                        "time": "May 14 2021, 17:00"
                    },
                    {
                        "title": "Second Half",
                        "desc": "Featuring 5★ Ikeno Kaede, 4★ Ikeno Kaede, 4★ Iizuka Yuzu",
                        "time": "May 18 2021, 0:00"
                    }
                ]
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
            "Past Sports Festival Limited-Time Step-up Summon",
            "期間限定運動会復刻おまけ付き10回召喚",
            "Random 5* Summon Ticket on 7th step"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5* Karen [Sports Festival], 5* Youko [Sports Festival], 5* Tamaki [Sports Festival], 5* Aoba [Sports Festival], 5* Eiko [Sports Festival], 5* Shamiko [Sports Festival], 5* Kirin [Sports Festival]",
                "start": "May 14 2021, 17:00",
                "end": "May 20 2021, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "May 14 2021, 17:00",
                "end": "May 27 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Wind Characters Step-up & Paid Summon",
            "期間限定風属性おまけ付き10回召喚",
            "期間限定風属性★5確定チケット付き！有償限定10回召喚"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Takeya Yuki, 5★ Hifumi [Maid], 5★ Kon [Swimsuit], 5★ Natsume Nina, 5★ Nadeshiko [Swimsuit], 5★ Chiya, 5★ Kana [White Day], 5★ Hayama Teru",
                "start": "May 22 2021, 17:00",
                "end": "May 27 2021, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "May 22 2021, 17:00",
                "end": "June 3 2021, 23:59"
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
            "Skill Update Step-up Summon",
            "スキルアップデートおまけ付き10回召喚",
            "Random 5* Summon Ticket on 3rd step"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5* Run, 5* Natsume Nono, 5* Sonoda Yuu, 5* Syaro",
                "start": "May 14 2021, 17:00",
                "end": "May 20 2021, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "May 14 2021, 17:00",
                "end": "May 27 2021, 23:59"
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
            "Swimsuit 2019 Choosable 5* Summon Ticket",
            "期間限定2019水着復刻★5選べるチケット付き！有償限定10回召喚",
            "600 Paid Gems for a 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5* Kurumi [Swimsuit], 5* Nene [Swimsuit], 5* Maika [Swimsuit], 5* Aoi [Swimsuit], 5* Hana [Swimsuit], 5* Kaos [Swimsuit], 5* Yui [Swimsuit], 5* Chino [Swimsuit], 5* Lamp [Swimsuit]",
                "start": "May 14 2021, 17:00",
                "end": "May 19 2021, 23:59",
                "extraPriority": 3,
            },
            {
                "name": "Ticket Expiration",
                "start": "May 14 2021, 17:00",
                "end": "May 26 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Swimsuit 2018 Choosable 5* Summon Ticket",
            "期間限定2018水着復刻★5選べるチケット付き！有償限定10回召喚",
            "600 Paid Gems for 10x Summon + a Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Yuzuko [Swimsuit], 5★ Aya [Swimsuit], 5★ Yuki [Swimsuit], 5★ Kou [Swimsuit], 5★ Kon [Swimsuit], 5★ Shizuku [Swimsuit], 5★ Kaho [Swimsuit], 5★ Nadeshiko [Swimsuit]",
                "start": "May 20 2021, 0:00",
                "end": "May 24 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "May 20 2021, 0:00",
                "end": "May 31 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara Fantasia Limited-time Summon",
            "きららファンタジア期間限定復刻ピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/EwMOT1D.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Kirara [Manga ver.]",
                "start": "May 27 2021, 17:00",
                "end": "May 31 2021, 23:59",
                "extraPriority": 4
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
                "name": "Summon Period",
                "start": "May 28 2021, 0:00",
                "end": "June 3 2021, 23:59",
                "extraPriority": 4,
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5★ Chiya [Christmas], 5★ Koume [Valentine], 5★ Koyume [Swimsuit], 5★ Tsubasa [Tanabata], 5★ Kotetsu [Christmas], 5★ Sesame",
                        "time": "May 28 2021, 0:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5★ Kon [Swimsuit], 5★ Omi [New Year], 5★ Kaos [Swimsuit], 5★ Hizume [Maid], 5★ Kana [White Day], 5★ Clea [Doll's Festival], 4★ Nono [Halloween]",
                        "time": "May 28 2021, 0:00"
                    }
                ]
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
        "type": "Other",
        "title": [
            "Manga Volume 2 Celebration Login Bonus",
            "コミカライズ第2巻発売記念ログインボーナス",
            "Log everyday for varied items"
        ],
        "image": "lamp",
        "column": 2,
        "priority": 12,
        "timers": [
            {
                "name": "Period",
                "start": "June 1 2021, 0:00",
                "end": "June 7 2021, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "Manga Volume 2 Celebration Starlight Stone Bundle",
            "お得な星彩石セット販売"
        ],
        "image": "cork",
        "column": 2,
        "priority": 10,
        "timers": [
            {
                "name": "Period",
                "start": "June 1 2021, 0:00",
                "end": "June 7 2021, 23:59"
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
    }
];

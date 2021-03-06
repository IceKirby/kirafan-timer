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
                start: "February 26 2021, 16:00",
                end: "February 26 2021, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Valentine's Choco Battle of Love",
            "愛のバレンタインチョコバトル",
            "Valentine 2021 Event"
        ],
        "image": [
            "https://i.imgur.com/we9l3xs.png",
            "https://i.imgur.com/4BOgSDI.png",
            "https://i.imgur.com/7sVsaau.png",
            "https://i.imgur.com/wrh7zAE.png",
            "https://i.imgur.com/wzpAkPK.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Event",
                "start": "February 10 2021, 17:00",
                "end": "March 15 2021, 15:59",
                "markers": [
                    {
                        "title": "Extra Chapter 1",
                        "time": "February 21 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "February 22 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "February 23 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "February 24 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "February 12 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "EX Quest",
                        "time": "February 17 2021, 17:00",
                        "type": "battle"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Missions",
                "start": "February 10 2021, 17:00",
                "end": "March 15 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "February 10 2021, 17:00",
                "end": "March 22 2021, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Revenge of White Day Coliseum",
            "復讐のホワイトデーコロシアム",
            "White Day 2021 Event"
        ],
         "image": [
            "https://i.imgur.com/LXqeOUx.png",
            "https://i.imgur.com/rCmqPXg.png",
            "https://i.imgur.com/NqslP1v.png",
            "https://i.imgur.com/rwSNrdc.png",
            "https://i.imgur.com/7WAy4Ms.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Event",
                "start": "February 26 2021, 17:00",
                "end": "March 15 2021, 15:59",
                "markers": [
                    {
                        "title": "Extra Chapter 1",
                        "time": "March 8 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "March 9 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "March 10 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "March 11 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "February 28 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "EX Quest",
                        "time": "March 3 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Super EX Quest",
                        "time": "March 5 2021, 17:00",
                        "type": "battle"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Missions",
                "start": "February 26 2021, 17:00",
                "end": "March 15 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "February 26 2021, 17:00",
                "end": "March 22 2021, 13:59",
                "markers": [
                    {
                        "title": "Part 2",
                        "time": "March 5 2021, 17:00",
                        "type": "star"
                    }
                ]
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Valentine's Choco Battle of Love Summon",
            "愛のバレンタインチョコバトルピックアップ召喚",
            "Valentine 2021 Event summon"
        ],
        "image": [
            "https://i.imgur.com/we9l3xs.png",
            "https://i.imgur.com/4BOgSDI.png",
            "https://i.imgur.com/7sVsaau.png",
            "https://i.imgur.com/wrh7zAE.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period",
                "start": "February 10 2021, 17:00",
                "end": "March 15 2021, 15:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5* Kotone [Valentine], 5* Sugar [Valentine]",
                        "time": "February 10 2021, 17:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5* Nadeshiko [Valentine], 5* Mira [Valentine]",
                        "time": "February 14 2021, 0:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Revenge of White Day Coliseum Summon",
            "復讐のホワイトデーコロシアムピックアップ召喚",
            "White Day 2021 Event summon"
        ],
        "image": [
            "https://i.imgur.com/LXqeOUx.png",
            "https://i.imgur.com/rCmqPXg.png",
            "https://i.imgur.com/NqslP1v.png",
            "https://i.imgur.com/rwSNrdc.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period",
                "start": "February 26 2021, 17:00",
                "end": "March 15 2021, 15:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5* Kana [White Day], 5* Salt [White Day]",
                        "time": "February 26 2021, 17:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5* Rin [White Day], 5* Ao [White Day]",
                        "time": "March 1 2021, 0:00"
                    }
                ],
                "extraPriority": 6
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
            "https://i.imgur.com/3S3mJMJ.png",
            "https://i.imgur.com/h5nyvXy.png",
            "https://i.imgur.com/isRiWF6.png",
            "https://i.imgur.com/g7N8bFW.png",
            "https://i.imgur.com/AbLuqgK.png",
            "https://i.imgur.com/X2otlyy.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Part 1: Featuring 5* Polka, 5* Cork, 5* Cork [Maid]",
                "start": "February 17 2021, 17:00",
                "end": "February 22 2021, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Part 2: Featuring 5* Clea [Doll's Festival], 5* Kanna, 5* Leine",
                "start": "February 22 2021, 17:00",
                "end": "February 26 2021, 15:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Super EX Quest Support Step-up Summon",
            "超高難易度クエスト攻略応援おまけ付き10回召喚",
            "Random 5* Summon Ticket on 7th step"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period: Featuring 5* Tooru [Christmas], 5* Chiya [Christmas], 5* Koume [Valentine], 5* Omi [New Year], 5* Tachibana Isana, 5* Moeta Kaoruko, 5* Cocoa [Swimsuit], 5* Ryou [Swimsuit], 4* Nozaki Namiko, 4* Sakamoto Kaju, 4* Takahashi Yuki",
                "start": "March 5 2021, 17:00",
                "end": "March 15 2021, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "March 5 2021, 17:00",
                "end": "March 22 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Super EX Quest Support Summon Ticket",
            "超高難易度クエスト攻略応援おまけ付き10回召喚",
            "240 Paid Gems for a 10x Summon + Random 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period: Featuring 5* Tooru [Christmas], 5* Chiya [Christmas], 5* Koume [Valentine], 5* Omi [New Year], 5* Tachibana Isana, 5* Moeta Kaoruko, 5* Cocoa [Swimsuit], 5* Ryou [Swimsuit]",
                "start": "March 5 2021, 17:00",
                "end": "March 15 2021, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "March 5 2021, 17:00",
                "end": "March 22 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Main Quest Part 2 Revival Limited-time Summon",
            "きららファンタジア第2部限定復刻ピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/Sx6OnNj.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Lilith [Part 2]",
                "start": "March 8 2021, 0:00",
                "end": "March 15 2021, 15:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Magazine-specific Limited-time Paid Summon",
            "雑誌別期間限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Kirara & Miracle: Featuring Limited-time characters from Manga Time Kirara & Miracle magazines",
                "start": "January 27 2021, 17:00",
                "end": "February 7 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration (Kirara & Miracle)",
                "start": "January 27 2021, 17:00",
                "end": "February 14 2021, 23:59"
            },
            {
                "name": "Kirara MAX: Featuring Limited-time characters from Manga Time Kirara MAX magazine",
                "start": "February 8 2021, 0:00",
                "end": "February 14 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration (Kirara MAX)",
                "start": "February 8 2021, 0:00",
                "end": "February 21 2021, 23:59"
            },
            {
                "name": "Kirara Forward: Featuring Limited-time characters from Manga Time Kirara Forward magazine",
                "start": "February 15 2021, 0:00",
                "end": "February 21 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration (Kirara Forward)",
                "start": "February 15 2021, 0:00",
                "end": "February 28 2021, 23:59"
            },
            {
                "name": "Kirara Carat: Featuring Limited-time characters from Manga Time Kirara Carat magazine",
                "start": "February 22 2021, 0:00",
                "end": "February 28 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration (Kirara Carat)",
                "start": "February 22 2021, 0:00",
                "end": "March 7 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "4 Series Limited-time Summon",
            "4作品のキャラ期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/xVjdAjD.png",
            "https://i.imgur.com/1mxS1rN.png",
            "https://i.imgur.com/ZoLq5uH.png",
            "https://i.imgur.com/K8sBE1T.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Part 1: Featuring 5* Haruka [Swimsuit], 5* Nadeshiko [Swimsuit], 5* Kotetsu [Christmas], 5* Konohata Mira, 4* Kotone [Swimsuit]",
                "start": "February 10 2021, 17:00",
                "end": "February 17 2021, 16:59",
                "info": "Also 4* and 3* characters from Sakura Trick, 4* characters from Yuru Camp△, Anima Yell! and Koisuru Asteroid",
                "extraPriority": 4
            },
            {
                "name": "Part 2: Featuring 5* Shizuku [Swimsuit], 5* Rin [Traveler of the Wasteland], 5* Hizume [Maid], 5* Konohata Mira, 4* Kotone [Swimsuit]",
                "start": "February 26 2021, 17:00",
                "end": "March 5 2021, 16:59",
                "extraPriority": 4,
                "info": "Also 4* and 3* characters from Sakura Trick, 4* characters from Yuru Camp△, Anima Yell! and Koisuru Asteroid",
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Limited-time Past Hinamatsuri Step-up Summon",
            "期間限定ひな祭り復刻おまけ付き10回召喚",
            "Random 5* Summon Ticket on 7th Step"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Yun [Doll's Festival], 5* Hideri [Doll's Festival], 5* Isana [Doll's Festival], 5* Shion [Doll's Festival], 5* Clea [Doll's Festival], 4* Maika [Doll's Festival]",
                "start": "February 26 2021, 17:00",
                "end": "March 5 2021, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "February 26 2021, 17:00",
                "end": "March 12 2021, 23:59"
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
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period",
                "start": "February 10 2021, 17:00",
                "end": "February 17 2021, 23:59",
                "extraPriority": 3,
            },
            {
                "name": "Ticket Expiration",
                "start": "February 10 2021, 17:00",
                "end": "February 24 2021, 23:59"
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
                "start": "February 18 2021, 0:00",
                "end": "February 25 2021, 23:59",
                "extraPriority": 4
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Valentine Login Bonus",
            "バレンタインログインボーナス",
            "Log in on 10 days for up to 200 Free Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "February 17 2021, 17:00",
                "end": "February 26 2021, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "White Day Login Bonus",
            "ホワイトデーログインボーナス",
            "Log in on 10 days for up to 200 Free Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "February 26 2021, 17:00",
                "end": "March 15 2021, 23:59"
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
            "Main Quest Part 2 Chapter 1 Half Stamina Campaign",
            "メインクエスト第2部1章スタミナ半減キャンペーン",
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "March 8 2021, 0:00",
                "end": "March 23 2021, 23:59"
            }
        ]
    },
    {
        type: "WeekendBoss",
        title: [
            "March Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/pHHkOxE.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "March 6 2021, 0:00",
                end: "March 7 2021, 23:59"
            },
            {
                name: "Weekend 2",
                start: "March 13 2021, 0:00",
                end: "March 14 2021, 23:59"
            },
            {
                name: "Weekend 3",
                start: "March 20 2021, 0:00",
                end: "March 21 2021, 23:59"
            },
            {
                name: "Weekend 4",
                start: "March 27 2021, 0:00",
                end: "March 28 2021, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "March 6 2021, 0:00",
                end: "April 2 2021, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Past Valentine Room Decorations",
            "バレンタイン限定ルームアイテム再登場"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "February 10 2021, 0:00",
                "end": "February 26 2021, 15:59"
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
            "Magazine-specific Summon Renewal Celebration Sales",
            "雑誌別召喚リニューアル記念セール"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "4 Magazines 5* Ticket Set",
                "start": "January 27 2021, 17:00",
                "end": "February 28 2021, 23:59"
            },
            {
                name: "Gems Set (Set 1)",
                "start": "January 27 2021, 17:00",
                "end": "February 7 2021, 23:59"
            },
            {
                name: "Gems Set (Set 2)",
                "start": "February 8 2021, 17:00",
                "end": "February 14 2021, 23:59"
            },
            {
                name: "Gems Set (Set 3)",
                "start": "February 15 2021, 17:00",
                "end": "February 721 2021, 23:59"
            },
            {
                name: "Gems Set (Set 4)",
                "start": "February 22 2021, 17:00",
                "end": "February 28 2021, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Valentine Special Sets Sale",
            "バレンタインお得なセット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Gem Sets",
                "start": "February 10 2021, 17:00",
                "end": "February 26 2021, 15:59"
            },
            {
                name: "Ticket Sets",
                "start": "February 10 2021, 17:00",
                "end": "February 17 2021, 16:59"
            },
            {
                name: "Training Support Sets",
                "start": "February 10 2021, 17:00",
                "end": "February 26 2021, 15:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Hinamatsuri Special Set Sale",
            "ひな祭りお得なセット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Past Hinamatsuri 5* Limited-time Summon Ticket",
                "start": "February 26 2021, 17:00",
                "end": "March 5 2021, 16:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "White Day Gem Sets Sale",
            "ホワイトデーお得なセット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Gem Sets",
                "start": "February 26 2021, 17:00",
                "end": "March 15 2021, 15:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Super EX Quest Support Campaign",
            "【超高難易度】クエスト攻略応援キャンペーン"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Item & Exchange Shop Sets",
                "start": "March 5 2021, 17:00",
                "end": "March 15 2021, 15:59"
            }
        ]
    }
];

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
                start: "February 10 2021, 16:00",
                end: "February 10 2021, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Otherworldly Manjuus and the Darkness Looming over Etowaria",
            "異世界饅頭とエトワリアに迫る闇",
            "Yuyushiki x Urara Meirochou x Koufuku Grafitti Event"
        ],
        "image": [
            "https://i.imgur.com/43mmgxV.png",
            "https://i.imgur.com/mmd82Yy.png",
            "https://i.imgur.com/PTzVudQ.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Event",
                "start": "January 27 2021, 17:00",
                "end": "February 10 2021, 15:59",
                "markers": [
                    {
                        "title": "Extra Chapter 1",
                        "time": "February 5 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "February 6 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "February 7 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "February 8 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "January 29 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "EX Quest",
                        "time": "February 3 2021, 17:00",
                        "type": "battle"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Missions",
                "start": "January 27 2021, 17:00",
                "end": "February 10 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "January 27 2021, 17:00",
                "end": "February 17 2021, 13:59"
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
            "Magazine-specific Summon Renewal Celebration Free Summon",
            "雑誌別召喚リニューアル記念無料１０回召喚",
            "One free 10x Summon on each Magazine-specific banner"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring Limited-time characters from Manga Time Kirara & Miracle magazines",
                "start": "February 1 2021, 0:00",
                "end": "February 1 2021, 23:59",
                "extraPriority": 7
            },
            {
                "name": "Featuring Limited-time characters from Manga Time Kirara MAX magazine",
                "start": "February 8 2021, 0:00",
                "end": "February 8 2021, 23:59",
                "extraPriority": 7
            },
            {
                "name": "Featuring Limited-time characters from Manga Time Kirara Forward magazine",
                "start": "February 15 2021, 0:00",
                "end": "February 15 2021, 23:59",
                "extraPriority": 7
            },
            {
                "name": "Featuring Limited-time characters from Manga Time Kirara Carat magazine",
                "start": "February 22 2021, 0:00",
                "end": "February 22 2021, 23:59",
                "extraPriority": 7
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
                "info": "Also 4* and 3* characters from Sakura Trick, 4* characters from Yuru Camp△, Anima Yell! and Koisuri Asteroid",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Limited-time Mage-only Step-up Summon",
            "期間限定まほうつかいおまけ付き10回召喚",
            "Random 5* Summon Ticket on 7th Step"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Chiya, 5* Sakuranomiya Maika, 5* Mafuyu [Christmas], 5* Shima Rin, 5* Aoi [Swimsuit], 5* Chino, 5* Momo [Christmas], 5* Mikan [Swimsuit]",
                "start": "February 3 2021, 17:00",
                "end": "February 10 2021, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "February 3 2021, 17:00",
                "end": "February 17 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Past Valentine Limited-time Step-up Summon",
            "期間限定バレンタイン復刻おまけ付き10回召喚",
            "Random 5* Summon Ticket on 7th Step"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring Valentine characters from 2018~2020",
                "start": "February 10 2021, 17:00",
                "end": "February 17 2021, 16:59",
                "extraPriority": 4
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
            "Limited-time Mage-only Paid Summon",
            "期間限定まほうつかい★5確定チケット付き！有償限定10回召喚",
            "240 Paid Gems for a 10x Summon + Random 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Mafuyu [Christmas], 5* Aoi [Swimsuit], 5* Momo [Christmas], 5* Mikan [Swimsuit]",
                "start": "February 3 2021, 17:00",
                "end": "February 10 2021, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "February 3 2021, 17:00",
                "end": "February 17 2021, 23:59"
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
            "February Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/h56WXgA.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "February 6 2021, 0:00",
                end: "February 7 2021, 23:59"
            },
            {
                name: "Weekend 2",
                start: "February 13 2021, 0:00",
                end: "February 14 2021, 23:59"
            },
            {
                name: "Weekend 3",
                start: "February 20 2021, 0:00",
                end: "February 21 2021, 23:59"
            },
            {
                name: "Weekend 4",
                start: "February 27 2021, 0:00",
                end: "February 28 2021, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "February 6 2021, 0:00",
                end: "March 5 2021, 23:59",
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
    }
];

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
                start: "January 27 2021, 16:00",
                end: "January 27 2021, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Space Alien Game",
            "スペースエイリアンゲーム",
            "Stella no Mahou x Acchi Kocchi x Harumination Event"
        ],
        "image": [
            "https://i.imgur.com/QbxKOU5.png",
            "https://i.imgur.com/PT00ZP6.png",
            "https://i.imgur.com/z1lpb8s.png",
            "https://i.imgur.com/afnpmfU.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Event",
                "start": "January 14 2021, 17:00",
                "end": "January 27 2021, 15:59",
                "markers": [
                    {
                        "title": "Extra Chapter 1",
                        "time": "January 22 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "January 23 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "January 24 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "January 25 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "January 16 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "EX Quest",
                        "time": "January 20 2021, 17:00",
                        "type": "battle"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Missions",
                "start": "January 14 2021, 17:00",
                "end": "January 27 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "January 14 2021, 17:00",
                "end": "February 3 2021, 13:59"
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
        "type": "Gacha",
        "title": [
            "Space Alien Game Summon",
            "スペースエイリアンゲームピックアップ召喚",
            "Stella no Mahou x Acchi Kocchi x Harumination Event summon"
        ],
        "image": [
            "https://i.imgur.com/QbxKOU5.png",
            "https://i.imgur.com/PT00ZP6.png",
            "https://i.imgur.com/z1lpb8s.png",
            "https://i.imgur.com/afnpmfU.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period",
                "start": "January 14 2021, 17:00",
                "end": "January 27 2021, 15:59",
                "banners": [
                    {
                        "title": "First Half",
                        "desc": "Featuring 5* Murakami Shiina, 4* Murakami Shiina, 4* Sakamoto Kaju",
                        "time": "January 14 2021, 17:00"
                    },
                    {
                        "title": "Second Half",
                        "desc": "Featuring 5* Katase Mayoi, 4* Takahashi Yuki",
                        "time": "January 16 2021, 0:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Otherworldly Manjuus and the Darkness Looming over Etowaria Summon",
            "異世界饅頭とエトワリアに迫る闇ピックアップ召喚",
            "Yuyushiki x Urara Meirochou x Koufuku Grafitti Event summon"
        ],
        "image": [
            "https://i.imgur.com/43mmgxV.png",
            "https://i.imgur.com/mmd82Yy.png",
            "https://i.imgur.com/PTzVudQ.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period",
                "start": "January 27 2021, 17:00",
                "end": "February 10 2021, 15:59",
                "banners": [
                    {
                        "title": "Fumio side",
                        "desc": "Featuring 5* Hasegawa Fumi, 4* Hasegawa Fumi",
                        "time": "January 27 2021, 17:00"
                    },
                    {
                        "title": "Nina side",
                        "desc": "Featuring 5* Natsume Nina, 4* Natsume Nina",
                        "time": "January 27 2021, 17:00"
                    },
                    {
                        "title": "Shiina side",
                        "desc": "Featuring 5* Shiina",
                        "time": "January 27 2021, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Yuyushiki & Urara Meirochou & Koufuku Grafiti Limited-time SUmmon",
            "ゆゆ式＆うらら迷路帖＆幸腹グラフィティ期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/TUeKAOV.png",
            "https://i.imgur.com/nEjElJT.png",
            "https://i.imgur.com/qVPJifk.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Yukari [Swimsuit], 5* Kon [Swimsuit], 5* Ryou [Swimsuit], 4* Nono [Halloween]",
                "start": "January 27 2021, 17:00",
                "end": "February 3 2021, 16:59",
                "info": "Also 4* and 3* characters from Yuyushiki and Urara Meirochou, 4* characters from Koufuku Grafitti",
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
            "3 Series Limited-time Summon",
            "3作品のキャラ期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/cARwZ1w.png",
            "https://i.imgur.com/ZHss1j7.png",
            "https://i.imgur.com/HHUYAtG.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Shiina [Valentine], 5* Hosono Harumi, 5* Miniwa Tsumiki, 4* Tamaki [Christmas], 4* Yumine [Swimsuit]",
                "start": "January 20 2021, 17:00",
                "end": "January 27 2021, 15:59",
                "info": "Also featuring 4* and 3* characters from Stella no Mahou and 4* characters from Acchi Kocchi",
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
            "Yuru Camp△ Random 5* Summon Ticket",
            "ゆるキャン△★5確定チケット付き！有償限定10回召喚",
            "240 Paid Gems for a 10x Summon + Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Part 1: Featuring 5* [Traveler of the Wasteland] Rin, 5* Nadeshiko [Swimsuit], 5* Aoi [Swimsuit], 5* Ena [Tanabata]",
                "start": "January 7 2021, 17:00",
                "end": "January 14 2021, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Part 2: Featuring 5* [Traveler of the Wasteland] Rin, 5* Nadeshiko [Swimsuit], 5* Aoi [Swimsuit], 5* Ena [Tanabata]",
                "start": "January 14 2021, 17:00",
                "end": "January 21 2021, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "January 7 2021, 17:00",
                "end": "January 21 2021, 23:59"
            },
            {
                "name": "Ticket Expiration (Part 2)",
                "start": "January 14 2021, 17:00",
                "end": "January 28 2021, 23:59"
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
                "start": "January 27 2021, 17:00",
                "end": "February 3 2021, 23:59",
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

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
                start: "March 31 2021, 16:00",
                end: "March 31 2021, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Witch of the Lamp Magical Toorun",
            "ランプの魔女 マジカルトオルン",
            "A-Channel Finale Event"
        ],
        "image": [
            "https://i.imgur.com/aBY0ath.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Event",
                "start": "March 16 2021, 12:00",
                "end": "March 31 2021, 15:59",
                "markers": [
                    {
                        "title": "Extra Chapter 1",
                        "time": "March 25 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "March 26 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "March 27 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "March 28 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "March 18 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "EX Quest",
                        "time": "March 22 2021, 17:00",
                        "type": "battle"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Missions",
                "start": "March 16 2021, 12:00",
                "end": "March 31 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "March 16 2021, 12:00",
                "end": "April 7 2021, 13:59"
            }
        ]
    },
     {
        "type": "Event",
        "title": [
            "Etowaria's Steamy Casefiles: The Ghost Cat Inn and the Hot Spring of Silver Vine",
            "エトワリア湯煙事件録-化猫旅館と木天蓼の湯-",
            "Hot Spring Event"
        ],
        "image": [
            "https://i.imgur.com/Ke9BSm0.png",
            "https://i.imgur.com/sRrmDoU.png",
            "https://i.imgur.com/yRWe3uK.png",
            "https://i.imgur.com/VlaPH0L.png",
            "https://i.imgur.com/ucQAvoX.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Event",
                "start": "March 31 2021, 17:00",
                "end": "April 14 2021, 16:59",
                "markers": [
                    {
                        "title": "Extra Chapter 1",
                        "time": "April 10 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "April 11 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "April 12 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "April 13 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "April 2 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "EX Quest",
                        "time": "April 7 2021, 17:00",
                        "type": "battle"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Missions",
                "start": "March 31 2021, 17:00",
                "end": "April 14 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "March 31 2021, 17:00",
                "end": "April 21 2021, 13:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Main Quest Part 2 Chapter 2 Special Missions",
            "メインクエスト第2部2章追加記念 期間限定ミッション"
        ],
        "image": [
            "match"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Period",
                "start": "March 15 2021, 17:00",
                "end": "March 31 2021, 23:59",
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Witch of the Lamp Magical Toorun Summon",
            "ランプの魔女 マジカルトオルンピックアップ召喚",
            "A-Channel Finale Event summon"
        ],
        "image": [
            "https://i.imgur.com/aBY0ath.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Event Summon: Featuring 5* Tooru",
                "start": "March 16 2021, 12:00",
                "end": "March 31 2021, 15:59",
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Etowaria's Steamy Casefiles: The Ghost Cat Inn and the Hot Spring of Silver Vine Summon",
            "エトワリア湯煙事件録-化猫旅館と木天蓼の湯-ピックアップ召喚",
            "Hot Spring Event summon"
        ],
        "image": [
            "https://i.imgur.com/Ke9BSm0.png",
            "https://i.imgur.com/sRrmDoU.png",
            "https://i.imgur.com/yRWe3uK.png",
            "https://i.imgur.com/VlaPH0L.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period",
                "start": "March 31 2021, 17:00",
                "end": "April 14 2021, 16:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5* Yuuri [Hot Spring], 5* Haruka [Hot Spring]",
                        "time": "March 31 2021, 17:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5* Hiroe [Hot Spring], 5* Hibari [Hot Spring]",
                        "time": "March 31 2021, 17:00"
                    }
                ],
                "extraPriority": 6
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
            "https://i.imgur.com/UVMeZqj.png",
            "https://i.imgur.com/wHHyKt9.png",
            "https://i.imgur.com/BAcyDLZ.png",
            "https://i.imgur.com/SMLi958.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Part 1: Featuring 5* Kurumi [Christmas], 5* Eiko [Sports Festival], 5* Hibiki [Valentine], 5* Claire [Halloween], 4* Eiko [Swimsuit]",
                "start": "April 2 2021, 17:00",
                "end": "April 9 2021, 16:59",
                "info": "Also 3* and 4* characters from Gakkou Gurashi! and Slow Start, and 4* characters from Anne Happy♪ and Harukana Receive",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "A-Channel Limited-time 5* Summon TIcket",
            "Aチャンネル★5確定チケット付き！有償限定10回召喚",
            "240 Paid Gems for a 10x Summon + Random 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period",
                "start": "March 16 2021, 12:00",
                "end": "March 23 2021, 16:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5* Tooru, 5* Tooru [Christmas], 5* Run, 5* Run [New Year]",
                        "time": "March 16 2021, 12:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5* Yuuko, 5* Yuuko [Christmas], 5* Yuuko [Swimsuit], 5* Nagi, 5* Yutaka [Maid]",
                        "time": "March 16 2021, 12:00"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "March 16 2021, 12:00",
                "end": "March 30 2021, 23:59",
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara Fantasia Severed Bonds Chapter 2 Limited-time SUmmon",
            "きららファンタジア断ち切られし絆第2部限定ピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/qxHmx7n.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Fennel [Part 2]",
                "start": "March 24 2021, 0:00",
                "end": "March 31 2021, 15:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kiniro Mosaic Limited-time 5* Summon Ticket",
            "きんいろモザイク★5選べるチケット付き！有償限定10回召喚",
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
                "start": "March 26 2021, 0:00",
                "end": "April 2 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "March 26 2021, 0:00",
                "end": "April 9 2021, 23:59"
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
        "priority": 1,
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
                "start": "March 24 2021, 0:00",
                "end": "March 31 2021, 15:59",
                "extraPriority": 3,
            },
            {
                "name": "Ticket Expiration",
                "start": "March 24 2021, 0:00",
                "end": "April 7 2021, 23:59",
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara Fantasia Limited-time Random 5* Summon Ticket",
            "きららファンタジア期間限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period: Featuring 5* Lamp [Swimsuit], 5* Lamp [Tanabata], 5* Clea [Doll's Festival], 5* Cork [Maid], 5* Archive [New Year]",
                "start": "March 24 2021, 0:00",
                "end": "March 31 2021, 15:59",
                "extraPriority": 3,
            },
            {
                "name": "Ticket Expiration",
                "start": "March 24 2021, 0:00",
                "end": "April 7 2021, 23:59",
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
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Yuuri [New Year], 5* Nene [Swimsuit], 5* Yasuna [New Year], 5* Sonya [Halloween]",
                "start": "April 2 2021, 0:00",
                "end": "April 10 2021, 23:59",
                "extraPriority": 4
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
            "Main Quest Part 1 Chapter 1~Epilogue Half Stamina Campaign",
            "メインクエスト第1部スタミナ半減キャンペーン",
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "March 15 2021, 17:00",
                "end": "March 31 2021, 15:59"
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
            "1200 Days Celebration Sale",
            "1200日記念お得なセット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Gem & Item Sets",
                "start": "March 24 2021, 0:00",
                "end": "April 6 2021, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "New OP Movie Celebration Gem Set",
            "アニメーション映像公開記念！星彩石2,000個セット販売！"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Gem Sets",
                "start": "March 16 2021, 0:00",
                "end": "March 31 2021, 15:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Main Quest Part 2 Chapter 2 Celebration Gem Set",
            "メインクエスト第2部2章追加記念！星彩石2,000個セット販売!"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Gem Sets",
                "start": "March 24 2021, 0:00",
                "end": "March 31 2021, 15:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Event Special Sale",
            "イベント開催記念特別セール！星彩石セット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Gem Sets",
                "start": "March 31 2021, 17:00",
                "end": "April 14 2021, 16:59"
            },
            {
                name: "Ticket Expiration",
                "start": "March 31 2021, 17:00",
                "end": "April 21 2021, 23:59"
            }
        ]
    }
];

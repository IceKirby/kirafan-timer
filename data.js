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
            "A-Channel Limited-time Summon",
            "Aチャンネル期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/u0MAehu.png",
            "https://i.imgur.com/Td6Wr2T.png",
            "https://i.imgur.com/ue2bu9S.png",
            "https://i.imgur.com/heRurYS.png",
            "https://i.imgur.com/nXcOM37.png",
            "https://i.imgur.com/QN4csuI.png"
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
                        "desc": "Featuring 5* Tooru [Christmas], 5* Yuuko [Swimsuit], 5* Nagi, 4* Tooru [Swimsuit], 4* Run [Christmas]",
                        "time": "March 16 2021, 12:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5* Run [New Year], 5* Yuuko [Christmas], 5* Yutaka [Maid], 4* Tooru [Swimsuit], 4* Run [Christmas]",
                        "time": "March 16 2021, 12:00"
                    }
                ],
                "extraPriority": 4,
                "info": "Also 3* and 4* characters from A-Channel"
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
            "New OP Movie Celebration Daily KiraKira Summon",
            "新OP公開記念！1日1回期間限定きらきら召喚・特装版",
            "40 Paid Gems once per day for 3 summons, all 4* or above",
            "Summon 6 times for a Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring characters from series that appear in the new OP Movie",
                "start": "March 16 2021, 0:00",
                "end": "March 23 2021, 23:59",
                "extraPriority": 4,
                "info": "Series included: Kill me Baby, Blend-S, Slow Start, Yuru Camp△, Comic Girls, K-ON!, Gochuumon wa Usagi Desu ka?, GA Geijutsuka Art Design Class and Machikado Mazoku"
            },
            {
                "name": "Ticket Expiration",
                "start": "March 16 2021, 0:00",
                "end": "March 30 2021, 23:59"
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
    }
];

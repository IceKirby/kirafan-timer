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
                start: "January 27 2022, 16:00",
                end: "January 27 2022, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "SNS Club and the Resurrected Demon Lord",
            "SNS部と復活の魔王",
            "Stella no Mahou Finale Event"
        ],
        "image": [
            "https://i.imgur.com/1WCy3pF.png",
            "https://i.imgur.com/wTzff7B.png",
            "https://i.imgur.com/9bs4Nsc.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "January 14 2022, 17:00",
                "end": "January 27 2022, 15:59",
                "extraPriority": 4,
                "markers": [
                    {
                        "title": "EX Quest",
                        "time": "January 18 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "January 16 2022, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "Extra Chapter 1",
                        "time": "January 21 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "January 22 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "January 23 2022, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "January 24 2022, 0:00",
                        "type": "story"
                    }
                ]
            },
            {
                "name": "Missions",
                "start": "January 14 2022, 17:00",
                "end": "January 27 2022, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "January 14 2022, 17:00",
                "end": "February 3 2022, 13:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Main Quest Part 2 Chapter 6 Missions",
            "メインクエスト第2部6章追加記念 期間限定ミッション"
        ],
        "image": [
            "https://i.imgur.com/RhfITA0.png"
        ],
        "column": 0,
        "priority": 31,
        "timers": [
            {
                "name": "Period",
                "start": "January 27 2022, 17:00",
                "end": "February 10 2022, 23:59",
                "extraPriority": 3
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Main Quest Part 2 Chapter 6 Limited Summon",
            "きららファンタジア断ち切られし絆第2部限定ピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/r5GdW8F.png",
            "https://i.imgur.com/HRhnG4g.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "January 27 2022, 17:00",
                "end": "February 10 2022, 15:59",
                "banners": [
                    {
                        "title": "Mio side",
                        "desc": "Featuring 5★ Mio [Part 2]",
                        "time": "January 27 2022, 17:00"
                    },
                    {
                        "title": "Media side",
                        "desc": "Featuring 5★ Media [Part 2]",
                        "time": "January 27 2022, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Stella no Mahou Paid Summon + Choosable 5★ Summon Ticket",
            "ステラのまほう★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Honda Tamaki, 5★ Tamaki [Sports Festival], 5★ Fujikawa Kayo, 5★ Shiina [Valentine], 5★ Murakami Shiina, 5★ Seki Ayame, 5★ Fuda Yumine, 5★ Iketani Nono, 5★ Nono [Maid]",
                "start": "January 14 2022, 17:00",
                "end": "January 21 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "January 14 2022, 17:00",
                "end": "January 28 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Stella no Mahou Limited-time Paid Summon + Choosable 5★ Summon Ticket",
            "ステラのまほう期間限定★5選べるチケット付き！有償限定10回召喚",
            "1,000 Paid Gems for a 10x Summon + 2x Choosable 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Tamaki [Sports Festival], 5★ Shiina [Valentine], 5★ Nono [Maid]",
                "start": "January 14 2022, 17:00",
                "end": "January 21 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "January 14 2022, 17:00",
                "end": "January 28 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara Fantasia Limited-time Paid Summon + Random 5★ Summon Ticket",
            "きららファンタジア期間限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Lamp [Swimsuit], 5★ Lamp [Tanabata], 5★ Clea [Doll's Festival], 5★ Cork [Maid], 5★ Archive [New Year], 5★ Sugar [Valentine], 5★ Sesame [Bridal], 5★ Salt [White Day], 5★ Ginger [Maid]",
                "start": "January 27 2022, 17:00",
                "end": "February 3 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "January 27 2022, 17:00",
                "end": "February 10 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "K-ON! Limited-time Paid Summon + Random 5★ Summon Ticket",
            "けいおん！期間限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Yui [Swimsuit], 5★ Mio [Valentine]",
                "start": "January 27 2022, 17:00",
                "end": "February 3 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "January 27 2022, 17:00",
                "end": "February 10 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Main Quest Part 2 Limited Paid Summon + Random 5★ Summon Ticket",
            "きららファンタジア第2部限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5★ Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Cocoa [Part 2], 5★ Chino [Part 2], 5★ Namiko-san [Part 2], 5★ Lilith [Part 2], 5★ Cardamom [Part 2], 5★ Fennel [Part 2]",
                "start": "January 22 2022, 0:00",
                "end": "January 27 2022, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "January 22 2022, 0:00",
                "end": "February 3 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Moon Element Limited-time Step-up/Paid Summon",
            "2つの召喚を同時開催！月属性のキャラクターを仲間にしよう！",
            "240 Paid Gems for a 10x Summon + Random 5★ Summon Ticket",
            "Random 5★ Summon Ticket on the 7th step"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5★ Aya [Valentine], 5★ Koume [Halloween], 5★ Hana [Halloween], 5★ Kumegawa Botan, 5★ Shamiko [Sports Festival], 5★ Konohata Mira, 5★ Sakura Ino, 5★ Midori Hemo",
                "start": "February 1 2022, 0:00",
                "end": "February 6 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "February 1 2022, 0:00",
                "end": "February 13 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "First Dream Choosable 5★ Summon Ticket",
            "★5選べるチケット付き！初夢有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5★ Summon Ticket + Post-Anniversary Voucher"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "First Half",
                "start": "January 1 2022, 0:00",
                "end": "January 8 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Second Half",
                "start": "January 9 2022, 0:00",
                "end": "January 17 2022, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "January 1 2022, 0:00",
                "end": "February 7 2022, 23:59"
            }
        ]
    },
    {
        type: "LoginDays",
        title: [
            "Slow Loop participation Login Bonus",
            "スローループ参戦決定記念ログインボーナス",
            "20 Gems on days the anime airs"
        ],
        image: "lamp",
        column: 2,
        priority: 15,
        timers: [
            {
                name: "Episode 2",
                date: "January 14 2022",
                days: 2
            },
            {
                name: "Episode 3",
                date: "January 21 2022",
                days: 2
            },
            {
                name: "Episode 4",
                date: "January 28 2022",
                days: 2
            },
            {
                name: "Episode 5",
                date: "February 4 2022",
                days: 2
            },
            {
                name: "Episode 6",
                date: "February 11 2022",
                days: 2
            },
            {
                name: "Episode 7",
                date: "February 18 2022",
                days: 2
            },
            {
                name: "Episode 8",
                date: "February 25 2022",
                days: 2
            },
            {
                name: "Episode 9",
                date: "March 4 2022",
                days: 2
            },
            {
                name: "Episode 10",
                date: "March 11 2022",
                days: 2
            },
            {
                name: "Episode 11",
                date: "March 18 2022",
                days: 2
            },
            {
                name: "Episode 12",
                date: "March 25 2022",
                days: 2
            }
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
                name: "Part 2 (Chapters 1~5)",
                "start": "January 22 2022, 0:00",
                "end": "January 27 2022, 15:59"
            },
            {
                name: "Part 1 (Chapters 1~Prologue, Normal Mode)",
                "start": "January 27 2022, 17:00",
                "end": "February 10 2022, 15:59"
            }
        ]
    },
    {
        "type": "WeekendBoss",
        "title": [
            "January Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        "image": "https://i.imgur.com/DiSEdXA.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "January 1 2022, 0:00",
                "end": "January 2 2022, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "January 8 2022, 0:00",
                "end": "January 9 2022, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "January 15 2022, 0:00",
                "end": "January 16 2022, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "January 22 2022, 0:00",
                "end": "January 23 2022, 23:59"
            },
            {
                "name": "Weekend 5",
                "start": "January 29 2022, 0:00",
                "end": "January 30 2022, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "January 1 2022, 0:00",
                "end": "February 4 2022, 23:59",
                "keepAfterFinished": "2 hours",
                "type": "normal"
            }
        ]
    },
    {
        "type": "WeekendBoss",
        "title": [
            "February Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        "image": "https://i.imgur.com/WiKO4gi.png",
        "column": 2,
        "priority": 13,
        "timers": [
            {
                "name": "Weekend 1",
                "start": "February 5 2022, 0:00",
                "end": "February 6 2022, 23:59"
            },
            {
                "name": "Weekend 2",
                "start": "February 12 2022, 0:00",
                "end": "February 13 2022, 23:59"
            },
            {
                "name": "Weekend 3",
                "start": "February 19 2022, 0:00",
                "end": "February 20 2022, 23:59"
            },
            {
                "name": "Weekend 4",
                "start": "February 26 2022, 0:00",
                "end": "February 27 2022, 23:59"
            },
            {
                "name": "Medal exchange period",
                "start": "February 5 2022, 0:00",
                "end": "March 4 2022, 23:59",
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
                "name": "1500 Days Celebration Gem & Item Sale",
                "start": "January 18 2022, 0:00",
                "end": "January 31 2022, 23:59"
            },
            {
                "name": "Main Quest Part 2 Chapter 6 Gem & Item Sets",
                "start": "January 27 2022, 17:00",
                "end": "February 10 2022, 15:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "4th ANNIVERSARY Post-Birthday Exchange Shop",
            "4th ANNIVERSARY後夜祭交換所",
            "Exchange Vouchers for items"
        ],
        "image": "cork",
        "column": 0,
        "priority": 29,
        "timers": [
            {
                "name": "Voucher Exchange Period",
                "start": "January 1 2022, 0:00",
                "end": "January 31 2022, 23:59"
            }
        ]
    },
    {
        "type": "Other",
        "title": [
            "1500 Days Celebration Login Bonus",
            "1500日記念ログインボーナス",
            "Log in on 10 days to receive up to 300 Starlight Stones."
        ],
        "image": "lamp",
        "column": 2,
        "priority": 15,
        "timers": [
            {
                "name": "Period",
                "start": "January 18 2022, 0:00",
                "end": "January 31 2022, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "1500 Days Celebration Paid Summon + Choosable 5★ Summon Ticket",
            "リリース1500日記念★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Stones for a 10x Summon + Choosable 5★ Summon Ticket + 4th Anniversary Post-Birthday Voucher"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Period",
                "start": "January 18 2022, 0:00",
                "end": "January 31 2022, 23:59"
            },
            {
                "name": "Ticket Expiration",
                "start": "January 18 2022, 0:00",
                "end": "February 7 2022, 23:59"
            }
        ]
    }
];

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
            "Author Quest addition",
            "Summon Renovation",
            "Version 1.20.1 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "January 15 2020, 14:00",
                end: "January 15 2020, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "New Year! Training Support Campaign",
            "新春！育成応援キャンペーン"
        ],
        "image": "leine",
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Farming & Melee Quest",
                "start": "January 5 2020, 0:00",
                "end": "January 15 2020, 13:59",
                "extraPriority": 3
            },
            {
                "name": "Event Shop",
                "start": "January 5 2020, 0:00",
                "end": "January 30 2020, 13:59",
                "markers": {
                    "Part 2": "January 20 2020, 0:00"
                }
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Outclub and the Roar of Steel Missions",
            "野クルと鋼鉄の咆哮",
            "Yuru Camp△ Author Quest missions"
        ],
        "image": [
            "https://i.imgur.com/vJwg2JW.png",
            "https://i.imgur.com/op3IMwl.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "January 15 2020, 17:00",
                "end": "January 30 2020, 23:59",
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "New Year! Training Support Campaign Part 2",
            "新春！育成応援キャンペーン 第2弾特別ミッション"
        ],
        "image": "leine",
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "January 20 2020, 0:00",
                "end": "January 30 2020, 23:59",
                "extraPriority": 1
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Outclub and the Roar of Steel Summon",
            "野クルと鋼鉄の咆哮ピックアップ召喚",
            "Yuru Camp△ Author Quest summon"
        ],
        "image": [
            "https://i.imgur.com/vJwg2JW.png",
            "https://i.imgur.com/op3IMwl.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Nadeshiko side: Featuring 5* Kagamihara Nadeshiko (Fire Mage)  ",
                "start": "January 15 2020, 17:00",
                "end": "January 30 2020, 13:59",
                "extraPriority": 6
            },
            {
                "name": "Chiaki side: Featuring 5* Oogaki Chiaki",
                "start": "January 15 2020, 17:00",
                "end": "January 30 2020, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Valentine 2018 & 2019 Limited-time Summon",
            "期間限定2018・2019バレンタインキャラクターピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/9rFfXW8.png",
            "https://i.imgur.com/W35JuvK.png",
            "https://i.imgur.com/FFFUcPW.png",
            "https://i.imgur.com/D1iC8DW.png",
            "https://i.imgur.com/KkUub4Q.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Aya [Valentine], 5* Shiina [Valentine], 5* Koume [Valentine], 5* Mio [Valentine], 4* Tsubame [Valentine]",
                "start": "January 24 2020, 17:00",
                "end": "February 7 2020, 16:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Yuru Camp△ Limited-time Summon",
            "ゆるキャン△ 期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/nPjhWTP.png",
            "https://i.imgur.com/CnJ2np3.png",
            "https://i.imgur.com/oFpr8Bu.png",
            "https://i.imgur.com/VxSkHbo.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Rin [Traveler of the Wasteland], 5* Nadeshiko [Swimsuit], 5* Kagamihara Nadeshiko (Water Warrior), 5* Inuyama Aoi",
                "start": "January 17 2020, 17:00",
                "end": "January 30 2020, 13:59",
                "info": "Also 4* Yuru Camp△ characters",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Gakkou Gurashi! Choosable 5* Ticket Summon",
            "がっこうぐらし！★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable Gakkou Gurashi! 5* Summon Tickets"
        ],
        "image": [
            "https://i.imgur.com/QhBlavY.png",
            "https://i.imgur.com/4yiDenc.png",
            "https://i.imgur.com/Y2GWaQG.png",
            "https://i.imgur.com/bzebk2I.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                start: "January 10 2020, 17:00",
                end: "January 17 2020, 16:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "January 10 2020, 17:00",
                end: "January 24 2020, 16:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Random 5* Summon Ticket by Magazine",
            "★5確定チケット引換券付き！有償限定10回召喚",
            "240 Paid Gems for 10x Summon + Voucher to exchange for a Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                start: "December 26 2019, 17:00",
                end: "January 10 2020, 16:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "December 26 2019, 17:00",
                end: "January 17 2020, 23:59"
            }
        ]
    },
    {
        type: "LoginDays",
        title: [
            "Koisuru Asteroid participation Login Bonus",
            "恋する小惑星参戦決定記念ログインボーナス",
            "20 Gems on days the anime airs"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Episode 1",
                date: "January 3 2020"
            },
            {
                name: "Episode 2",
                date: "January 10 2020"
            },
            {
                name: "Episode 3",
                date: "January 17 2020"
            },
            {
                name: "Episode 4",
                date: "January 24 2020"
            },
            {
                name: "Episode 5",
                date: "January 31 2020"
            },
            {
                name: "Episode 6",
                date: "February 7 2020"
            },
            {
                name: "Episode 7",
                date: "February 14 2020"
            },
            {
                name: "Episode 8",
                date: "February 21 2020"
            },
            {
                name: "Episode 9",
                date: "February 28 2020"
            },
            {
                name: "Episode 10",
                date: "March 6 2020"
            },
            {
                name: "Episode 11",
                date: "March 13 2020"
            },
            {
                name: "Episode 12",
                date: "March 20 2020"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Daily Quests Half Stamina Campaign",
            "曜日クエストスタミナ半減キャンペーン",
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "January 20 2020, 0:00",
                "end": "January 30 2020, 13:59"
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
        image: "https://i.imgur.com/yTMSpVc.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "January 4 2020, 0:00",
                end: "January 5 2020, 23:59"
            },
            {
                name: "Weekend 2",
                start: "January 11 2020, 0:00",
                end: "January 12 2020, 23:59"
            },
            {
                name: "Weekend 3",
                start: "January 18 2020, 0:00",
                end: "January 19 2020, 23:59"
            },
            {
                name: "Weekend 4",
                start: "January 25 2020, 0:00",
                end: "January 26 2020, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "January 4 2020, 0:00",
                end: "January 31 2020, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited New Year Room Decorations",
            "お正月限定のルームアイテム"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "January 1 2020, 0:00",
                end: "January 15 2020, 13:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "New Year Gem Sale",
            "お正月セール！お得な星彩石セット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "January 1 2020, 0:00",
                end: "January 15 2020, 13:59"
            }
        ]
    }
];

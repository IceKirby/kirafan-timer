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
            "Summon Renovation",
            "Version 2.0.2 update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "March 31 2020, 14:00",
                end: "March 31 2020, 15:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Heart-Throbbing Etowaria Academy",
            "どきどきエトワリア学園"
        ],
        "image": [
            "https://i.imgur.com/tdQX5oe.png",
            "https://i.imgur.com/RwFBq2F.png",
            "https://i.imgur.com/DcAgMP8.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "March 31 2020, 15:00",
                "end": "April 14 2020, 16:59",
                "markers": {
                    "Extra Chapter 1": "April 9 2020, 0:00",
                    "Extra Chapter 2": "April 10 2020, 0:00",
                    "Extra Chapter 3": "April 11 2020, 0:00",
                    "Extra Chapter 4": "April 12 2020, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "April 2 2020, 17:00",
                "end": "April 14 2020, 16:59"
            },
            {
                "name": "EX Quest",
                "start": "April 8 2020, 17:00",
                "end": "April 14 2020, 16:59"
            },
            {
                "name": "Event Shop",
                "start": "March 31 2020, 15:00",
                "end": "April 21 2020, 13:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Heart-Throbbing Etowaria Academy Missions",
            "どきどきエトワリア学園"
        ],
        "image": [
            "https://i.imgur.com/tdQX5oe.png",
            "https://i.imgur.com/RwFBq2F.png",
            "https://i.imgur.com/DcAgMP8.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "March 31 2020, 15:00",
                "end": "April 14 2020, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Heart-Throbbing Etowaria Academy Summon",
            "どきどきエトワリア学園ピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/tdQX5oe.png",
            "https://i.imgur.com/RwFBq2F.png",
            "https://i.imgur.com/DcAgMP8.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Shinobu side: Featuring 5* Oomiya Shinobu (Sun Warrior), 4* Oomiya Shinobu, 4* Komichi Aya",
                "start": "March 31 2020, 15:00",
                "end": "April 14 2020, 16:59",
                "extraPriority": 6
            },
            {
                "name": "Yuki side: Featuring 5* Takeya Yuki (Wind Alchemist), 4* Takeya Yuki, 4* Naoki Miki",
                "start": "March 31 2020, 15:00",
                "end": "April 14 2020, 16:59"
            },
            {
                "name": "Chiya side: Featuring 5* Chiya (Wind Mage), 4* Chiya, 4* Tatsumi Kon",
                "start": "March 31 2020, 15:00",
                "end": "April 14 2020, 16:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kanna Summon",
            "きららファンタジアピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/ZH0K3Ra.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Kanna",
                "start": "April 3 2020, 0:00",
                "end": "April 14 2020, 16:59",
                "extraPriority": 4
            }
        ]
    },
     {
        "type": "Gacha",
        "title": [
            "Three Completed Series Limited-time Summon",
            "完結3作品合同 期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/wfJtxjR.png",
            "https://i.imgur.com/mzEiDwf.png",
            "https://i.imgur.com/SlZClsO.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Aya [Swimsuit], 5* Yuki [Swimsuit], 5* Kon [Swimsuit]",
                "start": "April 8 2020, 17:00",
                "end": "April 16 2020, 16:59",
                "info": "Also 3★ and 4★ characters from Kiniro Mosaic, Gakkou Gurashi and Urara Meirochou",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Head Priest & Seven Sages Limited 5* Summon Ticket",
            "筆頭神官＆七賢者限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for 10x Summon + Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                start: "March 20 2020, 0:00",
                end: "March 31 2020, 13:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "March 20 2020, 0:00",
                end: "April 7 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Comics 1st Volume Celebration Summon",
            "コミカライズ第1巻発売記念★5確定チケット付き！有償限定10回召喚",
            "240 Paid Gems for 10x Summon + Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                start: "April 3 2020, 0:00",
                end: "April 16 2020, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "April 3 2020, 0:00",
                end: "April 23 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "800 Days Celebration Choosable 5* Summon Ticket",
            "リリース800日記念★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                start: "February 18 2020, 0:00",
                end: "March 2 2020, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "February 18 2020, 0:00",
                end: "March 19 2020, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Comics 1st Volume Release Login Bonus",
            "コミカライズ第1巻発売記念ログインボーナス",
            "Log in on 7 days for items"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "April 3 2020, 0:00",
                "end": "April 16 2020, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "800 Days Celebration Login Bonus",
            "800日記念ログインボーナス",
            "Log in on 10 days for up to 300 Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "February 18 2020, 0:00",
                "end": "March 2 2020, 23:59"
            }
        ]
    },
    {
        type: "LoginDays",
        title: [
            "Tamayomi participation Login Bonus",
            "球詠参戦決定記念ログインボーナス",
            "20 Gems on days the anime airs"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Episode 1",
                date: "April 1 2020",
                days: 2
            },
            {
                name: "Episode 2",
                date: "April 8 2020",
                days: 2
            },
            {
                name: "Episode 3",
                date: "April 15 2020",
                days: 2
            },
            {
                name: "Episode 4",
                date: "April 22 2020",
                days: 2
            },
            {
                name: "Episode 5",
                date: "April 29 2020",
                days: 2
            },
            {
                name: "Episode 6",
                date: "May 6 2020",
                days: 2
            },
            {
                name: "Episode 7",
                date: "May 13 2020",
                days: 2
            },
            {
                name: "Episode 8",
                date: "May 20 2020",
                days: 2
            },
            {
                name: "Episode 9",
                date: "May 27 2020",
                days: 2
            },
            {
                name: "Episode 10",
                date: "June 3 2020",
                days: 2
            },
            {
                name: "Episode 11",
                date: "June 10 2020",
                days: 2
            },
            {
                name: "Episode 12",
                date: "June 17 2020",
                days: 2
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
            "April Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/DgLc5yo.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "April 4 2020, 0:00",
                end: "April 5 2020, 23:59"
            },
            {
                name: "Weekend 2",
                start: "April 11 2020, 0:00",
                end: "April 12 2020, 23:59"
            },
            {
                name: "Weekend 3",
                start: "April 18 2020, 0:00",
                end: "April 19 2020, 23:59"
            },
            {
                name: "Weekend 4",
                start: "April 25 2020, 0:00",
                end: "April 26 2020, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "April 4 2020, 0:00",
                end: "May 1 2020, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Hinamatsuri Room Decorations",
            "ヒナ祭り限定のルームアイテム"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "February 28 2020, 17:00",
                end: "March 13 2020, 13:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "800 Days Celebration Special Gems Set",
            "800日記念お得な星彩石セット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "February 18 2020, 0:00",
                end: "March 2 2020, 23:59"
            }
        ]
    }
];

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
            "Version 1.19.2 update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "September 26 2019, 14:00",
                end: "September 26 2019, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Demon Girl in Another World and the Ancestue",
            "いせかいまぞくとごぜん像",
            "Machikado Mazoku event"
        ],
        "image": "https://i.imgur.com/WDuU277.png",
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "September 11 2019, 17:00",
                "end": "September 25 2019, 13:59",
                "markers": {
                    "Extra Chapter 1": "September 20 2019, 0:00",
                    "Extra Chapter 2": "September 21 2019, 0:00",
                    "Extra Chapter 3": "September 22 2019, 0:00",
                    "Extra Chapter 4": "September 23 2019, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "September 13 2019, 17:00",
                "end": "September 25 2019, 13:59"
            },
            {
                "name": "EX Quest",
                "start": "September 15 2019, 17:00",
                "end": "September 25 2019, 13:59"
            },
            {
                "name": "Event Shop",
                "start": "September 11 2019, 17:00",
                "end": "October 2 2019, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Salt's Greatest Transformation",
            "ソルト最大の変身",
            "Salt Mini-event"
        ],
        "image": "https://i.imgur.com/WOAHTR4.png",
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "September 14 2019, 0:00",
                "end": "September 19 2019, 23:59",
                "markers": {
                    "Chapter 2": "September 15 2019, 0:00",
                    "Chapter 3": "September 16 2019, 0:00",
                    "Chapter 4": "September 17 2019, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Challenge Quest",
                "start": "September 14 2019, 0:00",
                "end": "September 19 2019, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "September 14 2019, 0:00",
                "end": "September 26 2019, 23:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Kiniro Darkness Missions",
            "きんいろダークネス",
            "Kiniro Mosaic Author Quest missions"
        ],
        "image": [
            "https://i.imgur.com/Gzqyoiq.png",
            "https://i.imgur.com/GNgzSSD.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "August 27 2019, 17:00",
                "end": "September 10 2019, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Salt's Greatest Transformation Missions",
            "ソルト最大の変身",
            "Salt Mini-event missions"
        ],
        "image": "https://i.imgur.com/WOAHTR4.png",
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "September 14 2019, 0:00",
                "end": "September 19 2019, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Demon Girl in Another World and the Ancestue Missions",
            "いせかいまぞくとごぜん像",
            "Machikado Mazoku event missions"
        ],
        "image": "https://i.imgur.com/WDuU277.png",
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "September 11 2019, 17:00",
                "end": "September 25 2019, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Demon Girl in Another World and the Ancestue Summon",
            "いせかいまぞくとごぜん像",
            "Machikado Mazoku event summon"
        ],
        "image": [
            "https://i.imgur.com/WDuU277.png",
            "https://i.imgur.com/gQGpcSa.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "1st Half: Featuring 5* Yoshida Yuuko, 4* Chiyoda Momo, 4* Lilith, 4* Hinatsuki Mikan",
                "start": "September 11 2019, 17:00",
                "end": "September 26 2019, 13:59",
                "extraPriority": 6
            },
            {
                "name": "2nd Half: Featuring 5* Hiro, 4* Hiro, 4* Sae",
                "start": "September 13 2019, 0:00",
                "end": "September 26 2019, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Salt's Greatest Transformation Summon",
            "ソルト最大の変身",
            "Salt Mini-event summon"
        ],
        "image": "https://i.imgur.com/WOAHTR4.png",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Salt",
                "start": "September 14 2019, 0:00",
                "end": "September 26 2019, 13:59",
                "extraPriority": 5
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Hidamari Sketch Limited-time Summon",
            "ひだまりスケッチ 期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/2yRlWaF.png",
            "https://i.imgur.com/CdUcVWO.png",
            "https://i.imgur.com/qxoGJ8r.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Yuno, 5* Yuno [Christmas], 5* Miyako, 4* and 3* Hidamari Sketch characters",
                "start": "September 16 2019, 17:00",
                "end": "September 30 2019, 16:59",
                "extraPriority": 4
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Head Priestess and Seven Sages Limited-time Paid Summon",
            "筆頭神官＆七賢者限定★5確定チケット付き！有償限定10回召喚",
            "400 paid gems for a 10x Summon",
            "+ a Random 5* Summon Ticket (for Archive, Sugar, Ginger or Cesame)"
        ],
        image: [
            "https://i.imgur.com/M7IpkMv.png",
            "https://i.imgur.com/zucS6nO.png",
            "https://i.imgur.com/QA16URT.png",
            "https://i.imgur.com/tPbYDk4.png"
        ],
        column: 1,
        priority: 1,
        timers: [
            {
                name: "Summon Period",
                start: "September 14 2019, 0:00",
                end: "September 26 2019, 13:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "September 14 2019, 0:00",
                end: "October 3 2019, 23:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "600 Days Celebration Choosable 5* Ticket Summon",
            "リリース600日記念★5選べるチケット付き！有償限定10回召喚",
            "400 paid gems for a 10x Summon + a Choosable 5* Summon Ticket"
        ],
        image: "clea",
        column: 1,
        priority: 1,
        timers: [
            {
                name: "Summon Period",
                start: "August 2 2019, 0:00",
                end: "August 15 2019, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "August 2 2019, 0:00",
                end: "August 22 2019, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "600 Days Celebration Login Bonus",
            "600日記念ログインボーナス",
            "Login on 10 days for up to 300 gems"
        ],
        image: "kirara",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "August 2 2019, 0:00",
                end: "August 15 2019, 23:59",
                keepAfterFinished: "1 hours"
            }
        ]
    },
    {
        type: "LoginDays",
        title: [
            "Machikado Mazoku participation Login Bonus",
            "まちカドまぞく参戦決定記念ログインボーナス",
            "20 Gems on days the anime airs"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Episode 1",
                date: "July 11 2019"
            },
            {
                name: "Episode 2",
                date: "July 18 2019"
            },
            {
                name: "Episode 3",
                date: "July 25 2019"
            },
            {
                name: "Episode 4",
                date: "August 1 2019"
            },
            {
                name: "Episode 5",
                date: "August 8 2019"
            },
            {
                name: "Episode 6",
                date: "August 15 2019"
            },
            {
                name: "Episode 7",
                date: "August 22 2019"
            },
            {
                name: "Episode 8",
                date: "August 29 2019"
            },
            {
                name: "Episode 9",
                date: "September 5 2019"
            },
            {
                name: "Episode 10",
                date: "September 12 2019"
            },
            {
                name: "Episode 11",
                date: "September 19 2019"
            },
            {
                name: "Episode 12",
                date: "September 26 2019"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Author Quest Half Stamina Campaign",
            "作家クエスト消費スタミナ1/2キャンペーン"
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "For Author Quests",
                start: "August 15 2019, 0:00",
                end: "August 27 2019, 13:59",
                keepAfterFinished: "1 hours"
            }
        ]
    },
    {
        type: "WeekendBoss",
        title: [
            "August Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/SeyUKHM.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "August 3 2019, 0:00",
                end: "August 4 2019, 23:59"
            },
            {
                name: "Weekend 2",
                start: "August 10 2019, 0:00",
                end: "August 11 2019, 23:59"
            },
            {
                name: "Weekend 3",
                start: "August 17 2019, 0:00",
                end: "August 18 2019, 23:59"
            },
            {
                name: "Weekend 4",
                start: "August 24 2019, 0:00",
                end: "August 25 2019, 23:59"
            },
            {
                name: "Weekend 5",
                start: "August 31 2019, 0:00",
                end: "September 1 2019, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "August 3 2019, 0:00",
                end: "September 6 2019, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "WeekendBoss",
        title: [
            "September Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/CKdz6it.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "September 7 2019, 0:00",
                end: "September 8 2019, 23:59"
            },
            {
                name: "Weekend 2",
                start: "September 21 2019, 0:00",
                end: "September 22 2019, 23:59"
            },
            {
                name: "Weekend 3",
                start: "September 28 2019, 0:00",
                end: "September 29 2019, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "September 7 2019, 0:00",
                end: "October 4 2019, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Summer Room Decorations",
            "夏祭りを感じる！ルームアイテム"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Part 1 - Summer Festival Set",
                start: "July 24 2019, 17:00",
                end: "August 27 2019, 11:59"
            },
            {
                name: "Part 2 - Pirates Set",
                start: "August 8 2019, 17:00",
                end: "August 27 2019, 11:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Summer Vacation Gem Sale",
            "夏休み限定！星彩石2000個セット",
            "Discounted Gem Set prices"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Part 1",
                start: "July 24 2019, 17:00",
                end: "August 15 2019, 23:59"
            },
            {
                name: "Part 2",
                start: "August 8 2019, 17:00",
                end: "August 27 2019, 23:59"
            }
        ]
    }
];

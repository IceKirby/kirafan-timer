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
            "Author Quest Implementation"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "July 9 2020, 16:00",
                end: "July 9 2020, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "A Tanabata Promise",
            "七夕の約束",
            "Tanabata Event"
        ],
        "image": [
            "https://i.imgur.com/XCVhxSF.png",
            "https://i.imgur.com/dz2zeF3.png",
            "https://i.imgur.com/3SmHOFK.png",
            "https://i.imgur.com/5oEqTdp.png",
            "https://i.imgur.com/5K9AMlg.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "June 23 2020, 17:00",
                "end": "July 9 2020, 15:59",
                "markers": {
                    "Extra Chapter 1": "July 4 2020, 0:00",
                    "Extra Chapter 2": "July 5 2020, 0:00",
                    "Extra Chapter 3": "July 6 2020, 0:00",
                    "Extra Chapter 4": "July 7 2020, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "June 25 2020, 17:00",
                "end": "July 9 2020, 15:59"
            },
            {
                "name": "EX Quest",
                "start": "June 29 2020, 17:00",
                "end": "July 9 2020, 15:59"
            },
            {
                "name": "Event Shop",
                "start": "June 23 2020, 17:00",
                "end": "July 16 2020, 13:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "A Tanabata Promise Missions",
            "七夕の約束",
            "Tanabata Event missions"
        ],
        "image": [
            "https://i.imgur.com/XCVhxSF.png",
            "https://i.imgur.com/dz2zeF3.png",
            "https://i.imgur.com/3SmHOFK.png",
            "https://i.imgur.com/5oEqTdp.png",
            "https://i.imgur.com/5K9AMlg.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "June 23 2020, 17:00",
                "end": "July 9 2020, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Slow Tamers Missions",
            "スロウテイマーズ",
            "Slow Start Author Quest missions"
        ],
        "image": [
            "https://i.imgur.com/jNx7ZWQ.png",
            "https://i.imgur.com/gDDud3k.png",
            "https://i.imgur.com/MJjPOAQ.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "July 9 2020, 17:00",
                "end": "July 23 2020, 23:59",
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "A Tanabata Promise Limited-time Summon",
            "七夕の約束ピックアップ召喚",
            "Tanabata Event summon"
        ],
        "image": [
            "https://i.imgur.com/dz2zeF3.png",
            "https://i.imgur.com/3SmHOFK.png",
            "https://i.imgur.com/5oEqTdp.png",
            "https://i.imgur.com/5K9AMlg.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Part 1: Featuring 5* Lamp [Tanabata], 5* Kyouju [Tanabata]",
                "start": "June 23 2020, 17:00",
                "end": "July 9 2020, 15:59",
                "extraPriority": 6
            },
            {
                "name": "Part 2: Featuring 5* Ena [Tanabata], 5* Tsubasa [Tanabata]",
                "start": "June 27 2020, 0:00",
                "end": "July 9 2020, 15:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Slow Tamers Summon",
            "スロウテイマーズピックアップ召喚",
            "Slow Start Author Quest summon"
        ],
        "image": [
            "https://i.imgur.com/jNx7ZWQ.png",
            "https://i.imgur.com/gDDud3k.png",
            "https://i.imgur.com/MJjPOAQ.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Enami-Sensei Side: Featuring 5* Enami Kiyose",
                "start": "July 9 2020, 17:00",
                "end": "July 16 2020, 16:59",
                "extraPriority": 6
            },
            {
                "name": "Hana Side: Featuring 5* Ichinose Hana (Sun Knight)",
                "start": "July 11 2020, 0:00",
                "end": "July 16 2020, 16:59"
            },
            {
                "name": "Tamate Side: Featuring 5* Momochi Tamate (Sun Alchemist)",
                "start": "July 11 2020, 0:00",
                "end": "July 16 2020, 16:59"
            }
        ]
    },
     {
        "type": "Gacha",
        "title": [
            "Slow Start Limited-time Summon",
            "スロウスタート 期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/6xdYfJT.png",
            "https://i.imgur.com/hsVh1Qh.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Sengoku Kamuri, 5* Eiko [Sports Festival], 5* Momochi Tamate, 5* Shion [Doll's Festival], 4* Eiko [Swimsuit]",
                "start": "July 10 2020, 17:00",
                "end": "July 17 2020, 16:59",
                "info": "Also featuring 3* and 4* characters from Slow Start",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Manga Time Kirara Exhibition in Niigata Celebration Summon - First Half",
            "きらら展in新潟記念期間限定★5確定チケット付き！有償限定10回召喚・前半",
            "400 Paid Gems for a 10x Summon + Random Limited-time 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period: Featuring Limited-time characters from specific series",
                start: "July 4 2020, 0:00",
                end: "July 10 2020, 23:59",
                extraPriority: 4,
                info: "Limited-time characters from Hidamari Sketch, Yuyushiki, A-Channel, NEW GAME!, Kill me Baby, Blend-S, Slow Start, K-ON!, Anima Yell! and Machikado Mazoku"
            },
            {
                name: "Ticket Expiration",
                start: "July 4 2020, 0:00",
                end: "July 17 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara's Birthday Celebration Summons",
            "きららお誕生日記念★5確定召喚",
            "Get Random 5* Summon Ticket"
        ],
        "image": "kirara",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Step-up Summon: 5* Kirara [Manga ver.], 5* Lamp, 5* Lamp [Swimsuit], 5* Clea [Doll's Festival], 5* Polka, 5* Cork, 5* Cork [Maid], 5* Kanna, 5* Leine",
                start: "July 7 2020, 0:00",
                end: "July 9 2020, 23:59",
                extraPriority: 4,
                info: "Receive a Random 5* Summon Ticket on 7th step"
            },
            {
                name: "Paid Summon: 240 Paid Gems for a 10x Summon + a Random 5* Summon Ticket on 7th step",
                start: "July 7 2020, 0:00",
                end: "July 9 2020, 23:59"
            },
            {
                name: "Ticket Expiration",
                start: "July 7 2020, 0:00",
                end: "July 16 2020, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Kirara's Birthday Celebration Login Bonus",
            "きららお誕生日記念ログインボーナス",
            "Log in on 3 days for a Title and up to 2 Summon Tickets"
        ],
        image: "kirara",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "July 7 2020, 0:00",
                "end": "July 9 2020, 23:59",
                "extraPriority": 5
            }
        ]
    },
    {
        type: "Other",
        title: [
            "900 Days Celebration Login Bonus",
            "900日記念ログインボーナス",
            "Log in on 10 days for up to 300 Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "May 28 2020, 17:00",
                "end": "June 10 2020, 23:59"
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
            "July Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/FWWTNY0.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "July 4 2020, 0:00",
                end: "July 5 2020, 23:59"
            },
            {
                name: "Weekend 2",
                start: "July 11 2020, 0:00",
                end: "July 12 2020, 23:59"
            },
            {
                name: "Weekend 3",
                start: "July 18 2020, 0:00",
                end: "July 19 2020, 23:59"
            },
            {
                name: "Weekend 4",
                start: "July 25 2020, 0:00",
                end: "July 26 2020, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "July 4 2020, 0:00",
                end: "July 31 2020, 23:59",
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
            "Kirara's Birthday Celebration Sale",
            "きららお誕生日記念セール",
            "Purchase a Gem Set and get a Title"
        ],
        image: "kirara",
        column: 2,
        timers: [
             {
                name: "Period",
                "start": "July 7 2020, 0:00",
                "end": "July 9 2020, 23:59",
                "extraPriority": 4
            }
        ]
    }
];

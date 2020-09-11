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
            "Version 2.2.4 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "September 10 2020, 16:00",
                end: "September 10 2020, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Battle of Pirates -The Imprisoned Cheer and the Swimsuit Pirates-",
            "バトルオブパイレーツ -囚われのチアと水着海賊-",
            "Harukana Receive x Anima Yell Event"
        ],
        "image": [
            "https://i.imgur.com/hWSBzTq.png",
            "https://i.imgur.com/3uoHNm8.png",
            "https://i.imgur.com/LBqs8nS.png",
            "https://i.imgur.com/YLbbmH5.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "August 27 2020, 17:00",
                "end": "September 10 2020, 15:59",
                "markers": {
                    "Extra Chapter 1": "September 5 2020, 0:00",
                    "Extra Chapter 2": "September 6 2020, 0:00",
                    "Extra Chapter 3": "September 7 2020, 0:00",
                    "Extra Chapter 4": "September 8 2020, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "August 29 2020, 17:00",
                "end": "September 10 2020, 15:59"
            },
            {
                "name": "EX Quest",
                "start": "September 1 2020, 17:00",
                "end": "September 10 2020, 15:59"
            },
            {
                "name": "Event Shop",
                "start": "August 27 2020, 17:00",
                "end": "September 17 2020, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Operation: Love Love Travel",
            "ラブラブトラベル大作戦",
            "Acchi Kocchi Event"
        ],
        "image": [
            "https://i.imgur.com/I2ZWBH2.png",
            "https://i.imgur.com/mKTstzs.png",
            "https://i.imgur.com/6HebhMI.png",
            "https://i.imgur.com/0AnwVLl.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "September 10 2020, 17:00",
                "end": "September 29 2020, 15:59",
                "markers": {
                    "Extra Chapter 1": "September 19 2020, 0:00",
                    "Extra Chapter 2": "September 20 2020, 0:00",
                    "Extra Chapter 3": "September 21 2020, 0:00",
                    "Extra Chapter 4": "September 22 2020, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "September 12 2020, 17:00",
                "end": "September 29 2020, 15:59"
            },
            {
                "name": "EX Quest",
                "start": "September 16 2020, 17:00",
                "end": "September 29 2020, 15:59"
            },
            {
                "name": "Event Shop",
                "start": "September 10 2020, 17:00",
                "end": "October 6 2020, 13:59"
            }
        ]
    },
     {
        "type": "Mission",
        "title": [
            "Battle of Pirates -The Imprisoned Cheer and the Swimsuit Pirates- Missions",
            "バトルオブパイレーツ -囚われのチアと水着海賊-",
            "Harukana Receive x Anima Yell Event missions"
        ],
        "image": [
            "https://i.imgur.com/hWSBzTq.png",
            "https://i.imgur.com/3uoHNm8.png",
            "https://i.imgur.com/LBqs8nS.png",
            "https://i.imgur.com/YLbbmH5.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "August 27 2020, 17:00",
                "end": "September 10 2020, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Operation: Love Love Travel Missions",
            "ラブラブトラベル大作戦",
            "Acchi Kocchi Event missions"
        ],
        "image": [
            "https://i.imgur.com/I2ZWBH2.png",
            "https://i.imgur.com/mKTstzs.png",
            "https://i.imgur.com/6HebhMI.png",
            "https://i.imgur.com/0AnwVLl.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "September 10 2020, 17:00",
                "end": "September 29 2020, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Battle of Pirates -The Imprisoned Cheer and the Swimsuit Pirates- Summon",
            "バトルオブパイレーツ -囚われのチアと水着海賊-ピックアップ召喚",
            "Harukana Receive x Anima Yell Event summon"
        ],
        "image": [
            "https://i.imgur.com/hWSBzTq.png",
            "https://i.imgur.com/3uoHNm8.png",
            "https://i.imgur.com/LBqs8nS.png",
            "https://i.imgur.com/YLbbmH5.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Narumi side: Featuring 5* Tooi Narumi, 4* Tachibana Ayasa",
                "start": "August 27 2020, 17:00",
                "end": "September 10 2020, 15:59",
                "extraPriority": 6
            },
            {
                "name": "Uki side: Featuring 5* Sawatari Uki, 4* Sawatari Uki, 4* Inaba Towa",
                "start": "August 27 2020, 17:00",
                "end": "September 10 2020, 15:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Operation: Love Love Travel Summon",
            "ラブラブトラベル大作戦ピックアップ召喚",
            "Acchi Kocchi Event summon"
        ],
        "image": [
            "https://i.imgur.com/I2ZWBH2.png",
            "https://i.imgur.com/mKTstzs.png",
            "https://i.imgur.com/6HebhMI.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "First Half: Featuring 5* Miniwa Tsumiki, 4* Haruno Hime",
                "start": "September 10 2020, 17:00",
                "end": "September 29 2020, 15:59",
                "extraPriority": 6
            },
            {
                "name": "Second Half: Featuring 5* Tokura Eiko, 4* Tokura Eiko",
                "start": "September 12 2020, 0:00",
                "end": "September 29 2020, 15:59"
            }
        ]
    },
     {
        "type": "Gacha",
        "title": [
            "Slow Start Limited-time Summon",
            "スロウスタート期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/q2ysJH4.png",
            "https://i.imgur.com/jM0WuhZ.png",
            "https://i.imgur.com/4PM36MN.png",
            "https://i.imgur.com/UXVKI0Z.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Ichinose Hana (Sun Knight), 5* Momochi Tamate (Sun Alchemist), 5* Shion [Doll's Festival], 5* Enami Kiyose, 4* Eiko [Swimsuit]",
                "start": "September 12 2020, 17:00",
                "end": "September 18 2020, 16:59",
                "info": "Also 3* and 4* characters from Slow Start",
                "extraPriority": 4
            }
        ]
    },
     {
        "type": "Gacha",
        "title": [
            "Harukana Receive & Anima Yell! Limited-time Summon",
            "はるかなレシーブ＆アニマエール！期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/qZWYG4K.png",
            "https://i.imgur.com/qgj4X5a.png",
            "https://i.imgur.com/03XD0xi.png",
            "https://i.imgur.com/kTq8KjV.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Claire [Halloween], 5* Thomas Emily, 5* Hizume [Maid], 5* Kotetsu [Christmas]",
                "start": "August 28 2020, 17:00",
                "end": "September 4 2020, 16:59",
                "info": "Also 4* characters from Harukana Receive and Anima Yell!",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Harukana Receive Choosable 5* Ticket Summon",
            "はるかなレシーブ★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": ["clea"],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period",
                "start": "August 28 2020, 17:00",
                "end": "September 4 2020, 16:59",
                "extraPriority": 4
            },
            {
                name: "Ticket Expiration",
                "start": "August 28 2020, 17:00",
                "end": "September 11 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Anima Yell! Choosable 5* Ticket Summon",
            "アニマエール！★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": ["clea"],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period",
                "start": "August 28 2020, 17:00",
                "end": "September 4 2020, 16:59",
                "extraPriority": 4
            },
            {
                name: "Ticket Expiration",
                "start": "August 28 2020, 17:00",
                "end": "September 11 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Swimsuit 2019 Limited-time Step-up Summon",
            "期間限定2019水着復刻 おまけ付き10回召喚",
            "Get a Random 5* Summon Ticket on 7th step",
            "Up to 4 steps for free"
        ],
        "image": ["clea"],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Kurumi, 5* Nene [Swimsuit], 5* Maika [Swimsuit], 5* Aoi [Swimsuit], 5* Hana [Swimsuit], 5* Kaos [Swimsuit], 5* Yui [Swimsuit], 5* Chino [Swimsuit], 5* Lamp [Swimsuit]",
                "start": "August 12 2020, 17:00",
                "end": "August 27 2020, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Free 10x Summon (once per day)",
                "start": "August 12 2020, 17:00",
                "end": "August 15 2020, 23:59",
                "extraPriority": 1
            },
            {
                name: "Ticket Expiration",
                "start": "August 12 2020, 17:00",
                "end": "September 3 2020, 15:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "2018 & 2019 Swimsuit Choosable 5* Summon",
            "2018年＆2019年の水着★5キャラが選べる！有償限定10回召喚",
            "600 Paid Gems for a 10x + Choosable Past 5* Swimsuit Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period 1",
                "start": "July 29 2020, 17:00",
                "end": "August 12 2020, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Summon Period 2",
                "start": "August 12 2020, 17:00",
                "end": "August 27 2020, 15:59",
                "extraPriority": 4
            },
            {
                name: "Ticket Expiration",
                "start": "July 29 2020, 17:00",
                "end": "September 3 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "1000  Days Celebration 10x Random 5* Summon Ticket",
            "★5確定チケット引換券10枚付き！有償限定10回召喚",
            "1000 Paid Gems for a 10x Summon + 10x Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                "start": "September 5 2020, 0:00",
                "end": "September 18 2020, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                "start": "September 5 2020, 0:00",
                "end": "September 25 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "1000  Days Celebration Choosable 5* Summon Ticket",
            "リリース1000日記念★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                "start": "September 5 2020, 0:00",
                "end": "September 18 2020, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                "start": "September 5 2020, 0:00",
                "end": "September 25 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Daily Kira-Kira Summon",
            "1日1回きらきら召喚",
            "40 Paid Gems once per day for 3 summons, all 4* or above"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Period",
                "start": "August 2 2020, 0:00",
                "end": "August 8 2020, 23:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Manga Time Kirara Exhibition in Niigata Celebration Summon - Second Half",
            "きらら展in新潟記念期間限定★5確定チケット付き！有償限定10回召喚・後半",
            "400 Paid Gems for a 10x Summon + Random Limited-time 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period: Featuring Limited-time characters from specific series",
                start: "August 22 2020, 0:00",
                end: "August 28 2020, 23:59",
                extraPriority: 4,
                info: "Limited-time characters from Kiniro Mosaic, Gakkou Gurashi!, Stella no Mahou, Urara Meirochou, Sakura Trick, Yuru Camp△, Hanayamata, Comic Girls, Anne Happy♪, Harukana Receive, Gochuumon wa Usagi Desu Ka?, Koufuku Graffiti and Kirara Fantasia"
            },
            {
                name: "Ticket Expiration",
                start: "August 22 2020, 0:00",
                end: "September 4 2020, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "1000 Days Celebration Login Bonus",
            "1000日記念ログインボーナス",
            "Log in on 10 days for up to 300 Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "September 5 2020, 0:00",
                "end": "September 18 2020, 23:59"
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
            "Main Quest Half Stamina Campaign",
            "メインクエストスタミナ半減キャンペーン",
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "July 29 2020, 17:00",
                "end": "August 12 2020, 15:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Main Quest Chapters 1~7 (Hard Mode) Half Stamina Campaign",
            "1～7章ハードモード消費スタミナ1/2",
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "September 10 2020, 17:00",
                "end": "September 18 2020, 23:59"
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
        image: "https://i.imgur.com/uTmIULA.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "August 1 2020, 0:00",
                end: "August 2 2020, 23:59"
            },
            {
                name: "Weekend 2",
                start: "August 8 2020, 0:00",
                end: "August 9 2020, 23:59"
            },
            {
                name: "Weekend 3",
                start: "August 15 2020, 0:00",
                end: "August 16 2020, 23:59"
            },
            {
                name: "Weekend 4",
                start: "August 22 2020, 0:00",
                end: "August 23 2020, 23:59"
            },
            {
                name: "Weekend 5",
                start: "August 29 2020, 0:00",
                end: "August 30 2020, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "August 1 2020, 0:00",
                end: "September 4 2020, 23:59",
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
        image: "https://i.imgur.com/sVDXbrx.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "September 5 2020, 0:00",
                end: "September 6 2020, 23:59"
            },
            {
                name: "Weekend 2",
                start: "September 12 2020, 0:00",
                end: "September 13 2020, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "September 5 2020, 0:00",
                end: "October 2 2020, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Past Summer Room Decorations",
            "夏限定のルームアイテム"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "July 29 2020, 17:00",
                "end": "August 27 2020, 15:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "1000 Days Celebration Special Sales",
            "1000日記念セール"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Special Gem Sets",
                "start": "September 5 2020, 0:00",
                "end": "September 18 2020, 23:59"
            },
            {
                name: "Special Item Set",
                "start": "September 5 2020, 0:00",
                "end": "September 18 2020, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Acchi Kocchi Celebration Gem Set",
            "あっちこっち参戦記念！星彩石2,000個セット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Special Gem Set",
                "start": "September 10 2020, 17:00",
                "end": "September 29 2020, 15:59"
            }
        ]
    }
];

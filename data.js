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
                start: "December 26 2019, 14:00",
                end: "December 26 2019, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Hungry Christmas",
            "ハングリークリスマス",
            "Christmas 2019 Event"
        ],
        "image": [
            "https://i.imgur.com/AJVnStj.png",
            "https://i.imgur.com/hCSTeJo.png",
            "https://i.imgur.com/TvB1aSu.png",
            "https://i.imgur.com/sEI5hBn.png",
            "https://i.imgur.com/hQkqvyV.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "December 11 2019, 12:00",
                "end": "December 26 2019, 13:59",
                "markers": {
                    "Extra Chapter 1": "December 21 2019, 0:00",
                    "Extra Chapter 2": "December 22 2019, 0:00",
                    "Extra Chapter 3": "December 23 2019, 0:00",
                    "Extra Chapter 4": "December 24 2019, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "December 14 2019, 17:00",
                "end": "December 26 2019, 13:59"
            },
            {
                "name": "EX Quest",
                "start": "December 17 2019, 17:00",
                "end": "December 26 2019, 13:59"
            },
            {
                "name": "Event Shop",
                "start": "December 11 2019, 12:00",
                "end": "January 2 2020, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "New Year's Special Programme! \"It's a New Year, Etowaria\"",
            "年末年始特番！お正月だよエトワリア",
            "New Year 2020 Event"
        ],
        "image": [
            "https://i.imgur.com/8ISQ6wf.png",
            "https://i.imgur.com/PF2vaou.png",
            "https://i.imgur.com/ChOz6oV.png",
            "https://i.imgur.com/ipIxXUq.png",
            "https://i.imgur.com/vi7U6Be.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "December 26 2019, 17:00",
                "end": "January 14 2020, 13:59",
                "markers": {
                    "New Year": "January 1 2020, 0:00",
                    "Extra Chapter 1": "January 8 2020, 0:00",
                    "Extra Chapter 2": "January 9 2020, 0:00",
                    "Extra Chapter 3": "January 10 2020, 0:00",
                    "Extra Chapter 4": "January 11 2020, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "January 1 2020, 0:00",
                "end": "January 14 2020, 13:59"
            },
            {
                "name": "EX Quest",
                "start": "January 3 2020, 17:00",
                "end": "January 14 2020, 13:59"
            },
            {
                "name": "Event Shop",
                "start": "December 26 2019, 17:00",
                "end": "January 21 2020, 13:59",
                "markers": {
                    "Part 2": "January 1 2020, 0:00"
                }
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "New Year's Special Programme! \"It's a New Year, Etowaria\" Missions",
            "年末年始特番！お正月だよエトワリア",
            "New Year 2020 Event missions"
        ],
        "image": [
            "https://i.imgur.com/8ISQ6wf.png",
            "https://i.imgur.com/PF2vaou.png",
            "https://i.imgur.com/ChOz6oV.png",
            "https://i.imgur.com/ipIxXUq.png",
            "https://i.imgur.com/vi7U6Be.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "December 26 2019, 17:00",
                "end": "January 14 2020, 23:59",
                "markers": {
                    "Mission Set 2": "January 1 2020, 0:00"
                },
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Limited New Year Missions",
            "お正月限定！特別ミッション"
        ],
        "image": "match",
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "January 5 2020, 0:00",
                "end": "January 7 2020, 23:59",
                "extraPriority": 1
            },
            {
                "name": "Event Shop",
                "start": "January 5 2020, 0:00",
                "end": "January 30 2020, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "New Year's Special Programme! \"It's a New Year, Etowaria\" Summon",
            "年末年始特番！お正月だよエトワリアピックアップ召喚",
            "New Year 2020 Event summon"
        ],
        "image": [
            "https://i.imgur.com/PF2vaou.png",
            "https://i.imgur.com/ChOz6oV.png",
            "https://i.imgur.com/ipIxXUq.png",
            "https://i.imgur.com/vi7U6Be.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Part 1: Featuring 5* Yuuri [New Year], 5* Run [New Year]",
                "start": "December 26 2019, 17:00",
                "end": "January 15 2020, 13:59",
                "extraPriority": 6
            },
            {
                "name": "Part 2: Featuring 5* Alice [New Year], 5* Omi [New Year]",
                "start": "January 1 2020, 0:00",
                "end": "January 15 2020, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Daily Free 10x Summon by Magazine",
            "雑誌別１日１回無料10回召喚"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "First Half",
                start: "January 1 2020, 0:00",
                end: "January 4 2020, 23:59",
                extraPriority: 7,
                markers: {
                    "Manga Time Kirara & Miracle": "January 1 2020, 0:00",
                    "Manga Time Kirara Max": "January 2 2020, 0:00",
                    "Manga Time Kirara Forward": "January 3 2020, 0:00",
                    "Manga Time Kirara Carat": "January 4 2020, 0:00"
                }
            },
            {
                name: "Second Half",
                start: "January 8 2020, 0:00",
                end: "January 11 2020, 23:59",
                extraPriority: 7,
                markers: {
                    "Manga Time Kirara & Miracle": "January 8 2020, 0:00",
                    "Manga Time Kirara Max": "January 9 2020, 0:00",
                    "Manga Time Kirara Forward": "January 10 2020, 0:00",
                    "Manga Time Kirara Carat": "January 11 2020, 0:00"
                }
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "New Year 2018 & 2019 Limited Summon",
            "期間限定2018・2019お正月キャラクターピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/ntWpzyS.png",
            "https://i.imgur.com/WtUvYNP.png",
            "https://i.imgur.com/BeZ7O7J.png",
            "https://i.imgur.com/r7xRUmZ.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Isami [New Year], 5* Yasuna [New Year], 5* Kaho [New Year], 4* Momiji [New Year]",
                "start": "January 1 2020, 0:00",
                "end": "January 10 2020, 16:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "First Dream Summon",
            "★5＆★4選べるチケット付き！初夢有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5* and 4* Summon Tickets"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                start: "January 1 2020, 0:00",
                end: "January 15 2020, 13:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "January 1 2020, 0:00",
                end: "January 22 2020, 23:59"
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
        type: "Other",
        title: [
            "Year out, Year in Login Bonus",
            "ゆく年くる年ログインボーナス",
            "20 Free Gems per day, up to 10 days"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "December 26 2019, 17:00",
                end: "January 10 2020, 23:59",
                keepAfterFinished: "1 hours"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Otoshidama Login Bonus",
            "お年玉ログインボーナス",
            "Log in during New Year for 100 Free Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "January 1 2020, 0:00",
                end: "January 1 2020, 23:59",
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
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Main Quest & Author Quest Half Stamina Campaign",
            "メインクエスト＆作家クエストスタミナ半減キャンペーン",
        ],
        image: "match",
        column: 0,
        "priority": 2,
        timers: [
            {
                name: "Period",
                start: "December 4 2019, 0:00",
                end: "December 10 2019, 23:59"
            }
        ]
    },
    {
        type: "WeekendBoss",
        title: [
            "December Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/ZS04jT8.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "December 7 2019, 0:00",
                end: "December 8 2019, 23:59"
            },
            {
                name: "Weekend 2",
                start: "December 14 2019, 0:00",
                end: "December 15 2019, 23:59"
            },
            {
                name: "Weekend 3",
                start: "December 21 2019, 0:00",
                end: "December 22 2019, 23:59"
            },
            {
                name: "Weekend 4",
                start: "December 28 2019, 0:00",
                end: "December 29 2019, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "December 7 2019, 0:00",
                end: "January 3 2020, 23:59",
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
            "2020 Lucky Bag Item Set",
            "2020年福袋アイテムセット",
            "250 Gems for 10x Summon Tickets, 10x Golden Quest Keys and 10x Large Stamina Recovery Items"
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
    },
    {
        type: "Other",
        title: [
            "2nd Anniversary Celebration Gem Sale",
            "2周年記念特別セール！星彩石セット販売"
        ],
        image: "https://i.imgur.com/QyVo28T.png",
        column: 2,
        timers: [
            {
                name: "Discounted Gem Sets",
                start: "December 4 2019, 0:00",
                end: "December 26 2019, 23:59"
            },
            {
                name: "2000 Gems + Choosable 5* Ticket",
                start: "December 11 2019, 0:00",
                end: "December 26 2019, 23:59"
            },
            {
                name: "Ticket Expiration",
                start: "December 11 2019, 0:00",
                end: "January 2 2020, 23:59"
            }
        ]
    }
];

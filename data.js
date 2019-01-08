var timerData = [
    {
        type: "DailyQuest",
        title: "Daily Quests",
        priority: 10,
        days: {
            "sunday": { element: "Sun", image: "imgs/Attribute_Sun.png", short:"Sun" },
            "monday": { element: "Moon", image: "imgs/Attribute_Moon.png", short:"Mon" },
            "tuesday": { element: "Fire", image: "imgs/Attribute_Fire.png", short:"Tue" },
            "wednesday": { element: "Water", image: "imgs/Attribute_Water.png", short:"Wed" },
            "thursday": { element: "Wind", image: "imgs/Attribute_Wind.png", short:"Thu" },
            "friday": { element: "Gold", image: "imgs/Currency_gold_coin.png", short:"Fri" },
            "saturday": { element: "Earth", image: "imgs/Attribute_Earth.png", short:"Sat" }
        }
    },
    {
        type: "Maintenance",
        title: [
            "Maintenance",
            "Event Preparation"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "January 9 2019, 12:00",
                end: "January 9 2019, 13:30",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        type: "Event",
        title: [
            "Rerun - Outclub, the Northern Mountain and the First Camp",
            "復刻・野クルと北の山と初キャンプ△",
            "Yuru Camp Event"
        ],
        image: "https://i.imgur.com/zyfuYoI.png",
        column: 0,
        priority: 4,
        timers: [
            {
                name: "Main Scenario",
                start: "January 9 2019, 13:30",
                end: "January 23 2019, 13:59"
            },
            {
                name: "Extra Story 1",
                start: "January 12 2019, 0:00",
                end: "January 23 2019, 13:59"
            },
            {
                name: "Extra Story 2",
                start: "January 13 2019, 0:00",
                end: "January 23 2019, 13:59"
            },
            {
                name: "Extra Story 3",
                start: "January 14 2019, 0:00",
                end: "January 23 2019, 13:59"
            },
            {
                name: "Extra Story 4",
                start: "January 15 2019, 0:00",
                end: "January 23 2019, 13:59"
            },
            {
                name: "Boss Quest",
                start: "January 10 2019, 17:00",
                end: "January 23 2019, 13:59"
            },
            {
                name: "EX Quest",
                start: "January 11 2019, 17:00",
                end: "January 23 2019, 13:59"
            },
            {
                name: "Event Shop / Mystery Treasure Chest",
                start: "January 9 2019, 13:30",
                end: "January 30 2019, 13:59"
            }
        ]
    },
    {
        type: "Event",
        title: [
            "Creamate Big Meeting! New Year's Sugoroku Tournament",
            "クリエメイト大集合！お正月すごろく大会",
            "New Year Event"
        ],
        image: "https://i.imgur.com/yTrqSCz.png",
        column: 0,
        priority: 4,
        timers: [
            {
                name: "Preliminary Round",
                start: "December 27 2018, 16:00",
                end: "January 8 2019, 13:59"
            },
            {
                name: "End of Year Quests",
                start: "December 27 2018, 16:00",
                end: "December 31 2018, 23:59",
                info: "Do not give Event drops.",
                keepAfterFinished: "6 hours"
            },
            {
                name: "Main Battle",
                start: "January 1 2019, 0:00",
                end: "January 8 2019, 13:59"
            },
            {
                name: "Melee Quest",
                start: "January 3 2019, 17:00",
                end: "January 8 2019, 13:59"
            },
            {
                name: "Event Shop (Qualifying Round)",
                start: "December 27 2018, 16:00",
                end: "January 15 2019, 13:59"
            },
            {
                name: "Event Shop (Main Battle)",
                start: "January 1 2019, 0:00",
                end: "January 15 2019, 13:59"
            }
        ]
    },
    {
        type: "Mission",
        title: [
            "Outclub, the Northern Mountain and the First Camp Missions",
            "復刻・野クルと北の山と初キャンプ△",
            "Yuru Camp Event Missions"
        ],
        image: "https://i.imgur.com/zyfuYoI.png",
        column: 0,
        priority: 4,
        timers: [
            {
                name: "Mission Set ",
                start: "January 9 2019, 0:00",
                end: "January 16 2019, 23:59"
            }
        ]
    },
    {
        type: "Mission",
        title: [
            "Creamate Big Meeting! New Year's Sugoroku Tournament Missions",
            "クリエメイト大集合！お正月すごろく大会",
            "New Year Event Missions"
        ],
        image: "https://i.imgur.com/yTrqSCz.png",
        column: 0,
        priority: 4,
        timers: [
            {
                name: "End of Year Missions",
                start: "December 27 2018, 16:00",
                end: "December 31 2018, 23:59"
            },
            {
                name: "New Year Missions Set 1",
                start: "January 1 2019, 0:00",
                end: "January 8 2019, 23:59"
            },
            {
                name: "New Year Missions Set 2",
                start: "January 3 2019, 0:00",
                end: "January 8 2019, 23:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Outclub, the Northern Mountain and the First Camp 2019 Gacha",
            "野クルと北の山と初キャンプ△2019ピックアップ召喚",
            "Yuru Camp Event Gacha"
        ],
        image: "https://i.imgur.com/zyfuYoI.png",
        column: 1,
        timers: [
            {
                name: "Featuring 5* Nadeshiko, 4* Kotetsu, 4* Kana",
                start: "January 9 2019, 13:30",
                end: "January 23 2019, 16:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Limited Time New Year 2019 Gacha",
            "期間限定2019お正月キャラクターピックアップ召喚",
            "Featuring 5* Kaho [New Year], 5* Yasuna [New Year]"
        ],
        image: "https://i.imgur.com/wLsnIbm.png",
        column: 1,
        timers: [
            {
                name: "Featuring 5* Kaho [New Year], 5* Yasuna [New Year]",
                start: "December 27 2018, 16:00",
                end: "January 9 2019, 11:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "New Year 2018 Characters Summon",
            "期間限定2018お正月キャラクターピックアップ召喚",
            "Featuring Limited New Year characters"
        ],
        image: "https://i.imgur.com/V3nUlYA.png",
        column: 1,
        timers: [
            {
                name: "Featuring 5* Isami [New Year], 4* Momiji [New Year]",
                start: "January 1 2019, 0:00",
                end: "January 11 2019, 16:59",
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "First Dream Paid Summon",
            "★5&★4キャラクターが選べる！初夢有償限定10回召喚",
            "Do a summon with paid gems to receive Summon Tickets that allows you to choose a 4* and a 5* character"
        ],
        image: "clea",
        column: 1,
        timers: [
            {
                name: "Summon Period",
                start: "January 1 2019, 0:00",
                end: "January 9 2019, 11:59"
            },
            {
                name: "Ticket Expiration",
                start: "January 1 2019, 0:00",
                end: "January 16 2019, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Year In, Year Out Login Bonus",
            "年末年始ログインボーナスキャンペーン",
            "Log in for 11 days for 200 Gems and an Event Summon Ticket"
        ],
        image: "kirara",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "December 28 2018, 0:00",
                end: "January 9 2019, 23:59",
                keepAfterFinished: "6 hours"
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
        image: "https://i.imgur.com/WsYjDPc.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "January 5 2019, 0:00",
                end: "January 6 2019, 23:59"
            },
            {
                name: "Weekend 2",
                start: "January 12 2019, 0:00",
                end: "January 13 2019, 23:59"
            },
            {
                name: "Weekend 3",
                start: "January 19 2019, 0:00",
                end: "January 20 2019, 23:59"
            },
            {
                name: "Weekend 4",
                start: "January 26 2019, 0:00",
                end: "January 27 2019, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "January 5 2019, 0:00",
                end: "February 1 2019, 23:59",
                keepAfterFinished: "1 day",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited New Year Room Decorations",
            "New and Past New Year-themed items"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "December 27 2018, 16:00",
                end: "January 9 2019, 11:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "New Year Special Gem Sale",
            "1周年記念特別セール"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "December 27 2018, 16:00",
                end: "January 8 2019, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "2019 Lucky Bag Item Set",
            "2019年福袋アイテムセットを販売",
            "250 gems for 10x Summon Tickets, 10 Golden Clocks and 10 Golden Keys"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "January 1 2019, 0:00",
                end: "January 8 2019, 23:59"
            }
        ]
    }
    
];

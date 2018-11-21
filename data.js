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
            "Version 1.12.1 Update",
            "Event preparation"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "November 21 2018, 14:00",
                end: "November 21 2018, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        type: "Event",
        title: [
            "Is the Order a Rabbit in a Different World? Event",
            "異世界でもうさぎですか？",
            "Gochuumon wa Usagi Desu ka? Event"
        ],
        image: "https://i.imgur.com/AuJWu2C.png",
        column: 0,
        priority: 4,
        timers: [
            {
                name: "Main Scenario - First Half",
                start: "November 6 2018, 16:00",
                end: "November 21 2018, 13:59"
            },
            {
                name: "Main Scenario - Second Half",
                start: "November 9 2018, 17:00",
                end: "November 21 2018, 13:59"
            },
            {
                name: "Melee Quest",
                start: "November 13 2018, 17:00",
                end: "November 21 2018, 13:59"
            },
            {
                name: "Event Shop",
                start: "November 6 2018, 16:00",
                end: "November 28 2018, 13:59",
            }
        ]
    },
    {
        type: "Event",
        title: [
            "Yell for All",
            "Anima Yell! Event"
        ],
        image: "https://i.imgur.com/mN9ClJh.png",
        column: 0,
        priority: 5,
        timers: [
            {
                name: "Main Scenario",
                start: "November 21 2018, 17:00",
                end: "December 4 2018, 13:59"
            },
            {
                name: "Boss Quest",
                start: "November 21 2018, 17:00",
                end: "December 4 2018, 13:59"
            },
            {
                name: "Event Shop",
                start: "November 21 2018, 17:00",
                end: "December 11 2018, 13:59"
            }
        ]
    },
    {
        type: "Mission",
        title: [
            "Is the Order a Rabbit in a Different World? Missions",
            "異世界でもうさぎですか？",
            "Gochuumon wa Usagi Desu ka? Missions"
        ],
        image: "https://i.imgur.com/AuJWu2C.png",
        column: 0,
        priority: 4,
        timers: [
            {
                name: "Missions Set 1",
                start: "November 6 2018, 16:00",
                end: "November 21 2018, 23:59"
            },
            {
                name: "Missions Set 2",
                start: "November 9 2018, 0:00",
                end: "November 21 2018, 23:59"
            },
            {
                name: "Missions Set 3",
                start: "November 13 2018, 0:00",
                end: "November 21 2018, 23:59"
            }
        ]
    },
    {
        type: "Mission",
        title: [
            "Yell for All Missions",
            "Anima Yell! Missions"
        ],
        image: "https://i.imgur.com/mN9ClJh.png",
        column: 0,
        priority: 5,
        timers: [
            {
                name: "Missions Set 1",
                start: "November 21 2018, 17:00",
                end: "December 3 2018, 23:59"
            },
            {
                name: "Missions Set 2",
                start: "November 23 2018, 0:00",
                end: "December 3 2018, 23:59"
            },
            {
                name: "Missions Set 3",
                start: "November 25 2018, 0:00",
                end: "December 3 2018, 23:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Is the Order a Rabbit in a Different World? Gacha",
            "「異世界でもうさぎですか？」ピックアップ召喚",
            "Gochuumon wa Usagi Desu ka? Gacha"
        ],
        image: "https://i.imgur.com/AuJWu2C.png",
        column: 1,
        timers: [
            {
                name: "Cocoa Side: Featuring 5* Cocoa, 4* Chino",
                start: "November 6 2018, 16:00",
                end: "November 21 2018, 13:59"
            },
            {
                name: "Chino Side: Featuring 5* Chino, 4* Chino",
                start: "November 6 2018, 16:00",
                end: "November 21 2018, 13:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Yell for All Gacha",
            "Yell for Allピックアップ召喚",
            "Anima Yell! Gacha"
        ],
        image: "https://i.imgur.com/mN9ClJh.png",
        column: 1,
        timers: [
            {
                name: "Part 1: Featuring 5* Kohane, 4* Hizume, 4* Uki",
                start: "November 21 2018, 17:00",
                end: "December 4 2018, 13:59"
            },
            {
                name: "Part 2: Featuring 5* Tamate, 4* Yasuna, 4* Sonya",
                start: "November 25 2018, 0:00",
                end: "December 4 2018, 13:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "4 Series Selection gacha",
            "4作品個別セレクション召喚",
            "Featuring Hidamari Sketch, Gakkou Gurashi, New Game, K-ON"
        ],
        image: "https://i.imgur.com/rCxtmWu.png",
        column: 1,
        timers: [
            {
                name: "Hidamari Sketch Selection (5* Yuno, 5* Miyako)",
                start: "November 9 2018, 17:00",
                end: "November 16 2018, 16:59"
            },
            {
                name: "Gakkou Gurashi Selection (5* Yuki, 5* Kurumi, 5* Yuuri)",
                start: "November 9 2018, 17:00",
                end: "November 16 2018, 16:59"
            },
            {
                name: "New Game! Selection (5* Aoba, 5* Hifumi)",
                start: "November 16 2018, 17:00",
                end: "November 23 2018, 16:59"
            },
            {
                name: "K-ON! Selection (5* Yui, 5* Azusa)",
                start: "November 16 2018, 17:00",
                end: "November 23 2018, 16:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Guaranteed 5* Ticket Gacha",
            "★5確定チケット付き！有償限定10回召喚",
            "240 Paid Gems for a 10x Pull, once per player",
            "Receive a Guaranteed Random 5* Summon Ticket"
        ],
        image: "clea",
        column: 1,
        timers: [
            {
                name: "Gacha Period",
                start: "November 6 2018, 16:00",
                end: "November 21 2018, 13:59"
            },
            {
                name: "Ticket Expiration",
                start: "November 6 2018, 16:00",
                end: "November 28 2018, 23:59"
            }
        ]
    },
    {
        type: "LoginDays",
        title: [
            "Anima Yell! Login Bonus",
            "「アニマエール！」参戦決定記念ログインボーナス",
            "20 Gems on days the anime airs"
        ],
        image: "https://i.imgur.com/mN9ClJh.png",
        column: 2,
        keepAfterFinished: "1 day",
        timers: [
            {
                name: "Episode 6",
                date: "November 11 2018"
            },
            {
                name: "Episode 7",
                date: "November 18 2018"
            },
            {
                name: "Episode 8",
                date: "November 25 2018"
            },
            {
                name: "Episode 9",
                date: "December 2 2018"
            },
            {
                name: "Episode 10",
                date: "December 9 2018"
            },
            {
                name: "Episode 11",
                date: "December 16 2018"
            },
            {
                name: "Episode 12",
                date: "December 23 2018"
            }
        ]
    },
    {
        type: "WeekendBoss",
        title: [
            "November Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/v42ZDD7.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "November 3 2018, 0:00",
                end: "November 4 2018, 23:59"
            },
            {
                name: "Weekend 2",
                start: "November 10 2018, 0:00",
                end: "November 11 2018, 23:59"
            },
            {
                name: "Weekend 3",
                start: "November 17 2018, 0:00",
                end: "November 18 2018, 23:59"
            },
            {
                name: "Weekend 4",
                start: "November 24 2018, 0:00",
                end: "November 25 2018, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "November 3 2018, 0:00",
                end: "November 30 2018, 23:59",
                keepAfterFinished: "1 day",
                type: "normal"
            }
        ]
    }
];

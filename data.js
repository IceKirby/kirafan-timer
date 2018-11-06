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
            "Version 1.12.0 Update",
            "Event preparation"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "November 6 2018, 10:59",
                end: "November 6 2018, 16:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        type: "Event",
        title: [
            "Hibari, Rii-san and the Flower of Happiness",
            "ヒバリとりーさんと幸福の花",
            "Anne Happy x Gakkou Gurashi event"
        ],
        image: "https://i.imgur.com/2sar6kl.png",
        column: 0,
        priority: 4,
        timers: [
            {
                name: "Period",
                start: "October 25 2018, 17:00",
                end: "November 5 2018, 13:59"
            },
            {
                name: "Boss Quest",
                start: "October 27 2018, 17:00",
                end: "November 5 2018, 13:59"
            },
            {
                name: "EX Quest",
                start: "October 31 2018, 17:00",
                end: "November 5 2018, 13:59"
            },
            {
                name: "Event Shop",
                start: "October 25 2018, 17:00",
                end: "November 12 2018, 13:59"
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
        priority: 5,
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
        type: "Mission",
        title: [
            "Hibari, Rii-san and the Flower of Happiness missions",
            "ヒバリとりーさんと幸福の花",
            "Anne Happy x Gakkou Gurashi event missions"
        ],
        image: "https://i.imgur.com/2sar6kl.png",
        column: 0,
        priority: 5,
        timers: [
            {
                name: "Missions Set 1",
                start: "October 25 2018, 17:00",
                end: "November 5 2018, 23:59"
            },
            {
                name: "Missions Set 2",
                start: "October 29 2018, 0:00",
                end: "November 5 2018, 23:59"
            },
            {
                name: "Missions Set 3",
                start: "October 31 2018, 0:00",
                end: "November 5 2018, 23:59"
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
        priority: 5,
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
        type: "Gacha",
        title: [
            "Hibari, Rii-san and the Flower of Happiness gacha",
            "ヒバリとりーさんと幸福の花 ピックアップ召喚",
            "Anne Happy x Gakkou Gurashi event gacha"
        ],
        image: "https://i.imgur.com/2sar6kl.png",
        column: 1,
        timers: [
            {
                name: "Part 1: Featuring 5* Yuuri, 4* Yuuri, 4* Yuki, 4* Ena",
                start: "October 25 2018, 17:00",
                end: "November 6 2018, 10:59"
            },
            {
                name: "Part 2: Featuring 5* Hibari, 4* Hanako, 4* Botan",
                start: "October 29 2018, 0:00",
                end: "November 6 2018, 10:59"
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
            "3 Series Selection gacha",
            "3作品合同セレクション召喚",
            "Featuring Yuru Camp, Slow Start, Comic Girls"
        ],
        image: "https://i.imgur.com/zxgcsWj.png",
        column: 1,
        timers: [
            {
                name: "Featuring 5* Rin, 5* Hana, 5* Kamuri, 5* Kaos",
                start: "November 2 2018, 17:00",
                end: "November 9 2018, 16:59"
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
    },
    {
        type: "Other",
        title: [
            "Special Gem Sale",
            "お得な星彩石セット販売",
            "Discounted gem sets"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "October 6 2018, 17:00",
                end: "November 3 2018, 23:59",
                keepAfterFinished: "6 hours"
            }
        ]
    }
];

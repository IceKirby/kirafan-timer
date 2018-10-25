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
            "Main Quest Chapter 5 Hard mode",
            "Event preparation"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "October 25 2018, 14:00",
                end: "October 25 2018, 17:00",
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
        priority: 5,
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
            "Stile No.2 Open!",
            "復刻・スティーレ2号店オープン！",
            "Blend-S event [Revival]"
        ],
        image: "https://i.imgur.com/JNETw7X.png",
        column: 0,
        priority: 5,
        timers: [
            {
                name: "Period",
                start: "October 17 2018, 17:00",
                end: "October 24 2018, 13:59"
            },
            {
                name: "Boss Quest",
                start: "October 18 2018, 17:00",
                end: "October 24 2018, 13:59"
            },
            {
                name: "EX Quest",
                start: "October 19 2018, 17:00",
                end: "October 24 2018, 13:59"
            },
            {
                name: "New Story 1",
                start: "October 20 2018, 0:00",
                end: "October 24 2018, 13:59"
            },
            {
                name: "New Story 2",
                start: "October 21 2018, 0:00",
                end: "October 24 2018, 13:59"
            },
            {
                name: "New Story 3",
                start: "October 22 2018, 0:00",
                end: "October 24 2018, 13:59"
            },
            {
                name: "New Story 4",
                start: "October 23 2018, 0:00",
                end: "October 24 2018, 13:59"
            },
            {
                name: "Event Shop",
                start: "October 17 2018, 17:00",
                end: "October 31 2018, 13:59"
            }
        ]
    },
    {
        type: "Mission",
        title: [
            "Stile No.2 Open! missions",
            "復刻・スティーレ2号店オープン！",
            "Blend-S event missions"
        ],
        image: "https://i.imgur.com/JNETw7X.png",
        column: 0,
        priority: 5,
        timers: [
            {
                name: "Missions Set 1",
                start: "October 17 2018, 0:00",
                end: "October 24 2018, 23:59"
            },
            {
                name: "Missions Set 2",
                start: "October 18 2018, 0:00",
                end: "October 24 2018, 23:59"
            },
            {
                name: "Missions Set 3",
                start: "October 19 2018, 0:00",
                end: "October 24 2018, 23:59"
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
        type: "Gacha",
        title: [
            "Yuyushiki selection gacha",
            "ゆゆ式 期間限定特別セレクション召喚",
            "Featuring 5* Yuzuko, 5* Yuzuko [Swimsuit], 5* Yui, 5* Mom"
        ],
        image: "https://i.imgur.com/c9PQJT8.png",
        column: 1,
        timers: [
            {
                name: "Period",
                start: "October 10 2018, 17:00",
                end: "October 19 2018, 16:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Stile No.2 Open! Gacha",
            "スティーレ2号店オープン！ピックアップ召喚",
            "Blend-S event gacha"
        ],
        image: "https://i.imgur.com/JNETw7X.png",
        column: 1,
        timers: [
            {
                name: "Featuring 5* Mafuyu, 4* Hideri, 4* Sumi, 3* Hideri",
                start: "October 17 2018, 17:00",
                end: "October 25 2018, 13:59"
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
            "Blend-S selection gacha",
            "ブレンド・S 期間限定特別セレクション召喚",
            "Limited Blend-S gacha"
        ],
        image: "https://i.imgur.com/6qjLXQl.png",
        column: 1,
        timers: [
            {
                name: "Featuring 5* Maika, 5* Kaho [Swimsuit], 4* Maika [Hinamatsuri]",
                start: "October 19 2018, 17:00",
                end: "October 26 2018, 16:59",
                info: "Also featuring 4* Maika, 4* Kaho, 4* Mafuyu, 4* Miu"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Knight selection gacha",
            "ナイト限定キャラクター召喚",
            "Featuring 5* Yui (Yuyushiki), 5* Haruka (Harukana Receive), 5* Hanako"
        ],
        image: "https://i.imgur.com/BBOMe6G.png",
        column: 1,
        timers: [
            {
                name: "Period",
                start: "October 26 2018, 17:00",
                end: "November 2 2018, 16:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Choose your 5* gacha",
            "★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choose your 5* Summon Ticket"
        ],
        image: "clea",
        column: 1,
        timers: [
            {
                name: "Period",
                start: "October 6 2018, 17:00",
                end: "October 25 2018, 13:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Half Stamina Consumption campaign",
            "消費スタミナ1/2キャンペーン",
            "Main Quest and Daily Quests with half stamina cost",
            "Except for Prologue, Hard Mode and Key quests"
        ],
        image: "kirara",
        column: 0,
        priority: 6,
        timers: [
            {
                name: "Period",
                start: "October 6 2018, 0:00",
                end: "October 25 2018, 13:59",
                keepAfterFinished: "9 hours"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "300 days since release Login Bonus",
            "300日記念ログインボーナス",
            "Login for 10 days for up to 300 gems"
        ],
        image: "kirara",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "October 6 2018, 0:00",
                end: "October 17 2018, 23:59",
                keepAfterFinished: "12 hours"
            }
        ]
    },
    {
        type: "WeekendBoss",
        title: [
            "October Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/6yRPpl2.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "October 6 2018, 0:00",
                end: "October 7 2018, 23:59"
            },
            {
                name: "Weekend 2",
                start: "October 13 2018, 0:00",
                end: "October 14 2018, 23:59"
            },
            {
                name: "Weekend 3",
                start: "October 20 2018, 0:00",
                end: "October 21 2018, 23:59"
            },
            {
                name: "Weekend 4",
                start: "October 27 2018, 0:00",
                end: "October 28 2018, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "October 6 2018, 0:00",
                end: "November 2 2018, 23:59",
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

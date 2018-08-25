var timerData = [
    {
        type: "DailyQuest",
        title: "Daily Quests",
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
        timers: [
            {
                name: "Time",
                start: "August 15 2018, 14:00",
                end: "August 15 2018, 17:00",
                keepAfterFinished: "1 hour"
            }
        ]
    },
    {
        type: "Event",
        title: [
            "Beach Hut of the Year",
            "海の家オブザイヤー",
            "Summer event"
        ],
        image: "https://i.imgur.com/myGyoBh.png",
        column: 0,
        timers: [
            {
                name: "Period",
                start: "August 3 2018, 17:00",
                end: "August 30 2018, 11:59"
            },
            {
                name: "Boss Quest",
                start: "August 6 2018, 17:00",
                end: "August 30 2018, 11:59"
            },
            {
                name: "Event Shop",
                start: "August 3 2018, 17:00",
                end: "September 6 2018, 13:59"
            }
        ]
    },
    {
        type: "Event",
        title: [
            "Treasure Chest at the Bottom of the Sea",
            "海の底の玉手箱",
            "Summer event 2"
        ],
        image: "https://i.imgur.com/rHAePse.png",
        column: 0,
        timers: [
            {
                name: "Period",
                start: "August 15 2018, 17:00",
                end: "August 30 2018, 11:59"
            },
            {
                name: "Boss Quest",
                start: "August 17 2018, 17:00",
                end: "August 30 2018, 11:59"
            },
            {
                name: "EX Quest",
                start: "August 20 2018, 17:00",
                end: "August 30 2018, 11:59"
            },
            {
                name: "Event Shop / Treasure Chest Period",
                start: "August 15 2018, 17:00",
                end: "September 6 2018, 13:59"
            }
        ]
    },

    {
        type: "Gacha",
        title: [
            "Limited Swimsuit Gacha",
            "期間限定水着キャラクターピックアップ召喚",
            "Summer event Gacha"
        ],
        image: "https://i.imgur.com/myGyoBh.png",
        column: 1,
        timers: [
            {
                name: "Part 1 (Featuring 5* Yagami, 5* Kaho, 4* Eiko)",
                start: "July 31 2018, 17:00",
                end: "August 30 2018, 11:59",
                info: "Swimsuit versions"
            },
            {
                name: "Part 2 (Featuring 5* Yuki, 5* Yuzuko, 5* Aya, 4* Tooru)",
                start: "August 10 2018, 17:00",
                end: "August 30 2018, 11:59",
                info: "Swimsuit versions"
            },
            {
                name: "Part 3 (Featuring 5* Kon, 5* Shizuku, 5* Nadeshiko, 4* Yumine, 4* Kotone)",
                start: "August 17 2018, 17:00",
                end: "August 30 2018, 11:59",
                info: "Swimsuit versions"
            }
        ]
    },
    {
        type: "Mission",
        title: [
            "Treasure Chest at the Bottom of the Sea Missions",
            "海の底の玉手箱",
            "Summer event 2 Missions"
        ],
        image: "https://i.imgur.com/rHAePse.png",
        column: 1,
        timers: [
            {
                name: "Missions Set 1",
                start: "August 15 2018, 17:00",
                end: "August 30 2018, 11:59"
            },
            {
                name: "Missions Set 2",
                start: "August 17 2018, 0:00",
                end: "August 30 2018, 11:59"
            },
            {
                name: "Missions Set 3",
                start: "August 20 2018, 0:00",
                end: "August 30 2018, 11:59"
            }
        ]
    },
    {
        type: "Mission",
        title: [
            "Beach Hut of the Year Missions",
            "海の家オブザイヤー",
            "Summer event missions"
        ],
        image: "https://i.imgur.com/myGyoBh.png",
        column: 1,
        timers: [
            {
                name: "Missions Set 1",
                start: "August 3 2018, 17:00",
                end: "August 30 2018, 11:59"
            },
            {
                name: "Missions Set 2",
                start: "August 6 2018, 0:00",
                end: "August 30 2018, 11:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Daily Summer Scenarios",
            "A new story everyday during august",
            "Each week's stories have a limited reading period",
            "10 Gems for reading each story"
        ],
        image: "https://i.imgur.com/myGyoBh.png",
        column: 2,
        timers: [
            {
                name: "Week 1 (August 1st~7th) reading period",
                start: "August 1 2018, 0:00",
                end: "August 14 2018, 23:59",
                keepAfterFinished: "1 day"
            },
            {
                name: "Week 2 (August 8th~14th) reading period",
                start: "August 8 2018, 0:00",
                end: "August 21 2018, 23:59",
                keepAfterFinished: "1 day"
            },
            {
                name: "Week 3 (August 15th~21st) reading period",
                start: "August 15 2018, 0:00",
                end: "August 28 2018, 23:59",
                keepAfterFinished: "1 day"
            },
            {
                name: "Week 4 (August 22nd~28th) reading period",
                start: "August 22 2018, 0:00",
                end: "August 31 2018, 23:59",
                keepAfterFinished: "1 day"
            },
            {
                name: "Week 5 (August 29th~30th) reading period",
                start: "August 29 2018, 0:00",
                end: "August 31 2018, 23:59",
                keepAfterFinished: "1 day"
            }
        ]
    },
    {
        type: "LoginDays",
        title: [
            "Harukana Receive Login Bonus",
            "はるかなレシーブ」参戦決定記念ログインボーナス",
            "20 gems on days the anime airs"
        ],
        image: "https://i.imgur.com/MdUzdan.png",
        column: 2,
        keepAfterFinished: "1 day",
        timers: [
            {
                name: "Episode 5",
                date: "August 3 2018"
            },
            {
                name: "Episode 6",
                date: "August 10 2018"
            },
            {
                name: "Episode 7",
                date: "August 17 2018"
            },
            {
                name: "Episode 8",
                date: "August 24 2018"
            },
            {
                name: "Episode 9",
                date: "August 31 2018"
            },
            {
                name: "Episode 10",
                date: "September 7 2018"
            },
            {
                name: "Episode 11",
                date: "September 14 2018"
            },
            {
                name: "Episode 12",
                date: "September 21 2018"
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
        image: "https://i.imgur.com/V46mVPf.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "August 4 2018, 0:00",
                end: "August 5 2018, 23:59"
            },
            {
                name: "Weekend 2",
                start: "August 11 2018, 0:00",
                end: "August 12 2018, 23:59"
            },
            {
                name: "Weekend 3",
                start: "August 18 2018, 0:00",
                end: "August 19 2018, 23:59"
            },
            {
                name: "Weekend 4",
                start: "August 25 2018, 0:00",
                end: "August 26 2018, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "August 4 2018, 0:00",
                end: "August 31 2018, 23:59",
                keepAfterFinished: "1 day",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Summer Vacation Limited Deal",
            "2000 Gems (817 Paid + 1183 Free) for 9800 Yen",
            "Can only be purchased once per player"
        ],
        image: "https://i.imgur.com/myGyoBh.png",
        column: 2,
        timers: [
            {
                name: "2000 Gems (817 Paid + 1183 Free) for 9800 Yen",
                start: "July 31 2018, 17:00",
                end: "August 31 2018, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Room Decoration items",
            "Summer-themed items"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "July 31 2018, 17:00",
                end: "August 30 2018, 11:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Normal Shop with increased exchange limits",
            "Some items will have doubled stock during the period"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "August 1 2018, 0:00",
                end: "August 30 2018, 11:59"
            }
        ]
    }
];

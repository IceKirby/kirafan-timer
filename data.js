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
            "Version 1.13.0 Update",
            "Event Preparation"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "December 10 2018, 11:00",
                end: "December 10 2018, 16:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        type: "Event",
        title: [
            "Etowaria's Black Christmas",
            "エトワリアのブラック・クリスマス",
            "Christmas 2018 Event"
        ],
        image: "https://i.imgur.com/6coJg10.png",
        column: 0,
        priority: 5,
        timers: [
            {
                name: "Main Scenario",
                start: "December 11 2018, 12:00",
                end: "December 26 2018, 13:59"
            },
            {
                name: "Boss Quest",
                start: "December 14 2018, 17:00",
                end: "December 26 2018, 13:59"
            },
            {
                name: "EX Quest",
                start: "December 17 2018, 17:00",
                end: "December 26 2018, 13:59"
            },
            {
                name: "Event Shop",
                start: "December 11 2018, 12:00",
                end: "January 2 2019, 13:59"
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
        priority: 4,
        timers: [
            {
                name: "Main Scenario",
                start: "November 21 2018, 17:00",
                end: "December 4 2018, 13:59"
            },
            {
                name: "Material Gathering Quest",
                start: "November 26 2018, 17:00",
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
        type: "Missions",
        title: [
            "Etowaria's Black Christmas missions",
            "エトワリアのブラック・クリスマス",
            "Christmas 2018 Event missions"
        ],
        image: "https://i.imgur.com/6coJg10.png",
        column: 0,
        priority: 5,
        timers: [
            {
                name: "Missions Set 1",
                start: "December 11 2018, 0:00",
                end: "December 26 2018, 23:59"
            },
            {
                name: "Missions Set 2",
                start: "December 14 2018, 0:00",
                end: "December 26 2018, 23:59"
            },
            {
                name: "Missions Set 3",
                start: "December 17 2018, 0:00",
                end: "December 26 2018, 23:59"
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
                start: "November 26 2018, 0:00",
                end: "December 3 2018, 23:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Limited Time Christmas 2018 Gacha",
            "期間限定2018クリスマスキャラクターピックアップ召喚",
            "Featuring Christmas version of Yuno, Merry, Tooru, Hifumi"
        ],
        image: "https://i.imgur.com/ano5PKN.png",
        column: 1,
        timers: [
            {
                name: "Part 1: Featuring 5* Yuno [Christmas], 5* Merry [Christmas]",
                start: "December 11 2018, 0:00",
                end: "December 27 2018, 10:59"
            },
            {
                name: "Part 2: Featuring 5* Tooru [Christmas], 5* Hifumi [Christmas]",
                start: "December 18 2018, 0:00",
                end: "December 27 2018, 10:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "2017 Christmas Characters Summon",
            "期間限定2017クリスマスキャラクターピックアップ召喚",
            "Featuring Limited Christmas characters"
        ],
        image: "https://i.imgur.com/y4Pml8M.png",
        column: 1,
        timers: [
            {
                name: "Featuring 5* Yuuko, 5* Alice, 5* Hajime, 5* Chiya, 4* Run, 4* Tamaki",
                start: "November 30 2018, 17:00",
                end: "December 10 2018, 23:59",
                info: "All in their limited Christmas version"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Daily Free Summon",
            "毎日1回10回召喚無料",
            "One free 10-pull Summon per day"
        ],
        image: "clea",
        column: 1,
        timers: [
            {
                name: "Period",
                start: "December 11 2018, 0:00",
                end: "December 17 2018, 23:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Choose your 5* Summon Ticket",
            "★5選べるチケット付き！有償限定10回召喚",
            "Do a 400 paid gems pull and receive a 5* Selection Summon Ticket"
        ],
        image: "clea",
        column: 1,
        timers: [
            {
                name: "Part 1",
                start: "December 4 2018, 14:00",
                end: "December 27 2018, 23:59"
            },
            {
                name: "Part 2",
                start: "December 11 2018, 0:00",
                end: "December 27 2018, 23:59"
            },
            {
                name: "Ticket Expiration",
                start: "December 4 2018, 14:00",
                end: "January 3 2019, 23:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Choose your Limited Character Summon Ticket",
            "期間限定キャラクターが選べるエクストラコールチケット",
            "Use paid gems to receive a Limited Character Selection Summon Ticket"
        ],
        image: "clea",
        column: 1,
        timers: [
            {
                name: "Part 1",
                start: "December 11 2018, 0:00",
                end: "December 11 2018, 23:59"
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
        type: "Other",
        title: [
            "1 Year Anniversary Celebration Login Bonus",
            "1周年記念ログインボーナス",
            "Log in everyday to receive up to 400 gems"
        ],
        image: "kirara",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "December 11 2018, 0:00",
                end: "December 25 2018, 23:59"
            }
        ]
    },
    {
        type: "Mission",
        title: [
            "1 Year Anniversary Countdown Missions",
            "1周年直前ミッション"
        ],
        image: "kirara",
        column: 0,
        priority: 0,
        timers: [
            {
                name: "Period",
                start: "December 4 2018, 0:00",
                end: "December 10 2018, 23:59"
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
        type: "WeekendBoss",
        title: [
            "December Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/VYErOmM.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "December 1 2018, 0:00",
                end: "December 2 2018, 23:59"
            },
            {
                name: "Weekend 2",
                start: "December 8 2018, 0:00",
                end: "December 9 2018, 23:59"
            },
            {
                name: "Weekend 3",
                start: "December 15 2018, 0:00",
                end: "December 16 2018, 23:59"
            },
            {
                name: "Weekend 4",
                start: "December 22 2018, 0:00",
                end: "December 23 2018, 23:59"
            },
            {
                name: "Weekend 5",
                start: "December 29 2018, 0:00",
                end: "December 30 2018, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "December 1 2018, 0:00",
                end: "January 4 2019, 23:59",
                keepAfterFinished: "1 day",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Christmas Room Decorations",
            "New and Past Christmas-themed items"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "December 11 2018, 0:00",
                end: "December 27 2018, 10:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "1 Year Anniversary Special Sale",
            "1周年記念特別セール"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "December 4 2018, 17:00",
                end: "December 26 2018, 23:59"
            }
        ]
    }
];

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
            "Main Quest update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "October 10 2018, 12:00",
                end: "October 10 2018, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        type: "Event",
        title: [
            "The Great Detective Coronett: Yuu's Tragedy",
            "名探偵コロネット ユーの悲劇",
            "A-Channel x Slow Start event"
        ],
        image: "https://i.imgur.com/e6Gpfki.png",
        column: 0,
        priority: 4,
        timers: [
            {
                name: "Period",
                start: "September 12 2018, 17:00",
                end: "September 26 2018, 13:59"
            },
            {
                name: "Boss Quest",
                start: "September 14 2018, 17:00",
                end: "September 26 2018, 13:59"
            },
            {
                name: "EX Quest",
                start: "September 18 2018, 17:00",
                end: "September 26 2018, 13:59"
            },
            {
                name: "Event Shop",
                start: "September 12 2018, 17:00",
                end: "October 3 2018, 13:59"
            }
        ]
    },
     {
        type: "Event",
        title: [
            "Miyako and the Cat's Song",
            "宮子とねこのうた",
            "Hidamari Sketch x K-ON! event"
        ],
        image: "https://i.imgur.com/ykqK6EQ.png",
        column: 0,
        priority: 5,
        timers: [
            {
                name: "Period",
                start: "September 27 2018, 17:00",
                end: "October 9 2018, 13:59"
            },
            {
                name: "Boss Quest",
                start: "October 1 2018, 17:00",
                end: "October 9 2018, 13:59"
            },
            /*{
                name: "EX Quest",
                start: "September 27 2018, 17:00",
                end: "October 9 2018, 13:59"
            },*/
            {
                name: "Event Shop",
                start: "September 27 2018, 17:00",
                end: "October 16 2018, 13:59"
            }
        ]
    },
    {
        type: "Mission",
        title: [
            "Miyako and the Cat's Song missions",
            "宮子とねこのうた",
            "Hidamari Sketch x K-ON! event missions"
        ],
        image: "https://i.imgur.com/ykqK6EQ.png",
        column: 0,
        priority: 5,
        timers: [
            {
                name: "Missions Set 1",
                start: "September 27 2018, 17:00",
                end: "October 9 2018, 23:59"
            },
            {
                name: "Missions Set 2",
                start: "September 29 2018, 0:00",
                end: "October 9 2018, 23:59"
            },
            {
                name: "Missions Set 3",
                start: "October 1 2018, 0:00",
                end: "October 9 2018, 23:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Miyako and the Cat's Song gacha",
            "宮子とねこのうた",
            "Hidamari Sketch x K-ON! event gacha"
        ],
        image: "https://i.imgur.com/ykqK6EQ.png",
        column: 1,
        timers: [
            {
                name: "Part 1 (Rate-up for 5* Miyako, 4* Miyako, 4* Yuno)",
                start: "September 27 2018, 17:00",
                end: "October 10 2018, 11:59"
            },
            {
                name: "Part 2 (Rate-up for 5* Azusa, 4* Azusa, 4* Mio, 4* Ritsu, 4* Tsumugi)",
                start: "October 2 2018, 0:00",
                end: "October 10 2018, 11:59"
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
        type: "WeekendBoss",
        title: [
            "September Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/Zi7VsQe.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "September 1 2018, 0:00",
                end: "September 2 2018, 23:59"
            },
            {
                name: "Weekend 2",
                start: "September 8 2018, 0:00",
                end: "September 9 2018, 23:59"
            },
            {
                name: "Weekend 3",
                start: "September 15 2018, 0:00",
                end: "September 16 2018, 23:59"
            },
            {
                name: "Weekend 4",
                start: "September 22 2018, 0:00",
                end: "September 23 2018, 23:59"
            },
            {
                name: "Weekend 5",
                start: "September 29 2018, 0:00",
                end: "September 30 2018, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "September 1 2018, 0:00",
                end: "October 5 2018, 23:59",
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

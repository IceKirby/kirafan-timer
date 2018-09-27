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
            "Version 1.11.0 update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "September 27 2018, 12:00",
                end: "September 27 2018, 17:00",
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
            "The Great Detective Coronett: Yuu's Tragedy missions",
            "名探偵コロネット ユーの悲劇",
            "A-Channel x Slow Start event missions"
        ],
        image: "https://i.imgur.com/e6Gpfki.png",
        column: 0,
        priority: 5,
        timers: [
            {
                name: "Missions Set 1",
                start: "September 12 2018, 17:00",
                end: "September 26 2018, 23:59"
            },
            {
                name: "Missions Set 2",
                start: "September 14 2018, 0:00",
                end: "September 26 2018, 23:59"
            },
            {
                name: "Missions Set 3",
                start: "September 18 2018, 0:00",
                end: "September 26 2018, 23:59"
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
            "The Great Detective Coronett: Yuu's Tragedy gacha",
            "名探偵コロネット ユーの悲劇",
            "A-Channel x Slow Start event gacha"
        ],
        image: "https://i.imgur.com/e6Gpfki.png",
        column: 1,
        timers: [
            {
                name: "Part 1 (Rate-up for 5* Kamuri, 4* Kamuri, 4* Eiko, 4* Tamate)",
                start: "September 12 2018, 17:00",
                end: "September 27 2018, 11:59"
            },
            {
                name: "Part 2 (Featuring 5* Yuuko, 4* Yuuko, 4* Hotaru)",
                start: "September 17 2018, 0:00",
                end: "September 27 2018, 11:59"
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
            "Series getting new Unique Weapons Gacha",
            "専用ぶき追加作品セレクション召喚",
            "Featuring 5* Yuzuko, 5* Tooru, 5* Maika"
        ],
        image: "https://i.imgur.com/NW4ciTX.png",
        column: 1,
        timers: [
            {
                name: "Period",
                start: "September 28 2018, 17:00",
                end: "October 6 2018, 16:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "5* Summon Ticket gacha",
            "★5確定チケット付き！有償限定10回召喚",
            "240 Paid Gems for a 10x Summon + 5* Summon Ticket"
        ],
        image: "clea",
        column: 1,
        timers: [
            {
                name: "Period",
                start: "September 21 2018, 17:00",
                end: "October 6 2018, 13:59"
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
    }
];

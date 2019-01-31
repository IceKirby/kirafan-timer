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
            "Summon Renovation"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "January 31 2019, 15:30",
                end: "January 31 2019, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        type: "Event",
        title: [
            "Chocolate Panic",
            "チョコレートパニック",
            "Valentine 2019 Event"
        ],
        image: "https://i.imgur.com/RTHrVJB.png",
        column: 0,
        priority: 4,
        timers: [
            {
                name: "Main Scenario",
                start: "January 31 2019, 17:00",
                end: "February 15 2019, 13:59"
            },
            {
                name: "Boss Quest",
                start: "February 2 2019, 17:00",
                end: "February 15 2019, 13:59"
            },
            {
                name: "EX Quest",
                start: "February 4 2019, 17:00",
                end: "February 15 2019, 13:59"
            },
            {
                name: "Event Shop",
                start: "January 31 2019, 17:00",
                end: "February 22 2019, 13:59"
            }
        ]
    },
    {
        type: "Mission",
        title: [
            "Chocolate Panic Missions",
            "チョコレートパニック",
            "Valentine 2019 Event Missions"
        ],
        image: "https://i.imgur.com/RTHrVJB.png",
        column: 0,
        priority: 4,
        timers: [
            {
                name: "Missions",
                start: "January 31 2019, 00:00",
                end: "February 13 2019, 13:59",
                markers: {
                    "Mission Set 2": "February 2 2019, 0:00",
                    "Mission Set 3": "February 4 2019, 0:00"
                }
            }
        ]
    },
    {
        type: "Mission",
        title: [
            "400 Days Celebration Missions",
            "400日記念ミッション"
        ],
        image: "match",
        column: 0,
        priority: 4,
        timers: [
            {
                name: "Period",
                start: "January 17 2019, 17:00",
                end: "January 29 2019, 23:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Valentine 2019 Limited Summon",
            "期間限定2019バレンタインキャラクターピックアップ召喚"
        ],
        image: "https://i.imgur.com/RTHrVJB.png",
        column: 1,
        timers: [
            {
                name: "Featuring 5* Koume [Valentine], 5* Mio [Valentine]",
                start: "January 31 2019, 17:00",
                end: "February 14 2019, 13:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Kirara Fantasia limited gacha",
            "きららファンタジア期間限定ピックアップ召喚",
            "Featuring 5* Archive"
        ],
        image: "https://i.imgur.com/e1nHS9K.png",
        column: 1,
        timers: [
            {
                name: "Period",
                start: "January 29 2019, 17:00",
                end: "February 5 2019, 16:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Urara Meirochou Special Selection",
            "うらら迷路帖特別セレクション召喚",
            "Featuring Urara Meirochou characters"
        ],
        image: "https://i.imgur.com/UDqxtQ9.png",
        column: 1,
        timers: [
            {
                name: "First Half: Featuring 5* Chiya, 5* Chiya [Christmas], 5* Koume",
                start: "January 17 2019, 17:00",
                end: "January 24 2019, 16:59"
            },
            {
                name: "Second Half: Featuring 5* Kon, 5* Kon [Swimsuit], 5* Nono",
                start: "January 24 2019, 17:00",
                end: "February 1 2019, 16:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "New Characters Summon",
            "新規キャラクターピックアップ召喚",
            "Featuring 5* Megu-nee, 4* Megu-nee, 4* Minaha"
        ],
        image: "https://i.imgur.com/8ujtPI5.png",
        column: 1,
        timers: [
            {
                name: "Period",
                start: "January 17 2019, 17:00",
                end: "January 29 2019, 13:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Choose your 5* Summon Ticket",
            "★5選べるチケット付き！有償限定10回召喚",
            "400 paid gems for a summon + a special 5* Summon Ticket"
        ],
        image: "clea",
        column: 1,
        timers: [
            {
                name: "Summon Period",
                start: "January 17 2019, 17:00",
                end: "January 29 2019, 13:59"
            },
            {
                name: "Ticket Expiration",
                start: "January 17 2019, 17:00",
                end: "February 5 2019, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Half Stamina Campaign",
            "消費スタミナ1/2キャンペーン",
            "For Daily Quests and Main Quest (except Prologue, chapter 8 and Hard Mode)"
        ],
        image: "kirara",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "January 17 2019, 17:00",
                end: "January 29 2019, 13:59",
                keepAfterFinished: "1 hours"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Valentine Login Bonus",
            "バレンタインログインボーナス",
            "Log in for 11 days for 200 Gems and a Event Call Ticket"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "February 1 2019, 0:00",
                end: "February 14 2019, 23:59",
                keepAfterFinished: "6 hours"
            }
        ]
    },
    {
        type: "WeekendBoss",
        title: [
            "February Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/HnFf7IS.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "February 2 2019, 0:00",
                end: "February 3 2019, 23:59"
            },
            {
                name: "Weekend 2",
                start: "February 9 2019, 0:00",
                end: "February 10 2019, 23:59"
            },
            {
                name: "Weekend 3",
                start: "February 16 2019, 0:00",
                end: "February 17 2019, 23:59"
            },
            {
                name: "Weekend 4",
                start: "February 23 2019, 0:00",
                end: "February 24 2019, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "February 2 2019, 0:00",
                end: "March 1 2019, 23:59",
                keepAfterFinished: "6 hours",
                type: "normal"
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
                keepAfterFinished: "6 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Valentine Room Decorations",
            "New and Past Valentine-themed items"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "January 31 2019, 17:00",
                end: "February 15 2019, 13:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "400 Days Celebration Sale",
            "400日記念セール",
            "Discounted Gem Set prices"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "January 17 2019, 17:00",
                end: "February 3 2019, 23:59"
            }
        ]
    }
];

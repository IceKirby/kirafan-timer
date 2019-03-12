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
            "Summon Renovation",
            "Event Preparation"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "March 13 2019, 14:00",
                end: "March 13 2019, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        type: "Event",
        title: [
            "Operation 'A Friend's Friend is also a Friend [Rerun]'",
            "復刻・友達の友達は友達大作戦",
            "Slow Start Event Rerun"
        ],
        image: "https://i.imgur.com/3tvXFDw.png",
        column: 0,
        priority: 2,
        timers: [
            {
                name: "Main Scenario",
                start: "March 13 2019, 17:00",
                end: "March 27 2019, 13:59",
                markers: {
                    "Extra Story Ch.1": "March 20 2019, 0:00",
                    "Extra Story Ch.2": "March 21 2019, 0:00",
                    "Extra Story Ch.3": "March 22 2019, 0:00",
                    "Extra Story Ch.4": "March 23 2019, 0:00"
                },
                extraPriority: 4
            },
            {
                name: "Melee Quest",
                start: "March 15 2019, 17:00",
                end: "March 27 2019, 13:59",
            },
            {
                name: "Event Shop",
                start: "March 13 2019, 17:00",
                end: "April 3 2019, 16:59",
            }
        ]
    },
    {
        type: "Event",
        title: [
            "Etowaria Adventure Log, Pt.1: Instructor Rize’s Secret Training",
            "エトワリア冒険譚 前編 リゼ教官の秘密特訓",
            "Rize Event"
        ],
        image: "https://i.imgur.com/H0gYCq5.png",
        column: 0,
        priority: 2,
        timers: [
            {
                name: "Main Scenario",
                start: "February 14 2019, 17:00",
                end: "March 12 2019, 13:59",
                markers: {
                    "Season 2": "February 16 2019, 17:00",
                    "Season 3": "February 18 2019, 17:00"
                },
                extraPriority: 4
            },
            {
                name: "After the Training",
                start: "February 18 2019, 17:00",
                end: "March 12 2019, 13:59",
                markers: {
                    "Chapter 2": "February 22 2019, 0:00",
                    "Chapter 3": "February 23 2019, 0:00",
                    "Chapter 4": "February 24 2019, 0:00",
                    "Chapter 5": "February 25 2019, 0:00"
                }
            },
            {
                name: "Boss Quest",
                start: "February 20 2019, 17:00",
                end: "March 12 2019, 13:59",
            },
            {
                name: "EX Quest",
                start: "February 22 2019, 17:00",
                end: "March 12 2019, 13:59",
            },
            {
                name: "Event Shop",
                start: "February 14 2019, 17:00",
                end: "March 19 2019, 13:59",
            }
        ]
    },
    {
        type: "Event",
        title: [
            "Etowaria Adventure Log, Pt.2: Steel Giant's Awakening",
            "エトワリア冒険譚 後編 目覚める鋼鉄の巨人",
            "Sugar Event"
        ],
        image: "https://i.imgur.com/zucS6nO.png",
        column: 0,
        priority: 2,
        timers: [
            {
                name: "Main Scenario",
                start: "February 27 2019, 17:00",
                end: "March 12 2019, 13:59",
                extraPriority: 4
            },
            {
                name: "Boss Quest",
                start: "March 1 2019, 17:00",
                end: "March 12 2019, 13:59",
            },
            {
                name: "EX Quest",
                start: "March 4 2019, 17:00",
                end: "March 12 2019, 13:59",
            },
            
            {
                name: "Super EX Quest",
                start: "March 6 2019, 17:00",
                end: "March 12 2019, 13:59",
            },
            {
                name: "Event Shop",
                start: "February 27 2019, 17:00",
                end: "March 19 2019, 13:59",
            }
        ]
    },
    {
        type: "Mission",
        title: [
            "Etowaria Adventure Log, Pt.1: Instructor Rize’s Secret Training Missions",
            "エトワリア冒険譚 前編 リゼ教官の秘密特訓",
            "Rize Event Missions"
        ],
        image: "https://i.imgur.com/H0gYCq5.png",
        column: 0,
        priority: 1,
        timers: [
            {
                name: "Missions",
                start: "February 14 2019, 17:00",
                end: "March 12 2019, 23:59",
                markers: {
                    "Mission Set 2": "February 18 2019, 0:00",
                    "Mission Set 3": "February 20 2019, 0:00"
                },
                extraPriority: 1
            }
        ]
    },
    {
        type: "Mission",
        title: [
            "Etowaria Adventure Log, Pt.2: Steel Giant's Awakening Missions",
            "エトワリア冒険譚 後編 目覚める鋼鉄の巨人",
            "Sugar Event Missions"
        ],
        image: "https://i.imgur.com/zucS6nO.png",
        column: 0,
        priority: 1,
        timers: [
            {
                name: "Missions",
                start: "February 27 2019, 17:00",
                end: "March 12 2019, 23:59",
                markers: {
                    "Mission Set 2": "March 1 2019, 0:00",
                    "Mission Set 3": "March 4 2019, 0:00"
                },
                extraPriority: 1
            }
        ]
    },
    {
        type: "Mission",
        title: [
            "Operation 'A Friend's Friend is also a Friend' Missions",
            "復刻・友達の友達は友達大作戦",
            "Slow Start Event Missions"
        ],
        image: "https://i.imgur.com/3tvXFDw.png",
        column: 0,
        priority: 1,
        timers: [
            {
                name: "Missions",
                start: "March 13 2019, 17:00",
                end: "March 27 2019, 23:59",
                markers: {
                    "Mission Set 2": "March 15 2019, 0:00",
                    "Mission Set 3": "March 20 2019, 0:00"
                },
                extraPriority: 1
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Etowaria Adventure Log, Pt.2: Steel Giant's Awakening Limited-time Summon",
            "エトワリア冒険譚 後編 目覚める鋼鉄の巨人 期間限定ピックアップ召喚"
        ],
        image: "https://i.imgur.com/zucS6nO.png",
        column: 1,
        priority: 1,
        timers: [
            {
                name: "Featuring 5* Sugar (Limited-Time)",
                start: "February 27 2019, 17:00",
                end: "March 13 2019, 13:59",
                extraPriority: 6
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Operation 'A Friend's Friend is also a Friend' 2019 Summon",
            "友達の友達は友達大作戦2019ピックアップ召喚"
        ],
        image: "https://i.imgur.com/3tvXFDw.png",
        column: 1,
        priority: 1,
        timers: [
            {
                name: "Featuring 5* Hannen Hiroe, 4* Kamuri, 4* Eiko, 4* Tamate",
                start: "March 13 2019, 17:00",
                end: "March 28 2019, 13:59",
                extraPriority: 6
            },
            {
                name: "Featuring 5* Kumegawa Botan, 4* Kitou Kimiko",
                start: "March 18 2019, 17:00",
                end: "March 28 2019, 13:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Gochuumon wa Usagi Desu Ka? Selection Summon",
            "ご注文はうさぎですか？ セレクション召喚"
        ],
        image: "https://i.imgur.com/aD9xuCy.png",
        column: 1,
        priority: 1,
        timers: [
            {
                name: "Featuring 5* Cocoa, 5* Chino, 5* Rize",
                start: "March 8 2019, 17:00",
                end: "March 15 2019, 16:59",
                extraPriority: 5
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Main Quest Extra Story Celebration Summon",
            "外伝追加記念★5確定チケット付き！有償限定10回召喚",
            "10x Summon for 240 paid gems, receive a Random 5* Summon Ticket"
        ],
        image: "clea",
        column: 1,
        priority: 1,
        timers: [
            {
                name: "Summon Period",
                start: "March 13 2019, 17:00",
                end: "March 20 2019, 16:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "March 13 2019, 17:00",
                end: "April 4 2019, 23:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Etowaria Adventure Log, Pt.2: Steel Giant's Awakening Summon",
            "エトワリア冒険譚 後編 目覚める鋼鉄の巨人ピックアップ召喚",
            "Polka side and Cork side"
        ],
        image: "https://i.imgur.com/aV2oUJv.png",
        column: 1,
        priority: 1,
        timers: [
            {
                name: "Polka Side: Featuring 5* Polka",
                start: "March 4 2019, 0:00",
                end: "March 13 2019, 13:59",
                extraPriority: 6
            },
            {
                name: "Cork Side: Featuring 5* Cork",
                start: "March 4 2019, 0:00",
                end: "March 13 2019, 13:59"
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
        type: "WeekendBoss",
        title: [
            "March Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/jmfRXeV.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "March 2 2019, 0:00",
                end: "March 3 2019, 23:59"
            },
            {
                name: "Weekend 2",
                start: "March 9 2019, 0:00",
                end: "March 10 2019, 23:59"
            },
            {
                name: "Weekend 3",
                start: "March 16 2019, 0:00",
                end: "March 17 2019, 23:59"
            },
            {
                name: "Weekend 4",
                start: "March 23 2019, 0:00",
                end: "March 24 2019, 23:59"
            },
            {
                name: "Weekend 5",
                start: "March 30 2019, 0:00",
                end: "March 31 2019, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "March 2 2019, 0:00",
                end: "April 5 2019, 23:59",
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

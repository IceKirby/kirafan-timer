var alertMessages = [];
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
            "Event Preparation",
            "Summon Renovation",
            "Version 1.20.2 update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "February 13 2020, 14:00",
                end: "February 13 2020, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Pursue the Darkness Chocolate Syndicate!",
            "闇チョコシンジケートを追え！",
            "Valentine 2020 Event"
        ],
        "image": [
            "https://i.imgur.com/rnS09d2.png",
            "https://i.imgur.com/5zuvjry.png",
            "https://i.imgur.com/V0cXbFL.png",
            "https://i.imgur.com/rLHIHRR.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "January 30 2020, 17:00",
                "end": "February 15 2020, 13:59",
                "markers": {
                    "Extra Chapter 1": "February 11 2020, 0:00",
                    "Extra Chapter 2": "February 12 2020, 0:00",
                    "Extra Chapter 3": "February 13 2020, 0:00",
                    "Extra Chapter 4": "February 14 2020, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "February 1 2020, 17:00",
                "end": "February 15 2020, 13:59"
            },
            {
                "name": "EX Quest",
                "start": "February 5 2020, 17:00",
                "end": "February 15 2020, 13:59"
            },
            {
                "name": "Event Shop",
                "start": "January 30 2020, 17:00",
                "end": "February 22 2020, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Hero's Gourmet ~Etowaria's Food Journal~",
            "勇者のグルメ～エトワリア食紀行～",
            "Koufuku Graffiti event"
        ],
        "image": [
            "https://i.imgur.com/Zy7mdz6.png",
            "https://i.imgur.com/ZCaGS9w.png",
            "https://i.imgur.com/ZD1guHO.png",
            "https://i.imgur.com/ceHB9fw.png",
            "https://i.imgur.com/Nvijwzt.png",
            "https://i.imgur.com/NhtMmwq.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "February 13 2020, 17:00",
                "end": "February 27 2020, 13:59",
                "markers": {
                    "Extra Chapter 1": "February 22 2020, 0:00",
                    "Extra Chapter 2": "February 23 2020, 0:00",
                    "Extra Chapter 3": "February 24 2020, 0:00",
                    "Extra Chapter 4": "February 25 2020, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "February 15 2020, 17:00",
                "end": "February 27 2020, 13:59"
            },
            {
                "name": "EX Quest",
                "start": "February 19 2020, 17:00",
                "end": "February 27 2020, 13:59"
            },
            {
                "name": "Event Shop",
                "start": "February 13 2020, 17:00",
                "end": "March 5 2020, 13:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Pursue the Darkness Chocolate Syndicate! Missions",
            "闇チョコシンジケートを追え！",
            "Valentine 2020 Event missions"
        ],
        "image": [
            "https://i.imgur.com/rnS09d2.png",
            "https://i.imgur.com/5zuvjry.png",
            "https://i.imgur.com/V0cXbFL.png",
            "https://i.imgur.com/rLHIHRR.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "January 30 2020, 17:00",
                "end": "February 15 2020, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Hero's Gourmet ~Etowaria's Food Journal~ Missions",
            "勇者のグルメ～エトワリア食紀行～",
            "Koufuku Graffiti event missions"
        ],
        "image": [
            "https://i.imgur.com/Zy7mdz6.png",
            "https://i.imgur.com/ZCaGS9w.png",
            "https://i.imgur.com/ZD1guHO.png",
            "https://i.imgur.com/ceHB9fw.png",
            "https://i.imgur.com/Nvijwzt.png",
            "https://i.imgur.com/NhtMmwq.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "February 13 2020, 17:00",
                "end": "February 27 2020, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Pursue the Darkness Chocolate Syndicate! Summon",
            "闇チョコシンジケートを追え！ピックアップ召喚",
            "Valentine 2020 Event summon"
        ],
        "image": [
            "https://i.imgur.com/rnS09d2.png",
            "https://i.imgur.com/5zuvjry.png",
            "https://i.imgur.com/V0cXbFL.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Momiji [Valentine], 5* Merry [Valentine], 5* Hibiki [Valentine]",
                "start": "January 30 2020, 17:00",
                "end": "February 15 2020, 13:59",
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Hero's Gourmet ~Etowaria's Food Journal~ Summon",
            "勇者のグルメ～エトワリア食紀行～ピックアップ召喚",
            "Koufuku Graffiti event summon"
        ],
        "image": [
            "https://i.imgur.com/Zy7mdz6.png",
            "https://i.imgur.com/ZCaGS9w.png",
            "https://i.imgur.com/ZD1guHO.png",
            "https://i.imgur.com/ceHB9fw.png",
            "https://i.imgur.com/Nvijwzt.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "First Half: Featuring 5* Machiko Ryou, 4* Morino Kirin",
                "start": "February 13 2020, 17:00",
                "end": "February 28 2020, 11:59",
                "extraPriority": 6
            },
            {
                "name": "Second Half: Featuring 5* Irokawa Ruki, 4* Irokawa Ruki, 4* Irokawa Miki",
                "start": "February 15 2020, 0:00",
                "end": "February 28 2020, 11:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Leine Summon",
            "きららファンタジアピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/0Tgt1z3.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Leine",
                "start": "February 18 2020, 0:00",
                "end": "March 2 2020, 23:59",
                "extraPriority": 5
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Comic Girls Limited-time Summon",
            "こみっくがーるず 期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/hgtHbGs.png",
            "https://i.imgur.com/rbpoq8j.png",
            "https://i.imgur.com/wkaqN3E.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Moeta Kaoruko, 5* Kaos [Swimsuit], 5* Koizuka Koyume, 4* Koizuka Koyume, 4* Irokawa Ruki, 4* Katsuki Tsubasa",
                "start": "February 21 2020, 17:00",
                "end": "February 28 2020, 11:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Random 5* Summon Ticket by Magazine",
            "★5確定チケット引換券付き！有償限定10回召喚",
            "240 Paid Gems for 10x Summon + Voucher to exchange for a Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                start: "January 30 2020, 17:00",
                end: "February 14 2020, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "January 30 2020, 17:00",
                end: "February 21 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "800 Days Celebration Choosable 5* Summon Ticket",
            "リリース800日記念★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                start: "February 18 2020, 0:00",
                end: "March 2 2020, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "February 18 2020, 0:00",
                end: "March 19 2020, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Valentine Login Bonus",
            "バレンタインログインボーナス",
            "Log in on 10 days for up to 200 Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "January 30 2020, 0:00",
                "end": "February 14 2020, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "800 Days Celebration Login Bonus",
            "800日記念ログインボーナス",
            "Log in on 10 days for up to 300 Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "February 18 2020, 0:00",
                "end": "March 2 2020, 23:59"
            }
        ]
    },
    {
        type: "LoginDays",
        title: [
            "Koisuru Asteroid participation Login Bonus",
            "恋する小惑星参戦決定記念ログインボーナス",
            "20 Gems on days the anime airs"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Episode 1",
                date: "January 3 2020"
            },
            {
                name: "Episode 2",
                date: "January 10 2020"
            },
            {
                name: "Episode 3",
                date: "January 17 2020"
            },
            {
                name: "Episode 4",
                date: "January 24 2020"
            },
            {
                name: "Episode 5",
                date: "January 31 2020"
            },
            {
                name: "Episode 6",
                date: "February 7 2020"
            },
            {
                name: "Episode 6.5",
                date: "February 14 2020"
            },
            {
                name: "Episode 7",
                date: "February 21 2020"
            },
            {
                name: "Episode 8",
                date: "February 28 2020"
            },
            {
                name: "Episode 9",
                date: "March 6 2020"
            },
            {
                name: "Episode 10",
                date: "March 13 2020"
            },
            {
                name: "Episode 11",
                date: "March 20 2020"
            },
            {
                name: "Episode 12",
                date: "March 27 2020"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Daily Quests Half Stamina Campaign",
            "曜日クエストスタミナ半減キャンペーン",
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "January 20 2020, 0:00",
                "end": "January 30 2020, 13:59"
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
        image: "https://i.imgur.com/v4fQhBZ.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "February 1 2020, 0:00",
                end: "February 2 2020, 23:59"
            },
            {
                name: "Weekend 2",
                start: "February 8 2020, 0:00",
                end: "February 9 2020, 23:59"
            },
            {
                name: "Weekend 3",
                start: "February 15 2020, 0:00",
                end: "February 16 2020, 23:59"
            },
            {
                name: "Weekend 4",
                start: "February 22 2020, 0:00",
                end: "February 23 2020, 23:59"
            },
            {
                name: "Weekend 5",
                start: "February 29 2020, 0:00",
                end: "March 1 2020, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "February 1 2020, 0:00",
                end: "March 6 2020, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Valentine Room Decorations",
            "バレンタイン限定のルームアイテム"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "January 30 2020, 17:00",
                end: "February 15 2020, 13:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "800 Days Celebration Special Gems Set",
            "800日記念お得な星彩石セット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "February 18 2020, 0:00",
                end: "March 2 2020, 23:59"
            }
        ]
    }
];

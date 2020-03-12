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
            "Version 2.0.1 update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "March 13 2020, 14:00",
                end: "March 13 2020, 15:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Dark Clouds! Hinamatsuri",
            "暗雲！ヒナ祭り",
            "Hinamatsuri 2020 Event"
        ],
        "image": [
            "https://i.imgur.com/v0U24Dy.png",
            "https://i.imgur.com/NL4VZlo.png",
            "https://i.imgur.com/4KVZubn.png",
            "https://i.imgur.com/Lx9fcDq.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "February 28 2020, 17:00",
                "end": "March 13 2020, 13:59",
                "markers": {
                    "Extra Chapter 1": "March 7 2020, 0:00",
                    "Extra Chapter 2": "March 8 2020, 0:00",
                    "Extra Chapter 3": "March 9 2020, 0:00",
                    "Extra Chapter 4": "March 10 2020, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "March 1 2020, 17:00",
                "end": "March 13 2020, 13:59"
            },
            {
                "name": "EX Quest",
                "start": "March 4 2020, 17:00",
                "end": "March 13 2020, 13:59"
            },
            {
                "name": "Event Shop",
                "start": "February 28 2020, 17:00",
                "end": "March 20 2020, 13:59"
            }
        ]
    },
     {
        "type": "Event",
        "title": [
            "The Star Where Miracles are Born",
            "奇跡が生まれる星",
            "Koisuru Asteroid event"
        ],
        "image": [
            "https://i.imgur.com/FcaDtHX.png",
            "https://i.imgur.com/So9FPl6.png",
            "https://i.imgur.com/tywUox2.png",
            "https://i.imgur.com/qUBt0iW.png",
            "https://i.imgur.com/SGYPsaF.png",
            "https://i.imgur.com/i7hdk9N.png",
            "https://i.imgur.com/wl8ngWd.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "March 13 2020, 15:00",
                "end": "March 31 2020, 13:59",
                "markers": {
                    "Extra Chapter 1": "March 20 2020, 0:00",
                    "Extra Chapter 2": "March 21 2020, 0:00",
                    "Extra Chapter 3": "March 22 2020, 0:00",
                    "Extra Chapter 4": "March 23 2020, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Melee Quest",
                "start": "March 15 2020, 17:00",
                "end": "March 31 2020, 13:59"
            },
            {
                "name": "EX Quest",
                "start": "March 18 2020, 17:00",
                "end": "March 31 2020, 13:59"
            },
            {
                "name": "Event Shop",
                "start": "March 13 2020, 15:00",
                "end": "April 7 2020, 13:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Dark Clouds! Hinamatsuri Missions",
            "暗雲！ヒナ祭り",
            "Hinamatsuri 2020 Event missions"
        ],
        "image": [
            "https://i.imgur.com/v0U24Dy.png",
            "https://i.imgur.com/NL4VZlo.png",
            "https://i.imgur.com/4KVZubn.png",
            "https://i.imgur.com/Lx9fcDq.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "February 28 2020, 17:00",
                "end": "March 13 2020, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "The Star Where Miracles are Born Missions",
            "奇跡が生まれる星",
            "Koisuru Asteroid event missions"
        ],
        "image": [
            "https://i.imgur.com/FcaDtHX.png",
            "https://i.imgur.com/So9FPl6.png",
            "https://i.imgur.com/tywUox2.png",
            "https://i.imgur.com/qUBt0iW.png",
            "https://i.imgur.com/SGYPsaF.png",
            "https://i.imgur.com/i7hdk9N.png",
            "https://i.imgur.com/wl8ngWd.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "March 13 2020, 15:00",
                "end": "March 31 2020, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Dark Clouds! Hinamatsuri Summon",
            "暗雲！ヒナ祭りピックアップ召喚",
            "Hinamatsuri 2020 Event summon"
        ],
        "image": [
            "https://i.imgur.com/v0U24Dy.png",
            "https://i.imgur.com/NL4VZlo.png",
            "https://i.imgur.com/4KVZubn.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Clea [Doll's Festival], 5* Hideri [Doll's Festival], 5* Shion [Doll's Festival]",
                "start": "February 28 2020, 17:00",
                "end": "March 13 2020, 13:59",
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "The Star Where Miracles are Born Summon",
            "奇跡が生まれる星ピックアップ召喚",
            "Koisuru Asteroid event summon"
        ],
        "image": [
            "https://i.imgur.com/So9FPl6.png",
            "https://i.imgur.com/tywUox2.png",
            "https://i.imgur.com/qUBt0iW.png",
            "https://i.imgur.com/SGYPsaF.png",
            "https://i.imgur.com/i7hdk9N.png",
            "https://i.imgur.com/wl8ngWd.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Mira side: Featuring 5* Konohata Mira, 4* Manaka Ao",
                "start": "March 13 2020, 15:00",
                "end": "March 31 2020, 13:59",
                "extraPriority": 6
            },
            {
                "name": "Ayame side: Featuring 5* Seki Ayame, 4* Murakami Shiina, 4* Seki Ayame",
                "start": "March 15 2020, 0:00",
                "end": "March 23 2020, 23:59"
            },
            {
                "name": "Nono side: Featuring 5* Iketani Nono, 4* Iketani Nono, 4* Tsuruse Matsuri",
                "start": "March 15 2020, 0:00",
                "end": "March 23 2020, 23:59"
            },
            {
                "name": "Mocha side: Featuring 5* Mocha",
                "start": "March 18 2020, 0:00",
                "end": "March 31 2020, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Limited-time Hinamatsuri Step-up Summon",
            "期間限定ひな祭り復刻！おまけ付き10回召喚",
            "Ticket to summon 5* Yun [Doll's Festival] or 5* Isana [Doll's Festival] on 7th step"
        ],
        "image": [
            "https://i.imgur.com/Aoyq45x.png",
            "https://i.imgur.com/tH6oORE.png",
            "https://i.imgur.com/uYDkng4.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Yun [Doll's Festival], 5* Isana [Doll's Festival], 4* Maika [Doll's Festival]",
                "start": "March 3 2020, 17:00",
                "end": "March 10 2020, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "March 3 2020, 17:00",
                "end": "March 17 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Machikado Mazoku & Harumination Limited-time Summon",
            "まちカドまぞく＆はるみねーしょん 期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/YWLUYla.png",
            "https://i.imgur.com/sqRMcAP.png",
            "https://i.imgur.com/PlT5O2y.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Yoshida Yuuko, 5* Momo [Christmas], 5* Hosono Harumi, 4* Chiyoda Momo, 4* Lilith, 4* Hinatsuki Mikan",
                "start": "March 10 2020, 17:00",
                "end": "March 17 2020, 16:59",
                "extraPriority": 4
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
        "type": "Gacha",
        "title": [
            "Version 2.0 Celebration Choosable 5* Summon Ticket",
            "Ver 2.0記念★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                start: "February 28 2020, 17:00",
                end: "March 12 2020, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "February 28 2020, 17:00",
                end: "March 19 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Random 5* Ticket Summon by Magazine",
            "★5確定チケット引換券付き！有償限定10回召喚",
            "240 Paid Gems for 10x Summon + Random 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period",
                start: "March 7 2020, 17:00",
                end: "March 14 2020, 23:59",
                extraPriority: 4
            },
            {
                name: "Ticket Expiration",
                start: "March 7 2020, 17:00",
                end: "March 21 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Daily Kira Kira Summon",
            "1日1回きらきら召喚",
            "40 Paid Gems for 3x Summon (all 4* or above)"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Period",
                start: "February 28 2020, 17:00",
                end: "March 6 2020, 23:59",
                extraPriority: 3
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
        type: "Other",
        title: [
            "Version 2.0 Celebration Login Bonus",
            "Ver 2.0記念ログインボーナス",
            "Log in on 9 days for items like 5★ LB Items and Summon Tickets"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "February 28 2020, 17:00",
                "end": "March 12 2020, 23:59"
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
        type: "WeekendBoss",
        title: [
            "March Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/qHmOVys.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "March 7 2020, 0:00",
                end: "March 8 2 2020, 23:59"
            },
            {
                name: "Weekend 2",
                start: "March 14 2020, 0:00",
                end: "March 15 2020, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "March 7 2020, 0:00",
                end: "April 3 2020, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Hinamatsuri Room Decorations",
            "ヒナ祭り限定のルームアイテム"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "February 28 2020, 17:00",
                end: "March 13 2020, 13:59"
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
    },
    {
        type: "Other",
        title: [
            "Version 2.0 Celebration Sale",
            "Ver 2.0記念セール"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "February 28 2020, 17:00",
                "end": "March 12 2020, 23:59"
            }
        ]
    }
];

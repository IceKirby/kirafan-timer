var data = [
    {
        type: "Maintenance",
        title: [
            "Maintenance",
            "Version 1.9.1 update"
        ],
        image: "maintenance.png",
        column: 0,
        autohide: true,
        timers: [
            {
                name: "Time",
                start: "July 31 2018, 14:00",
                end: "July 31 2018, 17:00"
            }
        ]
    },
    {
        type: "Event",
        title: [
            "K-ON! Etowaria Live!!",
            "けいおん！　エトワリアライブ！！",
            "K-ON introduction event"
        ],
        image: "https://i.imgur.com/ZCuik6k.png",
        column: 0,
        autohide: true,
        timers: [
            {
                name: "Season 1",
                start: "July 23 2018, 15:00",
                end: "August 3 2018, 13:59",
                autohide: true
            },
            {
                name: "Season 2",
                start: "July 25 2018, 17:00",
                end: "August 3 2018, 13:59",
                autohide: true
            },
            {
                name: "Season 3 + Encore (Boss Quest)",
                start: "July 27 2018, 17:00",
                end: "August 3 2018, 13:59",
                autohide: true
            },
            {
                name: "Event Shop",
                start: "July 23 2018, 15:00",
                end: "August 10 2018, 13:59",
            }
        ]
    },
    {
        type: "Mission",
        title: [
            "K-ON! Etowaria Live!!",
            "けいおん！　エトワリアライブ！！",
            "K-ON event missions"
        ],
        image: "https://i.imgur.com/ZCuik6k.png",
        column: 0,
        autohide: true,
        timers: [
            {
                name: "Missions Set 1",
                start: "July 23 2018, 15:00",
                end: "August 3 2018, 23:59"
            },
            {
                name: "Missions Set 2",
                start: "July 25 2018, 0:00",
                end: "August 3 2018, 23:59"
            },
            {
                name: "Missions Set 3",
                start: "July 27 2018, 0:00",
                end: "August 3 2018, 23:59"
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
        autohide: true,
        timers: [
            {
                name: "Period",
                start: "August 3 2018, 17:00",
                end: "August 30 2018, 11:59",
                autohide: true
            },
            {
                name: "Event Shop",
                start: "August 3 2018, 17:00",
                end: "September 6 2018, 13:59",
                autohide: true
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
        column: 0,
        autohide: true,
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
        type: "Gacha",
        title: [
            "K-ON! Etowaria Live!!",
            "けいおん！　エトワリアライブ！！",
            "K-ON event gacha"
        ],
        image: "https://i.imgur.com/ZCuik6k.png",
        column: 1,
        autohide: true,
        timers: [
            {
                name: "Rate-up for K-ON characters",
                start: "July 23 2018, 15:00",
                end: "August 3 2018, 16:59",
                info: "4* Yui (event card) not included"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Hanayamata & Comic Girls selection Gacha",
            "ハナヤマタ＆こみっくがーるずセレクション召喚",
            "Featuring 5* Naru, 5* Kaos"
        ],
        image: "https://i.imgur.com/r3QNOLx.png",
        column: 1,
        autohide: true,
        timers: [
            {
                name: "Period",
                start: "July 23 2018, 15:00",
                end: "August 3 2018, 16:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Guaranteed 5* Ticket Gacha",
            "*5確定召喚チケット付き！有償限定10回召喚",
            "Do a 240 Paid Gems pull to get the ticket",
            "You CAN'T choose the specific 5* character"
        ],
        image: "https://i.imgur.com/ICu2Sjh.png",
        column: 1,
        autohide: true,
        timers: [
            {
                name: "240 Paid Gems pull period",
                start: "July 11 2018, 15:00",
                end: "July 23 2018, 9:59"
            },
            {
                name: "5* Ticket usage period",
                start: "July 11 2018, 15:00",
                end: "July 30 2018, 23:59"
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
        autohide: true,
        timers: [
            {
                name: "Part 1 (Featuring 5* Yagami, 5* Kaho, 4* Eiko)",
                start: "July 31 2018, 17:00",
                end: "August 30 2018, 11:59",
                info: "Swimsuit versions",
                autohide: true
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
        autohide: true,
        timers: [
            {
                name: "Week 1 (August 1st~7th) reading period",
                start: "August 1 2018, 0:00",
                end: "August 14 2018, 23:59",
                autohide: true
            },
            {
                name: "Week 2 (August 8th~14th) reading period",
                start: "August 8 2018, 0:00",
                end: "August 21 2018, 23:59",
                autohide: true
            },
            {
                name: "Week 3 (August 15th~21st) reading period",
                start: "August 15 2018, 0:00",
                end: "August 28 2018, 23:59",
                autohide: true
            },
            {
                name: "Week 4 (August 22nd~28th) reading period",
                start: "August 22 2018, 0:00",
                end: "August 31 2018, 23:59",
                autohide: true
            },
            {
                name: "Week 5 (August 29th~30th) reading period",
                start: "August 29 2018, 0:00",
                end: "August 31 2018, 23:59",
                autohide: true
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Welcome Back Campaign",
            "おかえりなさいキャンペーン開催",
            "400 gems for players that haven't played since June 15th"
        ],
        image: "https://i.imgur.com/ICu2Sjh.png",
        column: 2,
        autohide: true,
        timers: [
            {
                name: "Login Bonus Period",
                start: "July 23 2018, 15:00",
                end: "July 31 2018, 23:59",
                autohide: true
            }
        ]
    },
    {
        type: "Other",
        title: [
            "July Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/tuW4rag.png",
        column: 2,
        autohide: true,
        timers: [
            {
                name: "Weekend 1",
                start: "July 7 2018, 0:00",
                end: "July 8 2018, 23:59",
                autohide: true
            },
            {
                name: "Weekend 2",
                start: "July 14 2018, 0:00",
                end: "July 15 2018, 23:59",
                autohide: true
            },
            {
                name: "Weekend 3",
                start: "July 21 2018, 0:00",
                end: "July 22 2018, 23:59",
                autohide: true
            },
            {
                name: "Weekend 4",
                start: "July 28 2018, 0:00",
                end: "July 29 2018, 23:59",
                autohide: true
            },
            
            {
                name: "Medal exchange period",
                start: "July 7 2018, 0:00",
                end: "August 3 2018, 23:59",
                autohide: true
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
        autohide: true,
        timers: [
            {
                name: "2000 Gems (817 Paid + 1183 Free) for 9800 Yen",
                start: "July 31 2018, 17:00",
                end: "August 31 2018, 23:59",
                autohide: true
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Room Decoration items",
            "Summer-themed items"
        ],
        image: "https://i.imgur.com/myGyoBh.png",
        column: 2,
        autohide: true,
        timers: [
            {
                name: "Period",
                start: "July 31 2018, 17:00",
                end: "August 30 2018, 11:59",
                autohide: true
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Normal Shop with increased exchange limits",
            "Some items will have doubled stock during the period"
        ],
        image: "https://i.imgur.com/myGyoBh.png",
        column: 2,
        autohide: true,
        timers: [
            {
                name: "Period",
                start: "July 31 2018, 17:00",
                end: "August 30 2018, 11:59",
                autohide: true
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Trade Shop Deals",
            "Summon Tickets and Character sets"
        ],
        image: "https://i.imgur.com/q0XRi8b.png",
        column: 2,
        autohide: true,
        timers: [
            {
                name: "Character Evolution sets",
                start: "May 30 2018, 17:00",
                end: "June 13 2018, 23:59",
                autohide: true,
                info: "200 Gems for a set with 4 Limit Break items, the evolution materials and experience items for 4* Naru, 4* Hana or 4* Yaya"
            },
            {
                name: "Summon Ticket sets",
                start: "June 1 2018, 0:00",
                end: "June 30 2018, 23:59",
                autohide: true,
                info: "250 Gems for a set with 10 Summon Ticket and 10 Golden Clocks"
            }
        ]
    }
];

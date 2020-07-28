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
            "Version 2.2.2 Update"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "July 29 2020, 16:00",
                end: "July 29 2020, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
     {
        "type": "Event",
        "title": [
            "Chaos! Etowaria Doujinshi Convention!",
            "大騒動！エトワリア同人誌即売会",
            "Doujinshi Event"
        ],
        "image": [
            "https://i.imgur.com/sxQnfBK.png",
            "https://i.imgur.com/81nYzue.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "July 16 2020, 17:00",
                "end": "July 29 2020, 15:59",
                "markers": {
                    "Extra Chapter 1": "July 23 2020, 0:00",
                    "Extra Chapter 2": "July 24 2020, 0:00",
                    "Extra Chapter 3": "July 25 2020, 0:00",
                    "Extra Chapter 4": "July 26 2020, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "July 18 2020, 17:00",
                "end": "July 29 2020, 15:59"
            },
            {
                "name": "EX Quest",
                "start": "July 21 2020, 17:00",
                "end": "July 29 2020, 15:59"
            },
            {
                "name": "Event Shop",
                "start": "July 16 2020, 17:00",
                "end": "August 5 2020, 13:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Etowaria Summer One-Shots 2020",
            "エトワリア夏の一幕2020",
            "Summer 2020 Mini-Event"
        ],
        "image": [
            "https://i.imgur.com/HjBxxvM.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Story Chapters",
                "start": "July 23 2020, 0:00",
                "end": "July 29 2020, 15:59",
                "markers": {
                    "Chapter 2": "July 24 2020, 0:00",
                    "Chapter 3": "July 25 2020, 0:00",
                    "Chapter 4": "July 26 2020, 0:00",
                    "Chapter 5": "July 27 2020, 0:00",
                    "Chapter 6": "July 28 2020, 0:00",
                },
                "extraPriority": 3
            },
            {
                "name": "Melee Quest",
                "start": "July 23 2020, 0:00",
                "end": "July 29 2020, 15:59"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Summer Vacation! Homework Operation",
            "夏休み！宿題大作戦",
            "Summer 2020 Event"
        ],
        "image": [
            "https://i.imgur.com/KWilLZc.png",
            "https://i.imgur.com/4QbYAEv.png",
            "https://i.imgur.com/F2A718S.png",
            "https://i.imgur.com/Ut2Jife.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Main Scenario",
                "start": "July 29 2020, 17:00",
                "end": "August 27 2020, 15:59",
                "markers": {
                    "Extra Chapter 1": "August 8 2020, 0:00",
                    "Extra Chapter 2": "August 9 2020, 0:00",
                    "Extra Chapter 3": "August 10 2020, 0:00",
                    "Extra Chapter 4": "August 11 2020, 0:00"
                },
                "extraPriority": 4
            },
            {
                "name": "Boss Quest",
                "start": "July 31 2020, 17:00",
                "end": "August 27 2020, 15:59"
            },
            {
                "name": "EX Quest",
                "start": "August 5 2020, 17:00",
                "end": "August 27 2020, 15:59"
            },
            {
                "name": "Event Shop",
                "start": "July 29 2020, 17:00",
                "end": "September 3 2020, 13:59"
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Slow Tamers Missions",
            "スロウテイマーズ",
            "Slow Start Author Quest missions"
        ],
        "image": [
            "https://i.imgur.com/jNx7ZWQ.png",
            "https://i.imgur.com/gDDud3k.png",
            "https://i.imgur.com/MJjPOAQ.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "July 9 2020, 17:00",
                "end": "July 23 2020, 23:59",
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Chaos! Etowaria Doujinshi Convention! Missions",
            "大騒動！エトワリア同人誌即売会",
            "Doujinshi Event missions"
        ],
        "image": [
            "https://i.imgur.com/sxQnfBK.png",
            "https://i.imgur.com/81nYzue.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "July 16 2020, 17:00",
                "end": "July 29 2020, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Etowaria Summer One-Shots 2020 Missions",
            "エトワリア夏の一幕2020",
            "Summer 2020 Mini-Event Missions"
        ],
        "image": [
            "https://i.imgur.com/HjBxxvM.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
            {
                "name": "Missions",
                "start": "July 23 2020, 0:00",
                "end": "July 29 2020, 23:59",
                "extraPriority": 1
            }
        ]
    },
    {
        "type": "Mission",
        "title": [
            "Summer Vacation! Homework Operation Missions",
            "夏休み！宿題大作戦",
            "Summer 2020 Event missions"
        ],
        "image": [
            "https://i.imgur.com/KWilLZc.png",
            "https://i.imgur.com/4QbYAEv.png",
            "https://i.imgur.com/F2A718S.png",
            "https://i.imgur.com/Ut2Jife.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
                "name": "Missions",
                "start": "July 29 2020, 17:00",
                "end": "August 27 2020, 23:59",
                "markers": {},
                "extraPriority": 2
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Chaos! Etowaria Doujinshi Convention! Summon",
            "大騒動！エトワリア同人誌即売会ピックアップ召喚",
            "Doujinshi Event summon"
        ],
        "image": [
            "https://i.imgur.com/sxQnfBK.png",
            "https://i.imgur.com/81nYzue.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Miu Side: Featuring 5* Amano Miu, 4* Amano Miu",
                "start": "July 16 2020, 17:00",
                "end": "July 29 2020, 15:59",
                "extraPriority": 6
            },
            {
                "name": "Yumine Side: Featuring 5* Fuda Yumine, 4* Fuda Yumine",
                "start": "July 16 2020, 17:00",
                "end": "July 29 2020, 15:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Etowaria Summer One-Shots 2020 Daily Summon",
            "エトワリア夏の一幕2020日替わりピックアップ召喚",
            "A different banner each day"
        ],
        "image": [
            "https://i.imgur.com/HjBxxvM.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Period",
                "start": "July 23 2020, 0:00",
                "end": "July 28 2020, 23:59",
                "extraPriority": 5
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Summer Vacation! Homework Operation Limited-time Summon",
            "夏休み！宿題大作戦ピックアップ召喚",
            "Summer 2020 Event summon"
        ],
        "image": [
            "https://i.imgur.com/KWilLZc.png",
            "https://i.imgur.com/4QbYAEv.png",
            "https://i.imgur.com/F2A718S.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Part 1: Featuring 5* Yuno [Swimsuit], 5* Yukari [Swimsuit], 5* Futaba [Swimsuit]",
                "start": "July 29 2020, 17:00",
                "end": "August 27 2020, 15:59",
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Swimsuit 2018 Limited-time Step-up Summon",
            "期間限定2018水着復刻 おまけ付き10回召喚",
            "Get a Random 5* Summon Ticket on 7th step",
            "Up to 4 steps for free"
        ],
        "image": ["clea"],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Yuzuko [Swimsuit], 5* Aya [Swimsuit], 5* Yuki [Swimsuit], 5* Kou [Swimsuit], 5* Kon [Swimsuit], 5* Shizuku [Swimsuit], 5* Kaho [Swimsuit], 5* Nadeshiko [Swimsuit]",
                "start": "July 29 2020, 17:00",
                "end": "August 12 2020, 15:59",
                "extraPriority": 4
            },
            {
                "name": "Free 10x Summon (once per day)",
                "start": "July 29 2020, 17:00",
                "end": "August 1 2020, 23:59",
                "extraPriority": 1
            },
            {
                name: "Ticket Expiration",
                "start": "July 29 2020, 17:00",
                end: "August 19 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "2018 & 2019 Swimsuit Choosable 5* Summon",
            "2018年＆2019年の水着★5キャラが選べる！有償限定10回召喚",
            "600 Paid Gems for a 10x + Choosable Past 5* Swimsuit Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Summon Period",
                "start": "July 29 2020, 17:00",
                "end": "August 12 2020, 15:59",
                "extraPriority": 4
            },
            {
                name: "Ticket Expiration",
                "start": "July 29 2020, 17:00",
                "end": "September 3 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Blend-S Limited-time Step-up Summon",
            "ブレンド・S 期間限定おまけ付き10回召喚",
            "Get a Random 5* Summon Ticket on 7th step"
        ],
        "image": [
            "https://i.imgur.com/1OpWxtQ.png",
            "https://i.imgur.com/wLsnIbm.png",
            "https://i.imgur.com/NL4VZlo.png",
            "https://i.imgur.com/JNETw7X.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Maika [Swimsuit], 5* Kaho [New Year], 5* Hoshikawa Mafuyu, 5* Hideri [Doll's Festival], 4* Maika [Doll's Festival]",
                "start": "July 24 2020, 17:00",
                "end": "July 29 2020, 15:59",
                "info": "Also featuring 3* and 4* characters from Blend-S",
                "extraPriority": 4
            },
            {
                name: "Ticket Expiration",
                "start": "July 24 2020, 17:00",
                end: "August 5 2020, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara Fantasia Limited-time Summon",
            "きららファンタジア期間限定ピックアップ召喚"
        ],
        "image": [
            "https://i.imgur.com/cmyDxBN.png",
            "https://i.imgur.com/qDldUVh.png",
            "https://i.imgur.com/21q85KU.png",
            "https://i.imgur.com/xaIZaj8.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Archive, 5* Cesame, 5* Ginger, 5* Fennel",
                "start": "July 17 2020, 17:00",
                "end": "July 24 2020, 16:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Yumekui Merry Limited-time Step-up Summon",
            "夢喰いメリー 期間限定おまけ付き10回召喚",
            "Get a Random 5* Summon Ticket on 7th step"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Merry [Valentine], 5* Isana [Doll's Festival], 5* Engi Threepiece",
                "start": "July 29 2020, 17:00",
                "end": "August 2 2020, 16:59",
                "info": "Also featuring 3* and 4* characters from Yumekui Merry",
                "extraPriority": 4
            },
            {
                name: "Ticket Expiration",
                "start": "July 29 2020, 17:00",
                end: "August 9 2020, 23:59"
            }
        ]
    },
     {
        "type": "Gacha",
        "title": [
            "Stella no Mahou Limited-time Summon",
            "ステラのまほう期間限定特別セレクション召喚"
        ],
        "image": [
            "https://i.imgur.com/CldfjiV.png",
            "https://i.imgur.com/LXi1Day.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Featuring 5* Tamaki [Sports Festival], 5* Shiina [Valentine], 5* Seki Ayame, 5* Iketani Nono, 4* Tamaki [Christmas], 4* Yumine [Swimsuit]",
                "start": "July 17 2020, 17:00",
                "end": "July 24 2020, 16:59",
                "info": "Also featuring 3* and 4* characters from Stella no Mahou",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Daily Kira-Kira Summon",
            "1日1回きらきら召喚",
            "40 Paid Gems once per day for 3 summons, all 4* or above"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                "name": "Period",
                "start": "August 2 2020, 0:00",
                "end": "August 8 2020, 23:59",
                "extraPriority": 4
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Manga Time Kirara Exhibition in Niigata Celebration Summon - First Half",
            "きらら展in新潟記念期間限定★5確定チケット付き！有償限定10回召喚・前半",
            "400 Paid Gems for a 10x Summon + Random Limited-time 5* Summon Ticket"
        ],
        "image": "clea",
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Summon Period: Featuring Limited-time characters from specific series",
                start: "July 4 2020, 0:00",
                end: "July 10 2020, 23:59",
                extraPriority: 4,
                info: "Limited-time characters from Hidamari Sketch, Yuyushiki, A-Channel, NEW GAME!, Kill me Baby, Blend-S, Slow Start, K-ON!, Anima Yell! and Machikado Mazoku"
            },
            {
                name: "Ticket Expiration",
                start: "July 4 2020, 0:00",
                end: "July 17 2020, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Etowaria's Summer Vacation 2020 Login Bonus",
            "2020エトワリアの夏休みログインボーナス・前半",
            "Log in on 10 days for up to 200 Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "First Half",
                "start": "July 29 2020, 17:00",
                "end": "August 12 2020, 23:59"
            }
        ]
    },
    {
        type: "LoginDays",
        title: [
            "Tamayomi participation Login Bonus",
            "球詠参戦決定記念ログインボーナス",
            "20 Gems on days the anime airs"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Episode 1",
                date: "April 1 2020",
                days: 2
            }
        ]
    },
    {
        type: "Other",
        title: [
            "#KiraFan Summer Vacation Twitter Campaign",
            "Twitter連動企画！#きらファン夏休み キャンペーン",
            "Retweet and Like Tweets, get Stamps, exchange for Waku Waku Summon Tickets"
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "Campaign Period",
                "start": "July 29 2020, 17:00",
                "end": "August 12 2020, 15:59"
            },
            {
                name: "Tickets Expiration",
                "start": "July 29 2020, 17:00",
                "end": "August 19 2020, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Main Quest Half Stamina Campaign",
            "メインクエストスタミナ半減キャンペーン",
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "July 29 2020, 17:00",
                "end": "August 12 2020, 15:59"
            }
        ]
    },
    {
        type: "WeekendBoss",
        title: [
            "July Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/FWWTNY0.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "July 4 2020, 0:00",
                end: "July 5 2020, 23:59"
            },
            {
                name: "Weekend 2",
                start: "July 11 2020, 0:00",
                end: "July 12 2020, 23:59"
            },
            {
                name: "Weekend 3",
                start: "July 18 2020, 0:00",
                end: "July 19 2020, 23:59"
            },
            {
                name: "Weekend 4",
                start: "July 25 2020, 0:00",
                end: "July 26 2020, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "July 4 2020, 0:00",
                end: "July 31 2020, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Past Summer Room Decorations",
            "夏限定のルームアイテム"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "July 29 2020, 17:00",
                "end": "August 27 2020, 15:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Summer Vacation Special Sales",
            "夏休み限定！お得な星彩石セット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Special Gem Sets",
                "start": "July 29 2020, 17:00",
                "end": "August 12 2020, 15:59"
            },
            {
                name: "Scorching Swimsuit 5★ Summon Special Support Set",
                "start": "July 29 2020, 17:00",
                "end": "August 12 2020, 15:59"
            },
            {
                name: "Training Item Sets",
                "start": "July 29 2020, 17:00",
                "end": "August 27 2020, 15:59"
            }
        ]
    }
];

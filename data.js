var alertMessages = ["URL Query Strings support added! <a href='https://github.com/IceKirby/kirafan-timer#url-query-strings'>Click here for more details.</a>"];
var alertTypes = ["primary"];
var timerData = [
    {
        type: "DailyQuest",
        title: "Daily Quests",
        priority: 50,
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
            "Summon Renovation"
        ],
        image: "Maintenance",
        column: 0,
        priority: 40,
        timers: [
            {
                name: "Scheduled Time",
                start: "March 31 2021, 16:00",
                end: "March 31 2021, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        "type": "Event",
        "title": [
            "Etowaria's Steamy Casefiles: The Ghost Cat Inn and the Hot Spring of Silver Vine",
            "エトワリア湯煙事件録-化猫旅館と木天蓼の湯-",
            "Hot Spring Event"
        ],
        "image": [
            "https://i.imgur.com/Ke9BSm0.png",
            "https://i.imgur.com/sRrmDoU.png",
            "https://i.imgur.com/yRWe3uK.png",
            "https://i.imgur.com/VlaPH0L.png",
            "https://i.imgur.com/ucQAvoX.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "March 31 2021, 17:00",
                "end": "April 14 2021, 16:59",
                "markers": [
                    {
                        "title": "Extra Chapter 1",
                        "time": "April 10 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "April 11 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "April 12 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "April 13 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "April 2 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "EX Quest",
                        "time": "April 7 2021, 17:00",
                        "type": "battle"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Missions",
                "start": "March 31 2021, 17:00",
                "end": "April 14 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "March 31 2021, 17:00",
                "end": "April 21 2021, 13:59"
            }
        ]
    },
     {
        "type": "Event",
        "title": [
            "We Wanna Play Baseball Too!",
            "私たちだって野球したい！",
            "Yoshino Event"
        ],
        "image": [
            "https://i.imgur.com/wCkUtuq.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "April 14 2021, 17:00",
                "end": "April 27 2021, 11:59",
                "markers": [
                    {
                        "title": "Extra Chapter 1",
                        "time": "April 22 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "April 23 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "April 24 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "April 25 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "April 16 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "EX Quest",
                        "time": "April 21 2021, 17:00",
                        "type": "battle"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Missions",
                "start": "April 14 2021, 17:00",
                "end": "April 27 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "April 14 2021, 17:00",
                "end": "May 4 2021, 13:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Etowaria's Steamy Casefiles: The Ghost Cat Inn and the Hot Spring of Silver Vine Summon",
            "エトワリア湯煙事件録-化猫旅館と木天蓼の湯-ピックアップ召喚",
            "Hot Spring Event summon"
        ],
        "image": [
            "https://i.imgur.com/Ke9BSm0.png",
            "https://i.imgur.com/sRrmDoU.png",
            "https://i.imgur.com/yRWe3uK.png",
            "https://i.imgur.com/VlaPH0L.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "March 31 2021, 17:00",
                "end": "April 14 2021, 16:59",
                "banners": [
                    {
                        "title": "Part 1",
                        "desc": "Featuring 5* Yuuri [Hot Spring], 5* Haruka [Hot Spring]",
                        "time": "March 31 2021, 17:00"
                    },
                    {
                        "title": "Part 2",
                        "desc": "Featuring 5* Hiroe [Hot Spring], 5* Hibari [Hot Spring]",
                        "time": "March 31 2021, 17:00"
                    }
                ],
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "We Wanna Play Baseball Too! Summon",
            "私たちだって野球したい！ピックアップ召喚",
            "Yoshino Event summon"
        ],
        "image": [
            "https://i.imgur.com/wCkUtuq.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Event Summon: Featuring 5* Kawaguchi Yoshino",
                "start": "April 14 2021, 17:00",
                "end": "April 27 2021, 11:59",
                "extraPriority": 6
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Baseball Team Firers Limited-Time Step-up Summon",
            "期間限定いちおしテーマおまけ付き10回召喚",
            "Random 5* Summon Ticket on 7th step"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5* Hoshikawa Hotaru, 5* Ichinose Hana, 5* Ichinose Hana, 5* Moeta Kaoruko, 5* Kaos [Swimsuit], 5* Chiya, 5* Chiya [Christmas], 5* Yamaguchi Kisaragi, 4* Nazuna, 4* Hoshikawa Hotaru, 4* Lilith",
                "start": "April 14 2021, 17:00",
                "end": "April 21 2021, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "April 14 2021, 17:00",
                "end": "April 28 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Baseball Team Firers Limited-Time Summon Ticket",
            "期間限定いちおしテーマ★5確定チケット付き！有償限定10回召喚",
            "240 Paid Gems for a 10x Summon + Random 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5* Hoshikawa Hotaru, 5* Ichinose Hana, 5* Ichinose Hana, 5* Moeta Kaoruko, 5* Kaos [Swimsuit], 5* Chiya, 5* Chiya [Christmas], 5* Yamaguchi Kisaragi, 4* Nazuna, 4* Hoshikawa Hotaru, 4* Lilith",
                "start": "April 14 2021, 17:00",
                "end": "April 21 2021, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "April 14 2021, 17:00",
                "end": "April 28 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Fire-element Limited-Time Step-up Summon",
            "期間限定炎属性おまけ付き10回召喚",
            "Random 5* Summon Ticket on 7th step"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5* Hasegawa Fumi, 5* Hifumi [Christmas], 5* Kou [Swimsuit], 5* [Traveler of the Wasteland] Rin, 5* Ekoda Ren, 5* Hatoya Kohane, 5* Noda Miki [Halloween], 5* Shiina",
                "start": "April 9 2021, 17:00",
                "end": "April 16 2021, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "April 9 2021, 17:00",
                "end": "April 23 2021, 23:59",
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Fire-element Limited-Time Summon Ticket",
            "期間限定炎属性★5確定チケット付き！有償限定10回召喚",
            "240 Gems for 10x Summon + Random 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring 5* Hasegawa Fumi, 5* Hifumi [Christmas], 5* Kou [Swimsuit], 5* [Traveler of the Wasteland] Rin, 5* Ekoda Ren, 5* Hatoya Kohane, 5* Noda Miki [Halloween], 5* Shiina",
                "start": "April 9 2021, 17:00",
                "end": "April 16 2021, 16:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "April 9 2021, 17:00",
                "end": "April 23 2021, 23:59",
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara MAX 200th Edition Limited-Time Step-up Summon",
            "きららMAX200号記念期間限定おまけ付き10回召喚",
            "Random 5* Summon Ticket on 7th step"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring Limited-time characters from Kirara MAX",
                "start": "April 19 2021, 0:00",
                "end": "April 25 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "April 19 2021, 0:00",
                "end": "May 2 2021, 23:59",
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Kirara MAX 200th Edition Limited-Time Summon Ticket",
            "きららMAX200号記念期間限定★5選べるチケット付き！有償限定10回召喚",
            "600 Paid Gems for 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period: Featuring Limited-time characters from Kirara MAX",
                "start": "April 19 2021, 0:00",
                "end": "April 25 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "April 19 2021, 0:00",
                "end": "May 2 2021, 23:59",
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "1200 Days Celebration Choosable 5* Summon Ticket",
            "リリース1200日記念★5選べるチケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Choosable 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "March 24 2021, 0:00",
                "end": "April 6 2021, 23:59",
                "extraPriority": 4
            },
            {
                "name": "Ticket Expiration",
                "start": "March 24 2021, 0:00",
                "end": "April 13 2021, 23:59"
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Head Priest & Seven Sages Random Summon Ticket",
            "筆頭神官＆七賢者限定★5確定チケット付き！有償限定10回召喚",
            "400 Paid Gems for a 10x Summon + Random 5* Summon Ticket"
        ],
        "image": [
            "clea"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Summon Period",
                "start": "March 24 2021, 0:00",
                "end": "March 31 2021, 15:59",
                "extraPriority": 3,
            },
            {
                "name": "Ticket Expiration",
                "start": "March 24 2021, 0:00",
                "end": "April 7 2021, 23:59",
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
            "Daily KiraKira Limited-time Summon",
            "1日1回期間限定きらきら召喚",
            "40 Paid Gems once per day for 3 summons, all 4* or above"
        ],
        "image": "clea",
        "column": 1,
        "priority": 21,
        "timers": [
            {
                "name": "Featuring 5* Run [New Year], 5* Yutaka [Maid], 5* Hifumi [Christmas], 5* Hifumi [Maid], 5* Hideri [Doll's Festival], 5* Tsubasa [Tanabata], 5* Hizume [Maid], 5* Kotetsu [Christmas], 5* Mira [Valentine], 5* Ao [White Day], 4* Run [Christmas]",
                "start": "April 19 2021, 0:00",
                "end": "April 27 2021, 23:59",
                "extraPriority": 4
            }
        ]
    },
    {
        type: "Other",
        title: [
            "1200 Days Celebration Login Bonus",
            "1200日記念ログインボーナス",
            "Log in on 10 days for up to 300 Free Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "March 24 2021, 0:00",
                "end": "April 6 2021, 23:59"
            }
        ]
    },
    {
        type: "LoginDays",
        title: [
            "Ochikobore Fruit Tart participation Login Bonus",
            "おちこぼれフルーツタルト参戦決定記念ログインボーナス",
            "20 Gems on days the anime airs"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Episode 2",
                date: "October 19 2020",
                days: 2
            },
        ]
    },
    {
        type: "Other",
        title: [
            "Main Quest Part 1 Chapter 1~Epilogue Half Stamina Campaign",
            "メインクエスト第1部スタミナ半減キャンペーン",
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "March 15 2021, 17:00",
                "end": "March 31 2021, 15:59"
            }
        ]
    },
    {
        type: "WeekendBoss",
        title: [
            "April Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/EcVglFg.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "April 3 2021, 0:00",
                end: "April 4 2021, 23:59"
            },
            {
                name: "Weekend 2",
                start: "April 10 2021, 0:00",
                end: "April 11 2021, 23:59"
            },
            {
                name: "Weekend 3",
                start: "April 17 2021, 0:00",
                end: "April 18 2021, 23:59"
            },
            {
                name: "Weekend 4",
                start: "April 24 2021, 0:00",
                end: "April 25 2021, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "April 3 2021, 0:00",
                end: "April 30 2021, 23:59",
                keepAfterFinished: "2 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Past Hinamatsuri Room Decorations",
            "ひな祭り限定ルームアイテム再登場"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "February 26 2021, 17:00",
                "end": "March 5 2021, 16:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Kirara MAX 200th Edition Celebration Sale",
            "きららMAX200号記念お得なセット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Gem & Item Sets",
                "start": "April 19 2021, 0:00",
                "end": "April 25 2021, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Event Special Sale",
            "イベント開催記念特別セール！星彩石セット販売"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Gem Sets",
                "start": "March 31 2021, 17:00",
                "end": "April 14 2021, 16:59"
            },
            {
                name: "Ticket Expiration",
                "start": "March 31 2021, 17:00",
                "end": "April 21 2021, 23:59"
            }
        ]
    }
];

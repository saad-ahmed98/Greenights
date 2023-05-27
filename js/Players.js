let playerlist = {};

playerlist["Penance"] = {
    name: "Penance",
    hp: 4655,
    atk: 944,
    def: 616,
    res: 10,
    atkinterval: 1.6,
    blockcount: 3,
    rarity: "rgb(255, 115, 0)",

    rdtimer: 70,
    rdcounter: 0,

    type: "g",
    class: "defender",
    subclass: "Juggernaut",


    cost: 34,
    basecost: 34,

    range: 1,
    targets: 1,


    dmgtype: "physical",

    opicon: "images/opicons/penance.webp",

    spritesheet: "images/sprites/penance-sheet.webp",


    skillsfx: true,

    atkanim: {
        start: 0,
        end: 23,
        contact: 10,
        duration: 1.1,
    },

    death: {
        start: 24,
        end: 39,
    },

    idle: {
        start: 40,
        end: 99
    },

    drop: {
        start: 100,
        end: 114
    },
    skillatkanim: {
        start: 115,
        end: 139,
        contact: 115+9,
        duration: 1.1,
    },
    skillidle: {
        start: 140,
        end: 154,
    },
    


    skill: {
        name: "Overcoming Obstacles",
        description: "Immediately obtains a barrier \nequal to 130% of Max HP,\nAttack Interval increases, ATK +400%,\nand taunts enemy attacks\n",
        duration: 30,
        sp: 20,
        initialsp: 0,
        chargetype: "hit",
        triggertype: "manual",

        modifiers: {
            barrier: 1.3,
            atk: 4,
            atkinterval: 0.9,
            taunt:1,
            ignoreaniminterval: true,
        },
        apply: "self",
        skillimage: "images/opicons/penanceskill.webp"

    },
    talents: [
        {
            name: "Guardian of Law",
            description: "Immediately obtains a Barrier equal to 55% of Max HP;\nEach time this unit defeats an enemy,\nobtains a Barrier equal to 10% of Max HP\n(up to 300% of Max HP)",
            modifiers: {
                barrier:0.55,
                barrieronkill:0.1,
            },
            apply: "self",

        },
        {
            name: "Ring of Thorns",
            description: "While having a Barrier active, deals 53% of Penance's ATK \nas Magic to enemies that attacked her",

            modifiers: {
                barrierreflect:0.53
            },
            apply: "self",
        },
        {
            name: "Trait",
            description: "Cannot be healed by allies",
            modifiers: {
            },
            apply: "self",
        },
    ],
    sfx: {
        atk:{
            src: "penance-atk",
            volume: 0.1
        },
        hit: {
            src: "penance-hit",
            volume: 0.1
        },
        skillatk:{
            src: "penance-skillatk",
            volume: 0.1
        },
        skillhit: {
            src: "penance-skillhit",
            volume: 0.1
        },

        skillact: {
            src: "skill-def",
            volume: 0.3
        }
    }
}

playerlist["Blemishine"] = {
    name: "Blemishine",
    hp: 3242,
    atk: 607,
    def: 601,
    res: 10,
    atkinterval: 1.2,
    blockcount: 3,
    rarity: "rgb(255, 115, 0)",

    rdtimer: 66,
    rdcounter: 0,

    type: "g",
    class: "defender",
    subclass: "Guardian",


    cost: 20,
    basecost: 20,

    range: 1,
    targets: 1,

    dmgtype: "physical",

    opicon: "images/opicons/blemishine.webp",

    spritesheet: "images/sprites/blemishine-sheet.webp",

    skillsfx: true,

    atkanim: {
        start: 0,
        end: 17,
        contact: 9,
        duration: 1.1,
    },

    death: {
        start: 18,
        end: 32,
    },

    idle: {
        start: 33,
        end: 62
    },

    drop: {
        start: 63,
        end: 77
    },

    skillatkanim: {
        start: 78,
        end: 95,
        contact: 78+9,
        duration: 1.1,
    },

    skill: {
        name: "Deterring Radiance",
        description: "ATK +110% and all enemies in \nrange are put to Sleep\n(Invincible,unable to move or act)\nRestores the HP of all nearby allies\nby 20% of Blemishine's ATK every second.",
        duration: 10,
        sp: 12,
        initialsp: 0,
        chargetype: "hit",
        triggertype: "manual",
        modifiers: {
            atk: 1.1,
            instantsleep: 10,
        },
        applyeffects:
            {
                name: "Radiance effect",
                apply: "aliveallies",
                range: 2,
                modifiers: {
                    flathpregen: {
                        stat: "atk",
                        percent: 0.2
                    }
                },
                duration: 0.5,
                targets: 99,
            },
        apply: "self",
        skillimage: "images/opicons/blemishineskill.webp"

    },
    talents: [
        {
            name: "Knight of Sword and Shield",
            description: "When deployed, allies that have a Hit Recovery\nskill also gain 1 SP when attacking.",
            modifiers: {
            },
            applyeffects:
            {
                name: "Knight of Sword and Shield effect",
                apply: "aliveallies",
                range: 99,
                modifiers: {
                    sphit:true
                },
                duration: 0.5,
                targets: 99,
            },
            apply: "self",
        },
        {
            name: "Mercy",
            description: "Blemishine can attack and will prioritize Sleeping enemies;\nIncrease ATK to 144% when attacking Sleeping enemies",
            modifiers: {
                priority: "sleep",
                dmgsleep : 1.44
            },
            apply: "self",
        },
        {
            name: "Trait",
            description: "Can heal allies by using the skill",
            modifiers: {
            },
            apply: "self",
        },

    ],
    sfx: {
       
        hit: {
            src: "blem-hit",
            volume: 0.1
        },
        skillact: {
            src: "blem-skill",
            volume: 0.3
        },

        skillhit: {
            src: "blem-skillhit",
            volume: 0.1
        },

    }
}

playerlist["Angelina"] = {
    name: "Angelina",
    hp: 1385,
    atk: 642,
    def: 120,
    res: 25,
    atkinterval: 1.9,
    blockcount: 1,
    rarity: "rgb(255, 115, 0)",

    rdtimer: 70,
    rdcounter: 0,

    type: "r",
    class: "supporter",
    subclass: "Decel Bender",


    cost: 14,
    basecost: 14,

    range: 3,
    targets: 1,

    dmgtype: "magic",

    opicon: "images/opicons/angelina.webp",

    spritesheet: "images/sprites/angelina-sheet.webp",

    skillsfx: false,
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc: false, speed: 4, color: new BABYLON.Color3(0.87, 0.18, 0.89) },
    atkanim: {
        start: 999,
        end: 999,
        exists:false
    },
    death: {
        start: 0,
        end: 14,
    },

    idle: {
        start: 15,
        end: 44
    },

    drop: {
        start: 45,
        end: 59
    },

    skillidle: {
        start: 60,
        end: 66,
    },

    skill: {
        name: "Arcane Staff - Anti-Gravity Mode",
        description: "ATK +150%\nTargets 4 enemies at once",
        duration: 25,
        sp: 25,
        initialsp: 10,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            atk: 1.5,
            targets: 3,
            canattack: true,
        },
        apply: "self",
        skillimage: "images/opicons/angelinaskill.webp"

    },
    talents: [
        {
            name: "Accelerator Field",
            description: "All allies' ATK Speed +8.",
            modifiers: {
            },
            applyeffects:
            {
                name: "Accelerator Field effect",
                apply: "aliveallies",
                range: 99,
                modifiers: {
                    aspd:8
                },
                duration: 0.5,
                targets: 99,
            },
            apply: "self",
        },
        {
            name: "Part-time Job",
            description: "Cannot attack while skill is inactive.\nRestore 25 HP to all allies every second.",
            modifiers: {
                canattack:false,
            },
            applyeffects:
            {
                name: "Part-time Job effect",
                apply: "aliveallies",
                range: 99,
                modifiers: {
                    flathpregen:25
                },
                duration: 0.5,
                targets: 99,
            },
            apply: "self",
        },
        {
            name: "Trait",
            description: "Each attack lowers the movement speed\nby 80% for 1sec",
            modifiers: {
            },
            applyeffects: {
                apply: "hit",
                modifiers: {
                    speedpercent: 0.20,
                },
                duration: 1
            },
            apply: "self",
        }
    ],
    sfx: {
        hit: {
            src: "angelina-hit",
            volume: 0.1
        },
        skillact: {
            src: "angelina-skill",
            volume: 0.3
        }
    }
}

playerlist["Texas"] = {
    name: "Texas",
    hp: 1598,
    atk: 681,
    def: 320,
    res: 0,
    atkinterval: 0.93,
    blockcount: 1,
    rarity: "rgb(255, 115, 0)",

    rdtimer: 16,
    rdcounter: 0,

    type: "g",
    class: "specialist",
    subclass: "Executor",


    cost: 8,
    basecost: 8,

    range: 1,
    targets: 1,


    dmgtype: "physical",

    

    opicon: "images/opicons/texas.webp",

    spritesheet: "images/sprites/texas-sheet.webp",

    skillsfx: true,
    deploybomb: true,

    atkanim: {
        start: 0,
        end: 14,
        contact: 4,
        duration: 1.1,
    },

    death: {
        start: 15,
        end: 28,
    },

    idle: {
        start: 29,
        end: 73
    },

    drop: {
        start: 74,
        end: 88
    },

    skillatkanim: {
        start: 89,
        end: 103,
        contact: 93,
        duration: 1,

    },

    skillidle: {
        start: 104,
        end: 148,

    },

    skill: {
        name: "Downpour",
        description: "DMG turns into MAGIC;\nDeals 240% ATK to surrounding enemies\nand the targets' RES -30% for 10 seconds;\nATK +55% and attacks twice in a row\nfor the rest of the duration.",
        duration: 10,
        sp: 0,
        initialsp: 0,
        chargetype: "passive",
        triggertype: "",

        modifiers: {
            skillbomb: {
                range: 1.5,
                dmg: 4.5,
                dmgtype: "magic",
                targets: 99,
                applyeffects:
                {
                    "Downpour": {
                        apply: "hit",
                        modifiers: {
                            res: -0.30,
                        },
                        duration: 10
                    }
                },
            },
            dmgtype: "magic",
            atk: 0.55,
            flatmultiatk: 1.20,
            attacks: 1
        },
        apply: "self",
        skillimage: "images/opicons/texasskill.webp"

    },
    talents: [
        {
            name: "Texan Tradition",
            description: "While skill is active, ATK +20%;\nWhen defeating an enemy for the first time,\nrestores all HP and reactivates the skill.",
            condtalent: 1,
            modifiers: {
                instantheal: 1,
                aspd: -10,
                dmgreduction: -0.30,
                reactivateskill: true,
            },
            condition: "kill",
        },
        {
            name: "Texan Swordmanship",
            description: "ATK Speed +10 and damage taken is reduced by 30%\nbefore defeating an enemy for the first time.",
            modifiers: {
                aspd: 10,
                dmgreduction: 0.30,
            },
            apply: "self",
        },
        {
            name: "Trait",
            description: "Has significantly reduced redeployment time.",
            modifiers: {

            },
            apply: "self",
        },
    ],
    sfx: {
        hit: {
            src: "texas-atk",
            volume: 0.1
        },

        skillhit: {
            src: "texas-skillhit",
            volume: 0.1
        },
        skillbomb: {
            src: "skill-texas",
            volume: 0.2
        },
        skillact: {
            src: "mute",
            volume: 0.3
        }
    }
}

playerlist["Shining"] = {
    name: "Shining",
    hp: 1613,
    atk: 590,
    def: 183,
    res: 0,
    atkinterval: 2.85,
    blockcount: 1,

    rdtimer: 70,
    rdcounter: 0,

    type: "r",
    class: "medic",
    subclass: "Doctor",
    rarity: "rgb(255, 115, 0)",


    cost: 18,
    basecost: 18,

    range: 3,
    targets: 1,

    dmgtype: "heal",

    

    opicon: "images/opicons/shining.webp",

    spritesheet: "images/sprites/shining-sheet.webp",
    skillsfx: false,

    atkanim: {
        start: 0,
        end: 14,
        contact: 8,
        duration: 1.1,
    },

    death: {
        start: 15,
        end: 29,
    },
    idle: {
        start: 30,
        end: 59,
        duration: 1.1,
    },

    drop: {
        start: 60,
        end: 72
    },

    skill: {
        name: "Creed Field",
        description: "ATK +50%;\nAll allies within range DEF +100%",
        duration: 60,
        sp: 120,
        initialsp: 115,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            atk: 0.50,
        },
        applyeffects:
        {
            name: "Creed Field effect",
            apply: "aliveallies",
            range: 3,
            modifiers: {
                def: 1,
            },
            duration: 0.5,
            targets: 99,
        },
        apply: "self",
        skillimage: "images/opicons/shiningskill.webp"


    },
    talents: [{
        name: "Code of Law",
        description: "ATK Speed +13",
        modifiers: {
            aspd: 13,
        },
        apply: "self",
    }, {
        name: "Black Fiend's Protection",
        description: "DEF of allies within range +65",
        modifiers: {
        },
        applyeffects:
        {
            name: "Black Fiend's Protection effect",
            apply: "aliveallies",
            range: 3,
            modifiers: {
                flatdef: 65,
            },
            duration: 0.5,
            targets: 99,
        },
        apply: "self",
    }
    ],
    sfx: {
        atk: {
            src: "hibiscus-atk",
            volume: 0.1
        },
        skillact: {
            src: "skill-heal",
            volume: 0.3
        }
    }
}
playerlist["Saileach"] = {
    name: "Saileach",
    hp: 1835,
    atk: 611,
    def: 407,
    res: 0,
    atkinterval: 1.3,
    blockcount: 1,

    rdtimer: 66,
    rdcounter: 0,

    type: "g",
    class: "vanguard",
    subclass: "Flagbearer",
    rarity: "rgb(255, 115, 0)",


    cost: 10,
    basecost: 10,

    range: 1,
    targets: 1,

    dmgtype: "physical",

    opicon: "images/opicons/saileach.webp",

    spritesheet: "images/sprites/saileach-sheet.webp",
    skillsfx: false,

    atkanim: {
        start: 0,
        end: 14,
        contact: 8,
        duration: 1.1,
    },

    death: {
        start: 15,
        end: 29,
    },

    idle: {
        start: 30,
        end: 69,
        duration: 1.1,
    },

    drop: {
        start: 70,
        end: 84
    },
    skillidle: {
        start: 85,
        end: 124
    },

    skill: {
        name: "Inheritance of Faith",
        description: "Range +1.Instantly gains 20 DP.\nGrants DEF +50% and regenerates HP\nequals to 50% of Saileach's ATK\nto the ally with the lowest HP percentage\nin range.",
        duration: 15,
        sp: 29,
        initialsp: 15,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            instantdp: 20,
            canattack: false,
            range: 1,
            block: -99,
        },
        applyeffects:
        {
            name: "Faith effect",
            apply: "aliveallies",
            range: 2,
            modifiers: {
                def: 0.5,
                flathpregen: {
                    stat: "atk",
                    percent: 0.5
                }
            },
            duration: 0.1,
            targets: 1,
            effecticon: 13,
            targetselected: [],
        },
        apply: "self",
        skillimage: "images/opicons/saileachskill.webp"

    },
    talents: [{
        name: "Spiritual Influence",
        description: "After deployment, the next ally unit has -2 DP Cost",
        modifiers: {
        },
        apply: "self",
    }, {
        name: "Unwavering Banner",
        description: "Allied units within the surrounding 8 tiles of Saileach\nhave ATK Speed +12 and regenerate 1.5% of their own Max HP.",
        modifiers: {
        },
        applyeffects:
        {
            name: "Unwavering Banner effect",
            apply: "aliveallies",
            range: 1.5,
            modifiers: {
                aspd: 12,
                hpregenpercent: 0.015,
            },
            duration: 0.5,
            targets: 99,
        },
        apply: "self",
    },
    {
        name: "Trait",
        description: "Cannot block enemies or attack during the skill duration.",
        modifiers: {

        },
        apply: "self",
    },
    ],
    sfx: {
        hit: {
            src: "saileach-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-flag",
            volume: 0.3
        }
    }

}

playerlist["Saga"] = {
    name: "Saga",
    hp: 2205,
    atk: 640,
    def: 372,
    res: 0,
    atkinterval: 1,
    blockcount: 2,
    rarity: "rgb(255, 115, 0)",

    rdtimer: 66,
    rdcounter: 0,

    type: "g",
    class: "vanguard",
    subclass: "Pioneer",


    cost: 8,
    basecost: 12,

    range: 1,
    targets: 1,


    dmgtype: "physical",

    

    opicon: "images/opicons/saga.webp",

    spritesheet: "images/sprites/saga-sheet.webp",


    skillsfx: true,

    atkanim: {
        start: 0,
        end: 15,
        contact: 4,
        duration: 1.1,
    },

    death: {
        start: 16,
        end: 30,
    },

    idle: {
        start: 31,
        end: 90
    },

    drop: {
        start: 91,
        end: 105
    },

    skillidle: {
        start: 106,
        end: 165,
    },
    skillatkanim: {
        start: 166,
        end: 180,
        contact: 172,
        duration: 1.1,
    },


    skill: {
        name: "Fierce Glare",
        description: "Instantly gains 20 DP.\nAttack Interval slightly increases;\nAttack Range +1 tile;\nATK +130%, Targets hit +1.",
        duration: 20,
        sp: 40,
        initialsp: 28,
        chargetype: "second",
        triggertype: "manual",

        modifiers: {
            instantdp: 20,
            targets: 1,
            range: 1.3,
            atk: 1.3,
            atkinterval: 0.5,
            ignoreaniminterval: true,
        },
        apply: "self",
        skillimage: "images/opicons/sagaskill.webp"

    },
    talents: [
        {
            name: "Walking the Wetclouds",
            description: "At first deployment, DP Cost -4",
            modifiers: {
            },
            apply: "self",

        },
        {
            name: "Clear Mind",
            description: "When HP falls below 40% for the first time;\ngains 70% Physical Dodge and restores 6% Max HP per second,\nlasting 17 seconds.",
            condtalent: 1,
            applyeffects:
            {
                apply: "self",
                modifiers: {
                    physdodge: 0.70,
                    hpregenpercent: 0.06,
                },
                duration: 17
            },
            modifiers: {
            },
            condition: "hp",
        },
    ],
    sfx: {
        hit: {
            src: "saga-hit",
            volume: 0.1
        },

        skillhit: {
            src: "saga-skillhit",
            volume: 0.15
        },

        skillact: {
            src: "skill-saga",
            volume: 0.3
        }
    }
}

playerlist["Exusiai"] = {
    name: "Exusiai",
    hp: 1673,
    atk: 657,
    def: 161,
    res: 0,
    atkinterval: 1,
    blockcount: 1,
    rarity: "rgb(255, 115, 0)",

    rdtimer: 70,
    rdcounter: 0,

    type: "r",
    class: "sniper",
    subclass: "Marksman",


    cost: 12,
    basecost: 12,

    range: 3,
    targets: 1,


    dmgtype: "physical",

    

    opicon: "images/opicons/exusiai.webp",

    spritesheet: "images/sprites/exusiai-sheet.webp",
    bullet: { size: { height: 1, depth: 4, width: 0.5 }, arc: false, speed: 4, color: new BABYLON.Color3(1, 0.78, 0.08) },


    skillsfx: true,

    atkanim: {
        start: 0,
        end: 14,
        contact: 7,
        duration: 1.1,
    },

    death: {
        start: 15,
        end: 29,
    },

    idle: {
        start: 30,
        end: 59
    },

    drop: {
        start: 60,
        end: 74
    },


    skill: {
        name: "Overloading Mode",
        description: "Shoots 5 times in a row;\nATK +10%, attack interval decreases.",
        duration: 15,
        sp: 30,
        initialsp: 20,
        chargetype: "second",
        triggertype: "auto",

        modifiers: {
            atk: 0.1,
            attacks: 4,
            atkinterval: -0.22,
        },
        apply: "self",
        skillimage: "images/opicons/exusiaiskill.webp"

    },
    talents: [
        {
            name: "Fast Cartridge",
            description: "ATK Speed +15",
            modifiers: {
                aspd: 15,
            },
            apply: "self",

        },
        {
            name: "Angel's Blessings",
            description: "ATK +8%; Max HP +13%;\nThe same buff is given to a random ally when Exusiai is deployed.",
            modifiers: {
                atk: 0.08,
                maxhp: 0.13
            },
            apply: "selfplus",
            effecticon: 10
        },
        {
            name: "Trait",
            description: "Prioritizes flying enemies",
            modifiers: {
                priority: "flying",
            },
            apply: "self",
        }

    ],
    sfx: {
        atk: {
            src: "exusiai-atk",
            volume: 0.1
        },

        skillatk: {
            src: "exusiai-skillatk",
            volume: 0.1
        },

        skillact: {
            src: "skill-atk",
            volume: 0.3
        }
    }
}

playerlist["Schwarz"] = {
    name: "Schwarz",
    hp: 1833,
    atk: 970,
    def: 225,
    res: 0,
    atkinterval: 1.6,
    blockcount: 1,
    rarity: "rgb(255, 115, 0)",

    rdtimer: 41,
    rdcounter: 0,

    type: "r",
    class: "sniper",
    subclass: "Heavy shooter",

    cost: 18,
    basecost: 18,

    range: 2,
    targets: 1,


    dmgtype: "physical",

    

    opicon: "images/opicons/schwarz.webp",

    spritesheet: "images/sprites/schwarz-sheet.webp",


    skillsfx: true,
    bullet: { size: { height: 1, depth: 8, width: 0.5 }, arc: false, speed: 4, color: new BABYLON.Color3(0.4, 0.4, 0.4) },
    skillbullet: { size: { height: 1, depth: 8, width: 1.5 }, arc: false, speed: 4, color: new BABYLON.Color3(0.93, 0.36, 0.6) },

    atkanim: {
        start: 0,
        end: 27,
        contact: 3,
        duration: 1.1,
    },

    death: {
        start: 28,
        end: 41,
    },

    idle: {
        start: 42,
        end: 71
    },

    drop: {
        start: 72,
        end: 86
    },

    skillidle: {
        start: 87,
        end: 146,

    },
    skillatkanim: {
        start: 147,
        end: 174,
        contact: 150,
        duration: 1.1,
    },

    skill: {
        name: "Final Tactics",
        description: "Range changes to 4 tiles in a straight line;\nATK +120%, attack interval increases.\nActivation chance of talent\nincreases to 100%.",
        duration: 25,
        sp: 25,
        initialsp: 12,
        chargetype: "second",
        triggertype: "manual",

        modifiers: {
            atk: 1.2,
            atkinterval: 0.4,
            ignoreaniminterval: true,
            range: 2.3,
            critchance: 1,
        },
        apply: "self",
        skillimage: "images/opicons/schwarzskill.webp"

    },
    talents: [
        {
            name: "Armor Penetration Arrow",
            description: "Has a 20% chance of increasing\nthe next atk damage to 160%\nand reduce the target's DEF by 20% for 5 seconds.",
            modifiers: {
                critchance: 0.20,
                critdmg: 1.6,
            },
            applyeffects: {
                apply: "crit",
                modifiers: {
                    flatmultidef: 0.8,
                },
                effecticon: 6,
                duration: 5
            },
            apply: "self",

        },
        {
            name: "Swift Action",
            description: "Redeployment time -25 seconds",
            modifiers: {
            },
            apply: "self",
        },
    ],
    sfx: {
        atk: {
            src: "schwarz-atk",
            volume: 0.05
        },

        hit: {
            src: "schwarz-hit",
            volume: 0.1
        },

        skillhit: {
            src: "schwarz-skillhit",
            volume: 0.15
        },

        skillact: {
            src: "skill-atk",
            volume: 0.3
        }
    }
}

playerlist["Ceobe"] = {
    name: "Ceobe",
    hp: 1565,
    atk: 784,
    def: 128,
    res: 20,
    atkinterval: 1.6,
    blockcount: 1,
    rarity: "rgb(255, 115, 0)",

    rdtimer: 66,
    rdcounter: 0,

    type: "r",
    class: "caster",
    subclass: "Core caster",


    cost: 19,
    basecost: 19,

    range: 2,
    targets: 1,


    dmgtype: "magic",

    

    opicon: "images/opicons/ceobe.webp",

    spritesheet: "images/sprites/ceobe-sheet.webp",

    skillsfx: true,
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc: false, speed: 4, color: new BABYLON.Color3(0.87, 0.18, 0.89) },
    skillbullet: { size: { height: 1, depth: 6, width: 1.5 }, arc: false, speed: 4, color: new BABYLON.Color3(1, 0.4, 0) },

    atkanim: {
        start: 0,
        end: 23,
        contact: 12,
        duration: 1.1,
    },

    death: {
        start: 24,
        end: 38,
    },

    idle: {
        start: 39,
        end: 86
    },

    drop: {
        start: 87,
        end: 101
    },

    skillidle: {
        start: 102,
        end: 117,

    },
    skillatkanim: {
        start: 118,
        end: 127,
        contact: 124,
        duration: 1,

    },

    skill: {
        name: "Really Hot Knives",
        description: "Attack interval is reduced greatly;\nPrioritizes enemies with the highest DEF.",
        duration: 40,
        sp: 40,
        initialsp: 25,
        chargetype: "second",
        triggertype: "manual",

        modifiers: {
            priority: "highDEF",
            atkinterval: -1.072
        },
        apply: "self",
        skillimage: "images/opicons/ceobeskill.webp"

    },
    talents: [
        {
            name: "Lone Journey",
            description: "ATK +8%; ATK Speed+8%",
            modifiers: {
                flatmultiatk: 1.08,
                aspd: 8,
            },
            apply: "self",
        },
        {
            name: "Thresher",
            description: "Each attack deals additional MAGIC damage\nequal to 44% of the target's DEF.",
            modifiers: {
                bonusdefdmg: 0.44,
            },
            apply: "self",
        },
    ],
    sfx: {
        atk: {
            src: "ceobe-atk",
            volume: 0.05
        },

        hit: {
            src: "ceobe-hit",
            volume: 0.1
        },

        skillatk: {
            src: "ceobe-skillatk",
            volume: 0.1
        },

        skillhit: {
            src: "ceobe-skillhit",
            volume: 0.05
        },

        skillact: {
            src: "skill-atk",
            volume: 0.3
        }
    }
}

playerlist["Skadi"] = {
    name: "Skadi",
    hp: 3866,
    atk: 1128,
    def: 304,
    res: 0,
    atkinterval: 1.5,
    blockcount: 1,
    rarity: "rgb(255, 115, 0)",

    rdtimer: 56,
    rdcounter: 0,

    type: "g",
    class: "guard",
    subclass: "Dreadnought",


    cost: 17,
    basecost: 17,

    range: 1,
    targets: 1,


    dmgtype: "physical",

    

    opicon: "images/opicons/skadi.webp",

    spritesheet: "images/sprites/skadi-sheet.webp",

    skillsfx: true,

    atkanim: {
        start: 0,
        end: 22,
        contact: 12,
        duration: 1.1,
    },

    death: {
        start: 23,
        end: 37,
    },

    idle: {
        start: 38,
        end: 67
    },

    drop: {
        start: 68,
        end: 82
    },


    skill: {
        name: "Wave Strike",
        description: "ATK +170% for 30 seconds\nafter deployment.",
        duration: 30,
        sp: 0,
        initialsp: 0,
        chargetype: "passive",
        triggertype: "",

        modifiers: {
            atk: 1.7,
        },
        apply: "self",
        skillimage: "images/opicons/skadiskill.webp"

    },
    talents: [

        {
            name: "Abyssal Predator",
            description: "ATK +16%; Redeployment time -10 seconds.",
            modifiers: {
                atk: 0.16
            },
            apply: "self",
        },
        {
            name: "Abyssal Resurrection",
            description: "When defeated for the first time,\ndoes not retreat and recovers HP instead.\nHowever, Max HP -60% and ATK Speed +30.",
            condtalent: 1,
            modifiers: {
                instantheal: 1,
                aspd: 30,
                maxhp: -0.60,
            },
            condition: "death",
        }
    ],
    sfx: {
        atk: {
            src: "melantha-atk",
            volume: 0.1
        },
        hit: {
            src: "melantha-hit",
            volume: 0.1
        },
        skillhit: {
            src: "skadi-skillhit",
            volume: 0.1
        },
        skillact: {
            src: "skill-atk",
            volume: 0.3
        }
    }
}

playerlist["Platinum"] = {
    name: "Platinum",
    hp: 1550,
    atk: 593,
    def: 165,
    res: 0,
    atkinterval: 1,
    blockcount: 1,
    rarity: "rgb(255, 221, 26)",

    rdtimer: 66,
    rdcounter: 0,

    type: "r",
    class: "sniper",
    subclass: "Marksman",


    cost: 12,
    basecost: 12,

    range: 3,
    targets: 1,


    dmgtype: "physical",

    

    opicon: "images/opicons/platinum.webp",

    spritesheet: "images/sprites/platinum-sheet.webp",
    bullet: { size: { height: 1, depth: 4, width: 0.5 }, arc: false, speed: 4, color: new BABYLON.Color3(1, 1, 1) },

    skillsfx: false,

    atkanim: {
        start: 0,
        end: 14,
        contact: 10,
        duration: 1.1,
    },

    death: {
        start: 15,
        end: 29,
    },

    idle: {
        start: 30,
        end: 58
    },

    drop: {
        start: 59,
        end: 74
    },

    skillatkanim: {
        start: 75,
        end: 95,
        contact: 75+18,
        duration: 1.1,

    },


    skill: {
        name: "Pegasian Sight",
        description: "ATK Speed -20; but ATK +100%;\nRange expands.\nInfinite duration",
        duration: 9999,
        sp: 50,
        initialsp: 0,
        chargetype: "second",
        triggertype: "auto",

        modifiers: {
            atk: 1,
            aspd: -20,
            range : 0.5,
            ignoreaniminterval: true,
        },
        apply: "self",
        skillimage: "images/opicons/platinumskill.webp"

    },
    talents: [
        {
            name: "All-Out Attack",
            description: "The longer the interval from the last attack is,\nthe higher the ATK of the next attack will be\n(The longest interval is 2.5 seconds \nand the corresponding ATK increases to 200%)",
            modifiers: {
            },
            apply: "self",

        },
        {
            name: "Trait",
            description: "Prioritizes flying enemies",
            modifiers: {
                priority: "flying",
            },
            apply: "self",
        }

    ],
    sfx: {
        atk: {
            src: "plat-atk",
            volume: 0.1
        },

        skillact: {
            src: "plat-skill",
            volume: 0.4
        }
    }
}

playerlist["Lava"] = {
    name: "Lava",
    hp: 1543,
    atk: 950,
    def: 115,
    res: 20,
    atkinterval: 2.9,
    blockcount: 1,
    rarity: "rgb(255, 221, 26)",

    rdtimer: 60,
    rdcounter: 0,

    type: "r",
    class: "caster",
    subclass: "Splash caster",


    cost: 32,
    basecost: 32,

    range: 2,
    targets: 1,

    dmgtype: "magic",

    

    opicon: "images/opicons/lava.webp",

    spritesheet: "images/sprites/lava-sheet.webp",

    skillsfx: false,

    atkanim: {
        start: 0,
        end: 14,
        contact: 9,
        duration: 1.1,
    },

    death: {
        start: 15,
        end: 29,
    },

    idle: {
        start: 31,
        end: 49
    },

    drop: {
        start: 50,
        end: 61
    },

    skillatkanim: {
        start: 62,
        end: 83,
        contact: 62+8,
        duration: 1.1,
    },

    skill: {
        name: "Flame Quenched Dagger",
        description: "Attack Range +1 tile, ATK +15%,\nand attack up to 2 targets simultaneously.\nInfinite duration",
        duration: 9999,
        sp: 80,
        initialsp: 0,
        chargetype: "second",
        triggertype: "auto",
        modifiers: {
            atk: 0.15,
            range: 1,
            targets: 1,
        },
        apply: "self",
        skillimage: "images/opicons/lavaskill.webp"

    },
    talents: [
        {
            name: "See no Evil",
            description: "When Lava defeats an enemy,\nLava gains ATK +1%, stacking up to 10 times",
            condtalent: 10,
            modifiers: {
                flatmultiatk:1.01
            },
            condition: "kill",
        },
        {
            name: "Trait",
            description: "Attacks hit all enemies in a radius \nfrom the primary target.",
            modifiers: {
                splash: true,
                splashradius: 1.1,
            },
            apply: "self",
        }],
    sfx: {
        atk: {
            src: "lava-atk",
            volume: 0.1
        },
        hit: {
            src: "lava-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-atk",
            volume: 0.3
        }
    }
}

playerlist["Reed"] = {
    name: "Reed",
    hp: 2215,
    atk: 657,
    def: 364,
    res: 0,
    atkinterval: 1,
    blockcount: 1,

    rarity: "rgb(255, 221, 26)",

    rdtimer: 60,

    rdcounter: 0,

    type: "g",
    class: "vanguard",
    subclass: "Charger",

    cost: 10,
    basecost: 10,
    range: 1,

    targets: 1,

    dmgtype: "physical",

    

    opicon: "images/opicons/reed.webp",

    spritesheet: "images/sprites/reed-sheet.webp",
    skillsfx: false,

    atkanim: {
        start: 0,
        end: 11,
        contact: 3,
        duration: 1.3,
    },

    death: {
        start: 12,
        end: 26,
    },

    idle: {
        start: 27,
        end: 56
    },

    drop: {
        start: 57,
        end: 71
    },
    skill: {
        name: "Soul Spark",
        description: "ATK +110%,\ndamage turns into MAGIC,\nand restores +1 DP when\ndefeating an enemy.",
        duration: 30,
        sp: 35,
        initialsp: 20,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            atk: 1.1,
            dponkill: 1,
            dmgtype:"magic"
        },
        apply: "self",
        skillimage: "images/opicons/reedskill.webp"
    },
    talents: [{
        name: "Blighted Blood",
        description: "RES +20",
        modifiers: {
            flatres: 20,
        },
        apply: "self",
    }, {
        name: "Trait",
        description: "Gains 1DP each kill.",
        modifiers: {
            dponkill: 1,
        },
        apply: "self",
    }],
    sfx: {
        atk: {
            src: "plume-atk",
            volume: 0.1
        },
        hit: {
            src: "plume-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-speed",
            volume: 0.3
        }
    }
}

playerlist["Savage"] = {
    name: "Savage",
    hp: 2680,
    atk: 740,
    def: 395,
    res: 0,
    atkinterval: 1.2,
    blockcount: 3,
    rarity: "rgb(255, 221, 26)",

    rdtimer: 70,

    rdcounter: 0,

    type: "g",
    class: "guard",
    subclass: "Centurion",

    cost: 21,
    basecost: 21,
    range: 1,

    targets: 3,

    dmgtype: "physical",

    

    opicon: "images/opicons/savage.webp",

    spritesheet: "images/sprites/savage-sheet.webp",
    skillsfx: true,

    atkanim: {
        start: 0,
        end: 16,
        contact: 6,
        duration: 1.1,
    },

    death: {
        start: 17,
        end: 30,
    },

    idle: {
        start: 31,
        end: 60
    },

    drop: {
        start: 61,
        end: 75
    },
    skill: {
        name: "Power Strike β",
        description: "Increase ATK \nof next hit to 230%",
        duration: 0,
        sp: 3,
        initialsp: 0,
        chargetype: "attack",
        triggertype: "auto",
        modifiers: {
            dmg: 2.3,
        },
        apply: "self",
        skillimage: "images/opicons/durinskill.png"

    },
    talents: [{
        name: "Valley",
        description: "ATK +10%; DEF +10%",
        modifiers: {
            flatmultiatk: 1.1,
            flatmultidef: 1.1,
        },
        apply: "self",
    },
    {
        name: "Trait",
        description: "Hit multiple targets within range equals to block count",
        modifiers: {
        },
        apply: "self",
    }
    ],
    sfx: {
        atk: {
            src: "savage-atk",
            volume: 0.1
        },
        hit: {
            src: "savage-hit",
            volume: 0.1
        },
        skillhit: {
            src: "savage-skill-hit",
            volume: 0.1
        },
    }
}


playerlist["Istina"] = {
    name: "Istina",
    hp: 1280,
    atk: 606,
    def: 104,
    res: 20,
    atkinterval: 1.9,
    blockcount: 1,
    rarity: "rgb(255, 221, 26)",


    rdtimer: 66,
    rdcounter: 0,

    type: "r",
    class: "supporter",
    subclass: "Decel Bender",


    cost: 13,
    basecost: 13,

    range: 2,
    targets: 1,

    dmgtype: "magic",

    

    opicon: "images/opicons/istina.webp",

    spritesheet: "images/sprites/istina-sheet.webp",

    skillsfx: false,
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc: false, speed: 4, color: new BABYLON.Color3(1, 1, 1) },


    atkanim: {
        start: 0,
        end: 16,
        contact: 8,
        duration: 1.1,
    },

    death: {
        start: 17,
        end: 30,
    },

    idle: {
        start: 31,
        end: 60
    },

    drop: {
        start: 61,
        end: 75
    },

    skill: {
        name: "Literature Storm",
        description: "ATK +75%; Range expands;\nAttacks 2 extra targets",
        duration: 25,
        sp: 50,
        initialsp: 30,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            atk: 0.75,
            range: 0.5,
            targets: 2,
        },
        apply: "self",
        skillimage: "images/opicons/istinaskill.webp"
    },
    talents: [{
        name: "Explorer",
        description: "DEF -35%; ATK Speed +21",
        modifiers: {
            aspd: 21,
            flatmultidef: 0.65
        },
        apply: "self",
    },
    {
        name: "Trait",
        description: "Each attack lowers the movement speed\nby 80% for 1sec",
        modifiers: {
        },
        applyeffects: {
            apply: "hit",
            modifiers: {
                speedpercent: 0.20,
            },
            duration: 1
        },
        apply: "self",
    }
    ],
    sfx: {
        atk: {
            src: "istina-atk",
            volume: 0.1
        },
        hit: {
            src: "istina-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-atk",
            volume: 0.3
        },
    }
}

playerlist["Nearl"] = {
    name: "Nearl",
    hp: 2780,
    atk: 502,
    def: 650,
    res: 10,
    atkinterval: 1.2,
    blockcount: 3,
    rarity: "rgb(255, 221, 26)",

    rdtimer: 66,
    rdcounter: 0,

    type: "g",
    class: "defender",
    subclass: "Guardian",


    cost: 19,
    basecost: 19,

    range: 0,
    targets: 1,


    dmgtype: "physical",

    

    opicon: "images/opicons/nearl.webp",

    spritesheet: "images/sprites/nearl-sheet.webp",

    skillsfx: true,

    atkanim: {
        start: 0,
        end: 14,
        contact: 8,
        duration: 1.1,
    },

    death: {
        start: 15,
        end: 29,
    },

    idle: {
        start: 30,
        end: 60
    },

    drop: {
        start: 61,
        end: 73
    },

    skillatkanim: {
        start: 74,
        end: 91,
        contact: 81,
        duration: 1,

    },

    skill: {
        name: "First Aid Mode",
        description: "ATK +80%; Range expands;\nFocuses on healing allies.",
        duration: 40,
        sp: 40,
        initialsp: 30,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            range: 1.5,
            atk: 1,
            dmgtype: "heal",
            atkinterval: 1.56,
            ignoreaniminterval: true,
        },
        apply: "self",
        skillimage: "images/opicons/nearlskill.webp"

    },
    talents: [
        {
            name: "Healing Boost",
            description: "ATK +5%; Max HP +5%;\nNearl's healing effect increases by 20%;",
            modifiers: {
                flatmultiatk: 1.05,
                maxhp: 0.05,
            },
            apply: "self",
        },
        {
            name: "Trait",
            description: "Can heal allies by using the skill;",
            modifiers: {
            },
            apply: "self",
        },

    ],
    sfx: {
        atk: {
            src: "nearl-atk",
            volume: 0.1
        },
        hit: {
            src: "nearl-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-heal",
            volume: 0.3
        },

        skillatk: {
            src: "hibiscus-atk",
            volume: 0.1
        },
        skillhit: {
            src: "mute",
            volume: 0.1
        },

    }
}

playerlist["Lappland"] = {
    name: "Lappland",
    hp: 2350,
    atk: 785,
    def: 365,
    res: 15,
    atkinterval: 1.3,
    blockcount: 2,
    rarity: "rgb(255, 221, 26)",

    rdtimer: 66,
    rdcounter: 0,

    type: "g",
    class: "guard",
    subclass: "Lord",

    cost: 17,
    basecost: 17,

    range: 2,
    targets: 1,

    dmgtype: "physical",

    

    opicon: "images/opicons/lappland.webp",

    spritesheet: "images/sprites/lappland-sheet.webp",
    skillsfx: true,

    atkanim: {
        start: 0,
        end: 20,
        contact: 10,
        duration: 1.1,
    },

    death: {
        start: 21,
        end: 35,
    },

    idle: {
        start: 36,
        end: 65,
        duration: 1,
    },

    drop: {
        start: 66,
        end: 77
    },
    skillatkanim: {
        start: 78,
        end: 94,
        contact: 86,

    },

    skill: {
        name: "Wolf Spirit",
        description: "ATK +120%\nDamage turns into MAGIC;\nAttacks 1 extra target.",
        duration: 20,
        sp: 17,
        initialsp: 0,
        chargetype: "attack",
        triggertype: "auto",
        modifiers: {
            atk: 1.2,
            targets:1,
            dmgtype: "magic",
        },
        apply: "self",
        skillimage: "images/opicons/lapplandskill.webp"

    },
    talents: [{
        name: "Spiritual Destruction",
        description: "Silences the target when attacking,\n(disables their special skill)\nlasting 3 seconds",
        modifiers: {
        },
        applyeffects: {
            apply: "hit",
            modifiers: {
                silence:3,
            },
            duration: 1
        },
        apply: "self",
    }
        , {
        name: "Trait",
        description: "Can do ranged attacks to unblocked enemies\nin range for 80% of own attack.",
        modifiers: {
        },
        apply: "self",
    }
    ],
    sfx: {
        atk: {
            src: "melantha-atk",
            volume: 0.1
        },
        hit: {
            src: "lappland-atk",
            volume: 0.1
        },
        skillatk: {
            src: "lappland-skillatk",
            volume: 0.1
        },
        skillact: {
            src: "lappland-skill",
            volume: 0.3
        }
    }
}

playerlist["Ceylon"] = {
    name: "Ceylon",
    hp: 1655,
    atk: 508,
    def: 123,
    res: 10,
    atkinterval: 2.85,
    blockcount: 1,

    rdtimer: 60,
    rdcounter: 0,

    type: "r",
    class: "medic",
    subclass: "Doctor",
    rarity: "rgb(255, 221, 26)",


    cost: 19,
    basecost: 19,

    range: 3,
    targets: 1,

    dmgtype: "heal",

    

    opicon: "images/opicons/ceylon.webp",

    spritesheet: "images/sprites/ceylon-sheet.webp",
    skillsfx: false,

    atkanim: {
        start: 0,
        end: 21,
        contact: 8,
        duration: 1.1,
    },

    death: {
        start: 22,
        end: 36,
    },
    idle: {
        start: 37,
        end: 76,
        duration: 1,
    },

    drop: {
        start: 77,
        end: 91
    },

    skill: {
        name: "Water Blessing",
        description: "ATK +30%;\nTargets healed +1;\nAllies within range have the duration\n of negative cold, frozen or stuns reduced.\nInfinite duration",
        duration: 9999,
        sp: 80,
        initialsp: 0,
        chargetype: "second",
        triggertype: "auto",
        modifiers: {
            targets:1,
            atk: 0.30,
        },
        applyeffects:
        {
            name: "Water Blessing effect",
            apply: "aliveallies",
            range: 3,
            modifiers: {
                statusres: -0.25,
            },
            duration: 0.5,
            targets: 99,
        },
        apply: "self",
        skillimage: "images/opicons/ceylonskill.webp"


    },
    talents: [
        {
        name: "Lake Walker",
        description: "ATK +12%; Allies in the 4 adjacent tiles\nto Ceylon gain the same effect.",
        modifiers: {
        },
        applyeffects:
        {
            name: "Lake Walker effect",
            apply: "aliveallies",
            range: 1,
            modifiers: {
                atk:0.12
            },
            duration: 0.5,
            targets: 99,
        },
        apply: "self",
    }
    ],
    sfx: {
        atk: {
            src: "hibiscus-atk",
            volume: 0.1
        },
        skillact: {
            src: "skill-heal",
            volume: 0.3
        }
    }

}


playerlist["Breeze"] = {
    //hasmodule
    name: "Breeze",
    hp: 1795,
    atk: 393,
    def: 145,
    res: 0,
    atkinterval: 2.85,
    blockcount: 1,
    rarity: "rgb(255, 221, 26)",

    rdtimer: 60,
    rdcounter: 0,

    type: "r",
    class: "medic",
    subclass: "Multi-target healer",


    cost: 15,
    basecost: 15,

    range: 2.5,
    targets: 3,


    dmgtype: "heal",

    

    opicon: "images/opicons/breeze.webp",

    spritesheet: "images/sprites/breeze-sheet.webp",

    skillsfx: false,

    atkanim: {
        start: 0,
        end: 14,
        contact: 8,
        duration: 1.1,
    },

    death: {
        start: 15,
        end: 29,
    },

    idle: {
        start: 30,
        end: 69
    },

    drop: {
        start: 70,
        end: 84
    },

    skill: {
        name: "Cluster Therapy",
        description: "ATK +140%;\nTargets healed -1",
        duration: 35,
        sp: 30,
        initialsp: 20,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            targets: -1,
            atk: 1.4,
        },
        apply: "self",
        skillimage: "images/opicons/breezeskill.webp"

    },
    talents: [
        {
            name: "Surgical Instrument Kit",
            description: "ATK +5%; Max HP +5%; Range expands",

            modifiers: {
                flatmultiatk: 1.05,
                maxhp: 0.05
            },
            apply: "self",
        },
        {
            name: "Trait",
            description: "Restores the HP of 3 allies simultaneously",
            modifiers: {
            },
            apply: "self",
        }
    ],
    sfx: {
        atk: {
            src: "hibiscus-atk",
            volume: 0.1
        },
        skillact: {
            src: "skill-heal",
            volume: 0.3
        }
    }
}

playerlist["Astesia"] = {
    name: "Astesia",
    hp: 2523,
    atk: 690,
    def: 471,
    res: 15,
    atkinterval: 1.25,
    blockcount: 1,
    rarity: "rgb(255, 221, 26)",

    rdtimer: 60,
    rdcounter: 0,

    class: "guard",
    subclass: "Magic fighter",

    type: "g",

    cost: 19,
    basecost: 19,

    range: 1,
    targets: 1,

    dmgtype: "magic",

    opicon: "images/opicons/astesia.webp",

    spritesheet: "images/sprites/astesia-sheet.webp",

    skillsfx: true,


    atkanim: {
        start: 0,
        end: 18,
        contact: 10,
        duration: 1.1,
    },

    death: {
        start: 19,
        end: 33,
    },

    idle: {
        start: 34,
        end: 63
    },

    drop: {
        start: 64,
        end: 78
    },


    skill: {
        name: "Astral Sword",
        description: "ATK +80%, DEF +80%,\nBlocked enemies +1, Targets +1",
        duration: 15,
        sp: 20,
        initialsp: 10,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            atk: 0.8,
            def:0.8,
            block:1,
            targets:1
        },
        apply: "self",
        skillimage: "images/opicons/astesiaskill.webp"

    },
    talents: [
        {
            name: "Celestial Globe",
            description: "For every 20 seconds Astesia stays on the battlefield,\nATK Speed +5, stacking up to 5 times.",
            condtalent: 5,
            modifiers: {
                aspd:5,
            },
            condition: "time",
            time:20,
        },
    ],
    sfx: {
        atk: {
            src: "astesia-atk",
            volume: 0.1
        },
        hit: {
            src: "astesia-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-atk",
            volume: 0.3
        },

        skillatk: {
            src: "astesia-skillatk",
            volume: 0.1
        },
        skillhit: {
            src: "astesia-skillhit",
            volume: 0.1
        },
    }
}

playerlist["Beeswax"] = {
    name: "Beeswax",
    hp: 2005,
    atk: 845,
    def: 225,
    res: 15,
    atkinterval: 2,
    blockcount: 1,
    rarity: "rgb(255, 221, 26)",

    rdtimer: 60,
    rdcounter: 0,

    type: "r",
    class: "caster",
    subclass: "Phalanx",


    cost: 21,
    basecost: 21,

    range: 2.5,
    targets: 99,


    dmgtype: "magic",

    

    opicon: "images/opicons/beeswax.webp",

    spritesheet: "images/sprites/beeswax-sheet.webp",

    skillsfx: false,
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc: false, speed: 4, color: new BABYLON.Color3(1, 0.78, 0.08) },


    atkanim: {
        start: 0,
        end: 14,
        contact: 5,
        duration: 1.1,
    },

    death: {
        start: 15,
        end: 29,
    },

    idle: {
        start: 30,
        end: 59
    },

    drop: {
        start: 60,
        end: 74
    },

    skillidle: {
        start: 75,
        end: 104,

    },

    skill: {
        name: "Growing Sandstorm",
        description: "ATK +60%",
        duration: 20,
        sp: 18,
        initialsp: 0,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            atk: 0.6,
            flatmultidef: (1 / 3),
            flatres: -20,
            hpregenpercent: -0.04,
            canattack: true,
        },
        apply: "self",
        skillimage: "images/opicons/beeswaxskill.webp"

    },
    talents: [
        {
            name: "Shambhala's Sanctuary",
            description: "When this unit's skill is not active,\nrestores 4% Max HP per second",

            modifiers: {
                hpregenpercent: 0.04
            },
            apply: "self",
        },
        {
            name: "Trait",
            description: "Normally does not attack,\nbut has greatly increased DEF and RES;\nWhen skill is active, attacks deal AoE Magic Damage",
            modifiers: {
                flatmultidef: 3,
                flatres: 20,
                canattack: false,
            },
            apply: "self",
        },
    ],
    sfx: {
        atk: {
            src: "beeswax-hit",
            volume: 0.2
        },
        skillact: {
            src: "skill-atk",
            volume: 0.3
        }
    }
}

playerlist["Liskarm"] = {
    name: "Liskarm",
    hp: 3240,
    atk: 470,
    def: 782,
    res: 0,
    atkinterval: 1.2,
    blockcount: 3,
    rarity: "rgb(255, 221, 26)",

    rdtimer: 66,
    rdcounter: 0,

    type: "g",
    class: "defender",
    subclass: "Sentinel",


    cost: 20,
    basecost: 20,

    range: 2.3,
    targets: 1,


    dmgtype: "physical",

    

    opicon: "images/opicons/liskarm.webp",

    spritesheet: "images/sprites/liskarm-sheet.webp",

    skillsfx: false,

    atkanim: {
        start: 0,
        end: 20,
        contact: 2,
        duration: 1.1,
    },

    death: {
        start: 21,
        end: 35,
    },

    idle: {
        start: 36,
        end: 65
    },

    drop: {
        start: 66,
        end: 75
    },

    skill: {
        name: "Charged Defense",
        description: "DEF +110% for 8 seconds.",
        duration: 8,
        sp: 18,
        initialsp: 0,
        chargetype: "hit",
        triggertype: "auto",
        modifiers: {
            def: 1.1,
        },
        apply: "self",
        skillimage: "images/opicons/liskarmskill.webp"

    },
    talents: [
        {
            name: "Thunder Resistance",
            description: "RES +13",
            modifiers: {
                flatres: 13,
            },
            apply: "self",
        },
        {
            name: "Tactical Defense",
            description: "Restores 1 Skill Point to this Ally unit and \na random ally in the surrounding grids when attacked",
            modifiers: {
            },
            apply: "self",
        }
        , {
            name: "Trait",
            description: "Has extended range and does ranged attacks.",
            modifiers: {
            },
            apply: "self",
        }
    ],
    sfx: {
        atk: {
            src: "liskarm-atk",
            volume: 0.1
        },
        skillact: {
            src: "skill-def",
            volume: 0.3
        }
    }
}

playerlist["Franka"] = {
    //hasmodule
    name: "Franka",
    hp: 3988,
    atk: 1136,
    def: 260,
    res: 0,
    atkinterval: 1.5,
    blockcount: 1,
    rarity: "rgb(255, 221, 26)",

    rdtimer: 60,
    rdcounter: 0,

    type: "g",
    class: "guard",
    subclass: "Dreadnought",


    cost: 16,
    basecost: 16,

    range: 1,
    targets: 1,


    dmgtype: "physical",

    

    opicon: "images/opicons/franka.webp",

    spritesheet: "images/sprites/franka-sheet.webp",

    skillsfx: true,

    atkanim: {
        start: 0,
        end: 14,
        contact: 9,
        duration: 1.1,
    },

    death: {
        start: 15,
        end: 28,
    },

    idle: {
        start: 29,
        end: 58
    },

    drop: {
        start: 59,
        end: 70
    },

    skillatkanim: {
        start: 71,
        end: 88,
        contact: 79,

    },

    skill: {
        name: "Vorpal Edge",
        description: "DEF reduces to 0,\nATK +100%\nDamage turns into TRUE\n(ignores both DEF and RES)",
        duration: 30,
        sp: 20,
        initialsp: 10,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            def: -1,
            atk: 1,
            dmgtype: "true",
        },
        apply: "self",
        skillimage: "images/opicons/frankaskill.webp"

    },
    talents: [
        {
            //TODO CHANGE LOL
            name: "Thermite Blade",
            description: "ATK Speed +25",
            modifiers: {
                aspd: 25,
            },
            apply: "self",
        },
    ],
    sfx: {
        atk: {
            src: "melantha-atk",
            volume: 0.1
        },
        hit: {
            src: "melantha-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-atk",
            volume: 0.3
        },

        skillatk: {
            src: "plume-atk",
            volume: 0.1
        },
        skillhit: {
            src: "franka-skill-hit",
            volume: 0.1
        },

    }
}

playerlist["Matterhorn"] = {
    name: "Matterhorn",
    hp: 4250 - 380,
    atk: 375,
    def: 670,
    res: 5,
    atkinterval: 1.2,
    blockcount: 3,
    rarity: "rgb(216, 132, 255)",

    rdtimer: 60,
    rdcounter: 0,

    type: "g",
    class: "defender",
    subclass: "Protector",


    cost: 19,
    basecost: 19,

    range: 0,
    targets: 1,


    dmgtype: "physical",

    

    opicon: "images/opicons/matterhorn.webp",

    spritesheet: "images/sprites/matterhorn-sheet.webp",

    skillsfx: false,

    atkanim: {
        start: 0,
        end: 19,
        contact: 8,
        duration: 1.1,
    },

    death: {
        start: 20,
        end: 34,
    },

    idle: {
        start: 35,
        end: 64
    },

    drop: {
        start: 65,
        end: 79
    },

    skill: {
        name: "Cold Resistance",
        description: "Max HP +50%,\nDEF +30%, RES +100%",
        duration: 30,
        sp: 32,
        initialsp: 10,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            maxhp: 0.5,
            def: 0.3,
            res: 1,
        },
        apply: "self",
        skillimage: "images/opicons/matterhornskill.webp"

    },
    talents: [
        {
            //with module
            name: "Snowfield Guard",
            description: "Block +1; RES +20",
            modifiers: {
                block: 1,
                flatres: 20,
            },
            apply: "self",
        },
    ],
    sfx: {
        atk: {
            src: "melantha-atk",
            volume: 0.1
        },
        hit: {
            src: "melantha-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-def",
            volume: 0.3
        }
    }
}

playerlist["Gravel"] = {
    name: "Gravel",
    hp: 1880,
    atk: 452,
    def: 335,
    res: 0,
    atkinterval: 0.93,
    blockcount: 1,
    rarity: "rgb(216, 132, 255)",

    rdtimer: 16,
    rdcounter: 0,

    type: "g",
    class: "specialist",
    subclass: "Executor",


    cost: 5,
    basecost: 5,

    range: 1,
    targets: 1,


    dmgtype: "physical",

    

    opicon: "images/opicons/gravel.webp",

    spritesheet: "images/sprites/gravel-sheet.webp",

    skillsfx: false,

    atkanim: {
        start: 0,
        end: 14,
        contact: 4,
        duration: 1.1,
    },

    death: {
        start: 15,
        end: 28,
    },

    idle: {
        start: 29,
        end: 58
    },

    drop: {
        start: 59,
        end: 73
    },

    skill: {
        name: "Rat Swarm",
        description: "Obtains a barrier equal\nto 250% max HP that \ndegenerates over 10 seconds\nafter deployment.",
        duration: 10,
        sp: 0,
        initialsp: 0,
        chargetype: "passive",
        triggertype: "",

        modifiers: {
            instantheal: 1,
            barrier:2.5,
            barrierdegen:0.1,
            //maxhp: 2.5,
        },
        apply: "self",
        skillimage: "images/opicons/gravelskill.webp"

    },

    talents: [
        {
            name: "Support of the Little",
            description: "DP Cost -1; DEF +16%",
            modifiers: {
                def: 0.16,
                //barrier:2.5,
            },
            apply: "self",
        },
        {
            name: "Trait",
            description: "Has significantly reduced redeployment time.",
            modifiers: {

            },
            apply: "self",
        },
    ],
    sfx: {
        hit: {
            src: "gravel-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-def",
            volume: 0.3
        }
    }
}



playerlist["Perfumer"] = {
    name: "Perfumer",
    hp: 1710,
    atk: 364,
    def: 145,
    res: 0,
    atkinterval: 2.85,
    blockcount: 1,
    rarity: "rgb(216, 132, 255)",

    rdtimer: 66,
    rdcounter: 0,

    type: "r",
    class: "medic",
    subclass: "Multi-target healer",


    cost: 14,
    basecost: 14,

    range: 2,
    targets: 3,


    dmgtype: "heal",

    

    opicon: "images/opicons/perfumer.png",

    spritesheet: "images/sprites/perfumer-sheet.webp",

    skillsfx: false,

    atkanim: {
        start: 0,
        end: 30,
        contact: 14,
        duration: 1.1,
    },

    death: {
        start: 31,
        end: 45,
    },

    idle: {
        start: 46,
        end: 75
    },

    drop: {
        start: 76,
        end: 90
    },

    skill: {
        name: "Fine Blending",
        description: "ATK Speed -50, ATK +250%",
        duration: 30,
        sp: 60,
        initialsp: 20,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            aspd: -50,
            atk: 2.5,
            ignoreaniminterval: true,
        },
        apply: "self",
        skillimage: "images/opicons/perfumerskill.png"

    },
    talents: [
        {
            name: "Lavender's Fragrance",
            description: "Restores the HP of all allies by 5.5% of Perfumer's ATK per second.",
            modifiers: {
            },
            applyeffects:
            {
                name: "Lavender's Fragrance effect",
                apply: "aliveallies",
                range: 99,
                modifiers: {
                    flathpregen: {
                        stat: "atk",
                        percent: 0.055
                    }
                },
                duration: 0.5,
                targets: 99,
            },
            apply: "self",
        },
        {
            name: "Trait",
            description: "Restores the HP of 3 allies simultaneously",
            modifiers: {
            },
            apply: "self",
        }
    ],
    sfx: {
        atk: {
            src: "perfumer-atk",
            volume: 0.1
        },
        skillact: {
            src: "skill-heal",
            volume: 0.3
        }
    }
}

playerlist["Matoimaru"] = {
    name: "Matoimaru",
    hp: 4090,
    atk: 916,
    def: 156,
    res: 0,
    atkinterval: 1.5,
    blockcount: 1,
    rarity: "rgb(216, 132, 255)",

    rdtimer: 66,
    rdcounter: 0,

    type: "g",
    class: "guard",
    subclass: "Dreadnought",


    cost: 15,
    basecost: 15,

    range: 1,
    targets: 1,


    dmgtype: "physical",

    

    opicon: "images/opicons/matoimaru.png",

    spritesheet: "images/sprites/matoimaru-sheet.webp",

    skillsfx: false,

    atkanim: {
        start: 0,
        end: 14,
        contact: 8,
        duration: 1.1,
    },

    death: {
        start: 15,
        end: 29,
    },

    idle: {
        start: 30,
        end: 59
    },

    drop: {
        start: 60,
        end: 74
    },

    skill: {
        name: "Demonic power",
        description: "DEF reduces to 0\nATK +150%",
        duration: 15,
        sp: 25,
        initialsp: 10,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            def: -1,
            atk: 1.5,
        },
        apply: "self",
        skillimage: "images/opicons/matoimaruskill.png"

    },
    talents: [
        {
            name: "Demonic Physique",
            description: "DEF -20%; Max HP +23%",

            modifiers: {
                flatmultidef: 0.80,
                maxhp: 0.23,
            },
            apply: "self",
        },
    ],
    sfx: {
        atk: {
            src: "plume-atk",
            volume: 0.1
        },
        hit: {
            src: "plume-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-atk",
            volume: 0.3
        }
    }
}


playerlist["Gitano"] = {
    name: "Gitano",
    hp: 1598,
    atk: 812,
    def: 118,
    res: 20,
    atkinterval: 2.9,
    blockcount: 1,
    rarity: "rgb(216, 132, 255)",

    rdtimer: 66,
    rdcounter: 0,

    type: "r",
    class: "caster",
    subclass: "Splash caster",


    cost: 30,
    basecost: 30,

    range: 2,
    targets: 1,

    dmgtype: "magic",

    

    opicon: "images/opicons/gitano.png",

    spritesheet: "images/sprites/gitano-sheet.webp",

    skillsfx: true,

    skillbullet: { size: { height: 1, depth: 5, width: 2 }, arc: false, speed: 4, color: new BABYLON.Color3(0.87, 0.18, 0.89) },

    idle: {
        start: 28,
        end: 52
    },

    atkanim: {
        start: 0,
        end: 14,
        contact: 10,
        duration: 1.1,
    },

    death: {
        start: 15,
        end: 27,
    },

    drop: {
        start: 53,
        end: 69
    },

    skill: {
        name: "Destiny",
        description: "ATK +100%\nAttacks all targets \nwithin range simultaneously.",
        duration: 25,
        sp: 95,
        initialsp: 50,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            splash: false,
            atk: 1,
            targets: 99,
        },
        apply: "self",
        skillimage: "images/opicons/gitanoskill.png"

    },
    talents: [
        {
            name: "Divination",
            description: "ATK Speed +10; ATK +10%",
            modifiers: {
                aspd: 10,
                flatmultiatk: 1.10,

            },
            apply: "self",
        },
        {
            name: "Trait",
            description: "Attacks hit all enemies in a radius \nfrom the primary target.",
            modifiers: {
                splash: true,
                splashradius: 1.1,
            },
            apply: "self",
        }],
    sfx: {
        atk: {
            src: "gitano-atk",
            volume: 0.1
        },
        hit: {
            src: "gitano-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-atk",
            volume: 0.3
        },
        skillhit: {
            src: "mute",
            volume: 0.1
        },
        skillatk: {
            src: "gitano-skill-atk",
            volume: 0.2
        }

    }
}

playerlist["Mousse"] = {
    name: "Mousse",
    hp: 2345,
    atk: 705,
    def: 392,
    res: 15,
    atkinterval: 1.25,
    blockcount: 1,
    rarity: "rgb(216, 132, 255)",

    rdtimer: 66,
    rdcounter: 0,

    type: "g",
    class: "guard",
    subclass: "Magic fighter",


    cost: 18,
    basecost: 18,

    range: 1,
    targets: 1,

    dmgtype: "magic",

    

    opicon: "images/opicons/mousse.png",

    spritesheet: "images/sprites/mousse-sheet.webp",

    skillsfx: false,

    idle: {
        start: 33,
        end: 78
    },

    atkanim: {
        start: 0,
        end: 16,
        contact: 9,
        duration: 1.1,
    },

    death: {
        start: 17,
        end: 32,
    },

    drop: {
        start: 79,
        end: 93
    },

    skill: {
        name: "Scratch",
        description: "ATK +75% for next hit\nTarget ATK -40% for 5sec",
        duration: 0,
        sp: 4,
        initialsp: 0,
        chargetype: "attack",
        triggertype: "auto",
        modifiers: {
            dmg: 1.75,
        },
        applyeffects: {
            apply: "hit",
            modifiers: {
                flatmultiatk: 0.60,
            },
            duration: 5,
            effecticon: 4
        },
        apply: "self",
        skillimage: "images/opicons/mousseskill.png"

    },
    talents: [
        {
            name: "Combo",
            description: "Has a 23% chance of doing a double hit.",
            modifiers: {
                doublehitchance: 0.23,

            },
            apply: "self",
        },
    ],
    sfx: {
        hit: {
            src: "mousse-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-atk",
            volume: 0.3
        },
    }
}

playerlist["Meteor"] = {
    name: "Meteor",
    hp: 1370,
    atk: 553,
    def: 165,
    res: 0,
    atkinterval: 1,
    blockcount: 1,
    rarity: "rgb(216, 132, 255)",

    rdtimer: 66,
    rdcounter: 0,

    type: "r",
    class: "sniper",
    subclass: "Marksman",


    cost: 10,
    basecost: 10,

    range: 3,
    targets: 1,


    dmgtype: "physical",

    

    opicon: "images/opicons/meteor.png",

    spritesheet: "images/sprites/meteor-sheet.webp",
    bullet: { size: { height: 1, depth: 8, width: 0.5 }, arc: false, speed: 4, color: new BABYLON.Color3(0.4, 0.4, 0.4) },

    skillsfx: true,

    atkanim: {
        start: 0,
        end: 15,
        contact: 8,
        duration: 1.1,
    },

    death: {
        start: 16,
        end: 30,
    },

    idle: {
        start: 31,
        end: 60
    },

    drop: {
        start: 61,
        end: 72
    },

    skill: {
        name: "Armor Breaker",
        description: "Damage 190% for next hit\nTarget DEF -35% for 5sec",
        duration: 0,
        sp: 4,
        initialsp: 0,
        chargetype: "attack",
        triggertype: "auto",
        modifiers: {
            dmg: 1.75,
        },
        applyeffects: {
            apply: "hit",
            modifiers: {
                flatmultidef: 0.65,
            },
            duration: 5,
            effecticon: 6
        },
        apply: "self",
        skillimage: "images/opicons/meteorskill.png"

    },
    talents: [
        {
            name: "Targeting - Primary",
            description: "Has a 20% chance of increasing \nthe next atk damage to 160%",
            modifiers: {
                critchance: 0.20,
                critdmg: 1.6,
            },
            apply: "self",
        },
        {
            name: "Trait",
            description: "Prioritizes flying enemies",
            modifiers: {
                priority: "flying",
            },
            apply: "self",
        }
    ],
    sfx: {
        atk: {
            src: "meteor-atk",
            volume: 0.1
        },
        hit: {
            src: "meteor-hit",
            volume: 0.1
        },
        skillhit: {
            src: "meteor-skill-hit",
            volume: 0.2
        }
    }
}

playerlist["Haze"] = {
    name: "Haze",
    hp: 1520,
    atk: 643,
    def: 110,
    res: 20,
    atkinterval: 1.7,
    blockcount: 1,
    rarity: "rgb(216, 132, 255)",

    rdtimer: 66,
    rdcounter: 0,

    type: "r",
    class: "caster",
    subclass: "Core caster",


    cost: 17,
    basecost: 17,

    range: 2,
    targets: 1,

    dmgtype: "magic",

    

    opicon: "images/opicons/haze.png",

    spritesheet: "images/sprites/haze-sheet.webp",

    skillsfx: false,
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc: false, speed: 4, color: new BABYLON.Color3(0.87, 0.18, 0.89) },

    atkanim: {
        start: 0,
        end: 18,
        contact: 9,
        duration: 1.1,
    },

    death: {
        start: 19,
        end: 33,
    },

    idle: {
        start: 34,
        end: 64
    },

    drop: {
        start: 65,
        end: 79
    },

    skill: {
        name: "Crimson eyes",
        description: "Max HP -50%\nATK +60%, ATK Speed +60",
        duration: 25,
        sp: 25,
        initialsp: 0,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            maxhp: -0.5,
            atk: 0.60,
            aspd: 60,
        },
        apply: "self",
        skillimage: "images/opicons/hazeskill.png"
    },
    talents: [
        {
            name: "Black mist",
            description: "Each attack lowers the RES by 23% for 1sec.",
            modifiers: {
            },
            applyeffects: {
                apply: "hit",
                modifiers: {
                    res: -0.23,
                },
                duration: 1
            },
            apply: "self",
        }
    ],
    sfx: {
        hit: {
            src: "durin-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-atk",
            volume: 0.3
        },
    }
}

playerlist["Courier"] = {
    name: "Courier",
    hp: 1985,
    atk: 435,
    def: 405,
    res: 0,
    atkinterval: 1.05,
    blockcount: 2,
    rarity: "rgb(216, 132, 255)",

    rdtimer: 66,

    rdcounter: 0,

    type: "g",
    class: "vanguard",
    subclass: "Pioneer",

    cost: 10,
    basecost: 10,
    range: 1,

    targets: 1,

    dmgtype: "physical",

    

    opicon: "images/opicons/courier.png",

    spritesheet: "images/sprites/courier-sheet.webp",
    skillsfx: false,

    atkanim: {
        start: 0,
        end: 21,
        contact: 9,
        duration: 1.1,
    },

    death: {
        start: 22,
        end: 36,
    },

    idle: {
        start: 37,
        end: 66
    },

    drop: {
        start: 67,
        end: 76
    },
    skill: {
        name: "Command - Defense",
        description: "Immediately gain 11 DP\nDEF+90%",
        duration: 15,
        sp: 30,
        initialsp: 17,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            instantdp: 11,
            def: 0.9,
        },
        apply: "self",
        skillimage: "images/opicons/courierskill.png"
    },
    talents: [{
        name: "Karlan Patrol",
        description: "DEF +9%",
        modifiers: {
            flatmultidef: 1.09
        },
        apply: "self",
    }],
    sfx: {
        atk: {
            src: "courier-atk",
            volume: 0.1
        },
        hit: {
            src: "courier-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-def",
            volume: 0.3
        }
    }
}

playerlist["Scavenger"] = {
    name: "Scavenger",
    hp: 1835,
    atk: 555,
    def: 310,
    res: 0,
    atkinterval: 1.05,
    blockcount: 2,
    rarity: "rgb(216, 132, 255)",

    rdtimer: 66,

    rdcounter: 0,

    type: "g",
    class: "vanguard",
    subclass: "Pioneer",

    cost: 10,
    basecost: 10,
    range: 1,

    targets: 1,

    dmgtype: "physical",

    

    opicon: "images/opicons/scavenger.png",

    spritesheet: "images/sprites/scavenger-sheet.webp",
    skillsfx: false,

    atkanim: {
        start: 8,
        end: 24,
        contact: 15,
        duration: 1,
    },

    death: {
        start: 29,
        end: 43,
    },

    idle: {
        start: 44,
        end: 73
    },

    drop: {
        start: 74,
        end: 85
    },
    skill: {
        name: "Command - Attack",
        description: "Immediately gain 11 DP\nATK+70%",
        duration: 15,
        sp: 30,
        initialsp: 18,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            instantdp: 11,
            atk: 0.7
        },
        apply: "self",
        skillimage: "images/opicons/scavengerskill.png"
    },
    talents: [{
        name: "Lone Wolf",
        description: "ATK +8%; DEF +9%",
        modifiers: {
            flatmultiatk: 1.08,
            flatmultidef: 1.09,
        },
        apply: "self",
    }],
    sfx: {
        atk: {
            src: "scavenger-atk",
            volume: 0.1
        },
        hit: {
            src: "scavenger-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-atk",
            volume: 0.3
        }
    }
}



playerlist["Plume"] = {
    name: "Plume",
    hp: 1226,
    atk: 516,
    def: 279,
    res: 0,
    atkinterval: 1,
    blockcount: 1,

    rarity: "rgb(58, 132, 255)",

    rdtimer: 60,

    rdcounter: 0,

    type: "g",
    class: "vanguard",
    subclass: "Charger",

    cost: 8,
    basecost: 8,
    range: 1,

    targets: 1,

    dmgtype: "physical",

    

    opicon: "images/opicons/plume.png",

    spritesheet: "images/sprites/plume-sheet.webp",
    skillsfx: false,

    idle: {
        start: 0,
        end: 44
    },

    atkanim: {
        start: 45,
        end: 60,
        contact: 52,
        duration: 1.1,
    },

    death: {
        start: 61,
        end: 73,
    },

    drop: {
        start: 76,
        end: 90
    },
    skill: {
        name: "Swift Strike α",
        description: "ATK +25%, ATK Speed +25",
        duration: 25,
        sp: 45,
        initialsp: 0,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            atk: 0.25,
            aspd: 25
        },
        apply: "self",
        skillimage: "images/opicons/plumeskill.png"
    },
    talents: [{
        name: "ATK Up",
        description: "ATK +8%",
        modifiers: {
            flatmultiatk: 1.08,
        },
        apply: "self",
    }, {
        name: "Trait",
        description: "Gains 1DP each kill.",
        modifiers: {
            dponkill: 1,
        },
        apply: "self",
    }],
    sfx: {
        atk: {
            src: "plume-atk",
            volume: 0.1
        },
        hit: {
            src: "plume-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-speed",
            volume: 0.3
        }
    }
}


playerlist["Melantha"] = {
    name: "Melantha",
    hp: 2745,
    atk: 828,
    def: 155,
    res: 0,
    atkinterval: 1.5,
    blockcount: 1,
    rarity: "rgb(58, 132, 255)",

    rdtimer: 60,

    rdcounter: 0,

    type: "g",
    class: "guard",
    subclass: "Dreadnought",

    cost: 13,
    basecost: 13,
    range: 1,

    targets: 1,

    dmgtype: "physical",

    

    opicon: "images/opicons/melantha.png",

    spritesheet: "images/sprites/melantha-sheet.webp",
    skillsfx: false,

    idle: {
        start: 44,
        end: 72
    },

    atkanim: {
        start: 4,
        end: 29,
        contact: 16,
        duration: 1.1,
    },

    death: {
        start: 30,
        end: 43,
    },

    drop: {
        start: 73,
        end: 84
    },
    skill: {
        name: "ATK Up α",
        description: "ATK +50%",
        duration: 20,
        sp: 40,
        initialsp: 0,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            atk: 0.50,
        },
        apply: "self",
        skillimage: "images/opicons/adnachielskill.png"

    },
    talents: [{
        name: "ATK Up",
        description: "ATK +8%",
        modifiers: {
            flatmultiatk: 1.08,
        },
        apply: "self",
    }]
    ,
    sfx: {
        atk: {
            src: "melantha-atk",
            volume: 0.1
        },
        hit: {
            src: "melantha-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-atk",
            volume: 0.3
        }
    }
}


playerlist["Popukar"] = {
    name: "Popukar",
    hp: 1858,
    atk: 568,
    def: 245,
    res: 0,
    atkinterval: 1.2,
    blockcount: 2,
    rarity: "rgb(58, 132, 255)",

    rdtimer: 66,

    rdcounter: 0,

    type: "g",
    class: "guard",
    subclass: "Centurion",

    cost: 17,
    basecost: 17,
    range: 1,

    targets: 2,

    dmgtype: "physical",

    

    opicon: "images/opicons/popukar.png",

    spritesheet: "images/sprites/popukar-sheet.webp",
    skillsfx: false,

    idle: {
        start: 29,
        end: 58
    },

    atkanim: {
        start: 0,
        end: 13,
        contact: 11,
        duration: 1.5,
    },

    death: {
        start: 14,
        end: 28,
    },

    drop: {
        start: 59,
        end: 72
    },
    skill: {
        name: "ATK Up α",
        description: "ATK +50%",
        duration: 20,
        sp: 40,
        initialsp: 0,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            atk: 0.50,
        },
        apply: "self",
        skillimage: "images/opicons/adnachielskill.png"
    },
    talents: [{
        name: "HP Up",
        description: "ATK +8%; Max HP +8%",
        modifiers: {
            flatmultiatk: 1.08,
            maxhp: 0.08,
        },
        apply: "self",
    },
    {
        name: "Trait",
        description: "Hit multiple targets within range equals to block count",
        modifiers: {
        },
        apply: "self",
    }
    ],
    sfx: {
        atk: {
            src: "popukar-atk",
            volume: 0.1
        },
        hit: {
            src: "popukar-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-atk",
            volume: 0.3
        }
    }
}

playerlist["Fang"] = {
    name: "Fang",
    hp: 1325,
    atk: 325,
    def: 310,
    res: 0,
    atkinterval: 1.05,
    blockcount: 2,
    rarity: "rgb(58, 132, 255)",

    rdtimer: 60,

    rdcounter: 0,

    type: "g",
    class: "vanguard",
    subclass: "Pioneer",

    cost: 8,
    basecost: 8,
    range: 1,

    targets: 1,

    dmgtype: "physical",

    

    opicon: "images/opicons/fang.png",

    spritesheet: "images/sprites/fang-sheet.webp",
    skillsfx: false,

    idle: {
        start: 32,
        end: 60,
        duration: 1.1,
    },

    atkanim: {
        start: 0,
        end: 14,
        contact: 5,
        duration: 1.1,
    },

    death: {
        start: 16,
        end: 30,
    },

    drop: {
        start: 61,
        end: 74
    },
    skill: {
        name: "Charge α",
        description: "Immediately gain 6 DP",
        duration: 1,
        sp: 25,
        initialsp: 6,
        chargetype: "second",
        triggertype: "auto",
        modifiers: {
            instantdp: 6
        },
        apply: "self",
        skillimage: "images/opicons/fangskill.png"
    },
    talents: [{
        name: "Lightweight",
        description: "DP cost -1",
        modifiers: {
        },
        apply: "self",
    }],
    sfx: {
        atk: {
            src: "fang-atk",
            volume: 0.1
        },
        hit: {
            src: "fang-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-dp",
            volume: 0.3
        }
    }
}

playerlist["Adnachiel"] = {
    name: "Adnachiel",
    hp: 1080,
    atk: 478,
    def: 134,
    res: 0,
    atkinterval: 1,
    blockcount: 1,
    rarity: "rgb(58, 132, 255)",

    rdtimer: 60,
    rdcounter: 0,

    type: "r",
    class: "sniper",
    subclass: "Marksman",


    cost: 9,
    basecost: 9,

    range: 3,
    targets: 1,


    dmgtype: "physical",

    

    opicon: "images/opicons/adnachiel.png",

    spritesheet: "images/sprites/adnachiel-sheet.webp",
    skillsfx: false,
    bullet: { size: { height: 1, depth: 8, width: 0.5 }, arc: false, speed: 4, color: new BABYLON.Color3(0.4, 0.4, 0.4) },

    idle: {
        start: 30,
        end: 46
    },

    atkanim: {
        start: 0,
        end: 14,
        contact: 5,
        duration: 1.1,
    },

    death: {
        start: 15,
        end: 28,
    },

    drop: {
        start: 47,
        end: 60
    },

    skill: {
        name: "ATK Up α",
        description: "ATK +50%",
        duration: 20,
        sp: 40,
        initialsp: 0,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            atk: 0.50,
        },
        apply: "self",
        skillimage: "images/opicons/adnachielskill.png"

    },
    talents: [{
        name: "Shortcoming Breakthrough",
        description: "ATK Speed +8",
        modifiers: {
            aspd: 8,
        },
        apply: "self",
    },
    {
        name: "Trait",
        description: "Prioritizes flying enemies",
        modifiers: {
            priority: "flying",
        },
        apply: "self",
    }
    ],
    sfx: {
        atk: {
            src: "adnachiel-atk",
            volume: 0.1
        },
        skillact: {
            src: "skill-atk",
            volume: 0.3
        }
    }
}

playerlist["Hibiscus"] = {
    name: "Hibiscus",
    hp: 1220,
    atk: 403,
    def: 110,
    res: 0,
    atkinterval: 2.85,
    blockcount: 1,

    rdtimer: 60,
    rdcounter: 0,

    type: "r",
    class: "medic",
    subclass: "Doctor",
    rarity: "rgb(58, 132, 255)",


    cost: 15,
    basecost: 15,

    range: 3,
    targets: 1,

    dmgtype: "heal",

    

    opicon: "images/opicons/hibiscus.png",

    spritesheet: "images/sprites/hibiscus-sheet.webp",
    skillsfx: false,

    idle: {
        start: 29,
        end: 87,
        duration: 1.1,
    },

    atkanim: {
        start: 0,
        end: 13,
        contact: 9,
        duration: 1.1,
    },

    death: {
        start: 14,
        end: 28,
    },

    drop: {
        start: 88,
        end: 102
    },

    skill: {
        name: "Healing Up",
        description: "ATK +50%",
        duration: 20,
        sp: 30,
        initialsp: 0,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            atk: 0.50,
        },
        apply: "self",
        skillimage: "images/opicons/hibiscusskill.png"


    },
    talents: [{
        name: "Neurology",
        description: "ATK +8%",
        modifiers: {
            flatmultiatk: 1.08,
        },
        apply: "self",
    }],
    sfx: {
        atk: {
            src: "hibiscus-atk",
            volume: 0.1
        },
        skillact: {
            src: "skill-heal",
            volume: 0.3
        }
    }

}

playerlist["Ansel"] = {
    name: "Ansel",
    hp: 1135,
    atk: 427,
    def: 107,
    res: 0,
    atkinterval: 2.85,
    blockcount: 1,

    rdtimer: 66,
    rdcounter: 0,

    type: "r",
    class: "medic",
    subclass: "Doctor",
    rarity: "rgb(58, 132, 255)",


    cost: 15,
    basecost: 15,

    range: 3,
    targets: 1,

    dmgtype: "heal",

    

    opicon: "images/opicons/ansel.webp",

    spritesheet: "images/sprites/ansel-sheet.webp",
    skillsfx: false,

    atkanim: {
        start: 0,
        end: 14,
        contact: 10,
        duration: 1.1,
    },

    death: {
        start: 15,
        end: 29,
    },

    idle: {
        start: 30,
        end: 44
    },

    drop: {
        start: 45,
        end: 60
    },

    skill: {
        name: "	Healing Range Up",
        description: "Range +2;ATK +50%",
        duration: 25,
        sp: 35,
        initialsp: 10,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            atk: 0.40,
            range:2,
            targets:1
        },
        apply: "self",
        skillimage: "images/opicons/anselskill.webp"


    },
    talents: [{
        name: "Additional Healing",
        description: "While skill is active, heals an extra ally.",
        modifiers: {
        },
        apply: "self",
    }],
    sfx: {
        atk: {
            src: "ansel-atk",
            volume: 0.1
        },
        skillact: {
            src: "skill-heal",
            volume: 0.3
        }
    }


}


playerlist["Midnight"] = {
    name: "Midnight",
    hp: 1653,
    atk: 569,
    def: 282,
    res: 10,
    atkinterval: 1.1,
    blockcount: 2,
    rarity: "rgb(58, 132, 255)",

    rdtimer: 66,
    rdcounter: 0,

    type: "g",
    class: "guard",
    subclass: "Lord",

    cost: 14,
    basecost: 14,

    range: 2,
    targets: 1,

    dmgtype: "physical",

    

    opicon: "images/opicons/midnight.png",

    spritesheet: "images/sprites/midnight-sheet.webp",
    skillsfx: false,


    idle: {
        start: 33,
        end: 62,
        duration: 1.1,
    },

    atkanim: {
        start: 0,
        end: 16,
        contact: 4,
        duration: 1.3,
    },

    death: {
        start: 18,
        end: 32,
    },

    drop: {
        start: 63,
        end: 77
    },

    skill: {
        name: "Enchanted Sword α",
        description: "ATK +35%\ndamage turns into MAGIC",
        duration: 40,
        sp: 70,
        initialsp: 30,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            atk: 0.35,
            dmgtype: "magic",
        },
        apply: "self",
        skillimage: "images/opicons/midnightskill.png"

    },
    talents: [{
        name: "Targeting - Primary",
        description: "Has a 20% chance of increasing \nthe next atk damage to 160%",
        modifiers: {
            critchance: 0.20,
            critdmg: 1.6,
        },
        apply: "self",
    }
        , {
        name: "Trait",
        description: "Can do ranged attacks to \nunblocked enemies in range for 80% of own attack.",
        modifiers: {
        },
        apply: "self",
    }
    ],
    sfx: {
        atk: {
            src: "midnight-atk",
            volume: 0.1
        },
        hit: {
            src: "midnight-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-atk",
            volume: 0.3
        }
    }
}

playerlist["Beagle"] = {
    name: "Beagle",
    hp: 2035,
    atk: 295,
    def: 578,
    res: 0,
    atkinterval: 1.2,
    blockcount: 3,
    rarity: "rgb(58, 132, 255)",

    rdtimer: 60,
    rdcounter: 0,

    type: "g",
    class: "defender",
    subclass: "Protector",

    cost: 16,
    basecost: 16,

    range: 0,
    targets: 1,

    dmgtype: "physical",

    

    opicon: "images/opicons/beagle.png",

    spritesheet: "images/sprites/beagle-sheet.webp",
    skillsfx: false,

    idle: {
        start: 30,
        end: 59,
        duration: 1.1,
    },

    atkanim: {
        start: 0,
        end: 13,
        contact: 9,
        duration: 1.1,
    },

    death: {
        start: 14,
        end: 29,
    },

    drop: {
        start: 60,
        end: 74
    },

    skill: {
        name: "DEF Up α",
        description: "DEF +50%",
        duration: 30,
        sp: 40,
        initialsp: 0,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            def: 0.5
        },
        apply: "self",
        skillimage: "images/opicons/beagleskill.png"

    },
    talents: [{
        name: "DEF Up",
        description: "DEF +10%",
        modifiers: {
            def: 0.1,
        },
        apply: "self",
    }],
    sfx: {
        atk: {
            src: "beagle-atk",
            volume: 0.1
        },
        hit: {
            src: "beagle-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-def",
            volume: 0.3
        }
    }
}


playerlist["Durin"] = {
    name: "Durin",
    hp: 1080,
    atk: 543,
    def: 90,
    res: 15,
    atkinterval: 1.6,
    blockcount: 1,
    rarity: "rgb(58, 132, 255)",


    rdtimer: 60,
    rdcounter: 0,

    type: "r",
    class: "caster",
    subclass: "Core Caster",


    cost: 16,
    basecost: 16,

    range: 2,
    targets: 1,

    dmgtype: "magic",

    

    opicon: "images/opicons/durin.png",

    spritesheet: "images/sprites/durin-sheet.webp",

    skillsfx: false,
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc: false, speed: 4, color: new BABYLON.Color3(0.87, 0.18, 0.89) },

    idle: {
        start: 38,
        end: 66
    },

    atkanim: {
        start: 0,
        end: 22,
        contact: 13,
        duration: 1.5,
    },

    death: {
        start: 23,
        end: 37,
    },

    drop: {
        start: 67,
        end: 81
    },

    skill: {
        name: "Power Strike α",
        description: "Increase ATK \nof next hit to 190%",
        duration: 0,
        sp: 4,
        initialsp: 0,
        chargetype: "attack",
        triggertype: "auto",
        modifiers: {
            dmg: 1.9,
        },
        apply: "self",
        skillimage: "images/opicons/durinskill.png"

    },
    talents: [{
        name: "Armor Break",
        description: "ATK +6%;\nAttacks prioritize the enemy with the highest DEF.",

        modifiers: {
            flatmultiatk: 1.06,
            priority: "highDEF",
        },
        apply: "self",
    }],
    sfx: {
        hit: {
            src: "durin-hit",
            volume: 0.1
        }
    }
}

playerlist["Orchid"] = {
    name: "Orchid",
    hp: 935,
    atk: 437,
    def: 83,
    res: 10,
    atkinterval: 1.9,
    blockcount: 1,
    rarity: "rgb(58, 132, 255)",


    rdtimer: 60,
    rdcounter: 0,

    type: "r",
    class: "supporter",
    subclass: "Decel Bender",


    cost: 10,
    basecost: 10,

    range: 2,
    targets: 1,

    dmgtype: "magic",

    

    opicon: "images/opicons/orchid.png",

    spritesheet: "images/sprites/orchid-sheet.webp",

    skillsfx: false,
    bullet: { size: { height: 1, depth: 5, width: 1 }, arc: false, speed: 4, color: new BABYLON.Color3(0.87, 0.18, 0.89) },

    idle: {
        start: 30,
        end: 59
    },

    atkanim: {
        start: 0,
        end: 14,
        contact: 9,
        duration: 1.5,
    },

    death: {
        start: 15,
        end: 29,
    },

    drop: {
        start: 60,
        end: 74
    },

    skill: {
        name: "Swift Strike α",
        description: "ATK +25%, ATK Speed +25",
        duration: 25,
        sp: 45,
        initialsp: 0,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            atk: 0.25,
            aspd: 25,
        },
        apply: "self",
        skillimage: "images/opicons/plumeskill.png"
    },
    talents: [{
        name: "Casting Speed Up",
        description: "ATK Speed +9",
        modifiers: {
            aspd: 9,
        },
        apply: "self",
    },
    {
        name: "Trait",
        description: "Each attack lowers the movement speed\nby 80% for 1sec",
        modifiers: {
        },
        applyeffects: {
            apply: "hit",
            modifiers: {
                speedpercent: 0.20,
            },
            duration: 1
        },
        apply: "self",
    }
    ],
    sfx: {
        atk: {
            src: "orchid-atk",
            volume: 0.1
        },
        hit: {
            src: "orchid-hit",
            volume: 0.1
        },
        skillact: {
            src: "skill-atk",
            volume: 0.3
        },
    }
}
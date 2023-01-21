let enemylist = {};

enemylist["Lava Slug"] = {
    name: "Lava Slug",
    id:1,
    hp: 1550,
    atk: 240,
    def: 0,
    res: 0,
    atkinterval: 1.7,
    speed: 1 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.1,
    tooltip: "A dangerous wild creature.",
    description:"A wild creature originating from the nearby volcano.\nDue to their low intelligence,\nthey are easily controlled by enemy casters\nfor use as cannon fodder during invasions.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/originium-slug-beta-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 11,
        contact: 4,
        duration: 1.3,
    },

    death: {
        start: 12,
        end: 26,
        duration: 1,

    },
    idle: {
        start: 27,
        end: 56,
        duration: 1,

    },

    move: {
        start: 57,
        end: 86,
        duration: 1,

    },

    sfx: {
        hit: {
            src: "slug-hit",
            volume: 0.01
        }
    }
}


enemylist["Soldier"] = {
    name: "Soldier",
    id:2,
    hp: 3200,
    atk: 350,
    def: 50,
    res: 0,
    atkinterval: 2,
    speed: 1.1 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A basic melee soldier.",
    description: "A basic Reunion melee soldier.\n\n"
        + "A soldier that joined Reunion's cause,\nwhile having nothing in the way of skills.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/soldier-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 14,
        contact: 6,
        duration: 1,
    },

    death: {
        start: 15,
        end: 29,
        duration: 1,

    },
    idle: {
        start: 30,
        end: 59,
        duration: 1,

    },
    move: {
        start: 60,
        end: 83,
        duration: 1.1,

    },

    sfx: {
        atk: {
            src: "soldier-atk",
            volume: 0.1
        },
        hit: {
            src: "soldier-hit",
            volume: 0.1
        }
    },
}

enemylist["Monster"] = {
    name: "Monster",
    id:3,
    hp: 2000,
    atk: 0,
    def: 150,
    res: 0,
    atkinterval: 999,
    speed: 0.9 * 0.49,
    blockcount: 99,
    type: "r",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 0.95,
    tooltip: "An unmanned enemy drone\nthat does not attack.",
    description:" An unmanned enemy drone, called \"Monster\" by Reunion forces.\nThough they come with no offensive abilities whatsoever,\nthey can slip by unnoticed during the heat of battle.\n\n"
    +"Enemy drones are flying enemies,\nwhich is caracterized by their ability to \nmove anywhere on the map and not be able to be blocked.\nAdditionally, they can only be hit by Ranged units\nor Ground units with ranged attacks.",
    targets: 0,

    enemytype: "normal",

    spritesheet: "images/sprites/monster-sheet.webp",
    hasskill: false,


    atkanim: {
        start: 9999,
        end: 9999,
        contact: 7,
        duration: 1.3,
    },

    death: {
        start: 0,
        end: 14,
        duration: 1,

    },
    idle: {
        start: 15,
        end: 44,
        duration: 1,

    },

    move: {
        start: 45,
        end: 74,
        duration: 1,

    },

    sfx: {
    }
}

enemylist["Monster mk II"] = {
    name: "Monster mk II",
    id:4,
    hp: 2500,
    atk: 330,
    def: 175,
    res: 25,
    atkinterval: 3,
    speed: 0.9 * 0.49,
    blockcount: 99,
    type: "r",
    range: 2,
    hploss: 1,
    dmgtype: "physical",
    size: 0.95,
    tooltip: "An improved Monster capable\nof ranged attacks.",
    description:" An improved Monster, equipped with a light gun.\n\n"
    +"Monsters mk II are a direct upgrade to Monsters,\nnoticeably they can now do ranged attacks which,\npaired with their ability to move freely anywhere on the map,\ncan pose a threat to more fragile units if targeted.",
    
    targets: 0,

    enemytype: "normal",

    spritesheet: "images/sprites/monster-mk2-sheet.webp",
    hasskill: false,


    atkanim: {
        start: 0,
        end: 15,
        contact: 9,
        duration: 1.1,
    },

    death: {
        start: 16,
        end: 30,
        duration: 1,

    },
    idle: {
        start: 31,
        end: 60,
        duration: 1,

    },

    move: {
        start: 61,
        end: 90,
        duration: 1,

    },

    sfx: {
        atk: {
            src: "monster-atk",
            volume: 0.1
        }
    }
}
enemylist['Hound'] = {
    name: "Hound",
    id:7,
    hp: 3000,
    atk: 370,
    def: 0,
    res: 20,
    atkinterval: 1.4,
    speed: (1.7 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    tooltip: "A fast-moving creature controlled\nby a Reunion recon squad.",
    description: "A fast enemy that attacks and moves very fast.\n\nCapable of taking by surprise unprepared defenses.",

    dmgtype: "physical",
    size: 1,
    enemytype: "normal",
    spritesheet: "images/sprites/dog-sheet.webp",

    hasskill: false,

    idle: {
        start: 34,
        end: 48,
        duration: 1,

    },

    move: {
        start: 15,
        end: 22,
        duration: 1.2,

    },

    atkanim: {
        start: 1,
        end: 14,
        contact: 8,
        duration: 1,
    },

    death: {
        start: 23,
        end: 32,
        duration: 0.86,

    },
    sfx: {
        atk: {
            src: "dog-atk",
            volume: 0.05
        }
    }

}

enemylist['Crossbowman Leader'] = {
    name: "Crossbowman Leader",
    id:12,
    hp: 3500,
    atk: 410,
    def: 150,
    res: 0,
    atkinterval: 2.4,
    speed: (0.7 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 1.9,
    hploss: 1,
    tooltip: "A more dangerous Crossbowman,\ncapable of attacking from long range.",
    description: "An enemy that uses ranged attacks that can \ntarget both ranged and ground units.\n\nBoosts better stats than a normal Crossbowman.",


    dmgtype: "physical",
    bullet: { size: { height: 1, depth: 8, width: 0.5 }, arc: false, speed: 5, color: new BABYLON.Color3(0.4, 0.4, 0.4) },


    enemytype: "normal",
    targets: 1,
    size: 1,

    spritesheet: "images/sprites/crossbowman-leader-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 13,
        contact: 8,
        duration: 1,

    },

    death: {
        start: 14,
        end: 30,
        duration: 1,
    },

    idle: {
        start: 31,
        end: 45,
        duration: 1,
    },

    move: {
        start: 46,
        end: 60,
        duration: 1,

    },

    sfx: {
        atk: {
            src: "crossbow-atk",
            volume: 0.1
        }
    }
}

enemylist['Crossbowman'] = {
    name: "Crossbowman",
    id:11,
    hp: 2500,
    atk: 310,
    def: 150,
    res: 0,
    atkinterval: 2.4,
    speed: (0.7 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 1.9,
    hploss: 1,
    tooltip: "One of Reunion's ranged soldiers,\ncapable of attacking from long range.\n\n",
    description: "An enemy that uses ranged attacks that \ncan target both ranged and ground units.",

    dmgtype: "physical",
    bullet: { size: { height: 1, depth: 8, width: 0.5 }, arc: false, speed: 5, color: new BABYLON.Color3(0.4, 0.4, 0.4) },


    enemytype: "normal",
    targets: 1,
    size: 1,

    spritesheet: "images/sprites/crossbowman-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 13,
        contact: 8,
        duration: 1,

    },

    death: {
        start: 14,
        end: 29,
        duration: 1,
    },

    idle: {
        start: 30,
        end: 42,
        duration: 1,
    },

    move: {
        start: 44,
        end: 58,
        duration: 1,

    },

    sfx: {
        atk: {
            src: "crossbow-atk",
            volume: 0.1
        }
    }
}


enemylist['Sarkaz Grudgebearer'] = {
    name: "Sarkaz Grudgebearer",
    id:31,
    hp: 17000,
    atk: 750,
    def: 250,
    res: 50,
    atkinterval: 5,
    speed: (0.2 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 3,
    hploss: 1,
    dmgtype: "magic",

    targets: 2,
    tooltip: "Starts battle in Standby\nand will not attack.\nUpon being injured,\nbecomes Combat-Ready and\ninflicts Magic ranged attacks\n to 2 targets at once.",
    description: "An extremely powerful Sarkaz caster with high stats,\ncapable of attacking 2 targets at once with long range magic.\n\n" +
        "Starts the battle in Standby, he will not attack \nany ally unit as long as he remains in this state.\n" +
        "If he gets attacked or a Sarkaz Sentinel raises an alarm.\nBecomes Combat-Ready, increases his own movement speed and starts attacking.\n"
        + "If the Grudgebearer was waiting in a tile before becoming Combat-ready,\ninstantly lowers the wait time to zero.",

    enemytype: "standby",

    hasskill: true,
    size: 1.1,
    bullet: { size: { height: 1, depth: 5, width: 3 }, arc: false, speed: 5, color: new BABYLON.Color3(0.69, 0.21, 0.67) },


    spritesheet: "images/sprites/sarkaz-grudgebearer-sheet.webp",

    idle: {
        start: 39,
        end: 62,
        duration: 1,
    },

    move: {
        start: 63,
        end: 87,
        duration: 1.5,
    },

    atkanim: {
        start: 0,
        end: 23,
        contact: 14,
        duration: 1,

    },

    death: {
        start: 24,
        end: 38,
        duration: 1,

    },

    skill: {
        name: "standby",
        triggertype: "on_hit",
        skilltype: "sarkazstandby",
        target: "self",
        modifiers: {
            speed: 0.4,
            standby: false,
        },
        aura: false,

        move: {
            start: 88,
            end: 107,
            duration: 0.5,

        },
        idle: {
            start: 108,
            end: 125,
            duration: 1,
        },
    }
    ,
    sfx: {
        atk: {
            src: "grudgebearer-atk",
            volume: 0.1
        }
    }
}

enemylist['Sarkaz Worldcurser'] = {
    name: "Sarkaz Worldcurser",
    id:32,
    hp: 24000,
    atk: 900,
    def: 300,
    res: 50,
    atkinterval: 5,
    speed: (0.2 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 3,
    hploss: 1,
    dmgtype: "magic",

    targets: 2,

    enemytype: "standby",
    tooltip: "Starts battle in Standby\nand will not attack.\nUpon being injured,\nbecomes Combat-Ready and\ninflicts Magic ranged attacks\n to 2 targets at once.",
    description: "An even stronger Sarkaz caster with high stats,\ncapable of attacking 2 targets at once with long range magic.\n\n" +
        "Starts the battle in Standby, he will not attack \nany ally unit as long as he remains in this state.\n" +
        "If he gets attacked or a Sarkaz Sentinel raises an alarm.\nBecomes Combat-Ready, increases his own movement speed and starts attacking.\n"
        + "If the Worldcurser was waiting in a tile before becoming Combat-ready,\ninstantly lowers the wait time to zero.",

    hasskill: true,
    size: 1.1,
    bullet: { size: { height: 1, depth: 5, width: 3 }, arc: false, speed: 5, color: new BABYLON.Color3(0.69, 0.21, 0.67) },


    spritesheet: "images/sprites/sarkaz-worldcurser-sheet.webp",

    idle: {
        start: 39,
        end: 62,
        duration: 1,
    },

    move: {
        start: 63,
        end: 87,
        duration: 1.5,
    },

    atkanim: {
        start: 0,
        end: 23,
        contact: 14,
        duration: 1,

    },

    death: {
        start: 24,
        end: 38,
        duration: 1,

    },

    skill: {
        name: "standby",
        triggertype: "on_hit",
        skilltype: "sarkazstandby",
        target: "self",
        modifiers: {
            speed: 0.4,
            standby: false,
        },
        aura: false,

        move: {
            start: 88,
            end: 107,
            duration: 0.5,

        },
        idle: {
            start: 108,
            end: 125,
            duration: 1,
        },
    }
    ,
    sfx: {
        atk: {
            src: "grudgebearer-atk",
            volume: 0.1
        }
    }
}

enemylist['Sarkaz Sentinel'] = {
    name: "Sarkaz Sentinel",
    id:28,
    hp: 5000,
    atk: 0,
    def: 160,
    res: 30,
    atkinterval: 1,
    speed: (0.3 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",

    targets: 1,

    tooltip: " Upon being injured,\nissues an alarm to \nimprove the ATK and DEF\nof enemies as well as causing\nany enemy units in Standby\nto become Combat-Ready.",
    description: "A Sarkaz with no offensive capabilities of his own.\nRaises an alarm whenever he gets hit,\ninspiring all enemies and activating Standby enemies.\n\n" +
        "Sarkaz Sentinel is a reconnaissance enemy that\nsupports other Sarkaz in case they gets hit.\n" +
        "When a Sentinel gets hit, they raise their flag,\ninstantly buffing all present enemies ATK and DEF by 50%.\n"
        + "Additionally, if any Standby enemy is present,\nturns them Combat-Ready after raising their flag.",

    enemytype: "normal",

    hasskill: true,
    size: 1,


    spritesheet: "images/sprites/sarkaz-sentinel-sheet.webp",

    idle: {
        start: 15,
        end: 64,
        duration: 2,
    },

    move: {
        start: 115,
        end: 134,
        duration: 1.3,

    },

    atkanim: {
        start: 9999,
        end: 9999,
        contact: 8,
        duration: 1,

    },


    death: {
        start: 0,
        end: 14,
        duration: 1,

    },

    skill: {
        name: "standby",
        triggertype: "on_hit",
        skilltype: "sarkazalert",
        target: "all",
        modifiers: {
            atk: 0.5,
            def: 0.5,
        },
        aura: true,
        auratype: 5,
        idle: {
            start: 65,
            end: 84,
            duration: 1.3,
        },

        move: {
            start: 95,
            end: 114,
            duration: 1.3,

        },

        begin: {
            start: 85,
            end: 94,
            duration: 0.6,
        },

    },
    sfx: {
        skillact: {
            src: "sentinel-skill",
            volume: 2
        }
    }
}

enemylist['Sarkaz Swordsman'] = {
    name: "Sarkaz Swordsman",
    id:22,
    hp: 4500,
    atk: 400,
    def: 100,
    res: 50,
    atkinterval: 2.5,
    speed: (0.8 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    tooltip: "A mercenary from Sarkaz\nwho boasts fairly high RES.",
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    targets: 1,
    description: "A basic melee Sarkaz mercenary.\n\n" +
        "Thanks to his ancient heritage, boosts fairly high RES.\n",
    enemytype: "normal",

    spritesheet: "images/sprites/sarkaz-swordsman-sheet.webp",

    hasskill: false,


    idle: {
        start: 37,
        end: 51,
        duration: 1,

    },

    move: {
        start: 52,
        end: 65,
        duration: 0.94,

    },

    atkanim: {
        start: 0,
        end: 21,
        contact: 13,
        duration: 1,
    },

    death: {
        start: 23,
        end: 36,
        duration: 1,

    }
    ,
    sfx: {
        hit: {
            src: "swordsman-hit",
            volume: 0.1
        }
    }
}

enemylist['Sarkaz Lancer'] = {
    name: "Sarkaz Lancer",
    id:29,
    hp: 7000,
    atk: 450,
    def: 150,
    res: 40,
    atkinterval: 4,
    speed: 0.25 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    tooltip: "Gradually accelerates when moving,\ndealing bonus damage on the\nfirst hit after being blocked\nbased upon Movement Speed.",
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    targets: 1,
    description: "A Sarkaz mercenary.\nAfter special training, they are capable of rushing\nforward with a long spear, building up speed.\nThe faster they charge,\nthe harder they strike any who might stand in their way."+
    "\n\nThese peculiar enemies gradually increase their movement speed with\na rate of increase of +0.25 tiles/sec every second\nwhich can be stacked up to 25 times."
    +"\nAfter being blocked, they will release all their built up speed\nas a charged attack that will deal\nbonus (600 x current speed) damage to the unit blocking."
    ,
    enemytype: "normal",

    spritesheet: "images/sprites/sarkaz-lancer-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 15,
        contact: 3,
        duration: 1,
    },

    death: {
        start: 16,
        end: 30,
        duration: 1,

    },
    idle: {
        start: 31,
        end: 48,
        duration: 1,

    },

    move: {
        start: 49,
        end: 61,
        duration: 0.7,

    },
    skill: {
        name: "speedup",
        triggertype: "on_move",
        skilltype: "lancerspeed",
        target: "self",
        modifiers: {
            dmg: 600,
            basespeed:0.25*0.49,
            stacks:25,
        },
        aura: false,
    },
    sfx: {
        hit: {
            src: "knightshield-hit",
            volume: 0.1
        }
    }
}

enemylist['Sarkaz Lancer Leader'] = {
    name: "Sarkaz Lancer Leader",
    id:30,
    hp: 9000,
    atk: 500,
    def: 230,
    res: 40,
    atkinterval: 4,
    speed: 0.3 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    tooltip: "Gradually accelerates when moving,\ndealing bonus damage on the\nfirst hit after being blocked\nbased upon Movement Speed.",
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    targets: 1,
    description: "A Sarkaz, more threatening than a normal Sarkaz Lancer.\nAfter special training, they are capable of rushing\nforward with a long spear, building up speed.\nThe faster they charge,\nthe harder they strike any who might stand in their way."+
    "\n\nBoosting higher stats than a standard Sarkaz Lancer,\nthey come with better speed modifiers\ngradually increasing their movement speed with\na rate of increase of +0.3 tiles/sec every second\nwhich can be stacked up to 25 times."
    +"\nAfter being blocked, they will release all their built up speed\nas a charged attack that will deal\nbonus (800 x current speed) damage to the unit blocking."
    ,
    enemytype: "normal",

    spritesheet: "images/sprites/sarkaz-lancer-leader-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 15,
        contact: 3,
        duration: 1,
    },

    death: {
        start: 16,
        end: 30,
        duration: 1,

    },
    idle: {
        start: 31,
        end: 48,
        duration: 1,

    },

    move: {
        start: 49,
        end: 61,
        duration: 0.7,

    },
    skill: {
        name: "speedup",
        triggertype: "on_move",
        skilltype: "lancerspeed",
        target: "self",
        modifiers: {
            dmg: 800,
            basespeed:0.3*0.49,
            stacks:25,
        },
        aura: false,
    },
    sfx: {
        hit: {
            src: "knightshield-hit",
            volume: 0.1
        }
    }

}

enemylist['Sarkaz Greatswordsman'] = {
    name: "Sarkaz Greatswordsman",
    id:18,
    hp: 9500,
    atk: 700,
    def: 240,
    res: 50,
    atkinterval: 2,
    speed: (0.65 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.1,
    targets: 1,

    enemytype: "normal",

    tooltip: "A mercenary from Sarkaz who \nboasts fairly high ATK and RES.",
    description: "A powerful melee Sarkaz mercenary with high stats.\n\n" +
        "Thanks to his ancient heritage, boosts fairly high RES.\n",

    spritesheet: "images/sprites/sarkaz-greatswordsman-sheet.webp",

    hasskill: false,

    idle: {
        start: 37,
        end: 51,
        duration: 1,

    },

    move: {
        start: 52,
        end: 76,
        duration: 1.1,

    },

    atkanim: {
        start: 3,
        end: 21,
        contact: 15,
        duration: 1.1,
    },

    death: {
        start: 22,
        end: 36,
        duration: 1,

    },
    sfx: {
        atk: {
            src: "greatswordsman-atk",
            volume: 0.2
        }
    }
}

enemylist['Sarkaz GreatswordsmanEX'] = {
    name: "Sarkaz GreatswordsmanEX",
    id:18.1,
    hp: 15000,
    atk: 800,
    def: 300,
    res: 50,
    atkinterval: 2,
    speed: (0.65 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.1,
    targets: 1,

    enemytype: "normal",

    tooltip: "A mercenary from Sarkaz who \nboasts fairly high ATK and RES.",
    description: "A powerful melee Sarkaz mercenary with high stats.\n\n" +
        "Thanks to his ancient heritage, boosts fairly high RES.\n",

    spritesheet: "images/sprites/sarkaz-greatswordsman-sheet.webp",

    hasskill: false,

    idle: {
        start: 37,
        end: 51,
        duration: 1,

    },

    move: {
        start: 52,
        end: 76,
        duration: 1.1,

    },

    atkanim: {
        start: 3,
        end: 21,
        contact: 15,
        duration: 1.1,
    },

    death: {
        start: 22,
        end: 36,
        duration: 1,

    },
    sfx: {
        atk: {
            src: "greatswordsman-atk",
            volume: 0.2
        }
    }

}

enemylist['Sarkaz Crossbowman'] = {
    name: "Sarkaz Crossbowman",
    id:19,
    hp: 8000,
    atk: 500,
    def: 200,
    res: 50,
    atkinterval: 3,
    speed: (0.6 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 2.2,
    hploss: 1,
    dmgtype: "physical",
    targets: 1,
    tooltip: "A mercenary from Sarkaz who \nboasts fairly high ATK and RES;\n and uses ranged attacks.",
    description: "A powerful ranged Sarkaz mercenary with high stats.\n\n" +
        "Capable of attacking both Ranged and\nGround units with dangerous attacks.\nThanks to his ancient heritage, boosts fairly high RES.\n",
    size: 1.1,
    bullet: { size: { height: 1, depth: 8, width: 0.5 }, arc: false, speed: 5, color: new BABYLON.Color3(0.4, 0.4, 0.4) },

    enemytype: "normal",

    spritesheet: "images/sprites/sarkaz-crossbowman-sheet.webp",

    hasskill: false,

    idle: {
        start: 34,
        end: 48,
        duration: 1,

    },

    move: {
        start: 49,
        end: 72,
        duration: 1,

    },

    atkanim: {
        start: 0,
        end: 19,
        contact: 10,
        duration: 1,
    },

    death: {
        start: 20,
        end: 33,
        duration: 1,

    },
    sfx: {
        atk: {
            src: "crossbowman-atk",
            volume: 0.1
        }
    }

}

enemylist['Sarkaz CrossbowmanEX'] = {
    name: "Sarkaz CrossbowmanEX",
    id:19.1,
    hp: 12000,
    atk: 600,
    def: 250,
    res: 50,
    atkinterval: 3,
    speed: (0.6 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 2.2,
    hploss: 1,
    dmgtype: "physical",
    targets: 1,
    tooltip: "A mercenary from Sarkaz who \nboasts fairly high ATK and RES;\n and uses ranged attacks.",
    description: "A powerful ranged Sarkaz mercenary with high stats.\n\n" +
        "Capable of attacking both Ranged and\nGround units with dangerous attacks.\nThanks to his ancient heritage, boosts fairly high RES.\n",
    size: 1.1,
    bullet: { size: { height: 1, depth: 8, width: 0.5 }, arc: false, speed: 5, color: new BABYLON.Color3(0.4, 0.4, 0.4) },

    enemytype: "normal",

    spritesheet: "images/sprites/sarkaz-crossbowman-sheet.webp",

    hasskill: false,

    idle: {
        start: 34,
        end: 48,
        duration: 1,

    },

    move: {
        start: 49,
        end: 72,
        duration: 1,

    },

    atkanim: {
        start: 0,
        end: 19,
        contact: 10,
        duration: 1,
    },

    death: {
        start: 20,
        end: 33,
        duration: 1,

    },
    sfx: {
        atk: {
            src: "crossbowman-atk",
            volume: 0.1
        }
    }

}


enemylist['Sarkaz Bladeweaver'] = {
    name: "Sarkaz Bladeweaver",
    id:23,
    hp: 8000,
    atk: 450,
    def: 220,
    res: 50,
    atkinterval: 2.5,
    speed: (0.2 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "magic",
    tooltip: "Starts battle in Standby\nand will not attack.\nUpon being injured,\nbecomes Combat-Ready and\ninflicts Magic melee attacks.",
    description: "A powerful Sarkaz swordsman with high stats,\ncapable of doing strong melee magic attacks.\n\n" +
        "Starts the battle in Standby, he will not attack \nany ally unit as long as he remains in this state.\n" +
        "If he gets attacked or a Sarkaz Sentinel raises an alarm.\nBecomes Combat-Ready, increases his own movement speed and starts attacking.\n"
        + "If the Bladeweaver was waiting in a tile before becoming Combat-ready,\ninstantly lowers the wait time to zero.",

    targets: 1,
    size: 1.1,

    enemytype: "standby",

    hasskill: true,


    spritesheet: "images/sprites/sarkaz-bladeweaver-sheet.webp",

    idle: {
        start: 52,
        end: 71,
        duration: 1,
    },

    move: {
        start: 72,
        end: 87,
        duration: 2,

    },

    atkanim: {
        start: 0,
        end: 32,
        contact: 13,
        duration: 1,

    },

    death: {
        start: 33,
        end: 51,
        duration: 1,

    },

    skill: {
        name: "standby",
        triggertype: "on_hit",
        skilltype: "sarkazstandby",
        target: "self",
        modifiers: {
            speed: 0.4,
            standby: false,
        },
        aura: false,
        move: {
            start: 72,
            end: 87,
            duration: 0.7,

        },
    },
    sfx: {
        atk: {
            src: "bladeweaver-atk",
            volume: 0.1
        }
    }
}

enemylist['Sarkaz Bladeweaver Leader'] = {
    name: "Sarkaz Bladeweaver Leader",
    id:24,
    hp: 12000,
    atk: 550,
    def: 280,
    res: 50,
    atkinterval: 2.5,
    speed: (0.2 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "magic",
    tooltip: "Starts battle in Standby\nand will not attack.\nUpon being injured,\nbecomes Combat-Ready and\ninflicts Magic melee attacks.",
    description: "A more powerful Sarkaz swordsman with high stats,\ncapable of doing strong melee magic attacks.\n\n" +
        "Starts the battle in Standby, he will not attack \nany ally unit as long as he remains in this state.\n" +
        "If he gets attacked or a Sarkaz Sentinel raises an alarm.\nBecomes Combat-Ready, increases his own movement speed and starts attacking.\n"
        + "If the Bladeweaver was waiting in a tile before becoming Combat-ready,\ninstantly lowers the wait time to zero.",
    targets: 1,
    size: 1.1,

    enemytype: "standby",

    hasskill: true,


    spritesheet: "images/sprites/sarkaz-bladeweaver-leader-sheet.webp",

    idle: {
        start: 52,
        end: 71,
        duration: 1,
    },

    move: {
        start: 72,
        end: 87,
        duration: 2,

    },

    atkanim: {
        start: 0,
        end: 32,
        contact: 13,
        duration: 1,

    },

    death: {
        start: 33,
        end: 51,
        duration: 1,

    },

    skill: {
        name: "standby",
        triggertype: "on_hit",
        skilltype: "sarkazstandby",
        target: "self",
        modifiers: {
            speed: 0.4,
            standby: false,
        },
        aura: false,
        move: {
            start: 72,
            end: 87,
            duration: 0.7,

        },
    },
    sfx: {
        atk: {
            src: "bladeweaver-atk",
            volume: 0.1
        }
    }
}

enemylist["Guerrilla Fighter"] = {
    name: "Guerrilla Fighter",
    id:66,
    hp: 3300,
    atk: 300,
    def: 300,
    res: 20,
    atkinterval: 2,
    speed: (0.9 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "Moves faster when Inspired\n by a Herald or by Patriot.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/guerrilla-fighter-sheet.webp",

    description: "A basic guerrilla melee soldier that moves faster when Inspired.\n\n" +
        "The basic melee soldier of the Guerrilla faction,\nhe boosts fairly high DEF compared to other basic melee soldiers.\n" +
        "If he gets Inspired by a Guerrilla Herald or Patriot, \nin addition to the stats increases,\nmoves faster.\n(Indicated by the icon above his head)",

    hasskill: true,


    idle: {
        start: 29,
        end: 43,
        duration: 1,

    },

    move: {
        start: 44,
        end: 67,
        duration: 1.2,

    },

    atkanim: {
        start: 0,
        end: 14,
        contact: 7,
        duration: 1,
    },

    death: {
        start: 15,
        end: 28,
        duration: 1,

    }
    ,
    sfx: {
        hit: {
            src: "swordsman-hit",
            volume: 0.1
        }
    },

    skill: {
        name: "inspiredfighter",
        triggertype: "on_inspire",
        skilltype: "guerrilainspire",
        target: "self",
        modifiers: {
            speed: 0.2,
        },
        aura: true,
        auratype: 2
    },

}


enemylist["Guerrilla Fighter Leader"] = {
    name: "Guerrilla Fighter Leader",
    id:67,
    hp: 4500,
    atk: 330,
    def: 350,
    res: 20,
    atkinterval: 2,
    speed: (0.9 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "Moves faster when Inspired\n by a Herald or by Patriot.",
    description: "A stronger guerrilla melee soldier that moves faster when Inspired.\n\n" +
        "If he gets Inspired by a Guerrilla Herald or Patriot, \nin addition to the stats increases,\nmoves faster.\n(Indicated by the icon above his head)",
    targets: 1,


    enemytype: "normal",

    spritesheet: "images/sprites/guerrilla-grunts-leader-sheet.webp",

    hasskill: true,


    idle: {
        start: 29,
        end: 43,
        duration: 1,

    },

    move: {
        start: 44,
        end: 67,
        duration: 1.2,

    },

    atkanim: {
        start: 0,
        end: 14,
        contact: 7,
        duration: 1,
    },

    death: {
        start: 15,
        end: 28,
        duration: 1,

    }
    ,
    sfx: {
        hit: {
            src: "swordsman-hit",
            volume: 0.1
        }
    },

    skill: {
        name: "inspiredfighter",
        triggertype: "on_inspire",
        skilltype: "guerrilainspire",
        target: "self",
        modifiers: {
            speed: 0.2,
        },
        aura: true,
        auratype: 2
    },

}

enemylist["Guerrilla Mortar"] = {
    name: "Guerrilla Mortar",
    id:81,
    hp: 5500,
    atk: 450,
    def: 550,
    res: 20,
    atkinterval: 4.8,
    speed: 0.6 * 0.49,
    blockcount: 1,
    type: "g",
    range: 15,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "Gains significantly\nincreased ASPD when inspired\nby a Herald or by Patriot.",
    description: "A guerrilla soldier equipped with a \nmilitary-grade mortar capable of\ndoing extremely long range attacks that hit \nall units in a radius around the primary target.\n\n" +
        "Guerrilla mortars are similar to Mortar Gunners, albeit with overall better stats.\n" +
        "If he gets Inspired by a Guerrilla Herald or Patriot,\nin addition to the stats increases,\nthe mortar will receive a massive ASPD boost of 50.\n(Indicated by the icon above his head)",
    targets: 1,
    splashradius: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/guerrilla-mortar-sheet.webp",
    bullet: { size: { height: 3, depth: 3, width: 3 }, arc: true, speed: 10, color: new BABYLON.Color3(0.95, 0, 0) },

    hasskill: true,

    atkanim: {
        start: 0,
        end: 17,
        contact: 9,
        duration: 1,
    },

    death: {
        start: 18,
        end: 31,
        duration: 1,

    },

    idle: {
        start: 32,
        end: 46,
        duration: 1,

    },

    move: {
        start: 47,
        end: 61,
        duration: 1.2,

    },

    sfx: {
        hit: {
            src: "mortar-hit",
            volume: 0.1
        },
        atk: {
            src: "mortar-atk",
            volume: 0.1
        }
    },

    skill: {
        name: "inspiredfighter",
        triggertype: "on_inspire",
        skilltype: "guerrilainspire",
        target: "self",
        modifiers: {
            aspd: 50,
        },
        aura: true,
        auratype: 2
    },
}

enemylist["Guerrilla Mortar Leader"] = {
    name: "Guerrilla Mortar Leader",
    id:81,
    hp: 6500,
    atk: 590,
    def: 550,
    res: 20,
    atkinterval: 4.8,
    speed: 0.6 * 0.49,
    blockcount: 1,
    type: "g",
    range: 15,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "Gains significantly\nincreased ASPD when inspired\nby a Herald or by Patriot.",
    description: "A guerrilla soldier equipped with an \neven better military-grade mortar capable of\ndoing extremely long range\nattacks that hit all units in a radius around the primary target.\n\n" +
        "If he gets Inspired by a Guerrilla Herald or Patriot,\nin addition to the stats increases,\n the mortar will receive a massive ASPD boost of 50.\n(Indicated by the icon above his head)",

    targets: 1,
    splashradius: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/guerrilla-mortar-leader-sheet.webp",
    bullet: { size: { height: 3, depth: 3, width: 3 }, arc: true, speed: 10, color: new BABYLON.Color3(0.95, 0, 0) },

    hasskill: true,

    atkanim: {
        start: 0,
        end: 17,
        contact: 9,
        duration: 1,
    },

    death: {
        start: 18,
        end: 31,
        duration: 1,

    },

    idle: {
        start: 32,
        end: 46,
        duration: 1,

    },

    move: {
        start: 47,
        end: 61,
        duration: 1.2,

    },

    sfx: {
        hit: {
            src: "mortar-hit",
            volume: 0.1
        },
        atk: {
            src: "mortar-atk",
            volume: 0.1
        }
    },

    skill: {
        name: "inspiredmortar",
        triggertype: "on_inspire",
        skilltype: "guerrilainspire",
        target: "self",
        modifiers: {
            aspd: 50 * 1.3,
        },
        aura: true,
        auratype: 2
    },

}


enemylist["Guerrilla Sniper"] = {
    name: "Guerrilla Sniper",
    id:70,
    hp: 3000,
    atk: 340,
    def: 300,
    res: 20,
    atkinterval: 2.5,
    speed: 0.9 * 0.49,
    blockcount: 1,
    type: "g",
    range: 2.2,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "Attacks two targets at once when\nInspired by a Herald or by Patriot.",
    description: "A guerrilla capable of doing Ranged attacks\n which can hit both Ranged and Melee units.\n\n" +
        "Guerrilla Snipers are similar to Crossbowmen, albeit with overall better stats.\n" +
        "If he gets Inspired by a Guerrilla Herald or Patriot,\nin addition to the stats increases,\nthe Sniper will be able to target 2 units at once.\n(Indicated by the icon above his head)",

    targets: 1,
    bullet: { size: { height: 1, depth: 8, width: 0.5 }, arc: false, speed: 5, color: new BABYLON.Color3(0.4, 0.4, 0.4) },

    enemytype: "normal",

    spritesheet: "images/sprites/guerrilla-sniper-sheet.webp",

    hasskill: true,


    idle: {
        start: 38,
        end: 52,
        duration: 1,

    },

    move: {
        start: 53,
        end: 67,
        duration: 1,

    },

    atkanim: {
        start: 0,
        end: 22,
        contact: 8,
        duration: 0.8,
    },

    death: {
        start: 23,
        end: 37,
        duration: 1,

    }
    ,
    sfx: {
        atk: {
            src: "crossbow-atk",
            volume: 0.1
        }
    },

    skill: {
        name: "inspiredsniper",
        triggertype: "on_inspire",
        skilltype: "guerrilainspire",
        target: "self",
        modifiers: {
            targets: 1,
        },
        aura: true,
        auratype: 2
    },

}

enemylist["Guerrilla Sniper Leader"] = {
    name: "Guerrilla Sniper Leader",
    id:71,
    hp: 4000,
    atk: 390,
    def: 300,
    res: 20,
    atkinterval: 2.7,
    speed: 0.9 * 0.49,
    blockcount: 1,
    type: "g",
    range: 2.2,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "Attacks two targets at once when\nInspired by a Herald or by Patriot.",
    description: "A stronger guerrilla sniper capable of doing Ranged attacks\n which can hit both Ranged and Melee units.\n\n" +
        "If he gets Inspired by a Guerrilla Herald or Patriot,\nin addition to the stats increases,\nthe Sniper will be able to target 2 units at once.\n(Indicated by the icon above his head)",

    targets: 1,
    bullet: { size: { height: 1, depth: 8, width: 0.5 }, arc: false, speed: 5, color: new BABYLON.Color3(0.4, 0.4, 0.4) },

    enemytype: "normal",

    spritesheet: "images/sprites/guerrilla-grunts-leader-sheet.webp",

    hasskill: true,


    idle: {
        start: (38 + 68),
        end: (52 + 68),
        duration: 1,

    },

    move: {
        start: (53 + 68),
        end: (67 + 68),
        duration: 1,

    },

    atkanim: {
        start: (0 + 68),
        end: (22 + 68),
        contact: (8 + 68),
        duration: 0.8,
    },

    death: {
        start: (23 + 68),
        end: (37 + 68),
        duration: 1,

    }
    ,
    sfx: {
        atk: {
            src: "crossbow-atk",
            volume: 0.1
        }
    },

    skill: {
        name: "inspiredsniper",
        triggertype: "on_inspire",
        skilltype: "guerrilainspire",
        target: "self",
        modifiers: {
            targets: 1,
        },
        aura: true,
        auratype: 2
    },
}

enemylist['Guerrilla Hound'] = {
    name: "Guerrilla Hound",
    id:68,
    hp: 2900,
    atk: 350,
    def: 150,
    res: 20,
    atkinterval: 1.4,
    speed: 1.9 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    targets: 1,

    tooltip: "A basic guerrilla-ops war hound\nhaving decent defenses while\nstill being able to move quickly.",
    description: "A hound trained by the Guerrillas, having decent defenses \nwhile still being able to move quickly\n\n" +
        "Guerrilla Hounds are similar to basic Hounds but with better stats.\n",

    enemytype: "normal",

    spritesheet: "images/sprites/guerrilla-hound-sheet.webp",

    hasskill: false,

    idle: {
        start: 29,
        end: 43,
        duration: 1,

    },

    move: {
        start: 44,
        end: 59,
        duration: 1.2,

    },

    atkanim: {
        start: 0,
        end: 14,
        contact: 8,
        duration: 1,
    },

    death: {
        start: 15,
        end: 28,
        duration: 1,

    },
    sfx: {
        atk: {
            src: "dog-atk",
            volume: 0.05
        }
    }

}

enemylist['Guerrilla Hound Pro'] = {
    name: "Guerrilla Hound Pro",
    id:69,
    hp: 3080,
    atk: 420,
    def: 150,
    res: 20,
    atkinterval: 1.4,
    speed: 1.9 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "An elite guerrilla-ops war hound\nmore aggressive than\nstandard guerrilla hounds.",
    targets: 1,
    description: "An elite guerrilla-ops war hound, having decent defenses \nwhile still being able to move quickly",
    enemytype: "normal",

    spritesheet: "images/sprites/guerrilla-grunts-leader-sheet.webp",

    hasskill: false,

    idle: {
        start: (30 + 68 + 68 + 82),
        end: (44 + 68 + 68 + 82),
        duration: 1,

    },

    move: {
        start: (45 + 68 + 68 + 82),
        end: (60 + 68 + 68 + 82),
        duration: 1.2,

    },

    atkanim: {
        start: (0 + 68 + 68 + 82),
        end: (14 + 68 + 68 + 82),
        contact: (8 + 68 + 68 + 82),
        duration: 1,
    },

    death: {
        start: (15 + 68 + 68 + 82),
        end: (29 + 68 + 68 + 82),
        duration: 1,

    },
    sfx: {
        atk: {
            src: "dog-atk",
            volume: 0.05
        }
    }

}

enemylist["Guerrilla Siegebreaker"] = {
    name: "Guerrilla Siegebreaker",
    id:82,
    hp: 3800,
    atk: 360,
    def: 550,
    res: 20,
    atkinterval: 1.9,
    speed: (0.8 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "Has significantly increased\n ATK when Inspired\n by a Herald or by Patriot.",
    description: "An elite Guerrilla soldier that can appear anywhere on the map,\nand is extremely dangerous when Inspired.\n\n" +
        "Siegebreakers are capable of spawning anywhere,\nmaking them dangerous foes that can easily get behind unprepared defenses." +
        "If a Siegebreaker gets Inspired by a Guerrilla Herald or Patriot,\nin addition to the stats increases,\nthey will get a massive ATK buff of 50%.\n(Indicated by the icon above his head)",

    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/guerrilla-siegebreaker-sheet.webp",

    hasskill: true,


    idle: {
        start: 30,
        end: 44,
        duration: 1,

    },

    move: {
        start: 45,
        end: 59,
        duration: 1,

    },

    atkanim: {
        start: 0,
        end: 14,
        contact: 7,
        duration: 1.2,
    },

    death: {
        start: 15,
        end: 29,
        duration: 1,

    },
    start: {
        start: 60,
        end: 81,
        duration: 1,
    }
    ,
    sfx: {
        start: {
            src: "trooper-start",
            volume: 0.1
        },
        hit: {
            src: "swordsman-hit",
            volume: 0.1
        }
    },

    skill: {
        name: "inspiredsiegebreaker",
        triggertype: "on_inspire",
        skilltype: "guerrilainspire",
        target: "self",
        modifiers: {
            atk: 0.5,
        },
        aura: true,
        auratype: 2
    },
}

enemylist["Guerrilla Siegebreaker Leader"] = {
    name: "Guerrilla Siegebreaker Leader",
    id:83,
    hp: 5000,
    atk: 430,
    def: 550,
    res: 20,
    atkinterval: 1.9,
    speed: (0.8 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "Has significantly increased\n ATK when Inspired\n by a Herald or by Patriot.",
    description: "An even stronger Siegebreaker that can appear anywhere on the map,\nand is extremely dangerous when Inspired.\n\n" +
        "If a Siegebreaker gets Inspired by a Guerrilla Herald or Patriot,\nin addition to the stats increases,\nthey will get a massive ATK buff of 50%.\n(Indicated by the icon above their head)",

    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/guerrilla-grunts-leader-sheet.webp",

    hasskill: true,


    idle: {
        start: (30 + 68 + 68),
        end: (44 + 68 + 68),
        duration: 1,

    },

    move: {
        start: (45 + 68 + 68),
        end: (59 + 68 + 68),
        duration: 1,

    },

    atkanim: {
        start: (0 + 68 + 68),
        end: (14 + 68 + 68),
        contact: (7 + 68 + 68),
        duration: 1.2,
    },

    death: {
        start: (15 + 68 + 68),
        end: (29 + 68 + 68),
        duration: 1,

    },
    start: {
        start: (60 + 68 + 68),
        end: (81 + 68 + 68),
        duration: 1,
    }
    ,
    sfx: {
        start: {
            src: "trooper-start",
            volume: 0.1
        },
        hit: {
            src: "swordsman-hit",
            volume: 0.1
        }
    },

    skill: {
        name: "inspiredsiegebreaker",
        triggertype: "on_inspire",
        skilltype: "guerrilainspire",
        target: "self",
        modifiers: {
            atk: 0.5,
        },
        aura: true,
        auratype: 2

    },
}

enemylist["Sarkaz Guerrilla Fighter Leader"] = {
    name: "Sarkaz Guerrilla Fighter Leader",
    id:75,
    hp: 12000,
    atk: 580,
    def: 400,
    res: 50,
    atkinterval: 2.5,
    speed: (0.65 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "Does not take damage when \ncoming in contact with\na fire wave and attacks\n instead deal Magic damage.",
    targets: 1,
    description: "A stronger Sarkaz mercenary inspired by Reunion\nand officially became member of the Guerrillas.\nThrough ancient Magic rituals, he is capable\nof using Fire Altars to his advantage.\n\n" +
        "Sarkaz Guerrilla Fighters will spawn dealing physical damage.\n" +
        "However, if they get in contact with a Fire Altar wave,\nthey will not take damage and instead turns their dmg type to magic.\n(Indicated by the icon above their head)",


    enemytype: "normal",

    spritesheet: "images/sprites/sarkaz-guerrilla-fighter-leader-sheet.webp",

    hasskill: true,


    atkanim: {
        start: 0,
        end: 17,
        contact: 8,
        duration: 1,
    },

    death: {
        start: 18,
        end: 32,
        duration: 1,

    },
    idle: {
        start: 33,
        end: 60,
        duration: 1,

    },
    move: {
        start: 61,
        end: 80,
        duration: 1.5,

    },

    sfx: {
        hit: {
            src: "sarkaz-guerrilla-hit",
            volume: 0.1
        }
    },


    skill: {
        name: "altarfighter",
        triggertype: "on_altar",
        skilltype: "sarkazaltar",
        target: "self",
        modifiers: {
            dmgtype: "magic",
        },
        aura: true,
        auratype: 2,
        atkanim: {
            start: 81,
            end: 105,
            contact: 95,
            duration: 1,
        },
    },
}

enemylist["Sarkaz Guerrilla Fighter"] = {
    name: "Sarkaz Guerrilla Fighter",
    id:74,
    hp: 8000,
    atk: 480,
    def: 400,
    res: 50,
    atkinterval: 2.5,
    speed: (0.65 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "Does not take damage when \ncoming in contact with \na fire wave and attacks\n instead deal Magic damage.",
    description: "A Sarkaz mercenary inspired by Reunion\nand officially became member of the Guerrillas.\nThrough ancient Magic rituals, he is capable\nof using Fire Altars to his advantage.\n\n" +
        "Sarkaz Guerrilla Fighters will spawn dealing physical damage.\n" +
        "However, if they get in contact with a Fire Altar wave,\nthey will not take damage and instead turns their dmg type to magic.\n(Indicated by the icon above their head)",

    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/sarkaz-guerrilla-fighter-sheet.webp",

    hasskill: true,


    atkanim: {
        start: 0,
        end: 17,
        contact: 8,
        duration: 1,
    },

    death: {
        start: 18,
        end: 32,
        duration: 1,

    },
    idle: {
        start: 33,
        end: 60,
        duration: 1,

    },
    move: {
        start: 61,
        end: 80,
        duration: 1.5,

    },

    sfx: {
        hit: {
            src: "sarkaz-guerrilla-hit",
            volume: 0.1
        }
    },


    skill: {
        name: "altarfighter",
        triggertype: "on_altar",
        skilltype: "sarkazaltar",
        target: "self",
        modifiers: {
            dmgtype: "magic",
        },
        aura: true,
        auratype: 2,
        atkanim: {
            start: 81,
            end: 105,
            contact: 95,
            duration: 1,
        },
    },
}

enemylist["Sarkaz Guerrilla Caster"] = {
    name: "Sarkaz Guerrilla Caster",
    id:76,
    hp: 7000,
    atk: 350,
    def: 400,
    res: 50,
    atkinterval: 5,
    speed: 0.75 * 0.49,
    blockcount: 1,
    type: "g",
    range: 1.5,
    hploss: 1,
    dmgtype: "magic",
    size: 1.2,
    tooltip: "Deals magic to all surrounding units;\ncoming in contact with fire\n waves increases atk range.",
    description: "A Sarkaz mercenary inspired by Reunion\nand officially became member of the Guerrillas.\nThrough ancient Magic rituals, he is capable\nof using Fire Altars to his advantage.\n\n" +
        "Sarkaz Guerrilla Casters periodically release a \nmagic wave around them that hits all ally units in range.\n" +
        "If they get in contact with a Fire Altar wave,\nthey will not take damage and instead increase \ntheir attack range (indicated by the icon above their head)\nmaking them reach further units with their wave.\n",

    targets: 99,

    enemytype: "normal",

    spritesheet: "images/sprites/sarkaz-guerrilla-caster-sheet.webp",
    bullet: { size: { height: 1, depth: 5, width: 3 }, arc: false, speed: 5, color: new BABYLON.Color3(0.69, 0.21, 0.67) },

    hasskill: true,
    hasatkanim: false,

    atkanim: {
        start: 99999,
        end: 99999,
        duration: 1
    },

    death: {
        start: 0,
        end: 14,
        duration: 1,

    },
    idle: {
        start: 15,
        end: 37,
        duration: 1,

    },
    move: {
        start: 38,
        end: 60,
        duration: 1.2,

    },

    sfx: {
        atk: {
            src: "sarkaz-caster-atk",
            volume: 0.3
        }
    },


    skill: {
        name: "altarfighter",
        triggertype: "on_altar",
        skilltype: "sarkazaltar",
        target: "self",
        modifiers: {
            range: 1,
        },
        aura: true,
        auratype: 2,

        idle: {
            start: 61,
            end: 83,
            duration: 1,

        },
        move: {
            start: 84,
            end: 106,
            duration: 1.5,

        },
    },
}

enemylist["Sarkaz Guerrilla Caster Leader"] = {
    name: "Sarkaz Guerrilla Caster Leader",
    id:77,
    hp: 10000,
    atk: 450,
    def: 400,
    res: 50,
    atkinterval: 5,
    speed: 0.75 * 0.49,
    blockcount: 1,
    type: "g",
    range: 1.5,
    hploss: 1,
    dmgtype: "magic",
    size: 1.2,
    tooltip: "Deals magic to all surrounding units;\ncoming in contact with fire\n waves increases atk range.",
    targets: 99,
    description: "A Stronger Sarkaz mercenary inspired by Reunion\nand officially became member of the Guerrillas.\nThrough ancient Magic rituals, he is capable\nof using Fire Altars to his advantage.\n\n" +
        "Sarkaz Guerrilla Casters periodically release a \nmagic wave around them that hits all ally units in range.\n" +
        "If they get in contact with a Fire Altar wave,\nthey will not take damage and instead increase \ntheir attack range (indicated by the icon above their head)\nmaking them reach further units with their wave.\n",

    enemytype: "normal",

    spritesheet: "images/sprites/sarkaz-guerrilla-caster-leader-sheet.webp",
    bullet: { size: { height: 1, depth: 5, width: 3 }, arc: false, speed: 5, color: new BABYLON.Color3(0.69, 0.21, 0.67) },

    hasskill: true,
    hasatkanim: false,

    atkanim: {
        start: 99999,
        end: 99999,
        duration: 1
    },

    death: {
        start: 0,
        end: 14,
        duration: 1,

    },
    idle: {
        start: 15,
        end: 37,
        duration: 1,

    },
    move: {
        start: 38,
        end: 60,
        duration: 1,

    },

    sfx: {
        atk: {
            src: "sarkaz-caster-atk",
            volume: 0.3
        }
    },


    skill: {
        name: "altarfighter",
        triggertype: "on_altar",
        skilltype: "sarkazaltar",
        target: "self",
        modifiers: {
            range: 1,
        },
        aura: true,
        auratype: 2,

        idle: {
            start: 61,
            end: 83,
            duration: 1,

        },
        move: {
            start: 84,
            end: 106,
            duration: 1,

        },
    },
}

enemylist["Guerrilla Shieldguard"] = {
    name: "Guerrilla Shieldguard",
    id:78,
    hp: 15000,
    atk: 700,
    def: 1300,
    res: 60,
    atkinterval: 3.8,
    speed: (0.5 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "Covers the advance of \nenemies by making themselves\n more likely to be attacked.",
    description: "The creme of the crop of Patriot's forces.\nCovers the advance of enemies by making themselves\nmore likely to be attacked.\n\n" +
        "These powerful enemies boost high HP, DEF and RES,\nmaking them extremely hard to take down.\n" +
        "Additionally, they will always taunt all nearby units' ranged attacks which\ncan render useless misplaced allies that aren't capable of damaging them\n",

    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/guerrilla-shieldguard-sheet.webp",

    hasskill: true,


    atkanim: {
        start: 0,
        end: 23,
        contact: 15,
        duration: 1,
    },

    death: {
        start: 24,
        end: 37,
        duration: 1,

    },
    idle: {
        start: 38,
        end: 53,
        duration: 1,

    },
    move: {
        start: 54,
        end: 71,
        duration: 1.5,

    },

    sfx: {
        hit: {
            src: "shieldguard-hit",
            volume: 0.1
        }
    },


    skill: {
        name: "tauntguerrilla",
        triggertype: "on_start",
        skilltype: "taunt",
        target: "self",
        modifiers: {
            taunt: 1,
        },
        aura: false,
    },
}

enemylist["Guerrilla Shieldguard Leader"] = {
    name: "Guerrilla Shieldguard Leader",
    id:79,
    hp: 25000,
    atk: 800,
    def: 1500,
    res: 60,
    atkinterval: 3.8,
    speed: (0.5 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "Covers the advance of\nenemies by making themselves\nmore likely to be attacked.",
    description: "The creme of the crop of Patriot's forces.\nCovers the advance of enemies by making themselves\nmore likely to be attacked.\n\n" +
        "Even stronger Shieldguards with very high HP, DEF and RES,\nmaking them extremely hard to take down.\n" +
        "Additionally, they will always taunt all nearby units' ranged attacks which\ncan render useless misplaced allies that aren't capable of damaging them\n",

    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/guerrilla-shieldguard-leader-sheet.webp",

    hasskill: true,


    atkanim: {
        start: 0,
        end: 24,
        contact: 15,
        duration: 1,
    },

    death: {
        start: 25,
        end: 38,
        duration: 1,

    },
    idle: {
        start: 39,
        end: 54,
        duration: 1,

    },
    move: {
        start: 55,
        end: 72,
        duration: 1.5,

    },

    sfx: {
        hit: {
            src: "shieldguard-hit",
            volume: 0.1
        }
    },


    skill: {
        name: "tauntguerrilla",
        triggertype: "on_start",
        skilltype: "taunt",
        target: "self",
        modifiers: {
            taunt: 1,
        },
        aura: false,
    },
}

enemylist["Guerrilla Shieldguard LeaderEX"] = {
    name: "Guerrilla Shieldguard LeaderEX",
    id:80,
    hp: 25000,
    atk: 800,
    def: 1500,
    res: 60,
    atkinterval: 3.8,
    speed: 0.4 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "Covers the advance of \nenemies by making themselves\nmore likely to be attacked.",
    targets: 1,
    description: "The creme of the crop of Patriot's forces.\nCovers the advance of enemies by making themselves\nmore likely to be attacked.\n\n" +
        "Even stronger Shieldguards with very high HP, DEF and RES,\nmaking them extremely hard to take down.\n" +
        "Additionally, they will always taunt all nearby units' ranged attacks which\ncan render useless misplaced allies that aren't capable of damaging them\n",

    enemytype: "normal",

    spritesheet: "images/sprites/guerrilla-shieldguard-leader-sheet.webp",

    hasskill: true,


    atkanim: {
        start: 0,
        end: 24,
        contact: 15,
        duration: 1,
    },

    death: {
        start: 25,
        end: 38,
        duration: 1,

    },
    idle: {
        start: 39,
        end: 54,
        duration: 1,

    },
    move: {
        start: 55,
        end: 72,
        duration: 1.6,

    },

    sfx: {
        hit: {
            src: "shieldguard-hit",
            volume: 0.1
        }
    },


    skill: {
        name: "tauntguerrilla",
        triggertype: "on_start",
        skilltype: "taunt",
        target: "self",
        modifiers: {
            taunt: 1,
        },
        aura: false,
    },
}

enemylist["Guerrilla Herald"] = {
    name: "Guerrilla Herald",
    id:72,
    hp: 7000,
    atk: 300,
    def: 120,
    res: 50,
    atkinterval: 2.7,
    speed: (0.8 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "When on the battlefield,\n Inspires all enemies,\n increasing their ATK and DEF.",
    description: "A battlefield messenger of Patriot's Guerrillas,\nThe presence of Guerrilla Heralds inspires all enemies on the battlefield.\n\n" +
        "Guerrilla Heralds are weak on the offensive,\n" +
        "however, as long as they are alive, they will Inspire all enemies increasing their ATK by 10% and DEF by 100,\nwhich can be stacked with other Heralds.\n",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/guerrilla-herald-sheet.webp",

    hasskill: true,


    atkanim: {
        start: 0,
        end: 15,
        contact: 8,
        duration: 1,
    },

    death: {
        start: 16,
        end: 32,
        duration: 1,

    },
    idle: {
        start: 33,
        end: 47,
        duration: 1,

    },
    move: {
        start: 48,
        end: 61,
        duration: 1.5,

    },

    sfx: {
        hit: {
            src: "herald-hit",
            volume: 0.1
        }
    },


    skill: {
        name: "inspireguerrilla",
        triggertype: "on_start",
        skilltype: "alive",
        target: "all",
        modifiers: {
            inspire: true,
            atk: 0.1,
            flatdef: 100,
        },
        aura: false,
        auratype: 2
    },
}

enemylist["Guerrilla Herald Leader"] = {
    name: "Guerrilla Herald Leader",
    id:73,
    hp: 10000,
    atk: 360,
    def: 120,
    res: 50,
    atkinterval: 2.5,
    speed: (0.8 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "When on the battlefield,\n Inspires all enemies,\n increasing their ATK and DEF.",
    description: "A battlefield messenger of Patriot's Guerrillas,\nThe presence of Guerrilla Heralds inspires all enemies on the battlefield.\n\n" +
        "Guerrilla Herald Leaders boost better stats to improve survivability.\n" +
        "As long as they are alive, they will Inspire \nall enemies increasing their ATK by 10% and DEF by 100,\nwhich can be stacked with other Heralds.\n",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/guerrilla-herald-leader-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 15,
        contact: 8,
        duration: 1,
    },

    death: {
        start: 16,
        end: 32,
        duration: 1,

    },
    idle: {
        start: 33,
        end: 47,
        duration: 1,

    },
    move: {
        start: 48,
        end: 61,
        duration: 1.5,

    },

    sfx: {
        hit: {
            src: "herald-hit",
            volume: 0.1
        }
    },


    skill: {
        name: "inspireguerrilla",
        triggertype: "on_start",
        skilltype: "alive",
        target: "all",
        modifiers: {
            inspire: true,
            atk: 0.1,
            flatdef: 100,
        },
        aura: false,
        auratype: 2

    },
}

enemylist["Patriot"] = {
    name: "Patriot",
    id:5011,
    hp: 45000,
    atk: 2400,
    def: 1900,
    res: 90,
    atkinterval: 4,
    speed: 0.4 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 2,
    dmgtype: "physical",
    size: 1.1,
    tooltip: "Has extremely high DEF & RES.\nMore likely to be attacked.\n Inspires all enemies,\n increasing their ATK and DEF.",
    description: "The backbone of the Reunion movement and leader of the Guerrillas,\nhe is a formidable foe that should not be underestimated.\n\n\n" +
        "Capable of inspiring all enemies increasing their ATK by 20% and their DEF by 200,\nwhich can be stacked with other inspire buffs.\n" +
        "Patriot has two phases :\n\n"
        + "Marching stance : in this phase Patriot holds up his Shield,\ntaunting all ally shots (this taunt is stronger than the one of the Shieldguards).\n"
        + "Additionally, every time Patriot attacks he will deal 4 instances\nof his ATK at once which can potentially knock out any unit!\n"
        + "After being knocked out once, Patriot will begin reviving over 30 seconds\nduring which his Inspire buff is deactivated and he cannot be targeted.\n\n"
        + "Ruination stance : After finishing reviving, Patriot enters his second phase,\nPatriot becomes invincible for 15 seconds (indicated by the yellow aura around him),\n"
        + "will lose his shield, which reduces dramatically \nhis defensive capabilities (DEF/RES lower to 500/45),\n"
        + "disables his taunt and ability to attack 4 times at once,\nbut makes him capable of attacking ranged units very close to him.\n"
        + "Patriot is also now capable of launching his halberd to the\nfarthest Ranged unit from him every 20 seconds (15 seconds for the first activation)\n" +
        "for 1.35x of his own ATK.",
    revive: true,
    revivetimer: 30,
    revivemax: 30,
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/patriot-sheet.webp",

    hasskill: true,


    atkanim: {
        start: 0,
        end: 22,
        contact: 12,
        duration: 1,
    },


    idle: {
        start: 23,
        end: 47,
        duration: 1,

    },
    move: {
        start: 48,
        end: 76,
        duration: 1.5,

    },
    revival1: {
        start: 77,
        end: 94,
        duration: 1,
    },
    revival2: {
        start: 95,
        end: 114,
        duration: 1,
    },

    sfx: {
        revival: {
            src: "patriot-revival",
            volume: 0.05
        },
        atk: {
            src: "patriot1-atk",
            volume: 0.1
        },
        hit: {
            src: "patriot1-hit",
            volume: 0.1
        }
    },
    skill: {
        name: "inspireguerrilla",
        triggertype: "on_start",
        skilltype: "alive",
        target: "all",
        modifiers: {
            inspire: true,
            atk: 0.2,
            flatdef: 200,
        },
        aura: false,
        auratype: 2
    },
}

enemylist["Patriot2"] = {
    name: "Patriot2",
    hp: 45000,
    atk: 1600,
    def: 500,
    res: 45,
    atkinterval: 3.6,
    speed: 0.5 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0.85,
    hploss: 2,
    dmgtype: "physical",
    size: 1.1,
    tooltip: "Has extremely high DEF and RES.\n Inspires all enemies,\n increasing their ATK and DEF.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/patriot2-sheet.webp",

    hasskill: true,
    hasspatk: true,
    invincible: 15,

    atkanim: {
        start: 0,
        end: 20,
        contact: 10,
        duration: 1.6,
    },
    death: {
        start: 21,
        end: 98,
        duration: 1,
    },

    idle: {
        start: 99,
        end: 116,
        duration: 1,

    },
    move: {
        start: 117,
        end: 146,
        duration: 1.5,

    },
    start: {
        start: 147,
        end: 200,
        duration: 2,
    },
    spatk: {
        start: 201,
        end: 252,
        contact: 230,
        duration: 1.3,
    },

    sfx: {
        start: {
            src: "patriot2-start1",
            volume: 0.3
        },
        start2: {
            src: "patriot2-start2",
            volume: 0.3,
            sprite: 160,
            playing: false
        },
        start3: {
            src: "patriot2-start3",
            volume: 0.3,
            sprite: 188,
            playing: false
        },
        atk: {
            src: "patriot2-atk",
            volume: 0.1
        },
        hit: {
            src: "patriot2-hit",
            volume: 0.1
        },
        spatk: {
            src: "patriot2-spatk",
            volume: 0.3
        },
        sphit: {
            src: "patriot2-sphit",
            volume: 0.3
        },

    },
    skill: {
        name: "inspireguerrilla",
        triggertype: "on_start",
        skilltype: "alive",
        target: "all",
        modifiers: {
            inspire: true,
            atk: 0.2,
            flatdef: 200,
        },
        aura: false,
        auratype: 2
    },

    spattack: {
        name: "javelin",
        target: "farthest",
        range: 99,
        initialsp: 5,
        sp: 20,
        chargetype: "second",
        dmgmodifier: 1.35,
        effectcontact: 201,
        applyeffects: {
            modifiers: {
            },
            duration: 3,
            effecticon: 14
        },
    }
}

enemylist["PatriotEX"] = {
    name: "PatriotEX",
    id:5012,
    hp: 60000,
    atk: 3000,
    def: 1900,
    res: 90,
    atkinterval: 4,
    speed: 0.4 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 2,
    dmgtype: "physical",
    size: 1.1,
    tooltip: "Has extremely high DEF & RES.\n Inspires all enemies,\n increasing their ATK and DEF.",
    description: "The backbone of the Reunion movement and leader of the Guerrillas,\nhe is a formidable foe that should not be underestimated.\n\n\n" +
        "Capable of inspiring all enemies increasing their ATK by 20% and their DEF by 200,\nwhich can be stacked with other inspire buffs.\n" +
        "Patriot has two phases :\n\n"
        + "Marching stance : in this phase Patriot holds up his Shield,\ntaunting all ally shots (this taunt is stronger than the one of the Shieldguards).\n"
        + "Additionally, every time Patriot attacks he will deal 4 instances\nof his ATK at once which can potentially knock out any unit!\n"
        + "After being knocked out once, Patriot will begin reviving over 30 seconds\nduring which his Inspire buff is deactivated and he cannot be targeted.\n\n"
        + "Ruination stance : After finishing reviving, Patriot enters his second phase,\nPatriot becomes invincible for 15 seconds (indicated by the yellow aura around him),\n"
        + "will lose his shield, which reduces dramatically \nhis defensive capabilities (DEF/RES lower to 500/45),\n"
        + "disables his taunt and ability to attack 4 times at once,\nbut makes him capable of attacking ranged units very close to him.\n"
        + "Patriot is also now capable of launching his halberd to the\nfarthest Ranged unit from him every 20 seconds (15 seconds for the first activation)\n" +
        "for 1.35x of his own ATK.",
    revive: true,
    revivetimer: 30,
    revivemax: 30,
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/patriot-sheet.webp",

    hasskill: true,


    atkanim: {
        start: 0,
        end: 22,
        contact: 12,
        duration: 1,
    },


    idle: {
        start: 23,
        end: 47,
        duration: 1,

    },
    move: {
        start: 48,
        end: 76,
        duration: 1.5,

    },
    revival1: {
        start: 77,
        end: 94,
        duration: 1,
    },
    revival2: {
        start: 95,
        end: 114,
        duration: 1,
    },

    sfx: {
        revival: {
            src: "patriot-revival",
            volume: 0.05
        },
        atk: {
            src: "patriot1-atk",
            volume: 0.1
        },
        hit: {
            src: "patriot1-hit",
            volume: 0.1
        }
    },
    skill: {
        name: "inspireguerrilla",
        triggertype: "on_start",
        skilltype: "alive",
        target: "all",
        modifiers: {
            inspire: true,
            atk: 0.2,
            flatdef: 200,
        },
        aura: false,
        auratype: 2
    },
}

enemylist["PatriotEX2"] = {
    name: "PatriotEX2",
    hp: 60000,
    atk: 2000,
    def: 500,
    res: 45,
    atkinterval: 3.6,
    speed: 0.5 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0.85,
    hploss: 2,
    dmgtype: "physical",
    size: 1.1,
    tooltip: "Has extremely high DEF and RES.\n Inspires all enemies,\n increasing their ATK and DEF.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/patriot2-sheet.webp",

    hasskill: true,
    hasspatk: true,
    invincible: 15,

    atkanim: {
        start: 0,
        end: 20,
        contact: 10,
        duration: 1.6,
    },
    death: {
        start: 21,
        end: 98,
        duration: 1,
    },

    idle: {
        start: 99,
        end: 116,
        duration: 1,

    },
    move: {
        start: 117,
        end: 146,
        duration: 1.5,

    },
    start: {
        start: 147,
        end: 200,
        duration: 2,
    },
    spatk: {
        start: 201,
        end: 252,
        contact: 230,
        duration: 1.3,
    },

    sfx: {
        start: {
            src: "patriot2-start1",
            volume: 0.3
        },
        start2: {
            src: "patriot2-start2",
            volume: 0.3,
            sprite: 160,
            playing: false
        },
        start3: {
            src: "patriot2-start3",
            volume: 0.3,
            sprite: 188,
            playing: false
        },
        atk: {
            src: "patriot2-atk",
            volume: 0.1
        },
        hit: {
            src: "patriot2-hit",
            volume: 0.1
        },
        spatk: {
            src: "patriot2-spatk",
            volume: 0.3
        },
        sphit: {
            src: "patriot2-sphit",
            volume: 0.3
        },

    },
    skill: {
        name: "inspireguerrilla",
        triggertype: "on_start",
        skilltype: "alive",
        target: "all",
        modifiers: {
            inspire: true,
            atk: 0.2,
            flatdef: 200,
        },
        aura: false,
        auratype: 2
    },

    spattack: {
        name: "javelin",
        target: "farthest",
        range: 99,
        initialsp: 5,
        chargetype: "second",
        sp: 20,
        dmgmodifier: 1.35,
        effectcontact: 201,
        applyeffects: {
            modifiers: {
            },
            duration: 3,
            effecticon: 14
        },
    }
}

enemylist["Roar Knight"] = {
    name: "Roar Knight",
    id:34,
    hp: 3800,
    atk: 420,
    def: 100,
    res: 0,
    atkinterval: 2.4,
    speed: (0.7 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 2,
    hploss: 1,
    dmgtype: "physical",
    size: 0.9,
    tooltip: "A sniper with\n significantly increased DEF\nand RES for a period of time.",
    description: "A competitive knight capable of ranged attacks, wearing a prototype \narmor that increases his defensive capabilities temporarely.\n\n" +
        "Roar Knights can be compared to Crossbowmen, albeit with better stats.\n" +
        "Additionally, Roar Knights start equipped with a shield that lasts for 30 seconds \nwhich increases their DEF and RES by 3000 and 95 respectivily for the duration,\n"
        + "The shield renders these knights almost invincible for the duration!",

    targets: 1,
    bullet: { size: { height: 1, depth: 8, width: 0.5 }, arc: false, speed: 5, color: new BABYLON.Color3(0.4, 0.4, 0.4) },

    enemytype: "normal",

    spritesheet: "images/sprites/roar-knightclub-elite-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 19,
        contact: 9,
        duration: 0.8,
    },

    death: {
        start: 20,
        end: 36,
        duration: 1,

    },
    idle: {
        start: 37,
        end: 56,
        duration: 1,

    },

    move: {
        start: 57,
        end: 71,
        duration: 1.5,

    },
    sfx: {
        atk: {
            src: "crossbow-atk",
            volume: 0.1
        }
    },

    skill: {
        name: "knightshield",
        triggertype: "on_start",
        skilltype: "duration",
        target: "self",
        modifiers: {
            flatdef: 3000,
            flatres: 95,
            duration: 30
        },
        aura: true,
        auratype: 7
    },

}

enemylist["Bloodboil Knight"] = {
    name: "Bloodboil Knight",
    id:36,
    hp: 13000,
    atk: 650,
    def: 800,
    res: 0,
    atkinterval: 2.3,
    speed: (0.5 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "Each time an enemy is defeated,\ngains ATK and ASPD,\nstacking up to 10 times.",
    targets: 1,
    description: "A competitive knight that thirsts for battle.\nWhenever an enemy dies on the battlefield, his stats increase.\n\n" +
        "Bloodboil knights boost fairly high stats that make them formidable foes.\n" +
        "Additionally, whenever an enemy dies while the Bloodboil is present,\nthey will have their ATK and ASPD increased by 10% and 5 respectively.\n(indicated by the icon above their head)\n" +
        "This buff can stack up to 10 times for a total of 100% ATK and 50 ASPD increases.\nIf the buff is maxed out, the Bloodboil will be surrounded by a red aura.\n",

    enemytype: "normal",

    spritesheet: "images/sprites/bloodboil-knightclub-elite-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 28,
        contact: 14,
        duration: 0.8,
    },

    death: {
        start: 29,
        end: 43,
        duration: 1,

    },
    idle: {
        start: 44,
        end: 73,
        duration: 1,

    },

    move: {
        start: 74,
        end: 93,
        duration: 1.3,

    },
    sfx: {
        atk: {
            src: "bloodboil-atk",
            volume: 0.1
        },
        hit: {
            src: "bloodboil-hit",
            volume: 0.1
        }
    },

    skill: {
        name: "bloodboil",
        triggertype: "on_anydeath",
        skilltype: "bloodboil",
        target: "self",
        modifiers: {
            atk: 0.1,
            aspd: 5,
            stack: 10
        },
        aura: false,
        auratype: 8
    },
}

enemylist["Knight Shielder"] = {
    name: "Knight Shielder",
    id:37,
    hp: 12000,
    atk: 700,
    def: 1300,
    res: 0,
    atkinterval: 3,
    speed: (0.5 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.3,
    tooltip: "A Kazimierz knight with\ndefensive equipment, relying\non a slow-and-steady approach.",
    targets: 1,
    description: "A knight equipped with defensive equipment, but with no RES,\nmaking them vulnerable to magic attacks.\n\n",

    enemytype: "normal",

    spritesheet: "images/sprites/elite-knight-shielder-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 28,
        contact: 10,
        duration: 0.8,
    },

    death: {
        start: 29,
        end: 45,
        duration: 1,

    },
    idle: {
        start: 46,
        end: 85,
        duration: 1,

    },

    move: {
        start: 86,
        end: 104,
        duration: 1.3,

    },
    sfx: {
        hit: {
            src: "knightshield-hit",
            volume: 0.1
        }
    },

}

enemylist["Nameless Knight"] = {
    name: "Nameless Knight",
    id:33,
    hp: 3800,
    atk: 360,
    def: 150,
    res: 0,
    atkinterval: 2,
    speed: 1.1 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "An independent Kazimierz knight\n with little in the way of\nachievements or skill.",
    description: "A nameless knight with little to no achievements.\nThey probably won't make it far in the competition.\n\n",

    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/nameless-knight-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 14,
        contact: 6,
        duration: 1,
    },

    death: {
        start: 15,
        end: 29,
        duration: 1,

    },
    idle: {
        start: 30,
        end: 59,
        duration: 1,

    },
    move: {
        start: 60,
        end: 71,
        duration: 1.1,

    },

    sfx: {
        hit: {
            src: "swordsman-hit",
            volume: 0.1
        }
    },
}

enemylist["Vicious Training Gloompincer"] = {
    name: "Vicious Training Gloompincer",
    id:35,
    hp: 3000,
    atk: 450,
    def: 700,
    res: 50,
    atkinterval: 2.5,
    speed: (0.8 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 0.95,
    tooltip: "A sturdy creature commonly\nfound in the rivers of Kazimierz.",
    description: "A gloompincer bred for use in the Kazimierz Major,\nwhether as target practices or to be slain in beastfighting arenas.\n\n" +
        "Training Gloompincers have balanced \noverall stats with fairly high DEF and RES.",
    targets: 1,
    enemytype: "normal",

    spritesheet: "images/sprites/vicious-training-gloompincer-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 17,
        contact: 7,
        duration: 1.3,
    },

    death: {
        start: 17,
        end: 31,
        duration: 1,

    },
    idle: {
        start: 32,
        end: 51,
        duration: 1,

    },

    move: {
        start: 52,
        end: 66,
        duration: 1.5,

    },

    sfx: {
        hit: {
            src: "swordsman-hit",
            volume: 0.1
        }
    }
}


enemylist["'Left-hand' Tytus Topola"] = {
    name: "'Left-hand' Tytus Topola",
    id:38,
    hp: 22500,
    atk: 750,
    def: 700,
    res: 50,
    atkinterval: 3,
    speed: (0.55 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 1.3,
    hploss: 1,
    dmgtype: "magic",
    size: 1.1,
    tooltip: "Decreases the ATK of the unit\n with the highest ATK;\nRevives.",
    description: "A legendary knight, with incredible resolve crashing your own.\n\n" +
        "Tytus Topola, is a formidable opponent with high stats and\ncapable of dangerous ranged Magic attacks thanks to his spear." +
        "\nIn addition, Tytus is capable of unleashing a special ability every 10 seconds \nwhere he raises his spear towards the \ndirection of the highest ATK ally unit on the battlefield,\nand lowers their ATK by 50% for 25 seconds.\nHe will not use the debuff on a unit that already has it.\n"
        + "After being downed once,\nTytus will use his almighty resolve to revive himself once,\nthis will also reset his special ability cooldown.",
    revive: true,
    revivetimer: 0,
    revivemax: 0,
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/tytus-topola-sheet.webp",

    hasskill: false,
    hasspatk: true,

    atkanim: {
        start: 0,
        end: 28,
        contact: 14,
        duration: 0.7,
    },


    idle: {
        start: 49,
        end: 73,
        duration: 1,

    },
    move: {
        start: 74,
        end: 93,
        duration: 1.2,

    },
    spatk: {
        start: 94,
        end: 115,
        duration: 1,
    },

    sfx: {
        atk: {
            src: "lancer-atk",
            volume: 0.1
        },
        hit: {
            src: "lancer-hit",
            volume: 0.1
        },
        spatk: {
            src: "mute",
            volume: 0.1
        }
    },
    spattack: {
        name: "bladehelmdebuff",
        target: "highestatk",
        chargetype: "second",
        range: 99,
        initialsp: 0,
        sp: 10,
        effectcontact: 94,
        applyeffects: {
            modifiers: {
                flatmultiatk: 0.50,
            },
            duration: 25,
            effecticon: 3
        },
    }
}

enemylist["'Left-hand' Tytus Topola2"] = {
    name: "'Left-hand' Tytus Topola2",
    id:39,
    hp: 22500,
    atk: 750,
    def: 700,
    res: 50,
    atkinterval: 3,
    speed: (0.55 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 1.3,
    hploss: 1,
    dmgtype: "magic",
    size: 1,
    tooltip: "Decreases the ATK of the unit\n with the highest ATK;\nRevives.",

    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/tytus-topola-sheet.webp",

    hasskill: false,
    hasspatk: true,


    atkanim: {
        start: 0,
        end: 28,
        contact: 14,
        duration: 0.8,
    },
    death: {
        start: 29,
        end: 48,
        duration: 1,
    },

    idle: {
        start: 49,
        end: 73,
        duration: 1,

    },
    move: {
        start: 74,
        end: 93,
        duration: 1.2,

    },
    spatk: {
        start: 94,
        end: 115,
        duration: 1,
    },
    start: {
        start: 116,
        end: 202,
        duration: 1.1,
    },
    sfx: {
        atk: {
            src: "lancer-atk",
            volume: 0.1
        },
        hit: {
            src: "lancer-hit",
            volume: 0.1
        },
        spatk: {
            src: "mute",
            volume: 0.1
        }
    },

    spattack: {
        name: "bladehelmdebuff",
        target: "highestatk",
        range: 99,
        initialsp: 0,
        chargetype: "second",
        sp: 10,
        effectcontact: 94,
        applyeffects: {
            modifiers: {
                flatmultiatk: 0.50,
            },
            duration: 25,
            effecticon: 3
        },
    }
}

enemylist["Corrupted Knight"] = {
    name: "Corrupted Knight",
    id:5003,
    hp: 40000,
    atk: 1200,
    def: 1200,
    res: 30,
    atkinterval: 4,
    speed: 0.65 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 2,
    dmgtype: "physical",
    size: 1.1,
    tooltip: "Attacks deal Splash damage to units\nsurrounding the primary target.\nGains greatly increased ATK, ASPD,\nand Movement Speed when\nthe Withered Knight dies.",
    description: "A Sarkaz knight with a broken horn who \nradiates terror and shows clear signs of excessive drug use.\nUses a warhammer in battle that crushes everything on its way\n\n" +
        "The Corrupted Knight is a strong enemy that unleashes devastating \nmelee attacks capable of hitting all units around the primary target.\n" +
        "Additionally, every 22 seconds, the Corrupted Knight will charge \na massive blow that deals 3x of his ATK damage to his targets.\n" +
        "If the Withered Knight is knocked out or \nenters a Blue box while the Corrupted Knight is present,\n" +
        "the Corrupted Knight will become enraged \n(indicated by the red aura surrounding him) \nwhich increases his ATK, ASPD, and speed by 80%, 100, and 150% respectivily.\nIt is thus imperative to kill both Knights at the same time.",

    targets: 1,
    splash: 1,
    splashdmg: 1,


    enemytype: "normal",

    spritesheet: "images/sprites/corrupted-knight-sheet.webp",

    hasskill: true,
    hasspatk: true,

    atkanim: {
        start: 0,
        end: 34,
        contact: 17,
        duration: 1,
    },

    death: {
        start: 35,
        end: 74,
        duration: 1,

    },
    idle: {
        start: 75,
        end: 97,
        duration: 1,

    },
    move: {
        start: 98,
        end: 122,
        duration: 1.1,

    },
    spatk: {
        start: 123,
        end: 225,
        contact: 225 - 14,
        duration: 1,
    },

    sfx: {
        atk: {
            src: "corrupt-atk",
            volume: 0.1
        },
        hit: {
            src: "corrupt-hit",
            volume: 0.1
        },
        spatk: {
            src: "corrupt-spatk",
            volume: 0.1
        },
        sphit: {
            src: "corrupt-hit",
            volume: 0.3
        },
    },
    skill: {
        name: "bloodboil",
        triggertype: "on_knightdeath",
        skilltype: "bloodboil",
        target: "self",
        modifiers: {
            atk: 0.8,
            aspd: 100,
            speed: 0.65 * 0.49 * 0.7,
            stack: 1
        },
        move: {
            start: 98,
            end: 122,
            duration: 0.3,
        },
        atkanim: {
            start: 0,
            end: 34,
            contact: 17,
            duration: 0.8,
        },
        spatk: {
            start: 123,
            end: 225,
            contact: 225 - 14,
            duration: 0.8,
        },

        aura: false,
        auratype: 8
    },
    spattack: {
        name: "knightnuke",
        target: "allblocking",
        range: 0,
        initialsp: 0,
        sp: 22,
        chargetype: "second",
        dmgmodifier: 3,
        splash: 1,
        effectcontact: 130,
        applyeffects: {
            modifiers: {
            },
            duration: 4,
            effecticon: 14
        },
    }
}

enemylist["Corrupted KnightEX"] = {
    name: "Corrupted KnightEX",
    id:5004,
    hp: 60000,
    atk: 1400,
    def: 1200,
    res: 30,
    atkinterval: 4,
    speed: 0.65 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 2,
    dmgtype: "physical",
    size: 1.1,
    tooltip: "Attacks deal Splash damage to units\nsurrounding the primary target.\nGains greatly increased ATK, ASPD,\nand Movement Speed when\nthe Withered Knight dies.",
    description: "A Sarkaz knight with a broken horn who \nradiates terror and shows clear signs of excessive drug use.\nUses a warhammer in battle that crushes everything on its way\n\n" +
        "The Corrupted Knight is a strong enemy that unleashes devastating \nmelee attacks capable of hitting all units around the primary target.\n" +
        "Additionally, every 22 seconds, the Corrupted Knight will charge \na massive blow that deals 3x of his ATK damage to his targets.\n" +
        "If the Withered Knight is knocked out or \nenters a Blue box while the Corrupted Knight is present,\n" +
        "the Corrupted Knight will become enraged \n(indicated by the red aura surrounding him) \nwhich increases his ATK, ASPD, and speed by 80%, 100, and 150% respectivily.\nIt is thus imperative to kill both Knights at the same time.",

    targets: 1,
    splash: 1,
    splashdmg: 1,


    enemytype: "normal",

    spritesheet: "images/sprites/corrupted-knight-sheet.webp",

    hasskill: true,
    hasspatk: true,

    atkanim: {
        start: 0,
        end: 34,
        contact: 17,
        duration: 1,
    },

    death: {
        start: 35,
        end: 74,
        duration: 1,

    },
    idle: {
        start: 75,
        end: 97,
        duration: 1,

    },
    move: {
        start: 98,
        end: 122,
        duration: 1.1,

    },
    spatk: {
        start: 123,
        end: 225,
        contact: 225 - 14,
        duration: 1,
    },

    sfx: {
        atk: {
            src: "corrupt-atk",
            volume: 0.1
        },
        hit: {
            src: "corrupt-hit",
            volume: 0.1
        },
        spatk: {
            src: "corrupt-spatk",
            volume: 0.1
        },
        sphit: {
            src: "corrupt-hit",
            volume: 0.3
        },
    },
    skill: {
        name: "bloodboil",
        triggertype: "on_knightdeath",
        skilltype: "bloodboil",
        target: "self",
        modifiers: {
            atk: 0.8,
            aspd: 100,
            speed: 0.65 * 0.49 * 0.7,
            stack: 1
        },
        move: {
            start: 98,
            end: 122,
            duration: 0.3,
        },
        atkanim: {
            start: 0,
            end: 34,
            contact: 17,
            duration: 0.8,
        },
        spatk: {
            start: 123,
            end: 225,
            contact: 225 - 14,
            duration: 0.8,
        },

        aura: false,
        auratype: 8
    },
    spattack: {
        name: "knightnuke",
        target: "allblocking",
        range: 0,
        initialsp: 0,
        sp: 22,
        chargetype: "second",
        dmgmodifier: 3,
        splash: 1,
        effectcontact: 130,
        applyeffects: {
            modifiers: {
            },
            duration: 4,
            effecticon: 14
        },
    }
}

enemylist["Withered Knight"] = {
    name: "Withered Knight",
    id:5005,
    hp: 40000,
    atk: 500,
    def: 600,
    res: 70,
    atkinterval: 4,
    speed: 0.65 * 0.49,
    blockcount: 1,
    type: "g",
    range: 2.5,
    hploss: 2,
    dmgtype: "magic",
    size: 1.1,
    tooltip: "Targets 3 units at once\nwith magic arrows.\nGains greatly increased ATK, ASPD,\nand Movement Speed when\nthe Corrupted Knight dies.",
    description: "A Sarkaz knight with a broken horn who \nradiates terror and shows clear signs of excessive drug use.\nUses a cursed arrow in battle to fire powerful magic attacks.\n\n" +
        "The Withered Knight is a strong enemy capable of firing \nranged magic attacks to up to 3 units in range.\n" +
        "Additionally, every 22 seconds, the Withered Knight will fire \nstronger arrows that deal 1.6x of his ATK damage to his targets.\n" +
        "If the Corrupted Knight is knocked out or \nenters a Blue box while the Withered Knight is present,\n" +
        "the Withered Knight will become enraged \n(indicated by the red aura surrounding him) \nwhich increases his ATK, ASPD, and speed by 80%, 100, and 150% respectivily.\nIt is thus imperative to kill both Knights at the same time.",

    targets: 3,
    bullet: { size: { height: 1, depth: 6, width: 0.7 }, arc: false, speed: 6, color: new BABYLON.Color3(0.69, 0.21, 0.67) },


    enemytype: "normal",

    spritesheet: "images/sprites/withered-knight-sheet.webp",

    hasskill: true,
    hasspatk: true,

    atkanim: {
        start: 0,
        end: 24,
        contact: 14,
        duration: 1,
    },

    death: {
        start: 25,
        end: 54,
        duration: 1,

    },
    idle: {
        start: 55,
        end: 84,
        duration: 1,

    },
    move: {
        start: 85,
        end: 104,
        duration: 1.15,

    },
    spatk: {
        start: 105,
        end: 129,
        contact: 129 - 11,

        duration: 1,
    },

    sfx: {
        atk: {
            src: "wither-atk",
            volume: 0.1
        },
        hit: {
            src: "wither-hit",
            volume: 0.1
        },
        spatk: {
            src: "wither-atk",
            volume: 0.1
        },
        sphit: {
            src: "wither-hit",
            volume: 0.1
        },
    },
    skill: {
        name: "bloodboil",
        triggertype: "on_knightdeath",
        skilltype: "bloodboil",
        target: "self",
        modifiers: {
            atk: 0.8,
            aspd: 100,
            speed: 0.65 * 0.49 * 0.7,
            stack: 1
        },
        move: {
            start: 85,
            end: 104,
            duration: 0.6,
        },
        atkanim: {
            start: 0,
            end: 24,
            contact: 14,
            duration: 0.8,
        },
        spatk: {
            start: 105,
            end: 129,
            contact: 129 - 11,

            duration: 0.8,
        },
        aura: false,
        auratype: 8
    },
    spattack: {
        name: "knightnuke",
        target: "allblocking",
        range: 2.5,
        initialsp: 0,
        sp: 22,
        chargetype: "second",
        dmgmodifier: 1.6,
        effectcontact: 129 - 11,
        skillbullet: true,
        applyeffects: {
            modifiers: {
            },
            duration: 0,
        },
    }
}

enemylist["Withered KnightEX"] = {
    name: "Withered KnightEX",
    id:5006,
    hp: 60000,
    atk: 650,
    def: 600,
    res: 70,
    atkinterval: 4,
    speed: 0.65 * 0.49,
    blockcount: 1,
    type: "g",
    range: 2.5,
    hploss: 2,
    dmgtype: "magic",
    size: 1.1,
    tooltip: "Targets 3 units at once\nwith magic arrows.\nGains greatly increased ATK, ASPD,\nand Movement Speed when\nthe Corrupted Knight dies.",
    description: "A Sarkaz knight with a broken horn who \nradiates terror and shows clear signs of excessive drug use.\nUses a cursed arrow in battle to fire powerful magic attacks.\n\n" +
        "The Withered Knight is a strong enemy capable of firing \nranged magic attacks to up to 3 units in range.\n" +
        "Additionally, every 22 seconds, the Withered Knight will fire \nstronger arrows that deal 1.6x of his ATK damage to his targets.\n" +
        "If the Corrupted Knight is knocked out or \nenters a Blue box while the Withered Knight is present,\n" +
        "the Withered Knight will become enraged \n(indicated by the red aura surrounding him) \nwhich increases his ATK, ASPD, and speed by 80%, 100, and 150% respectivily.\nIt is thus imperative to kill both Knights at the same time.",

    targets: 3,
    bullet: { size: { height: 1, depth: 6, width: 0.7 }, arc: false, speed: 6, color: new BABYLON.Color3(0.69, 0.21, 0.67) },


    enemytype: "normal",

    spritesheet: "images/sprites/withered-knight-sheet.webp",

    hasskill: true,
    hasspatk: true,

    atkanim: {
        start: 0,
        end: 24,
        contact: 14,
        duration: 1,
    },

    death: {
        start: 25,
        end: 54,
        duration: 1,

    },
    idle: {
        start: 55,
        end: 84,
        duration: 1,

    },
    move: {
        start: 85,
        end: 104,
        duration: 1.15,

    },
    spatk: {
        start: 105,
        end: 129,
        contact: 129 - 11,

        duration: 1,
    },

    sfx: {
        atk: {
            src: "wither-atk",
            volume: 0.1
        },
        hit: {
            src: "wither-hit",
            volume: 0.1
        },
        spatk: {
            src: "wither-atk",
            volume: 0.1
        },
        sphit: {
            src: "wither-hit",
            volume: 0.1
        },
    },
    skill: {
        name: "bloodboil",
        triggertype: "on_knightdeath",
        skilltype: "bloodboil",
        target: "self",
        modifiers: {
            atk: 0.8,
            aspd: 100,
            speed: 0.65 * 0.49 * 0.7,
            stack: 1
        },
        move: {
            start: 85,
            end: 104,
            duration: 0.6,
        },
        atkanim: {
            start: 0,
            end: 24,
            contact: 14,
            duration: 0.8,
        },
        spatk: {
            start: 105,
            end: 129,
            contact: 129 - 11,

            duration: 0.8,
        },
        aura: false,
        auratype: 8
    },
    spattack: {
        name: "knightnuke",
        target: "allblocking",
        range: 2.5,
        initialsp: 0,
        sp: 22,
        chargetype: "second",
        dmgmodifier: 1.6,
        effectcontact: 129 - 11,
        skillbullet: true,
        applyeffects: {
            modifiers: {
            },
            duration: 0,
        },
    }
}

enemylist["Junkman"] = {
    name: "Junkman",
    id:5,
    hp: 5000,
    atk: 500,
    def: 50,
    res: 20,
    atkinterval: 3,
    speed: 0.8 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "A ragged-looking \nenemy combatant.",
    description: "A ragged-looking enemy combatant.\nAccording to intel, they disguise themselves as drifters\nto conceal the fact that they are mercenaries.\n\n"
        + "They boost higher stats than your average enemy soldier,\nmaking healing possibly required in order to withstand their hits.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/junkman-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 14,
        contact: 10,
        duration: 1,
    },

    death: {
        start: 16,
        end: 29,
        duration: 1,

    },
    idle: {
        start: 30,
        end: 44,
        duration: 1,

    },
    move: {
        start: 45,
        end: 60,
        duration: 1.2,
    },

    sfx: {

        hit: {
            src: "junkman-hit",
            volume: 0.1
        }
    },
}

enemylist["Veteran Junkman"] = {
    name: "Veteran Junkman",
    id:6,
    hp: 7500,
    atk: 600,
    def: 70,
    res: 20,
    atkinterval: 3,
    speed: 0.8 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "A ragged-looking enemy.\nMore dangerous than a Junkman.",
    description: "A ragged-looking enemy combatant.\nEven stronger than regular Junkmen.\n\n",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/veteran-junkman-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 14,
        contact: 10,
        duration: 1,
    },

    death: {
        start: 16,
        end: 29,
        duration: 1,

    },
    idle: {
        start: 30,
        end: 44,
        duration: 1,

    },
    move: {
        start: 45,
        end: 60,
        duration: 1.2,
    },

    sfx: {

        hit: {
            src: "junkman-hit",
            volume: 0.1
        }
    },
}


enemylist["Arts Guard"] = {
    name: "Arts Guard",
    id:20,
    hp: 5500,
    atk: 450,
    def: 220,
    res: 50,
    atkinterval: 2.5,
    speed: 0.75 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "magic",
    size: 1,
    tooltip: "A Reunion melee soldier trained\nto do melee magic attacks.\n",
    description: "A Reunion soldier trained in the use of Magic.\nThey use magic-infused swords to strike.\n\n"
        + "These dangerous enemies are capable of striking with magic attacks,\nrendering any DEF focused unit like Defenders useless against them.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/arts-guard-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 14,
        contact: 6,
        duration: 1,
    },

    death: {
        start: 15,
        end: 28,
        duration: 1,

    },
    idle: {
        start: 29,
        end: 48,
        duration: 1,

    },
    move: {
        start: 49,
        end: 64,
        duration: 1.1,
    },

    sfx: {
        atk: {
            src: "artsguard-atk",
            volume: 0.1
        },
        hit: {
            src: "artsguard-hit",
            volume: 0.1
        }
    },
}

enemylist["Dual Swordsman"] = {
    name: "Dual Swordsman",
    id:14,
    hp: 3500,
    atk: 450,
    def: 150,
    res: 25,
    atkinterval: 1.2,
    speed: 1.1 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A Reunion melee soldier,\nknown for having high attack.\n",
    description: "A Reunion soldier wielding two swords at once.\n\n"
        + "These enemy soldiers boost fairly high ATK and fast attack speed,\nmaking them easily melt down low DEF units on their path.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/dual-swordsman-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 16,
        contact: 12,
        duration: 1,
    },

    death: {
        start: 17,
        end: 30,
        duration: 1,

    },
    idle: {
        start: 31,
        end: 45,
        duration: 1,

    },
    move: {
        start: 46,
        end: 57,
        duration: 1.1,

    },

    sfx: {
        hit: {
            src: "swordsman-hit",
            volume: 0.1
        }
    },
}

enemylist["Breaker"] = {
    name: "Breaker",
    id:40,
    hp: 3500,
    atk: 410,
    def: 50,
    res: 25,
    atkinterval: 1.4,
    speed: 1.9 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A well-trained rushing unit \nwith high movement speed \nand above average ATK.",
    description: "A Reunion melee soldier with movement speed comparable to Hounds.\n\n"
        + "A soldier with very fast movement speed, and fairly high stats,\nmaking him able to slip through unprepared defense lines.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/breaker-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 14,
        contact: 6,
        duration: 1,
    },

    death: {
        start: 15,
        end: 29,
        duration: 1,
    },
    idle: {
        start: 30,
        end: 44,
        duration: 1,

    },
    move: {
        start: 45,
        end: 58,
        duration: 0.7,

    },

    sfx: {
        hit: {
            src: "soldier-hit",
            volume: 0.1
        }
    },
}

enemylist["Breaker Leader"] = {
    name: "Breaker Leader",
    id:41,
    hp: 5000,
    atk: 500,
    def: 80,
    res: 25,
    atkinterval: 1.4,
    speed: 1.9 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A more dangerous Breaker\nwith high movement speed \nand above average ATK.",
    description: "An even stronger Breaker with movement speed comparable to Hounds.\n\n"
        + "A Breaker with higher stats,\nable to slip through unprepared defense lines.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/breaker-leader-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 14,
        contact: 6,
        duration: 1,
    },

    death: {
        start: 15,
        end: 29,
        duration: 1,

    },
    idle: {
        start: 30,
        end: 44,
        duration: 1,

    },
    move: {
        start: 45,
        end: 58,
        duration: 0.7,

    },

    sfx: {
        hit: {
            src: "soldier-hit",
            volume: 0.1
        }
    },
}



enemylist["Possessed Soldier Leader"] = {
    name: "Possessed Soldier Leader",
    id:43,
    hp: 4000,
    atk: 300,
    def: 150,
    res: 30,
    atkinterval: 1.8,
    speed: (0.7 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A stronger Soldier.\nRegenerates HP rapidly.",
    description: "A soldier that has been controlled by an unknown entity,\ncapable of regenerating rapidly.\nThe appearance of such an aberration on\nthe battlefield is almost beyond imagination.\n\n"
        + "A stronger possessed soldier with regenerative abilities,\ncapable of regenerating 150 HP per second.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/possessed-soldier-leader-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 14,
        contact: 6,
        duration: 1,
    },

    death: {
        start: 15,
        end: 29,
        duration: 1,

    },
    idle: {
        start: 30,
        end: 59,
        duration: 1,

    },
    move: {
        start: 60,
        end: 84,
        duration: 1.1,

    },

    sfx: {
        atk: {
            src: "soldier-atk",
            volume: 0.1
        },
        hit: {
            src: "soldier-hit",
            volume: 0.1
        }
    },


    skill: {
        name: "possessedsoldier",
        triggertype: "on_start",
        skilltype: "possess",
        target: "self",
        modifiers: {
            flathpregen: 150,
        },
        aura: false,
    },
}

enemylist["Possessed Soldier"] = {
    name: "Possessed Soldier",
    id:42,
    hp: 2500,
    atk: 250,
    def: 100,
    res: 30,
    atkinterval: 1.8,
    speed: (0.7 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A soldier that has been controlled\n by an unknown entity,\ncapable of regenerating rapidly.",
    description: "A soldier that has been controlled by an unknown entity,\ncapable of regenerating rapidly.\nThe appearance of such an\naberration on the battlefield is almost beyond imagination.\n\n"
        + "An enemy basic soldier with regenerative abilities,\ncapable of regenerating 80 HP per second.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/possessed-soldier-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 14,
        contact: 6,
        duration: 1,
    },

    death: {
        start: 15,
        end: 29,
        duration: 1,

    },
    idle: {
        start: 30,
        end: 59,
        duration: 1,

    },
    move: {
        start: 60,
        end: 84,
        duration: 1.1,

    },

    sfx: {
        atk: {
            src: "soldier-atk",
            volume: 0.1
        },
        hit: {
            src: "soldier-hit",
            volume: 0.1
        }
    },


    skill: {
        name: "possessedsoldier",
        triggertype: "on_start",
        skilltype: "possess",
        target: "self",
        modifiers: {
            flathpregen: 80,
        },
        aura: false,
    },
}

enemylist["Possessed Defender"] = {
    name: "Possessed Defender",
    id:45,
    hp: 10000,
    atk: 600,
    def: 800,
    res: 0,
    atkinterval: 2.6,
    speed: (0.55 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "A heavy defender that has been\ncontrolled by an unknown entity,\ncapable of regenerating rapidly",
    description: "A heavy defender that has been controlled by an unknown entity, \ncapable of regenerating rapidly.\nWell-protected by elite tactical gear, the appearance of such an aberration\non the battlefield is almost beyond imagination.\n\n"
        + "An enemy heavy defender with regenerative abilities,\ncapable of regenerating 200 HP per second.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/possessed-defender-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 14,
        contact: 6,
        duration: 1,
    },

    death: {
        start: 15,
        end: 28,
        duration: 1,

    },
    idle: {
        start: 29,
        end: 43,
        duration: 1,

    },
    move: {
        start: 44,
        end: 61,
        duration: 1.2,

    },

    sfx: {

        hit: {
            src: "shieldguard-hit",
            volume: 0.1
        }
    },


    skill: {
        name: "possessedsoldier",
        triggertype: "on_start",
        skilltype: "possess",
        target: "self",
        modifiers: {
            flathpregen: 200,
        },
        aura: false,
    },
}

enemylist["Possessed Junkman"] = {
    name: "Possessed Junkman",
    id:43,
    hp: 6000,
    atk: 530,
    def: 100,
    res: 30,
    atkinterval: 3,
    speed: (0.45 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "A Junkman that has been controlled\nby an unknown entity and is \ncapable of regenerating rapidly.",
    description: "A junkman that has been controlled by an unknown entity,\ncapable of regenerating rapidly.\nWielding a club filled with spikes, the appearance of such an\naberration on the battlefield is almost beyond imagination.\n\n"
        + "A Junkman with regenerative abilities,\ncapable of regenerating 200 HP per second.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/possessed-junkman-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 22,
        contact: 14,
        duration: 1,
    },

    death: {
        start: 23,
        end: 36,
        duration: 1,

    },
    idle: {
        start: 37,
        end: 56,
        duration: 1,

    },
    move: {
        start: 57,
        end: 76,
        duration: 1.1,

    },

    sfx: {

        hit: {
            src: "junkman-hit",
            volume: 0.1
        }
    },


    skill: {
        name: "possessedsoldier",
        triggertype: "on_start",
        skilltype: "possess",
        target: "self",
        modifiers: {
            flathpregen: 200,
        },
        aura: false,
    },
}


enemylist["Possessed Defender Leader"] = {
    name: "Possessed Defender Leader",
    id:46,
    hp: 16000,
    atk: 800,
    def: 1000,
    res: 0,
    atkinterval: 2.6,
    speed: (0.55 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "A more dangerous Defender.\nRegenerates HP rapidly.",
    description: "A stronger defender that has been controlled by an unknown entity, \ncapable of regenerating rapidly.\nWell-protected by elite tactical gear, the appearance of such an aberration\non the battlefield is almost beyond imagination.\n\n"
        + "A stronger heavy defender with regenerative abilities,\ncapable of regenerating 250 HP per second.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/possessed-defender-leader-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 14,
        contact: 6,
        duration: 1,
    },

    death: {
        start: 15,
        end: 28,
        duration: 1,

    },
    idle: {
        start: 29,
        end: 43,
        duration: 1,

    },
    move: {
        start: 44,
        end: 61,
        duration: 1.2,

    },

    sfx: {

        hit: {
            src: "shieldguard-hit",
            volume: 0.1
        }
    },


    skill: {
        name: "possessedsoldier",
        triggertype: "on_start",
        skilltype: "possess",
        target: "self",
        modifiers: {
            flathpregen: 250,
        },
        aura: false,
    },
}

enemylist["Possessed Veteran Junkman"] = {
    name: "Possessed Veteran Junkman",
    id:44,
    hp: 11000,
    atk: 650,
    def: 200,
    res: 30,
    atkinterval: 3,
    speed: (0.45 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "A more dangerous Junkman.\nRegenerates HP rapidly.",
    description: "A veteran junkman that has been controlled by an unknown entity,\ncapable of regenerating rapidly.\nWielding a club filled with spikes, the appearance of such an\naberration on the battlefield is almost beyond imagination.\n\n"
        + "A stronger Junkman with regenerative abilities,\ncapable of regenerating 250 HP per second.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/possessed-veteran-junkman-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 22,
        contact: 14,
        duration: 1,
    },

    death: {
        start: 23,
        end: 36,
        duration: 1,

    },
    idle: {
        start: 37,
        end: 56,
        duration: 1,

    },
    move: {
        start: 57,
        end: 76,
        duration: 1.1,

    },

    sfx: {

        hit: {
            src: "junkman-hit",
            volume: 0.1
        }
    },


    skill: {
        name: "possessedsoldier",
        triggertype: "on_start",
        skilltype: "possess",
        target: "self",
        modifiers: {
            flathpregen: 250,
        },
        aura: false,
    },
}

enemylist["Enraged Possessed Bonethrower"] = {
    name: "Enraged Possessed Bonethrower",
    id:50,
    hp: 22000,
    atk: 1050,
    def: 220,
    res: 30,
    atkinterval: 2,
    speed: (0.5 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 2.3,
    hploss: 1,
    dmgtype: "physical",
    size: 1.05,
    tooltip: "A possessed ranged combatant that\nhas completely given in to madness,\nhaving extremely high ATK.\nLoses HP over time.",
    description: "An enemy combatant who has completely descended into \nprimal madness as their lifeforce is consumed.\nHurl as projectiles whatever they can put their hands on.\n\n" +
        "A dangerous Reunion soldier that was turned into a force of nature,\ncapable of doing long ranged attacks to Ranged and Ground units.\nBoosts high attack in exchange for losing 350 HP every second.",

    targets: 1,
    bullet: { size: { height: 1, depth: 12, width: 1.2 }, arc: false, speed: 5, color: new BABYLON.Color3(0, 0, 0) },


    enemytype: "normal",

    spritesheet: "images/sprites/enraged-possessed-bonethrower-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 37,
        contact: 24,
        duration: 1.1,
    },

    death: {
        start: 38,
        end: 52,
        duration: 1,

    },
    idle: {
        start: 53,
        end: 76,
        duration: 1,

    },
    move: {
        start: 77,
        end: 94,
        duration: 1.1,

    },

    sfx: {

        hit: {
            src: "thrower-hit",
            volume: 0.05
        }
    },


    skill: {
        name: "possessedsoldier",
        triggertype: "on_start",
        skilltype: "possess",
        target: "self",
        modifiers: {
            flathpregen: -350,
        },
        aura: false,
    },
}

enemylist["Enraged Possessed Thrower"] = {
    name: "Enraged Possessed Thrower",
    id:49,
    hp: 15000,
    atk: 750,
    def: 200,
    res: 30,
    atkinterval: 2.1,
    speed: (0.5 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 2.3,
    hploss: 1,
    dmgtype: "physical",
    size: 1.05,
    tooltip: "A possessed ranged combatant\nthat has descended into madness,\nhaving extremely high ATK.\nLoses HP over time.",
    description: "An enemy combatant who has slowly descended into \nprimal madness as their lifeforce is consumed.\nHurl as projectiles whatever they can put their hands on.\n\n" +
        "A dangerous Reunion soldier that was turned into a force of nature,\ncapable of doing long ranged attacks to Ranged and Ground units.\nBoosts high attack in exchange for losing 250 HP every second.",

    targets: 1,
    bullet: { size: { height: 1, depth: 12, width: 1.2 }, arc: false, speed: 5, color: new BABYLON.Color3(0, 0, 0) },

    enemytype: "normal",

    spritesheet: "images/sprites/enraged-possessed-thrower-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 37,
        contact: 24,
        duration: 1.1,
    },

    death: {
        start: 38,
        end: 52,
        duration: 1,

    },
    idle: {
        start: 53,
        end: 76,
        duration: 1,

    },
    move: {
        start: 77,
        end: 94,
        duration: 1.1,

    },

    sfx: {

        hit: {
            src: "thrower-hit",
            volume: 0.05
        }
    },


    skill: {
        name: "possessedsoldier",
        triggertype: "on_start",
        skilltype: "possess",
        target: "self",
        modifiers: {
            flathpregen: -250,
        },
        aura: false,
    },
}

enemylist["Enraged Possessed Leader"] = {
    name: "Enraged Possessed Leader",
    id:48,
    hp: 30000,
    atk: 1750,
    def: 230,
    res: 30,
    atkinterval: 1.3,
    speed: 1.2 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.05,
    tooltip: "A possessed enemy combatant that\nhas completely given in to madness,\nhaving extremely high ATK.\nLoses HP over time.",
    description: "An enemy combatant who has completely descended \ninto primal madness as their lifeforce is consumed.\n\n" +
        "A massively powerful Reunion soldier that was turned into a force of nature.\nBoosts extremely attack and high attack speed in\nexchange for losing 500 HP every second.\nDo not let them touch you!",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/enraged-possessed-leader-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 19,
        contact: 9,
        duration: 1,
    },

    death: {
        start: 20,
        end: 33,
        duration: 1,

    },
    idle: {
        start: 34,
        end: 63,
        duration: 1,

    },
    move: {
        start: 64,
        end: 75,
        duration: 1.2,

    },

    sfx: {

        hit: {
            src: "rage-hit",
            volume: 0.1
        }
    },


    skill: {
        name: "possessedsoldier",
        triggertype: "on_start",
        skilltype: "possess",
        target: "self",
        modifiers: {
            flathpregen: -500,
        },
        aura: false,
    },
}

enemylist["Enraged Possessed Soldier"] = {
    name: "Enraged Possessed Soldier",
    id:47,
    hp: 20000,
    atk: 1000,
    def: 200,
    res: 30,
    atkinterval: 1.3,
    speed: 1.2 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.05,
    tooltip: "A possessed enemy combatant that \nhas descended into madness,\nhaving extremely high ATK.\nLoses HP over time.",
    description: "An enemy combatant who has slowly descended into \nprimal madness as their lifeforce is consumed.\n\n" +
        "A dangerous Reunion soldier that was turned into a force of nature.\nBoosts very high attack and high attack speed in\nexchange for losing 330 HP every second.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/enraged-possessed-soldier-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 19,
        contact: 9,
        duration: 1,
    },

    death: {
        start: 20,
        end: 33,
        duration: 1,

    },
    idle: {
        start: 34,
        end: 63,
        duration: 1,

    },
    move: {
        start: 64,
        end: 75,
        duration: 1.2,

    },

    sfx: {

        hit: {
            src: "rage-hit",
            volume: 0.1
        }
    },


    skill: {
        name: "possessedsoldier",
        triggertype: "on_start",
        skilltype: "possess",
        target: "self",
        modifiers: {
            flathpregen: -330,
        },
        aura: false,
    },
}

enemylist["Mephisto"] = {
    name: "Mephisto",
    id:5007,
    hp: 35000,
    atk: 600,
    def: 200,
    res: 60,
    atkinterval: 10,
    speed: 0.5 * 0.49,
    blockcount: 1,
    type: "g",
    range: 99,
    hploss: 2,
    dmgtype: "heal",
    size: 1.05,
    tooltip: "Less likely to be attacked.\nAttacks heal up to 3 enemies.\nWhile on the battlefield,\nincrease all enemies'\nATK and ASPD.",
    description: "A Medic who is one of Reunion's squad leaders.\nHe heals the wounded while commanding his troops to attack,\nand can improve their life recovery rate and battle capabilities.\nHe boasts a high resistance to Magic.\nCurrently, it has been confirmed that he is the one controlling the Possessed.\n\n" +
        "Mephisto is an enemy with no offensive capabilities of his own,\nhe is however capable of supporting his Herd while they do his bidding.\n" +
        "Mephisto attacks do not hit ally units,\nthey instead heal up to 3 enemies anywhere on the map.\n" +
        "Mephisto will make himself less likely to be targeted by ally units ranged attacks,\nwhile simultaneously Inspiring all enemy presents as long as he is alive,\n" +
        "increasing their ATK and ASPD by 10% and 10 respectively,\nhe will also double the HP regen of possessed enemies if applicable.",

    targets: 3,

    enemytype: "normal",

    spritesheet: "images/sprites/mephisto-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 47,
        contact: 20,
        duration: 1,
    },

    death: {
        start: 48,
        end: 61,
        duration: 1,

    },
    idle: {
        start: 62,
        end: 82,
        duration: 1,

    },
    move: {
        start: 83,
        end: 102,
        duration: 1.2,

    },

    sfx: {
        hit: {
            src: "mephisto-hit",
            volume: 0.2
        }
    },


    skill: {
        name: "inspireguerrilla",
        triggertype: "on_start",
        skilltype: "alive",
        target: "all",
        modifiers: {
            atk: 0.1,
            aspd: 10,
            hpregenbuff: 2
        },
        aura: false,
        auratype: 2
    },
}

enemylist["MephistoEX"] = {
    name: "MephistoEX",
    id:5008,
    hp: 60000,
    atk: 1000,
    def: 300,
    res: 60,
    atkinterval: 10,
    speed: (0.5) * 0.49,
    blockcount: 1,
    type: "g",
    range: 99,
    hploss: 2,
    dmgtype: "heal",
    size: 1.05,
    tooltip: "Less likely to be attacked.\nAttacks heal up to 3 enemies.\nWhile on the battlefield,\nincrease all enemies'\nATK and ASPD.",
    description: "A Medic who is one of Reunion's squad leaders.\nHe heals the wounded while commanding his troops to attack,\nand can improve their life recovery rate and battle capabilities.\nHe boasts a high resistance to Magic.\nCurrently, it has been confirmed that he is the one controlling the Possessed.\n\n" +
        "Mephisto is a Reunion leader with no offensive capabilities of his own,\nhe is however capable of supporting his Herd while they do his bidding.\n" +
        "Mephisto attacks do not hit ally units,\nthey instead heal up to 3 enemies anywhere on the map.\n" +
        "Mephisto will make himself less likely to be targeted by ally units ranged attacks,\nwhile simultaneously Inspiring all enemy presents as long as he is alive,\n" +
        "increasing their ATK and ASPD by 20% and 10 respectively,\nhe will also double the HP regen of possessed enemies if applicable.",

    targets: 3,

    enemytype: "normal",

    spritesheet: "images/sprites/mephisto-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 47,
        contact: 20,
        duration: 1,
    },

    death: {
        start: 48,
        end: 61,
        duration: 1,

    },
    idle: {
        start: 62,
        end: 82,
        duration: 1,

    },
    move: {
        start: 83,
        end: 102,
        duration: 1.2,

    },

    sfx: {
        hit: {
            src: "mephisto-hit",
            volume: 0.2
        }
    },


    skill: {
        name: "inspireguerrilla",
        triggertype: "on_start",
        skilltype: "alive",
        target: "all",
        modifiers: {
            atk: 0.2,
            aspd: 10,
            hpregenbuff: 2
        },
        aura: false,
        auratype: 2
    },
}

enemylist["Sarkaz Centurion"] = {
    name: "Sarkaz Centurion",
    id:5002,
    hp: 25000,
    atk: 850,
    def: 250,
    res: 35,
    atkinterval: 5,
    speed: 0.78 * 0.49,
    blockcount: 1,
    type: "g",
    range: 2.35,
    hploss: 2,
    dmgtype: "magic",
    size: 1.1,
    tooltip: "A strong Reunion squad leader.\nDoes ranged magic attacks\nto 2 targets at once.",
    description: "One of Reunion's squad leaders who also serves as a Sarkaz mercenary.\nHe leads a group of Sarkaz mercenaries to fight on the front lines.\n\nA strong enemy with high stats and very powerful \nranged Magic attacks that can target 2 ally units at once.",
    targets: 2,
    bullet: { size: { height: 1, depth: 5, width: 3 }, arc: false, speed: 5, color: new BABYLON.Color3(0.69, 0.21, 0.67) },

    enemytype: "normal",

    spritesheet: "images/sprites/sarkaz-centurion-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 51,
        contact: 16,
        duration: 1,
    },

    death: {
        start: 52,
        end: 66,
        duration: 1,

    },
    idle: {
        start: 67,
        end: 81,
        duration: 1,

    },
    move: {
        start: 82,
        end: 106,
        duration: 1.2,
    },

    sfx: {

        hit: {
            src: "centurion-hit",
            volume: 0.1
        }
    },

}

enemylist["Sarkaz Centurion Nidus Guard"] = {
    name: "Sarkaz Centurion Nidus Guard",
    id:52,
    hp: 14000,
    atk: 700,
    def: 220,
    res: 60,
    atkinterval: 5,
    speed: 0.8 * 0.49,
    blockcount: 1,
    type: "g",
    range: 1.5,
    hploss: 1,
    dmgtype: "magic",
    size: 1.1,
    tooltip: "A stronger Centurion Host.\nAttacks 3 targets at once;\neach attack restores\nsome of this unit's HP.",
    description: "A Sarkaz mercenary unwittingly converted into one of Mephisto's Herd,\nable to damage multiple targets at once and drain vitality from its victims.\n\n"
        + "A stronger Centurion turned into a Possessed,\nhad his combat capabilities enhanced and can now\ntarget up to 3 targets at once with ranged magic attacks\nwhile also restoring HP equivalent\nto 150% of the damage dealt.",

    targets: 3,
    bullet: { size: { height: 1, depth: 5, width: 3 }, arc: false, speed: 5, color: new BABYLON.Color3(0.69, 0.21, 0.67) },


    enemytype: "normal",

    spritesheet: "images/sprites/sarkaz-centurion-nidus-guard-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 51,
        contact: 16,
        duration: 1,
    },

    death: {
        start: 52,
        end: 66,
        duration: 1,

    },
    idle: {
        start: 67,
        end: 81,
        duration: 1,

    },
    move: {
        start: 82,
        end: 106,
        duration: 1.2,
    },

    sfx: {

        hit: {
            src: "centurion-hit",
            volume: 0.1
        }
    },


    skill: {
        name: "possessedsoldier",
        triggertype: "on_start",
        skilltype: "possess",
        target: "self",
        modifiers: {
            lifesteal: 1.5,
        },
        aura: false,
    },
}

enemylist["Sarkaz Centurion Host"] = {
    name: "Sarkaz Centurion Host",
    id:51,
    hp: 10000,
    atk: 600,
    def: 200,
    res: 60,
    atkinterval: 5,
    speed: 0.8 * 0.49,
    blockcount: 1,
    type: "g",
    range: 1.5,
    hploss: 1,
    dmgtype: "magic",
    size: 1.1,
    tooltip: "Attacks 3 targets at once;\neach attack restores\nsome of this unit's HP.",
    description: "A Sarkaz mercenary unwittingly converted into one of Mephisto's Herd,\nable to damage multiple targets at once and drain vitality from its victims.\n\n"
        + "This enemy Centurion turned into a Possessed,\nhad his combat capabilities enhanced and can now\ntarget up to 3 targets at once with ranged magic attacks\nwhile also restoring HP equivalent\nto 150% of the damage dealt.",
    targets: 3,
    bullet: { size: { height: 1, depth: 5, width: 3 }, arc: false, speed: 5, color: new BABYLON.Color3(0.69, 0.21, 0.67) },


    enemytype: "normal",

    spritesheet: "images/sprites/sarkaz-centurion-host-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 51,
        contact: 16,
        duration: 1,
    },

    death: {
        start: 52,
        end: 66,
        duration: 1,

    },
    idle: {
        start: 67,
        end: 81,
        duration: 1,

    },
    move: {
        start: 82,
        end: 106,
        duration: 1.2,
    },

    sfx: {

        hit: {
            src: "centurion-hit",
            volume: 0.1
        }
    },


    skill: {
        name: "possessedsoldier",
        triggertype: "on_start",
        skilltype: "possess",
        target: "self",
        modifiers: {
            lifesteal: 1.5,
        },
        aura: false,
    },
}

enemylist["Ergate"] = {
    name: "Ergate",
    id:27,
    hp: 4500,
    atk: 0,
    def: 280,
    res: 45,
    atkinterval: 1,
    speed: 1.2 * 0.49,
    blockcount: 99,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.1,
    tooltip: "Specializes in sabotage.\nCannot be blocked.\nMust be eliminated quickly.",
    description: "An engineer that specializes in sabotage,\nalmost never seen wielding weapons.\nThough unarmed, they utilize their agility and cunning to slip\nthrough defenses in order to sabotage\nmechanical and electrical equipment.\n\n" +
        "These fast enemies with no offensive abilities cannot be blocked by ground units,\nmaking them able to slip by unnoticed through defense lines.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/ergate-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 999,
        end: 999,
        contact: 999,
        duration: 1,
    },

    death: {
        start: 0,
        end: 10,
        duration: 1,

    },
    idle: {
        start: 11,
        end: 25,
        duration: 1,

    },
    move: {
        start: 26,
        end: 37,
        duration: 1.2,
    },

    sfx: {
    },

}

/*
enemylist["Ergate Leader"] = {
    name: "Ergate Leader",
    id:27,
    hp: 3800,
    atk: 0,
    def: 260,
    res: 45,
    atkinterval: 1,
    speed: 1.2 * 0.49,
    blockcount: 99,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.1,
    tooltip: "More durable than Ergates.\nCannot be blocked.\nMust be eliminated quickly.",
    description: "An engineer that specializes in sabotage,\nalmost never seen wielding weapons.\nThough unarmed, they utilize their agility and cunning to slip\nthrough defenses in order to sabotage\nmechanical and electrical equipment.\n\n" +
        "These Ergates with better survivability cannot be blocked by ground units,\nmaking them able to slip by unnoticed through defense lines.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/ergate-leader-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 999,
        end: 999,
        contact: 999,
        duration: 1,
    },

    death: {
        start: 0,
        end: 10,
        duration: 1,

    },
    idle: {
        start: 11,
        end: 25,
        duration: 1,

    },
    move: {
        start: 26,
        end: 37,
        duration: 1.2,
    },

    sfx: {
    },

}
*/
enemylist["Yeti Operative"] = {
    name: "Yeti Operative",
    id:53,
    hp: 4000,
    atk: 380,
    def: 120,
    res: 0,
    atkinterval: 2,
    speed: 1.1 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A basic Yeti Squadron\nmelee combatant,\ncapable of dealing increased\ndamage to Frozen units.",
    description:"A melee combatant of the Yeti Squadron hailing from the Northen tundras.\n\n"+
    "Relatively similar to basic Reunion Soldiers,\nYeti Operatives can deal 1.5x damage when attacking frozen targets.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/yeti-operative-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 14,
        contact: 6,
        duration: 1,
    },

    death: {
        start: 15,
        end: 28,
        duration: 1,

    },
    idle: {
        start: 29,
        end: 43,
        duration: 1,

    },
    move: {
        start: 44,
        end: 55,
        duration: 1.3,

    },


    sfx: {
        hit: {
            src: "swordsman-hit",
            volume: 0.1
        }
    },

    skill: {
        name: "frozenhit",
        triggertype: "on_start",
        skilltype: "yeti",
        target: "self",
        modifiers: {
            frozenmod: 0.5,
        },
        aura: false,
    },
}

enemylist["Yeti OperativeEX"] = {
    name: "Yeti OperativeEX",
    id:54,
    hp: 5200,
    atk: 400,
    def: 150,
    res: 0,
    atkinterval: 2,
    speed: 1.1 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A basic Yeti Squadron melee combatant,\ncapable of dealing \nincreased damage to Frozen units.",
    description:"A melee combatant of the Yeti Squadron hailing from the Northen tundras.\n\n"+
    "Relatively similar to basic Reunion Soldiers,\nYeti Operatives can deal 1.5x damage when attacking frozen targets.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/yeti-operative-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 14,
        contact: 6,
        duration: 1,
    },

    death: {
        start: 15,
        end: 28,
        duration: 1,

    },
    idle: {
        start: 29,
        end: 43,
        duration: 1,

    },
    move: {
        start: 44,
        end: 55,
        duration: 1.5,

    },

    sfx: {
        hit: {
            src: "swordsman-hit",
            volume: 0.1
        }
    },

    skill: {
        name: "frozenhit",
        triggertype: "on_start",
        skilltype: "yeti",
        target: "self",
        modifiers: {
            frozenmod: 0.5,
        },
        aura: false,
    },
}

enemylist['Frostfang'] = {
    name: "Frostfang",
    id:55,
    hp: 3300,
    atk: 370,
    def: 0,
    res: 30,
    atkinterval: 1.4,
    speed: 1.9 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    targets: 1,

    tooltip: "An agile creature controlled \nby the Yeti Squadron\ncapable of dealing \nincreased damage to Frozen units",
    description:"A hound used by the Yeti Squadron that \nadapted to the weather of the Northern tundras.\n\n"+
    "Relatively similar to Hounds,\nFrostfangs can deal 1.5x damage when attacking frozen targets.",

    enemytype: "normal",

    spritesheet: "images/sprites/frostfang-sheet.webp",

    hasskill: true,
    atkanim: {
        start: 0,
        end: 14,
        contact: 8,
        duration: 1,
    },

    death: {
        start: 15,
        end: 29,
        duration: 1,

    },

    idle: {
        start: 30,
        end: 44,
        duration: 1,

    },

    move: {
        start: 45,
        end: 61,
        duration: 1.2,

    },

    sfx: {
        atk: {
            src: "dog-atk",
            volume: 0.05
        }
    },

    skill: {
        name: "frozenhit",
        triggertype: "on_start",
        skilltype: "yeti",
        target: "self",
        modifiers: {
            frozenmod: 0.5,
        },
        aura: false,
    }

}

enemylist['Razorfrost'] = {
    name: "Razorfrost",
    id:56,
    hp: 4650,
    atk: 430,
    def: 0,
    res: 30,
    atkinterval: 1.4,
    speed: 1.9 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    targets: 1,

    tooltip: "A dangerous creature controlled \nby the Yeti Squadron\ncapable of dealing \nincreased damage to Frozen units",
    description:"A stronger hound used by the Yeti Squadron that \nadapted to the weather of the Northern tundras.\n\n"+
    "Stronger than frostfangs,\nRazorfrosts can deal 1.5x damage when attacking frozen targets.",


    enemytype: "normal",

    spritesheet: "images/sprites/razorfrost-sheet.webp",

    hasskill: true,
    atkanim: {
        start: 0,
        end: 14,
        contact: 8,
        duration: 1,
    },

    death: {
        start: 15,
        end: 29,
        duration: 1,

    },

    idle: {
        start: 30,
        end: 44,
        duration: 1,

    },

    move: {
        start: 45,
        end: 60,
        duration: 1.2,

    },

    sfx: {
        atk: {
            src: "dog-atk",
            volume: 0.05
        }
    },

    skill: {
        name: "frozenhit",
        triggertype: "on_start",
        skilltype: "yeti",
        target: "self",
        modifiers: {
            frozenmod: 0.5,
        },
        aura: false,
    }

}

enemylist["Yeti Sniper"] = {
    name: "Yeti Sniper",
    id:57,
    hp: 3000,
    atk: 320,
    def: 80,
    res: 0,
    atkinterval: 2.4,
    speed: 0.9 * 0.49,
    blockcount: 1,
    type: "g",
    range: 1.9,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A basic Yeti ranged combatant,\ncapable of dealing \nincreased damage to Frozen units",
    description:"A ranged combatant of the Yeti Squadron hailing from the Northen tundras.\n\n"+
    "Relatively similar to Crossbowmen,\nYeti Snipers can deal 1.5x damage when attacking frozen targets.",
    targets: 1,
    bullet: { size: { height: 1, depth: 6, width: 0.5 }, arc: false, speed: 5, color: new BABYLON.Color3(0.4, 0.4, 0.4) },

    enemytype: "normal",

    spritesheet: "images/sprites/yeti-sniper-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 14,
        contact: 6,
        duration: 1,
    },

    death: {
        start: 15,
        end: 29,
        duration: 1,

    },

    idle: {
        start: 30,
        end: 44,
        duration: 1,

    },

    move: {
        start: 45,
        end: 60,
        duration: 1.2,

    },


    sfx: {
        atk: {
            src: "crossbow-atk",
            volume: 0.1
        }
    },

    skill: {
        name: "frozenhit",
        triggertype: "on_start",
        skilltype: "yeti",
        target: "self",
        modifiers: {
            frozenmod: 0.5,
        },
        aura: false,
    }
}

enemylist["Yeti Sniper Leader"] = {
    name: "Yeti Sniper Leader",
    id:58,
    hp: 4000,
    atk: 380,
    def: 100,
    res: 0,
    atkinterval: 2.4,
    speed: 0.9 * 0.49,
    blockcount: 1,
    type: "g",
    range: 1.9,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "An elite Yeti ranged combatant,\ncapable of dealing \nincreased damage to Frozen units",
    description:"A stronger ranged combatant of the \nYeti Squadron hailing from the Northen tundras.\n\n"+
    "Stronger than normal snipers,\nYeti Sniper Leaders can deal 1.5x damage when attacking frozen targets.",
    targets: 1,
    bullet: { size: { height: 1, depth: 6, width: 0.5 }, arc: false, speed: 5, color: new BABYLON.Color3(0.4, 0.4, 0.4) },

    enemytype: "normal",

    spritesheet: "images/sprites/yeti-sniper-leader-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 14,
        contact: 6,
        duration: 1,
    },

    death: {
        start: 15,
        end: 29,
        duration: 1,

    },

    idle: {
        start: 30,
        end: 44,
        duration: 1,

    },

    move: {
        start: 45,
        end: 60,
        duration: 1.2,

    },


    sfx: {
        atk: {
            src: "crossbow-atk",
            volume: 0.1
        }
    },

    skill: {
        name: "frozenhit",
        triggertype: "on_start",
        skilltype: "yeti",
        target: "self",
        modifiers: {
            frozenmod: 0.5,
        },
        aura: false,
    }
}

enemylist["Butcher"] = {
    name: "Butcher",
    id:9,
    hp: 9000,
    atk: 850,
    def: 230,
    res: 30,
    atkinterval: 3.5,
    speed: (0.5 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "An enemy with relatively\nhigh ATK and defense.",
    description:"An enemy of unknown identity who attacks using a massive blunt object.\nThey possess relatively high defense.\n\n"+
    "A Reunion fighter weilding a heavy axe.\nHe possesses relatively high stats and can easily destroy low DEF units.\nPlease use high defense units to deal with this threat!",

    targets: 1,


    spritesheet: "images/sprites/butcher-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 28,
        contact: 14,
        duration: 1,
    },

    death: {
        start: 29,
        end: 43,
        duration: 1,

    },
    idle: {
        start: 44,
        end: 58,
        duration: 1,

    },

    move: {
        start: 59,
        end: 74,
        duration: 1.2,

    },
    sfx: {
        atk: {
            src: "bloodboil-atk",
            volume: 0.1
        },
        hit: {
            src: "bloodboil-hit",
            volume: 0.1
        }
    }
}

enemylist["Veteran Butcher"] = {
    name: "Veteran Butcher",
    id:10,
    hp: 14000,
    atk: 950,
    def: 270,
    res: 30,
    atkinterval: 3.5,
    speed: (0.5 + 0.2) * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "A more dangerous Butcher with\nhigh ATK and defense.",
    targets: 1,
    description:"An enemy of unknown identity who attacks using a massive blunt object.\nThis variant is even more dangerous than a normal Butcher,\nand has relatively high defense.",
    enemytype: "normal",

    spritesheet: "images/sprites/veteran-butcher-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 28,
        contact: 14,
        duration: 1,
    },

    death: {
        start: 29,
        end: 43,
        duration: 1,

    },
    idle: {
        start: 44,
        end: 58,
        duration: 1,

    },

    move: {
        start: 59,
        end: 74,
        duration: 1.2,

    },
    sfx: {
        atk: {
            src: "bloodboil-atk",
            volume: 0.1
        },
        hit: {
            src: "bloodboil-hit",
            volume: 0.1
        }
    }
}

enemylist["Big Bob"] = {
    name: "Big Bob",
    id:5001,
    hp: 25000,
    atk: 1900,
    def: 800,
    res: 30,
    atkinterval: 6,
    speed: 0.5 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 2,
    dmgtype: "physical",
    size: 1.1,
    tooltip: "One of Reunion's leaders who\nattacks with an electric chainsaw.\nHe has very high HP, ATK, and DEF.",
    description: "One of Reunion's squad leaders who attacks with an electric chainsaw.\nHe has high HP, ATK, and DEF.\n\n"
    +"While having no special abilities at all,\nBig Bob has sheer HP and DEF, decent RES,\nand massive ATK that allows him to severely damage \nor outright knock out most Units with a single attack.\nHowever, he moves and attacks very slowly \nmaking him more of a slow-but-powerful enemy.\nIt is recommended to slow him down and\nuse Magic to dispatch him from a distance.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/big-bob-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 27,
        contact: 12,
        duration: 1,
    },

    death: {
        start: 28,
        end: 42,
        duration: 1,

    },
    idle: {
        start: 43,
        end: 57,
        duration: 1,

    },

    move: {
        start: 58,
        end: 72,
        duration: 1.6,

    },
    sfx: {
        atk: {
            src: "bob-atk",
            volume: 0.1
        },
        hit: {
            src: "bob-hit",
            volume: 0.1
        }
    }
}

enemylist["Caster"] = {
    name: "Caster",
    id:16,
    hp: 4000,
    atk: 400,
    def: 250,
    res: 50,
    atkinterval: 4,
    speed: 0.8 * 0.49,
    blockcount: 1,
    type: "g",
    range: 2,
    hploss: 1,
    dmgtype: "magic",
    size: 1,
    tooltip: "A basic caster,\ncapable of attacking using\nlong-ranged Magic.",
    description:"A shaman that joined Reunion ranks\nand is capable of using long-range magic attacks.\n\n"
    +"Reunion casters can target both Melee and Ranged units\nwith ranged attacks that inflict Magic damage thus ignoring the target's DEF entirely.\nWith fairly balanced stats and decent DEF,\nthey should not be underestimated.",

    targets: 1,
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc: false, speed: 4, color: new BABYLON.Color3(0.69, 0.21, 0.67) },

    enemytype: "normal",

    spritesheet: "images/sprites/caster-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 17,
        contact: 11,
        duration: 1,
    },

    death: {
        start: 18,
        end: 32,
        duration: 1,

    },

    idle: {
        start: 33,
        end: 47,
        duration: 1,

    },

    move: {
        start: 48,
        end: 68,
        duration: 1.1,

    },

    sfx: {
        atk: {
            src: "caster-atk",
            volume: 0.1
        },
        hit: {
            src: "caster-hit",
            volume: 0.1
        }
    }
}

enemylist["Caster Leader"] = {
    name: "Caster Leader",
    id:17,
    hp: 6000,
    atk: 450,
    def: 300,
    res: 50,
    atkinterval: 4,
    speed: 0.8 * 0.49,
    blockcount: 1,
    type: "g",
    range: 2.4,
    hploss: 1,
    dmgtype: "magic",
    size: 1,
    tooltip: "A more dangerous caster,\ncapable of attacking\n2 targets at once with\nlong-ranged Magic.",
    description:"A high-rank shaman that joined Reunion ranks.\nThanks to his years of experience and better equipment,\nhe can target 2 units at once with long-range magic attacks.\n\n"
    +"Reunion caster leaders are a step up from Reunion casters in terms of stats,\nnoticeably they can now target 2 units at once with magic attacks\nwhich can allow them to easily knock out unprepared defense lines.",

    targets: 2,
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc: false, speed: 4, color: new BABYLON.Color3(0.69, 0.21, 0.67) },

    enemytype: "normal",

    spritesheet: "images/sprites/caster-leader-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 17,
        contact: 11,
        duration: 1,
    },

    death: {
        start: 18,
        end: 32,
        duration: 1,

    },

    idle: {
        start: 33,
        end: 47,
        duration: 1,

    },

    move: {
        start: 48,
        end: 67,
        duration: 1.1,

    },

    sfx: {
        atk: {
            src: "caster-atk",
            volume: 0.1
        },
        hit: {
            src: "caster-hit",
            volume: 0.1
        }
    }
}
enemylist["Caster LeaderEX"] = {
    name: "Caster LeaderEX",
    id:17.1,
    hp: 13000,
    atk: 600,
    def: 400,
    res: 50,
    atkinterval: 4,
    speed: 0.8 * 0.49,
    blockcount: 1,
    type: "g",
    range: 2.4,
    hploss: 1,
    dmgtype: "magic",
    size: 1,
    tooltip: "A more dangerous caster,\ncapable of attacking\n2 targets at once with\nlong-ranged Magic.",
    description:"A high-rank shaman that joined Reunion ranks.\nThanks to his years of experience and better equipment,\nhe can target 2 units at once with long-range magic attacks.\n\n"
    +"Reunion caster leaders are a step up from Reunion casters in terms of stats,\nnoticeably they can now target 2 units at once with magic attacks\nwhich can allow them to easily knock out unprepared defense lines.",

    targets: 2,
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc: false, speed: 4, color: new BABYLON.Color3(0.69, 0.21, 0.67) },

    enemytype: "normal",

    spritesheet: "images/sprites/caster-leader-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 17,
        contact: 11,
        duration: 1,
    },

    death: {
        start: 18,
        end: 32,
        duration: 1,

    },

    idle: {
        start: 33,
        end: 47,
        duration: 1,

    },

    move: {
        start: 48,
        end: 67,
        duration: 1.1,

    },

    sfx: {
        atk: {
            src: "caster-atk",
            volume: 0.1
        },
        hit: {
            src: "caster-hit",
            volume: 0.1
        }
    }
}


enemylist["Yeti Caster"] = {
    name: "Yeti Caster",
    id:59,
    hp: 5000,
    atk: 320,
    def: 200,
    res: 50,
    atkinterval: 4.5,
    speed: 0.8 * 0.49,
    blockcount: 1,
    type: "g",
    range: 2.2,
    hploss: 1,
    dmgtype: "magic",
    size: 1,
    tooltip: "A Yeti Squadron Caster, \ncapable of inflicting Cold upon\ntheir targets after 3 attacks.",
    description:"A caster of the Yeti Squadron hailing from the Northen tundras.\n\n"+
    "Relatively similar to Casters,\nYeti Casters differenciate themselves by their mastery of Ice-based Magic.\nEvery 3 attacks, Yeti Casters can fire a special shot \nthat will inflict Cold to their target\n(attack speed reduced by 30%).\nIf the target was already inflicted with Cold,\nthey will get Frozen instead (cannot move or attack)",
    targets: 1,
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc: false, speed: 4, color: new BABYLON.Color3(0.88, 0.96, 1) },

    enemytype: "normal",

    spritesheet: "images/sprites/yeti-caster-sheet.webp",

    hasskill: false,
    hasspatk: true,

    atkanim: {
        start: 0,
        end: 16,
        contact: 10,
        duration: 1,
    },

    death: {
        start: 17,
        end: 31,
        duration: 1,

    },

    idle: {
        start: 32,
        end: 46,
        duration: 1,

    },

    move: {
        start: 47,
        end: 65,
        duration: 1.1,

    },
    spatk: {
        start: 0,
        end: 16,
        contact: 10,
        duration: 1,
    },


    sfx: {
        atk: {
            src: "yeticaster-atk",
            volume: 0.1
        },
        hit: {
            src: "yeticaster-hit",
            volume: 0.1
        },

        spatk: {
            src: "yeticaster-atk",
            volume: 0.1,
        },
        sphit: {
            src: "yeticaster-hit",
            volume: 0.1
        }
    },

    spattack: {
        name: "freeze",
        target: "allblocking",
        chargetype: "attack",
        range: 2.2,
        initialsp: 0,
        sp: 3,
        dmgmodifier: 1,
        effectcontact: 10,
        skillbullet: true,
        applyeffects: {
            modifiers: {
                cold: 10
            },
            duration: 1,
        },
    }
}

enemylist["Yeti Caster Leader"] = {
    name: "Yeti Caster Leader",
    id:60,
    hp: 8000,
    atk: 400,
    def: 250,
    res: 50,
    atkinterval: 4,
    speed: 0.8 * 0.49,
    blockcount: 1,
    type: "g",
    range: 2.2,
    hploss: 1,
    dmgtype: "magic",
    size: 1,
    tooltip: "An elite Yeti Squadron Caster, \ncapable of inflicting Cold upon\ntheir targets after 3 attacks.",
    description:"A caster of the Yeti Squadron hailing from the Northen tundras.\n\n"+
    "Yeti Caster Leaders are a step up from Yeti Casters in terms of stats.\nEvery 3 attacks, Yeti Caster Leaders can fire a special shot that \nwill inflict Cold to their target\n(attack speed reduced by 30%).\nIf the target was already inflicted with Cold,\nthey will get Frozen instead (cannot move or attack)",
    
    targets: 1,
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc: false, speed: 4, color: new BABYLON.Color3(0.88, 0.96, 1) },

    enemytype: "normal",

    spritesheet: "images/sprites/yeti-caster-leader-sheet.webp",

    hasskill: false,
    hasspatk: true,

    atkanim: {
        start: 0,
        end: 16,
        contact: 10,
        duration: 1,
    },

    death: {
        start: 17,
        end: 31,
        duration: 1,

    },

    idle: {
        start: 32,
        end: 46,
        duration: 1,

    },

    move: {
        start: 47,
        end: 66,
        duration: 1.1,

    },
    spatk: {
        start: 0,
        end: 16,
        contact: 10,
        duration: 1,
    },


    sfx: {
        atk: {
            src: "yeticaster-atk",
            volume: 0.1
        },
        hit: {
            src: "yeticaster-hit",
            volume: 0.1
        },

        spatk: {
            src: "yeticaster-atk",
            volume: 0.1,
        },
        sphit: {
            src: "yeticaster-hit",
            volume: 0.1
        }
    },

    spattack: {
        name: "freeze",
        target: "allblocking",
        chargetype: "attack",
        range: 2.2,
        initialsp: 0,
        sp: 3,
        dmgmodifier: 1,
        effectcontact: 10,
        skillbullet: true,
        applyeffects: {
            modifiers: {
                cold: 10
            },
            duration: 1,
        },
    }
}

enemylist['Explosive Spider'] = {
    name: "Explosive Spider",
    id:21,
    hp: 2500,
    atk: 260,
    def: 0,
    res: 0,
    atkinterval: 1.7,
    speed: 1 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 0.95,
    targets: 1,

    tooltip: "A dangerous creature.\n Upon death, they will explode,\ninflicting damage to nearby Ally units.",
    description:"A dangerous unstable creature,\ntheir body is filled with dangerous radiation and lava.\nThey explode once defeated.\n\n"+
    "A seemingly harmless creature,\nthe danger lies on their ability to explode once they die\nprovoking a blast that will deal 4x of their own ATK to any nearby Unit,\nmaking it important to not let them explode near the more fragile units.",  

    enemytype: "normal",

    spritesheet: "images/sprites/explosive-spider-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 22,
        contact: 9,
        duration: 1,
    },

    death: {
        start: 23,
        end: 37,
        duration: 1,

    },

    idle: {
        start: 38,
        end: 53,
        duration: 1,

    },

    move: {
        start: 54,
        end: 68,
        duration: 0.5,

    },

    sfx: {
        hit: {
            src: "slug-hit",
            volume: 0.05
        },
        skillbomb: {
            src: "icespider-die",
            volume: 0.05
        }
    },

    skill: {
        name: "spiderhit",
        triggertype: "on_death",
        skilltype: "skillbomb",
        target: "self",
        modifiers: {
            skillbomb: {
                targets: 99,
                range: 1,
                dmg: 4,
            }
        },
        aura: false,
    }
}

enemylist['Glacial Spider'] = {
    name: "Glacial Spider",
    id:61,
    hp: 3250,
    atk: 300,
    def: 0,
    res: 0,
    atkinterval: 1.75,
    speed: 1 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 0.95,
    targets: 1,

    tooltip: "A creature native \nto colder environments.\n Upon death, they will explode, \ninflicting Cold on nearby Ally units.",
    description:"A dangerous unstable creature hailing from the Northern tundras,\ntheir body is filled with dangerous radiation and ice.\nThey explode once defeated.\n\n"+
    "Similar to Exploding Spiders,\nthey share the same ability of exploding once defeated.\nHowever, their blast damage is much weaker (only 2x of their own ATK)\nwhich is offset by their ability to inflict Cold\n(attack speed reduced by 30%) to all Units caught in the explosion.\nIf the targets were already inflicted with Cold,\nthey will get Frozen instead (cannot move or attack)",  


    enemytype: "normal",

    spritesheet: "images/sprites/glacial-spider-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 22,
        contact: 9,
        duration: 1,
    },

    death: {
        start: 23,
        end: 37,
        duration: 1,

    },

    idle: {
        start: 38,
        end: 53,
        duration: 1,

    },

    move: {
        start: 54,
        end: 68,
        duration: 0.5,

    },

    sfx: {
        hit: {
            src: "slug-hit",
            volume: 0.05
        },
        skillbomb: {
            src: "icespider-die",
            volume: 0.05
        }
    },

    skill: {
        name: "frozenhit",
        triggertype: "on_death",
        skilltype: "skillbomb",
        target: "self",
        modifiers: {
            skillbomb: {
                targets: 99,
                range: 1,
                dmg: 2,
                cold: 10,
            }
        },
        aura: false,
    }
}

enemylist['Glacial Spider α'] = {
    name: "Glacial Spider α",
    id:62,
    hp: 4850,
    atk: 370,
    def: 0,
    res: 0,
    atkinterval: 1.75,
    speed: 1 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 0.95,
    targets: 1,

    tooltip: "A more threatening creature \nnative to colder environments.\n Upon death, they will explode, \ninflicting Cold on nearby Ally units.",
    description:"A stronger unstable creature hailing from the Northern tundras,\ntheir body is filled with dangerous radiation and ice.\nThey explode once defeated.\n\n"+
    "Glacial Spiders α are a direct upgrade to normal Glacial Spiders,\nsharing the same exploding properties.",


    enemytype: "normal",

    spritesheet: "images/sprites/glacial-spider-alpha-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 22,
        contact: 9,
        duration: 1,
    },

    death: {
        start: 23,
        end: 37,
        duration: 1,

    },

    idle: {
        start: 38,
        end: 53,
        duration: 1,

    },

    move: {
        start: 54,
        end: 68,
        duration: 0.5,

    },

    sfx: {
        hit: {
            src: "slug-hit",
            volume: 0.05
        },
        skillbomb: {
            src: "icespider-die",
            volume: 0.05
        }
    },

    skill: {
        name: "frozenhit",
        triggertype: "on_death",
        skilltype: "skillbomb",
        target: "self",
        modifiers: {
            skillbomb: {
                targets: 99,
                range: 1,
                dmg: 2,
                cold: 10,
            }
        },
        aura: false,
    }

}

enemylist["Yeti Icecleaver"] = {
    name: "Yeti Icecleaver",
    id:63,
    hp: 16000,
    atk: 830,
    def: 500,
    res: 20,
    atkinterval: 3,
    speed: 0.7 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.1,
    tooltip: "A special Yeti Squadron\nmelee combatant,\ncapable of dealing massive\ndamage to Frozen units.",
    description:"An elite melee combatant of the Yeti Squadron\nhailing from the Northwestern tundras.\nGrim reapers on the battlefield,\nthey wield long katanas that can easily ravage frozen Operators\nhence the nickname they've been given, \"Ice Cleaver\".\n\n"
    +"Yeti Icecleavers are the strongest of Yeti Squadron enemies\nwith high HP, ATK, and good DEF that eclipses their comrades,\nmaking them a force to be reckoned with.\nYeti Icecleavers will deal 2.5x damage against frozen units,\nwhich can easily severely damage or knock out\nany Frozen unit standing on their path. ",

    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/yeti-icecleaver-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 43,
        contact: 16,
        duration: 1,
    },

    death: {
        start: 44,
        end: 58,
        duration: 1,

    },
    idle: {
        start: 59,
        end: 88,
        duration: 1,

    },
    move: {
        start: 89,
        end: 106,
        duration: 1.2,

    },

    sfx: {
        hit: {
            src: "knightshield-hit",
            volume: 0.1
        }
    },

    skill: {
        name: "frozenhit",
        triggertype: "on_start",
        skilltype: "yeti",
        target: "self",
        modifiers: {
            frozenmod: 1.5,
        },
        aura: false,
    },
}

enemylist["Yeti Icecleaver Leader"] = {
    name: "Yeti Icecleaver Leader",
    id:64,
    hp: 25000,
    atk: 1100,
    def: 600,
    res: 20,
    atkinterval: 3,
    speed: 0.7 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.1,
    tooltip: "A special elite Yeti Squadron\nmelee combatant,\ncapable of dealing catastrophic\ndamage to Frozen units.",
    description:"An elite melee combatant of the Yeti Squadron\nhailing from the Northwestern tundras.\nExperienced executioners on the battlefield,\nthey wield long katanas that can easily ravage frozen Operators\nand their nickname, \"Ice Cleaver,\"references their devastating blows\nthat seem strong enough to split glaciers..\n\n"
    +"Yeti Icecleaver Leaders are a massive step up\nfrom Yeti Icecleavers in terms of stats.\nOn top of that, the Leader variant will deal 3x damage against frozen units,\nwhich paired with their much higher ATK can pretty much knock out any Unit!",

    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/yeti-icecleaver-leader-sheet.webp",

    hasskill: true,

    atkanim: {
        start: 0,
        end: 43,
        contact: 16,
        duration: 1,
    },

    death: {
        start: 44,
        end: 58,
        duration: 1,

    },
    idle: {
        start: 59,
        end: 88,
        duration: 1,

    },
    move: {
        start: 89,
        end: 106,
        duration: 1.2,

    },

    sfx: {
        hit: {
            src: "knightshield-hit",
            volume: 0.1
        }
    },

    skill: {
        name: "frozenhit",
        triggertype: "on_start",
        skilltype: "yeti",
        target: "self",
        modifiers: {
            frozenmod: 2,
        },
        aura: false,
    },
}

enemylist["Light-Armored Soldier"] = {
    name: "Light-Armored Soldier",
    id:8,
    hp: 3700,
    atk: 300,
    def: 500,
    res: 0,
    atkinterval: 2,
    speed: 1 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A soldier with a light shield\nthat has fairly high defense.",
    description: "A Reunion melee soldier equipped with a stolen light shield.\n\n"
    + "A soldier that boosts fairly high DEF thanks to their improved gear,\nalbeit lacking completely on any Magic defense.\nIt is recommended to use Magic to deal with them.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/light-armored-soldier-leader-sheet.webp",

    hasskill: false,

    atkanim: {
        start: 0,
        end: 14,
        contact: 6,
        duration: 1.3,
    },

    death: {
        start: 15,
        end: 29,
        duration: 1,

    },
    idle: {
        start: 30,
        end: 59,
        duration: 1,

    },

    move: {
        start: 60,
        end: 83,
        duration: 1.2,

    },

    sfx: {
        atk: {
            src: "soldier-atk",
            volume: 0.1
        },
        hit: {
            src: "soldier-hit",
            volume: 0.1
        }
    }
}


enemylist["Oneiros"] = {
    name: "Oneiros",
    id:65,
    hp: 4000,
    atk: 500,
    def: 180,
    res: 0,
    atkinterval: 999,
    speed: 0.6 * 0.49,
    blockcount: 99,
    type: "r",
    range: 2.5,
    hploss: 1,
    dmgtype: "magic",
    size: 0.95,
    tooltip: "Carries a special warhead\ncapable of dealing Magic damage\nin a radius and inflicting \nCold on affected units.",
    description: "An unmanned, slow-flying enemy drone equipped with a special warhead\nreleased upon approaching Units\nthat inflicts Magic damage and a freezing effect in an area.\n\n"+
    "Oneiros are special drones employed by the Yeti Squadron\n that differenciate from Monsters in their ability\nto fire a special warhead that will explode upon hitting its target\ndealing damage to them and all other ally units around.\nThe blast will not only deal magic damage,\nbut will also inflict Cold (attack speed reduced by 30%)\nto all Units caught in the explosion.\nIf the targets were already inflicted with Cold,\nthey will get Frozen instead (cannot move or attack).\nThe Oneiros can launch the warhead only once.",
    targets: 1,
    splashradius: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/oneiros-sheet.webp",
    hasskill: true,
    bullet: { size: { height: 3, depth: 5, width: 3 }, arc: false, speed: 20, color: new BABYLON.Color3(0.09, 0.73, 0.94) },


    atkanim: {
        start: 0,
        end: 14,
        contact: 5,
        duration: 1.3,
    },

    death: {
        start: 15,
        end: 28,
        duration: 1,

    },
    idle: {
        start: 29,
        end: 58,
        duration: 1,

    },

    move: {
        start: 59,
        end: 88,
        duration: 1,

    },
    skill: {
        name: "warhead",
        triggertype: "on_attack",
        skilltype: "warhead",
        target: "self",
        modifiers: {

        },
        aura: false,
        idle: {
            start: 89,
            end: 118,
            duration: 1,

        },
        move: {
            start: 119,
            end: 148,
            duration: 1,

        },
    },

    sfx: {
        atk: {
            src: "oneiros-atk",
            volume: 0.1
        },
        hit: {
            src: "oneiros-hit",
            volume: 0.1
        }
    }
}

enemylist["Demolitionist"] = {
    name: "Demolitionist",
    id:25,
    hp: 15000,
    atk: 1700,
    def: 800,
    res: 0,
    atkinterval: 5,
    speed: 0.6 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "Elite enemy whose \nattacks cause explosions,\ndealing Splash damage to units\non the 4 tiles\nsurrounding the primary target.",
    description: "A high-level elite Reunion combatant who wears heavy-duty,\nexplosion-proof protective gear.\nTheir special Magic-powered hammers have massive destructive range,\nand must be dealt with cautiously.\n\n"
    +"Boosting extremely high ATK and decent DEF and HP.\nDemolitionists are slow moving enemies that once blocked,\nwill smash their hammer on the target causing an explosion\nthat will also hit all surrounding units around the primary target for 50% of damage.\nIt is thus recommended to not keep\nunits tightly close to each other when facing them.",
    targets: 1,
    splash: 1,
    splashdmg: 0.5,

    enemytype: "normal",

    spritesheet: "images/sprites/demolitionist-sheet.webp",
    hasskill: false,


   atkanim: {
        start: 0,
        end: 37,
        contact: 24,
        duration: 1.1,
    },

    death: {
        start: 39,
        end: 51,
        duration: 1,

    },
    idle: {
        start: 52,
        end: 81,
        duration: 1,

    },
    move: {
        start: 82,
        end: 97,
        duration: 1.5,

    },


    sfx: {
        atk: {
            src: "demolitionist-atk",
            volume: 0.1
        },
        hit: {
            src: "demolitionist-hit",
            volume: 0.1
        }
    },

}

enemylist["Demolitionist Leader"] = {
    name: "Demolitionist Leader",
    id:26,
    hp: 25000,
    atk: 2200,
    def: 1000,
    res: 0,
    atkinterval: 5,
    speed: 0.6 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "Elite enemy whose \nattacks cause explosions,\ndealing Splash damage to units\non the 4 tiles\nsurrounding the primary target.",
    description: "A high-level elite Reunion combatant who wears heavy-duty,\nexplosion-proof protective gear.\nTheir special Magic-powered hammers have massive destructive range,\nand must be dealt with cautiously.\n\n"
    +"Boosting even better stats than Demolitionists.\nDemolitionist Leaders are a direct upgrade to Demolitionists \nand share the same property of\ndealing 50% of their own damage to any Unit caught in the blast\naround the primary target of their hammer.",
   
    targets: 1,
    splash: 1,
    splashdmg: 0.5,

    enemytype: "normal",

    spritesheet: "images/sprites/demolitionist-leader-sheet.webp",
    hasskill: false,


    atkanim: {
        start: 0,
        end: 38,
        contact: 24,
        duration: 1.1,
    },

    death: {
        start: 39,
        end: 53,
        duration: 1,

    },
    idle: {
        start: 54,
        end: 83,
        duration: 1,

    },
    move: {
        start: 84,
        end: 99,
        duration: 1.5,

    },

    sfx: {
        atk: {
            src: "demolitionist-atk",
            volume: 0.1
        },
        hit: {
            src: "demolitionist-hit",
            volume: 0.1
        }
    },
}

enemylist["Heavy Defender"] = {
    name: "Heavy Defender",
    id:13,
    hp: 10000,
    atk: 600,
    def: 1000,
    res: 0,
    atkinterval: 2.6,
    speed: 0.75 * 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "Has very high defense and \nis difficult to take down.",
    description: "One of Reunion's melee soldiers.\nEquipped with a full set of heavy armor,\nthey have ample combat experience and are extremely hard to defeat.\nAs they may have had formal training, proceed with caution.\n\n"+
    "Heavy Defenders are elite Reunion enemies with\nfairly decent HP, ATK and considerably improved DEF.\nJust like Light-Armored Soldiers they lack any RES,\nit is recommended to dispatch them with Magic while slowing their advance.",
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/heavy-defender-leader-sheet.webp",
    hasskill: false,


    atkanim: {
        start: 0,
        end: 13,
        contact: 7,
        duration: 1.3,
    },

    death: {
        start: 14,
        end: 28,
        duration: 1,

    },
    idle: {
        start: 29,
        end: 44,
        duration: 1,

    },
    move: {
        start: 45,
        end: 62,
        duration: 1.5,

    },

    sfx: {
        hit: {
            src: "shieldguard-hit",
            volume: 0.1
        }
    },

}

enemylist["Frostnova"] = {
    name: "Frostnova",
    id:5009,
    hp: 30000,
    atk: 440,
    def: 380,
    res: 50,
    atkinterval: 3.7,
    speed: 0.5 * 0.49,
    blockcount: 1,
    type: "g",
    range: 2,
    hploss: 2,
    dmgtype: "magic",
    size: 1,
    tooltip: "Every attack inflicts cold.\n Deals increased damage\n against frozen allies.\nPeriodically releases an\nice nova damaging \nall allies in range.",
    description: "One of Reunion squad leaders and leader of the Yeti Squadron,\nher Cold stare might be just as deadly as her Cold magic attacks.\n\n" +
    "Frostnova is a formidable opponent that can launch long range Magic attacks,\nand comes with different properties:\n" +
    "All Frostnova attacks will inflict Cold (or Frozen if already Cold)\nto the target hit for 5 seconds.\nAdditionally, her attacks deal 2x damage to Frozen units,\nmaking her able to lock units into a Frozen state\nand melt them down if no healing is provided."
    + "\nFrostnova comes with a special attack: every 10.5 seconds, Frostnova releases\nan Ice Nova to all targets around her dealing 1.5x of her own ATK.\n"
    + "After being knocked out once,\nshe will revive herself and becomes invincible for 20 seconds\n(indicated by a yellow aura around her)\nduring which she can't be targeted.\n"
    +"and activates all inactive Ice Altars on the field\n(placed on previously empty black boxes on the map)\n"
    + "After reviving, Frostnova will gain a 50% increase to her ATK,\nher Ice Nova will also be improved,\nbeing able to target ally units from\na higher distance at the cost of a higher wind up time.\n",
   
    revive: true,
    revivetimer: 0,
    revivemax: 0,
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/frostnova-sheet.webp",
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc: false, speed: 4, color: new BABYLON.Color3(0.88, 0.96, 1) },

    hasskill: true,
    hasspatk: true,

    atkanim: {
        start: 0,
        end: 23,
        contact: 15,
        duration: 1.1,
    },


    idle: {
        start: 24,
        end: 84,
        duration: 1,

    },
    move: {
        start: 85,
        end: 108,
        duration: 1.2,

    },
    spatk: {
        start: 8,
        end: 23,
        contact: 15,
        duration: 1.1,
    },

    sfx: {
        hit: {
            src: "frostnova-hit",
            volume: 0.1
        },
        sphit: {
            src: "mute",
            volume: 0.1
        },
        spatk: {
            src: "frostnova-spatk",
            volume: 0.3
        }
    },
    skill: {
        name: "frozenhit",
        triggertype: "on_start",
        skilltype: "yeti",
        target: "self",
        modifiers: {
            frozenmod: 1,
        },
        aura: false,
    },
    spattack: {
        name: "icenova",
        target: "allblocking",
        chargetype: "second",
        range: 2,
        initialsp: 0,
        sp: 10.5,
        targets: 99,
        effectcontact: 18,
        dmgmodifier: 1.5,
        skillbullet: true,
        applyeffects: {
            modifiers: {
                cold: 5
            },
            duration: 1,
        },
    }
}

enemylist["Frostnova2"] = {
    name: "Frostnova2",
    hp: 30000,
    atk: 660,
    def: 380,
    res: 50,
    atkinterval: 3.7,
    speed: 0.5 * 0.49,
    blockcount: 1,
    type: "g",
    range: 2,
    hploss: 2,
    dmgtype: "magic",
    size: 1,
    tooltip: "Every attack inflicts cold.\n Deals increased damage\n against frozen allies.\nPeriodically releases an\nice nova damaging \nall allies in range.",
    targets: 1,
    enemytype: "normal",

    spritesheet: "images/sprites/frostnova2-sheet.webp",
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc: false, speed: 4, color: new BABYLON.Color3(0.88, 0.96, 1) },

    hasskill: true,
    hasspatk: true,
    invincible: 20,

    atkanim: {
        start: 0,
        end: 23,
        contact: 15,
        duration: 1,
    },

    death: {
        start: 24,
        end: 102,
        duration: 1,
    },

    idle: {
        start: 103,
        end: 163,
        duration: 1,

    },
    move: {
        start: 164,
        end: 187,
        duration: 1.2,

    },
    start: {
        start: 188,
        end: 294,
        duration: 1.1,
    },
    spatk: {
        start: 295,
        end: 349,
        contact: 342,
        duration: 1.2,
    },

    sfx: {
        start: {
            src: "mute",
            volume: 0.3
        },
        start2: {
            src: "frostnova2-start1",
            volume: 0.3,
            sprite: (188 + 27),
            playing: false
        },
        start3: {
            src: "frostnova2-start2",
            volume: 0.3,
            sprite: 293,
            playing: false
        },

        hit: {
            src: "frostnova-hit",
            volume: 0.1
        },
        spatk: {
            src: "frostnova2-spatk",
            volume: 0.5
        },
        sphit: {
            src: "frostnova2-sphit",
            volume: 0.5
        }
    },
    skill: {
        name: "frozenhit",
        triggertype: "on_start",
        skilltype: "yeti",
        target: "self",
        modifiers: {
            frozenmod: 1,
        },
        aura: false,
    },
    spattack: {
        name: "icenova",
        target: "allblocking",
        chargetype: "second",
        range: 3,
        initialsp: 0,
        sp: 10.5,
        targets: 99,
        effectcontact: 342,
        dmgmodifier: 1.5,
        skillbullet: true,
        applyeffects: {
            modifiers: {
                cold: 5
            },
            duration: 1,
        },
    }
}

enemylist["FrostnovaEX"] = {
    name: "FrostnovaEX",
    id:5010,
    hp: 45000,
    atk: 530,
    def: 440,
    res: 50,
    atkinterval: 3.7,
    speed: 0.5 * 0.49,
    blockcount: 1,
    type: "g",
    range: 2,
    hploss: 2,
    dmgtype: "magic",
    size: 1,
    tooltip: "Every attack inflicts cold.\n Deals massive damage\n against frozen allies.\nPeriodically releases an\nice nova damaging \nall allies in range.",
    description: "One of Reunion squad leaders and leader of the Yeti Squadron,\nher Cold stare might be just as deadly as her Cold magic attacks.\n\n" +
    "Frostnova is a formidable opponent that can launch long range Magic attacks,\nand comes with different properties:\n" +
    "All Frostnova attacks will inflict Cold (or Frozen if already Cold)\nto the target hit for 5 seconds.\nAdditionally, her attacks deal 2x damage to Frozen units,\nmaking her able to lock units into a Frozen state\nand melt them down if no healing is provided."
    + "\nFrostnova comes with a special attack: every 10.5 seconds, Frostnova releases\nan Ice Nova to all targets around her dealing 1.5x of her own ATK.\n"
    + "After being knocked out once,\nshe will revive herself and becomes invincible for 25 seconds\n(indicated by a yellow aura around her)\nduring which she can't be targeted,\n"
    +"and activates all inactive Ice Altars on the field\n(placed on previously empty black boxes on the map)\n"
    + "After reviving, Frostnova will gain a 50% increase to her ATK,\nher Ice Nova will also be improved,\nbeing able to target ally units from\na higher distance at the cost of a higher wind up time.\n",
    revive: true,
    revivetimer: 0,
    revivemax: 0,
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/frostnova-sheet.webp",
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc: false, speed: 4, color: new BABYLON.Color3(0.88, 0.96, 1) },

    hasskill: true,
    hasspatk: true,

    atkanim: {
        start: 0,
        end: 23,
        contact: 15,
        duration: 1.1,
    },


    idle: {
        start: 24,
        end: 84,
        duration: 1,

    },
    move: {
        start: 85,
        end: 108,
        duration: 1.2,

    },
    spatk: {
        start: 8,
        end: 23,
        contact: 15,
        duration: 1.1,
    },

    sfx: {
        hit: {
            src: "frostnova-hit",
            volume: 0.1
        },
        sphit: {
            src: "mute",
            volume: 0.1
        },
        spatk: {
            src: "frostnova-spatk",
            volume: 0.3
        }
    },
    skill: {
        name: "frozenhit",
        triggertype: "on_start",
        skilltype: "yeti",
        target: "self",
        modifiers: {
            frozenmod: 1,
        },
        aura: false,
    },
    spattack: {
        name: "icenova",
        target: "allblocking",
        chargetype: "second",
        range: 2,
        initialsp: 0,
        sp: 10.5,
        targets: 99,
        effectcontact: 18,
        dmgmodifier: 1.5,
        skillbullet: true,
        applyeffects: {
            modifiers: {
                cold: 5
            },
            duration: 1,
        },
    }
}

enemylist["FrostnovaEX2"] = {
    name: "FrostnovaEX2",
    hp: 45000,
    atk: 795,
    def: 440,
    res: 50,
    atkinterval: 3.7,
    speed: 0.5 * 0.49,
    blockcount: 1,
    type: "g",
    range: 2,
    hploss: 2,
    dmgtype: "magic",
    size: 1,
    tooltip: "Every attack inflicts cold.\n Deals increased damage\n against frozen allies.\nPeriodically releases an\nice nova damaging \nall allies in range.",
    targets: 1,
    enemytype: "normal",

    spritesheet: "images/sprites/frostnova2-sheet.webp",
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc: false, speed: 4, color: new BABYLON.Color3(0.88, 0.96, 1) },


    hasskill: true,
    hasspatk: true,
    invincible: 25,

    atkanim: {
        start: 0,
        end: 23,
        contact: 15,
        duration: 1,
    },

    death: {
        start: 24,
        end: 102,
        duration: 1,
    },

    idle: {
        start: 103,
        end: 163,
        duration: 1,

    },
    move: {
        start: 164,
        end: 187,
        duration: 1.2,

    },
    start: {
        start: 188,
        end: 294,
        duration: 1.1,
    },
    spatk: {
        start: 295,
        end: 349,
        contact: 342,
        duration: 1.2,
    },

    sfx: {
        start: {
            src: "mute",
            volume: 0.3
        },
        start2: {
            src: "frostnova2-start1",
            volume: 0.3,
            sprite: (188 + 27),
            playing: false
        },
        start3: {
            src: "frostnova2-start2",
            volume: 0.3,
            sprite: 293,
            playing: false
        },

        hit: {
            src: "frostnova-hit",
            volume: 0.1
        },
        spatk: {
            src: "frostnova2-spatk",
            volume: 0.5
        },
        sphit: {
            src: "frostnova2-sphit",
            volume: 0.5
        }
    },
    skill: {
        name: "frozenhit",
        triggertype: "on_start",
        skilltype: "yeti",
        target: "self",
        modifiers: {
            frozenmod: 1,
        },
        aura: false,
    },
    spattack: {
        name: "icenova",
        target: "allblocking",
        chargetype: "second",
        range: 3,
        initialsp: 0,
        sp: 10.5,
        targets: 99,
        effectcontact: 342,
        dmgmodifier: 1.5,
        skillbullet: true,
        applyeffects: {
            modifiers: {
                cold: 5
            },
            duration: 1,
        },
    }
}

enemylist["Mortar Gunner"] = {
    name: "Mortar Gunner",
    id:15,
    hp: 5000,
    atk: 550,
    def: 150,
    res: 0,
    atkinterval: 4.5,
    speed: 0.8 * 0.49,
    blockcount: 1,
    type: "g",
    range: 7,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A dangerous foe \nthat can launch very \nlong-ranged AoE attacks.",
    description: "One of Reunion's special ranged soldiers.\nEquipped with stolen mortar launchers,\nthey launch explosive attacks from hard-to-defend positions,\nmaking them a significant threat to back-line units.\n\n"+
    "Mortar Gunners stand out from other ranged enemies\nfrom their ability to launch an explosive shot every hit that,\nnot only can be fired from very long distances,\nbut also hits all units caught in the blast around the primary target.\nIt is imperative to not keep units tightly close to the last\ndeployed unit to avoid getting destroyed by Mortar Gunners.",
    targets: 1,
    splashradius: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/mortar-gunner-sheet.webp",
    bullet: { size: { height: 3, depth: 3, width: 3 }, arc: true, speed: 10, color: new BABYLON.Color3(0.95, 0, 0) },

    hasskill: false,

    atkanim: {
        start: 0,
        end: 17,
        contact: 9,
        duration: 1,
    },

    death: {
        start: 18,
        end: 32,
        duration: 1,

    },

    idle: {
        start: 33,
        end: 47,
        duration: 1,

    },

    move: {
        start: 48,
        end: 62,
        duration: 1.2,

    },

    sfx: {
        hit: {
            src: "mortar-hit",
            volume: 0.1
        },
        atk: {
            src: "mortar-atk",
            volume: 0.1
        }
    },
}
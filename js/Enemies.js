let enemylist = {};


enemylist['Hound'] = {
    name: "Hound",
    hp: 3000,
    atk: 370,
    def: 0,
    res: 20,
    atkinterval: 1.4,
    speed: (1.7 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
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

enemylist['Crossbowman'] = {
    name: "Crossbowman",
    hp: 1900,
    atk: 310,
    def: 150,
    res: 0,
    atkinterval: 2.4,
    speed: (0.7 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 1.9,
    hploss: 1,
    dmgtype: "physical",
    bullet: { size: { height: 1, depth: 8, width: 0.5 }, arc:false, speed:5, color: new BABYLON.Color3(0.4, 0.4, 0.4)},


    enemytype: "normal",
    targets: 1,
    size: 1,

    spritesheet: "images/sprites/crossbowman-sheet.webp",

    hasskill: false,

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
    sfx: {
        atk: {
            src: "crossbow-atk",
            volume: 0.1
        }
    }
}


enemylist['Sarkaz Grudgebearer'] = {
    name: "Sarkaz Grudgebearer",
    hp: 15000,
    atk: 700,
    def: 250,
    res: 50,
    atkinterval: 5,
    speed: (0.2 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 3,
    hploss: 1,
    dmgtype: "arts",

    targets: 2,

    enemytype: "standby",

    hasskill: true,
    size: 1.1,
    bullet: { size: { height: 1, depth: 5, width: 3 }, arc:false, speed:5, color: new BABYLON.Color3(0.69, 0.21, 0.67)},


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

enemylist['Sarkaz Sentinel'] = {
    name: "Sarkaz Sentinel",
    hp: 4000,
    atk: 0,
    def: 100,
    res: 30,
    atkinterval: 1,
    speed: (0.3 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",

    targets: 1,

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
            atk: 0.3,
            def: 0.3,
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
    hp: 4000,
    atk: 370,
    def: 100,
    res: 50,
    atkinterval: 2.5,
    speed: (0.8 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    targets: 1,


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

enemylist['Sarkaz Greatswordsman'] = {
    name: "Sarkaz Greatswordsman",
    hp: 7500,
    atk: 600,
    def: 230,
    res: 50,
    atkinterval: 2,
    speed: (0.65 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.05,
    targets: 1,

    enemytype: "normal",

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
        start: 0,
        end: 21,
        contact: 15,
        duration: 1.25,
    },

    death: {
        start: 22,
        end: 36,
        duration: 1,

    },
    sfx: {
        atk: {
            src: "greatswordsman-atk",
            volume: 0.1
        }
    }

}

enemylist['Sarkaz Crossbowman'] = {
    name: "Sarkaz Crossbowman",
    hp: 6000,
    atk: 450,
    def: 200,
    res: 50,
    atkinterval: 3,
    speed: (0.6 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 2.2,
    hploss: 1,
    dmgtype: "physical",
    targets: 1,
    size: 1.05,
    bullet: { size: { height: 1, depth: 8, width: 0.5 }, arc:false, speed:5, color: new BABYLON.Color3(0.4, 0.4, 0.4)},

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
    hp: 6500,
    atk: 400,
    def: 200,
    res: 50,
    atkinterval: 2.5,
    speed: (0.2 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "arts",

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
        duration: 2.5,

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
    hp: 3300,
    atk: 300,
    def: 300,
    res: 20,
    atkinterval: 2,
    speed: (0.9 + 0.2)* 0.49,
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
    hp: 4500,
    atk: 330,
    def: 350,
    res: 20,
    atkinterval: 2,
    speed: (0.9 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "Moves faster when Inspired\n by a Herald or by Patriot.",
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
    hp: 5500,
    atk: 450,
    def: 550,
    res: 20,
    atkinterval: 4.8,
    speed: 0.6* 0.49,
    blockcount: 1,
    type: "g",
    range: 15,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "Gains significantly\nincreased ASPD when inspired\nby a Herald or by Patriot.",
    targets: 1,
    splashradius:1,

    enemytype: "normal",

    spritesheet: "images/sprites/guerrilla-mortar-sheet.webp",
    bullet: { size: { height: 3, depth: 3, width: 3 }, arc:true, speed:10, color: new BABYLON.Color3(0.95, 0, 0)},

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
            aspd: 50*1.3,
        },
        aura: true,
        auratype: 2
    },
}

enemylist["Guerrilla Mortar Leader"] = {
    name: "Guerrilla Mortar Leader",
    hp: 6500,
    atk: 590,
    def: 550,
    res: 20,
    atkinterval: 4.8,
    speed: 0.6* 0.49,
    blockcount: 1,
    type: "g",
    range: 15,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "Gains significantly\nincreased ASPD when inspired\nby a Herald or by Patriot.",
    targets: 1,
    splashradius:1,

    enemytype: "normal",

    spritesheet: "images/sprites/guerrilla-mortar-leader-sheet.webp",
    bullet: { size: { height: 3, depth: 3, width: 3 }, arc:true, speed:10, color: new BABYLON.Color3(0.95, 0, 0)},

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
            aspd: 50*1.3,
        },
        aura: true,
        auratype: 2
    },

}


enemylist["Guerrilla Sniper"] = {
    name: "Guerrilla Sniper",
    hp: 3000,
    atk: 340,
    def: 300,
    res: 20,
    atkinterval: 2.5,
    speed: 0.9* 0.49,
    blockcount: 1,
    type: "g",
    range: 2.2,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "Attacks two targets at once when\nInspired by a Herald or by Patriot.",
    targets: 1,
    bullet: { size: { height: 1, depth: 8, width: 0.5 }, arc:false, speed:5, color: new BABYLON.Color3(0.4, 0.4, 0.4)},

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
    hp: 4000,
    atk: 390,
    def: 300,
    res: 20,
    atkinterval: 2.7,
    speed: 0.9* 0.49,
    blockcount: 1,
    type: "g",
    range: 2.2,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "Attacks two targets at once when\nInspired by a Herald or by Patriot.",
    targets: 1,
    bullet: { size: { height: 1, depth: 8, width: 0.5 }, arc:false, speed:5, color: new BABYLON.Color3(0.4, 0.4, 0.4)},

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
    hp: 2900,
    atk: 350,
    def: 150,
    res: 20,
    atkinterval: 1.4,
    speed: 1.9* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    targets: 1,

    tooltip: "A basic guerrilla-ops war hound\nhaving decent defenses while\nstill being able to move quickly.",

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
    hp: 3080,
    atk: 420,
    def: 150,
    res: 20,
    atkinterval: 1.4,
    speed: 1.9* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "An elite guerrilla-ops war hound\nmore aggressive than\nstandard guerrilla hounds.",
    targets: 1,

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
    hp: 3800,
    atk: 360,
    def: 550,
    res: 20,
    atkinterval: 1.9,
    speed: (0.8 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "Has significantly increased\n ATK when Inspired\n by a Herald or by Patriot.",
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
    hp: 5000,
    atk: 430,
    def: 550,
    res: 20,
    atkinterval: 1.9,
    speed: (0.8 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "Has significantly increased\n ATK when Inspired\n by a Herald or by Patriot.",
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
    hp: 12000,
    atk: 580,
    def: 400,
    res: 50,
    atkinterval: 2.5,
    speed: (0.65 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "Does not take damage when \ncoming in contact with \na pulse wave and attacks\n instead deal Arts damage.",
    targets: 1,

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
            dmgtype: "arts",
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
    hp: 8000,
    atk: 480,
    def: 400,
    res: 50,
    atkinterval: 2.5,
    speed: (0.65 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "Does not take damage when \ncoming in contact with \na pulse wave and attacks\n instead deal Arts damage.",
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
            dmgtype: "arts",
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
    hp: 7000,
    atk: 350,
    def: 400,
    res: 50,
    atkinterval: 5,
    speed: 0.75* 0.49,
    blockcount: 1,
    type: "g",
    range: 1.5,
    hploss: 1,
    dmgtype: "arts",
    size: 1.2,
    tooltip: "Deals arts to all surrounding units;\ncoming in contact with pulse\n waves increases atk range.",
    targets: 99,

    enemytype: "normal",

    spritesheet: "images/sprites/sarkaz-guerrilla-caster-sheet.webp",
    bullet: { size: { height: 1, depth: 5, width: 3 }, arc:false, speed:5, color: new BABYLON.Color3(0.69, 0.21, 0.67)},

    hasskill: true,
    hasatkanim: false,

    atkanim:{
        start :99999,
        end: 99999,
        duration:1
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
    hp: 10000,
    atk: 450,
    def: 400,
    res: 50,
    atkinterval: 5,
    speed: 0.75* 0.49,
    blockcount: 1,
    type: "g",
    range: 1.5,
    hploss: 1,
    dmgtype: "arts",
    size: 1.2,
    tooltip: "Deals arts to all surrounding units;\ncoming in contact with pulse\n waves increases atk range.",
    targets: 99,

    enemytype: "normal",

    spritesheet: "images/sprites/sarkaz-guerrilla-caster-leader-sheet.webp",
    bullet: { size: { height: 1, depth: 5, width: 3 }, arc:false, speed:5, color: new BABYLON.Color3(0.69, 0.21, 0.67)},

    hasskill: true,
    hasatkanim: false,

    atkanim:{
        start :99999,
        end: 99999,
        duration:1
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
    hp: 15000,
    atk: 700,
    def: 1300,
    res: 60,
    atkinterval: 3.8,
    speed: (0.5 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "Covers the advance of \nenemies by making themselves\n more likely to be attacked.",
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
    hp: 25000,
    atk: 800,
    def: 1500,
    res: 60,
    atkinterval: 3.8,
    speed: (0.5 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "Covers the advance of \nenemies by making themselves\nmore likely to be attacked.",
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
    hp: 25000,
    atk: 800,
    def: 1500,
    res: 60,
    atkinterval: 3.8,
    speed: 0.4* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "Covers the advance of \nenemies by making themselves\nmore likely to be attacked.",
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
    hp: 7000,
    atk: 300,
    def: 120,
    res: 50,
    atkinterval: 2.7,
    speed: (0.8 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "When on the battlefield,\n Inspires all enemies,\n increasing their ATK and DEF.",
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
    hp: 10000,
    atk: 360,
    def: 120,
    res: 50,
    atkinterval: 2.5,
    speed: (0.8 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "When on the battlefield,\n Inspires all enemies,\n increasing their ATK and DEF.",
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
    hp: 45000,
    atk: 2400,
    def: 1900,
    res: 90,
    atkinterval: 4,
    speed: 0.4* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 2,
    dmgtype: "physical",
    size: 1.1,
    tooltip: "Has extremely high DEF & RES.\n Inspires all enemies,\n increasing their ATK and DEF.",
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
    speed: 0.5* 0.49,
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
        chargetype:"second",
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
    hp: 60000,
    atk: 3000,
    def: 1900,
    res: 90,
    atkinterval: 4,
    speed: 0.4* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 2,
    dmgtype: "physical",
    size: 1.1,
    tooltip: "Has extremely high DEF & RES.\n Inspires all enemies,\n increasing their ATK and DEF.",
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
    speed: 0.5* 0.49,
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
        chargetype:"second",
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

enemylist["Roar Knightclub Elite"] = {
    name: "Roar Knightclub Elite",
    hp: 3800,
    atk: 420,
    def: 100,
    res: 0,
    atkinterval: 2.4,
    speed: (0.7 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 2,
    hploss: 1,
    dmgtype: "physical",
    size: 0.9,
    tooltip: "Has significantly increased DEF\nand RES for a period of time.",
    targets: 1,
    bullet: { size: { height: 1, depth: 8, width: 0.5 }, arc:false, speed:5, color: new BABYLON.Color3(0.4, 0.4, 0.4)},

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

enemylist["Bloodboil Knightclub Elite"] = {
    name: "Bloodboil Knightclub Elite",
    hp: 13000,
    atk: 800,
    def: 800,
    res: 0,
    atkinterval: 2.3,
    speed: (0.5 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "Each time an enemy is defeated,\ngains ATK and ASPD,\nstacking up to 10 times.",
    targets: 1,

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
            aspd: 5*1.3,
            stack: 10
        },
        aura: false,
        auratype: 8
    },
}

enemylist["Elite Knight Shielder"] = {
    name: "Elite Knight Shielder",
    hp: 12000,
    atk: 700,
    def: 1300,
    res: 0,
    atkinterval: 3,
    speed: (0.5 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.3,
    tooltip: "A Kazimierz knight with\ndefensive equipment, relying\non a slow-and-steady approach.",
    targets: 1,

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

enemylist["Vicious Training Gloompincer"] = {
    name: "Vicious Training Gloompincer",
    hp: 3000,
    atk: 450,
    def: 700,
    res: 50,
    atkinterval: 2.5,
    speed: (0.8 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 0.95,
    tooltip: "An Infected creature commonly\nfound in the rivers of Kazimierz.",
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


enemylist["Tytus Topola"] = {
    name: "Tytus Topola",
    hp: 20000,
    atk: 750,
    def: 700,
    res: 50,
    atkinterval: 3,
    speed: (0.55 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 1.3,
    hploss: 1,
    dmgtype: "arts",
    size: 1.1,
    tooltip: "Decreases the ATK of the unit\n with the highest ATK;\nRevives.",
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
        chargetype:"second",
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

enemylist["Tytus Topola2"] = {
    name: "Tytus Topola2",
    hp: 25000,
    atk: 750,
    def: 700,
    res: 50,
    atkinterval: 3,
    speed: (0.55 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 1.3,
    hploss: 1,
    dmgtype: "arts",
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
        chargetype:"second",
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

enemylist["Junkman"] = {
    name: "Junkman",
    hp: 5000,
    atk: 500,
    def: 50,
    res: 20,
    atkinterval: 3,
    speed: 0.8* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "A ragged-looking \nenemy combatant.",
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
    hp: 7500,
    atk: 600,
    def: 70,
    res: 20,
    atkinterval: 3,
    speed: 0.8* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "A ragged-looking enemy.\nMore dangerous than a Junkman.",
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

enemylist["Soldier"] = {
    name: "Soldier",
    hp: 3200,
    atk: 350,
    def: 50,
    res: 0,
    atkinterval: 2,
    speed: 1.1* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A basic melee soldier.",
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

enemylist["Breaker"] = {
    name: "Breaker",
    hp: 3500,
    atk: 410,
    def: 50,
    res: 25,
    atkinterval: 1.4,
    speed: 1.9* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A well-trained rushing unit \nwith high movement speed \nand above average ATK.",
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
    hp: 5000,
    atk: 500,
    def: 80,
    res: 25,
    atkinterval: 1.4,
    speed: 1.9* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A more dangerous Breaker\nwith high movement speed \nand above average ATK.",
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
    hp: 4000,
    atk: 300,
    def: 150,
    res: 30,
    atkinterval: 1.8,
    speed: (0.7 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A stronger Soldier.\nRegenerates HP rapidly.",
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
    hp: 2500,
    atk: 250,
    def: 100,
    res: 30,
    atkinterval: 1.8,
    speed: (0.7 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A soldier that has been controlled\n by an unknown entity,\ncapable of regenerating rapidly.",
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
    hp: 10000,
    atk: 600,
    def: 800,
    res: 0,
    atkinterval: 2.6,
    speed: (0.55 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "A heavy defender that has been\ncontrolled by an unknown entity,\ncapable of regenerating rapidly",
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
    hp: 6000,
    atk: 530,
    def: 100,
    res: 30,
    atkinterval: 3,
    speed: (0.45 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "A Junkman that has been controlled\nby an unknown entity and is \ncapable of regenerating rapidly.",
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
    hp: 16000,
    atk: 800,
    def: 1000,
    res: 0,
    atkinterval: 2.6,
    speed: (0.55 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "A more dangerous Defender.\nRegenerates HP rapidly.",
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
    hp: 11000,
    atk: 650,
    def: 200,
    res: 30,
    atkinterval: 3,
    speed: (0.45 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "A more dangerous Junkman.\nRegenerates HP rapidly.",
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
    hp: 22000,
    atk: 1050,
    def: 220,
    res: 30,
    atkinterval: 2,
    speed: (0.5 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 2.3,
    hploss: 1,
    dmgtype: "physical",
    size: 1.05,
    tooltip: "A possessed ranged combatant that\nhas completely given in to madness,\nhaving extremely high ATK.\nLoses HP over time.",
    targets: 1,
    bullet: { size: { height: 1, depth: 12, width: 1.2 }, arc:false, speed:5, color: new BABYLON.Color3(0, 0, 0) },


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
    hp: 15000,
    atk: 750,
    def: 200,
    res: 30,
    atkinterval: 2.1,
    speed: (0.5 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 2.3,
    hploss: 1,
    dmgtype: "physical",
    size: 1.05,
    tooltip: "A possessed ranged combatant\nthat has descended into madness,\nhaving extremely high ATK.\nLoses HP over time.",
    targets: 1,
    bullet: { size: { height: 1, depth: 12, width: 1.2 }, arc:false, speed:5, color: new BABYLON.Color3(0, 0, 0) },

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
    hp: 30000,
    atk: 1750,
    def: 230,
    res: 30,
    atkinterval: 1.3,
    speed: 1.2* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.05,
    tooltip: "A possessed enemy combatant that\nhas completely given in to madness,\nhaving extremely high ATK.\nLoses HP over time.",
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
    hp: 20000,
    atk: 1000,
    def: 200,
    res: 30,
    atkinterval: 1.3,
    speed: 1.2* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.05,
    tooltip: "A possessed enemy combatant that \nhas descended into madness,\nhaving extremely high ATK.\nLoses HP over time.",
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
    hp: 28000,
    atk: 600,
    def: 200,
    res: 60,
    atkinterval: 10,
    speed: 0.5* 0.49,
    blockcount: 1,
    type: "g",
    range: 99,
    hploss: 2,
    dmgtype: "heal",
    size: 1.05,
    tooltip: "Less likely to be attacked.\nAttacks heal up to 3 enemies.\nWhile on the battlefield,\nincrease all enemies'\nATK and ASPD.",
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
            aspd: 10*1.3,
            hpregenbuff: 2
        },
        aura: false,
        auratype: 2
    },
}

enemylist["MephistoEX"] = {
    name: "MephistoEX",
    hp: 60000,
    atk: 1000,
    def: 300,
    res: 60,
    atkinterval: 10,
    speed: (0.5)* 0.49,
    blockcount: 1,
    type: "g",
    range: 99,
    hploss: 2,
    dmgtype: "heal",
    size: 1.05,
    tooltip: "Less likely to be attacked.\nAttacks heal up to 3 enemies.\nWhile on the battlefield,\nincrease all enemies'\nATK and ASPD.",
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
            aspd: 10*1.3,
            hpregenbuff: 2
        },
        aura: false,
        auratype: 2
    },
}

enemylist["Sarkaz Centurion Nidus Guard"] = {
    name: "Sarkaz Centurion Nidus Guard",
    hp: 14000,
    atk: 700,
    def: 220,
    res: 60,
    atkinterval: 5,
    speed: 0.8* 0.49,
    blockcount: 1,
    type: "g",
    range: 1.5,
    hploss: 1,
    dmgtype: "arts",
    size: 1.1,
    tooltip: "A stronger Centurion Host.\nAttacks 3 targets at once;\neach attack restores\nsome of this unit's HP.",
    targets: 3,
    bullet: { size: { height: 1, depth: 5, width: 3 }, arc:false, speed:5, color: new BABYLON.Color3(0.69, 0.21, 0.67)},


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

//TODO CHANGE
enemylist["Sarkaz Centurion Host"] = {
    name: "Sarkaz Centurion Host",
    hp: 10000,
    atk: 600,
    def: 200,
    res: 60,
    atkinterval: 5,
    speed: 0.8* 0.49,
    blockcount: 1,
    type: "g",
    range: 1.5,
    hploss: 1,
    dmgtype: "arts",
    size: 1.1,
    tooltip: "Attacks 3 targets at once;\neach attack restores\nsome of this unit's HP.",
    targets: 3,
    bullet: { size: { height: 1, depth: 5, width: 3 }, arc:false, speed:5, color: new BABYLON.Color3(0.69, 0.21, 0.67)},


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

enemylist["Ergate"] = {
    name: "Ergate",
    hp: 2300,
    atk: 0,
    def: 120,
    res: 40,
    atkinterval: 1,
    speed: 1.2* 0.49,
    blockcount: 99,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "Specializes in sabotage.\nCannot be blocked.\nMust be eliminated quickly.",
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

enemylist["Ergate Leader"] = {
    name: "Ergate Leader",
    hp: 3800,
    atk: 0,
    def: 260,
    res: 45,
    atkinterval: 1,
    speed: 1.2* 0.49,
    blockcount: 99,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "More durable than Ergates.\nCannot be blocked.\nMust be eliminated quickly.",
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

enemylist["Yeti Operative"] = {
    name: "Yeti Operative",
    hp: 3400,
    atk: 360,
    def: 100,
    res: 0,
    atkinterval: 2,
    speed: 1.1* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A basic Yeti Squadron\nmelee combatant,\ncapable of dealing increased\ndamage to Frozen units.",
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

enemylist["Yeti Operative2"] = {
    name: "Yeti Operative2",
    hp: 5000,
    atk: 380,
    def: 135,
    res: 0,
    atkinterval: 2,
    speed: 1.1* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A basic Yeti Squadron melee combatant,\ncapable of dealing \nincreased damage to Frozen units.",
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
    hp: 3150,
    atk: 350,
    def: 0,
    res: 30,
    atkinterval: 1.4,
    speed: 1.9* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    targets: 1,

    tooltip: "An agile creature controlled \nby the Yeti Squadron\ncapable of dealing \nincreased damage to Frozen units",

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
    hp: 4650,
    atk: 430,
    def: 0,
    res: 30,
    atkinterval: 1.4,
    speed: 1.9* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    targets: 1,

    tooltip: "A dangerous creature controlled \nby the Yeti Squadron\ncapable of dealing \nincreased damage to Frozen units",

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
    hp: 2500,
    atk: 290,
    def: 80,
    res: 0,
    atkinterval: 2.4,
    speed: 0.9* 0.49,
    blockcount: 1,
    type: "g",
    range: 1.9,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A basic Yeti ranged combatant,\ncapable of dealing \nincreased damage to Frozen units",
    targets: 1,
    bullet: { size: { height: 1, depth: 6, width: 0.5 }, arc:false, speed:5, color: new BABYLON.Color3(0.4, 0.4, 0.4)},

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
    hp: 3500,
    atk: 360,
    def: 100,
    res: 0,
    atkinterval: 2.4,
    speed: 0.9* 0.49,
    blockcount: 1,
    type: "g",
    range: 1.9,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "An elite Yeti ranged combatant,\ncapable of dealing \nincreased damage to Frozen units",
    targets: 1,
    bullet: { size: { height: 1, depth: 6, width: 0.5 }, arc:false, speed:5, color: new BABYLON.Color3(0.4, 0.4, 0.4)},

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
    hp: 9000,
    atk: 850,
    def: 230,
    res: 30,
    atkinterval: 3.5,
    speed: (0.5 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "An enemy with relatively\nhigh ATK and defense.",
    targets: 1,

    enemytype: "normal",

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
    hp: 14000,
    atk: 950,
    def: 270,
    res: 30,
    atkinterval: 3.5,
    speed: (0.5 + 0.2)* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "A more dangerous Butcher with\nhigh ATK and defense.",
    targets: 1,

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

enemylist["Caster"] = {
    name: "Caster",
    hp: 4000,
    atk: 400,
    def: 250,
    res: 50,
    atkinterval: 4,
    speed: 0.8* 0.49,
    blockcount: 1,
    type: "g",
    range: 2,
    hploss: 1,
    dmgtype: "arts",
    size: 1,
    tooltip: "A basic caster,capable of attacking using\nlong-ranged Arts.",
    targets: 1,
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc:false, speed:4, color: new BABYLON.Color3(0.69, 0.21, 0.67)},

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
    hp: 6000,
    atk: 450,
    def: 300,
    res: 50,
    atkinterval: 4,
    speed: 0.8* 0.49,
    blockcount: 1,
    type: "g",
    range: 2.4,
    hploss: 1,
    dmgtype: "arts",
    size: 1,
    tooltip: "A more dangerous caster,capable of attacking\n2 targets at once with\nlong-ranged Arts.",
    targets: 2,
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc:false, speed:4, color: new BABYLON.Color3(0.69, 0.21, 0.67)},

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
    hp: 5000,
    atk: 320,
    def: 200,
    res: 50,
    atkinterval: 4.5,
    speed: 0.8* 0.49,
    blockcount: 1,
    type: "g",
    range: 2.2,
    hploss: 1,
    dmgtype: "arts",
    size: 1,
    tooltip: "A Yeti Squadron Caster, \ncapable of inflicting Cold upon\ntheir targets after 3 attacks.",
    targets: 1,
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc:false, speed:4, color: new BABYLON.Color3(0.88, 0.96, 1)},

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

        spatk:{
            src:"yeticaster-atk",
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
        chargetype:"attack",
        range: 2.2,
        initialsp: 0,
        sp: 3,
        dmgmodifier: 1,
        effectcontact: 10,
        applyeffects: {
            modifiers: {
                cold:10
            },
            duration: 1,
        },
    }
}

enemylist["Yeti Caster Leader"] = {
    name: "Yeti Caster Leader",
    hp: 8000,
    atk: 400,
    def: 250,
    res: 50,
    atkinterval: 4,
    speed: 0.8* 0.49,
    blockcount: 1,
    type: "g",
    range: 2.2,
    hploss: 1,
    dmgtype: "arts",
    size: 1,
    tooltip: "An elite Yeti Squadron Caster, \ncapable of inflicting Cold upon\ntheir targets after 3 attacks.",
    targets: 1,
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc:false, speed:4, color: new BABYLON.Color3(0.88, 0.96, 1)},

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

        spatk:{
            src:"yeticaster-atk",
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
        chargetype:"attack",
        range: 2.2,
        initialsp: 0,
        sp: 3,
        dmgmodifier: 1,
        effectcontact: 10,
        applyeffects: {
            modifiers: {
                cold:10
            },
            duration: 1,
        },
    }
}

enemylist['Glacial Spider'] = {
    name: "Glacial Spider",
    hp: 3250,
    atk: 300,
    def: 0,
    res: 0,
    atkinterval: 1.75,
    speed: 1* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 0.95,
    targets: 1,

    tooltip: "A creature native \nto colder environments.\n Upon death, they will explode, \ninflicting Cold on nearby Operators.",

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
            src:"icespider-die",
            volume: 0.05
        }
    },

    skill: {
        name: "frozenhit",
        triggertype: "on_death",
        skilltype: "skillbomb",
        target: "self",
        modifiers: {
            skillbomb:{
                targets: 99,
                range:1,
                dmg:2,
                cold:10,
            }
        },
        aura: false,
    }

}

enemylist['Glacial Spider α'] = {
    name: "Glacial Spider α",
    hp: 4850,
    atk: 370,
    def: 0,
    res: 0,
    atkinterval: 1.75,
    speed: 1* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 0.95,
    targets: 1,

    tooltip: "A more threatening creature \nnative to colder environments.\n Upon death, they will explode, \ninflicting Cold on nearby Operators.",

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
            src:"icespider-die",
            volume: 0.05
        }
    },

    skill: {
        name: "frozenhit",
        triggertype: "on_death",
        skilltype: "skillbomb",
        target: "self",
        modifiers: {
            skillbomb:{
                targets: 99,
                range:1,
                dmg:2,
                cold:10,
            }
        },
        aura: false,
    }

}

enemylist["Yeti Icecleaver"] = {
    name: "Yeti Icecleaver",
    hp: 16000,
    atk: 830,
    def: 500,
    res: 20,
    atkinterval: 3,
    speed: 0.7* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.1,
    tooltip: "A special Yeti Squadron\nmelee combatant,\ncapable of dealing massive\ndamage to Frozen units.",
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
    hp: 25000,
    atk: 1100,
    def: 600,
    res: 20,
    atkinterval: 3,
    speed: 0.7* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.1,
    tooltip: "A special elite Yeti Squadron\nmelee combatant,\ncapable of dealing catastrophic\ndamage to Frozen units.",
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

enemylist["Light-Armored Soldier Leader"] = {
    name: "Light-Armored Soldier Leader",
    hp: 3700,
    atk: 300,
    def: 500,
    res: 0,
    atkinterval: 2,
    speed: 1* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A more potent Light-Armored Soldier \nthat has fairly high defense.",
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
    hp: 4000,
    atk: 500,
    def: 180,
    res: 0,
    atkinterval: 999,
    speed: 0.6* 0.49,
    blockcount: 99,
    type: "r",
    range: 2.5,
    hploss: 1,
    dmgtype: "arts",
    size: 0.95,
    tooltip: "Carries a special warhead\ncapable of dealing Arts damage \nin a radius and inflicting \nCold on affected units.",
    targets: 1,
    splashradius:1,

    enemytype: "normal",

    spritesheet: "images/sprites/oneiros-sheet.webp",
    hasskill: true,
    bullet: { size: { height: 3, depth: 5, width: 3 }, arc:false, speed:20, color: new BABYLON.Color3(0.09, 0.73, 0.94)},


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

enemylist["Originium Slug β"] = {
    name: "Originium Slug β",
    hp: 1550,
    atk: 240,
    def: 0,
    res: 0,
    atkinterval: 1.7,
    speed: 1* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.1,
    tooltip: "An infected wild creature that is more \ndangerous than an Originium Slug α.",
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

enemylist["Monster"] = {
    name: "Monster",
    hp: 1870,
    atk: 0,
    def: 50,
    res: 0,
    atkinterval: 999,
    speed: 0.9* 0.49,
    blockcount: 99,
    type: "r",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 0.95,
    tooltip: "An unmanned enemy drone \nthat does not attack.",
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

enemylist["Heavy Defender Leader"] = {
    name: "Heavy Defender Leader",
    hp: 10000,
    atk: 600,
    def: 1000,
    res: 0,
    atkinterval: 2.6,
    speed: 0.75* 0.49,
    blockcount: 1,
    type: "g",
    range: 0,
    hploss: 1,
    dmgtype: "physical",
    size: 1.2,
    tooltip: "Has very high defense and \nis difficult to take down.",
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
    hp: 30000,
    atk: 440,
    def: 380,
    res: 50,
    atkinterval: 3.7,
    speed: 0.5* 0.49,
    blockcount: 1,
    type: "g",
    range: 2,
    hploss: 2,
    dmgtype: "arts",
    size: 1,
    tooltip: "Every attack inflicts cold.\n Deals massive damage\n against frozen allies.\nPeriodically releases an\nice nova damaging \nall allies in range.",
    revive: true,
    revivetimer: 0,
    revivemax: 0,
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/frostnova-sheet.webp",
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc:false, speed:4, color: new BABYLON.Color3(0.88, 0.96, 1)},

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
            frozenmod: 2,
        },
        aura: false,
    },
    spattack: {
        name: "icenova",
        target: "allblocking",
        chargetype:"second",
        range: 2,
        initialsp: 0,
        sp: 10.5,
        targets:99,
        effectcontact: 18,
        dmgmodifier: 1.5,
        applyeffects: {
            modifiers: {
                cold:5
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
    speed: 0.5* 0.49,
    blockcount: 1,
    type: "g",
    range: 2,
    hploss: 2,
    dmgtype: "arts",
    size: 1,
    tooltip: "Every attack inflicts cold.\n Deals increased damage\n against frozen allies.\nPeriodically releases an\nice nova damaging \nall allies in range.",
    targets: 1,
    enemytype: "normal",

    spritesheet: "images/sprites/frostnova2-sheet.webp",
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc:false, speed:4, color: new BABYLON.Color3(0.88, 0.96, 1)},

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
            sprite: (188+27),
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
            frozenmod: 0.5,
        },
        aura: false,
    },
    spattack: {
        name: "icenova",
        target: "allblocking",
        chargetype:"second",
        range: 3,
        initialsp: 0,
        sp: 10.5,
        targets:99,
        effectcontact: 342,
        dmgmodifier: 1.5,
        applyeffects: {
            modifiers: {
                cold:5
            },
            duration: 1,
        },
    }
}

enemylist["FrostnovaEX"] = {
    name: "FrostnovaEX",
    hp: 45000,
    atk: 530,
    def: 440,
    res: 50,
    atkinterval: 3.7,
    speed: 0.5* 0.49,
    blockcount: 1,
    type: "g",
    range: 2,
    hploss: 2,
    dmgtype: "arts",
    size: 1,
    tooltip: "Every attack inflicts cold.\n Deals massive damage\n against frozen allies.\nPeriodically releases an\nice nova damaging \nall allies in range.",
    revive: true,
    revivetimer: 0,
    revivemax: 0,
    targets: 1,

    enemytype: "normal",

    spritesheet: "images/sprites/frostnova-sheet.webp",
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc:false, speed:4, color: new BABYLON.Color3(0.88, 0.96, 1)},

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
            frozenmod: 2,
        },
        aura: false,
    },
    spattack: {
        name: "icenova",
        target: "allblocking",
        chargetype:"second",
        range: 2,
        initialsp: 0,
        sp: 10.5,
        targets:99,
        effectcontact: 18,
        dmgmodifier: 1.5,
        applyeffects: {
            modifiers: {
                cold:5
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
    speed: 0.5* 0.49,
    blockcount: 1,
    type: "g",
    range: 2,
    hploss: 2,
    dmgtype: "arts",
    size: 1,
    tooltip: "Every attack inflicts cold.\n Deals increased damage\n against frozen allies.\nPeriodically releases an\nice nova damaging \nall allies in range.",
    targets: 1,
    enemytype: "normal",

    spritesheet: "images/sprites/frostnova2-sheet.webp",
    bullet: { size: { height: 1, depth: 5, width: 2 }, arc:false, speed:4, color: new BABYLON.Color3(0.88, 0.96, 1)},

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
            sprite: (188+27),
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
            frozenmod: 0.5,
        },
        aura: false,
    },
    spattack: {
        name: "icenova",
        target: "allblocking",
        chargetype:"second",
        range: 3,
        initialsp: 0,
        sp: 10.5,
        targets:99,
        effectcontact: 342,
        dmgmodifier: 1.5,
        applyeffects: {
            modifiers: {
                cold:5
            },
            duration: 1,
        },
    }
}

enemylist["Mortar Gunner"] = {
    name: "Mortar Gunner",
    hp: 5000,
    atk: 550,
    def: 150,
    res: 0,
    atkinterval: 4.5,
    speed: 0.8* 0.49,
    blockcount: 1,
    type: "g",
    range: 7,
    hploss: 1,
    dmgtype: "physical",
    size: 1,
    tooltip: "A dangerous foe \nthat can launch very \nlong-ranged AoE attacks.",
    targets: 1,
    splashradius:1,

    enemytype: "normal",

    spritesheet: "images/sprites/mortar-gunner-sheet.webp",
    bullet: { size: { height: 3, depth: 3, width: 3 }, arc:true, speed:10, color: new BABYLON.Color3(0.95, 0, 0)},

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
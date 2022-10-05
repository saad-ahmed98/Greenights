var playerlist = {};


playerlist["plume"] = {
    name: "plume",
    hp: 1226,
    atk: 516,
    def: 279,
    res: 0,
    atkinterval: 1,
    blockcount: 1,

    rdtimer: 60,

    rdcounter: 0,

    type: "g",
    class: "vanguard",
    subclass: "charger",

    cost: 8,
    basecost: 8,
    range: 1,

    targets: 1,

    dmgtype: "physical",

    classicon: "images/classicons/charger.png",

    opicon: "images/opicons/plume.png",

    spritesheet: "images/sprites/plume-sheet-min.png",

    idle: {
        start: 0,
        end: 44
    },

    atkanim: {
        start: 45,
        end: 60,
        contact: 52,
        duration: 1,
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
        name: "swift strike alpha",
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
        name: "atk up",
        modifiers: {
            atk: 0.08,
        },
        apply: "self",
    }, {
        name: "trait",
        modifiers: {
            dponkill: 1,
        },
        apply: "self",
    }],
    sfx: {
        atk: {
            src: "plume-atk",
            volume:0.1
        },
        hit: {
            src: "plume-hit",
            volume:0.1
        },
        skillact: {
            src: "skill-speed",
            volume:0.3
        }
    }
}

playerlist["melantha"] = {
    name: "melantha",
    hp: 2745,
    atk: 828,
    def: 155,
    res: 0,
    atkinterval: 1.5,
    blockcount: 1,

    rdtimer: 60,

    rdcounter: 0,

    type: "g",
    class: "guard",
    subclass: "dreadnought",

    cost: 13,
    basecost: 13,
    range: 1,

    targets: 1,

    dmgtype: "physical",

    classicon: "images/classicons/dreadnought.png",

    opicon: "images/opicons/melantha.png",

    spritesheet: "images/sprites/melantha-sheet.png",

    idle: {
        start: 44,
        end: 72
    },

    atkanim: {
        start: 0,
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
        name: "ATK up alpha",
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
        name: "atk up",
        modifiers: {
            atk: 0.08,
        },
        apply: "self",
    }]
    ,
    sfx: {
        atk: {
            src: "melantha-atk",
            volume:0.1
        },
        hit: {
            src: "melantha-hit",
            volume:0.1
        },
        skillact: {
            src: "skill-atk",
            volume:0.3
        }
    }
}

playerlist["popukar"] = {
    name: "popukar",
    hp: 2007,
    atk: 568,
    def: 245,
    res: 0,
    atkinterval: 1.2,
    blockcount: 2,

    rdtimer: 66,

    rdcounter: 0,

    type: "g",
    class: "guard",
    subclass: "centurion",

    cost: 17,
    basecost: 17,
    range: 1,

    targets: 2,

    dmgtype: "physical",

    classicon: "images/classicons/centurion.png",

    opicon: "images/opicons/popukar.png",

    spritesheet: "images/sprites/popukar-sheet.png",

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
        name: "ATK up alpha",
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
        name: "HP up",
        modifiers: {
            atk: 0.08,
        },
        apply: "self",
    }, {
        name: "trait",
        modifiers: {
            dponkill: 1,
        },
        apply: "self",
    }]
    ,
    sfx: {
        atk: {
            src: "popukar-atk",
            volume:0.1
        },
        hit: {
            src: "popukar-hit",
            volume:0.1
        },
        skillact: {
            src: "skill-atk",
            volume:0.3
        }
    }
}

playerlist["fang"] = {
    name: "fang",
    hp: 1325,
    atk: 325,
    def: 310,
    res: 0,
    atkinterval: 1.05,
    blockcount: 2,

    rdtimer: 60,

    rdcounter: 0,

    type: "g",
    class: "vanguard",
    subclass: "pioneer",

    cost: 8,
    basecost: 8,
    range: 1,

    targets: 1,

    dmgtype: "physical",

    classicon: "images/classicons/pioneer.png",

    opicon: "images/opicons/fang.png",

    spritesheet: "images/sprites/fang-sheet-min.png",

    idle: {
        start: 32,
        end: 60,
        duration: 1,
    },

    atkanim: {
        start: 0,
        end: 14,
        contact: 5,
        duration: 1,
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
        name: "charge alpha",
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
    talents: [],
    sfx: {
        atk: {
            src: "fang-atk",
            volume:0.1
        },
        hit: {
            src: "fang-hit",
            volume:0.1
        },
        skillact: {
            src: "skill-dp",
            volume:0.3
        }
    }
}

playerlist["adnachiel"] = {
    name: "adnachiel",
    hp: 1080,
    atk: 478,
    def: 134,
    res: 0,
    atkinterval: 1,
    blockcount: 1,

    rdtimer: 60,
    rdcounter: 0,

    type: "r",
    class: "sniper",
    subclass: "marksman",


    cost: 9,
    basecost: 9,

    range: 3,
    targets: 1,


    dmgtype: "physical",

    classicon: "images/classicons/marksman.png",

    opicon: "images/opicons/adnachiel.png",

    spritesheet: "images/sprites/adnachiel-sheet-min.png",

    idle: {
        start: 30,
        end: 46
    },

    atkanim: {
        start: 0,
        end: 14,
        contact: 5,
        duration: 1,
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
        name: "attack up alpha",
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
        name: "shortcoming breakthrough",
        modifiers: {
            aspd: 8,
        },
        apply: "self",
    }],
    sfx: {
        atk: {
            src: "adnachiel-atk",
            volume:0.1
        },
        skillact: {
            src: "skill-atk",
            volume:0.3
        }
    }
}

playerlist["hibiscus"] = {
    name: "hibiscus",
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
    subclass: "doctor",


    cost: 15,
    basecost: 15,

    range: 3,
    targets: 1,

    dmgtype: "heal",

    classicon: "images/classicons/doctor.png",

    opicon: "images/opicons/hibiscus.png",

    spritesheet: "images/sprites/hibiscus-sheet-min.png",

    idle: {
        start: 29,
        end: 87,
        duration: 1,
    },

    atkanim: {
        start: 0,
        end: 13,
        contact: 9,
        duration: 1,
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
        name: "healing up",
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
        name: "neurology",
        modifiers: {
            atk: 0.08,
        },
        apply: "self",
    }],
    sfx: {
        atk: {
            src: "hibiscus-atk",
            volume:0.1
        },
        skillact: {
            src: "skill-heal",
            volume:0.3
        }
    }
    

}


playerlist["midnight"] = {
    name: "midnight",
    hp: 1653,
    atk: 569,
    def: 282,
    res: 10,
    atkinterval: 1.1,
    blockcount: 2,

    rdtimer: 66,
    rdcounter: 0,

    type: "g",
    class: "guard",
    subclass: "lord",

    cost: 14,
    basecost: 14,

    range: 2,
    targets: 1,

    dmgtype: "physical",

    classicon: "images/classicons/lord.png",

    opicon: "images/opicons/midnight.png",

    spritesheet: "images/sprites/midnight-sheet-min.png",

    idle: {
        start: 33,
        end: 62,
        duration: 1,
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
        name: "enchanted sword alpha",
        duration: 40,
        sp: 70,
        initialsp: 30,
        chargetype: "second",
        triggertype: "manual",
        modifiers: {
            atk: 0.35,
            dmgtype: "arts",
        },
        apply: "self",
        skillimage: "images/opicons/midnightskill.png"

    },
    talents: [{
        name: "targeting - primary",
        modifiers: {
            critchance: 0.20,
            critdmg: 1.6,
        },
        apply: "self",
    }],
    sfx: {
        atk: {
            src: "midnight-atk",
            volume:0.1
        },
        hit: {
            src: "midnight-hit",
            volume:0.1
        },
        skillact: {
            src: "skill-atk",
            volume:0.3
        }
    }
}

playerlist["beagle"] = {
    name: "beagle",
    hp: 2035,
    atk: 295,
    def: 578,
    res: 0,
    atkinterval: 1.2,
    blockcount: 3,

    rdtimer: 60,
    rdcounter: 0,

    type: "g",
    class: "defender",
    subclass: "protector",

    cost: 16,
    basecost: 16,

    range: 0,
    targets: 1,

    dmgtype: "physical",

    classicon: "images/classicons/protector.png",

    opicon: "images/opicons/beagle.png",

    spritesheet: "images/sprites/beagle-sheet-min.png",

    idle: {
        start: 30,
        end: 59,
        duration: 1,
    },

    atkanim: {
        start: 0,
        end: 13,
        contact: 9,
        duration: 1,
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
        name: "DEF up alpha",
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
        name: "DEF up",
        modifiers: {
            def: 0.1,
        },
        apply: "self",
    }],
    sfx: {
        atk: {
            src: "beagle-atk",
            volume:0.1
        },
        hit: {
            src: "beagle-hit",
            volume:0.1
        },
        skillact: {
            src: "skill-def",
            volume:0.3
        }
    }
}


playerlist["durin"] = {
    name: "durin",
    hp: 1080,
    atk: 543,
    def: 90,
    res: 0,
    atkinterval: 1.6,
    blockcount: 1,

    rdtimer: 60,
    rdcounter: 0,

    type: "r",
    class: "caster",
    subclass: "core",


    cost: 16,
    basecost: 16,

    range: 2,
    targets: 1,

    dmgtype: "arts",

    classicon: "images/classicons/core.png",

    opicon: "images/opicons/durin.png",

    spritesheet: "images/sprites/durin-sheet-min.png",

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
        name: "power strike alpha",
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
        name: "armor break",
        modifiers: {
            atk: 0.06,
        },
        apply: "self",
    }],
    sfx: {
        hit: {
            src: "durin-hit",
            volume:0.1
        }
    }
}
let enemylist = {};


enemylist['Hound'] = {
    name:"Hound",
    hp: 1700,
    atk: 260,
    def: 0,
    res:20,
    atkinterval: 1.4,
    speed:1.7,
    blockcount:1,
    type:"g",
    range:0,
    dmgtype:"physical",
    size:1,

    enemytype:"normal",

    spritesheet:"images/sprites/dog-sheet.webp",

    hasskill:false,

    idle:{
        start:34,
        end:48,
        duration:1,

    },

    move:{
        start:15,
        end:22,
        duration:0.66,

    },

    atkanim:{
        start:1,
        end:14,
        contact:8,
        duration:1,
    },

    death:{
        start:23,
        end:32,
        duration:0.86,

    },
    sfx: {
        atk: {
            src: "dog-atk",
            volume:0.05
        }
    }

}

enemylist['Crossbowman'] = {
    name:"Crossbowman",
    hp: 1900,
    atk: 310,
    def: 150,
    res:0,
    atkinterval: 2.4,
    speed:0.7,
    blockcount:1,
    type:"g",
    range:2,
    dmgtype:"physical",

    enemytype:"normal",
    targets:1,
    size:1,

    spritesheet:"images/sprites/crossbowman-sheet.webp",

    hasskill:false,

    idle:{
        start:30,
        end:42,
        duration:1,
    },

    move:{
        start:44,
        end:58,
        duration:1,

    },

    atkanim:{
        start:0,
        end:13,
        contact:8,
        duration:1,

    },

    death:{
        start:14,
        end:29,
        duration:1,

    },
    sfx: {
        atk: {
            src: "crossbow-atk",
            volume:0.1
        }
    }
}


enemylist['Sarkaz Grudgebearer'] = {
    name:"Sarkaz Grudgebearer",
    hp: 15000,
    atk: 700,
    def: 250,
    res:50,
    atkinterval: 5,
    speed:0.2,
    blockcount:1,
    type:"g",
    range:2,
    dmgtype:"arts",

    targets:2,

    enemytype:"standby",

    hasskill:true,
    size:1.1,


    spritesheet:"images/sprites/sarkaz-grudgebearer-sheet.webp",

    idle:{
        start:39,
        end:62,
        duration:1,
    },

    move:{
        start:63,
        end:87,
        duration:1.5,
    },

    atkanim:{
        start:0,
        end:23,
        contact:14,
        duration:1,

    },

    death:{
        start:24,
        end:38,
        duration:1,

    },

    skill:{
        name :"standby",
        triggertype:"on_hit",
        skilltype:"sarkazstandby",
        target:"self",
        modifiers:{
            speed:0.4,
            standby:false,
        },
        aura:false,

        move:{
            start:88,
            end:107,
            duration:0.5,
    
        },
        idle:{
            start:108,
            end:125,
            duration:1,
        },
    }
    ,
    sfx: {
        atk: {
            src: "grudgebearer-atk",
            volume:0.1
        }
    }
}

enemylist['Sarkaz Sentinel'] = {
    name:"Sarkaz Sentinel",
    hp: 4000,
    atk: 0,
    def: 100,
    res:30,
    atkinterval: 1,
    speed:0.3,
    blockcount:1,
    type:"g",
    range:0,
    dmgtype:"physical",

    targets:1,

    enemytype:"normal",

    hasskill:true,
    size:1,


    spritesheet:"images/sprites/sarkaz-sentinel-sheet.webp",

    idle:{
        start:15,
        end:64,
        duration:2,
    },

    move:{
        start:115,
        end:134,
        duration:1.3,

    },
    
    atkanim:{
        start:9999,
        end:9999,
        contact:8,
        duration:1,

    },
    

    death:{
        start:0,
        end:14,
        duration:1,

    },

    skill:{
        name :"standby",
        triggertype:"on_hit",
        skilltype:"sarkazalert",
        target:"all",
        modifiers:{
            atk:0.3,
            def:0.3,
        },
        aura:true,
        auratype:"alert",
        idle:{
            start:65,
            end:84,
            duration:1.3,
        },
    
        move:{
            start:95,
            end:114,
            duration:1.3,
    
        },

        begin:{
            start:85,
            end:94,
            duration:0.6,
        },

    },
    sfx: {
        skillact: {
            src: "sentinel-skill",
            volume:2
        }
    }
}

enemylist['Sarkaz Swordsman'] = {
    name:"Sarkaz Swordsman",
    hp: 4000,
    atk: 370,
    def: 100,
    res:50,
    atkinterval: 2.5,
    speed:0.8,
    blockcount:1,
    type:"g",
    range:0,
    dmgtype:"physical",
    size:1,
    targets:1,


    enemytype:"normal",

    spritesheet:"images/sprites/sarkaz-swordsman-sheet.webp",

    hasskill:false,
    

    idle:{
        start:37,
        end:51,
        duration:1,

    },

    move:{
        start:52,
        end:65,
        duration:0.94,

    },

    atkanim:{
        start:0,
        end:21,
        contact:13,
        duration:1,
    },

    death:{
        start:23,
        end:36,
        duration:1,

    }
    ,
    sfx: {
        hit: {
            src: "swordsman-hit",
            volume:0.1
        }
    }

}

enemylist['Sarkaz Greatswordsman'] = {
    name:"Sarkaz Greatswordsman",
    hp: 7500,
    atk: 600,
    def: 230,
    res:50,
    atkinterval: 2,
    speed:0.65,
    blockcount:1,
    type:"g",
    range:0,
    dmgtype:"physical",
    size:1.05,
    targets:1,

    enemytype:"normal",

    spritesheet:"images/sprites/sarkaz-greatswordsman-sheet.webp",

    hasskill:false,

    idle:{
        start:37,
        end:51,
        duration:1,

    },

    move:{
        start:52,
        end:76,
        duration:1.1,

    },

    atkanim:{
        start:0,
        end:21,
        contact:15,
        duration:1.25,
    },

    death:{
        start:22,
        end:36,
        duration:1,

    },
    sfx: {
        atk: {
            src: "greatswordsman-atk",
            volume:0.1
        }
    }

}

enemylist['Sarkaz Crossbowman'] = {
    name:"Sarkaz Crossbowman",
    hp: 6000,
    atk: 450,
    def: 200,
    res:50,
    atkinterval: 3,
    speed:0.6,
    blockcount:1,
    type:"g",
    range:2,
    dmgtype:"physical",
    targets:1,
    size:1.05,

    enemytype:"normal",

    spritesheet:"images/sprites/sarkaz-crossbowman-sheet.webp",

    hasskill:false,

    idle:{
        start:34,
        end:48,
        duration:1,

    },

    move:{
        start:49,
        end:72,
        duration:1,

    },

    atkanim:{
        start:0,
        end:19,
        contact:10,
        duration:1,
    },

    death:{
        start:20,
        end:33,
        duration:1,

    },
    sfx: {
        atk: {
            src: "crossbowman-atk",
            volume:0.1
        }
    }

}

enemylist['Sarkaz Bladeweaver'] = {
    name:"Sarkaz Bladeweaver",
    hp: 6500,
    atk: 400,
    def: 200,
    res:50,
    atkinterval: 2.5,
    speed:0.2,
    blockcount:1,
    type:"g",
    range:0,
    dmgtype:"arts",

    targets:1,
    size:1.1,

    enemytype:"standby",

    hasskill:true,


    spritesheet:"images/sprites/sarkaz-bladeweaver-sheet.webp",

    idle:{
        start:52,
        end:71,
        duration:1,
    },

    move:{
        start:72,
        end:87,
        duration:2.5,

    },

    atkanim:{
        start:0,
        end:32,
        contact:13,
        duration:1,

    },

    death:{
        start:33,
        end:51,
        duration:1,

    },

    skill:{
        name :"standby",
        triggertype:"on_hit",
        skilltype:"sarkazstandby",
        target:"self",
        modifiers:{
            speed:0.4,
            standby:false,
        },
        aura:false,
    },
    sfx: {
        atk: {
            src: "bladeweaver-atk",
            volume:0.1
        }
    }
}

enemylist["Guerrilla Fighter"] = {
    name:"Guerrilla Fighter",
    hp: 3300,
    atk: 300,
    def: 300,
    res:20,
    atkinterval: 2,
    speed:0.9,
    blockcount:1,
    type:"g",
    range:0,
    dmgtype:"physical",
    size:1,
    tooltip:"Moves faster when Inspired\n by a Herald or by Patriot.",
    targets:1,

    enemytype:"normal",

    spritesheet:"images/sprites/guerrilla-fighter-sheet.webp",
    

    hasskill:true,
    

    idle:{
        start:29,
        end:43,
        duration:1,

    },

    move:{
        start:44,
        end:67,
        duration:1.2,

    },

    atkanim:{
        start:0,
        end:14,
        contact:7,
        duration:1,
    },

    death:{
        start:15,
        end:28,
        duration:1,

    }
    ,
    sfx: {
        hit: {
            src: "swordsman-hit",
            volume:0.1
        }
    },

    skill:{
        name :"inspiredfighter",
        triggertype:"on_inspire",
        skilltype:"guerrilainspire",
        target:"self",
        modifiers:{
            speed:0.2,
        },
        aura:true,
        auratype:"inspire"
    },

}

enemylist["Guerrilla Fighter Leader"] = {
    name:"Guerrilla Fighter Leader",
    hp: 4500,
    atk: 330,
    def: 350,
    res:20,
    atkinterval: 2,
    speed:0.9,
    blockcount:1,
    type:"g",
    range:0,
    dmgtype:"physical",
    size:1,
    tooltip:"Moves faster when Inspired\n by a Herald or by Patriot.",
    targets:1,


    enemytype:"normal",

    spritesheet:"images/sprites/guerrilla-fighter-leader-sheet.webp",

    hasskill:true,
    

    idle:{
        start:29,
        end:43,
        duration:1,

    },

    move:{
        start:44,
        end:67,
        duration:1.2,

    },

    atkanim:{
        start:0,
        end:14,
        contact:7,
        duration:1,
    },

    death:{
        start:15,
        end:28,
        duration:1,

    }
    ,
    sfx: {
        hit: {
            src: "swordsman-hit",
            volume:0.1
        }
    },

    skill:{
        name :"inspiredfighter",
        triggertype:"on_inspire",
        skilltype:"guerrilainspire",
        target:"self",
        modifiers:{
            speed:0.2,
        },
        aura:true,
        auratype:"inspire"
    },

}

enemylist["Guerrilla Sniper"] = {
    name:"Guerrilla Sniper",
    hp: 3000,
    atk: 340,
    def: 300,
    res:20,
    atkinterval: 2.5,
    speed:0.6,
    blockcount:1,
    type:"g",
    range:1.3,
    dmgtype:"physical",
    size:1,
    tooltip:"Attacks two targets at once when\nInspired by a Herald or by Patriot.",
    targets:1,

    enemytype:"normal",

    spritesheet:"images/sprites/guerrilla-sniper-sheet.webp",

    hasskill:true,
    

    idle:{
        start:38,
        end:52,
        duration:1,

    },

    move:{
        start:53,
        end:67,
        duration:1,

    },

    atkanim:{
        start:0,
        end:22,
        contact:8,
        duration:0.8,
    },

    death:{
        start:23,
        end:37,
        duration:1,

    }
    ,
    sfx: {
        atk: {
            src: "crossbow-atk",
            volume:0.1
        }
    },

    skill:{
        name :"inspiredsniper",
        triggertype:"on_inspire",
        skilltype:"guerrilainspire",
        target:"self",
        modifiers:{
            targets:1,
        },
        aura:true,
        auratype:"inspire"
    },

}

enemylist["Guerrilla Sniper Leader"] = {
    name:"Guerrilla Sniper Leader",
    hp: 4000,
    atk: 390,
    def: 300,
    res:20,
    atkinterval: 2.7,
    speed:0.6,
    blockcount:1,
    type:"g",
    range:1.3,
    dmgtype:"physical",
    size:1,
    tooltip:"Attacks two targets at once when\nInspired by a Herald or by Patriot.",
    targets:1,

    enemytype:"normal",

    spritesheet:"images/sprites/guerrilla-sniper-leader-sheet.webp",

    hasskill:true,
    

    idle:{
        start:38,
        end:52,
        duration:1,

    },

    move:{
        start:53,
        end:67,
        duration:1,

    },

    atkanim:{
        start:0,
        end:22,
        contact:8,
        duration:0.8,
    },

    death:{
        start:23,
        end:37,
        duration:1,

    }
    ,
    sfx: {
        atk: {
            src: "crossbow-atk",
            volume:0.1
        }
    },

    skill:{
        name :"inspiredsniper",
        triggertype:"on_inspire",
        skilltype:"guerrilainspire",
        target:"self",
        modifiers:{
            targets:1,
        },
        aura:true,
        auratype:"inspire"
        },

}

enemylist['Guerrilla Hound'] = {
    name:"Guerrilla Hound",
    hp: 2900,
    atk: 350,
    def: 150,
    res:20,
    atkinterval: 1.4,
    speed:1.6,
    blockcount:1,
    type:"g",
    range:0,
    dmgtype:"physical",
    size:1,
    targets:1,

    tooltip:"A basic guerrilla-ops war hound\n having decent defenses while\n still being able to move quickly.",

    enemytype:"normal",

    spritesheet:"images/sprites/guerrilla-hound-sheet.webp",

    hasskill:false,

    idle:{
        start:29,
        end:43,
        duration:1,

    },

    move:{
        start:44,
        end:59,
        duration:1.2,

    },

    atkanim:{
        start:0,
        end:14,
        contact:8,
        duration:1,
    },

    death:{
        start:15,
        end:28,
        duration:1,

    },
    sfx: {
        atk: {
            src: "dog-atk",
            volume:0.05
        }
    }

}

enemylist['Guerrilla Hound Pro'] = {
    name:"Guerrilla Hound Pro",
    hp: 3080,
    atk: 420,
    def: 150,
    res:20,
    atkinterval: 1.4,
    speed:1.6,
    blockcount:1,
    type:"g",
    range:0,
    dmgtype:"physical",
    size:1,
    tooltip:"An elite guerrilla-ops war hound\n more aggressive than\n standard guerrilla hounds.",
    targets:1,

    enemytype:"normal",

    spritesheet:"images/sprites/guerrilla-hound-pro-sheet.webp",

    hasskill:false,

    idle:{
        start:30,
        end:44,
        duration:1,

    },

    move:{
        start:45,
        end:60,
        duration:1.2,

    },

    atkanim:{
        start:0,
        end:14,
        contact:8,
        duration:1,
    },

    death:{
        start:15,
        end:29,
        duration:1,

    },
    sfx: {
        atk: {
            src: "dog-atk",
            volume:0.05
        }
    }

}

enemylist["Guerrilla Siegebreaker"] = {
    name:"Guerrilla Siegebreaker",
    hp: 3800,
    atk: 360,
    def: 550,
    res:20,
    atkinterval: 1.9,
    speed:0.8,
    blockcount:1,
    type:"g",
    range:0,
    dmgtype:"physical",
    size:1,
    tooltip:"Gains significantly increased ATK when\nInspired by a Herald or by Patriot.",
    targets:1,

    enemytype:"normal",

    spritesheet:"images/sprites/guerrilla-siegebreaker-sheet.webp",

    hasskill:true,
    

    idle:{
        start:30,
        end:44,
        duration:1,

    },

    move:{
        start:45,
        end:59,
        duration:1,

    },

    atkanim:{
        start:0,
        end:14,
        contact:7,
        duration:1.2,
    },

    death:{
        start:15,
        end:29,
        duration:1,

    },
    start:{
        start:60,
        end:81,
        duration:1,
    }
    ,
    sfx: {
        start: {
            src: "trooper-start",
            volume:0.1
        },
        hit: {
            src: "swordsman-hit",
            volume:0.1
        }
    },

    skill:{
        name :"inspiredsiegebreaker",
        triggertype:"on_inspire",
        skilltype:"guerrilainspire",
        target:"self",
        modifiers:{
            atk:0.5,
        },
        aura:true,
        auratype:"inspire"
        },
}

enemylist["Guerrilla Siegebreaker Leader"] = {
    name:"Guerrilla Siegebreaker Leader",
    hp: 5000,
    atk: 430,
    def: 550,
    res:20,
    atkinterval: 1.9,
    speed:0.8,
    blockcount:1,
    type:"g",
    range:0,
    dmgtype:"physical",
    size:1,
    tooltip:"Gains significantly increased ATK when\nInspired by a Herald or by Patriot.",
    targets:1,

    enemytype:"normal",

    spritesheet:"images/sprites/guerrilla-siegebreaker-leader-sheet.webp",

    hasskill:true,
    

    idle:{
        start:30,
        end:44,
        duration:1,

    },

    move:{
        start:45,
        end:59,
        duration:1,

    },

    atkanim:{
        start:0,
        end:14,
        contact:7,
        duration:1.2,
    },

    death:{
        start:15,
        end:29,
        duration:1,

    },
    start:{
        start:60,
        end:81,
        duration:1,
    }
    ,
    sfx: {
        start: {
            src: "trooper-start",
            volume:0.1
        },
        hit: {
            src: "swordsman-hit",
            volume:0.1
        }
    },

    skill:{
        name :"inspiredsiegebreaker",
        triggertype:"on_inspire",
        skilltype:"guerrilainspire",
        target:"self",
        modifiers:{
            atk:0.5,
        },
        aura:true,
        auratype:"inspire"
        
    },
}

enemylist["Sarkaz Guerrilla Fighter Leader"] = {
    name:"Sarkaz Guerrilla Fighter Leader",
    hp: 12000,
    atk: 580,
    def: 400,
    res:50,
    atkinterval: 2.5,
    speed:0.65,
    blockcount:1,
    type:"g",
    range:0,
    dmgtype:"physical",
    size:1.2,
    tooltip:"Does not take damage when \ncoming in contact with \na pulse wave and attacks\n instead deal Arts damage.",
    targets:1,

    enemytype:"normal",

    spritesheet:"images/sprites/sarkaz-guerrilla-fighter-leader-sheet.webp",

    hasskill:true,
    

    atkanim:{
        start:0,
        end:17,
        contact:8,
        duration:1,
    },

    death:{
        start:18,
        end:32,
        duration:1,

    },
    idle:{
        start:33,
        end:60,
        duration:1,

    },
    move:{
        start:61,
        end:80,
        duration:1.5,

    },
    
    sfx: {
        hit: {
            src: "sarkaz-guerrilla-hit",
            volume:0.1
        }
    },


    skill:{
        name :"altarfighter",
        triggertype:"on_altar",
        skilltype:"sarkazaltar",
        target:"self",
        modifiers:{
            dmgtype:"arts",
        },
        aura:true,
        auratype:"inspire",
        atkanim:{
            start:81,
            end:105,
            contact:95,
            duration:1,
        },
    },
}

enemylist["Guerrilla Shieldguard"] = {
    name:"Guerrilla Shieldguard",
    hp: 15000,
    atk: 700,
    def: 1300,
    res:40,
    atkinterval: 3.8,
    speed:0.5,
    blockcount:1,
    type:"g",
    range:0,
    dmgtype:"physical",
    size:1.2,
    tooltip:"Covers the advance of \nenemy troops by making themselves\n more likely to be attacked.",
    targets:1,

    enemytype:"normal",

    spritesheet:"images/sprites/guerrilla-shieldguard-sheet.webp",

    hasskill:true,
    

    atkanim:{
        start:0,
        end:23,
        contact:15,
        duration:1,
    },

    death:{
        start:24,
        end:37,
        duration:1,

    },
    idle:{
        start:38,
        end:53,
        duration:1,

    },
    move:{
        start:54,
        end:71,
        duration:1.5,

    },
    
    sfx: {
        hit: {
            src: "shieldguard-hit",
            volume:0.1
        }
    },


    skill:{
        name :"tauntguerrilla",
        triggertype:"on_start",
        skilltype:"taunt",
        target:"self",
        modifiers:{
            taunt:1,
        },
        aura:false,
    },
}

enemylist["Guerrilla Shieldguard Leader"] = {
    name:"Guerrilla Shieldguard Leader",
    hp: 25000,
    atk: 800,
    def: 1500,
    res:40,
    atkinterval: 3.8,
    speed:0.5,
    blockcount:1,
    type:"g",
    range:0,
    dmgtype:"physical",
    size:1.2,
    tooltip:"Covers the advance of \nenemies by making themselves\nmore likely to be attacked.",
    targets:1,

    enemytype:"normal",

    spritesheet:"images/sprites/guerrilla-shieldguard-leader-sheet.webp",

    hasskill:true,
    

    atkanim:{
        start:0,
        end:24,
        contact:15,
        duration:1,
    },

    death:{
        start:25,
        end:38,
        duration:1,

    },
    idle:{
        start:39,
        end:54,
        duration:1,

    },
    move:{
        start:55,
        end:72,
        duration:1.5,

    },
    
    sfx: {
        hit: {
            src: "shieldguard-hit",
            volume:0.1
        }
    },


    skill:{
        name :"tauntguerrilla",
        triggertype:"on_start",
        skilltype:"taunt",
        target:"self",
        modifiers:{
            taunt:1,
        },
        aura:false,
    },
}

enemylist["Guerrilla Herald"] = {
    name:"Guerrilla Herald",
    hp: 7000,
    atk: 300,
    def: 120,
    res:50,
    atkinterval: 2.7,
    speed:0.8,
    blockcount:1,
    type:"g",
    range:0,
    dmgtype:"physical",
    size:1,
    tooltip:"When on the battlefield,\n Inspires all enemies,\n increasing their ATK and DEF.",
    targets:1,

    enemytype:"normal",

    spritesheet:"images/sprites/guerrilla-herald-sheet.webp",

    hasskill:true,
    

    atkanim:{
        start:0,
        end:15,
        contact:8,
        duration:1,
    },

    death:{
        start:16,
        end:32,
        duration:1,

    },
    idle:{
        start:33,
        end:47,
        duration:1,

    },
    move:{
        start:48,
        end:61,
        duration:1.5,

    },
    
    sfx: {
        hit: {
            src: "herald-hit",
            volume:0.1
        }
    },


    skill:{
        name :"inspireguerrilla",
        triggertype:"on_start",
        skilltype:"alive",
        target:"all",
        modifiers:{
           inspire:true,
           atk:0.1,
           flatdef:100,
        },
        aura:false,
        auratype:"inspire"
        },
}

enemylist["Guerrilla Herald Leader"] = {
    name:"Guerrilla Herald Leader",
    hp: 10000,
    atk: 360,
    def: 120,
    res:50,
    atkinterval: 2.5,
    speed:0.8,
    blockcount:1,
    type:"g",
    range:0,
    dmgtype:"physical",
    size:1,
    tooltip:"When on the battlefield,\n Inspires all enemies,\n increasing their ATK and DEF.",
    targets:1,

    enemytype:"normal",

    spritesheet:"images/sprites/guerrilla-herald-leader-sheet.webp",

    hasskill:true,
    
    atkanim:{
        start:0,
        end:15,
        contact:8,
        duration:1,
    },

    death:{
        start:16,
        end:32,
        duration:1,

    },
    idle:{
        start:33,
        end:47,
        duration:1,

    },
    move:{
        start:48,
        end:61,
        duration:1.5,

    },
    
    sfx: {
        hit: {
            src: "herald-hit",
            volume:0.1
        }
    },


    skill:{
        name :"inspireguerrilla",
        triggertype:"on_start",
        skilltype:"alive",
        target:"all",
        modifiers:{
           inspire:true,
           atk:0.1,
           flatdef:100,
        },
        aura:false,
        auratype:"inspire"

    },
}

enemylist["Patriot"] = {
    name:"Patriot",
    hp: 45000,
    atk: 2400,
    def: 1700,
    res:90,
    atkinterval: 4,
    speed:0.3,
    blockcount:1,
    type:"g",
    range:0,
    dmgtype:"physical",
    size:1,
    tooltip:"Has extremely high DEF & RES.\n Inspires all enemies,\n increasing their ATK and DEF.",
    revive:true,
    revivetimer:30,
    revivemax:30,
    targets:1,

    enemytype:"normal",

    spritesheet:"images/sprites/patriot-sheet.webp",

    hasskill:true,
    

    atkanim:{
        start:0,
        end:22,
        contact:12,
        duration:1,
    },

    
    idle:{
        start:23,
        end:47,
        duration:1,

    },
    move:{
        start:48,
        end:76,
        duration:1.5,

    },
    revival1:{
        start:77,
        end:94,
        duration:1,
    },
    revival2:{
        start:95,
        end:114,
        duration:1,
    },
    
    sfx: {
        revival: {
            src: "patriot-revival",
            volume:0.1
        },
        atk: {
            src: "patriot1-atk",
            volume:0.1
        },
        hit:{
            src: "patriot1-hit",
            volume:0.1
        }
    },
    skill:{
        name :"inspireguerrilla",
        triggertype:"on_start",
        skilltype:"alive",
        target:"all",
        modifiers:{
           inspire:true,
           atk:0.2,
           flatdef:200,
        },
        aura:false,
        auratype:"inspire"
    },
}

enemylist["Patriot2"] = {
    name:"Patriot2",
    hp: 45000,
    atk: 1600,
    def: 500,
    res:45,
    atkinterval: 4,
    speed:0.4,
    blockcount:1,
    type:"g",
    range:0.85,
    dmgtype:"physical",
    size:1,
    tooltip:"Has extremely high DEF and RES.\n Inspires all enemies,\n increasing their ATK and DEF.",
    targets:1,

    enemytype:"normal",

    spritesheet:"images/sprites/patriot2-sheet.webp",

    hasskill:true,
    invincible:15,

    atkanim:{
        start:0,
        end:20,
        contact:10,
        duration:1.5,
    },
    death:{
        start:21,
        end:98,
        duration:1,
    },
    
    idle:{
        start:99,
        end:116,
        duration:1,

    },
    move:{
        start:117,
        end:146,
        duration:1.5,

    },
    start:{
        start:147,
        end:200,
        duration:2,
    },
    
    
    sfx: {
        start: {
            src: "patriot2-start1",
            volume:0.3
        },
        start2: {
            src: "patriot2-start2",
            volume:0.3,
            sprite: 160,
            playing:false
        },
        start3: {
            src: "patriot2-start3",
            volume:0.3,
            sprite: 188,
            playing:false
        },
        atk: {
            src: "patriot2-atk",
            volume:0.1
        },
        hit:{
            src: "patriot2-hit",
            volume:0.1
        }
    },
    skill:{
        name :"inspireguerrilla",
        triggertype:"on_start",
        skilltype:"alive",
        target:"all",
        modifiers:{
           inspire:true,
           atk:0.2,
           flatdef:200,
        },
        aura:false,
        auratype:"inspire"
    },

    spattack:{
        name:"javelin",
        target:"r",
        range:99,
        dmgmodifier:1.35,
        initialsp:5,
        sp:20,
    }
}






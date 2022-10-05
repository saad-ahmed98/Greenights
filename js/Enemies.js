var enemylist = {};


enemylist['dog'] = {
    name:"dog",
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

    spritesheet:"images/sprites/dog-sheet-min.png",

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
            volume:0.1
        }
    }

}

enemylist['crossbowman'] = {
    name:"crossbowman",
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

    spritesheet:"images/sprites/crossbowman-sheet-min.png",

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


enemylist['sarkaz grudgebearer'] = {
    name:"sarkaz grudgebearer",
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


    spritesheet:"images/sprites/sarkaz-grudgebearer-sheet.png",

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

enemylist['sarkaz sentinel'] = {
    name:"sarkaz sentinel",
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


    spritesheet:"images/sprites/sarkaz-sentinel-sheet.png",

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
        modifiers:{
            atk:0.3,
            atk:0.3,
        },
        aura:true,

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

enemylist['sarkaz swordsman'] = {
    name:"sarkaz swordsman",
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

    enemytype:"normal",

    spritesheet:"images/sprites/sarkaz-swordsman-sheet.png",

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

enemylist['sarkaz greatswordsman'] = {
    name:"sarkaz greatswordsman",
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

    enemytype:"normal",

    spritesheet:"images/sprites/sarkaz-greatswordsman-sheet.png",

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

enemylist['sarkaz crossbowman'] = {
    name:"sarkaz crossbowman",
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

    spritesheet:"images/sprites/sarkaz-crossbowman-sheet.png",

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

enemylist['sarkaz bladeweaver'] = {
    name:"sarkaz bladeweaver",
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


    spritesheet:"images/sprites/sarkaz-bladeweaver-sheet.png",

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
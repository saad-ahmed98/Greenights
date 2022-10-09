var levels = {}
levels["AMOGUS"] = {
    level: "AMOGUS",
    name: "BREAD IN FRENCH",
    initialdp: 10,
    squadlimit: 8,
    hp: 3,
    bgm: "dm_2",
    background: "loading4",
    description: "Some dinergate fans are roaming around the base\n claiming to be bigger doggo fans than our operators.\n We can't let that slide.",
    waves: [
        {"number":0, "time": 1, "gap": 5, "enemies": "sarkaz grudgebearer", "line": true, "taunt": false, "count": 1, "start": [1, 8], "checkpoints": [{ "start": [1, 8], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [1, 8], "pause": 0 }, { "start": [1, 8], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [1, 8], "pause": 0 }, { "start": [1, 8], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [1, 8], "pause": 0 }, { "start": [1, 8], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [1, 8], "pause": 0 }, { "start": [1, 8], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [2, 1], "pause": 0 }] },
        { "number":1,"time": 1, "gap": 10, "enemies": "sarkaz bladeweaver", "line": true, "taunt": false, "count": 1, "start": [3, 9], "checkpoints": [{ "start": [3, 9], "end": [3, 9], "pause": 150 }, { "start": [3, 9], "end": [6, 7], "pause": 0 }, { "start": [6, 7], "end": [2, 1], "pause": 0 }] },
        { "number":2,"time": 1, "gap": 10, "enemies": "sarkaz bladeweaver", "line": false, "taunt": false, "count": 1, "start": [4, 9], "checkpoints": [{ "start": [4, 9], "end": [4, 9], "pause": 150 }, { "start": [4, 9], "end": [6, 7], "pause": 0 }, { "start": [6, 7], "end": [2, 1], "pause": 0 }] },

        //sarkaz swordsman
        { "number":3,"time": 5, "gap": 10, "enemies": "sarkaz swordsman", "line": true, "taunt": true, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 4 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },
        //sarkaz swordsman
        { "number":4,"time": 8, "gap": 10, "enemies": "sarkaz swordsman", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },
        //sarkaz greatswordsman
        {"number":5, "time": 13, "gap": 2, "enemies": "sarkaz swordsman", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //sarkaz swordsman
        { "number":6,"time": 33, "gap": 1, "enemies": "sarkaz swordsman", "line": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },
        //sarkaz greatswordsman
        {"number":7, "time": 35, "gap": 10, "enemies": "sarkaz greatswordsman", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //sarkaz swordsman
        {"number":8, "time": 45, "gap": 2, "enemies": "sarkaz swordsman", "line": true, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [1, 7], "pause": 0 }, { "start": [1, 7], "end": [5, 12], "pause": 0 }] },

        //sarkaz bladeweaver
        { "number":9,"time": 59, "gap": 10, "enemies": "sarkaz bladeweaver", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 4 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },

        //sarkaz crossbowman
        { "number":10,"time": 60, "gap": 6, "enemies": "sarkaz crossbowman", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 12], "pause": 0 }] },

        //sarkaz bladeweaver
        { "number":11,"time": 61, "gap": 10, "enemies": "sarkaz bladeweaver", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //sarkaz swordsman
        { "number":12,"time": 77, "gap": 2, "enemies": "sarkaz swordsman", "line": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },

        //sarkaz greatswordsman
        {"number":13, "time": 79, "gap": 10, "enemies": "sarkaz greatswordsman", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //sarkaz sentinel
        {"number":14, "time": 86, "gap": 10, "enemies": "sarkaz sentinel", "line": true, "taunt": false, "count": 1, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [5, 12], "pause": 0 }] },

        //sarkaz swordsman
        { "number":15,"time": 89, "gap": 2, "enemies": "sarkaz swordsman", "line": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },

        //sarkaz greatswordsman
        { "number":16,"time": 91, "gap": 10, "enemies": "sarkaz greatswordsman", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //sarkaz swordsman
        { "number":17,"time": 115, "gap": 2, "enemies": "sarkaz swordsman", "line": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },

        //sarkaz crossbowman
        { "number":18,"time": 117, "gap": 6, "enemies": "sarkaz crossbowman", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 12], "pause": 0 }] },

        //sarkaz swordsman
        {"number":19, "time": 135, "gap": 2, "enemies": "sarkaz swordsman", "line": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [1, 7], "pause": 0 }, { "start": [1, 7], "end": [5, 12], "pause": 0 }] },

        //sarkaz swordsman
        { "number":20,"time": 135, "gap": 2, "enemies": "sarkaz swordsman", "line": true, "taunt": false, "count": 3, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 1], "pause": 0 }] },

        //sarkaz crossbowman
        { "number":21,"time": 152, "gap": 4, "enemies": "sarkaz crossbowman", "line": true, "taunt": true, "count": 2, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [5, 12], "pause": 0 }] },

        //sarkaz bladeweaver
        { "number":22,"time": 165, "gap": 10, "enemies": "sarkaz bladeweaver", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 4 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },
        //sarkaz greatswordsman
        { "number":23,"time": 167, "gap": 10, "enemies": "sarkaz greatswordsman", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //sarkaz swordsman
        { "number":24,"time": 193, "gap": 2, "enemies": "sarkaz swordsman", "line": true, "taunt": true, "count": 2, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 1], "pause": 0 }] },

        //sarkaz swordsman
        { "number":25,"time": 197, "gap": 2, "enemies": "sarkaz swordsman", "line": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },
        //sarkaz greatswordsman
        { "number":26,"time": 199, "gap": 10, "enemies": "sarkaz greatswordsman", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //sarkaz flagbearer
        {"number":27, "time": 210, "gap": 6, "enemies": "sarkaz sentinel", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 12], "pause": 0 }] },

        //sarkaz grudgebearer
        {"number":28, "time": 204, "gap": 6, "enemies": "sarkaz bladeweaver", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 12], "pause": 0 }] },

        //sarkaz bladeweaver
        { "number":29,"time": 200, "gap": 6, "enemies": "sarkaz bladeweaver", "line": true, "taunt": false, "count": 2, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 1], "pause": 0 }] },


    ],
    enemies: ["sarkaz sentinel", "sarkaz grudgebearer", "sarkaz greatswordsman", "sarkaz bladeweaver", "sarkaz crossbowman", "sarkaz swordsman"],


    layout: [["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"], ["bg", "bg", "bg", "bg", "bg", "g", "g", "g", "g", "bg", "bg", "bg", "bg"],
    ["bg", "blue", "blk", "blk", "blk", "blk", "r", "bg", "blk", "blk", "blk", "blk", "red"],
    ["bg", "bg", "bg", "r", "g", "r", "r", "bg", "bg", "g", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "r", "g", "r", "bg", "r", "bg", "g", "bg", "bg", "bg"],
    ["bg", "red", "blk", "blk", "blk", "blk", "r", "bg", "blk", "blk", "blk", "blk", "blue"],
    ["bg", "bg", "bg", "r", "r", "g", "g", "g", "g", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"]
    ],

    hazards : [],

}

levels["TEST"] = {
    level: "TEST",
    name: "Something",
    bgm: "ep7_1",
    initialdp: 40,
    squadlimit: 9,
    hp: 3,
    background: "loading_CB_center",
    description: "Testing ground",

    waves: [{"number":0, "time": 0, "gap": 5, "enemies": "guerrilla sniper", "line": false, "count": 1, "taunt": false, "start": [4, 5], "checkpoints": [{ "start": [4, 5], "end": [4, 5], "pause": 300 }]},
        {"number":1, "time": 0, "gap": 5, "enemies": "guerrilla hound pro", "line": false, "count": 1, "taunt": false, "start": [3, 6], "checkpoints": [{ "start": [3, 6], "end": [3, 6], "pause": 300 }] },
        {"number":2, "time": 0, "gap": 5, "enemies": "guerrilla fighter leader", "line": true, "taunt": false, "count": 1, "start": [7, 10], "checkpoints": [{ "start": [7, 10], "end": [7, 2], "pause": 5 }, { "start": [7, 2], "end": [7, 10], "pause": 5 }, { "start": [7, 10], "end": [7, 2], "pause": 5 }, { "start": [7, 2], "end": [7, 10], "pause": 5 }, { "start": [7, 10], "end": [7, 0], "pause": 0 }] },
        {"number":3, "time": 10, "gap": 5, "enemies": "guerrilla herald", "line": true, "taunt": false, "count": 1, "start": [7, 12], "checkpoints": [{ "start": [7, 12], "end": [7, 11], "pause": 19 }, { "start": [7, 11], "end": [7, 0], "pause": 0 }] },
        { "number":4,"time": 30, "gap": 5, "enemies": "guerrilla herald leader", "line": false, "taunt": false, "count": 1, "start": [7, 12], "checkpoints": [{ "start": [7, 12], "end": [7, 11], "pause": 100 }, { "start": [7, 11], "end": [7, 0], "pause": 0 }] },
],

    enemies: ["guerrilla sniper","guerrilla fighter leader","guerrilla hound pro","guerrilla herald","guerrilla herald leader"],
    hazards : ["altar"],

    layout: [["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"], ["blue", "g", "g", "g", "g", "g", "g", "g", "g", "g", "g", "blk", "red"],
    ["bg", "bg", "bg", "bg", "r", "r", "bg", "bg", "r", "r", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "g", "g", "g", "g", "bg", "bg", "bg", "bg"],
    ["red", "blk", "g", "bg", "g", "g", "g", "r", "g", "g", "bg", "bg", "bg"],
    ["bg", "bg", "g", "g", "g", "r", "altar", "bg", "r", "g", "g", "g", "blue"],
    ["bg", "bg", "r", "r", "r", "bg", "bg", "bg", "bg", "r", "r", "bg", "bg"],
    ["blue", "g", "g", "g", "g", "g", "g", "g", "g", "g", "g", "blk", "red"]
    ],
}
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
        { "time": 1, "gap": 5, "enemies": "sarkaz grudgebearer", "line": true, "taunt": false, "count": 1, "start": [1, 8], "checkpoints": [{ "start": [1, 8], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [1, 8], "pause": 0 }, { "start": [1, 8], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [1, 8], "pause": 0 }, { "start": [1, 8], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [1, 8], "pause": 0 }, { "start": [1, 8], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [1, 8], "pause": 0 }, { "start": [1, 8], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [2, 1], "pause": 0 }] },
        { "time": 1, "gap": 10, "enemies": "sarkaz bladeweaver", "line": true, "taunt": false, "count": 1, "start": [3, 9], "checkpoints": [{ "start": [3, 9], "end": [3, 9], "pause": 150 }, { "start": [3, 9], "end": [6, 7], "pause": 0 }, { "start": [6, 7], "end": [2, 1], "pause": 0 }] },
        { "time": 1, "gap": 10, "enemies": "sarkaz bladeweaver", "line": false, "taunt": false, "count": 1, "start": [4, 9], "checkpoints": [{ "start": [4, 9], "end": [4, 9], "pause": 150 }, { "start": [4, 9], "end": [6, 7], "pause": 0 }, { "start": [6, 7], "end": [2, 1], "pause": 0 }] },

        //sarkaz swordsman
        { "time": 5, "gap": 10, "enemies": "sarkaz swordsman", "line": true, "taunt": true, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 4 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },
        //sarkaz swordsman
        { "time": 8, "gap": 10, "enemies": "sarkaz swordsman", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },
        //sarkaz greatswordsman
        { "time": 13, "gap": 2, "enemies": "sarkaz swordsman", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //sarkaz swordsman
        { "time": 33, "gap": 1, "enemies": "sarkaz swordsman", "line": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },
        //sarkaz greatswordsman
        { "time": 35, "gap": 10, "enemies": "sarkaz greatswordsman", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //sarkaz swordsman
        { "time": 45, "gap": 2, "enemies": "sarkaz swordsman", "line": true, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [1, 7], "pause": 0 }, { "start": [1, 7], "end": [5, 12], "pause": 0 }] },

        //sarkaz bladeweaver
        { "time": 59, "gap": 10, "enemies": "sarkaz bladeweaver", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 4 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },

        //sarkaz crossbowman
        { "time": 60, "gap": 6, "enemies": "sarkaz crossbowman", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 12], "pause": 0 }] },

        //sarkaz bladeweaver
        { "time": 61, "gap": 10, "enemies": "sarkaz bladeweaver", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //sarkaz swordsman
        { "time": 77, "gap": 2, "enemies": "sarkaz swordsman", "line": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },

        //sarkaz greatswordsman
        { "time": 79, "gap": 10, "enemies": "sarkaz greatswordsman", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //sarkaz sentinel
        { "time": 86, "gap": 10, "enemies": "sarkaz sentinel", "line": true, "taunt": false, "count": 1, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [5, 12], "pause": 0 }] },

        //sarkaz swordsman
        { "time": 89, "gap": 2, "enemies": "sarkaz swordsman", "line": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },

        //sarkaz greatswordsman
        { "time": 91, "gap": 10, "enemies": "sarkaz greatswordsman", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //sarkaz swordsman
        { "time": 115, "gap": 2, "enemies": "sarkaz swordsman", "line": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },

        //sarkaz crossbowman
        { "time": 117, "gap": 6, "enemies": "sarkaz crossbowman", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 12], "pause": 0 }] },

        //sarkaz swordsman
        { "time": 135, "gap": 2, "enemies": "sarkaz swordsman", "line": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [1, 7], "pause": 0 }, { "start": [1, 7], "end": [5, 12], "pause": 0 }] },

        //sarkaz swordsman
        { "time": 135, "gap": 2, "enemies": "sarkaz swordsman", "line": true, "taunt": false, "count": 3, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 1], "pause": 0 }] },

        //sarkaz crossbowman
        { "time": 152, "gap": 4, "enemies": "sarkaz crossbowman", "line": true, "taunt": true, "count": 2, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [5, 12], "pause": 0 }] },

        //sarkaz bladeweaver
        { "time": 165, "gap": 10, "enemies": "sarkaz bladeweaver", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 4 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },
        //sarkaz greatswordsman
        { "time": 167, "gap": 10, "enemies": "sarkaz greatswordsman", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //sarkaz swordsman
        { "time": 193, "gap": 2, "enemies": "sarkaz swordsman", "line": true, "taunt": true, "count": 2, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 1], "pause": 0 }] },

        //sarkaz swordsman
        { "time": 197, "gap": 2, "enemies": "sarkaz swordsman", "line": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },
        //sarkaz greatswordsman
        { "time": 199, "gap": 10, "enemies": "sarkaz greatswordsman", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //sarkaz flagbearer
        { "time": 210, "gap": 6, "enemies": "sarkaz sentinel", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 12], "pause": 0 }] },

        //sarkaz grudgebearer
        { "time": 204, "gap": 6, "enemies": "sarkaz bladeweaver", "line": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 12], "pause": 0 }] },

        //sarkaz bladeweaver
        { "time": 200, "gap": 6, "enemies": "sarkaz bladeweaver", "line": true, "taunt": false, "count": 2, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 1], "pause": 0 }] },


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
}

levels["TEST"] = {
    level: "TEST",
    name: "Something",
    bgm: "ep7_1",
    initialdp: 40,
    squadlimit: 9,
    hp: 3,
    background: "loading_CB_center",
    description: "Dogs",

    waves: [{ "time": 5, "gap": 5, "enemies": "guerrilla hound pro", "line": true, "taunt": true, "count": 6, "start": [4, 0], "checkpoints": [{ "start": [4, 0], "end": [5, 12], "pause": 0 }] },
    { "time": 5.2, "gap": 5, "enemies": "guerrilla hound", "line": false, "count": 6, "taunt": false, "start": [4, 0], "checkpoints": [{ "start": [4, 0], "end": [5, 12], "pause": 0 }] },
    { "time": 0, "gap": 5, "enemies": "guerrilla sniper", "line": true, "taunt": false, "count": 1, "start": [1, 10], "checkpoints": [{ "start": [1, 10], "end": [1, 2], "pause": 5 }, { "start": [1, 2], "end": [1, 10], "pause": 5 }, { "start": [1, 10], "end": [1, 2], "pause": 5 }, { "start": [1, 2], "end": [1, 10], "pause": 5 }, { "start": [1, 10], "end": [1, 0], "pause": 0 }] },
    { "time": 0, "gap": 5, "enemies": "guerrilla sniper leader", "line": true, "taunt": false, "count": 1, "start": [7, 10], "checkpoints": [{ "start": [7, 10], "end": [7, 2], "pause": 5 }, { "start": [7, 2], "end": [7, 10], "pause": 5 }, { "start": [7, 10], "end": [7, 2], "pause": 5 }, { "start": [7, 2], "end": [7, 10], "pause": 5 }, { "start": [7, 10], "end": [7, 0], "pause": 0 }] },
    { "time": 20, "gap": 5, "enemies": "guerrilla siegebreaker", "line": true, "taunt": false, "count": 1, "start": [7, 10], "checkpoints": [{ "start": [7, 10], "end": [7, 2], "pause": 5 }, { "start": [7, 2], "end": [7, 10], "pause": 5 }, { "start": [7, 10], "end": [7, 2], "pause": 5 }, { "start": [7, 2], "end": [7, 10], "pause": 5 }, { "start": [7, 10], "end": [7, 0], "pause": 0 }] },
    { "time": 20, "gap": 5, "enemies": "guerrilla siegebreaker leader", "line": true, "taunt": false, "count": 1, "start": [1, 10], "checkpoints": [{ "start": [1, 10], "end": [1, 2], "pause": 5 }, { "start": [1, 2], "end": [1, 10], "pause": 5 }, { "start": [1, 10], "end": [1, 2], "pause": 5 }, { "start": [1, 2], "end": [1, 10], "pause": 5 }, { "start": [1, 10], "end": [1, 0], "pause": 0 }] },

],

    enemies: ["guerrilla hound pro","guerrilla hound","guerrilla sniper","guerrilla sniper leader","guerrilla siegebreaker","guerrilla siegebreaker leader"],

    layout: [["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"], ["blue", "g", "g", "g", "g", "g", "g", "g", "g", "g", "g", "blk", "red"],
    ["bg", "bg", "bg", "bg", "r", "r", "bg", "bg", "r", "r", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "g", "g", "g", "g", "bg", "bg", "bg", "bg"],
    ["red", "blk", "g", "bg", "g", "g", "r", "r", "g", "g", "bg", "bg", "bg"],
    ["bg", "bg", "g", "g", "g", "r", "bg", "bg", "r", "g", "g", "g", "blue"],
    ["bg", "bg", "r", "r", "r", "bg", "bg", "bg", "bg", "r", "r", "bg", "bg"],
    ["blue", "g", "g", "g", "g", "g", "g", "g", "g", "g", "g", "blk", "red"]
    ],
}
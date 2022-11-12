var levels = {}
levels["AMOGUS-1"] = {
    level: "AMOGUS-1",
    name: "Bread in french",
    initialdp: 10,
    squadlimit: 8,
    hp: 3,
    bgm: "dm_2",
    background: "loading4",
    description: "OooooOHOO OOO\n\n YOU WANT TO GAMING SO BADLY\n",
    place:"CB",

    waves: [
        {"number":0, "time": 1, "gap": 5, "enemies": "Sarkaz Grudgebearer", "line": true, "tooltip": false, "taunt": false, "count": 1, "start": [1, 8], "checkpoints": [{ "start": [1, 8], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [1, 8], "pause": 0 }, { "start": [1, 8], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [1, 8], "pause": 0 }, { "start": [1, 8], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [1, 8], "pause": 0 }, { "start": [1, 8], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [1, 8], "pause": 0 }, { "start": [1, 8], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [2, 1], "pause": 0 }] },
        { "number":1,"time": 1, "gap": 10, "enemies": "Sarkaz Bladeweaver", "line": true, "tooltip": false, "taunt": false, "count": 1, "start": [3, 9], "checkpoints": [{ "start": [3, 9], "end": [3, 9], "pause": 150 }, { "start": [3, 9], "end": [6, 7], "pause": 0 }, { "start": [6, 7], "end": [2, 1], "pause": 0 }] },
        { "number":2,"time": 1, "gap": 10, "enemies": "Sarkaz Bladeweaver", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [4, 9], "checkpoints": [{ "start": [4, 9], "end": [4, 9], "pause": 150 }, { "start": [4, 9], "end": [6, 7], "pause": 0 }, { "start": [6, 7], "end": [2, 1], "pause": 0 }] },

        //Sarkaz Swordsman
        { "number":3,"time": 5, "gap": 10, "enemies": "Sarkaz Swordsman", "line": true, "tooltip": false, "taunt": true, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 4 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },
        //Sarkaz Swordsman
        { "number":4,"time": 8, "gap": 10, "enemies": "Sarkaz Swordsman", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },
        //Sarkaz Greatswordsman
        {"number":5, "time": 13, "gap": 2, "enemies": "Sarkaz Swordsman", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Swordsman
        { "number":6,"time": 33, "gap": 1, "enemies": "Sarkaz Swordsman", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },
        //Sarkaz Greatswordsman
        {"number":7, "time": 35, "gap": 10, "enemies": "Sarkaz Greatswordsman", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Swordsman
        {"number":8, "time": 45, "gap": 2, "enemies": "Sarkaz Swordsman", "line": true, "tooltip": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [1, 7], "pause": 0 }, { "start": [1, 7], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Bladeweaver
        { "number":9,"time": 59, "gap": 10, "enemies": "Sarkaz Bladeweaver", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 4 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Crossbowman
        { "number":10,"time": 60, "gap": 6, "enemies": "Sarkaz Crossbowman", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Bladeweaver
        { "number":11,"time": 61, "gap": 10, "enemies": "Sarkaz Bladeweaver", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Swordsman
        { "number":12,"time": 77, "gap": 2, "enemies": "Sarkaz Swordsman", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Greatswordsman
        {"number":13, "time": 79, "gap": 10, "enemies": "Sarkaz Greatswordsman", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Sentinel
        {"number":14, "time": 86, "gap": 10, "enemies": "Sarkaz Sentinel", "line": true, "tooltip": false, "taunt": false, "count": 1, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Swordsman
        { "number":15,"time": 89, "gap": 2, "enemies": "Sarkaz Swordsman", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Greatswordsman
        { "number":16,"time": 91, "gap": 10, "enemies": "Sarkaz Greatswordsman", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Swordsman
        { "number":17,"time": 115, "gap": 2, "enemies": "Sarkaz Swordsman", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Crossbowman
        { "number":18,"time": 117, "gap": 6, "enemies": "Sarkaz Crossbowman", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Swordsman
        {"number":19, "time": 135, "gap": 2, "enemies": "Sarkaz Swordsman", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [1, 7], "pause": 0 }, { "start": [1, 7], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Swordsman
        { "number":20,"time": 135, "gap": 2, "enemies": "Sarkaz Swordsman", "line": true, "tooltip": false, "taunt": false, "count": 3, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 1], "pause": 0 }] },

        //Sarkaz Crossbowman
        { "number":21,"time": 152, "gap": 4, "enemies": "Sarkaz Crossbowman", "line": true, "tooltip": false, "taunt": true, "count": 2, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Bladeweaver
        { "number":22,"time": 165, "gap": 10, "enemies": "Sarkaz Bladeweaver", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 4 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },
        //Sarkaz Greatswordsman
        { "number":23,"time": 167, "gap": 10, "enemies": "Sarkaz Greatswordsman", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Swordsman
        { "number":24,"time": 193, "gap": 2, "enemies": "Sarkaz Swordsman", "line": true, "tooltip": false, "taunt": true, "count": 2, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 1], "pause": 0 }] },

        //Sarkaz Swordsman
        { "number":25,"time": 197, "gap": 2, "enemies": "Sarkaz Swordsman", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },
        //Sarkaz Greatswordsman
        { "number":26,"time": 199, "gap": 10, "enemies": "Sarkaz Greatswordsman", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //Sarkaz flagbearer
        {"number":27, "time": 210, "gap": 6, "enemies": "Sarkaz Sentinel", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Grudgebearer
        {"number":28, "time": 204, "gap": 6, "enemies": "Sarkaz Bladeweaver", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Bladeweaver
        { "number":29,"time": 200, "gap": 6, "enemies": "Sarkaz Bladeweaver", "line": true, "tooltip": false, "taunt": false, "count": 2, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 1], "pause": 0 }] },


    ],
    enemies: ["Sarkaz Sentinel", "Sarkaz Grudgebearer", "Sarkaz Greatswordsman", "Sarkaz Bladeweaver", "Sarkaz Crossbowman", "Sarkaz Swordsman"],
    tooltips: [],



    layout: [["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "g", "g", "g", "g", "bg", "bg", "bg", "bg"],
    ["bg", "blue", "blk", "blk", "blk", "blk", "r", "bg", "blk", "blk", "blk", "blk", "red"],
    ["bg", "bg", "bg", "r", "g", "r", "r", "bg", "bg", "g", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "r", "g", "r", "bg", "r", "bg", "g", "bg", "bg", "bg"],
    ["bg", "red", "blk", "blk", "blk", "blk", "r", "bg", "blk", "blk", "blk", "blk", "blue"],
    ["bg", "bg", "bg", "r", "r", "g", "g", "g", "g", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"]
    ],

    hazards : [],

}

levels["GUERRILLA-1"] = {
    level: "GUERRILLA-1",
    name: "Side by Side-1",
    bgm: "ep7_1",
    initialdp: 10,
    squadlimit: 8,
    hp: 3,
    background: "loading_CB_center",
    description: "The spearhead of Reunion's reconnaissance \nforce has appeared at the location where we\n established a concealed facility.\n Be careful, these are no ordinary Reunion grunts\n that we're dealing with.",
    place:"Plain",


    waves: [{"number":0, "time": 0, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": true, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 9], "pause": 155 },{ "start": [4, 9], "end": [4, 1], "pause": 0 }]},
    {"number":1, "time": 0, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 9], "pause": 156 },{ "start": [3, 9], "end": [4, 1], "pause": 0 }]},
    {"number":2, "time": 0, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 9], "pause": 158 },{ "start": [5, 9], "end": [4, 1], "pause": 0 }]},
    {"number":3, "time": 0, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [6, 9], "pause": 157 },{ "start": [6, 9], "end": [5, 1], "pause": 0 }]},
    {"number":4, "time": 0, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [2, 9], "pause": 161 },{ "start": [2, 9], "end": [3, 1], "pause": 0 }]},

    {"number":5, "time": 2, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 10], "pause": 162 },{ "start": [4, 9], "end": [4, 1], "pause": 0 }]},
    {"number":6, "time": 2, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 10], "pause": 163 },{ "start": [3, 9], "end": [4, 1], "pause": 0 }]},
    {"number":7, "time": 2, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 10], "pause": 165 },{ "start": [5, 9], "end": [4, 1], "pause": 0 }]},
    {"number":8, "time": 2, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [6, 10], "pause": 164 },{ "start": [6, 9], "end": [5, 1], "pause": 0 }]},
    {"number":9, "time": 2, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [2, 10], "pause": 166 },{ "start": [2, 9], "end": [3, 1], "pause": 0 }]},

    {"number":10, "time": 6, "gap": 5, "enemies": "Guerrilla Hound", "line": true, "tooltip": true, "count": 1, "taunt": true, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 1], "pause": 0 }]},
    {"number":11, "time": 9, "gap": 5, "enemies": "Guerrilla Hound", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 },{ "start": [5, 8], "end": [4, 1], "pause": 0 }]},
    {"number":12, "time": 14, "gap": 5, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 1], "pause": 0 }]},
    {"number":13, "time": 17, "gap": 4, "enemies": "Guerrilla Hound", "line": true, "tooltip": false, "count": 2, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [3, 1], "pause": 0 }]},
    {"number":14, "time": 26, "gap": 4, "enemies": "Guerrilla Hound", "line": true, "tooltip": false, "count": 2, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [5, 1], "pause": 0 }]},
    
    {"number":15, "time": 29, "gap": 5, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 1], "pause": 0 }]},
    {"number":16, "time": 29, "gap": 4, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [3, 1], "pause": 0 }]},
    {"number":17, "time": 34, "gap": 4, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [5, 1], "pause": 0 }]},
    {"number":18, "time": 34, "gap": 5, "enemies": "Guerrilla Hound", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [4, 1], "pause": 0 }]},
    {"number":19, "time": 38, "gap": 5, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 },{ "start": [5, 8], "end": [4, 1], "pause": 0 }]},
    {"number":20, "time": 41, "gap": 6, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 },{ "start": [5, 8], "end": [4, 1], "pause": 0 }]},
    {"number":21, "time": 45, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [4, 1], "pause": 0 }]},
    {"number":22, "time": 50, "gap": 6, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 },{ "start": [5, 8], "end": [4, 1], "pause": 0 }]},
    {"number":23, "time": 53, "gap": 6, "enemies": "Guerrilla Fighter", "line": true, "tooltip": false, "count": 3, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [6, 8], "pause": 0 },{ "start": [6, 8], "end": [4, 1], "pause": 0 }]},
    {"number":24, "time": 63, "gap": 6, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [6, 8], "pause": 0 },{ "start": [6, 8], "end": [4, 1], "pause": 0 }]},
    {"number":25, "time": 63, "gap": 7, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 1], "pause": 0 }]},
    {"number":26, "time": 67, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [3, 1], "pause": 0 }]},
    {"number":27, "time": 68, "gap": 5, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [4, 1], "pause": 0 }]},
    {"number":28, "time": 72, "gap": 6, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 },{ "start": [5, 8], "end": [4, 1], "pause": 0 }]},
    {"number":29, "time": 77, "gap": 4, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [5, 1], "pause": 0 }]},
    {"number":30, "time": 80, "gap": 4, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [3, 1], "pause": 0 }]},
    {"number":31, "time": 83, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [5, 1], "pause": 0 }]},
    {"number":32, "time": 92, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [3, 1], "pause": 0 }]},
    {"number":33, "time": 98, "gap": 4, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 1], "pause": 0 }]},
    {"number":34, "time": 105, "gap": 5, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 },{ "start": [5, 8], "end": [4, 1], "pause": 0 }]},
    {"number":35, "time": 113, "gap": 6, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [3, 1], "pause": 0 }]},
    {"number":36, "time": 116, "gap": 4, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [4, 1], "pause": 0 }]},
    {"number":37, "time": 122, "gap": 6, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 },{ "start": [5, 8], "end": [4, 1], "pause": 0 }]},
    {"number":38, "time": 123, "gap": 6, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [5, 1], "pause": 0 }]},
    {"number":39, "time": 128, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [3, 1], "pause": 0 }]},
    {"number":40, "time": 131, "gap": 3, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [4, 1], "pause": 0 }]},
    {"number":41, "time": 136, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 1], "pause": 0 }]},
    {"number":42, "time": 140, "gap": 6, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 },{ "start": [5, 8], "end": [4, 1], "pause": 0 }]},
    {"number":43, "time": 144, "gap": 6, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [5, 1], "pause": 0 }]},
    {"number":44, "time": 146, "gap": 3, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [5, 1], "pause": 0 }]},
    {"number":45, "time": 148, "gap": 2, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [3, 1], "pause": 0 }]},
    {"number":46, "time": 156, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [4, 1], "pause": 0 }]},
    {"number":47, "time": 159, "gap": 6, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [3, 1], "pause": 0 }]},
    {"number":48, "time": 162, "gap": 7, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 },{ "start": [5, 8], "end": [4, 1], "pause": 0 }]},
    {"number":49, "time": 166, "gap": 5, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [4, 1], "pause": 0 }]},
    {"number":50, "time": 168, "gap": 3, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [5, 1], "pause": 0 }]},
    {"number":51, "time": 169, "gap": 5, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 },{ "start": [5, 8], "end": [4, 1], "pause": 0 }]},
    {"number":52, "time": 172, "gap": 4, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 1], "pause": 0 }]},
    {"number":53, "time": 174, "gap": 3, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [5, 1], "pause": 0 }]},
    {"number":54, "time": 176, "gap": 4, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 },{ "start": [5, 8], "end": [4, 1], "pause": 0 }]},
    {"number":55, "time": 177, "gap": 3, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [3, 1], "pause": 0 }]},

],

    enemies: ["Guerrilla Hound","Guerrilla Fighter"],
    tooltips: ["Guerrilla Hound","Guerrilla Fighter"],

    hazards : [],


    layout: [["e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "e"],
    ["e","bg", "blk", "g", "g","g", "g", "g","g", "blk", "blk", "red","e"],
    ["e","blue", "blk", "r", "r","r", "bg", "g","g", "blk", "blk", "red","e"],
    ["e","blue", "blk", "g", "g","g", "g", "g","g", "blk", "blk", "red","e"],
    ["e","blue", "blk", "r", "r","r", "bg", "g","g", "blk", "blk", "red","e"],
    ["e","bg", "blk", "g", "g","g", "g", "g","g", "blk", "blk", "red","e"],
    ["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "e"],

    ],
}

levels["GUERRILLA-EX"] = {
    level: "GUERRILLA-EX",
    name: "Operation Shield Breaker",
    bgm: "patriot_2",
    initialdp: 10,
    squadlimit: 9,
    hp:3,
    background: "loading_CB_under",
    description: "The Aegis of the Infected is attacking us with all their might.\nUse everything you have to push them back!\n\n<Originium Altar> Periodically emits pulse waves\ndamaging both allied and enemy units.",
    place:"Plain",

    waves: [            
        {"number":1, "time": 2, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": true, "count": 1, "taunt": false, "start": [1, 10], "checkpoints": [{ "start": [1, 10], "end": [2, 10], "pause": 5 },{ "start": [2, 10], "end": [4, 9], "pause": 50 },{ "start": [4, 9], "end": [7, 7], "pause": 0 }]},
            {"number":2, "time": 13, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": true, "count": 1, "taunt": true, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [1, 7], "pause": 5 },{ "start": [1, 7], "end": [7, 7], "pause": 0 }]},
            {"number":3, "time": 16, "gap": 4, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": false, "count": 2, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [1, 5], "pause": 5 },{ "start": [1, 5], "end": [7, 5], "pause": 0 }]},
            {"number":4, "time": 19, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }]},
            {"number":5, "time": 20, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": true, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }]},
            {"number":6, "time": 25, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }]},
            {"number":7, "time": 25, "gap": 4, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }]},
            {"number":8, "time": 30, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }]},
            {"number":9, "time": 35, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 2], "checkpoints": [{ "start": [1, 2], "end": [2, 2], "pause": 5 },{ "start": [2, 2], "end": [3, 3], "pause": 40 },{ "start": [3, 3], "end": [7, 5], "pause": 0 }]},
            {"number":11, "time": 42, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }]},
            {"number":12, "time": 45, "gap": 5, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": true, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [1, 5], "pause": 10 },{ "start": [1, 5], "end": [7, 5], "pause": 0 }]},
            {"number":13, "time": 45, "gap": 5, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [1, 7], "pause": 12 },{ "start": [1, 7], "end": [7, 7], "pause": 0 }]},
            {"number":14, "time": 50, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }]},
            {"number":15, "time": 54, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }]},
           
            //patriot
            {"number":99, "time": 70, "gap": 3, "enemies": "Patriot", "line": true, "tooltip": true, "count": 1, "taunt": true, "start": [0, 6], "checkpoints": [{ "start": [0, 6], "end": [1, 6], "pause": 30 },{ "start": [1, 6], "end": [2, 9], "pause": 0 },{ "start": [2, 9], "end": [4, 10], "pause": 10 },{ "start": [4, 10], "end": [6, 7], "pause": 20 },{ "start": [6, 7], "end": [1, 7], "pause": 0 },{ "start": [1, 7], "end": [2, 3], "pause": 0 },
            { "start": [2, 3], "end": [2, 2], "pause": 0 },{ "start": [2, 2], "end": [6, 5], "pause": 20 },{ "start": [6, 5], "end": [2, 5], "pause": 0 },{ "start": [2, 5], "end": [2, 7], "pause": 0 },{ "start": [2, 7], "end": [7, 7], "pause": 0 }]},
            
            {"number":16, "time": 75, "gap": 3, "enemies": "Guerrilla Shieldguard Leader", "line": true, "tooltip": true, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [1, 5], "pause": 5 },{ "start": [1, 5], "end": [3, 3], "pause": 180 },{ "start": [3, 3], "end": [6, 5], "pause": 0 },{ "start": [6, 5], "end": [2, 6], "pause": 0 },{ "start": [2, 6], "end": [7, 7], "pause": 0 }]},
            {"number":17, "time": 75, "gap": 3, "enemies": "Guerrilla Shieldguard Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [1, 7], "pause": 5 },{ "start": [1, 7], "end": [2, 9], "pause": 0 },{ "start": [2, 9], "end": [4, 9], "pause": 180 },{ "start": [4, 9], "end": [6, 7], "pause": 0 },{ "start": [6, 7], "end": [2, 6], "pause": 0 },{ "start": [2, 6], "end": [7, 5], "pause": 0 }]},
            
            {"number":18, "time": 80, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }]},
            {"number":19, "time": 90, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [3, 7], "pause": 10 },{ "start": [3, 7], "end": [7, 7], "pause": 0 }]},
            {"number":20, "time": 93, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count":2, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }]},
            {"number":21, "time": 95, "gap": 7, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count":2, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }]},
            {"number":22, "time": 97, "gap": 6, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": true, "tooltip": true, "count":1, "taunt": false, "start": [1, 2], "checkpoints": [{ "start": [1, 2], "end": [1, 3], "pause": 5 },{ "start": [1, 3], "end": [7, 5], "pause": 0 }]},
            {"number":23, "time": 100, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }]},
            {"number":24, "time": 103, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }]},
            {"number":25, "time": 107, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [3, 5], "pause": 10 },{ "start": [3, 5], "end": [7, 5], "pause": 0 }]},
            {"number":26, "time": 117, "gap": 6, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count":1, "taunt": false, "start": [1, 2], "checkpoints": [{ "start": [1, 2], "end": [1, 3], "pause": 5 },{ "start": [1, 3], "end": [7, 5], "pause": 0 }]},
            {"number":27, "time": 117, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }]},
            {"number":28, "time": 120, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }]},
            {"number":29, "time": 125, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }]},
            {"number":30, "time": 128, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }]},
            {"number":31, "time": 134, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }]},
            {"number":32, "time": 137, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [3, 5], "pause": 10 },{ "start": [3, 5], "end": [7, 5], "pause": 0 }]},
            {"number":33, "time": 139, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [3, 7], "pause": 10 },{ "start": [3, 7], "end": [7, 7], "pause": 0 }]},
            {"number":34, "time": 141, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }]},
            {"number":35, "time": 149, "gap": 20, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count":2, "taunt": false, "start": [1, 2], "checkpoints": [{ "start": [1, 2], "end": [1, 3], "pause": 5 },{ "start": [1, 3], "end": [7, 5], "pause": 0 }]},
            {"number":36, "time": 154, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }]},
            {"number":37, "time": 154, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [1, 10], "checkpoints": [{ "start": [1, 10], "end": [2, 10], "pause": 10 },{ "start": [2, 10], "end": [6, 6], "pause": 10 },{ "start": [6, 6], "end": [7, 5], "pause": 0 }]},
            {"number":38, "time": 160, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }]},
            {"number":39, "time": 162, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }]},
            {"number":40, "time": 168, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }]},
            {"number":41, "time": 173, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }]},
            {"number":42, "time": 176, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }]},
            {"number":43, "time": 187, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }]},
            {"number":44, "time": 194, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }]},
            {"number":45, "time": 196, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }]},
            {"number":46, "time": 201, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 10], "checkpoints": [{ "start": [1, 10], "end": [2, 10], "pause":5 },{ "start": [2, 10], "end": [6, 6], "pause": 10 },{ "start": [6, 6], "end": [7, 5], "pause": 0 }]},
            {"number":47, "time": 206, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }]},
            {"number":48, "time": 208, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }]},
            {"number":50, "time": 213, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }]},
            {"number":52, "time": 216, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [3, 7], "pause": 10 },{ "start": [3, 7], "end": [7, 7], "pause": 0 }]},
            {"number":53, "time": 216, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [3, 5], "pause": 10 },{ "start": [3, 5], "end": [7, 5], "pause": 0 }]},
            {"number":54, "time": 221, "gap": 3, "enemies": "Guerrilla Siegebreaker Leader", "line": true, "tooltip": true, "count": 1, "taunt": false, "start": [4, 2], "checkpoints": [{ "start": [4, 2], "end": [4, 2], "pause": 20 },{ "start": [4, 2], "end": [6, 5], "pause": 0 },{ "start": [6, 5], "end": [2, 6], "pause": 0 },{ "start": [2, 6], "end": [7, 7], "pause": 0 }]},
            {"number":55, "time": 221, "gap": 3, "enemies": "Guerrilla Siegebreaker Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [4, 10], "checkpoints": [{ "start": [4, 10], "end": [4, 10], "pause": 20 },{ "start": [4, 10], "end": [6, 7], "pause": 0 },{ "start": [6, 7], "end": [2, 6], "pause": 0 },{ "start": [2, 6], "end": [7, 5], "pause": 0 }]},
            
            {"number":41, "time": 222, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }]},
            {"number":54, "time": 223, "gap": 3, "enemies": "Guerrilla Siegebreaker Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [3, 2], "checkpoints": [{ "start": [3, 2], "end": [3, 2], "pause": 25 },{ "start": [3, 2], "end": [2, 5], "pause": 0 },{ "start": [2, 5], "end": [7, 5], "pause": 0 }]},
            {"number":55, "time": 223, "gap": 3, "enemies": "Guerrilla Siegebreaker Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [3, 10], "checkpoints": [{ "start": [3, 10], "end": [3, 10], "pause": 25 },{ "start": [4, 10], "end":[2, 7], "pause": 0 },{ "start": [2, 7], "end": [7, 7], "pause": 0 }]},
            {"number":41, "time": 224, "gap": 4, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }]},
            {"number":41, "time": 226, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }]},
            {"number":37, "time": 229, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 8], "checkpoints": [{ "start": [6, 8], "end": [6, 8], "pause": 10 },{ "start": [6, 8], "end": [7, 5], "pause": 0 }]},
            {"number":37, "time": 231, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 9], "checkpoints": [{ "start": [6, 9], "end": [6, 9], "pause": 15 },{ "start": [6, 9], "end": [7, 5], "pause": 0 }]},
            {"number":26, "time": 235, "gap": 6, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count":1, "taunt": false, "start": [1, 2], "checkpoints": [{ "start": [1, 2], "end": [1, 3], "pause": 5 },{ "start": [1, 3], "end": [7, 5], "pause": 0 }]},

            {"number":37, "time": 239, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [1, 10], "checkpoints": [{ "start": [1, 10], "end": [2, 10], "pause": 5 },{ "start": [2, 10], "end": [6, 6], "pause": 10 },{ "start": [6, 6], "end": [7, 5], "pause": 0 }]},
            {"number":41, "time": 239, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }]},
            {"number":41, "time": 246, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }]},
            {"number":41, "time": 249, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }]},
            {"number":41, "time": 250, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }]},
            
            {"number":41, "time": 270, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 5], "checkpoints": [{ "start": [1, 5], "end": [1, 5], "pause": 5 },{ "start": [1, 5], "end": [7, 5], "pause": 0 }]},
            {"number":41, "time": 272, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 7], "checkpoints": [{ "start": [1, 7], "end": [1, 7], "pause": 6 },{ "start": [1, 7], "end": [7, 7], "pause": 0 }]},
        ],

    enemies: ["Guerrilla Hound Pro", "Guerrilla Herald Leader","Guerrilla Fighter Leader","Guerrilla Sniper Leader","Guerrilla Shieldguard Leader","Sarkaz Guerrilla Fighter Leader","Guerrilla Siegebreaker Leader","Patriot","Patriot2"],
    tooltips: ["Guerrilla Herald Leader","Guerrilla Hound Pro", "Guerrilla Fighter Leader","Guerrilla Sniper Leader","Guerrilla Shieldguard Leader","Sarkaz Guerrilla Fighter Leader","Guerrilla Siegebreaker Leader","Patriot"],

    hazards : ["altar"],


    // 13 width
    // 8 height
    layout: [["e","bg", "bg", "bg", "bg", "red", "red", "red", "bg", "bg", "bg", "bg", "e"],
    ["e", "bg", "red", "g", "g", "blk", "blk", "blk", "g", "g", "red", "bg", "e"],
    ["e","bg", "g", "g", "r","g", "g", "g","r", "g", "g", "bg","e"],

    ["e","bg", "g", "blk", "altar","g", "r", "g","g", "r", "g", "bg","e"],

    ["e","bg", "g", "r", "g","g", "r", "g","altar", "blk", "g", "bg","e"],

    ["e","bg", "g", "g", "r","g", "r", "g","r", "g", "g", "bg","e"],

    ["e","bg", "bg", "g", "g","blk", "g", "blk","g", "g", "bg", "bg","e"],

    ["e", "bg", "bg", "bg", "bg", "blue", "bg", "blue", "bg", "bg", "bg", "bg", "e"],

    ],
}

levels["KNIGHT-EX"] = {
    level: "KNIGHT-EX",
    name: "Dangerous Battlefield",
    bgm: "mn_2",
    initialdp: 20,
    squadlimit: 8,
    hp: 3,
    background: "loading_Kazimierz_Final",
    description: "The most dangerous competitions are usually the first ones to run out of tickets.\n"+
    "As such, it is advised to make arenas as hazardous as possible for maximum profit.\n\n"+
    "<Heated Path> Deals massive damage to any enemy or ally on it at intervals.\n"+
    "<Originium Ice Crystal> Periodically emits a frigid wave\n lowering the attack speed of affected allies.\n"+
    "<Originium Altar> Periodically emits pulse waves,\n damaging both allied and enemy units.",
    place:"CB",

    waves: [
        { "number":0,"time": 0, "gap": 5, "enemies": "Bloodboil Knightclub Elite", "line": false, "tooltip": true, "taunt": false, "count": 1, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 10], "pause": 90 },{ "start": [3, 10], "end": [1, 11], "pause": 0 }] },
        { "number":1,"time": 0, "gap": 5, "enemies": "Bloodboil Knightclub Elite", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 10], "pause": 90 },{ "start": [4, 10], "end": [6, 11], "pause": 0 }] },
        
        //tytus
        { "number":2,"time": 5, "gap": 5, "enemies": "Tytus Topola", "line": true, "tooltip": true, "taunt": false, "count": 1, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [3, 1], "pause": 200 },{ "start": [3, 1], "end": [2, 2], "pause": 0 },{ "start": [2, 2], "end": [1, 11], "pause": 0 }] },

        { "number":3,"time": 13, "gap": 5, "enemies": "Vicious Training Gloompincer", "line": true, "tooltip": true, "taunt": true, "count": 1, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [6, 11], "pause": 0 }] },
        { "number":4,"time": 23, "gap": 8, "enemies": "Vicious Training Gloompincer", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [6, 11], "pause": 0 }] },
        { "number":5,"time": 35, "gap": 4, "enemies": "Vicious Training Gloompincer", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [6, 11], "pause": 0 }] },

        { "number":6,"time": 35, "gap": 20, "enemies": "Roar Knightclub Elite", "line": true, "tooltip": true, "taunt": false, "count": 2, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [1, 11], "pause": 0 }] },
        { "number":7,"time": 35, "gap": 20, "enemies": "Roar Knightclub Elite", "line": true, "tooltip": false, "taunt": false, "count": 2, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [6, 11], "pause": 0 }] },
        { "number":5,"time": 45, "gap": 4, "enemies": "Vicious Training Gloompincer", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [6, 11], "pause": 0 }] },
        { "number":1,"time": 53, "gap": 20, "enemies": "Roar Knightclub Elite", "line": true, "tooltip": false, "taunt": false, "count": 2, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 11], "pause": 0 }] },
        { "number":5,"time": 66, "gap": 4, "enemies": "Vicious Training Gloompincer", "line": false, "tooltip": false, "taunt": false, "count": 3, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [6, 11], "pause": 0 }] },
        { "number":1,"time": 80, "gap": 20, "enemies": "Elite Knight Shielder", "line": false, "tooltip": true, "taunt": false, "count": 1, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 11], "pause": 0 }] },
        { "number":6,"time": 110, "gap": 45, "enemies": "Elite Knight Shielder", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [1, 11], "pause": 0 }] },
        { "number":7,"time": 110, "gap": 45, "enemies": "Elite Knight Shielder", "line": false, "tooltip": false, "taunt": true, "count": 2, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [6, 11], "pause": 0 }] },
        { "number":5,"time": 123, "gap": 4, "enemies": "Vicious Training Gloompincer", "line": false, "tooltip": false, "taunt": false, "count": 4, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [6, 11], "pause": 0 }] },
        { "number":6,"time": 128, "gap": 20, "enemies": "Roar Knightclub Elite", "line": false, "tooltip": false, "taunt": false, "count": 5, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [1, 11], "pause": 0 }] },
        { "number":7,"time": 128, "gap": 20, "enemies": "Roar Knightclub Elite", "line": false, "tooltip": false, "taunt": true, "count": 5, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [6, 11], "pause": 0 }] },
        { "number":0,"time": 140, "gap": 5, "enemies": "Bloodboil Knightclub Elite", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 10], "pause": 60 },{ "start": [3, 10], "end": [1, 11], "pause": 0 }] },
        { "number":1,"time": 140, "gap": 5, "enemies": "Bloodboil Knightclub Elite", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 10], "pause": 60 },{ "start": [4, 10], "end": [6, 11], "pause": 0 }] },
        { "number":5,"time": 135, "gap": 3, "enemies": "Vicious Training Gloompincer", "line": false, "tooltip": false, "taunt": false, "count": 4, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [6, 11], "pause": 0 }] },
        { "number":1,"time": 140, "gap": 30, "enemies": "Elite Knight Shielder", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 11], "pause": 0 }] },
        { "number":5,"time": 160, "gap": 3, "enemies": "Vicious Training Gloompincer", "line": false, "tooltip": false, "taunt": false, "count": 4, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [6, 11], "pause": 0 }] },
        { "number":5,"time": 180, "gap": 3, "enemies": "Elite Knight Shielder", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [6, 11], "pause": 0 }] },
        { "number":5,"time": 190, "gap": 3, "enemies": "Vicious Training Gloompincer", "line": false, "tooltip": false, "taunt": false, "count": 4, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [6, 11], "pause": 0 }] },
    ],

    enemies: ["Bloodboil Knightclub Elite","Elite Knight Shielder","Roar Knightclub Elite","Vicious Training Gloompincer","Tytus Topola","Tytus Topola2"],
    tooltips: ["Bloodboil Knightclub Elite","Elite Knight Shielder","Roar Knightclub Elite","Vicious Training Gloompincer","Tytus Topola"],
    hazards : ["altar","icealtar"],

    layout: [
    [ "bg","bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg",],
    ["bg","red", "blk", "blk", "magma", "blk", "magma",  "magma", "blk", "magma", "blk", "blue","bg"],
    [ "bg","blk", "g", "blk", "r", "altar", "r",  "r", "icealtar", "r", "bg", "bg","bg"],
    [ "bg","blk", "r", "blk", "g", "g", "g",  "g", "g", "blk", "blk", "red","bg"],
    [ "bg","blk", "r", "blk", "g", "g", "g",  "g", "g", "blk", "blk", "red","bg"],
    ["bg", "blk", "g", "blk", "r", "altar",  "r", "r", "icealtar", "r", "bg", "bg","bg"],
    ["bg", "red", "blk", "blk", "magma", "blk",  "magma", "magma", "blk", "magma", "blk", "blue","bg"],
    [ "bg","bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg",],
    ],
}

levels["POSSESSED-EX"] = {
    level: "POSSESSED-EX",
    name: "Rage",
    bgm: "epm8_1",
    initialdp: 0,
    squadlimit: 9,
    hp: 3,
    background: "loading_graduate",
    description: "Put them out of their misery.\n\n"+
    "<Active Originium> Allies deployed on it and enemies who have passed it\nwill take constant damage,\nbut their ATK and Attack Speed will be increased significantly.",
    place:"Plain",

    waves: [
    //{ "number":1,"time": 0, "gap": 15, "enemies": "Mephisto", "line": true, "tooltip": true, "taunt": false, "count": 1, "start": [3, 12], "checkpoints": [{ "start": [3, 12], "end": [3, 11], "pause": 100 },{ "start": [3, 11], "end": [3, 0], "pause": 0 }] },
    { "number":1,"time": 0, "gap": 15, "enemies": "Sarkaz Centurion Nidus Guard", "line": false, "tooltip": true, "taunt": false, "count": 1, "start": [1, 2], "checkpoints": [{ "start": [1, 2], "end": [1, 2], "pause": 120 },{ "start": [1, 2], "end": [6, 2], "pause": 10 },{ "start": [6, 2], "end": [3, 0], "pause": 0 }] },
    { "number":1,"time": 0, "gap": 15, "enemies": "Sarkaz Centurion Nidus Guard", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [1, 3], "checkpoints": [{ "start": [1, 3], "end": [1, 3], "pause": 180 },{ "start": [1, 3], "end": [6, 2], "pause": 10 },{ "start": [6, 2], "end": [3, 0], "pause": 0 }] },
    { "number":2,"time": 0, "gap": 15, "enemies": "Sarkaz Centurion Nidus Guard", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [1, 7], "checkpoints": [{ "start": [1, 7], "end": [1, 7], "pause": 180 },{ "start": [1, 7], "end": [6, 8], "pause": 0 },{ "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },

    { "number":4,"time": 10, "gap": 12, "enemies": "Possessed Soldier Leader", "line": true, "tooltip": true, "taunt": true, "count": 3, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 8], "pause": 0 },{ "start": [2, 8], "end": [6, 8], "pause": 0 },{ "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },
    { "number":4,"time": 11, "gap": 12, "enemies": "Possessed Soldier Leader", "line": false, "tooltip": false, "taunt": false, "count": 3, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 8], "pause": 0 },{ "start": [2, 8], "end": [6, 8], "pause": 0 },{ "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },

    { "number":4,"time": 17, "gap": 12, "enemies": "Possessed Soldier Leader", "line": false, "tooltip": false, "taunt": false, "count": 3, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 8], "pause": 0 },{ "start": [2, 8], "end": [6, 8], "pause": 0 },{ "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },


    { "number":4,"time": 13, "gap": 12, "enemies": "Possessed Soldier Leader", "line": true, "tooltip": false, "taunt": false, "count": 3, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 8], "pause": 0 },{ "start": [4, 8], "end": [3, 0], "pause": 0 }] },
    { "number":4,"time": 14, "gap": 12, "enemies": "Possessed Soldier Leader", "line": false, "tooltip": false, "taunt": false, "count": 3, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 8], "pause": 0 },{ "start": [4, 8], "end": [3, 0], "pause": 0 }] },

    { "number":4,"time": 20, "gap": 12, "enemies": "Possessed Soldier Leader", "line": false, "tooltip": false, "taunt": false, "count": 3, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 8], "pause": 0 },{ "start": [4, 8], "end": [3, 0], "pause": 0 }] },


    { "number":4,"time": 20, "gap": 10, "enemies": "Possessed Veteran Junkman", "line": true, "tooltip": true, "taunt": false, "count": 3, "start": [3, 12], "checkpoints": [{ "start": [3, 12], "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [3, 0], "pause": 0 }] },


    { "number":4,"time": 50, "gap": 6, "enemies": "Enraged Possessed Soldier", "line": false, "tooltip": true, "taunt": false, "count": 1, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 11], "pause": 5 },{ "start": [2, 11], "end": [2, 8], "pause": 0 },{ "start": [2, 8], "end": [6, 8], "pause": 0 },{ "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },
    { "number":4,"time": 50, "gap": 6, "enemies": "Enraged Possessed Soldier", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [3, 12], "checkpoints": [{ "start": [3, 12], "end": [3, 11], "pause": 5 },{ "start": [3, 11], "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [3, 0], "pause": 0 }] },
    { "number":4,"time": 50, "gap": 6, "enemies": "Enraged Possessed Soldier", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 11], "pause": 5 },{ "start": [4, 11], "end": [4, 8], "pause": 0 },{ "start": [4, 8], "end": [3, 0], "pause": 0 }] },

    { "number":0,"time": 55, "gap": 30, "enemies": "Enraged Possessed Thrower", "line": true, "tooltip": true, "taunt": false, "count": 3, "start": [1, 11], "checkpoints": [{ "start": [1, 11], "end": [1, 8], "pause": 0 },{ "start": [1, 8], "end": [6, 8], "pause": 0 },{ "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },

    { "number":4,"time": 65, "gap": 6, "enemies": "Possessed Defender Leader", "line": false, "tooltip": true, "taunt": false, "count": 1, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 9], "pause": 15 },{ "start": [2, 9], "end": [2, 8], "pause": 0 },{ "start": [2, 8], "end": [6, 8], "pause": 0 },{ "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },
    { "number":4,"time": 65, "gap": 6, "enemies": "Possessed Defender Leader", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 9], "pause": 55 },{ "start": [4, 9], "end": [4, 8], "pause": 0 },{ "start": [4, 8], "end": [3, 0], "pause": 0 }] },
   
    { "number":4,"time": 67, "gap": 6, "enemies": "Possessed Defender Leader", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 10], "pause": 95 },{ "start": [2, 10], "end": [2, 8], "pause": 0 },{ "start": [2, 8], "end": [6, 8], "pause": 0 },{ "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },
    { "number":4,"time": 67, "gap": 6, "enemies": "Possessed Defender Leader", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 10], "pause": 115 },{ "start": [4, 10], "end": [4, 8], "pause": 0 },{ "start": [4, 8], "end": [3, 0], "pause": 0 }] },

    { "number":4,"time": 72, "gap": 6, "enemies": "Mephisto", "line": true, "tooltip": true, "taunt": false, "count": 1, "start": [3, 12], "checkpoints": [{ "start": [3, 12], "end": [3, 11], "pause": 40 },{ "start": [3, 11], "end": [5, 11], "pause": 5 },{ "start": [5, 11], "end": [3, 0], "pause": 0 }] },

    //part 2
    { "number":4,"time": 90, "gap": 30, "enemies": "Possessed Soldier Leader", "line": false, "tooltip": false, "taunt": true, "count": 2, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 8], "pause": 0 },{ "start": [2, 8], "end": [6, 8], "pause": 0 },{ "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },
    { "number":4,"time": 91, "gap": 30, "enemies": "Possessed Soldier Leader", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 8], "pause": 0 },{ "start": [2, 8], "end": [6, 8], "pause": 0 },{ "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },

    { "number":4,"time": 106, "gap": 30, "enemies": "Possessed Soldier Leader", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 8], "pause": 0 },{ "start": [2, 8], "end": [6, 8], "pause": 0 },{ "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },


    { "number":4,"time": 93, "gap": 30, "enemies": "Possessed Soldier Leader", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 8], "pause": 0 },{ "start": [4, 8], "end": [3, 0], "pause": 0 }] },
    { "number":4,"time": 94, "gap": 30, "enemies": "Possessed Soldier Leader", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 8], "pause": 0 },{ "start": [4, 8], "end": [3, 0], "pause": 0 }] },

    { "number":4,"time": 109, "gap": 30, "enemies": "Possessed Soldier Leader", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 8], "pause": 0 },{ "start": [4, 8], "end": [3, 0], "pause": 0 }] },

    { "number":4,"time": 100, "gap": 21, "enemies": "Possessed Veteran Junkman", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [3, 12], "checkpoints": [{ "start": [3, 12], "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [3, 0], "pause": 0 }] },

    { "number":1,"time": 120, "gap": 15, "enemies": "Enraged Possessed Leader", "line": true, "tooltip": true, "taunt": false, "count": 1, "start": [6, 12], "checkpoints": [{ "start": [6, 12], "end": [6, 11], "pause": 30 },{ "start": [6, 11], "end": [3, 0], "pause": 0 }] },

    { "number":0,"time": 130, "gap": 50, "enemies": "Enraged Possessed Bonethrower", "line": false, "tooltip": true, "taunt": false, "count": 1, "start": [1, 11], "checkpoints": [{ "start": [1, 11], "end": [1, 8], "pause": 0 },{ "start": [1, 8], "end": [6, 8], "pause": 0 },{ "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },


    { "number":4,"time": 160, "gap": 21, "enemies": "Possessed Veteran Junkman", "line": false, "tooltip": false, "taunt": true, "count": 3, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 8], "pause": 0 },{ "start": [2, 8], "end": [6, 8], "pause": 0 },{ "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },

    { "number":4,"time": 163, "gap": 21, "enemies": "Possessed Veteran Junkman", "line": false, "tooltip": false, "taunt": false, "count": 3, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 8], "pause": 0 },{ "start": [4, 8], "end": [3, 0], "pause": 0 }] },

    { "number":4,"time": 170, "gap": 21, "enemies": "Possessed Veteran Junkman", "line": false, "tooltip": false, "taunt": false, "count": 3, "start": [3, 12], "checkpoints": [{ "start": [3, 12], "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [3, 0], "pause": 0 }] },

    { "number":1,"time": 200, "gap": 15, "enemies": "Enraged Possessed Leader", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [6, 12], "checkpoints": [{ "start": [6, 12], "end": [6, 11], "pause": 0 },{ "start": [6, 11], "end": [3, 0], "pause": 0 }] },

],

    enemies: ["Enraged Possessed Thrower","Possessed Soldier Leader","Possessed Defender Leader","Possessed Veteran Junkman","Enraged Possessed Bonethrower","Enraged Possessed Soldier","Enraged Possessed Leader","Mephisto","Sarkaz Centurion Nidus Guard"],
    tooltips: ["Enraged Possessed Thrower","Possessed Soldier Leader","Possessed Defender Leader","Possessed Veteran Junkman","Enraged Possessed Bonethrower","Enraged Possessed Soldier","Enraged Possessed Leader","Mephisto","Sarkaz Centurion Nidus Guard"],
    hazards : [],

    layout: [[ "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg","bg","bg"],
    [ "bg", "bg", "blk", "blk", "r", "r", "r", "blk", "blk","blk","blk", "red", "bg"],
    [ "bg", "bg", "blk", "bg", "bg", "bg", "r", "r", "g", "blk","blk","blk", "red"],
    [ "blue", "blk", "g", "bg", "bg", "bg", "r", "r", "g", "blk","blk","blk", "red"],
    [ "blue", "blk", "g", "g", "r", "r", "r", "r", "g", "blk","blk","blk", "red"],
    ["bg", "bg", "g", "g", "r", "g", "r", "g", "blood", "r", "r","blk","bg"],
    [ "bg", "bg", "g", "blk", "blk", "g", "blk", "blk", "g", "g","blk","blk","red" ],
    ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg","bg","bg", "bg"]
    ],
}
/*
levels["TEST"] = {
    level: "TEST",
    name: "Title",
    bgm: "ep7_2",
    initialdp: 40,
    squadlimit: 9,
    hp: 3,
    background: "loading_CB_under",
    description: "Sussy",
    place:"Plain",

    waves: [{"number":0, "time": 0, "gap": 5, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 4], "checkpoints": [{ "start": [4, 4], "end": [4, 4], "pause": 300 }]},
        { "number":4,"time": 30, "gap": 5, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": true, "taunt": false, "count": 1, "start": [7, 12], "checkpoints": [{ "start": [7, 12], "end": [7, 11], "pause": 200 }, { "start": [7, 11], "end": [7, 0], "pause": 0 }] },
       
        {"number":3, "time": 10, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": true, "tooltip": false, "taunt": false, "count": 1, "start": [7, 12], "checkpoints": [{ "start": [7, 12], "end": [7, 11], "pause": 19 }, { "start": [7, 11], "end": [7, 0], "pause": 0 }] },
        {"number":2, "time": 0, "gap": 5, "enemies": "Patriot", "line": false, "tooltip": true, "taunt": false, "count": 1, "start": [7, 10], "checkpoints": [{ "start": [7, 10], "end": [7, 2], "pause": 300 }, { "start": [7, 2], "end": [7, 10], "pause": 5 }, { "start": [7, 10], "end": [7, 2], "pause": 5 }, { "start": [7, 2], "end": [7, 10], "pause": 300 }, { "start": [7, 10], "end": [7, 0], "pause": 0 }] },

    ],

    enemies: ["Patriot","Patriot2","Guerrilla Siegebreaker Leader","Sarkaz Guerrilla Fighter Leader"],
    tooltips: ["Patriot","Guerrilla Siegebreaker Leader"],
    hazards : ["altar"],

    layout: [["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"], ["blue", "g", "g", "g", "g", "g", "g", "g", "g", "g", "g", "blk", "red"],
    ["bg", "bg", "bg", "bg", "r", "r", "bg", "bg", "r", "r", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "g", "g", "g", "g", "bg", "bg", "bg", "bg"],
    ["red", "blk", "g", "bg", "g", "g", "g", "r", "g", "g", "bg", "bg", "bg"],
    ["bg", "bg", "g", "g", "g", "r", "altar", "bg", "r", "g", "g", "g", "blue"],
    ["bg", "bg", "r", "r", "r", "bg", "bg", "bg", "bg", "r", "r", "bg", "bg"],
    ["blue", "g", "g", "blood", "g", "g", "g", "g", "g", "g", "g", "blk", "red"]
    ],
}    */



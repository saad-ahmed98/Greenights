var levels = {}

levels["7-1"] = {
    level: "7-1",
    name: "Side by Side-1",
    bgm: "ep7_1",
    initialdp: 10,
    squadlimit: 8,
    hp: 3,
    background: "loading_CB_center",
    description: "The spearhead of Reunion's reconnaissance force has appeared\nat the location where we established a concealed facility.\nBe careful, these are no ordinary Reunion grunts that we're dealing with.",
    place: "Plain",
    offsetX: -10,
    offsetY: -60,
    offsetZ: 0,
    type: "normal",
    skybox: "cityruin.png",

    waves: [{ "number": 0, "time": 0, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": true, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 9], "pause": 155 }, { "start": [4, 9], "end": [4, 1], "pause": 0 }] },
    { "number": 1, "time": 0, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 9], "pause": 156 }, { "start": [3, 9], "end": [4, 1], "pause": 0 }] },
    { "number": 2, "time": 0, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 9], "pause": 158 }, { "start": [5, 9], "end": [4, 1], "pause": 0 }] },
    { "number": 3, "time": 0, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [6, 9], "pause": 157 }, { "start": [6, 9], "end": [5, 1], "pause": 0 }] },
    { "number": 4, "time": 0, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [2, 9], "pause": 161 }, { "start": [2, 9], "end": [3, 1], "pause": 0 }] },

    { "number": 5, "time": 2, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 10], "pause": 162 }, { "start": [4, 9], "end": [4, 1], "pause": 0 }] },
    { "number": 6, "time": 2, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 10], "pause": 163 }, { "start": [3, 9], "end": [4, 1], "pause": 0 }] },
    { "number": 7, "time": 2, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 10], "pause": 165 }, { "start": [5, 9], "end": [4, 1], "pause": 0 }] },
    { "number": 8, "time": 2, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [6, 10], "pause": 164 }, { "start": [6, 9], "end": [5, 1], "pause": 0 }] },
    { "number": 9, "time": 2, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [2, 10], "pause": 166 }, { "start": [2, 9], "end": [3, 1], "pause": 0 }] },

    { "number": 10, "time": 6, "gap": 5, "enemies": "Guerrilla Hound", "line": true, "tooltip": true, "count": 1, "taunt": true, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 1], "pause": 0 }] },
    { "number": 11, "time": 9, "gap": 5, "enemies": "Guerrilla Hound", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 }, { "start": [5, 8], "end": [4, 1], "pause": 0 }] },
    { "number": 12, "time": 14, "gap": 5, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 1], "pause": 0 }] },
    { "number": 13, "time": 17, "gap": 4, "enemies": "Guerrilla Hound", "line": true, "tooltip": false, "count": 2, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [3, 1], "pause": 0 }] },
    { "number": 14, "time": 26, "gap": 4, "enemies": "Guerrilla Hound", "line": true, "tooltip": false, "count": 2, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [5, 1], "pause": 0 }] },

    { "number": 15, "time": 29, "gap": 5, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 1], "pause": 0 }] },
    { "number": 16, "time": 29, "gap": 4, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [3, 1], "pause": 0 }] },
    { "number": 17, "time": 34, "gap": 4, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [5, 1], "pause": 0 }] },
    { "number": 18, "time": 34, "gap": 5, "enemies": "Guerrilla Hound", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [4, 1], "pause": 0 }] },
    { "number": 19, "time": 38, "gap": 5, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 }, { "start": [5, 8], "end": [4, 1], "pause": 0 }] },
    { "number": 20, "time": 41, "gap": 6, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 }, { "start": [5, 8], "end": [4, 1], "pause": 0 }] },
    { "number": 21, "time": 45, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [4, 1], "pause": 0 }] },
    { "number": 22, "time": 50, "gap": 6, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 }, { "start": [5, 8], "end": [4, 1], "pause": 0 }] },
    { "number": 23, "time": 53, "gap": 6, "enemies": "Guerrilla Fighter", "line": true, "tooltip": false, "count": 3, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [4, 1], "pause": 0 }] },
    { "number": 24, "time": 63, "gap": 6, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [4, 1], "pause": 0 }] },
    { "number": 25, "time": 63, "gap": 7, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 1], "pause": 0 }] },
    { "number": 26, "time": 67, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [3, 1], "pause": 0 }] },
    { "number": 27, "time": 68, "gap": 5, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [4, 1], "pause": 0 }] },
    { "number": 28, "time": 72, "gap": 6, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 }, { "start": [5, 8], "end": [4, 1], "pause": 0 }] },
    { "number": 29, "time": 77, "gap": 4, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [5, 1], "pause": 0 }] },
    { "number": 30, "time": 80, "gap": 4, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [3, 1], "pause": 0 }] },
    { "number": 31, "time": 83, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [5, 1], "pause": 0 }] },
    { "number": 32, "time": 92, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [3, 1], "pause": 0 }] },
    { "number": 33, "time": 98, "gap": 4, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 1], "pause": 0 }] },
    { "number": 34, "time": 105, "gap": 5, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 }, { "start": [5, 8], "end": [4, 1], "pause": 0 }] },
    { "number": 35, "time": 113, "gap": 6, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [3, 1], "pause": 0 }] },
    { "number": 36, "time": 116, "gap": 4, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [4, 1], "pause": 0 }] },
    { "number": 37, "time": 122, "gap": 6, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 }, { "start": [5, 8], "end": [4, 1], "pause": 0 }] },
    { "number": 38, "time": 123, "gap": 6, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [5, 1], "pause": 0 }] },
    { "number": 39, "time": 128, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [3, 1], "pause": 0 }] },
    { "number": 40, "time": 131, "gap": 3, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [4, 1], "pause": 0 }] },
    { "number": 41, "time": 136, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 1], "pause": 0 }] },
    { "number": 42, "time": 140, "gap": 6, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 }, { "start": [5, 8], "end": [4, 1], "pause": 0 }] },
    { "number": 43, "time": 144, "gap": 6, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [5, 1], "pause": 0 }] },
    { "number": 44, "time": 146, "gap": 3, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [5, 1], "pause": 0 }] },
    { "number": 45, "time": 148, "gap": 2, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [3, 1], "pause": 0 }] },
    { "number": 46, "time": 156, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [4, 1], "pause": 0 }] },
    { "number": 47, "time": 159, "gap": 6, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [3, 1], "pause": 0 }] },
    { "number": 48, "time": 162, "gap": 7, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 }, { "start": [5, 8], "end": [4, 1], "pause": 0 }] },
    { "number": 49, "time": 166, "gap": 5, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [4, 1], "pause": 0 }] },
    { "number": 50, "time": 168, "gap": 3, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [5, 1], "pause": 0 }] },
    { "number": 51, "time": 169, "gap": 5, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 }, { "start": [5, 8], "end": [4, 1], "pause": 0 }] },
    { "number": 52, "time": 172, "gap": 4, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 1], "pause": 0 }] },
    { "number": 53, "time": 174, "gap": 3, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [5, 1], "pause": 0 }] },
    { "number": 54, "time": 176, "gap": 4, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 8], "pause": 0 }, { "start": [5, 8], "end": [4, 1], "pause": 0 }] },
    { "number": 55, "time": 177, "gap": 3, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [3, 1], "pause": 0 }] },
    ],

    enemies: ["Guerrilla Hound", "Guerrilla Fighter"],
    tooltips: ["Guerrilla Hound", "Guerrilla Fighter"],

    hazards: [],


    layout: [["e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "e"],
    ["e", "bg", "blk", "g", "g", "g", "g", "g", "g", "blk", "blk", "red", "e"],
    ["e", "blue", "blk", "r", "r", "r", "bg", "g", "g", "blk", "blk", "red", "e"],
    ["e", "blue", "blk", "g", "g", "g", "g", "g", "g", "blk", "blk", "red", "e"],
    ["e", "blue", "blk", "r", "r", "r", "bg", "g", "g", "blk", "blk", "red", "e"],
    ["e", "bg", "blk", "g", "g", "g", "g", "g", "g", "blk", "blk", "red", "e"],
    ["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "e"],
    ],
}

levels["7-2"] = {
    level: "7-2",
    name: "Side by Side-2",
    bgm: "ep7_1",
    initialdp: 10,
    squadlimit: 8,
    hp: 3,
    background: "loading_CB_center",
    description: "Various Reunion members patrol the passages of the hub layer\nin the heart of Chernobog. Don't take them lightly;\ntheir uniforms... are the same as the Infected\nguerillas that once fought in the northern tundra of Ursus.",
    place: "Plain",
    offsetX: -15,
    offsetY: -50,
    offsetZ: 0,
    type: "normal",
    skybox: "cityruin.png",

    waves: [
        { "number": 0, "time": 12, "gap": 5, "enemies": "Guerrilla Hound", "line": true, "tooltip": false, "count": 1, "taunt": true, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 11 }, { "start": [5, 2], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 4], "pause": 0 }, { "start": [3, 4], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 12, "gap": 5, "enemies": "Guerrilla Hound", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 10], "pause": 7 }, { "start": [5, 10], "end": [4, 9], "pause": 0 }, { "start": [4, 9], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 25, "gap": 5, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 10], "pause": 0 }, { "start": [5, 10], "end": [4, 9], "pause": 0 }, { "start": [4, 9], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 25, "gap": 5, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 4], "pause": 0 }, { "start": [3, 4], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 37, "gap": 9, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 4], "pause": 0 }, { "start": [3, 4], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 37, "gap": 9, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 10], "pause": 0 }, { "start": [5, 10], "end": [4, 9], "pause": 0 }, { "start": [4, 9], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 45, "gap": 9, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 4], "pause": 0 }, { "start": [3, 4], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 45, "gap": 9, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 10], "pause": 0 }, { "start": [5, 10], "end": [4, 9], "pause": 0 }, { "start": [4, 9], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 49, "gap": 15, "enemies": "Guerrilla Sniper", "line": true, "tooltip": true, "count": 2, "taunt": false, "start": [6, 6], "checkpoints": [{ "start": [6, 6], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 76, "gap": 9, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": true, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 4], "pause": 0 }, { "start": [3, 4], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 76, "gap": 9, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 10], "pause": 0 }, { "start": [5, 10], "end": [4, 9], "pause": 0 }, { "start": [4, 9], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 79, "gap": 9, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 4], "pause": 0 }, { "start": [3, 4], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 79, "gap": 9, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 10], "pause": 0 }, { "start": [5, 10], "end": [4, 9], "pause": 0 }, { "start": [4, 9], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 81, "gap": 15, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": true, "count": 2, "taunt": false, "start": [6, 6], "checkpoints": [{ "start": [6, 6], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 94, "gap": 3, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": true, "count": 2, "taunt": true, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 4], "pause": 0 }, { "start": [3, 4], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 94, "gap": 3, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 10], "pause": 0 }, { "start": [5, 10], "end": [4, 9], "pause": 0 }, { "start": [4, 9], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 111, "gap": 3, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 4], "pause": 0 }, { "start": [3, 4], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 111, "gap": 3, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 10], "pause": 0 }, { "start": [5, 10], "end": [4, 9], "pause": 0 }, { "start": [4, 9], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [0, 6], "pause": 0 }] },

        { "number": 0, "time": 115, "gap": 5, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 5, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 10], "pause": 0 }, { "start": [5, 10], "end": [4, 9], "pause": 0 }, { "start": [4, 9], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 116, "gap": 12, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [6, 6], "checkpoints": [{ "start": [6, 6], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 125, "gap": 3, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 4], "pause": 0 }, { "start": [3, 4], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 151, "gap": 11, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 4, "taunt": true, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 4], "pause": 0 }, { "start": [3, 4], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 153, "gap": 11, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": true, "count": 4, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 4], "pause": 0 }, { "start": [3, 4], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 155, "gap": 12, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [6, 6], "checkpoints": [{ "start": [6, 6], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 159, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 9, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 10], "pause": 0 }, { "start": [5, 10], "end": [4, 9], "pause": 0 }, { "start": [4, 9], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 177, "gap": 12, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 4, "taunt": false, "start": [6, 6], "checkpoints": [{ "start": [6, 6], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 188, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 4, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 10], "pause": 0 }, { "start": [5, 10], "end": [4, 9], "pause": 0 }, { "start": [4, 9], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 195, "gap": 2, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 4], "pause": 0 }, { "start": [3, 4], "end": [0, 6], "pause": 0 }] },
        { "number": 0, "time": 203, "gap": 2, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 4], "pause": 0 }, { "start": [3, 4], "end": [0, 6], "pause": 0 }] },
    ],

    enemies: ["Guerrilla Hound", "Guerrilla Hound Pro", "Guerrilla Fighter", "Guerrilla Fighter Leader", "Guerrilla Fighter Leader", "Guerrilla Sniper Leader", "Guerrilla Sniper"],
    tooltips: ["Guerrilla Hound Pro", "Guerrilla Fighter Leader", "Guerrilla Sniper Leader", "Guerrilla Sniper"],

    hazards: [],


    layout: [["e", "bg", "bg", "bg", "bg", "bg", "blue", "bg", "bg", "bg", "bg", "bg"],
    ["e", "bg", "r", "bg", "g", "g", "blk", "g", "g", "r", "r", "bg"],
    ["e", "bg", "r", "g", "blk", "r", "blk", "r", "g", "g", "bg", "bg"],
    ["e", "bg", "bg", "g", "blk", "bg", "blk", "bg", "g", "g", "bg", "bg"],
    ["e", "bg", "g", "blk", "g", "r", "blk", "bg", "g", "g", "g", "bg"],
    ["e", "red", "blk", "g", "g", "bg", "blk", "bg", "g", "g", "g", "red"],
    ["e", "bg", "r", "r", "r", "bg", "red", "bg", "bg", "bg", "bg", "bg"],
    ["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ],
}

levels["7-3"] = {
    level: "7-3",
    name: "Forgotten Lands",
    bgm: "ep7_2",
    initialdp: 10,
    squadlimit: 8,
    hp: 3,
    background: "loading_CB_center",
    description: "We've encountered guerilla messengers on \nour way to the central area of the core city.\nThey employ a unique method of communication and commanding,\nand we may perhaps be able \nto draw some inspiration from fighting against them...",
    place: "Plain",
    offsetX: -10,
    offsetY: -50,
    offsetZ: 0,
    type: "normal",
    skybox: "cityruin.png",

    waves: [
        { "number": 0, "time": 3, "gap": 5, "enemies": "Guerrilla Hound", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 9], "pause": 0 }, { "start": [5, 9], "end": [4, 4], "pause": 0 }] },
        { "number": 1, "time": 7, "gap": 5, "enemies": "Guerrilla Hound", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [4, 4], "pause": 0 }] },
        { "number": 2, "time": 14, "gap": 16, "enemies": "Guerrilla Hound", "line": true, "tooltip": false, "count": 2, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 9], "pause": 0 }, { "start": [3, 9], "end": [4, 5], "pause": 0 }, { "start": [4, 5], "end": [3, 4], "pause": 0 }] },
        { "number": 3, "time": 15, "gap": 15, "enemies": "Guerrilla Hound", "line": true, "tooltip": false, "count": 2, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 5], "pause": 0 }, { "start": [4, 5], "end": [3, 4], "pause": 0 }] },
        { "number": 4, "time": 30, "gap": 10, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 9], "pause": 0 }, { "start": [5, 9], "end": [4, 4], "pause": 0 }] },
        { "number": 5, "time": 31, "gap": 10, "enemies": "Guerrilla Sniper", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [4, 4], "pause": 0 }] },
        { "number": 6, "time": 59, "gap": 10, "enemies": "Guerrilla Herald", "line": true, "tooltip": true, "count": 1, "taunt": true, "start": [0, 10], "checkpoints": [{ "start": [0, 10], "end": [1, 10], "pause": 30 }, { "start": [1, 10], "end": [1, 1], "pause": 0 }] },
        { "number": 7, "time": 82, "gap": 30, "enemies": "Guerrilla Sniper", "line": true, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 9], "pause": 0 }, { "start": [5, 9], "end": [3, 4], "pause": 0 }] },
        { "number": 8, "time": 83, "gap": 30, "enemies": "Guerrilla Sniper", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 9], "pause": 0 }, { "start": [5, 9], "end": [3, 4], "pause": 0 }] },
        { "number": 9, "time": 84, "gap": 8, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [4, 4], "pause": 0 }] },
        { "number": 10, "time": 91, "gap": 13, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": false, "count": 3, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 4], "pause": 0 }] },
        { "number": 11, "time": 92, "gap": 13, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": false, "count": 3, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 4], "pause": 0 }] },
        { "number": 12, "time": 94, "gap": 30, "enemies": "Guerrilla Sniper", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [4, 4], "pause": 0 }] },
        { "number": 13, "time": 137, "gap": 10, "enemies": "Guerrilla Herald", "line": true, "tooltip": false, "count": 1, "taunt": true, "start": [6, 4], "checkpoints": [{ "start": [6, 4], "end": [5, 2], "pause": 60 }, { "start": [5, 2], "end": [1, 1], "pause": 0 }] },
        { "number": 14, "time": 139, "gap": 10, "enemies": "Guerrilla Herald", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 10], "checkpoints": [{ "start": [0, 10], "end": [1, 10], "pause": 60 }, { "start": [1, 10], "end": [1, 1], "pause": 0 }] },
        { "number": 15, "time": 141, "gap": 10, "enemies": "Guerrilla Herald", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 4], "checkpoints": [{ "start": [6, 4], "end": [5, 3], "pause": 60 }, { "start": [5, 2], "end": [1, 1], "pause": 0 }] },
        { "number": 16, "time": 164, "gap": 30, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [6, 10], "pause": 32 }, { "start": [6, 10], "end": [4, 4], "pause": 0 }] },
        { "number": 17, "time": 165, "gap": 30, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 10], "pause": 29 }, { "start": [5, 10], "end": [4, 4], "pause": 0 }] },
        { "number": 18, "time": 166, "gap": 30, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 10], "pause": 26 }, { "start": [4, 10], "end": [4, 4], "pause": 0 }] },
        { "number": 19, "time": 167, "gap": 30, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 10], "pause": 23 }, { "start": [3, 10], "end": [3, 4], "pause": 0 }] },
        { "number": 20, "time": 168, "gap": 30, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [6, 9], "pause": 18 }, { "start": [6, 9], "end": [4, 4], "pause": 0 }] },
        { "number": 21, "time": 169, "gap": 30, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 9], "pause": 13 }, { "start": [5, 9], "end": [4, 4], "pause": 0 }] },
        { "number": 22, "time": 170, "gap": 30, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 9], "pause": 8 }, { "start": [4, 9], "end": [4, 4], "pause": 0 }] },
        { "number": 23, "time": 171, "gap": 30, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 9], "pause": 3 }, { "start": [3, 9], "end": [3, 4], "pause": 0 }] },
        { "number": 24, "time": 181, "gap": 13, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 4], "pause": 0 }] },
        { "number": 25, "time": 182, "gap": 13, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 9], "pause": 0 }, { "start": [4, 9], "end": [3, 4], "pause": 0 }] },
        { "number": 26, "time": 183, "gap": 13, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 4], "pause": 0 }] },

    ],

    enemies: ["Guerrilla Hound", "Guerrilla Hound Pro", "Guerrilla Fighter Leader", "Guerrilla Herald", "Guerrilla Sniper", "Guerrilla Sniper Leader"],
    tooltips: ["Guerrilla Herald"],

    hazards: [],


    layout: [["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "red", "bg"],
    ["e", "blue", "g", "g", "g", "g", "g", "g", "g", "blk", "blk", "bg"],
    ["e", "bg", "g", "g", "bg", "r", "r", "r", "g", "blk", "blk", "bg"],
    ["e", "bg", "g", "bg", "blue", "g", "blk", "blk", "g", "g", "g", "red"],
    ["e", "bg", "g", "bg", "blue", "g", "blk", "blk", "g", "g", "g", "red"],
    ["e", "bg", "g", "g", "r", "bg", "r", "r", "g", "g", "g", "red"],
    ["e", "bg", "g", "g", "red", "r", "bg", "bg", "g", "g", "g", "red"],
    ["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ],
}

levels["7-4"] = {
    level: "7-4",
    name: "Fury of the Silent-1",
    bgm: "ep7_2",
    initialdp: 10,
    squadlimit: 8,
    hp: 3,
    background: "loading_CB_center",
    description: "We've found a strange Sarkaz Originium altar in the hub layer...\nThe altar seems to have a strange effect upon the surrounding environment,\nbut we can also leverage it to mount a defense against the enemy.\n\n<Originium Altar> Periodically emits Pulse Waves to the surrounding tiles,\ndamaging both allied and enemy units.",
    place: "Plain",
    offsetX: -40,
    offsetY: -60,
    offsetZ: 0,
    type: "normal",
    skybox: "cityruin.png",


    waves: [
        { "number": 0, "time": 3, "gap": 5, "enemies": "Guerrilla Herald", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 2], "pause": 60 }, { "start": [1, 2], "end": [1, 4], "pause": 0 }, { "start": [1, 4], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [1, 11], "pause": 0 }] },
        { "number": 1, "time": 3, "gap": 5, "enemies": "Guerrilla Herald", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 60 }, { "start": [5, 2], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [4, 4], "pause": 0 }, { "start": [4, 4], "end": [5, 11], "pause": 0 }] },
        { "number": 2, "time": 11, "gap": 11, "enemies": "Guerrilla Sniper", "line": true, "tooltip": false, "count": 2, "taunt": true, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 4], "pause": 0 }, { "start": [1, 4], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [1, 11], "pause": 0 }] },
        { "number": 3, "time": 30, "gap": 9, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": false, "count": 2, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [4, 4], "pause": 0 }, { "start": [4, 4], "end": [5, 11], "pause": 0 }] },
        { "number": 4, "time": 38, "gap": 11, "enemies": "Guerrilla Sniper", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 4], "pause": 0 }, { "start": [1, 4], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [1, 11], "pause": 0 }] },
        { "number": 5, "time": 43, "gap": 9, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [4, 4], "pause": 0 }, { "start": [4, 4], "end": [5, 11], "pause": 0 }] },
        { "number": 6, "time": 53, "gap": 2, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [4, 4], "pause": 0 }, { "start": [4, 4], "end": [5, 11], "pause": 0 }] },
        { "number": 7, "time": 55, "gap": 12, "enemies": "Guerrilla Sniper", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 4], "pause": 0 }, { "start": [1, 4], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [1, 11], "pause": 0 }] },
        { "number": 8, "time": 63, "gap": 2, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [4, 4], "pause": 0 }, { "start": [4, 4], "end": [5, 11], "pause": 0 }] },
        { "number": 9, "time": 76, "gap": 5, "enemies": "Guerrilla Herald", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 2], "pause": 60 }, { "start": [1, 2], "end": [1, 4], "pause": 0 }, { "start": [1, 4], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [1, 11], "pause": 0 }] },
        { "number": 10, "time": 76, "gap": 5, "enemies": "Guerrilla Herald", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 60 }, { "start": [5, 2], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [4, 4], "pause": 0 }, { "start": [4, 4], "end": [5, 11], "pause": 0 }] },
        { "number": 11, "time": 82, "gap": 2, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [4, 4], "pause": 0 }, { "start": [4, 4], "end": [5, 11], "pause": 0 }] },
        { "number": 12, "time": 86, "gap": 12, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 4], "pause": 0 }, { "start": [1, 4], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [1, 11], "pause": 0 }] },
        { "number": 13, "time": 93, "gap": 2, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [4, 4], "pause": 0 }, { "start": [4, 4], "end": [5, 11], "pause": 0 }] },
        { "number": 14, "time": 106, "gap": 9, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 4], "pause": 0 }, { "start": [1, 4], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [1, 11], "pause": 0 }] },
        { "number": 15, "time": 114, "gap": 2, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [4, 4], "pause": 0 }, { "start": [4, 4], "end": [5, 11], "pause": 0 }] },
        { "number": 16, "time": 121, "gap": 2, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 4], "pause": 0 }, { "start": [1, 4], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [1, 11], "pause": 0 }] },
        { "number": 17, "time": 125, "gap": 12, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [4, 4], "pause": 0 }, { "start": [4, 4], "end": [5, 11], "pause": 0 }] },
        { "number": 18, "time": 132, "gap": 2, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 4], "pause": 0 }, { "start": [1, 4], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [1, 11], "pause": 0 }] },
        { "number": 19, "time": 143, "gap": 5, "enemies": "Guerrilla Herald", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 2], "pause": 30 }, { "start": [1, 2], "end": [1, 4], "pause": 0 }, { "start": [1, 4], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [1, 11], "pause": 0 }] },
        { "number": 20, "time": 143, "gap": 5, "enemies": "Guerrilla Herald", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 30 }, { "start": [5, 2], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [4, 4], "pause": 0 }, { "start": [4, 4], "end": [5, 11], "pause": 0 }] },
        { "number": 21, "time": 151, "gap": 2, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 4], "pause": 0 }, { "start": [1, 4], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [1, 11], "pause": 0 }] },
        { "number": 22, "time": 151, "gap": 2, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [4, 4], "pause": 0 }, { "start": [4, 4], "end": [5, 11], "pause": 0 }] },
        { "number": 23, "time": 157, "gap": 2, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 4], "pause": 0 }, { "start": [1, 4], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [1, 11], "pause": 0 }] },
        { "number": 24, "time": 157, "gap": 2, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [4, 4], "pause": 0 }, { "start": [4, 4], "end": [5, 11], "pause": 0 }] },
        { "number": 25, "time": 162, "gap": 7, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 4], "pause": 0 }, { "start": [1, 4], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [1, 11], "pause": 0 }] },
        { "number": 26, "time": 162, "gap": 7, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [4, 4], "pause": 0 }, { "start": [4, 4], "end": [5, 11], "pause": 0 }] },
        { "number": 27, "time": 174, "gap": 2, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 4], "pause": 0 }, { "start": [1, 4], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [1, 11], "pause": 0 }] },
        { "number": 28, "time": 174, "gap": 2, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [4, 4], "pause": 0 }, { "start": [4, 4], "end": [5, 11], "pause": 0 }] },
        { "number": 29, "time": 182, "gap": 5, "enemies": "Guerrilla Herald", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 2], "pause": 0 }, { "start": [1, 2], "end": [1, 4], "pause": 0 }, { "start": [1, 4], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [1, 11], "pause": 0 }] },
        { "number": 30, "time": 182, "gap": 5, "enemies": "Guerrilla Herald", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [4, 4], "pause": 0 }, { "start": [4, 4], "end": [5, 11], "pause": 0 }] },

    ],

    enemies: ["Guerrilla Hound Pro", "Guerrilla Fighter Leader", "Guerrilla Herald", "Guerrilla Sniper", "Guerrilla Sniper Leader"],
    tooltips: [],

    hazards: ["altar"],


    layout: [["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["e", "red", "g", "blk", "g", "g", "bg", "r", "g", "g", "g", "blue"],
    ["e", "bg", "r", "blk", "blk", "blk", "g", "g", "g", "g", "bg", "bg"],
    ["e", "bg", "altar", "bg", "altar", "r", "bg", "r", "bg", "r", "bg", "bg"],
    ["e", "bg", "bg", "blk", "blk", "blk", "g", "g", "blk", "blk", "r", "bg"],
    ["e", "red", "g", "blk", "g", "g", "bg", "blk", "blk", "blk", "blk", "blue"],
    ["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ],
}

levels["7-5"] = {
    level: "7-5",
    name: "Fury of the Silent-2",
    bgm: "ep7_2",
    initialdp: 10,
    squadlimit: 9,
    hp: 3,
    background: "loading_CB_center",
    description: "Our enemies are no longer fighting\nin the characteristic style of scattered guerillas.\nNow it is a head-on clash between tactics.\nFormulate your combat strategy appropriately,\nand deal a critical blow to the enemy.\n\n<Originium Altar> Periodically emits Pulse Waves to the surrounding tiles,\ndamaging both allied and enemy units.",
    place: "Plain",
    offsetX: -10,
    offsetY: -40,
    offsetZ: 0,
    type: "hard",
    skybox: "cityruin.png",

    waves: [
        { "number": 0, "time": 0, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": true, "count": 1, "taunt": false, "start": [1, 11], "checkpoints": [{ "start": [1, 11], "end": [1, 11], "pause": 200 }, { "start": [1, 11], "end": [5, 11], "pause": 0 }] },
        { "number": 1, "time": 0, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 2], "checkpoints": [{ "start": [1, 2], "end": [1, 2], "pause": 200 }, { "start": [1, 2], "end": [6, 1], "pause": 0 }] },
        { "number": 2, "time": 5, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": false, "count": 2, "taunt": true, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [5, 11], "pause": 0 }] },
        { "number": 3, "time": 18, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": false, "count": 2, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [6, 1], "pause": 0 }] },
        { "number": 4, "time": 20, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 11], "pause": 0 }] },
        { "number": 5, "time": 28, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [6, 5], "pause": 4 }, { "start": [6, 5], "end": [6, 6], "pause": 4 }, { "start": [6, 6], "end": [1, 6], "pause": 0 }, { "start": [1, 6], "end": [1, 5], "pause": 4 }, { "start": [1, 5], "end": [6, 5], "pause": 4 }, { "start": [6, 5], "end": [6, 6], "pause": 0 }, { "start": [6, 6], "end": [1, 6], "pause": 0 }, { "start": [1, 6], "end": [1, 5], "pause": 4 }, { "start": [1, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 6, "time": 30, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [1, 8], "pause": 2 }, { "start": [1, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 11], "pause": 0 }] },

        { "number": 7, "time": 35, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [5, 11], "pause": 0 }] },
        { "number": 8, "time": 40, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 11], "pause": 0 }] },
        { "number": 9, "time": 57, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [6, 1], "pause": 0 }] },
        { "number": 10, "time": 72, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 9], "checkpoints": [{ "start": [0, 9], "end": [5, 11], "pause": 0 }] },

        { "number": 11, "time": 65, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [0, 9], "checkpoints": [{ "start": [0, 9], "end": [1, 9], "pause": 2 }, { "start": [1, 9], "end": [5, 11], "pause": 0 }] },
        { "number": 11, "time": 75, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [6, 1], "pause": 0 }] },
        { "number": 12, "time": 75, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [5, 11], "pause": 0 }] },
        { "number": 13, "time": 80, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 11], "pause": 0 }] },
        { "number": 14, "time": 91, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [6, 5], "pause": 4 }, { "start": [6, 5], "end": [6, 6], "pause": 4 }, { "start": [6, 6], "end": [1, 6], "pause": 0 }, { "start": [1, 6], "end": [1, 5], "pause": 4 }, { "start": [1, 5], "end": [6, 5], "pause": 4 }, { "start": [6, 5], "end": [6, 6], "pause": 0 }, { "start": [6, 6], "end": [1, 6], "pause": 0 }, { "start": [1, 6], "end": [1, 5], "pause": 4 }, { "start": [1, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 15, "time": 97, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [6, 1], "pause": 0 }] },
        { "number": 16, "time": 100, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 9], "checkpoints": [{ "start": [0, 9], "end": [5, 11], "pause": 0 }] },
        { "number": 17, "time": 100, "gap": 5, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [1, 8], "pause": 3 }, { "start": [1, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 11], "pause": 0 }] },
        { "number": 18, "time": 113, "gap": 5, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [6, 1], "pause": 0 }] },
        { "number": 19, "time": 134, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 11], "pause": 0 }] },
        { "number": 20, "time": 135, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [6, 1], "pause": 0 }] },
        { "number": 21, "time": 138, "gap": 4, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [5, 11], "pause": 0 }] },
        { "number": 22, "time": 145, "gap": 5, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 11], "pause": 0 }] },
        { "number": 23, "time": 145, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 9], "checkpoints": [{ "start": [0, 9], "end": [5, 11], "pause": 0 }] },
        { "number": 24, "time": 150, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [6, 5], "pause": 4 }, { "start": [6, 5], "end": [6, 6], "pause": 4 }, { "start": [6, 6], "end": [1, 6], "pause": 0 }, { "start": [1, 6], "end": [1, 5], "pause": 4 }, { "start": [1, 5], "end": [6, 5], "pause": 4 }, { "start": [6, 5], "end": [6, 6], "pause": 0 }, { "start": [6, 6], "end": [1, 6], "pause": 0 }, { "start": [1, 6], "end": [1, 5], "pause": 4 }, { "start": [1, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 25, "time": 153, "gap": 4, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [5, 11], "pause": 0 }] },
        { "number": 26, "time": 157, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 11], "pause": 0 }] },
        { "number": 27, "time": 158, "gap": 5, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 9], "checkpoints": [{ "start": [0, 9], "end": [5, 11], "pause": 0 }] },
        { "number": 28, "time": 167, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [6, 1], "pause": 0 }] },
        { "number": 29, "time": 177, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [5, 11], "pause": 0 }] },
        { "number": 30, "time": 179, "gap": 10, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [6, 1], "pause": 0 }] },
        { "number": 31, "time": 187, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 9], "checkpoints": [{ "start": [0, 9], "end": [5, 11], "pause": 0 }] },
        { "number": 32, "time": 187, "gap": 10, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [5, 11], "pause": 0 }] },
        { "number": 33, "time": 197, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 11], "pause": 0 }] },

    ],

    enemies: ["Guerrilla Hound Pro", "Guerrilla Fighter Leader", "Guerrilla Herald Leader", "Guerrilla Sniper Leader"],
    tooltips: ["Guerrilla Herald Leader"],

    hazards: ["altar"],


    layout: [
        ["bg", "bg", "bg", "bg", "bg", "red", "bg", "bg", "red", "red", "bg", "bg", "bg"],
        ["bg", "red", "blk", "blk", "bg", "blk", "blk", "bg", "blk", "blk", "g", "g", "bg"],
        ["bg", "bg", "bg", "g", "bg", "blk", "blk", "bg", "g", "r", "r", "g", "bg"],
        ["bg", "bg", "r", "g", "bg", "blk", "blk", "bg", "g", "r", "altar", "g", "bg"],
        ["bg", "bg", "g", "g", "bg", "blk", "blk", "bg", "g", "r", "r", "g", "bg"],
        ["bg", "bg", "g", "r", "bg", "blk", "blk", "bg", "g", "g", "g", "blue", "bg"],
        ["bg", "blue", "g", "r", "bg", "blk", "blk", "bg", "g", "g", "g", "blue", "bg"],
        ["bg", "bg", "bg", "bg", "bg", "blue", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ],
}

levels["7-6"] = {
    level: "7-6",
    name: "Flames of the Faint",
    bgm: "ep7_2",
    initialdp: 10,
    squadlimit: 8,
    hp: 3,
    background: "loading_CB_under",
    description: "Sarkaz warriors have entered the battlefield, \nbut be wary – they don't seem to be from the same faction as the guerillas. \nThey even seem to draw inspiration from the Originium altars...?!\n\n<Originium Altar> Periodically emits Pulse Waves to the surrounding tiles,\ndamaging both allied and enemy units.",
    place: "Plain",
    offsetX: -40,
    offsetY: -70,
    offsetZ: 0,
    type: "normal",
    skybox: "cityruin.png",

    waves: [
        { "number": 0, "time": 0, "gap": 5, "enemies": "Sarkaz Guerrilla Fighter", "line": false, "tooltip": true, "count": 1, "taunt": false, "start": [4, 3], "checkpoints": [{ "start": [4, 3], "end": [4, 3], "pause": 60 }, { "start": [4, 3], "end": [3, 11], "pause": 0 }] },
        { "number": 1, "time": 0, "gap": 5, "enemies": "Sarkaz Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 3], "checkpoints": [{ "start": [2, 3], "end": [2, 3], "pause": 60 }, { "start": [2, 3], "end": [2, 8], "pause": 0 }, { "start": [2, 8], "end": [3, 11], "pause": 0 }] },
        { "number": 2, "time": 4, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": false, "count": 1, "taunt": true, "start": [3, 1], "checkpoints": [{ "start": [3, 1], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 11], "pause": 0 }] },
        { "number": 3, "time": 12, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 1], "checkpoints": [{ "start": [3, 1], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 11], "pause": 0 }] },
        { "number": 4, "time": 16, "gap": 1, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [3, 1], "checkpoints": [{ "start": [3, 1], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 11], "pause": 0 }] },
        { "number": 5, "time": 26, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [3, 1], "checkpoints": [{ "start": [3, 1], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 11], "pause": 0 }] },
        { "number": 6, "time": 33, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [3, 1], "checkpoints": [{ "start": [3, 1], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 11], "pause": 0 }] },
        { "number": 7, "time": 54, "gap": 3, "enemies": "Sarkaz Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 1], "checkpoints": [{ "start": [3, 1], "end": [5, 4], "pause": 10 }, { "start": [5, 4], "end": [3, 11], "pause": 0 }] },
        { "number": 8, "time": 56, "gap": 3, "enemies": "Sarkaz Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 1], "checkpoints": [{ "start": [3, 1], "end": [4, 4], "pause": 12 }, { "start": [4, 4], "end": [3, 11], "pause": 0 }] },
        { "number": 9, "time": 58, "gap": 3, "enemies": "Sarkaz Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 1], "checkpoints": [{ "start": [3, 1], "end": [4, 3], "pause": 18 }, { "start": [4, 3], "end": [3, 11], "pause": 0 }] },
        { "number": 10, "time": 72, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 1], "checkpoints": [{ "start": [3, 1], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 11], "pause": 0 }] },
        { "number": 11, "time": 75, "gap": 3, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [3, 1], "checkpoints": [{ "start": [3, 1], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 11], "pause": 0 }] },
        { "number": 12, "time": 80, "gap": 8, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 4, "taunt": false, "start": [3, 1], "checkpoints": [{ "start": [3, 1], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 11], "pause": 0 }] },
        { "number": 13, "time": 81, "gap": 8, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 4, "taunt": false, "start": [3, 1], "checkpoints": [{ "start": [3, 1], "end": [4, 3], "pause": 0 }, { "start": [4, 3], "end": [3, 11], "pause": 0 }] },
        { "number": 14, "time": 111, "gap": 3, "enemies": "Sarkaz Guerrilla Fighter", "line": true, "tooltip": false, "count": 1, "taunt": true, "start": [3, 1], "checkpoints": [{ "start": [3, 1], "end": [1, 4], "pause": 10 }, { "start": [1, 4], "end": [2, 8], "pause": 0 }, { "start": [2, 8], "end": [3, 11], "pause": 0 }] },
        { "number": 15, "time": 113, "gap": 3, "enemies": "Sarkaz Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 1], "checkpoints": [{ "start": [3, 1], "end": [1, 3], "pause": 12 }, { "start": [1, 3], "end": [2, 8], "pause": 0 }, { "start": [2, 8], "end": [3, 11], "pause": 0 }] },
        { "number": 16, "time": 115, "gap": 3, "enemies": "Sarkaz Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 1], "checkpoints": [{ "start": [3, 1], "end": [2, 3], "pause": 14 }, { "start": [2, 3], "end": [2, 8], "pause": 0 }, { "start": [2, 8], "end": [3, 11], "pause": 0 }] },
        { "number": 17, "time": 129, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 1], "checkpoints": [{ "start": [3, 1], "end": [2, 8], "pause": 0 }, { "start": [2, 8], "end": [3, 11], "pause": 0 }] },
        { "number": 18, "time": 132, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 1], "checkpoints": [{ "start": [3, 1], "end": [2, 8], "pause": 0 }, { "start": [2, 8], "end": [3, 11], "pause": 0 }] },
        { "number": 19, "time": 137, "gap": 8, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 5, "taunt": false, "start": [3, 1], "checkpoints": [{ "start": [3, 1], "end": [2, 8], "pause": 0 }, { "start": [2, 8], "end": [3, 11], "pause": 0 }] },
        { "number": 20, "time": 138, "gap": 8, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 5, "taunt": false, "start": [3, 1], "checkpoints": [{ "start": [3, 1], "end": [2, 8], "pause": 0 }, { "start": [2, 8], "end": [3, 11], "pause": 0 }] },
        { "number": 21, "time": 155, "gap": 3, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": true, "count": 2, "taunt": false, "start": [3, 1], "checkpoints": [{ "start": [3, 1], "end": [2, 8], "pause": 0 }, { "start": [2, 8], "end": [3, 11], "pause": 0 }] },

    ],

    enemies: ["Guerrilla Hound Pro", "Guerrilla Fighter Leader", "Sarkaz Guerrilla Fighter", "Sarkaz Guerrilla Fighter Leader"],
    tooltips: ["Sarkaz Guerrilla Fighter", "Sarkaz Guerrilla Fighter Leader"],

    hazards: ["altar"],


    layout: [["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["e", "bg", "bg", "blk", "blk", "blk", "blk", "g", "g", "gblk", "r", "bg"],
    ["e", "bg", "bg", "blk", "bg", "bg", "bg", "altar", "g", "g", "r", "bg"],
    ["e", "red", "blk", "blk", "bg", "bg", "bg", "r", "r", "g", "blk", "blue"],
    ["e", "bg", "bg", "g", "g", "bg", "r", "bg", "g", "blk", "r", "bg"],
    ["e", "bg", "bg", "r", "g", "g", "g", "g", "g", "r", "r", "bg"],
    ["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ],
}

levels["7-7"] = {
    level: "7-7",
    name: "Stained-1",
    bgm: "ep7_2",
    initialdp: 10,
    squadlimit: 8,
    hp: 3,
    background: "loading_CB_under",
    description: "Sarkaz Casters have appeared on the battlefield,\nand it seems like the Originium Altars may be affecting their Arts.\nHowever, don't panic – we have ways of dealing with them.\n\n<Originium Altar> Periodically emits Pulse Waves to the surrounding tiles,\ndamaging both allied and enemy units.",
    place: "Plain",
    offsetX: -20,
    offsetY: -60,
    offsetZ: 0,
    type: "normal",
    skybox: "cityruin.png",

    waves: [
        { "number": 0, "time": 6, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": true, "tooltip": false, "count": 1, "taunt": true, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 10], "pause": 120 }, { "start": [5, 10], "end": [0, 3], "pause": 0 }] },
        { "number": 1, "time": 10, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 9], "pause": 5 }, { "start": [5, 9], "end": [0, 3], "pause": 0 }] },
        { "number": 2, "time": 19, "gap": 9, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [0, 3], "pause": 0 }] },
        { "number": 3, "time": 27, "gap": 9, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 35 }, { "start": [5, 3], "end": [2, 11], "pause": 0 }] },
        { "number": 4, "time": 35, "gap": 9, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [0, 3], "pause": 0 }] },
        { "number": 5, "time": 45, "gap": 4, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [0, 3], "pause": 0 }] },
        { "number": 6, "time": 53, "gap": 4, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [2, 11], "pause": 0 }] },
        { "number": 7, "time": 57, "gap": 9, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [0, 3], "pause": 0 }] },
        { "number": 8, "time": 67, "gap": 17, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [0, 3], "pause": 0 }] },
        { "number": 9, "time": 70, "gap": 17, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [0, 3], "pause": 0 }] },
        { "number": 10, "time": 76, "gap": 4, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [2, 11], "pause": 0 }] },
        { "number": 11, "time": 86, "gap": 4, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [2, 11], "pause": 0 }] },
        { "number": 12, "time": 115, "gap": 9, "enemies": "Sarkaz Guerrilla Caster", "line": true, "tooltip": true, "count": 1, "taunt": true, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 15 }, { "start": [5, 3], "end": [2, 11], "pause": 0 }] },
        { "number": 13, "time": 118, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [0, 3], "pause": 0 }] },
        { "number": 14, "time": 129, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [0, 3], "pause": 0 }] },
        { "number": 15, "time": 138, "gap": 4, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [2, 11], "pause": 0 }] },
        { "number": 16, "time": 148, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 10], "pause": 40 }, { "start": [5, 10], "end": [0, 3], "pause": 0 }] },
        { "number": 17, "time": 165, "gap": 21, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [0, 3], "pause": 0 }] },
        { "number": 18, "time": 168, "gap": 21, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [0, 3], "pause": 0 }] },
        { "number": 19, "time": 169, "gap": 28, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [2, 11], "pause": 0 }] },
        { "number": 20, "time": 171, "gap": 28, "enemies": "Sarkaz Guerrilla Caster", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [2, 11], "pause": 0 }] },
        { "number": 21, "time": 176, "gap": 7, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [0, 3], "pause": 0 }] },

    ],

    enemies: ["Guerrilla Hound Pro", "Guerrilla Fighter Leader", "Guerrilla Herald Leader", "Sarkaz Guerrilla Caster", "Sarkaz Guerrilla Fighter Leader", "Guerrilla Sniper Leader"],
    tooltips: ["Sarkaz Guerrilla Caster"],

    hazards: ["altar"],


    layout: [["e", "bg", "bg", "blue", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["e", "bg", "r", "g", "g", "g", "r", "r", "bg", "bg", "bg", "bg"],
    ["e", "bg", "r", "g", "g", "g", "g", "g", "g", "blk", "blk", "blue"],
    ["e", "bg", "r", "g", "g", "r", "r", "bg", "r", "bg", "r", "bg"],
    ["e", "bg", "altar", "g", "r", "bg", "altar", "r", "g", "r", "bg", "bg"],
    ["e", "red", "g", "g", "g", "g", "g", "g", "g", "blk", "blk", "red"],
    ["e", "bg", "bg", "r", "bg", "bg", "r", "r", "r", "bg", "bg", "bg"],
    ["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ],
}

levels["7-8"] = {
    level: "7-8",
    name: "Stained-2",
    bgm: "ep7_2",
    initialdp: 0,
    squadlimit: 9,
    hp: 3,
    background: "loading_CB_under",
    description: "As Reunion's elite warriors, \nthe Sarkaz Mercenaries have shown formidable strength.\nOnly by defeating them can we continue forward.\n\n<Originium Altar> Periodically emits Pulse Waves to the surrounding tiles,\ndamaging both allied and enemy units.\n<Active Originium> Allies deployed on it and enemies who have passed it\nwill take constant damage,\nbut their ATK and Attack Speed will be increased significantly.",
    place: "Plain",
    offsetX: 10,
    offsetY: -30,
    offsetZ: 0,
    type: "hard",
    skybox: "nightsky.png",

    waves: [
        { "number": 0, "time": 0, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 9], "checkpoints": [{ "start": [1, 9], "end": [1, 9], "pause": 230 }, { "start": [1, 9], "end": [8, 8], "pause": 0 }] },
        { "number": 1, "time": 0, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 3], "checkpoints": [{ "start": [1, 3], "end": [1, 3], "pause": 230 }, { "start": [1, 3], "end": [8, 4], "pause": 0 }] },
        { "number": 2, "time": 11, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": true, "tooltip": false, "count": 2, "taunt": true, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [8, 8], "pause": 0 }] },
        { "number": 3, "time": 28, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [8, 8], "pause": 0 }] },
        { "number": 4, "time": 40, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [8, 8], "pause": 0 }] },
        { "number": 5, "time": 53, "gap": 5, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [3, 0], "checkpoints": [{ "start": [3, 0], "end": [3, 1], "pause": 3 }, { "start": [3, 1], "end": [3, 12], "pause": 0 }] },
        { "number": 6, "time": 68, "gap": 5, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 0], "checkpoints": [{ "start": [3, 0], "end": [3, 1], "pause": 3 }, { "start": [3, 1], "end": [3, 12], "pause": 0 }] },
        { "number": 7, "time": 74, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": false, "count": 2, "taunt": false, "start": [0, 4], "checkpoints": [{ "start": [0, 4], "end": [8, 4], "pause": 0 }] },
        { "number": 8, "time": 81, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [8, 8], "pause": 0 }] },
        { "number": 9, "time": 81, "gap": 5, "enemies": "Sarkaz Guerrilla Caster Leader", "line": true, "tooltip": true, "count": 1, "taunt": false, "start": [5, 0], "checkpoints": [{ "start": [5, 0], "end": [5, 1], "pause": 3 }, { "start": [5, 1], "end": [5, 12], "pause": 0 }] },
        { "number": 10, "time": 89, "gap": 5, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [8, 8], "pause": 0 }] },
        { "number": 11, "time": 91, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 4], "checkpoints": [{ "start": [0, 4], "end": [8, 4], "pause": 0 }] },
        { "number": 12, "time": 99, "gap": 7, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 4, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [8, 8], "pause": 0 }] },
        { "number": 13, "time": 103, "gap": 10, "enemies": "Guerrilla Herald Leader", "line": true, "tooltip": false, "count": 2, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 2], "pause": 10 }, { "start": [1, 2], "end": [8, 4], "pause": 0 }] },
        { "number": 14, "time": 111, "gap": 5, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [8, 8], "pause": 0 }] },
        { "number": 15, "time": 128, "gap": 10, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [3, 0], "checkpoints": [{ "start": [3, 0], "end": [3, 12], "pause": 0 }] },
        { "number": 16, "time": 130, "gap": 5, "enemies": "Sarkaz Guerrilla Caster Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 0], "checkpoints": [{ "start": [5, 0], "end": [5, 1], "pause": 3 }, { "start": [5, 1], "end": [5, 12], "pause": 0 }] },
        { "number": 17, "time": 135, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": true, "tooltip": false, "count": 2, "taunt": false, "start": [1, 11], "checkpoints": [{ "start": [1, 11], "end": [1, 10], "pause": 5 }, { "start": [1, 10], "end": [8, 8], "pause": 0 }] },
        { "number": 18, "time": 140, "gap": 7, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [8, 8], "pause": 0 }] },
        { "number": 19, "time": 160, "gap": 10, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 2], "pause": 10 }, { "start": [1, 2], "end": [8, 4], "pause": 0 }] },
        { "number": 20, "time": 162, "gap": 5, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [8, 8], "pause": 0 }] },
        { "number": 21, "time": 172, "gap": 7, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [8, 8], "pause": 0 }] },
        { "number": 22, "time": 177, "gap": 5, "enemies": "Sarkaz Guerrilla Caster Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 0], "checkpoints": [{ "start": [5, 0], "end": [5, 12], "pause": 0 }] },
        { "number": 23, "time": 192, "gap": 10, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [1, 11], "checkpoints": [{ "start": [1, 11], "end": [1, 10], "pause": 5 }, { "start": [1, 10], "end": [8, 8], "pause": 0 }] },
        { "number": 24, "time": 193, "gap": 10, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [8, 8], "pause": 0 }] },
        { "number": 25, "time": 199, "gap": 10, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 0], "checkpoints": [{ "start": [3, 0], "end": [3, 12], "pause": 0 }] },
        { "number": 26, "time": 209, "gap": 7, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [8, 8], "pause": 0 }] },
        { "number": 27, "time": 214, "gap": 5, "enemies": "Sarkaz Guerrilla Caster Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 0], "checkpoints": [{ "start": [5, 0], "end": [5, 12], "pause": 0 }] },
        { "number": 28, "time": 214, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [0, 4], "checkpoints": [{ "start": [0, 4], "end": [8, 4], "pause": 0 }] },
        { "number": 29, "time": 217, "gap": 10, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 0], "checkpoints": [{ "start": [3, 0], "end": [3, 12], "pause": 0 }] },
    ],

    enemies: ["Guerrilla Hound Pro", "Guerrilla Fighter Leader", "Guerrilla Herald Leader", "Sarkaz Guerrilla Caster Leader", "Sarkaz Guerrilla Fighter Leader", "Guerrilla Sniper Leader"],
    tooltips: ["Sarkaz Guerrilla Caster Leader"],

    hazards: ["altar"],


    layout: [["bg", "bg", "bg", "bg", "red", "bg", "bg", "bg", "red", "bg", "bg", "bg", "bg"],
    ["bg", "red", "blk", "blk", "blk", "g", "g", "g", "blk", "blk", "blk", "red", "bg"],
    ["bg", "bg", "r", "r", "g", "r", "altar", "r", "g", "r", "r", "bg", "bg"],
    ["red", "blk", "blk", "g", "g", "g", "g", "g", "bloodblk", "g", "blk", "blk", "blue"],
    ["bg", "bg", "r", "r", "g", "altar", "bg", "altar", "g", "r", "r", "bg", "bg"],
    ["red", "blk", "blk", "g", "bloodblk", "g", "g", "g", "g", "g", "blk", "blk", "blue"],
    ["bg", "bg", "r", "r", "g", "r", "altar", "r", "g", "r", "r", "bg", "bg"],
    ["bg", "bg", "bg", "r", "g", "r", "r", "r", "g", "r", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "blue", "bg", "bg", "bg", "blue", "bg", "bg", "bg", "bg"],
    ],
}

levels["7-9"] = {
    level: "7-9",
    name: "Aegis of the Infected-1",
    bgm: "ep7_2",
    initialdp: 10,
    squadlimit: 8,
    hp: 3,
    background: "loading_CB_under",
    description: "The horn has been sounded. \nFace the legendary guerillas of Ursus, \nand turn their own tactics against them! \nHowever, those heavily-armored guerilla warriors are indeed \nthe most terrifying combatants of the Ursus army...",
    place: "Plain",
    offsetX: -25,
    offsetY: -60,
    offsetZ: 0,
    type: "normal",
    skybox: "nightsky.png",

    waves: [
        { "number": 0, "time": 0, "gap": 5, "enemies": "Guerrilla Shieldguard", "line": false, "tooltip": true, "count": 1, "taunt": false, "start": [2, 9], "checkpoints": [{ "start": [2, 9], "end": [2, 9], "pause": 170 }, { "start": [2, 9], "end": [0, 9], "pause": 5 }, { "start": [6, 1], "end": [6, 3], "pause": 0 }, { "start": [6, 3], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 1], "pause": 5 }, { "start": [5, 11], "end": [5, 9], "pause": 0 }, { "start": [5, 9], "end": [6, 9], "pause": 0 }, { "start": [6, 9], "end": [6, 11], "pause": 0 }] },
        { "number": 1, "time": 0, "gap": 5, "enemies": "Guerrilla Shieldguard", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 3], "checkpoints": [{ "start": [5, 3], "end": [5, 3], "pause": 150 }, { "start": [5, 3], "end": [5, 1], "pause": 5 }, { "start": [5, 11], "end": [5, 9], "pause": 0 }, { "start": [5, 9], "end": [6, 9], "pause": 0 }, { "start": [6, 9], "end": [6, 11], "pause": 0 }] },
        { "number": 2, "time": 5, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": true, "tooltip": false, "count": 1, "taunt": true, "start": [2, 1], "checkpoints": [{ "start": [2, 1], "end": [3, 5], "pause": 0 }, { "start": [3, 5], "end": [6, 6], "pause": 0 }] },
        { "number": 3, "time": 10, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 6], "pause": 0 }, { "start": [1, 6], "end": [6, 7], "pause": 0 }] },
        { "number": 4, "time": 18, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 6], "pause": 0 }, { "start": [1, 6], "end": [6, 7], "pause": 0 }] },
        { "number": 5, "time": 27, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [2, 1], "checkpoints": [{ "start": [2, 1], "end": [3, 5], "pause": 0 }, { "start": [3, 5], "end": [6, 6], "pause": 0 }] },
        { "number": 6, "time": 39, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 10], "checkpoints": [{ "start": [0, 10], "end": [1, 10], "pause": 20 }, { "start": [1, 10], "end": [1, 9], "pause": 0 }, { "start": [1, 9], "end": [0, 9], "pause": 5 }, { "start": [6, 1], "end": [6, 2], "pause": 20 }, { "start": [6, 2], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [5, 1], "pause": 5 }, { "start": [5, 11], "end": [5, 10], "pause": 10 }, { "start": [5, 10], "end": [6, 10], "pause": 0 }, { "start": [6, 10], "end": [6, 11], "pause": 0 }] },
        { "number": 7, "time": 40, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 6], "pause": 0 }, { "start": [1, 6], "end": [6, 7], "pause": 0 }] },
        { "number": 8, "time": 56, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [2, 1], "checkpoints": [{ "start": [2, 1], "end": [3, 5], "pause": 0 }, { "start": [3, 5], "end": [6, 6], "pause": 0 }] },
        { "number": 9, "time": 72, "gap": 10, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 6], "pause": 0 }, { "start": [1, 6], "end": [6, 7], "pause": 0 }] },
        { "number": 10, "time": 79, "gap": 4, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 6], "pause": 0 }, { "start": [1, 6], "end": [6, 7], "pause": 0 }] },
        { "number": 11, "time": 79, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 10], "checkpoints": [{ "start": [0, 10], "end": [1, 10], "pause": 20 }, { "start": [1, 10], "end": [1, 9], "pause": 0 }, { "start": [1, 9], "end": [0, 9], "pause": 5 }, { "start": [6, 1], "end": [6, 2], "pause": 20 }, { "start": [6, 2], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [5, 1], "pause": 5 }, { "start": [5, 11], "end": [5, 10], "pause": 10 }, { "start": [5, 10], "end": [6, 10], "pause": 0 }, { "start": [6, 10], "end": [6, 11], "pause": 0 }] },
        { "number": 12, "time": 82, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [2, 1], "checkpoints": [{ "start": [2, 1], "end": [3, 5], "pause": 0 }, { "start": [3, 5], "end": [6, 6], "pause": 0 }] },
        { "number": 13, "time": 105, "gap": 7, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [2, 1], "checkpoints": [{ "start": [2, 1], "end": [3, 5], "pause": 0 }, { "start": [3, 5], "end": [6, 6], "pause": 0 }] },
        { "number": 14, "time": 107, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 6], "pause": 0 }, { "start": [1, 6], "end": [6, 7], "pause": 0 }] },
        { "number": 15, "time": 107, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 10], "checkpoints": [{ "start": [0, 10], "end": [1, 10], "pause": 20 }, { "start": [1, 10], "end": [1, 9], "pause": 0 }, { "start": [1, 9], "end": [0, 9], "pause": 5 }, { "start": [6, 1], "end": [6, 2], "pause": 20 }, { "start": [6, 2], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [5, 1], "pause": 5 }, { "start": [5, 11], "end": [5, 10], "pause": 10 }, { "start": [5, 10], "end": [6, 10], "pause": 0 }, { "start": [6, 10], "end": [6, 11], "pause": 0 }] },
        { "number": 16, "time": 110, "gap": 8, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 6], "pause": 0 }, { "start": [1, 6], "end": [6, 7], "pause": 0 }] },
        { "number": 17, "time": 127, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 6], "pause": 0 }, { "start": [1, 6], "end": [6, 7], "pause": 0 }] },
        { "number": 18, "time": 139, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [2, 1], "checkpoints": [{ "start": [2, 1], "end": [3, 5], "pause": 0 }, { "start": [3, 5], "end": [6, 6], "pause": 0 }] },
        { "number": 19, "time": 142, "gap": 4, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 6], "pause": 0 }, { "start": [1, 6], "end": [6, 7], "pause": 0 }] },
        { "number": 20, "time": 146, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 10], "checkpoints": [{ "start": [0, 10], "end": [1, 10], "pause": 20 }, { "start": [1, 10], "end": [1, 9], "pause": 0 }, { "start": [1, 9], "end": [0, 9], "pause": 5 }, { "start": [6, 1], "end": [6, 2], "pause": 20 }, { "start": [6, 2], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [5, 1], "pause": 5 }, { "start": [5, 11], "end": [5, 10], "pause": 10 }, { "start": [5, 10], "end": [6, 10], "pause": 0 }, { "start": [6, 10], "end": [6, 11], "pause": 0 }] },
        { "number": 21, "time": 148, "gap": 10, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 6], "pause": 0 }, { "start": [1, 6], "end": [6, 7], "pause": 0 }] },
        { "number": 22, "time": 158, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 6], "pause": 0 }, { "start": [1, 6], "end": [6, 7], "pause": 0 }] },
        { "number": 23, "time": 165, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 4, "taunt": false, "start": [2, 1], "checkpoints": [{ "start": [2, 1], "end": [3, 5], "pause": 0 }, { "start": [3, 5], "end": [6, 6], "pause": 0 }] },
    ],

    enemies: ["Guerrilla Hound Pro", "Guerrilla Fighter Leader", "Guerrilla Herald Leader", "Guerrilla Shieldguard", "Guerrilla Sniper Leader"],
    tooltips: ["Guerrilla Shieldguard"],

    hazards: [],


    layout: [["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "enterbottom", "red", "bg"],
    ["e", "red", "blk", "g", "g", "g", "g", "r", "bg", "blk", "blk", "bg"],
    ["e", "red", "blk", "g", "g", "g", "g", "g", "bg", "g", "blk", "bg"],
    ["e", "bg", "r", "r", "r", "g", "g", "g", "bg", "bg", "bg", "bg"],
    ["e", "bg", "bg", "bg", "bg", "r", "g", "g", "r", "r", "bg", "bg"],
    ["e", "enterright", "blk", "g", "bg", "r", "g", "g", "bg", "g", "blk", "enterright"],
    ["e", "enterleft", "blk", "blk", "bg", "bg", "blue", "blue", "bg", "blk", "blk", "blue"],
    ["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ],
}

levels["7-10"] = {
    level: "7-10",
    name: "Guerilla-1",
    bgm: "ep7_2",
    initialdp: 10,
    squadlimit: 8,
    hp: 3,
    background: "loading_CB_under",
    description: "The mortars used by the guerillas pose a significant threat to us.\nThese weapons taken from Ursus's military arsenal\nare terrifying incarnations of the very essence of war.",
    place: "Plain",
    offsetX: -25,
    offsetY: -60,
    offsetZ: 0,
    type: "normal",
    skybox: "nightsky.png",

    waves: [

        { "number": 0, "time": 8, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": false, "count": 1, "taunt": true, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 10], "pause": 3 }, { "start": [5, 10], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [3, 3], "pause": 0 }] },
        { "number": 1, "time": 18, "gap": 8, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [3, 3], "pause": 0 }] },
        { "number": 2, "time": 24, "gap": 8, "enemies": "Guerrilla Fighter Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [3, 4], "pause": 0 }] },
        { "number": 3, "time": 37, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [1, 7], "checkpoints": [{ "start": [1, 7], "end": [1, 6], "pause": 30 }, { "start": [1, 6], "end": [3, 3], "pause": 0 }] },
        { "number": 4, "time": 40, "gap": 4, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [3, 3], "pause": 0 }] },
        { "number": 5, "time": 42, "gap": 10, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [3, 4], "pause": 0 }] },
        { "number": 6, "time": 47, "gap": 10, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [3, 4], "pause": 0 }] },
        { "number": 7, "time": 51, "gap": 4, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [3, 3], "pause": 0 }] },
        { "number": 8, "time": 70, "gap": 4, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [3, 3], "pause": 0 }] },
        { "number": 9, "time": 74, "gap": 10, "enemies": "Guerrilla Shieldguard", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 10], "pause": 15 }, { "start": [4, 10], "end": [3, 4], "pause": 0 }] },
        { "number": 10, "time": 76, "gap": 5, "enemies": "Guerrilla Mortar", "line": false, "tooltip": true, "count": 1, "taunt": false, "start": [1, 7], "checkpoints": [{ "start": [1, 7], "end": [3, 3], "pause": 0 }] },
        { "number": 11, "time": 82, "gap": 4, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [3, 3], "pause": 0 }] },
        { "number": 12, "time": 100, "gap": 4, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [3, 3], "pause": 0 }] },
        { "number": 13, "time": 102, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 7], "checkpoints": [{ "start": [1, 7], "end": [3, 3], "pause": 0 }] },
        { "number": 14, "time": 104, "gap": 4, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [3, 4], "pause": 0 }] },
        { "number": 15, "time": 111, "gap": 4, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [3, 3], "pause": 0 }] },
        { "number": 16, "time": 118, "gap": 4, "enemies": "Guerrilla Shieldguard", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [3, 4], "pause": 0 }] },
        { "number": 17, "time": 121, "gap": 4, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [3, 3], "pause": 0 }] },
        { "number": 18, "time": 142, "gap": 3, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [3, 3], "pause": 0 }] },
        { "number": 19, "time": 144, "gap": 25, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [1, 7], "checkpoints": [{ "start": [1, 7], "end": [3, 3], "pause": 0 }] },
        { "number": 10, "time": 148, "gap": 4, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [3, 4], "pause": 0 }] },
        { "number": 21, "time": 157, "gap": 3, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [3, 3], "pause": 0 }] },
        { "number": 22, "time": 158, "gap": 31, "enemies": "Guerrilla Mortar", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 7], "checkpoints": [{ "start": [1, 7], "end": [3, 3], "pause": 0 }] },
        { "number": 23, "time": 160, "gap": 4, "enemies": "Guerrilla Shieldguard", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [3, 4], "pause": 0 }] },
        { "number": 24, "time": 165, "gap": 4, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [3, 4], "pause": 0 }] },
        { "number": 25, "time": 169, "gap": 3, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [3, 3], "pause": 0 }] },
        { "number": 26, "time": 181, "gap": 3, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [3, 3], "pause": 0 }] },
        { "number": 27, "time": 183, "gap": 4, "enemies": "Guerrilla Shieldguard", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [3, 4], "pause": 0 }] },
        { "number": 28, "time": 190, "gap": 4, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [3, 4], "pause": 0 }] },
        { "number": 29, "time": 193, "gap": 3, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [3, 3], "pause": 0 }] },

    ],

    enemies: ["Guerrilla Hound Pro", "Guerrilla Fighter Leader", "Guerrilla Mortar", "Guerrilla Herald Leader", "Guerrilla Shieldguard", "Guerrilla Sniper Leader"],
    tooltips: ["Guerrilla Mortar"],

    hazards: [],


    layout: [["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "g", "g", "blk", "g", "g", "blk", "red", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "blk", "r", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "g", "r", "blue", "blue", "bg", "r", "r", "r", "bg", "bg", "bg", "bg"],
    ["bg", "blk", "bg", "g", "g", "g", "g", "g", "blk", "blk", "blk", "red", "bg"],
    ["bg", "g", "r", "g", "g", "g", "g", "blk", "blk", "blk", "blk", "red", "bg"],
    ["bg", "blk", "blk", "g", "bg", "r", "r", "r", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ],
}

levels["7-11"] = {
    level: "7-11",
    name: "Guerilla-2",
    bgm: "ep7_2",
    initialdp: 10,
    squadlimit: 8,
    hp: 3,
    background: "loading_CB_under",
    description: "The guerillas' Vertical Strike Squad \nhas withstood harsh trials and brutal wars.\nThey've fought Ursus for more than a decade,\nand their will is nigh indomitable. \nWe have but a single moment for a chance at victory.",
    place: "Plain",
    offsetX: -20,
    offsetY: -70,
    offsetZ: 0,
    type: "normal",
    skybox: "nightsky.png",

    waves: [
        { "number": 0, "time": 3, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 2], "checkpoints": [{ "start": [2, 2], "end": [1, 2], "pause": 75 }, { "start": [1, 2], "end": [0, 2], "pause": 10 }, { "start": [5, 6], "end": [5, 1], "pause": 0 }] },
        { "number": 1, "time": 6, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": false, "count": 1, "taunt": true, "start": [2, 2], "checkpoints": [{ "start": [2, 2], "end": [6, 1], "pause": 0 }] },
        { "number": 2, "time": 10, "gap": 10, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 2], "checkpoints": [{ "start": [2, 2], "end": [6, 1], "pause": 0 }] },
        { "number": 3, "time": 17, "gap": 7, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [2, 2], "checkpoints": [{ "start": [2, 2], "end": [6, 1], "pause": 0 }] },
        { "number": 4, "time": 28, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [2, 2], "checkpoints": [{ "start": [2, 2], "end": [6, 1], "pause": 0 }] },
        { "number": 5, "time": 29, "gap": 7, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 2], "checkpoints": [{ "start": [2, 2], "end": [6, 1], "pause": 0 }] },

        { "number": 6, "time": 54, "gap": 7, "enemies": "Guerrilla Shieldguard Leader", "line": true, "tooltip": true, "count": 1, "taunt": true, "start": [1, 9], "checkpoints": [{ "start": [1, 9], "end": [2, 8], "pause": 60 }, { "start": [2, 8], "end": [6, 1], "pause": 0 }] },
        { "number": 7, "time": 61, "gap": 7, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 9], "checkpoints": [{ "start": [1, 9], "end": [1, 10], "pause": 60 }, { "start": [1, 10], "end": [1, 11], "pause": 10 }, { "start": [5, 6], "end": [6, 1], "pause": 0 }] },

        { "number": 8, "time": 74, "gap": 30, "enemies": "Guerrilla Sniper Leader", "line": true, "tooltip": false, "count": 2, "taunt": false, "start": [2, 2], "checkpoints": [{ "start": [2, 2], "end": [6, 4], "pause": 0 }, { "start": [6, 4], "end": [5, 1], "pause": 0 }] },
        { "number": 9, "time": 75, "gap": 30, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 2], "checkpoints": [{ "start": [2, 2], "end": [6, 4], "pause": 0 }, { "start": [6, 4], "end": [5, 1], "pause": 0 }] },
        { "number": 10, "time": 76, "gap": 8, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [2, 2], "checkpoints": [{ "start": [2, 2], "end": [6, 4], "pause": 0 }, { "start": [6, 4], "end": [5, 1], "pause": 0 }] },
        { "number": 11, "time": 83, "gap": 13, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [2, 2], "checkpoints": [{ "start": [2, 2], "end": [6, 4], "pause": 0 }, { "start": [6, 4], "end": [5, 1], "pause": 0 }] },
        { "number": 12, "time": 84, "gap": 13, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [2, 2], "checkpoints": [{ "start": [2, 2], "end": [6, 4], "pause": 0 }, { "start": [6, 4], "end": [5, 1], "pause": 0 }] },
        { "number": 13, "time": 86, "gap": 30, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 2], "checkpoints": [{ "start": [2, 2], "end": [6, 4], "pause": 0 }, { "start": [6, 4], "end": [5, 1], "pause": 0 }] },

        { "number": 14, "time": 86, "gap": 10, "enemies": "Guerrilla Siegebreaker", "line": true, "tooltip": true, "count": 2, "taunt": false, "start": [5, 4], "checkpoints": [{ "start": [5, 4], "end": [5, 4], "pause": 20 }, { "start": [5, 4], "end": [5, 1], "pause": 0 }] },
        { "number": 15, "time": 88, "gap": 10, "enemies": "Guerrilla Siegebreaker", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [6, 4], "checkpoints": [{ "start": [6, 4], "end": [6, 4], "pause": 20 }, { "start": [6, 4], "end": [6, 1], "pause": 0 }] },

        { "number": 16, "time": 128, "gap": 7, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 9], "checkpoints": [{ "start": [1, 9], "end": [1, 10], "pause": 90 }, { "start": [1, 10], "end": [1, 11], "pause": 10 }, { "start": [5, 6], "end": [6, 1], "pause": 0 }] },
        { "number": 17, "time": 128, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 2], "checkpoints": [{ "start": [2, 2], "end": [1, 2], "pause": 90 }, { "start": [1, 2], "end": [0, 2], "pause": 10 }, { "start": [5, 6], "end": [5, 1], "pause": 0 }] },
        { "number": 18, "time": 129, "gap": 3, "enemies": "Guerrilla Shieldguard Leader", "line": true, "tooltip": false, "count": 1, "taunt": true, "start": [2, 2], "checkpoints": [{ "start": [2, 2], "end": [2, 4], "pause": 60 }, { "start": [2, 4], "end": [6, 1], "pause": 0 }] },
        { "number": 19, "time": 129, "gap": 7, "enemies": "Guerrilla Shieldguard Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 9], "checkpoints": [{ "start": [1, 9], "end": [2, 8], "pause": 60 }, { "start": [2, 8], "end": [6, 1], "pause": 0 }] },
        { "number": 20, "time": 137, "gap": 7, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 9], "checkpoints": [{ "start": [1, 9], "end": [1, 10], "pause": 90 }, { "start": [1, 10], "end": [1, 11], "pause": 10 }, { "start": [5, 6], "end": [6, 1], "pause": 0 }] },
        { "number": 21, "time": 165, "gap": 12, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [2, 2], "checkpoints": [{ "start": [2, 2], "end": [6, 1], "pause": 0 }] },
        { "number": 22, "time": 165, "gap": 15, "enemies": "Guerrilla Siegebreaker", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [5, 4], "checkpoints": [{ "start": [5, 4], "end": [5, 1], "pause": 0 }] },
        { "number": 23, "time": 167, "gap": 10, "enemies": "Guerrilla Fighter Leader", "line": true, "tooltip": false, "count": 3, "taunt": false, "start": [1, 9], "checkpoints": [{ "start": [1, 9], "end": [6, 1], "pause": 0 }] },
        { "number": 24, "time": 167, "gap": 15, "enemies": "Guerrilla Siegebreaker", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [6, 4], "checkpoints": [{ "start": [6, 4], "end": [6, 1], "pause": 0 }] },
        { "number": 25, "time": 171, "gap": 12, "enemies": "Guerrilla Sniper Leader", "line": true, "tooltip": false, "count": 3, "taunt": false, "start": [1, 9], "checkpoints": [{ "start": [1, 9], "end": [6, 5], "pause": 0 }, { "start": [6, 5], "end": [5, 1], "pause": 0 }] },
        { "number": 26, "time": 187, "gap": 10, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 9], "checkpoints": [{ "start": [1, 9], "end": [6, 1], "pause": 0 }] },
        { "number": 27, "time": 200, "gap": 15, "enemies": "Guerrilla Siegebreaker", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 4], "checkpoints": [{ "start": [6, 4], "end": [6, 1], "pause": 0 }] },
    ],

    enemies: ["Guerrilla Hound Pro", "Guerrilla Fighter Leader", "Guerrilla Siegebreaker", "Guerrilla Herald Leader", "Guerrilla Shieldguard Leader", "Guerrilla Sniper Leader"],
    tooltips: ["Guerrilla Siegebreaker", "Guerrilla Shieldguard Leader"],

    hazards: [],


    layout: [["bg", "bg", "enterbottom", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "blk", "bg", "g", "g", "g", "g", "g", "red", "blk", "enterleft", "bg"],
    ["bg", "bg", "red", "gblk", "g", "r", "r", "r", "g", "gblk", "bg", "bg", "bg"],
    ["bg", "bg", "g", "g", "g", "r", "r", "r", "g", "g", "g", "bg", "bg"],
    ["bg", "bg", "bg", "r", "bg", "bg", "bg", "bg", "bg", "g", "g", "bg", "bg"],
    ["bg", "blue", "g", "g", "g", "blk", "enterright", "bg", "bg", "g", "g", "bg", "bg"],
    ["bg", "blue", "g", "g", "blk", "blk", "g", "g", "g", "g", "g", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ],
}

levels["7-12"] = {
    level: "7-12",
    name: "Unrivaled",
    bgm: "ep7_2",
    initialdp: 10,
    squadlimit: 9,
    hp: 3,
    background: "loading_CB_under",
    description: "Who has witnessed a battle like this before? \nWho can survive such a battlefield? \nEven a simple skirmish has struck fear into our hearts. \nWe do not have the ability to defeat them. \nWe must escape to where they cannot see us.",
    place: "Plain",
    offsetX: -20,
    offsetY: -60,
    offsetZ: 15,
    type: "hard",
    skybox: "nightsky.png",

    waves: [
        { "number": 0, "time": 0, "gap": 5, "enemies": "Guerrilla Shieldguard Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 12], "checkpoints": [{ "start": [6, 12], "end": [3, 3], "pause": 165 }, { "start": [3, 3], "end": [5, 1], "pause": 0 }] },
        { "number": 1, "time": 5, "gap": 5, "enemies": "Guerrilla Shieldguard Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 12], "checkpoints": [{ "start": [6, 12], "end": [3, 6], "pause": 150 }, { "start": [3, 6], "end": [5, 1], "pause": 0 }] },
        { "number": 2, "time": 8, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": false, "count": 1, "taunt": true, "start": [1, 12], "checkpoints": [{ "start": [1, 12], "end": [1, 11], "pause": 2 }, { "start": [1, 11], "end": [5, 1], "pause": 0 }] },
        { "number": 3, "time": 10, "gap": 5, "enemies": "Guerrilla Shieldguard Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 12], "checkpoints": [{ "start": [6, 12], "end": [6, 6], "pause": 140 }, { "start": [6, 6], "end": [5, 1], "pause": 0 }] },
        { "number": 4, "time": 13, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 12], "checkpoints": [{ "start": [1, 12], "end": [5, 1], "pause": 0 }] },
        { "number": 5, "time": 15, "gap": 5, "enemies": "Guerrilla Shieldguard Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 12], "checkpoints": [{ "start": [6, 12], "end": [6, 9], "pause": 160 }, { "start": [6, 9], "end": [5, 1], "pause": 0 }] },
        { "number": 6, "time": 19, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 12], "checkpoints": [{ "start": [1, 12], "end": [5, 1], "pause": 0 }] },
        { "number": 7, "time": 33, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 12], "checkpoints": [{ "start": [1, 12], "end": [5, 1], "pause": 0 }] },
        { "number": 8, "time": 44, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 12], "checkpoints": [{ "start": [6, 12], "end": [6, 11], "pause": 3 },{ "start": [6, 11], "end": [3, 1], "pause": 1 }, { "start": [1, 6], "end": [1, 5], "pause": 30 },{ "start": [1, 5], "end": [1, 1], "pause": 1 },{ "start": [3, 12], "end": [3, 10], "pause": 0 },{ "start": [3, 10], "end": [4, 10], "pause": 0 },{ "start": [4, 10], "end": [4, 12], "pause": 0 }] },
        { "number": 9, "time": 49, "gap": 5, "enemies": "Guerrilla Sniper Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [6, 12], "checkpoints": [{ "start": [6, 12], "end": [5, 1], "pause": 0 }] },
        { "number": 10, "time": 56, "gap": 5, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": true, "count": 1, "taunt": false, "start": [1, 8], "checkpoints": [{ "start": [1, 8], "end": [1, 8], "pause": 3 }, { "start": [1, 8], "end": [5, 1], "pause": 0 }] },
        { "number": 11, "time": 57, "gap": 5, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 9], "checkpoints": [{ "start": [1, 9], "end": [1, 9], "pause": 4 }, { "start": [1, 9], "end": [5, 1], "pause": 0 }] },
        { "number": 12, "time": 61, "gap": 5, "enemies": "Guerrilla Mortar Leader", "line": false, "tooltip": true, "count": 1, "taunt": false, "start": [0, 2], "checkpoints": [{ "start": [0, 2], "end": [1, 2], "pause": 60 },{ "start": [1, 2], "end": [1, 1], "pause": 1 },{ "start": [3, 12], "end": [3, 10], "pause": 0 },{ "start": [3, 10], "end": [4, 10], "pause": 0 },{ "start": [4, 10], "end": [4, 12], "pause": 0 }] },
        { "number": 13, "time": 64, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 12], "checkpoints": [{ "start": [6, 12], "end": [6, 11], "pause": 3 },{ "start": [6, 11], "end": [3, 1], "pause": 1 }, { "start": [1, 6], "end": [1, 4], "pause": 30 },{ "start": [1, 4], "end": [1, 1], "pause": 1 },{ "start": [3, 12], "end": [3, 10], "pause": 0 },{ "start": [3, 10], "end": [4, 10], "pause": 0 },{ "start": [4, 10], "end": [4, 12], "pause": 0 }] },
        { "number": 14, "time": 70, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 12], "checkpoints": [{ "start": [1, 12], "end": [5, 1], "pause": 0 }] },
        { "number": 15, "time": 84, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 12], "checkpoints": [{ "start": [1, 12], "end": [5, 1], "pause": 0 }] },
        { "number": 16, "time": 87, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 12], "checkpoints": [{ "start": [6, 12], "end": [3, 1], "pause": 1 }, { "start": [1, 6], "end": [1, 5], "pause": 30 },{ "start": [1, 5], "end": [1, 1], "pause": 1 },{ "start": [3, 12], "end": [3, 10], "pause": 0 },{ "start": [3, 10], "end": [4, 10], "pause": 0 },{ "start": [4, 10], "end": [4, 12], "pause": 0 }] },
        { "number": 17, "time": 102, "gap": 5, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 12], "checkpoints": [{ "start": [6, 12], "end": [5, 1], "pause": 0 }] },
        { "number": 18, "time": 103, "gap": 3, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 12], "checkpoints": [{ "start": [1, 12], "end": [5, 1], "pause": 0 }] },
        { "number": 19, "time": 107, "gap": 5, "enemies": "Guerrilla Mortar Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 3], "checkpoints": [{ "start": [0, 3], "end": [1, 3], "pause": 40 },{ "start": [1, 3], "end": [1, 1], "pause": 1 },{ "start": [3, 12], "end": [3, 10], "pause": 0 },{ "start": [3, 10], "end": [4, 10], "pause": 0 },{ "start": [4, 10], "end": [4, 12], "pause": 0 }] },
        { "number": 20, "time": 111, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 12], "checkpoints": [{ "start": [6, 12],  "end": [3, 1], "pause": 1 }, { "start": [1, 6], "end": [1, 4], "pause": 30 },{ "start": [1, 4], "end": [1, 1], "pause": 1 },{ "start": [3, 12], "end": [3, 10], "pause": 0 },{ "start": [3, 10], "end": [4, 10], "pause": 0 },{ "start": [4, 10], "end": [4, 12], "pause": 0 }] },
        { "number": 21, "time": 113, "gap": 5, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 9], "checkpoints": [{ "start": [1, 9], "end": [1, 9], "pause": 4 }, { "start": [1, 9], "end": [5, 1], "pause": 0 }] },
        { "number": 22, "time": 114, "gap": 5, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 10], "checkpoints": [{ "start": [1, 10], "end": [1, 10], "pause": 5 }, { "start": [1, 10], "end": [5, 1], "pause": 0 }] },
        { "number": 23, "time": 125, "gap": 3, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 12], "checkpoints": [{ "start": [1, 12], "end": [5, 1], "pause": 0 }] },
        { "number": 24, "time": 130, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 12], "checkpoints": [{ "start": [6, 12], "end": [3, 1], "pause": 1 }, { "start": [1, 6], "end": [1, 5], "pause": 30 },{ "start": [1, 5], "end": [1, 1], "pause": 1 },{ "start": [3, 12], "end": [3, 10], "pause": 0 },{ "start": [3, 10], "end": [4, 10], "pause": 0 },{ "start": [4, 10], "end": [4, 12], "pause": 0 }] },
        { "number": 25, "time": 138, "gap": 3, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 12], "checkpoints": [{ "start": [1, 12], "end": [5, 1], "pause": 0 }] },
        { "number": 26, "time": 138, "gap": 5, "enemies": "Guerrilla Mortar Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 2], "checkpoints": [{ "start": [0, 2], "end": [1, 2], "pause": 40 },{ "start": [1, 2], "end": [1, 1], "pause": 1 },{ "start": [3, 12], "end": [3, 10], "pause": 0 },{ "start": [3, 10], "end": [4, 10], "pause": 0 },{ "start": [4, 10], "end": [4, 12], "pause": 0 }] },
        { "number": 27, "time": 148, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 12], "checkpoints": [{ "start": [1, 12], "end": [5, 1], "pause": 0 }] },
        { "number": 28, "time": 152, "gap": 5, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 10], "checkpoints": [{ "start": [6, 10], "end": [6, 10], "pause": 11 },{ "start": [6, 10], "end": [5, 1], "pause": 0 }] },
        { "number": 29, "time": 153, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 12], "checkpoints": [{ "start": [6, 12],  "end": [3, 1], "pause": 1 }, { "start": [1, 6], "end": [1, 4], "pause": 15 },{ "start": [1, 4], "end": [1, 1], "pause": 1 },{ "start": [3, 12], "end": [3, 10], "pause": 0 },{ "start": [3, 10], "end": [4, 10], "pause": 0 },{ "start": [4, 10], "end": [4, 12], "pause": 0 }] },
        { "number": 30, "time": 153, "gap": 5, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [6, 11], "pause": 12 },{ "start": [6, 11], "end": [5, 1], "pause": 0 }] },
        { "number": 31, "time": 170, "gap": 5, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 9], "checkpoints": [{ "start": [1, 9], "end": [1, 9], "pause": 10 }, { "start": [1, 9], "end": [5, 1], "pause": 0 }] },
        { "number": 32, "time": 171, "gap": 5, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 10], "checkpoints": [{ "start": [1, 10], "end": [1, 10], "pause": 12 }, { "start": [1, 10], "end": [5, 1], "pause": 0 }] },
        { "number": 33, "time": 172, "gap": 5, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 11], "checkpoints": [{ "start": [1, 11], "end": [1, 11], "pause": 13 }, { "start": [1, 11], "end": [5, 1], "pause": 0 }] },
        { "number": 34, "time": 173, "gap": 5, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 12], "checkpoints": [{ "start": [6, 12], "end": [5, 1], "pause": 0 }] },
        { "number": 35, "time": 178, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 3], "checkpoints": [{ "start": [0, 3], "end": [1, 3], "pause": 10 },{ "start": [1, 3], "end": [1, 1], "pause": 1 },{ "start": [3, 12], "end": [3, 10], "pause": 0 },{ "start": [3, 10], "end": [4, 10], "pause": 0 },{ "start": [4, 10], "end": [4, 12], "pause": 0 }] },
        { "number": 36, "time": 186, "gap": 3, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 12], "checkpoints": [{ "start": [1, 12], "end": [5, 1], "pause": 0 }] },
        { "number": 37, "time": 189, "gap": 5, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 9], "checkpoints": [{ "start": [6, 9], "end": [6, 9], "pause": 10 },{ "start": [6, 9], "end": [5, 1], "pause": 0 }] },
        { "number": 38, "time": 190, "gap": 5, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 10], "checkpoints": [{ "start": [6, 10], "end": [6, 10], "pause": 11 },{ "start": [6, 10], "end": [5, 1], "pause": 0 }] },
        { "number": 39, "time": 191, "gap": 5, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 11], "checkpoints": [{ "start": [6, 11], "end": [6, 11], "pause": 12 },{ "start": [6, 11], "end": [5, 1], "pause": 0 }] },
        { "number": 40, "time": 195, "gap": 3, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 12], "checkpoints": [{ "start": [1, 12], "end": [5, 1], "pause": 0 }] },

    ],

    enemies: ["Guerrilla Hound Pro", "Guerrilla Fighter Leader", "Guerrilla Siegebreaker Leader", "Guerrilla Mortar Leader", "Guerrilla Herald Leader", "Guerrilla Shieldguard Leader", "Guerrilla Sniper Leader"],
    tooltips: ["Guerrilla Siegebreaker Leader", "Guerrilla Mortar Leader"],

    hazards: [],


    layout: [["e", "bg", "red", "red", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["e", "enterright", "blk", "blk", "blk", "blk", "enterright", "bg", "g", "g", "g", "blk", "red"],
    ["e", "bg", "bg", "bg", "bg", "bg", "bg", "g", "g", "bg", "bg", "bg", "bg"],
    ["e", "enterright", "blk", "blk", "blk", "blk", "blk", "g", "r", "r", "g", "blk", "enterright"],
    ["e", "bg", "bg", "bg", "bg", "bg", "blk", "r", "r", "r", "g", "blk", "blue"],
    ["e", "blue", "g", "g", "g", "g", "blk", "r", "r", "r", "bg", "bg", "bg"],
    ["e", "bg", "r", "r", "r", "r", "blk", "blk", "blk", "blk", "blk", "blk", "red"],
    ["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ],
}

levels["7-13"] = {
    level: "7-13",
    name: "Aegis of the Infected-2",
    bgm: "ep7_2",
    initialdp: 10,
    squadlimit: 9,
    hp: 3,
    background: "loading_CB_under",
    description: "We cannot destroy them, \nso we will do our best not to be destroyed by them. \nWe must achieve a tactical victory. \nWe strive to paralyze their spinal cord and expose the giant's head to us.\n\n<Originium Altar> Periodically emits Pulse Waves to the surrounding tiles, \ndamaging both allied and enemy units.",
    place: "Plain",
    offsetX: -20,
    offsetY: -60,
    offsetZ: 15,
    type: "normal",
    skybox: "nightsky.png",

    waves: [
        { "number": 0, "time": 8, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": true, "tooltip": false, "count": 1, "taunt": true, "start": [7, 4], "checkpoints": [{ "start": [7, 4], "end": [6, 4], "pause": 5 }, { "start": [6, 4], "end": [4, 4], "pause": 0 },{ "start": [4, 4], "end": [0, 8], "pause": 0 }] },
        { "number": 1, "time": 22, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [7, 4], "checkpoints": [{ "start": [7, 4], "end": [4, 4], "pause": 0 },{ "start": [4, 4], "end": [0, 8], "pause": 0 }] },
        { "number": 2, "time": 22, "gap": 5, "enemies": "Sarkaz Guerrilla Caster Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [3, 12], "checkpoints": [{ "start": [3, 12], "end": [3, 11], "pause": 15 },{ "start": [3, 11], "end": [0, 5], "pause": 0 }] },
        { "number": 3, "time": 37, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [7, 4], "checkpoints": [{ "start": [7, 4], "end": [4, 4], "pause": 0 },{ "start": [4, 4], "end": [0, 8], "pause": 0 }] },
        { "number": 4, "time": 53, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [7, 4], "checkpoints": [{ "start": [7, 4], "end": [4, 4], "pause": 0 },{ "start": [4, 4], "end": [0, 8], "pause": 0 }] },
        { "number": 5, "time": 59, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [0, 2], "checkpoints": [{ "start": [0, 2], "end": [1, 2], "pause": 60 },{ "start": [1, 2], "end": [6, 4], "pause": 0 },{ "start": [6, 4], "end": [6, 12], "pause": 0 }] },
        { "number": 6, "time": 65, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [7, 4], "checkpoints": [{ "start": [7, 4], "end": [4, 4], "pause": 0 },{ "start": [4, 4], "end": [0, 8], "pause": 0 }] },
        { "number": 7, "time": 65, "gap": 5, "enemies": "Sarkaz Guerrilla Caster Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 12], "checkpoints": [{ "start": [3, 12], "end": [0, 5], "pause": 0 }] },
        { "number": 8, "time": 72, "gap": 5, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [0, 2], "checkpoints": [{ "start": [0, 2], "end": [6, 4], "pause": 0 },{ "start": [6, 4], "end": [6, 12], "pause": 0 }] },
        { "number": 9, "time": 77, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [7, 4], "checkpoints": [{ "start": [7, 4], "end": [4, 4], "pause": 0 },{ "start": [4, 4], "end": [0, 8], "pause": 0 }] },
        { "number": 10, "time": 98, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [7, 4], "checkpoints": [{ "start": [7, 4], "end": [4, 4], "pause": 0 },{ "start": [4, 4], "end": [0, 8], "pause": 0 }] },
        { "number": 11, "time": 101, "gap": 6, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 2], "checkpoints": [{ "start": [0, 2], "end": [6, 4], "pause": 0 },{ "start": [6, 4], "end": [6, 12], "pause": 0 }] },
        { "number": 12, "time": 104, "gap": 5, "enemies": "Sarkaz Guerrilla Caster Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 12], "checkpoints": [{ "start": [3, 12], "end": [0, 5], "pause": 0 }] },
        { "number": 13, "time": 106, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [7, 4], "checkpoints": [{ "start": [7, 4], "end": [4, 4], "pause": 0 },{ "start": [4, 4], "end": [0, 8], "pause": 0 }] },
        { "number": 14, "time": 127, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [7, 4], "checkpoints": [{ "start": [7, 4], "end": [4, 4], "pause": 0 },{ "start": [4, 4], "end": [0, 8], "pause": 0 }] },
        { "number": 15, "time": 130, "gap": 9, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 2], "checkpoints": [{ "start": [0, 2], "end": [6, 4], "pause": 0 },{ "start": [6, 4], "end": [6, 12], "pause": 0 }] },
        { "number": 16, "time": 127, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [7, 4], "checkpoints": [{ "start": [7, 4], "end": [4, 4], "pause": 0 },{ "start": [4, 4], "end": [0, 8], "pause": 0 }] },
        { "number": 17, "time": 140, "gap": 5, "enemies": "Sarkaz Guerrilla Caster Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 12], "checkpoints": [{ "start": [3, 12], "end": [0, 5], "pause": 0 }] },
        { "number": 18, "time": 160, "gap": 30, "enemies": "Guerrilla Shieldguard Leader", "line": true, "tooltip": false, "count": 2, "taunt": true, "start": [0, 2], "checkpoints": [{ "start": [0, 2], "end": [1, 2], "pause": 15 },{ "start": [1, 2], "end": [6, 4], "pause": 0 },{ "start": [6, 4], "end": [6, 12], "pause": 0 }] },
        { "number": 19, "time": 166, "gap": 36, "enemies": "Sarkaz Guerrilla Caster Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [3, 12], "checkpoints": [{ "start": [3, 12], "end": [0, 5], "pause": 0 }] },
        { "number": 20, "time": 166, "gap": 40, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 2], "checkpoints": [{ "start": [0, 2], "end": [6, 4], "pause": 0 },{ "start": [6, 4], "end": [6, 12], "pause": 0 }] },
        { "number": 21, "time": 169, "gap": 25, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [7, 4], "checkpoints": [{ "start": [7, 4], "end": [4, 4], "pause": 0 },{ "start": [4, 4], "end": [0, 8], "pause": 0 }] },
    ],

    enemies: [ "Guerrilla Fighter Leader", "Sarkaz Guerrilla Caster Leader", "Sarkaz Guerrilla Fighter Leader", "Guerrilla Herald Leader", "Guerrilla Shieldguard Leader"],
    tooltips: [],

    hazards: ["altar"],


    layout: [["e", "bg", "red", "bg", "bg", "blue", "bg", "bg", "blue", "bg", "bg", "bg", "bg"],
    ["e", "bg", "g", "bg", "r", "g", "r", "r", "g", "bg", "bg", "bg", "bg"],
    ["e", "bg", "g", "r", "bg", "blk", "r", "bg", "g", "bg", "bg", "bg", "bg"],
    ["e", "bg", "blk","r", "altar", "g", "bg", "r", "g", "g", "blk", "blk", "red"],
    ["e", "bg", "blk", "g", "blk", "g", "g", "blk", "blk", "altar", "bg", "r", "bg"],
    ["e", "bg","bg", "r", "g", "r", "r", "bg", "g", "bg", "r", "r", "bg"],
    ["e", "bg", "bg", "bg", "g", "g", "blk", "blk", "g", "g", "g", "g", "blue"],
    ["e", "bg", "bg", "bg", "red", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ],
}

levels["7-14"] = {
    level: "7-14",
    name: "Death of a Patriot",
    bgm: "patriot_1",
    initialdp: 10,
    squadlimit: 9,
    hp: 3,
    background: "loading_CB_under",
    description: "They are commanded by the \"Aegis\" of the Infected. \nThe most ancient bloodline among the warriors of Sarkaz.\n Ursus's indomitable incarnation of war. \nThe backbone of the Reunion Movement. \nYelena's father.\n\n<Originium Altar> Periodically emits Pulse Waves to the surrounding tiles, \ndamaging both allied and enemy units.",
    place: "Plain",
    offsetX: -20,
    offsetY: -60,
    offsetZ: 15,
    type: "boss",
    skybox: "nightsky.png",

    waves: [
        { "number": 0, "time": 1, "gap": 5, "enemies": "Patriot", "line": false, "tooltip": true, "count": 1, "taunt": false, "start": [1, 12], "checkpoints": [{ "start": [1, 12], "end": [1, 11], "pause": 37 }, { "start": [1, 11], "end": [3, 8], "pause": 17 },{ "start": [3, 8], "end": [6, 8], "pause": 17 },{ "start": [6, 8], "end": [6, 6], "pause": 0 },{ "start": [6, 6], "end": [3, 6], "pause": 15 },{ "start": [3, 6], "end": [3, 4], "pause": 13 },{ "start": [3, 4], "end": [6, 4], "pause": 13 },{ "start": [6, 4], "end": [6, 2], "pause": 0 },{ "start": [6, 2], "end": [0, 6], "pause": 0 }] },
        { "number": 1, "time": 9, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": true, "tooltip": false, "count": 1, "taunt": true, "start": [5, 12], "checkpoints": [{ "start": [5, 12], "end": [5, 11], "pause": 2 },{ "start": [5, 11], "end": [6, 1], "pause": 0 }] },
        { "number": 2, "time": 17, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 12], "checkpoints": [{ "start": [5, 12], "end": [5, 11], "pause": 2 },{ "start": [5, 11], "end": [6, 1], "pause": 0 }] },
        { "number": 3, "time": 22, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 11], "pause": 2 },{ "start": [4, 11], "end": [3, 2], "pause": 0 },{ "start": [3, 2], "end": [6, 1], "pause": 0 }] },
        { "number": 4, "time": 29, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 11], "pause": 2 },{ "start": [4, 11], "end": [3, 2], "pause": 0 },{ "start": [3, 2], "end": [6, 1], "pause": 0 }] },
        { "number": 5, "time": 41, "gap": 7, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 12], "checkpoints": [{ "start": [5, 12], "end": [6, 1], "pause": 0 }] },
        { "number": 6, "time": 50, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [3, 2], "pause": 0 },{ "start": [3, 2], "end": [6, 1], "pause": 0 }] },
        { "number": 7, "time": 61, "gap": 7, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [5, 12], "checkpoints": [{ "start": [5, 12], "end": [6, 1], "pause": 0 }] },
        { "number": 8, "time": 67, "gap": 5, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 11], "pause": 2 },{ "start": [4, 11], "end": [3, 2], "pause": 0 },{ "start": [3, 2], "end": [6, 1], "pause": 0 }] },
        { "number": 9, "time": 82, "gap": 7, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 12], "checkpoints": [{ "start": [5, 12], "end": [6, 1], "pause": 0 }] },
        { "number": 10, "time": 83, "gap": 13, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 11], "pause": 2 },{ "start": [4, 11], "end": [3, 2], "pause": 0 },{ "start": [3, 2], "end": [6, 1], "pause": 0 }] },
        { "number": 11, "time": 100, "gap": 7, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 12], "checkpoints": [{ "start": [5, 12], "end": [6, 1], "pause": 0 }] },
        { "number": 12, "time": 108, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 12], "checkpoints": [{ "start": [5, 12], "end": [6, 1], "pause": 0 }] },
        { "number": 13, "time": 126, "gap": 13, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 5], "checkpoints": [{ "start": [3, 5], "end": [3, 5], "pause": 3 },{ "start": [3, 5], "end": [3, 2], "pause": 0 },{ "start": [3, 2], "end": [6, 1], "pause": 0 }] },
        { "number": 14, "time": 129, "gap": 13, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 5], "checkpoints": [{ "start": [6, 5], "end": [6, 5], "pause": 3 },{ "start": [6, 5], "end": [6, 1], "pause": 0 }] },
        { "number": 15, "time": 134, "gap": 13, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 7], "checkpoints": [{ "start": [3, 7], "end": [3, 7], "pause": 3 },{ "start": [3, 7], "end": [3, 2], "pause": 0 },{ "start": [3, 2], "end": [6, 1], "pause": 0 }] },
        { "number": 16, "time": 137, "gap": 13, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 7], "checkpoints": [{ "start": [6, 7], "end": [6, 7], "pause": 3 },{ "start": [6, 7], "end": [6, 1], "pause": 0 }] },
        { "number": 17, "time": 143, "gap": 13, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 9], "checkpoints": [{ "start": [5, 9], "end": [5, 9], "pause": 3 },{ "start": [5, 9], "end": [6, 6], "pause": 0 },{ "start": [6, 6], "end": [3, 6], "pause": 0 },{ "start": [3, 6], "end": [3, 4], "pause": 0 },{ "start": [3, 4], "end": [6, 4], "pause": 0 },{ "start": [6, 4], "end": [6, 1], "pause": 0 }] },
        { "number": 18, "time": 146, "gap": 13, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 8], "checkpoints": [{ "start": [2, 8], "end": [2, 8], "pause": 3 },{ "start": [2, 8], "end": [3, 6], "pause": 0 },{ "start": [3, 6], "end": [6, 6], "pause": 0 },{ "start": [6, 6], "end": [6, 4], "pause": 0 },{ "start": [6, 4], "end": [3, 4], "pause": 0 },{ "start": [3, 4], "end": [3, 2], "pause": 0 },{ "start": [3, 2], "end": [6, 1], "pause": 0 }] },
        { "number": 19, "time": 148, "gap": 13, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 5], "checkpoints": [{ "start": [1, 5], "end": [1, 5], "pause": 4 },{ "start": [1, 5], "end": [6, 1], "pause": 0 }] },
        { "number": 10, "time": 151, "gap": 13, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 6], "checkpoints": [{ "start": [1, 6], "end": [1, 6], "pause": 5 },{ "start": [1, 6], "end": [6, 1], "pause": 0 }] },
        { "number": 21, "time": 149, "gap": 5, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 10], "checkpoints": [{ "start": [4, 10], "end": [4, 10], "pause": 3 },{ "start": [4, 10], "end": [3, 2], "pause": 0 },{ "start": [3, 2], "end": [6, 1], "pause": 0 }] },
        { "number": 22, "time": 152, "gap": 5, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 4], "checkpoints": [{ "start": [4, 4], "end": [4, 4], "pause": 3 },{ "start": [4, 4], "end": [6, 1], "pause": 0 }] },
        { "number": 23, "time": 157, "gap": 5, "enemies": "Guerrilla Mortar Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [3, 11], "pause": 20 },{ "start": [3, 11], "end": [6, 1], "pause": 0 }] },
        { "number": 24, "time": 160, "gap": 13, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 8], "checkpoints": [{ "start": [1, 8], "end": [1, 8], "pause": 3 },{ "start": [1, 8], "end": [3, 2], "pause": 0 },{"start": [3, 2], "end": [6, 1], "pause": 0 }] },
        { "number": 25, "time": 163, "gap": 13, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 10], "checkpoints": [{ "start": [5, 10], "end": [5, 10], "pause": 3 },{ "start": [5, 10],  "end": [6, 1], "pause": 0 }] },
        { "number": 26, "time": 166, "gap": 5, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 10], "checkpoints": [{ "start": [4, 10], "end": [4, 10], "pause": 3 },{ "start": [4, 10], "end": [3, 2], "pause": 0 },{ "start": [3, 2], "end": [6, 1], "pause": 0 }] },
        { "number": 27, "time": 186, "gap": 7, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 12], "checkpoints": [{ "start": [5, 12], "end": [6, 1], "pause": 0 }] },
        { "number": 28, "time": 191, "gap": 7, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 11], "pause": 2 },{ "start": [4, 11], "end": [3, 2], "pause": 0 },{ "start": [3, 2], "end": [6, 1], "pause": 0 }] },
        { "number": 29, "time": 201, "gap": 5, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 12], "checkpoints": [{ "start": [5, 12], "end": [6, 1], "pause": 0 }] },
        { "number": 20, "time": 206, "gap": 20, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 11], "pause": 2 },{ "start": [4, 11], "end": [3, 2], "pause": 0 },{ "start": [3, 2], "end": [6, 1], "pause": 0 }] },
        { "number": 31, "time": 212, "gap": 5, "enemies": "Guerrilla Mortar Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [6, 1], "pause": 0 }] },
        { "number": 32, "time": 216, "gap": 8, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [5, 12], "checkpoints": [{ "start": [5, 12], "end": [6, 1], "pause": 0 }] },
    ],

    enemies: ["Guerrilla Hound Pro", "Guerrilla Mortar Leader", "Guerrilla Fighter Leader", "Guerrilla Sniper Leader", "Sarkaz Guerrilla Fighter Leader", "Guerrilla Siegebreaker Leader", "Patriot", "Patriot2"],
    tooltips: ["Patriot"],

    hazards: ["altar"],


    layout: [
    ["e", "bg", "bg", "bg", "bg", "bg", "blue", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["e", "bg", "blk", "g", "blk", "g", "blk", "bg", "g", "g", "g", "blk", "red"],
    ["e", "bg", "g", "r", "r", "r", "r", "bg", "g", "bg", "bg", "g", "red"],
    ["e", "bg", "g","g", "g", "g", "g", "g", "g", "bg", "bg", "g", "bg"],
    ["e", "bg", "g", "r", "g", "r", "g", "altar", "g", "g", "blk", "blk", "red"],
    ["e", "bg", "g", "r", "g", "r", "g", "r", "g", "g", "blk", "blk", "red"],
    ["e", "blue", "g","g", "g", "g", "g", "g", "g", "r", "r", "bg", "bg"],
    ["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ],
}

levels["7-H1"] = {
    level: "7-H1",
    name: "Operation Starfire-1",
    bgm: "ep7_1",
    initialdp: 8,
    squadlimit: 8,
    hp: 3,
    background: "loading_CB_center",
    description: "The enemy troops' morale is at an all time high. \nWe have to avoid getting overwhelmed by their relentless assault!",
    place: "Plain",
    offsetX: -20,
    offsetY: -70,
    offsetZ: 0,
    type: "hell",
    skybox: "cityruin.png",

    waves: [
        { "number": 1, "time": 0, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 6], "checkpoints": [{ "start": [1, 6], "end": [1, 6], "pause": 240 },{ "start": [1, 6], "end": [4, 1], "pause": 0 }] },
        { "number": 2, "time": 0, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 7], "checkpoints": [{ "start": [1, 7], "end": [1, 7], "pause": 250 },{ "start": [1, 7], "end": [4, 1], "pause": 0 }] },
        { "number": 3, "time": 10, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": false, "count": 1, "taunt": true, "start": [3, 8], "checkpoints": [{ "start": [3, 8], "end": [3, 1], "pause": 0 }] },
        { "number": 4, "time": 23, "gap": 10, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 7, "taunt": false, "start": [3, 8], "checkpoints": [{ "start": [3, 8], "end": [3, 1], "pause": 0 }] },
        { "number": 5, "time": 27, "gap": 10, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": false, "count": 6, "taunt": false, "start": [4, 8], "checkpoints": [{ "start": [4, 8], "end": [4, 1], "pause": 0 }] },
        { "number": 6, "time": 28, "gap": 10, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 6, "taunt": false, "start": [4, 8], "checkpoints": [{ "start": [4, 8], "end": [4, 1], "pause": 0 }] },
        { "number": 7, "time": 40, "gap": 30, "enemies": "Guerrilla Herald Leader", "line": true, "tooltip": false, "count": 5, "taunt": false, "start": [1, 3], "checkpoints": [{ "start": [1, 3], "end": [1, 4], "pause": 25 },{ "start": [1, 4], "end": [1, 5], "pause": 25 },{ "start": [1, 5], "end": [1, 8], "pause": 25 },{ "start": [1, 8], "end": [1, 9], "pause": 30 },{ "start": [1, 9], "end": [4, 1], "pause": 0 }] },
        { "number": 8, "time": 50, "gap": 11, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 7, "taunt": false, "start": [3, 8], "checkpoints": [{ "start": [3, 8], "end": [3, 1], "pause": 0 }] },
        { "number": 9, "time": 80, "gap": 35, "enemies": "Guerrilla Sniper Leader", "line": true, "tooltip": false, "count": 5, "taunt": false, "start": [1, 3], "checkpoints": [{ "start": [1, 3], "end": [4, 1], "pause": 0 }] },
        { "number": 10, "time": 81, "gap": 11, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 15, "taunt": false, "start": [4, 8], "checkpoints": [{ "start": [4, 8], "end": [4, 1], "pause": 0 }] },
        { "number": 11, "time": 83, "gap": 11, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 16, "taunt": false, "start": [3, 8], "checkpoints": [{ "start": [3, 8], "end": [3, 1], "pause": 0 }] },
        { "number": 12, "time": 85, "gap": 10, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 16, "taunt": false, "start": [3, 8], "checkpoints": [{ "start": [3, 8], "end": [3, 1], "pause": 0 }] },
        { "number": 13, "time": 86, "gap": 10, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 17, "taunt": false, "start": [4, 8], "checkpoints": [{ "start": [4, 8], "end": [4, 1], "pause": 0 }] },
        { "number": 14, "time": 90, "gap": 35, "enemies": "Sarkaz Guerrilla Caster Leader", "line": true, "tooltip": false, "count": 5, "taunt": false, "start": [4, 8], "checkpoints": [{ "start": [4, 8], "end": [4, 1], "pause": 0 }] },
        { "number": 15, "time": 106, "gap": 23, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [3, 8], "checkpoints": [{ "start": [3, 8], "end": [3, 1], "pause": 0 }] },
        
        { "number": 23, "time": 141, "gap": 30, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 5, "taunt": false, "start": [3, 10], "checkpoints": [{ "start": [3, 10], "end": [3, 10], "pause": 3 },{ "start": [3, 10], "end": [4, 1], "pause": 0 }] },
        { "number": 24, "time": 140, "gap": 30, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 5, "taunt": false, "start": [4, 10], "checkpoints": [{ "start": [4, 10], "end": [4, 10], "pause": 3 },{ "start": [4, 10], "end": [4, 1], "pause": 0 }] },
        { "number": 12, "time": 202, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 8, "taunt": false, "start": [3, 8], "checkpoints": [{ "start": [3, 8], "end": [3, 1], "pause": 0 }] },
        { "number": 13, "time": 200, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 8, "taunt": false, "start": [4, 8], "checkpoints": [{ "start": [4, 8], "end": [4, 1], "pause": 0 }] },
        

        { "number": 17, "time": 250, "gap": 1, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 5], "checkpoints": [{ "start": [3, 5], "end": [3, 5], "pause": 3 },{ "start": [3, 5], "end": [3, 1], "pause": 0 }] },
        { "number": 18, "time": 250, "gap": 1, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 5], "checkpoints": [{ "start": [4, 5], "end": [4, 5], "pause": 3 },{ "start": [4, 5], "end": [4, 1], "pause": 0 }] },
        { "number": 19, "time": 251, "gap": 1, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 6], "checkpoints": [{ "start": [3, 6], "end": [3, 6], "pause": 3 },{ "start": [3, 6], "end": [3, 1], "pause": 0 }] },
        { "number": 20, "time": 251, "gap": 1, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 6], "checkpoints": [{ "start": [4, 6], "end": [4, 6], "pause": 3 },{ "start": [4, 6], "end": [4, 1], "pause": 0 }] },
        { "number": 21, "time": 252, "gap": 1, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 7], "checkpoints": [{ "start": [3, 7], "end": [3, 7], "pause": 3 },{ "start": [3, 7], "end": [3, 1], "pause": 0 }] },
        { "number": 22, "time": 252, "gap": 1, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 7], "checkpoints": [{ "start": [4, 7], "end": [4, 7], "pause": 3 },{ "start": [4, 7], "end": [4, 1], "pause": 0 }] },

    ],

    enemies: ["Guerrilla Hound Pro", "Guerrilla Fighter Leader", "Guerrilla Sniper Leader", "Guerrilla Siegebreaker Leader", "Guerrilla Herald Leader", "Sarkaz Guerrilla Caster Leader"],
    tooltips: [],

    hazards: [],


    layout: [
    ["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["e", "bg", "bg", "red", "blk", "blk", "blk", "blk", "blk", "blk", "blk", "bg"],
    ["e", "bg", "r", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "blk", "bg"],
    ["e", "blue", "g","g", "g", "blk", "blk", "blk", "red", "r", "blk", "bg"],
    ["e", "blue", "g","g", "g", "blk", "blk", "blk", "red", "r", "blk", "bg"],
    ["e", "bg", "r", "g", "r", "r", "r", "r", "bg", "bg", "blk", "bg"],
    ["e", "bg", "r", "g", "g", "g", "g", "g", "g", "g", "g", "bg"],
    ["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ],
}

levels["7-H2"] = {
    level: "7-H2",
    name: "Operation Starfire-2",
    bgm: "ep7_2",
    initialdp: 10,
    squadlimit: 8,
    hp: 3,
    background: "loading_CB_center",
    description: "This war of attrition has sapped us of our energy, \nbut only miserable defeat awaits us should we give up now. \nHold on! \nThere must be an opening in the enemy's assault...",
    place: "Plain",
    offsetX: -20,
    offsetY: -70,
    offsetZ: 0,
    type: "hell",
    skybox: "cityruin.png",

    waves: [
        { "number": 1, "time": 0, "gap": 5, "enemies": "Guerrilla Shieldguard Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 3], "checkpoints": [{ "start": [3, 3], "end": [3, 3], "pause": 110 },{ "start": [3, 3], "end": [2, 8], "pause": 0 },{ "start": [2, 8], "end": [3, 5], "pause": 0 }] },
        { "number": 2, "time": 0, "gap": 5, "enemies": "Guerrilla Shieldguard Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 3], "checkpoints": [{ "start": [2, 3], "end": [2, 3], "pause": 110 },{ "start": [2, 3], "end": [2, 8], "pause": 0 },{ "start": [2, 8], "end": [3, 5], "pause": 0 }] },
        { "number": 3, "time": 0, "gap": 5, "enemies": "Guerrilla Shieldguard Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 2], "checkpoints": [{ "start": [3, 2], "end": [3, 2], "pause": 110 },{ "start": [3, 2], "end": [2, 8], "pause": 0 },{ "start": [2, 8], "end": [3, 5], "pause": 0 }] },
        { "number": 4, "time": 0, "gap": 5, "enemies": "Guerrilla Shieldguard Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 3], "checkpoints": [{ "start": [4, 3], "end": [4, 3], "pause": 200 },{ "start": [4, 3], "end": [4, 8], "pause": 0 },{ "start": [4, 8], "end": [3, 5], "pause": 0 }] },
        { "number": 5, "time": 0, "gap": 5, "enemies": "Guerrilla Shieldguard Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 2], "checkpoints": [{ "start": [4, 2], "end": [4, 2], "pause": 200 },{ "start": [4, 2], "end": [4, 8], "pause": 0 },{ "start": [4, 8], "end": [3, 5], "pause": 0 }] },
        { "number": 6, "time": 6, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": false, "count": 1, "taunt": true, "start": [6, 3], "checkpoints": [{ "start": [6, 3], "end": [3, 5], "pause": 0 }] },
        { "number": 7, "time": 8, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 3], "checkpoints": [{ "start": [6, 3], "end": [3, 5], "pause": 0 }] },
        { "number": 8, "time": 18, "gap": 7, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [6, 3], "checkpoints": [{ "start": [6, 3], "end": [3, 5], "pause": 0 }] },
        { "number": 9, "time": 20, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 3], "checkpoints": [{ "start": [6, 3], "end": [3, 5], "pause": 0 }] },
        { "number": 10, "time": 29, "gap": 3, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [6, 3], "checkpoints": [{ "start": [6, 3], "end": [3, 5], "pause": 0 }] },
        { "number": 11, "time": 34, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 3], "checkpoints": [{ "start": [6, 3], "end": [3, 5], "pause": 0 }] },
        { "number": 12, "time": 54, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 3], "checkpoints": [{ "start": [6, 3], "end": [6, 2], "pause": 100 },{ "start": [6, 2], "end": [6, 1], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 13, "time": 54, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 2], "checkpoints": [{ "start": [0, 2], "end": [1, 2], "pause": 100 },{ "start": [1, 2], "end": [1, 1], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 14, "time": 77, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 3], "checkpoints": [{ "start": [6, 3], "end": [3, 5], "pause": 0 }] },
        { "number": 15, "time": 80, "gap": 2, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [6, 3], "checkpoints": [{ "start": [6, 3], "end": [3, 5], "pause": 0 }] },
        { "number": 16, "time": 83, "gap": 15, "enemies": "Guerrilla Sniper Leader", "line": true, "tooltip": false, "count": 3, "taunt": false, "start": [6, 3], "checkpoints": [{ "start": [6, 3], "end": [3, 5], "pause": 0 }] },
        { "number": 17, "time": 87, "gap": 12, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [6, 3], "checkpoints": [{ "start": [6, 3], "end": [3, 5], "pause": 0 }] },
        { "number": 18, "time": 88, "gap": 12, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [6, 3], "checkpoints": [{ "start": [6, 3], "end": [3, 5], "pause": 0 }] },
        { "number": 19, "time": 136, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 9], "checkpoints": [{ "start": [6, 9], "end": [1, 10], "pause": 60 },{ "start": [1, 10], "end": [1, 11], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 20, "time": 137, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 9], "checkpoints": [{ "start": [6, 9], "end": [2, 10], "pause": 60 },{ "start": [2, 10], "end": [1, 11], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 21, "time": 138, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 9], "checkpoints": [{ "start": [6, 9], "end": [3, 10], "pause": 60 },{ "start": [3, 10], "end": [1, 11], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 22, "time": 149, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 9], "checkpoints": [{ "start": [6, 9], "end": [1, 11], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 23, "time": 150, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 9], "checkpoints": [{ "start": [6, 9], "end": [1, 11], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 24, "time": 156, "gap": 10, "enemies": "Ergate Leader", "line": false, "tooltip": true, "count": 2, "taunt": false, "start": [6, 9], "checkpoints": [{ "start": [6, 9], "end": [2, 10], "pause": 10 },{ "start": [2, 10], "end": [1, 11], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 25, "time": 157, "gap": 10, "enemies": "Ergate Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [6, 9], "checkpoints": [{ "start": [6, 9], "end": [3, 10], "pause": 10 },{ "start": [3, 10], "end": [1, 11], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 26, "time": 173, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 9], "checkpoints": [{ "start": [6, 9], "end": [1, 11], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 27, "time": 178, "gap": 2, "enemies": "Ergate Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [6, 9], "checkpoints": [{ "start": [6, 9], "end": [2, 10], "pause": 10 },{ "start": [2, 10], "end": [1, 11], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 28, "time": 203, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 9], "checkpoints": [{ "start": [6, 9], "end": [4, 10], "pause": 60 },{ "start": [4, 10], "end": [1, 11], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 29, "time": 204, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 9], "checkpoints": [{ "start": [6, 9], "end": [5, 10], "pause": 60 },{ "start": [5, 10], "end": [1, 11], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 30, "time": 205, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 9], "checkpoints": [{ "start": [6, 9], "end": [6, 10], "pause": 60 },{ "start": [6, 10], "end": [1, 11], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 31, "time": 223, "gap": 20, "enemies": "Guerrilla Fighter Leader", "line": true, "tooltip": false, "count": 3, "taunt": true, "start": [6, 3], "checkpoints": [{ "start": [6, 3], "end": [1, 4], "pause": 0 },{ "start": [1, 4], "end": [3, 5], "pause": 0 }] },
        { "number": 32, "time": 226, "gap": 20, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [6, 3], "checkpoints": [{ "start": [6, 3], "end": [1, 4], "pause": 0 },{ "start": [1, 4], "end": [3, 5], "pause": 0 }] },
        { "number": 33, "time": 233, "gap": 20, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [6, 3], "checkpoints": [{ "start": [6, 3], "end": [1, 4], "pause": 0 },{ "start": [1, 4], "end": [3, 5], "pause": 0 }] },
        { "number": 34, "time": 235, "gap": 20, "enemies": "Ergate Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [6, 9], "checkpoints": [{ "start": [6, 9], "end": [4, 10], "pause": 10 },{ "start": [4, 10], "end": [1, 11], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 35, "time": 236, "gap": 20, "enemies": "Ergate Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [6, 9], "checkpoints": [{ "start": [6, 9], "end": [5, 10], "pause": 10 },{ "start": [5, 10], "end": [1, 11], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 36, "time": 237, "gap": 20, "enemies": "Ergate Leader", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [6, 9], "checkpoints": [{ "start": [6, 9], "end": [6, 10], "pause": 10 },{ "start": [6, 10], "end": [1, 11], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 37, "time": 250, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 3], "checkpoints": [{ "start": [6, 3], "end": [6, 2], "pause": 60 },{ "start": [6, 2], "end": [6, 1], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 38, "time": 240, "gap": 5, "enemies": "Guerrilla Mortar Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 2], "checkpoints": [{ "start": [0, 2], "end": [1, 2], "pause": 45 },{ "start": [1, 2], "end": [1, 1], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 39, "time": 260, "gap": 5, "enemies": "Guerrilla Mortar Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 2], "checkpoints": [{ "start": [0, 2], "end": [1, 2], "pause": 45 },{ "start": [1, 2], "end": [1, 1], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 40, "time": 275, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 3], "checkpoints": [{ "start": [6, 3], "end": [6, 2], "pause": 60 },{ "start": [6, 2], "end": [6, 1], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
        { "number": 41, "time": 280, "gap": 5, "enemies": "Guerrilla Mortar Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 2], "checkpoints": [{ "start": [0, 2], "end": [1, 2], "pause": 45 },{ "start": [1, 2], "end": [1, 1], "pause": 10 },{ "start": [4, 7], "end": [3, 5], "pause": 0 }] },
    ],

    enemies: ["Guerrilla Hound Pro", "Guerrilla Fighter Leader", "Guerrilla Sniper Leader", "Guerrilla Mortar Leader", "Guerrilla Herald Leader", "Guerrilla Shieldguard Leader","Ergate Leader"],
    tooltips: ["Ergate Leader"],

    hazards: [],


    layout: [
    ["e", "bg", "red", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["e", "enterright", "g", "gblk", "blk", "blk", "blk", "blk", "blk", "bg", "blk", "enterleft"],
    ["e", "bg", "bg", "g", "g", "r", "r", "r", "g", "bg", "blk", "bg"],
    ["e", "bg", "g","g", "bg", "blue", "g", "g", "g", "bg", "blk", "bg"],
    ["e", "bg", "g","g", "g", "gblk", "r", "enterbottom", "g", "bg", "blk", "bg"],
    ["e", "bg", "bg", "bg", "g", "r", "r", "r", "g", "bg", "blk", "bg"],
    ["e", "enterright", "blk", "red", "blk", "blk", "blk", "blk", "blk", "red", "blk", "bg"],
    ["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ],
}

levels["7-H3"] = {
    level: "7-H3",
    name: "Operation Starfire-3",
    bgm: "ep7_2",
    initialdp: 10,
    squadlimit: 9,
    hp: 3,
    background: "loading_CB_under",
    description: "In a harsh environment, the side that better adapts \nto the conditions has more chances to seize victory. \nHowever, who can afford these kinds of sacrifices?\n\n<Originium Altar> Periodically emits Pulse Waves to the surrounding tiles, \ndamaging both allied and enemy units.",
    place: "Plain",
    offsetX: -20,
    offsetY: -70,
    offsetZ: 0,
    type: "hell",
    skybox: "nightsky.png",

    waves: [
        { "number": 1, "time": 0, "gap": 5, "enemies": "Guerrilla Shieldguard", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 2], "checkpoints": [{ "start": [4, 2], "end": [4, 2], "pause": 60 },{ "start": [4, 2], "end": [0, 10], "pause": 0 }] },
        { "number": 2, "time": 0, "gap": 5, "enemies": "Guerrilla Shieldguard", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 2], "checkpoints": [{ "start": [5, 2], "end": [5, 2], "pause": 60 },{ "start": [5, 2], "end": [5, 5], "pause": 0 },{ "start": [5, 5], "end": [5, 7], "pause": 0 },{ "start": [5, 7], "end": [5, 10], "pause": 0 },{ "start": [5, 10], "end": [0, 10], "pause": 0 }] },
        { "number": 3, "time": 8, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": false, "count": 1, "taunt": true, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 10], "pause": 5 },{ "start": [5, 10], "end": [5, 7], "pause": 0 },{ "start": [5, 7], "end": [5, 5], "pause": 0 },{ "start": [5, 5], "end": [5, 2], "pause": 0 },{ "start": [5, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 4, "time": 11, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 10], "pause": 5 },{ "start": [4, 10], "end": [4, 2], "pause": 0 },{ "start": [4, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 5, "time": 19, "gap": 14, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 2], "pause": 0 },{ "start": [4, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 6, "time": 20, "gap": 15, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 7], "pause": 0 },{ "start": [5, 7], "end": [5, 5], "pause": 0 },{ "start": [5, 5], "end": [5, 2], "pause": 0 },{ "start": [5, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 7, "time": 40, "gap": 14, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 2], "pause": 0 },{ "start": [4, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 8, "time": 41, "gap": 15, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 7], "pause": 0 },{ "start": [5, 7], "end": [5, 5], "pause": 0 },{ "start": [5, 5], "end": [5, 2], "pause": 0 },{ "start": [5, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 9, "time": 64, "gap": 5, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 6], "pause": 6 },{ "start": [4, 6], "end": [4, 2], "pause": 0 },{ "start": [4, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 10, "time": 64, "gap": 5, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 7], "pause": 0 },{ "start": [5, 7], "end": [4, 6], "pause": 6 },{ "start": [4, 6], "end": [5, 5], "pause": 0 },{ "start": [5, 5], "end": [5, 2], "pause": 0 },{ "start": [5, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 11, "time": 64, "gap": 30, "enemies": "Guerrilla Shieldguard", "line": true, "tooltip": false, "count": 2, "taunt": false, "start": [4, 1], "checkpoints": [{ "start": [4, 1], "end": [0, 10], "pause": 0 }] },
        
        { "number": 12, "time": 71, "gap": 15, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 7], "pause": 0 },{ "start": [5, 7], "end": [5, 5], "pause": 0 },{ "start": [5, 5], "end": [5, 2], "pause": 0 },{ "start": [5, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 13, "time": 91, "gap": 14, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 2], "pause": 0 },{ "start": [4, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 14, "time": 91, "gap": 25, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 6], "pause": 6 },{ "start": [4, 6], "end": [4, 2], "pause": 0 },{ "start": [4, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 15, "time": 91, "gap": 25, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 7], "pause": 0 },{ "start": [5, 7], "end": [4, 6], "pause": 6 },{ "start": [4, 6], "end": [5, 5], "pause": 0 },{ "start": [5, 5], "end": [5, 2], "pause": 0 },{ "start": [5, 2], "end": [0, 2], "pause": 0 }] },
        
        { "number": 16, "time": 139, "gap": 5, "enemies": "Guerrilla Shieldguard Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 10], "pause": 95 },{ "start": [5, 10], "end": [5, 7], "pause": 0 },{ "start": [5, 7], "end": [5, 5], "pause": 0 },{ "start": [5, 5], "end": [5, 2], "pause": 0 },{ "start": [5, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 17, "time": 139, "gap": 5, "enemies": "Guerrilla Shieldguard Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 10], "pause": 95 },{ "start": [4, 10], "end": [4, 2], "pause": 0 },{ "start": [4, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 18, "time": 145, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 1], "checkpoints": [{ "start": [4, 1], "end": [4, 6], "pause": 6 },{ "start": [4, 6], "end": [0, 10], "pause": 0 }] },
        { "number": 19, "time": 146, "gap": 20, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": false, "count": 3, "taunt": true, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [2, 2], "pause": 0 },{ "start": [2, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 20, "time": 147, "gap": 20, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 3, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [2, 2], "pause": 0 },{ "start": [2, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 21, "time": 148, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 5], "pause": 0 },{ "start": [5, 5], "end": [4, 6], "pause": 7 },{ "start": [4, 6], "end": [5, 7], "pause": 0 },{ "start": [5, 7], "end": [5, 10], "pause": 0 },{ "start": [5, 10], "end": [0, 10], "pause": 0 }] },
        { "number": 22, "time": 157, "gap": 5, "enemies": "Sarkaz Guerrilla Caster Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 1], "checkpoints": [{ "start": [4, 1], "end": [4, 6], "pause": 6 },{ "start": [4, 6], "end": [0, 10], "pause": 0 }] },
        { "number": 23, "time": 168, "gap": 15, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 5], "pause": 0 },{ "start": [5, 5], "end": [4, 6], "pause": 7 },{ "start": [4, 6], "end": [5, 7], "pause": 0 },{ "start": [5, 7], "end": [5, 10], "pause": 0 },{ "start": [5, 10], "end": [0, 10], "pause": 0 }] },
        { "number": 24, "time": 172, "gap": 30, "enemies": "Sarkaz Guerrilla Caster Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 1], "checkpoints": [{ "start": [4, 1], "end": [0, 10], "pause": 0 }] },
        { "number": 25, "time": 187, "gap": 30, "enemies": "Sarkaz Guerrilla Caster Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 1], "checkpoints": [{ "start": [4, 1], "end": [0, 10], "pause": 0 }] },
        { "number": 26, "time": 208, "gap": 20, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [1, 8], "pause": 10 },{ "start": [1, 8], "end": [2, 2], "pause": 0 },{ "start": [2, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 27, "time": 208, "gap": 20, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [2, 8], "pause": 10 },{ "start": [2, 8], "end": [2, 2], "pause": 0 },{ "start": [2, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 28, "time": 210, "gap": 30, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 1], "checkpoints": [{ "start": [4, 1], "end": [0, 10], "pause": 0 }] },
        { "number": 29, "time": 210, "gap": 15, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 5], "pause": 0 },{ "start": [5, 5],  "end": [5, 7], "pause": 0 },{ "start": [5, 7], "end": [5, 10], "pause": 0 },{ "start": [5, 10], "end": [0, 10], "pause": 0 }] },
        { "number": 30, "time": 222, "gap": 5, "enemies": "Sarkaz Guerrilla Caster Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 1], "checkpoints": [{ "start": [4, 1], "end": [4, 6], "pause": 5 },{ "start": [4, 6], "end": [0, 10], "pause": 0 }] },
        { "number": 31, "time": 230, "gap": 30, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [2, 2], "pause": 0 },{ "start": [2, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 32, "time": 231, "gap": 30, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 8], "checkpoints": [{ "start": [0, 8], "end": [2, 2], "pause": 0 },{ "start": [2, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 33, "time": 242, "gap": 5, "enemies": "Sarkaz Guerrilla Caster Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 1], "checkpoints": [{ "start": [4, 1], "end": [4, 6], "pause": 5 },{ "start": [4, 6], "end": [0, 10], "pause": 0 }] },
        { "number": 34, "time": 232, "gap": 5, "enemies": "Guerrilla Shieldguard Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 7], "pause": 0 },{ "start": [5, 7], "end": [5, 5], "pause": 0 },{ "start": [5, 5], "end": [5, 2], "pause": 0 },{ "start": [5, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 35, "time": 247, "gap": 15, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 5], "pause": 0 },{ "start": [5, 5],  "end": [5, 7], "pause": 0 },{ "start": [5, 7], "end": [5, 10], "pause": 0 },{ "start": [5, 10], "end": [0, 10], "pause": 0 }] },
        { "number": 36, "time": 252, "gap": 5, "enemies": "Guerrilla Shieldguard Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 11], "checkpoints": [{ "start": [5, 11], "end": [5, 7], "pause": 0 },{ "start": [5, 7], "end": [5, 5], "pause": 0 },{ "start": [5, 5], "end": [5, 2], "pause": 0 },{ "start": [5, 2], "end": [0, 2], "pause": 0 }] },
        { "number": 37, "time": 257, "gap": 5, "enemies": "Sarkaz Guerrilla Caster Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 1], "checkpoints": [{ "start": [4, 1], "end": [4, 6], "pause": 5 },{ "start": [4, 6], "end": [0, 10], "pause": 0 }] },
        { "number": 38, "time": 257, "gap": 5, "enemies": "Guerrilla Shieldguard Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 2], "pause": 0 },{ "start": [4, 2], "end": [0, 2], "pause": 0 }] },
    ],

    enemies: ["Guerrilla Hound Pro", "Guerrilla Fighter Leader", "Guerrilla Shieldguard Leader", "Guerrilla Shieldguard", "Sarkaz Guerrilla Caster Leader", "Sarkaz Guerrilla Fighter Leader"],
    tooltips: [],

    hazards: ["altar"],


    layout: [
    ["e", "bg", "blue", "bg", "bg", "bg", "bg", "bg", "red", "bg", "blue", "bg"],
    ["e", "bg", "blk", "g", "r", "bg", "r", "bg", "g", "bg", "blk", "bg"],
    ["e", "bg", "blk", "g", "g", "g", "g", "g", "g", "bg", "blk", "bg"],
    ["e", "bg", "g","g", "r", "r", "altar", "r", "r", "bg", "g", "bg"],
    ["e", "red", "g","blk", "g", "g", "g", "g", "g", "g", "blk", "red"],
    ["e", "red", "blk","g", "g", "g", "gblk", "g", "g", "blk", "g", "red"],
    ["e", "bg", "g", "g", "r", "bg", "altar", "r", "bg", "bg", "bg", "bg"],
    ["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ],
}

levels["7-H4"] = {
    level: "7-H4",
    name: "Operation Starfire-4",
    bgm: "patriot_2",
    initialdp: 10,
    squadlimit: 9,
    hp: 2,
    background: "loading_CB_under",
    description: "If you've never seen their formation in the past, \nyou will not understand why they were feared \nby all living creatures upon the battlefield. \nPerhaps there are people out there who can describe \nhow Ursus crushed civilization itself...\n\n<Originium Altar> Periodically emits Pulse Waves to the surrounding tiles, \ndamaging both allied and enemy units.",
    place: "Plain",
    offsetX: 10,
    offsetY:-30,
    offsetZ: 30,
    type: "hellboss",
    skybox: "nightsky.png",

    waves: [
        { "number": 1, "time": 0, "gap": 5, "enemies": "PatriotEX", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 13], "checkpoints": [{ "start": [3, 13], "end": [3, 10], "pause": 42 },{ "start": [3, 10], "end": [3, 9], "pause": 30 },
        { "start": [3, 9], "end": [3, 8], "pause": 30 },{ "start": [3, 8], "end": [3, 7], "pause": 30 },{ "start": [3, 7], "end": [3, 6], "pause": 29 },{ "start": [3, 6], "end": [3, 5], "pause": 28 },{ "start": [3, 5], "end": [3, 4], "pause": 27 },
        { "start": [3, 4], "end": [3, 2], "pause": 20 },{ "start": [3, 2], "end": [4, 4], "pause": 0 },{ "start": [4, 4], "end": [2, 4], "pause": 0 },{ "start": [2, 4], "end": [3, 2], "pause": 0 },{ "start": [3, 2], "end": [3, 1], "pause": 0 }] },
        { "number": 2, "time": 0, "gap": 5, "enemies": "Guerrilla Shieldguard LeaderEX", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 13], "checkpoints": [{ "start": [2, 13], "end": [2, 10], "pause": 42 },{ "start": [2, 10], "end": [2, 9], "pause": 30 },
        { "start": [2, 9], "end": [2, 8], "pause": 30 },{ "start": [2, 8], "end": [2, 7], "pause": 30 },{ "start": [2, 7], "end": [2, 6], "pause": 29 },{ "start": [2, 6], "end": [2, 5], "pause": 28 },{ "start": [2, 5], "end": [2, 4], "pause": 27 },
        { "start": [2, 4], "end": [2, 2], "pause": 20 },{ "start": [2, 2], "end": [2, 1], "pause": 0 }] },
        { "number": 3, "time": 0, "gap": 5, "enemies": "Guerrilla Shieldguard LeaderEX", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 13], "checkpoints": [{ "start": [4, 13], "end": [4, 10], "pause": 42 },{ "start": [4, 10], "end": [4, 9], "pause": 30 },
        { "start": [4, 9], "end": [4, 8], "pause": 30 },{ "start": [4, 8], "end": [4, 7], "pause": 30 },{ "start": [4, 7], "end": [4, 6], "pause": 29 },{ "start": [4, 6], "end": [4, 5], "pause": 28 },{ "start": [4, 5], "end": [4, 4], "pause": 27 },
        { "start": [4, 4], "end": [4, 2], "pause": 20 },{ "start": [4, 2], "end": [4, 1], "pause": 0 }] },

        { "number": 4, "time": 4, "gap": 5, "enemies": "Guerrilla Shieldguard LeaderEX", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 13], "checkpoints": [{ "start": [4, 13], "end": [4, 11], "pause": 42 },{ "start": [4, 11], "end": [4, 10], "pause": 30 },
        { "start": [4, 10], "end": [4, 9], "pause": 30 },{ "start": [4, 9], "end": [4, 8], "pause": 30 },{ "start": [4, 8], "end": [4, 7], "pause": 29 },{ "start": [4, 7], "end": [4, 6], "pause": 28 },{ "start": [4, 6], "end": [4, 5], "pause": 27 },
        { "start": [4, 5], "end": [4, 4], "pause": 26 },{ "start": [4, 4], "end": [4, 2], "pause": 20 },{ "start": [4, 2], "end": [4, 1], "pause": 0 }] },
        { "number": 5, "time": 4, "gap": 5, "enemies": "Guerrilla Shieldguard LeaderEX", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 13], "checkpoints": [{ "start": [3, 13], "end": [3, 11], "pause": 42 },{ "start": [3, 11], "end": [3, 10], "pause": 30 },
        { "start": [3, 10], "end": [3, 9], "pause": 30 },{ "start": [3, 9], "end": [3, 8], "pause": 30 },{ "start": [3, 8], "end": [3, 7], "pause": 29 },{ "start": [3, 7], "end": [3, 6], "pause": 28 },{ "start": [3, 6], "end": [3, 5], "pause": 27 },
        { "start": [3, 5], "end": [3, 4], "pause": 26 },{ "start": [3, 4], "end": [3, 2], "pause": 20 },{ "start": [3, 2], "end": [3, 1], "pause": 0 }] },
        { "number": 6, "time": 4, "gap": 5, "enemies": "Guerrilla Shieldguard LeaderEX", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 13], "checkpoints": [{ "start": [2, 13], "end": [2, 11], "pause": 42 },{ "start": [2, 11], "end": [2, 10], "pause": 30 },
        { "start": [2, 10], "end": [2, 9], "pause": 30 },{ "start": [2, 9], "end": [2, 8], "pause": 30 },{ "start": [2, 8], "end": [2, 7], "pause": 29 },{ "start": [2, 7], "end": [2, 6], "pause": 28 },{ "start": [2, 6], "end": [2, 5], "pause": 27 },
        { "start": [2, 5], "end": [2, 4], "pause": 26 },{ "start": [2, 4], "end": [2, 2], "pause": 20 },{ "start": [2, 2], "end": [2, 1], "pause": 0 }] },
        
        { "number": 7, "time": 8, "gap": 5, "enemies": "Guerrilla Shieldguard LeaderEX", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 13], "checkpoints": [{ "start": [4, 13], "end": [4, 12], "pause": 42 },{ "start": [4, 12], "end": [4, 11], "pause": 30 },
        { "start": [4, 11], "end": [4, 10], "pause": 30 },{ "start": [4, 10], "end": [4, 9], "pause": 30 },{ "start": [4, 9], "end": [4, 8], "pause": 29 },{ "start": [4, 8], "end": [4, 7], "pause": 28 },{ "start": [4, 7], "end": [4, 6], "pause": 27 },
        { "start": [4, 6], "end": [4, 5], "pause": 26 },{ "start": [4, 5], "end": [4, 4], "pause": 25 },{ "start": [4, 4], "end": [4, 2], "pause": 20 },{ "start": [4, 2], "end": [4, 1], "pause": 0 }] },
        
        { "number": 8, "time": 8, "gap": 5, "enemies": "Guerrilla Shieldguard LeaderEX", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 13], "checkpoints": [{ "start": [3, 13], "end": [3, 12], "pause": 42 },{ "start": [3, 12], "end": [3, 11], "pause": 30 },
        { "start": [3, 11], "end": [3, 10], "pause": 30 },{ "start": [3, 10], "end": [3, 9], "pause": 30 },{ "start": [3, 9], "end": [3, 8], "pause": 29 },{ "start": [3, 8], "end": [3, 7], "pause": 28 },{ "start": [3, 7], "end": [3, 6], "pause": 27 },
        { "start": [3, 6], "end": [3, 5], "pause": 26 },{ "start": [3, 5], "end": [3, 4], "pause": 25 },{ "start": [3, 4], "end": [3, 2], "pause": 20 },{ "start": [3, 2], "end": [3, 1], "pause": 0 }] },
        
        { "number": 9, "time": 8, "gap": 5, "enemies": "Guerrilla Shieldguard LeaderEX", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 13], "checkpoints": [{ "start": [2, 13], "end": [2, 12], "pause": 42 },{ "start": [2, 12], "end": [2, 11], "pause": 30 },
        { "start": [2, 11], "end": [2, 10], "pause": 30 },{ "start": [2, 10], "end": [2, 9], "pause": 30 },{ "start": [2, 9], "end": [2, 8], "pause": 29 },{ "start": [2, 8], "end": [2, 7], "pause": 28 },{ "start": [2, 7], "end": [2, 6], "pause": 27 },
        { "start": [2, 6], "end": [2, 5], "pause": 26 },{ "start": [2, 5], "end": [2, 4], "pause": 25 },{ "start": [2, 4], "end": [2, 2], "pause": 20 },{ "start": [2, 2], "end": [2, 1], "pause": 0 }] },
        
        { "number": 0, "time": 13, "gap": 5, "enemies": "Guerrilla Hound", "line": true, "tooltip": false, "count": 1, "taunt": true, "start": [5, 13], "checkpoints": [{ "start": [5, 13], "end": [5, 12], "pause": 2 },{ "start": [5, 12], "end": [5, 9], "pause": 0 },{ "start": [5, 9], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 16, "gap": 4, "enemies": "Guerrilla Hound", "line": true, "tooltip": false, "count": 2, "taunt": false, "start": [1, 13], "checkpoints": [{ "start": [1, 13], "end": [1, 12], "pause": 2 },{ "start": [1, 12], "end": [1, 9], "pause": 0 },{ "start": [1, 9], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 19, "gap": 5, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 13], "checkpoints": [{ "start": [5, 13], "end": [5, 12], "pause": 0 },{ "start": [5, 12], "end": [5, 9], "pause": 0 },{ "start": [5, 9], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 20, "gap": 5, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 13], "checkpoints": [{ "start": [5, 13], "end": [5, 12], "pause": 0 },{ "start": [5, 12], "end": [5, 9], "pause": 0 },{ "start": [5, 9], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 25, "gap": 6, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 13], "checkpoints": [{ "start": [5, 13], "end": [5, 12], "pause": 0 },{ "start": [5, 12], "end": [5, 9], "pause": 0 },{ "start": [5, 9], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 25, "gap": 4, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 13], "checkpoints": [{ "start": [1, 13], "end": [1, 12], "pause": 0 },{ "start": [1, 12], "end": [1, 9], "pause": 0 },{ "start": [1, 9], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 30, "gap": 3, "enemies": "Guerrilla Fighter", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 13], "checkpoints": [{ "start": [1, 13], "end": [1, 12], "pause": 0 },{ "start": [1, 12], "end": [1, 9], "pause": 0 },{ "start": [1, 9], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 40, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [2, 13], "checkpoints": [{ "start": [2, 13], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 42, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [4, 13], "checkpoints": [{ "start": [4, 13], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 45, "gap": 4, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 13], "checkpoints": [{ "start": [1, 13], "end": [1, 12], "pause": 10 },{ "start": [1, 12], "end": [1, 9], "pause": 0 },{ "start": [1, 9], "end": [2, 5], "pause": 12 },{ "start": [2, 5], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 45, "gap": 4, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 13], "checkpoints": [{ "start": [5, 13], "end": [5, 12], "pause": 10 },{ "start": [5, 12], "end": [5, 9], "pause": 0 },{ "start": [5, 9], "end": [4, 6], "pause": 13 },{ "start": [4, 6], "end": [4, 1], "pause": 0 }] },
        
        { "number": 0, "time": 50, "gap": 4, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 13], "checkpoints": [{ "start": [3, 13],  "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [2, 5], "pause": 0 },{ "start": [2, 5], "end": [3, 1], "pause": 0 }] },
        { "number": 0, "time": 54, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 13], "checkpoints": [{ "start": [2, 13], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 55, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [5, 13], "checkpoints": [{ "start": [5, 13], "end": [5, 12], "pause": 0 },{ "start": [5, 12], "end": [5, 9], "pause": 0 },{ "start": [5, 9], "end": [4, 1], "pause": 0 }] },

        { "number": 0, "time": 65, "gap": 4, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 13], "checkpoints": [{ "start": [5, 13], "end": [5, 12], "pause": 0 },{ "start": [5, 12], "end": [5, 9], "pause": 0 },{ "start": [5, 9], "end": [3, 7], "pause": 10 },{ "start": [3, 7], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 68, "gap": 6, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [4, 13], "checkpoints": [{ "start": [4, 13], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 69, "gap": 7, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [3, 13], "checkpoints": [{ "start": [3, 13],  "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [2, 5], "pause": 0 },{ "start": [2, 5], "end": [2, 1], "pause": 0 }] },

        { "number": 0, "time": 71, "gap": 4, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [7, 13], "checkpoints": [{ "start": [7, 13], "end": [7, 12], "pause": 7 },{ "start": [7, 12], "end": [7, 9], "pause": 3 },{ "start": [7, 9], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 80, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 13], "checkpoints": [{ "start": [2, 13], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 83, "gap": 7, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 13], "checkpoints": [{ "start": [3, 13],  "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [4, 5], "pause": 0 },{ "start": [4, 5], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 85, "gap": 4, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 13], "checkpoints": [{ "start": [1, 13], "end": [1, 12], "pause": 3 },{ "start": [1, 12], "end": [1, 9], "pause": 0 },{ "start": [1, 9], "end": [3, 7], "pause": 10 },{ "start": [3, 7], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 94, "gap": 4, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [7, 13], "checkpoints": [{ "start": [7, 13], "end": [7, 12], "pause": 3 },{ "start": [7, 12], "end": [7, 9], "pause": 3 },{ "start": [7, 9], "end": [4, 1], "pause": 0 }] },

        { "number": 0, "time": 97, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 13], "checkpoints": [{ "start": [4, 13], "end": [4, 1], "pause": 0 }] },

        { "number": 0, "time": 100, "gap": 7, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 13], "checkpoints": [{ "start": [3, 13],  "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [2, 5], "pause": 0 },{ "start": [2, 5], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 105, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 13], "checkpoints": [{ "start": [2, 13], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 108, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 13], "checkpoints": [{ "start": [4, 13], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 114, "gap": 3, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 13], "checkpoints": [{ "start": [2, 13], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 117, "gap": 4, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 13], "checkpoints": [{ "start": [1, 13], "end": [1, 12], "pause": 0 },{ "start": [1, 12], "end": [1, 9], "pause": 0 },{ "start": [1, 9], "end": [2, 5], "pause": 10 },{ "start": [2, 5], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 119, "gap": 4, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 13], "checkpoints": [{ "start": [5, 13], "end": [5, 12], "pause": 0 },{ "start": [5, 12], "end": [5, 9], "pause": 0 },{ "start": [5, 9], "end": [4, 5], "pause": 10 },{ "start": [4, 5], "end": [4, 1], "pause": 0 }] },

        { "number": 0, "time": 121, "gap": 7, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 13], "checkpoints": [{ "start": [3, 13],  "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [2, 5], "pause": 0 },{ "start": [2, 5], "end": [2, 1], "pause": 0 }] },

        { "number": 0, "time": 129, "gap": 20, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [7, 13], "checkpoints": [{ "start": [7, 13], "end": [7, 12], "pause": 3 },{ "start": [7, 12], "end": [7, 9], "pause": 3 },{ "start": [7, 9], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 134, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 13], "checkpoints": [{ "start": [4, 13], "end": [4, 1], "pause": 0 }] },

        { "number": 0, "time": 134, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [7, 5], "checkpoints": [{ "start": [7, 5], "end": [7, 4], "pause": 10 },{ "start": [7, 4], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 140, "gap": 7, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 13], "checkpoints": [{ "start": [3, 13],  "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [4, 5], "pause": 0 },{ "start": [4, 5], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 142, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 13], "checkpoints": [{ "start": [2, 13], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 148, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 13], "checkpoints": [{ "start": [2, 13], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 153, "gap": 6, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 13], "checkpoints": [{ "start": [4, 13], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 156, "gap": 7, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 13], "checkpoints": [{ "start": [3, 13],  "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [2, 5], "pause": 0 },{ "start": [2, 5], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 167, "gap": 7, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 13], "checkpoints": [{ "start": [3, 13],  "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [4, 5], "pause": 0 },{ "start": [4, 5], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 174, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 13], "checkpoints": [{ "start": [2, 13], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 176, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 13], "checkpoints": [{ "start": [4, 13], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 181, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [7, 5], "checkpoints": [{ "start": [7, 5], "end": [7, 4], "pause": 5 },{ "start": [7, 4], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 186, "gap": 7, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 13], "checkpoints": [{ "start": [3, 13],  "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [2, 5], "pause": 0 },{ "start": [2, 5], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 188, "gap": 7, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 13], "checkpoints": [{ "start": [3, 13],  "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [4, 5], "pause": 0 },{ "start": [4, 5], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 190, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 13], "checkpoints": [{ "start": [4, 13], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 193, "gap": 7, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 13], "checkpoints": [{ "start": [3, 13],  "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [4, 5], "pause": 0 },{ "start": [4, 5], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 193, "gap": 6, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 13], "checkpoints": [{ "start": [5, 13], "end": [5, 12], "pause": 0 },{ "start": [5, 12], "end": [5, 9], "pause": 0 },{ "start": [5, 9], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 194, "gap": 4, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 13], "checkpoints": [{ "start": [5, 13], "end": [5, 12], "pause": 0 },{ "start": [5, 12], "end": [5, 11], "pause": 0 },{ "start": [5, 11], "end": [4, 8], "pause": 35 },{ "start": [4, 8], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 196, "gap": 4, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 13], "checkpoints": [{ "start": [1, 13], "end": [1, 12], "pause": 0 },{ "start": [1, 12], "end": [1, 11], "pause": 0 },{ "start": [1, 11], "end": [2, 8], "pause": 35 },{ "start": [2, 8], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 201, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 10], "checkpoints": [{ "start": [4, 10], "end": [4, 10], "pause": 35 },{ "start": [4, 10], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 201, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 10], "checkpoints": [{ "start": [2, 10], "end": [2, 10], "pause": 35 },{ "start": [2, 10], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 202, "gap": 7, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 13], "checkpoints": [{ "start": [3, 13],  "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [4, 5], "pause": 0 },{ "start": [4, 5], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 203, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 11], "pause": 36 },{ "start": [4, 11], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 203, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [2, 11], "pause": 36 },{ "start": [2, 11], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 204, "gap": 4, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [3, 13], "checkpoints": [{ "start": [3, 13],  "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [2, 5], "pause": 0 },{ "start": [2, 5], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 205, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 12], "pause": 37 },{ "start": [4, 12], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 205, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 12], "pause": 37 },{ "start": [2, 12], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 206, "gap": 6, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 13], "checkpoints": [{ "start": [4, 13], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 209, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [7, 3], "checkpoints": [{ "start": [7, 3], "end": [7, 3], "pause": 5 },{ "start": [7, 3], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 211, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [7, 4], "checkpoints": [{ "start": [7, 4], "end": [7, 4], "pause": 7 },{ "start": [7, 4], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 215, "gap": 20, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [7, 13], "checkpoints": [{ "start": [7, 13], "end": [7, 12], "pause": 0 },{ "start": [7, 12], "end": [7, 9], "pause": 3 },{ "start": [7, 9], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 219, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [7, 5], "checkpoints": [{ "start": [7, 5], "end": [7, 4], "pause": 5 },{ "start": [7, 4], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 219, "gap": 6, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 13], "checkpoints": [{ "start": [4, 13], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 226, "gap": 4, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 13], "checkpoints": [{ "start": [3, 13],  "end": [3, 8], "pause": 0 },{ "start": [3, 8], "end": [2, 5], "pause": 0 },{ "start": [2, 5], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 229, "gap": 5, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [5, 13], "checkpoints": [{ "start": [5, 13], "end": [5, 12], "pause": 0 },{ "start": [5, 12], "end": [5, 9], "pause": 0 },{ "start": [5, 9], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 230, "gap": 3, "enemies": "Guerrilla Hound", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 13], "checkpoints": [{ "start": [2, 13], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 236, "gap": 20, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [7, 13], "checkpoints": [{ "start": [7, 13], "end": [7, 12], "pause": 0 },{ "start": [7, 12], "end": [7, 9], "pause": 3 },{ "start": [7, 9], "end": [4, 1], "pause": 0 }] },

        { "number": 0, "time": 238, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 8], "checkpoints": [{ "start": [4, 8], "end": [4, 8], "pause": 10 },{ "start": [4, 8], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 238, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 8], "checkpoints": [{ "start": [2, 8], "end": [2, 8], "pause": 10 },{ "start": [2, 8], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 239, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 8], "checkpoints": [{ "start": [3, 8], "end": [3, 8], "pause": 10 },{ "start": [3, 8], "end": [3, 6], "pause": 0 },{ "start": [3, 6], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 240, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 9], "checkpoints": [{ "start": [4, 9], "end": [4, 9], "pause": 13 },{ "start": [4, 9], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 240, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 9], "checkpoints": [{ "start": [2, 9], "end": [2, 9], "pause": 13 },{ "start": [2, 9], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 239, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 9], "checkpoints": [{ "start": [3, 9], "end": [3, 9], "pause": 11 },{ "start": [3, 9], "end": [3, 6], "pause": 0 },{ "start": [3, 6], "end": [4, 1], "pause": 0 }] },

        { "number": 0, "time": 267, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 10], "checkpoints": [{ "start": [4, 10], "end": [4, 10], "pause": 5 },{ "start": [4, 10], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 267, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 10], "checkpoints": [{ "start": [2, 10], "end": [2, 10], "pause": 5 },{ "start": [2, 10], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 267, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 10], "checkpoints": [{ "start": [3, 10], "end": [3, 10], "pause": 7 },{ "start": [3, 10], "end": [3, 6], "pause": 0 },{ "start": [3, 6], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 269, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 11], "pause": 5 },{ "start": [4, 11], "end": [4, 1], "pause": 0 }] },
        { "number": 0, "time": 269, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [2, 11], "checkpoints": [{ "start": [2, 11], "end": [2, 11], "pause": 5 },{ "start": [2, 11], "end": [2, 1], "pause": 0 }] },
        { "number": 0, "time": 269, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 11], "pause": 7 },{ "start": [3, 11], "end": [3, 6], "pause": 0 },{ "start": [3, 6], "end": [4, 1], "pause": 0 }] },


        ],

    enemies: ["Guerrilla Hound", "Guerrilla Fighter", "Guerrilla Fighter Leader", "Guerrilla Shieldguard LeaderEX", "Guerrilla Sniper Leader", "Guerrilla Siegebreaker Leader","PatriotEX","PatriotEX2", "Sarkaz Guerrilla Fighter Leader"],
    tooltips: [],

    hazards: ["altar"],


    layout: [
    ["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg","bg","bg"],
    ["e","bg", "r", "r", "r", "r", "r", "r", "g", "g", "blk", "blk", "blk","red"],
    ["e","blue", "g", "g", "g", "g", "g", "g", "g", "g", "blk", "blk", "blk","red"],
    ["e","blue", "g", "r", "g", "g", "g", "g", "g", "g", "blk", "blk", "blk","red"],
    ["e","blue", "g", "g", "g", "g", "g", "g", "g", "g", "blk", "blk", "blk","red"],
    ["e","bg", "g", "r", "r", "r", "r", "r", "g", "g", "blk", "blk", "blk","red"],
    ["e","bg", "g", "r", "r", "r", "r", "r", "g", "r", "bg", "bg", "bg","bg"],
    ["e","bg", "g", "g", "g", "red", "bg", "altar", "g", "g", "blk", "blk", "blk","red"],
    ["e", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg","bg","bg"],
    ],
}

levels["T-DM"] = {
    level: "T-DM",
    name: "Warm up",
    initialdp: 10,
    squadlimit: 8,
    hp: 3,
    bgm: "dm_2",
    background: "loading4",
    description: "This is just the beginning, don't let your guard down though.\n",
    place: "CB",
    offsetX: -20,
    offsetY: -60,
    offsetZ: 20,
    type: "normal",
    skybox: "desert.png",

    waves: [
        { "number": 0, "time": 1, "gap": 5, "enemies": "Sarkaz Grudgebearer", "line": true, "tooltip": false, "taunt": false, "count": 1, "start": [1, 8], "checkpoints": [{ "start": [1, 8], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [1, 8], "pause": 0 }, { "start": [1, 8], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [1, 8], "pause": 0 }, { "start": [1, 8], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [1, 8], "pause": 0 }, { "start": [1, 8], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [1, 8], "pause": 0 }, { "start": [1, 8], "end": [1, 5], "pause": 0 }, { "start": [1, 5], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [2, 1], "pause": 0 }] },
        { "number": 1, "time": 1, "gap": 10, "enemies": "Sarkaz Bladeweaver", "line": true, "tooltip": false, "taunt": false, "count": 1, "start": [3, 9], "checkpoints": [{ "start": [3, 9], "end": [3, 9], "pause": 150 }, { "start": [3, 9], "end": [6, 7], "pause": 0 }, { "start": [6, 7], "end": [2, 1], "pause": 0 }] },
        { "number": 2, "time": 1, "gap": 10, "enemies": "Sarkaz Bladeweaver", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [4, 9], "checkpoints": [{ "start": [4, 9], "end": [4, 9], "pause": 150 }, { "start": [4, 9], "end": [6, 7], "pause": 0 }, { "start": [6, 7], "end": [2, 1], "pause": 0 }] },

        //Sarkaz Swordsman
        { "number": 3, "time": 5, "gap": 10, "enemies": "Sarkaz Swordsman", "line": true, "tooltip": false, "taunt": true, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 4 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },
        //Sarkaz Swordsman
        { "number": 4, "time": 8, "gap": 10, "enemies": "Sarkaz Swordsman", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },
        //Sarkaz Greatswordsman
        { "number": 5, "time": 13, "gap": 2, "enemies": "Sarkaz Swordsman", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 0 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Swordsman
        { "number": 6, "time": 33, "gap": 1, "enemies": "Sarkaz Swordsman", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },
        //Sarkaz Greatswordsman
        { "number": 7, "time": 35, "gap": 10, "enemies": "Sarkaz Greatswordsman", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Swordsman
        { "number": 8, "time": 45, "gap": 2, "enemies": "Sarkaz Swordsman", "line": true, "tooltip": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [1, 7], "pause": 0 }, { "start": [1, 7], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Bladeweaver
        { "number": 9, "time": 59, "gap": 10, "enemies": "Sarkaz Bladeweaver", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 4 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Crossbowman
        { "number": 10, "time": 60, "gap": 6, "enemies": "Sarkaz Crossbowman", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Bladeweaver
        { "number": 11, "time": 61, "gap": 10, "enemies": "Sarkaz Bladeweaver", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Swordsman
        { "number": 12, "time": 77, "gap": 2, "enemies": "Sarkaz Swordsman", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Greatswordsman
        { "number": 13, "time": 79, "gap": 10, "enemies": "Sarkaz Greatswordsman", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Sentinel
        { "number": 14, "time": 86, "gap": 10, "enemies": "Sarkaz Sentinel", "line": true, "tooltip": false, "taunt": false, "count": 1, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Swordsman
        { "number": 15, "time": 89, "gap": 2, "enemies": "Sarkaz Swordsman", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Greatswordsman
        { "number": 16, "time": 91, "gap": 10, "enemies": "Sarkaz Greatswordsman", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Swordsman
        { "number": 17, "time": 115, "gap": 2, "enemies": "Sarkaz Swordsman", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Crossbowman
        { "number": 18, "time": 117, "gap": 6, "enemies": "Sarkaz Crossbowman", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Swordsman
        { "number": 19, "time": 135, "gap": 2, "enemies": "Sarkaz Swordsman", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [1, 7], "pause": 0 }, { "start": [1, 7], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Swordsman
        { "number": 20, "time": 135, "gap": 2, "enemies": "Sarkaz Swordsman", "line": true, "tooltip": false, "taunt": true, "count": 3, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 1], "pause": 0 }] },

        //Sarkaz Crossbowman
        { "number": 21, "time": 152, "gap": 4, "enemies": "Sarkaz Crossbowman", "line": true, "tooltip": false, "taunt": false, "count": 2, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 4], "pause": 0 }, { "start": [2, 4], "end": [5, 4], "pause": 0 }, { "start": [5, 4], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Bladeweaver
        { "number": 22, "time": 165, "gap": 10, "enemies": "Sarkaz Bladeweaver", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 4 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },
        //Sarkaz Greatswordsman
        { "number": 23, "time": 167, "gap": 10, "enemies": "Sarkaz Greatswordsman", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Swordsman
        { "number": 24, "time": 193, "gap": 2, "enemies": "Sarkaz Swordsman", "line": true, "tooltip": false, "taunt": true, "count": 2, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 1], "pause": 0 }] },

        //Sarkaz Swordsman
        { "number": 25, "time": 197, "gap": 2, "enemies": "Sarkaz Swordsman", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 3], "pause": 0 }, { "start": [5, 3], "end": [5, 12], "pause": 0 }] },
        //Sarkaz Greatswordsman
        { "number": 26, "time": 199, "gap": 10, "enemies": "Sarkaz Greatswordsman", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 2], "pause": 4 }, { "start": [5, 2], "end": [5, 12], "pause": 0 }] },

        //Sarkaz flagbearer
        { "number": 27, "time": 210, "gap": 6, "enemies": "Sarkaz Sentinel", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Grudgebearer
        { "number": 28, "time": 204, "gap": 6, "enemies": "Sarkaz Bladeweaver", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [5, 1], "checkpoints": [{ "start": [5, 1], "end": [5, 12], "pause": 0 }] },

        //Sarkaz Bladeweaver
        { "number": 29, "time": 200, "gap": 6, "enemies": "Sarkaz Bladeweaver", "line": true, "tooltip": false, "taunt": false, "count": 2, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 1], "pause": 0 }] },


    ],
    enemies: ["Sarkaz Sentinel", "Sarkaz Grudgebearer", "Sarkaz Greatswordsman", "Sarkaz Bladeweaver", "Sarkaz Crossbowman", "Sarkaz Swordsman"],
    tooltips: [],



    layout: [["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg","bg"],
    ["bg", "bg", "bg", "bg", "bg", "g", "g", "g", "g", "bg", "bg", "bg", "bg","bg"],
    ["bg", "blue", "blk", "blk", "blk", "blk", "r", "bg", "blk", "blk", "blk", "blk", "red","bg"],
    ["bg", "bg", "bg", "r", "g", "r", "r", "bg", "bg", "g", "bg", "bg", "bg","bg"],
    ["bg", "bg", "bg", "r", "g", "r", "bg", "r", "bg", "g", "bg", "bg", "bg","bg"],
    ["bg", "red", "blk", "blk", "blk", "blk", "r", "bg", "blk", "blk", "blk", "blk", "blue","bg"],
    ["bg", "bg", "bg", "r", "r", "g", "g", "g", "g", "bg", "bg", "bg", "bg","bg"],
    ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg","bg"]
    ],

    hazards: [],

}

levels["T-7"] = {
    level: "T-7",
    name: "Operation Shield Breaker",
    bgm: "patriot_2",
    initialdp: 10,
    squadlimit: 9,
    hp: 3,
    background: "loading_CB_under",
    description: "The Aegis of the Infected is attacking us with all their might.\nUse everything you have to push them back!\n\n<Originium Altar> Periodically emits pulse waves\ndamaging both allied and enemy units.",
    place: "Plain",
    offsetX: -15,
    offsetY: -60,
    offsetZ: 0,
    type: "boss",
    skybox: "nightsky.png",

    waves: [
        { "number": 1, "time": 2, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": true, "count": 1, "taunt": false, "start": [1, 10], "checkpoints": [{ "start": [1, 10], "end": [2, 10], "pause": 5 }, { "start": [2, 10], "end": [4, 9], "pause": 50 }, { "start": [4, 9], "end": [7, 7], "pause": 0 }] },
        { "number": 2, "time": 13, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": true, "count": 1, "taunt": true, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [1, 7], "pause": 5 }, { "start": [1, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 3, "time": 16, "gap": 4, "enemies": "Guerrilla Hound Pro", "line": true, "tooltip": false, "count": 2, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [1, 5], "pause": 5 }, { "start": [1, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 4, "time": 19, "gap": 5, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 5, "time": 20, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": true, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 6, "time": 25, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 7, "time": 25, "gap": 4, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 8, "time": 30, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 9, "time": 35, "gap": 5, "enemies": "Guerrilla Herald Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 2], "checkpoints": [{ "start": [1, 2], "end": [2, 2], "pause": 5 }, { "start": [2, 2], "end": [3, 3], "pause": 40 }, { "start": [3, 3], "end": [7, 5], "pause": 0 }] },
        { "number": 11, "time": 42, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 12, "time": 45, "gap": 5, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": true, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [1, 5], "pause": 10 }, { "start": [1, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 13, "time": 45, "gap": 5, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [1, 7], "pause": 12 }, { "start": [1, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 14, "time": 50, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 15, "time": 54, "gap": 3, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }] },

        //patriot
        {
            "number": 99, "time": 70, "gap": 3, "enemies": "Patriot", "line": true, "tooltip": true, "count": 1, "taunt": true, "start": [0, 6], "checkpoints": [{ "start": [0, 6], "end": [1, 6], "pause": 15 }, { "start": [1, 6], "end": [2, 9], "pause": 0 }, { "start": [2, 9], "end": [4, 10], "pause": 10 }, { "start": [4, 10], "end": [6, 7], "pause": 15 }, { "start": [6, 7], "end": [1, 7], "pause": 0 }, { "start": [1, 7], "end": [2, 3], "pause": 0 },
            { "start": [2, 3], "end": [2, 2], "pause": 0 }, { "start": [2, 2], "end": [6, 5], "pause": 15 }, { "start": [6, 5], "end": [2, 5], "pause": 0 }, { "start": [2, 5], "end": [2, 7], "pause": 0 }, { "start": [2, 7], "end": [7, 7], "pause": 0 }]
        },

        { "number": 16, "time": 75, "gap": 3, "enemies": "Guerrilla Shieldguard Leader", "line": true, "tooltip": true, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [1, 5], "pause": 5 }, { "start": [1, 5], "end": [3, 3], "pause": 180 }, { "start": [3, 3], "end": [6, 5], "pause": 0 }, { "start": [6, 5], "end": [2, 6], "pause": 0 }, { "start": [2, 6], "end": [7, 7], "pause": 0 }] },
        { "number": 17, "time": 75, "gap": 3, "enemies": "Guerrilla Shieldguard Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [1, 7], "pause": 5 }, { "start": [1, 7], "end": [2, 9], "pause": 0 }, { "start": [2, 9], "end": [4, 9], "pause": 180 }, { "start": [4, 9], "end": [6, 7], "pause": 0 }, { "start": [6, 7], "end": [2, 6], "pause": 0 }, { "start": [2, 6], "end": [7, 5], "pause": 0 }] },

        { "number": 18, "time": 80, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 19, "time": 90, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [3, 7], "pause": 10 }, { "start": [3, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 20, "time": 93, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 21, "time": 95, "gap": 7, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 22, "time": 97, "gap": 6, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": true, "tooltip": true, "count": 1, "taunt": false, "start": [1, 2], "checkpoints": [{ "start": [1, 2], "end": [1, 3], "pause": 5 }, { "start": [1, 3], "end": [7, 5], "pause": 0 }] },
        { "number": 23, "time": 100, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 24, "time": 103, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 25, "time": 107, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [3, 5], "pause": 10 }, { "start": [3, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 26, "time": 117, "gap": 6, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 2], "checkpoints": [{ "start": [1, 2], "end": [1, 3], "pause": 5 }, { "start": [1, 3], "end": [7, 5], "pause": 0 }] },
        { "number": 27, "time": 117, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 28, "time": 120, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 29, "time": 125, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 30, "time": 128, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 31, "time": 134, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 32, "time": 137, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [3, 5], "pause": 10 }, { "start": [3, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 33, "time": 139, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [3, 7], "pause": 10 }, { "start": [3, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 34, "time": 141, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 35, "time": 149, "gap": 20, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [1, 2], "checkpoints": [{ "start": [1, 2], "end": [1, 3], "pause": 5 }, { "start": [1, 3], "end": [7, 5], "pause": 0 }] },
        { "number": 36, "time": 154, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 37, "time": 154, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [1, 10], "checkpoints": [{ "start": [1, 10], "end": [2, 10], "pause": 10 }, { "start": [2, 10], "end": [6, 6], "pause": 10 }, { "start": [6, 6], "end": [7, 5], "pause": 0 }] },
        { "number": 38, "time": 160, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 39, "time": 162, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 40, "time": 168, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 41, "time": 173, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 42, "time": 176, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 43, "time": 187, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 44, "time": 194, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 45, "time": 196, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 46, "time": 201, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 10], "checkpoints": [{ "start": [1, 10], "end": [2, 10], "pause": 5 }, { "start": [2, 10], "end": [6, 6], "pause": 10 }, { "start": [6, 6], "end": [7, 5], "pause": 0 }] },
        { "number": 47, "time": 206, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 48, "time": 208, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 50, "time": 213, "gap": 6, "enemies": "Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 52, "time": 216, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [3, 7], "pause": 10 }, { "start": [3, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 53, "time": 216, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [3, 5], "pause": 10 }, { "start": [3, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 54, "time": 221, "gap": 3, "enemies": "Guerrilla Siegebreaker Leader", "line": true, "tooltip": true, "count": 1, "taunt": false, "start": [4, 2], "checkpoints": [{ "start": [4, 2], "end": [4, 2], "pause": 20 }, { "start": [4, 2], "end": [6, 5], "pause": 0 }, { "start": [6, 5], "end": [2, 6], "pause": 0 }, { "start": [2, 6], "end": [7, 7], "pause": 0 }] },
        { "number": 55, "time": 221, "gap": 3, "enemies": "Guerrilla Siegebreaker Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [4, 10], "checkpoints": [{ "start": [4, 10], "end": [4, 10], "pause": 20 }, { "start": [4, 10], "end": [6, 7], "pause": 0 }, { "start": [6, 7], "end": [2, 6], "pause": 0 }, { "start": [2, 6], "end": [7, 5], "pause": 0 }] },

        { "number": 41, "time": 222, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 54, "time": 223, "gap": 3, "enemies": "Guerrilla Siegebreaker Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [3, 2], "checkpoints": [{ "start": [3, 2], "end": [3, 2], "pause": 25 }, { "start": [3, 2], "end": [2, 5], "pause": 0 }, { "start": [2, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 55, "time": 223, "gap": 3, "enemies": "Guerrilla Siegebreaker Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [3, 10], "checkpoints": [{ "start": [3, 10], "end": [3, 10], "pause": 25 }, { "start": [4, 10], "end": [2, 7], "pause": 0 }, { "start": [2, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 41, "time": 224, "gap": 4, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 2, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 41, "time": 226, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 37, "time": 229, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 8], "checkpoints": [{ "start": [6, 8], "end": [6, 8], "pause": 10 }, { "start": [6, 8], "end": [7, 5], "pause": 0 }] },
        { "number": 37, "time": 231, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [6, 9], "checkpoints": [{ "start": [6, 9], "end": [6, 9], "pause": 15 }, { "start": [6, 9], "end": [7, 5], "pause": 0 }] },
        { "number": 26, "time": 235, "gap": 6, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 2], "checkpoints": [{ "start": [1, 2], "end": [1, 3], "pause": 5 }, { "start": [1, 3], "end": [7, 5], "pause": 0 }] },

        { "number": 37, "time": 239, "gap": 6, "enemies": "Guerrilla Sniper Leader", "line": true, "tooltip": false, "count": 1, "taunt": false, "start": [1, 10], "checkpoints": [{ "start": [1, 10], "end": [2, 10], "pause": 5 }, { "start": [2, 10], "end": [6, 6], "pause": 10 }, { "start": [6, 6], "end": [7, 5], "pause": 0 }] },
        { "number": 41, "time": 239, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 41, "time": 246, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 41, "time": 249, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 7], "checkpoints": [{ "start": [0, 7], "end": [7, 7], "pause": 0 }] },
        { "number": 41, "time": 250, "gap": 6, "enemies": "Guerrilla Hound Pro", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [0, 5], "checkpoints": [{ "start": [0, 5], "end": [7, 5], "pause": 0 }] },

        { "number": 41, "time": 270, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 5], "checkpoints": [{ "start": [1, 5], "end": [1, 5], "pause": 5 }, { "start": [1, 5], "end": [7, 5], "pause": 0 }] },
        { "number": 41, "time": 272, "gap": 6, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [1, 7], "checkpoints": [{ "start": [1, 7], "end": [1, 7], "pause": 6 }, { "start": [1, 7], "end": [7, 7], "pause": 0 }] },
    ],

    enemies: ["Guerrilla Hound Pro", "Guerrilla Herald Leader", "Guerrilla Fighter Leader", "Guerrilla Sniper Leader", "Guerrilla Shieldguard Leader", "Sarkaz Guerrilla Fighter Leader", "Guerrilla Siegebreaker Leader", "Patriot", "Patriot2"],
    tooltips: ["Guerrilla Herald Leader", "Guerrilla Hound Pro", "Guerrilla Fighter Leader", "Guerrilla Sniper Leader", "Guerrilla Shieldguard Leader", "Sarkaz Guerrilla Fighter Leader", "Guerrilla Siegebreaker Leader", "Patriot"],

    hazards: ["altar"],


    // 13 width
    // 8 height
    layout: [["e", "bg", "bg", "bg", "bg", "red", "red", "red", "bg", "bg", "bg", "bg", "e"],
    ["e", "bg", "red", "g", "g", "blk", "blk", "blk", "g", "g", "red", "bg", "e"],
    ["e", "bg", "g", "g", "r", "g", "g", "g", "r", "g", "g", "bg", "e"],

    ["e", "bg", "g", "blk", "altar", "g", "r", "g", "g", "r", "g", "bg", "e"],

    ["e", "bg", "g", "r", "g", "g", "r", "g", "altar", "blk", "g", "bg", "e"],

    ["e", "bg", "g", "g", "r", "g", "r", "g", "r", "g", "g", "bg", "e"],

    ["e", "bg", "bg", "g", "g", "blk", "g", "blk", "g", "g", "bg", "bg", "e"],

    ["e", "bg", "bg", "bg", "bg", "blue", "bg", "blue", "bg", "bg", "bg", "bg", "e"],

    ],
}


levels["T-MN"] = {
    level: "T-MN",
    name: "Dangerous Battlefield",
    bgm: "mn_2",
    initialdp: 20,
    squadlimit: 8,
    hp: 3,
    background: "loading_Kazimierz_Final",
    description: "The most dangerous competitions are usually\nthe first ones to run out of tickets.\n" +
        "As such, it is advised to make arenas as\nhazardous as possible for maximum profit.\n\n" +
        "<Heated Path> Deals massive damage to any enemy or ally on it at intervals.\n" +
        "<Originium Ice Crystal> Periodically emits a frigid wave\n lowering the attack speed of affected allies.\n" +
        "<Originium Altar> Periodically emits pulse waves,\n damaging both allied and enemy units.",
    place: "CB",
    offsetX: -20,
    offsetY: -60,
    offsetZ: 0,
    type: "hard",
    skybox: "cityneon.png",

    waves: [
        { "number": 0, "time": 0, "gap": 5, "enemies": "Bloodboil Knightclub Elite", "line": false, "tooltip": true, "taunt": false, "count": 1, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 10], "pause": 90 }, { "start": [3, 10], "end": [1, 11], "pause": 0 }] },
        { "number": 1, "time": 0, "gap": 5, "enemies": "Bloodboil Knightclub Elite", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 10], "pause": 90 }, { "start": [4, 10], "end": [6, 11], "pause": 0 }] },

        //tytus
        { "number": 2, "time": 5, "gap": 5, "enemies": "Tytus Topola", "line": true, "tooltip": true, "taunt": false, "count": 1, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [3, 1], "pause": 200 }, { "start": [3, 1], "end": [2, 2], "pause": 0 }, { "start": [2, 2], "end": [1, 11], "pause": 0 }] },

        { "number": 3, "time": 13, "gap": 5, "enemies": "Vicious Training Gloompincer", "line": true, "tooltip": true, "taunt": true, "count": 1, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [6, 11], "pause": 0 }] },
        { "number": 4, "time": 23, "gap": 8, "enemies": "Vicious Training Gloompincer", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [6, 11], "pause": 0 }] },
        { "number": 5, "time": 35, "gap": 4, "enemies": "Vicious Training Gloompincer", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [6, 11], "pause": 0 }] },

        { "number": 6, "time": 35, "gap": 20, "enemies": "Roar Knightclub Elite", "line": true, "tooltip": true, "taunt": false, "count": 2, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [1, 11], "pause": 0 }] },
        { "number": 7, "time": 35, "gap": 20, "enemies": "Roar Knightclub Elite", "line": true, "tooltip": false, "taunt": false, "count": 2, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [6, 11], "pause": 0 }] },
        { "number": 5, "time": 45, "gap": 4, "enemies": "Vicious Training Gloompincer", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [6, 11], "pause": 0 }] },
        { "number": 1, "time": 53, "gap": 20, "enemies": "Roar Knightclub Elite", "line": true, "tooltip": false, "taunt": false, "count": 2, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 11], "pause": 0 }] },
        { "number": 5, "time": 66, "gap": 4, "enemies": "Vicious Training Gloompincer", "line": false, "tooltip": false, "taunt": false, "count": 3, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [6, 11], "pause": 0 }] },
        { "number": 1, "time": 80, "gap": 20, "enemies": "Elite Knight Shielder", "line": false, "tooltip": true, "taunt": false, "count": 1, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 11], "pause": 0 }] },
        { "number": 6, "time": 110, "gap": 45, "enemies": "Elite Knight Shielder", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [1, 11], "pause": 0 }] },
        { "number": 7, "time": 110, "gap": 45, "enemies": "Elite Knight Shielder", "line": false, "tooltip": false, "taunt": true, "count": 2, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [6, 11], "pause": 0 }] },
        { "number": 5, "time": 123, "gap": 4, "enemies": "Vicious Training Gloompincer", "line": false, "tooltip": false, "taunt": false, "count": 4, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [6, 11], "pause": 0 }] },
        { "number": 6, "time": 128, "gap": 20, "enemies": "Roar Knightclub Elite", "line": false, "tooltip": false, "taunt": false, "count": 5, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [1, 11], "pause": 0 }] },
        { "number": 7, "time": 128, "gap": 20, "enemies": "Roar Knightclub Elite", "line": false, "tooltip": false, "taunt": true, "count": 5, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [6, 11], "pause": 0 }] },
        { "number": 0, "time": 140, "gap": 5, "enemies": "Bloodboil Knightclub Elite", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [3, 11], "checkpoints": [{ "start": [3, 11], "end": [3, 10], "pause": 60 }, { "start": [3, 10], "end": [1, 11], "pause": 0 }] },
        { "number": 1, "time": 140, "gap": 5, "enemies": "Bloodboil Knightclub Elite", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [4, 11], "checkpoints": [{ "start": [4, 11], "end": [4, 10], "pause": 60 }, { "start": [4, 10], "end": [6, 11], "pause": 0 }] },
        { "number": 5, "time": 135, "gap": 3, "enemies": "Vicious Training Gloompincer", "line": false, "tooltip": false, "taunt": false, "count": 4, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [6, 11], "pause": 0 }] },
        { "number": 1, "time": 140, "gap": 30, "enemies": "Elite Knight Shielder", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [1, 1], "checkpoints": [{ "start": [1, 1], "end": [1, 11], "pause": 0 }] },
        { "number": 5, "time": 160, "gap": 3, "enemies": "Vicious Training Gloompincer", "line": false, "tooltip": false, "taunt": false, "count": 4, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [6, 11], "pause": 0 }] },
        { "number": 5, "time": 180, "gap": 3, "enemies": "Elite Knight Shielder", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [6, 11], "pause": 0 }] },
        { "number": 5, "time": 190, "gap": 3, "enemies": "Vicious Training Gloompincer", "line": false, "tooltip": false, "taunt": false, "count": 4, "start": [6, 1], "checkpoints": [{ "start": [6, 1], "end": [6, 11], "pause": 0 }] },
    ],

    enemies: ["Bloodboil Knightclub Elite", "Elite Knight Shielder", "Roar Knightclub Elite", "Vicious Training Gloompincer", "Tytus Topola", "Tytus Topola2"],
    tooltips: ["Bloodboil Knightclub Elite", "Elite Knight Shielder", "Roar Knightclub Elite", "Vicious Training Gloompincer", "Tytus Topola"],
    hazards: ["altar", "icealtar"],

    layout: [
        ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg",],
        ["bg", "red", "blk", "blk", "magma", "blk", "magma", "magma", "blk", "magma", "blk", "blue", "bg"],
        ["bg", "blk", "g", "blk", "r", "altar", "r", "r", "icealtar", "r", "bg", "bg", "bg"],
        ["bg", "blk", "r", "blk", "g", "g", "g", "g", "g", "blk", "blk", "red", "bg"],
        ["bg", "blk", "r", "blk", "g", "g", "g", "g", "g", "blk", "blk", "red", "bg"],
        ["bg", "blk", "g", "blk", "r", "altar", "r", "r", "icealtar", "r", "bg", "bg", "bg"],
        ["bg", "red", "blk", "blk", "magma", "blk", "magma", "magma", "blk", "magma", "blk", "blue", "bg"],
        ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg",],
    ],
}

levels["T-6"] = {
    level: "T-6",
    name: "Rage",
    bgm: "epm8_1",
    initialdp: 0,
    squadlimit: 9,
    hp: 3,
    background: "loading_graduate",
    description: "Put them out of their misery.\n\n" +
        "<Active Originium> Allies deployed on it and enemies who have passed it\nwill take constant damage,\nbut their ATK and Attack Speed will be increased significantly.",
    place: "Plain",
    offsetX: -15,
    offsetY: -55,
    offsetZ: 0,
    type: "boss",
    skybox: "cityruin.png",

    waves: [
        //{ "number":1,"time": 0, "gap": 15, "enemies": "Mephisto", "line": true, "tooltip": true, "taunt": false, "count": 1, "start": [3, 12], "checkpoints": [{ "start": [3, 12], "end": [3, 11], "pause": 100 },{ "start": [3, 11], "end": [3, 0], "pause": 0 }] },
        { "number": 1, "time": 0, "gap": 15, "enemies": "Sarkaz Centurion Nidus Guard", "line": false, "tooltip": true, "taunt": false, "count": 1, "start": [1, 2], "checkpoints": [{ "start": [1, 2], "end": [1, 2], "pause": 120 }, { "start": [1, 2], "end": [6, 2], "pause": 10 }, { "start": [6, 2], "end": [3, 0], "pause": 0 }] },
        { "number": 2, "time": 0, "gap": 15, "enemies": "Sarkaz Centurion Nidus Guard", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [1, 3], "checkpoints": [{ "start": [1, 3], "end": [1, 3], "pause": 180 }, { "start": [1, 3], "end": [6, 2], "pause": 10 }, { "start": [6, 2], "end": [3, 0], "pause": 0 }] },
        { "number": 3, "time": 0, "gap": 15, "enemies": "Sarkaz Centurion Nidus Guard", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [1, 7], "checkpoints": [{ "start": [1, 7], "end": [1, 7], "pause": 180 }, { "start": [1, 7], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },

        { "number": 4, "time": 10, "gap": 12, "enemies": "Possessed Soldier Leader", "line": true, "tooltip": true, "taunt": true, "count": 3, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 8], "pause": 0 }, { "start": [2, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },
        { "number": 5, "time": 11, "gap": 12, "enemies": "Possessed Soldier Leader", "line": false, "tooltip": false, "taunt": false, "count": 3, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 8], "pause": 0 }, { "start": [2, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },

        { "number": 6, "time": 17, "gap": 12, "enemies": "Possessed Soldier Leader", "line": false, "tooltip": false, "taunt": false, "count": 3, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 8], "pause": 0 }, { "start": [2, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },


        { "number": 7, "time": 13, "gap": 12, "enemies": "Possessed Soldier Leader", "line": true, "tooltip": false, "taunt": false, "count": 3, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 8], "pause": 0 }, { "start": [4, 8], "end": [3, 0], "pause": 0 }] },
        { "number": 8, "time": 14, "gap": 12, "enemies": "Possessed Soldier Leader", "line": false, "tooltip": false, "taunt": false, "count": 3, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 8], "pause": 0 }, { "start": [4, 8], "end": [3, 0], "pause": 0 }] },

        { "number": 9, "time": 20, "gap": 12, "enemies": "Possessed Soldier Leader", "line": false, "tooltip": false, "taunt": false, "count": 3, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 8], "pause": 0 }, { "start": [4, 8], "end": [3, 0], "pause": 0 }] },


        { "number": 10, "time": 20, "gap": 10, "enemies": "Possessed Veteran Junkman", "line": true, "tooltip": true, "taunt": false, "count": 3, "start": [3, 12], "checkpoints": [{ "start": [3, 12], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [3, 0], "pause": 0 }] },


        { "number": 11, "time": 50, "gap": 6, "enemies": "Enraged Possessed Soldier", "line": false, "tooltip": true, "taunt": false, "count": 1, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 11], "pause": 5 }, { "start": [2, 11], "end": [2, 8], "pause": 0 }, { "start": [2, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },
        { "number": 12, "time": 50, "gap": 6, "enemies": "Enraged Possessed Soldier", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [3, 12], "checkpoints": [{ "start": [3, 12], "end": [3, 11], "pause": 5 }, { "start": [3, 11], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [3, 0], "pause": 0 }] },
        { "number": 13, "time": 50, "gap": 6, "enemies": "Enraged Possessed Soldier", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 11], "pause": 5 }, { "start": [4, 11], "end": [4, 8], "pause": 0 }, { "start": [4, 8], "end": [3, 0], "pause": 0 }] },

        { "number": 14, "time": 55, "gap": 30, "enemies": "Enraged Possessed Thrower", "line": true, "tooltip": true, "taunt": false, "count": 3, "start": [1, 11], "checkpoints": [{ "start": [1, 11], "end": [1, 8], "pause": 0 }, { "start": [1, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },

        { "number": 15, "time": 65, "gap": 6, "enemies": "Possessed Defender Leader", "line": false, "tooltip": true, "taunt": false, "count": 1, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 9], "pause": 15 }, { "start": [2, 9], "end": [2, 8], "pause": 0 }, { "start": [2, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },
        { "number": 16, "time": 65, "gap": 6, "enemies": "Possessed Defender Leader", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 9], "pause": 55 }, { "start": [4, 9], "end": [4, 8], "pause": 0 }, { "start": [4, 8], "end": [3, 0], "pause": 0 }] },

        { "number": 17, "time": 67, "gap": 6, "enemies": "Possessed Defender Leader", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 10], "pause": 95 }, { "start": [2, 10], "end": [2, 8], "pause": 0 }, { "start": [2, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },
        { "number": 18, "time": 67, "gap": 6, "enemies": "Possessed Defender Leader", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 10], "pause": 115 }, { "start": [4, 10], "end": [4, 8], "pause": 0 }, { "start": [4, 8], "end": [3, 0], "pause": 0 }] },

        { "number": 19, "time": 72, "gap": 6, "enemies": "Mephisto", "line": true, "tooltip": true, "taunt": false, "count": 1, "start": [3, 12], "checkpoints": [{ "start": [3, 12], "end": [3, 11], "pause": 40 }, { "start": [3, 11], "end": [5, 11], "pause": 5 }, { "start": [5, 11], "end": [3, 0], "pause": 0 }] },

        //part 2
        { "number": 20, "time": 90, "gap": 30, "enemies": "Possessed Soldier Leader", "line": false, "tooltip": false, "taunt": true, "count": 2, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 8], "pause": 0 }, { "start": [2, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },
        { "number": 21, "time": 91, "gap": 30, "enemies": "Possessed Soldier Leader", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 8], "pause": 0 }, { "start": [2, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },

        { "number": 22, "time": 106, "gap": 30, "enemies": "Possessed Soldier Leader", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 8], "pause": 0 }, { "start": [2, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },

        { "number": 23, "time": 93, "gap": 30, "enemies": "Possessed Soldier Leader", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 8], "pause": 0 }, { "start": [4, 8], "end": [3, 0], "pause": 0 }] },
        { "number": 24, "time": 94, "gap": 30, "enemies": "Possessed Soldier Leader", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 8], "pause": 0 }, { "start": [4, 8], "end": [3, 0], "pause": 0 }] },

        { "number": 25, "time": 109, "gap": 30, "enemies": "Possessed Soldier Leader", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 8], "pause": 0 }, { "start": [4, 8], "end": [3, 0], "pause": 0 }] },

        { "number": 26, "time": 100, "gap": 21, "enemies": "Possessed Veteran Junkman", "line": false, "tooltip": false, "taunt": false, "count": 2, "start": [3, 12], "checkpoints": [{ "start": [3, 12], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [3, 0], "pause": 0 }] },

        { "number": 27, "time": 120, "gap": 15, "enemies": "Enraged Possessed Leader", "line": true, "tooltip": true, "taunt": false, "count": 1, "start": [6, 12], "checkpoints": [{ "start": [6, 12], "end": [6, 11], "pause": 30 }, { "start": [6, 11], "end": [3, 0], "pause": 0 }] },

        { "number": 28, "time": 130, "gap": 50, "enemies": "Enraged Possessed Bonethrower", "line": false, "tooltip": true, "taunt": false, "count": 1, "start": [1, 11], "checkpoints": [{ "start": [1, 11], "end": [1, 8], "pause": 0 }, { "start": [1, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },

        { "number": 29, "time": 160, "gap": 21, "enemies": "Possessed Veteran Junkman", "line": false, "tooltip": false, "taunt": true, "count": 3, "start": [2, 12], "checkpoints": [{ "start": [2, 12], "end": [2, 8], "pause": 0 }, { "start": [2, 8], "end": [6, 8], "pause": 0 }, { "start": [6, 8], "end": [6, 2], "pause": 0 }, { "start": [6, 2], "end": [4, 0], "pause": 0 }] },

        { "number": 30, "time": 163, "gap": 21, "enemies": "Possessed Veteran Junkman", "line": false, "tooltip": false, "taunt": false, "count": 3, "start": [4, 12], "checkpoints": [{ "start": [4, 12], "end": [4, 8], "pause": 0 }, { "start": [4, 8], "end": [3, 0], "pause": 0 }] },

        { "number": 31, "time": 170, "gap": 21, "enemies": "Possessed Veteran Junkman", "line": false, "tooltip": false, "taunt": false, "count": 3, "start": [3, 12], "checkpoints": [{ "start": [3, 12], "end": [3, 8], "pause": 0 }, { "start": [3, 8], "end": [3, 0], "pause": 0 }] },

        { "number": 32, "time": 200, "gap": 15, "enemies": "Enraged Possessed Leader", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [6, 12], "checkpoints": [{ "start": [6, 12], "end": [6, 11], "pause": 0 }, { "start": [6, 11], "end": [3, 0], "pause": 0 }] },

    ],

    enemies: ["Enraged Possessed Thrower", "Possessed Soldier Leader", "Possessed Defender Leader", "Possessed Veteran Junkman", "Enraged Possessed Bonethrower", "Enraged Possessed Soldier", "Enraged Possessed Leader", "Mephisto", "Sarkaz Centurion Nidus Guard"],
    tooltips: ["Enraged Possessed Thrower", "Possessed Soldier Leader", "Possessed Defender Leader", "Possessed Veteran Junkman", "Enraged Possessed Bonethrower", "Enraged Possessed Soldier", "Enraged Possessed Leader", "Mephisto", "Sarkaz Centurion Nidus Guard"],
    hazards: [],

    layout: [["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "blk", "blk", "r", "r", "r", "blk", "blk", "blk", "blk", "red", "bg"],
    ["bg", "bg", "blk", "bg", "bg", "bg", "r", "r", "g", "blk", "blk", "blk", "red"],
    ["blue", "blk", "g", "bg", "bg", "bg", "r", "r", "g", "blk", "blk", "blk", "red"],
    ["blue", "blk", "g", "g", "r", "r", "r", "r", "g", "blk", "blk", "blk", "red"],
    ["bg", "bg", "g", "g", "r", "g", "r", "g", "blood", "r", "r", "blk", "bg"],
    ["bg", "bg", "g", "blk", "blk", "g", "blk", "blk", "g", "g", "blk", "blk", "red"],
    ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"]
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
    place: "Plain",
    offsetX: 10,
    offsetY: -10,
    offsetZ: 0,
    type: "normal",

    waves: [
        //{"number":0, "time": 0, "gap": 5, "enemies": "Sarkaz Guerrilla Fighter Leader", "line": false, "tooltip": false, "count": 1, "taunt": false, "start": [4, 4], "checkpoints": [{ "start": [4, 4], "end": [4, 4], "pause": 300 }]},
        //{ "number":4,"time": 30, "gap": 5, "enemies": "Guerrilla Siegebreaker Leader", "line": false, "tooltip": true, "taunt": false, "count": 1, "start": [7, 12], "checkpoints": [{ "start": [7, 12], "end": [7, 11], "pause": 200 }, { "start": [7, 11], "end": [7, 0], "pause": 0 }] },

        { "number": 3, "time": 2, "gap": 5, "enemies": "Guerrilla Fighter Leader", "line": true, "tooltip": false, "taunt": false, "count": 1, "start": [7, 12], "checkpoints": [{ "start": [7, 12], "end": [7, 1], "pause": 10 }, { "start": [0, 11], "end": [1, 0], "pause": 0 }] },
        //{"number":2, "time": 0, "gap": 5, "enemies": "Patriot", "line": false, "tooltip": false, "taunt": false, "count": 1, "start": [7, 10], "checkpoints": [{ "start": [7, 10], "end": [7, 2], "pause": 300 }, { "start": [7, 2], "end": [7, 10], "pause": 5 }, { "start": [7, 10], "end": [7, 2], "pause": 5 }, { "start": [7, 2], "end": [7, 10], "pause": 300 }, { "start": [7, 10], "end": [7, 0], "pause": 0 }] },

    ],

    enemies: ["Patriot", "Patriot2", "Guerrilla Siegebreaker Leader", "Sarkaz Guerrilla Fighter Leader"],
    tooltips: ["Patriot", "Guerrilla Siegebreaker Leader"],
    hazards: ["altar"],

    layout: [["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "entertop", "bg"], ["blue", "g", "g", "g", "g", "g", "g", "g", "g", "g", "g", "blk", "red"],
    ["bg", "bg", "bg", "bg", "r", "r", "bg", "bg", "r", "r", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "g", "g", "g", "g", "bg", "bg", "bg", "bg"],
    ["red", "blk", "g", "bg", "g", "g", "g", "r", "g", "g", "bg", "bg", "bg"],
    ["bg", "bg", "g", "g", "g", "r", "altar", "bg", "r", "g", "g", "g", "blue"],
    ["bg", "bg", "r", "r", "r", "bg", "bg", "bg", "bg", "r", "r", "bg", "bg"],
    ["blue", "enterright", "g", "blood", "g", "g", "g", "g", "g", "g", "g", "blk", "red"]
    ],
}
*/


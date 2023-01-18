window.onload = startGame;

let gameconfig;
let titleLoading = "";
let lvlnumber = "";
let backgroundimg = "";
let unlockAllLvl = false;
let unlockAllChara = false;

function startGame() {
    prepareGame()
    let canvas = document.querySelector("#myCanvas");

    gameconfig = new GameConfig(canvas)
    resize()
    let startingscreen = "";
    if (sessionStorage.getItem("startingscreen") != null)
        startingscreen = sessionStorage.getItem("startingscreen")
    new MainMenu(gameconfig, startingscreen)
}

function resize() {
    var width = window.document.body.clientWidth;
    var height = window.document.body.clientHeight;

    if (width > height) {
        width = height * 16 / 9
    }
    else height = width * 9 / 16
    let canvas = document.querySelector("#container");
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    gameconfig.engine.setSize(width, height)
}

window.addEventListener("resize", () => {
    resize()
});

function addToSave(str) {
    let progress = localStorage.getItem("Krussnights");
    if (progress == null)
        progress = []
    else progress = JSON.parse(progress)
    progress.push(str)
    const res = [...new Set(progress)];
    localStorage.setItem("Krussnights", JSON.stringify(res))
}

function open_file(){
    console.log("mogus")
}
function checkSave(str) {
    let progress = localStorage.getItem("Krussnights");
    if (progress == null)
        progress = []
    else progress = JSON.parse(progress)
    return progress.includes(str)
}

function prepareGame() {

    addToSave("0")
    addToSave("Fang")
}

function clearChapterOne() {
    addToSave("0")
    addToSave("1-1")
    addToSave("1-2")
    addToSave("1-3")
    addToSave("1-4")
    addToSave("1-5")
    addToSave("1-6")
    addToSave("1-7")
    addToSave("1-8")
    addToSave("1-9")
    addToSave("1-10")
    addToSave("Fang")
    addToSave("Adnachiel")
    addToSave("Melantha")
    addToSave("Orchid")
    addToSave("Plume")
    addToSave("Hibiscus")
    addToSave("Ansel")
    addToSave("Durin")
    addToSave("Popukar")
    addToSave("Beagle")
    addToSave("Midnight")
}

function clearChapterTwo() {
    addToSave("2-1")
    addToSave("2-2")
    addToSave("2-3")
    addToSave("2-4")
    addToSave("2-5")
    addToSave("2-6")
    addToSave("2-7")
    addToSave("2-8")
    addToSave("2-9")
    addToSave("2-10")
    addToSave("2-11")
    addToSave("2-12")
    addToSave("Meteor")
    addToSave("Courier")
    addToSave("Mousse")
    addToSave("Matoimaru")
    addToSave("Perfumer")
}

function clearChapterThree() {
    addToSave("3-1")
    addToSave("3-2")
    addToSave("3-3")
    addToSave("3-4")
    addToSave("3-5")
    addToSave("3-6")
    addToSave("3-7")
    addToSave("3-8")
    addToSave("3-9")
    addToSave("3-10")
    addToSave("3-11")
    addToSave("Gitano")
    addToSave("Liskarm")
    addToSave("Beeswax")
    addToSave("Savage")
}

function clearChapterThreeH() {
    addToSave("3-H1")
    addToSave("3-H2")
    addToSave("3-H3")
    addToSave("3-H4")
    addToSave("Shining")
    addToSave("Saga")
}

function clearChapterFour() {
    addToSave("4-1")
    addToSave("4-2")
    addToSave("4-3")
    addToSave("4-4")
    addToSave("4-5")
    addToSave("4-6")
    addToSave("4-7")
    addToSave("4-8")
    addToSave("4-9")
    addToSave("4-10")
    addToSave("4-11")
    addToSave("Scavenger")
    addToSave("Ceylon")
    addToSave("Matterhorn")
    addToSave("Lappland")
}

function clearChapterFourH() {
    addToSave("4-H1")
    addToSave("4-H2")
    addToSave("4-H3")
    addToSave("4-H4")
    addToSave("Exusiai")
    addToSave("Angelina")
}

function clearDm() {
    addToSave("DM-1")
    addToSave("DM-2")
    addToSave("DM-3")
    addToSave("DM-4")
    addToSave("DM-5")
    addToSave("DM-6")
    addToSave("DM-7")
    addToSave("DM-8")
    addToSave("DM-9")
    addToSave("Haze")
    addToSave("Reed")
    addToSave("Istina")
}

function clearDmH() {
    addToSave("DM-H1")
    addToSave("DM-H2")
    addToSave("DM-H3")
    addToSave("DM-H4")
    addToSave("DM-H5")
    addToSave("Lava")
    addToSave("Astesia")
    addToSave("Penance")
}

function clearKm() {
    addToSave("KM-1")
    addToSave("KM-2")
    addToSave("KM-3")
    addToSave("KM-4")
    addToSave("KM-5")
    addToSave("KM-6")
    addToSave("KM-7")
    addToSave("KM-8")
    addToSave("KM-9")
    addToSave("KM-10")
    addToSave("Gravel")
    addToSave("Nearl")
    addToSave("Breeze")
}

function clearKmH() {
    addToSave("KM-H1")
    addToSave("KM-H2")
    addToSave("KM-H3")
    addToSave("Platinum")
    addToSave("Blemishine")
}

function clearChapterFive() {
    addToSave("5-1")
    addToSave("5-2")
    addToSave("5-3")
    addToSave("5-4")
    addToSave("5-5")
    addToSave("5-6")
    addToSave("5-7")
    addToSave("5-8")
    addToSave("5-9")
    addToSave("5-10")
    addToSave("5-11")
    addToSave("5-12")
    addToSave("5-13")
    addToSave("5-14")
    addToSave("Schwarz")
    addToSave("Ceobe")
    addToSave("Franka")
    addToSave("Skadi")
}

function clearChapterFiveH() {
    addToSave("5-H1")
    addToSave("5-H2")
    addToSave("5-H3")
    addToSave("5-H4")
    addToSave("Saileach")
    addToSave("Texas")
}



function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

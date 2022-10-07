window.onload = startGame;

let gameconfig;
let titleLoading = "";
let lvlnumber = "";
let backgroundimg = "";

function startGame() {
    let canvas = document.querySelector("#myCanvas");
    //divFps= document.getElementById("fps");

    gameconfig = new GameConfig(canvas)
    resize()
    new MainMenu(gameconfig)
    //new LVLController(gameconfig, enemylist, playerlist, levels["TEST-1"]);

}

function resize() {
    var width = window.document.body.clientWidth;
    var height = window.document.body.clientHeight;
    
    if (width > height) {
        width = height * 16 / 9
    }
    else height = width*9 / 16
    let canvas = document.querySelector("#container");
    canvas.style.width = width+"px";
    canvas.style.height = height+"px";

    gameconfig.engine.setSize(width, height)
}

window.addEventListener("resize", () => {
    resize()
});




window.onload = startGame;

let gameconfig;
let titleLoading="";
let lvlnumber="";
let backgroundimg="";

function startGame() {
    let canvas = document.querySelector("#myCanvas");
    //divFps= document.getElementById("fps");
    
    gameconfig = new GameConfig(canvas)
    gameconfig.newStats()
    new LVLController(gameconfig,enemylist,playerlist,levels["0-1"]);
    

}

window.addEventListener("resize", () => {
    gameconfig.engine.resize()
});




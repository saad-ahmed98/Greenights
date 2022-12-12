window.onload = startGame;

let gameconfig;
let titleLoading = "";
let lvlnumber = "";
let backgroundimg = "";
let unlockAll = false;

function startGame() {
    let canvas = document.querySelector("#myCanvas");

    gameconfig = new GameConfig(canvas)
    resize()
    let startingscreen = "";
    if(sessionStorage.getItem("startingscreen")!=null)
        startingscreen = sessionStorage.getItem("startingscreen")
    new MainMenu(gameconfig,startingscreen)

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



function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
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

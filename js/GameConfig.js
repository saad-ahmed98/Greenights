class GameConfig{
    constructor(canvas,divFps){
        this.canvas = canvas;
        this.engine = new BABYLON.Engine(canvas, true);
        this.inputStates = {};
        this.rollingAverage = new BABYLON.RollingAverage(60);
        this.modifySettings();
        this.scenes = [];
    }

    //creates engine
    createNewEngine(){
        if(this.scenes.length>0)
        this.scenes[0].dispose()
        this.engine.dispose()
        this.engine = new BABYLON.Engine(this.canvas, true);
        this.engine.enableOfflineSupport = false;
        this.engine.doNotHandleContextLost = true;

    }



    modifySettings() {

        this.inputStates.pause=false;

    //add the listener to the main, window object, and update the states
    window.addEventListener('keydown', (event) => {
        if(event.key==='Escape'){
            if(this.inputStates.pause)
            this.inputStates.pause=false;
            else
            this.inputStates.pause=true;      
          }
    }, false);

    //if the key will be released, change the states object 
    window.addEventListener('keyup', (event) => {
       if(event.key==='Escape'){
            if(this.inputStates.pause)
            this.inputStates.pause=false;
            else
            this.inputStates.pause=true;
            
        }
    }, false);

    
}
}
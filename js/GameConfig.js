class GameConfig{
    constructor(canvas,divFps){
        this.canvas = canvas;
        this.engine = new BABYLON.Engine(canvas, true);
        this.inputStates = {};
        this.rollingAverage = new BABYLON.RollingAverage(60);
        this.modifySettings();
        this.scenes = [];
        this.stats;
        this.statsprev;
    }

    createNewEngine(){
        if(this.scenes.length>0)
        this.scenes[0].dispose()
        this.engine.dispose()
        this.engine = new BABYLON.Engine(this.canvas, true);
    }

    newStats(){
        this.stats = {
            "hp":3,
        }
        this.statsprev = Object.assign( {}, this.stats );
        
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
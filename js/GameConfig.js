class GameConfig {
    constructor(canvas, divFps) {
        this.canvas = canvas;
        this.engine = new BABYLON.Engine(canvas, true);
        this.inputStates = {};
        this.rollingAverage = new BABYLON.RollingAverage(60);
        this.modifySettings();
        this.scene;
    }

    //creates engine
    createNewEngine() {
        if (this.scene != undefined) {
            this.scene.dispose()
            delete this.scene
        }
        this.engine.dispose()
        this.engine = new BABYLON.Engine(this.canvas, true);
        this.engine.enableOfflineSupport = false;
        this.engine.doNotHandleContextLost = true;

    }



    modifySettings() {
        this.inputStates.pause = false;
        //add the listener to the main, window object, and update the states
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                if (!this.inputStates.pause) {
                    this.inputStates.pause = true;
                    setTimeout(() => {
                        this.inputStates.pause = false;
                    }, 50)

                }
            }
        }, false);


    }
}
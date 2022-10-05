class LVLAbstract {
    constructor(gameconfig, lvl) {

        gameconfig.createNewEngine()
        this.scene = new BABYLON.Scene(gameconfig.engine);
        gameconfig.scenes.push(this.scene)
        this.tiles = [];
        this.hpbox = [];
        this.spawns = [];
        this.activePlayers = [];
        this.gameconfig = gameconfig;
        this.enemies = [];
        this.gui = new LVLGUIController(this.scene, gameconfig, lvl);
        this.light;
        this.frame = 300
        this.render = false;
        this.depart = false;

    }



    loadSounds() {

        var instance = this;
        var assetsManager = instance.scene.assetsManager;

        var binaryTask = assetsManager.addBinaryFileTask(
            "alarmenter",
            "sounds/ui/alarmenter.wav"
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets.alarmenter = new BABYLON.Sound(
                "alarmenter",
                task.data,
                this.scene,
                null,
                {
                    loop: false,
                }
            );
        };

        binaryTask = assetsManager.addBinaryFileTask(
            "charadead",
            "sounds/ui/charadead.wav"
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets.charadead = new BABYLON.Sound(
                "charadead",
                task.data,
                this.scene,
                null,
                {
                    loop: false,
                }
            );
        };

        binaryTask = assetsManager.addBinaryFileTask(
            "deploy",
            "sounds/ui/deploy.wav"
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets.deploy = new BABYLON.Sound(
                "deploy",
                task.data,
                this.scene,
                null,
                {
                    loop: false,
                }
            );
        };

        binaryTask = assetsManager.addBinaryFileTask(
            "losevoice",
            "sounds/ui/losevoice.wav"
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets.losevoice = new BABYLON.Sound(
                "losevoice",
                task.data,
                this.scene,
                null,
                {
                    loop: false,
                }
            );
        };

        binaryTask = assetsManager.addBinaryFileTask(
            "lose_loop",
            "sounds/ui/lose_loop.mp3"
        );

        binaryTask.onSuccess = function (task) {
            instance.scene.assets.loseloop = new BABYLON.Sound(
                "lose_loop",
                task.data,
                this.scene,
                null,
                {
                    loop: true,
                }
            );
        };

        binaryTask = assetsManager.addBinaryFileTask(
            "lose_intro",
            "sounds/ui/lose_intro.mp3"
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets.loseintro = new BABYLON.Sound(
                "lose_intro",
                task.data,
                this.scene,
                null,
                {
                    loop: false,
                }
            );
        };

        binaryTask = assetsManager.addBinaryFileTask(
            "winvoice",
            "sounds/ui/winvoice.wav"
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets.winvoice = new BABYLON.Sound(
                "winvoice",
                task.data,
                this.scene,
                null,
                {
                    loop: false,
                }
            );
        };

        binaryTask = assetsManager.addBinaryFileTask(
            "win_loop",
            "sounds/ui/win_loop.mp3"
        );

        binaryTask.onSuccess = function (task) {
            instance.scene.assets.winloop = new BABYLON.Sound(
                "win_loop",
                task.data,
                this.scene,
                null,
                {
                    loop: true,
                }
            );
        };


        binaryTask = assetsManager.addBinaryFileTask(
            "win_intro",
            "sounds/ui/win_intro.mp3"
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets.winintro = new BABYLON.Sound(
                "win_intro",
                task.data,
                this.scene,
                null,
                {
                    loop: false,
                }
            );
        };

        binaryTask = assetsManager.addBinaryFileTask(
            "pause",
            "sounds/ui/pause.wav"
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets.pause = new BABYLON.Sound(
                "pause",
                task.data,
                this.scene,
                null,
                {
                    loop: false,
                }
            );
        };

        binaryTask = assetsManager.addBinaryFileTask(
            "retreat",
            "sounds/ui/retreat.wav"
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets.retreat = new BABYLON.Sound(
                "retreat",
                task.data,
                this.scene,
                null,
                {
                    loop: false,
                }
            );
        };
        binaryTask = assetsManager.addBinaryFileTask(
            "tooltip",
            "sounds/ui/tooltip.wav"
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets.tooltip = new BABYLON.Sound(
                "tooltip",
                task.data,
                this.scene,
                null,
                {
                    loop: false,
                }
            );
        };

    }

    loadSkybox(url) {
        var instance = this;
        var assetsManager = instance.scene.assetsManager;

        var textureTask = assetsManager.addTextureTask("image task", url);
        textureTask.onSuccess = function (task) {
            instance.scene.assets.skybox = task.texture
        }
    }



    playBGM(volume) {
        var intro = this.scene.assets.bgmintro
        var loop = this.scene.assets.bgmloop
        if (!intro.isPlaying && !loop.isPlaying && !this.gui.showinggui) {
            intro.setVolume(volume)
            intro.play()
            intro._outputAudioNode.context.addEventListener('statechange', function () {
                if (intro._outputAudioNode.context.state == "running")
                    intro.play()

            });
            intro.onended = function () {
                loop.setVolume(volume);
                loop.play()
            }
            var keys = Object.keys(this.playerlist)
            if (keys.length > 0 && !this.depart) {
                this.depart = true
                this.playSound(this.playerlist[keys[Math.floor(Math.random() * keys.length)]].name + "-depart", this.vcvolume);
            }
        }

    }

    playSound(soundname, volume) {
        var sound = this.scene.assets[soundname]
        sound.setVolume(volume)
        sound.play()
    }

    playMissionClear() {
        this.scene.assets.bgmintro.stop()
        this.scene.assets.bgmloop.stop()

        var sound = this.scene.assets["winvoice"]
        sound.setVolume(0.3)
        sound.play()

        var intro = this.scene.assets.winintro
        var loop = this.scene.assets.winloop
        intro.setVolume(0.3)
        intro.play()

        intro.onended = function () {
            loop.setVolume(0.3);
            loop.play()
        }
    }

    playMissionFailed() {
        this.scene.assets.bgmintro.stop()
        this.scene.assets.bgmloop.stop()
        var sound = this.scene.assets["losevoice"]
        sound.setVolume(0.3)
        sound.play()

        var intro = this.scene.assets.loseintro
        var loop = this.scene.assets.loseloop
        intro.setVolume(0.3)
        intro.play()

        intro.onended = function () {
            loop.setVolume(0.3);
            loop.play()
        }
    }

    configureAssetManager() {
        // useful for storing references to assets as properties. i.ethis.scene.assets.cannonsound, etc.
        this.scene.assets = {};
        var instance = this;

        let assetsManager = new BABYLON.AssetsManager(this.scene);

        assetsManager.onProgress = function (
            remainingCount,
            totalCount
        ) {
            instance.gameconfig.engine.loadingUIText =
                '<div id="center"><div id="main" style="width:' + ((totalCount - remainingCount) * 600 / totalCount) + 'px"></div></div>'
        };
        instance.createScene()
        assetsManager.onFinish = function (tasks) {
            instance.gameconfig.engine.runRenderLoop(function () {
                instance.renderScene();
            });
        };

        this.scene.assetsManager = assetsManager;
    }


    createLights() {
        // i.e sun light with all light rays parallels, the vector is the direction.
        let light0 = new BABYLON.HemisphericLight("dir0", new BABYLON.Vector3(1, 0, -10), this.scene);
        light0.intensity = 0;
        this.light = light0
    }

    renderScene() {
        var startingColor = this.scene.clearColor.clone();
        var t;
        /*
        if(this.frame ==400){
            this.playSound("tooltip",0.3);
        }
        */

        if (this.frame < 550) {
            this.frame += 5;
            t = 0.5 + Math.cos(this.frame / 100) / 2;
            this.light.intensity = 2 * t;
            BABYLON.Color3.LerpToRef(BABYLON.Color3.BlackReadOnly, startingColor, t, this.scene.clearColor);
        }
        else {
            if (!this.render) {
                this.createGUIs()
                this.render = true;
            }
            else {
                this.playBGM(0.2)

                if (this.gameconfig.inputStates.pause) {
                    if (!this.gui.showinggui && this.gui.canPause) {
                        this.gui.createPauseScreen(this);
                    }
                    else if (this.gui.timerPause)
                        this.gui.removePauseScreen(this);
                }
                if (!this.gui.isPaused)
                    this.createLvl();
            }
        }
        this.scene.render();
    }

    loadAssets() {
        throw new Error('You must implement this function');
    }

    createScene() {
        throw new Error('You must implement this function');
    }
    createLvl() {
        throw new Error('You must implement this function');
    }


}
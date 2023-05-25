class LVLController extends LVLAbstract {
    constructor(gameconfig, enemylist, playerlist, lvl) {
        titleLoading = lvl.name
        lvlnumber = lvl.level
        backgroundimg = "images/background/" + lvl.background + ".png"
        super(gameconfig);
        this.tiles = [];
        this.hpbox = [];
        this.spawns = [];
        this.activePlayers = [];
        this.enemies = [];
        this.hazards = [];
        this.place = lvl.place;
        this.snowstorm = lvl.snowstorm || false;
        this.deployall = lvl.deployall || false;
        this.unlock = lvl.unlock || "Fang";
        this.tutorial = lvl.tutorial;

        this.enemiesreviving = []
        this.presentHazards = lvl.hazards;
        this.tooltips = lvl.tooltips;

        this.gui = new LVLGUIController(this.scene, this.gameconfig);

        this.layout = lvl.layout
        this.bgmchanged = false;
        this.bgm = lvl.bgm
        this.maxhp = lvl.hp
        this.hp = lvl.hp
        this.skyboxtext = lvl.skybox
        this.bgm2 = lvl.bgm2

        this.matrix = [];
        this.flyingmatrix = [];
        this.maptimer = 0;
        this.waves = JSON.parse(JSON.stringify(lvl.waves));

        this.enemylist = enemylist;
        this.restartlist = JSON.parse(JSON.stringify(playerlist));
        this.playerlist = JSON.parse(JSON.stringify(playerlist));

        this.appearingenemies = lvl.enemies;

        this.isSpawning = false;

        this.pause = false;

        this.spriteManagers = {};

        this.enemycount = 0;
        this.enemytot = 0;

        this.startingdp = lvl.initialdp;
        this.currentdp = this.startingdp;
        this.bullets = [];

        this.squadlimit = lvl.squadlimit;
        this.dpregen = lvl.dpregen || 1;
        this.dptimer = 0;
        this.dplimit = lvl.dplimit || 99;

        this.gamespeed = 2;

        this.prevspeed;

        this.activate = false;

        if (lvl.poison != undefined)
            this.poison = lvl.poison

        this.configureAssetManager();
        this.loadAssets();
        this.scene.assetsManager.load();
        /*this.scene.performancePriority =  BABYLON.ScenePerformancePriority.Intermediate;
        */
        this.scene.skipPointerMovePicking = true;

        //this.scene.autoClear = false; // Color buffer

        this.scene.autoClearDepthAndStencil = false; // Depth and stencil, obviously


        this.scene.assets.meshchara = new BABYLON.MeshBuilder.CreateBox(this.id, { height: 10, depth: 10, width: 10 }, this.scene);
        this.scene.assets.meshchara.visibility = 0;
        this.scene.assets.meshchara.position.y = -100;


        this.vcvolume = 0.3

        this.zoom = false;

        this.saileach = false;

        this.cameraOffsetX = lvl.offsetX;
        this.cameraOffsetY = lvl.offsetY;
        this.cameraOffsetZ = lvl.offsetZ;
    }

    //restarts the level
    restart() {
        new LVLController(this.gameconfig, enemylist, this.restartlist, JSON.parse(JSON.stringify(levels[lvlnumber])))
    }

    //creates level stats and player wheel
    createGUIs() {
        this.gui.createStatsUI(this.enemycount + "/" + this.enemytot, this.hp, this);
        this.gui.createPlayerWheelUI(this.playerlist, this);
    }

    //scene render loop
    //checks every frame all enemies for movement
    //checks enemy blocking, player skills and life
    //all bullets and timed effects
    levelRenderLoop() {
        //this.gameconfig.divFps.innerHTML = this.gameconfig.engine.getFps().toFixed() + " fps";
        this.gameconfig.rollingAverage.add(this.scene.getAnimationRatio());
        this.gui.updateRedeployTimers(this.playerlist, this.gamespeed);

        if (!this.pause) {
            this.moveEnemies();
            this.checkEnemies();
            this.checkPlayers();
            this.checkSkills();
            this.movePlayers();
            this.checkTutorial();
            this.maptimer += 1 / this.gamespeed;
            this.dptimer += this.dpregen / this.gamespeed;
            
            if (!this.isSpawning)
                this.spawnEnemies();
            this.checkBullets();
            this.checkTimeEffects();
        }

        if (this.dptimer >= 30) {
            this.currentdp = Math.min(this.currentdp + 1, this.dplimit);
            this.dptimer = 0;
            this.gui.updatePlayerWheelUI(this.currentdp, this.squadlimit)
        }
        if (this.hp <= 0) {
            if (!this.gui.showinggui)
                this.gui.createGameOverScreen(this)
        }
        if (this.enemycount >= this.enemytot) {
            var instance = this;

            setTimeout(() => {
                if (this.hp > 0) {
                    addToSave(lvlnumber)
                    addToSave(this.unlock)
                }
                if (!instance.gui.showinggui)
                    instance.gui.createLevelClearScreen(instance)
            }, 1000)

        }

    }

    loadAssets() {
        this.loadIcons();
        this.loadSounds();
        this.loadSprites();
        this.loadHazards();
    }
    loadIcons() {
        this.loadPlayerIcons();
        this.loadEnemyIcons();
        this.loadStaticImages();
    }

    //unit icons used for player wheel
    loadPlayerIcons() {
        var instance = this;
        var assetsManager = instance.scene.assetsManager;
        var binaryTask;
        var keys = Object.keys(this.playerlist)
        for (let i = 0; i < keys.length; i++) {

            binaryTask = assetsManager.addImageTask(
                instance.playerlist[keys[i]].name + "-opicon",
                instance.playerlist[keys[i]].opicon
            );
            binaryTask.onSuccess = function (task) {
                instance.scene.assets[task.name] = task.image
            };

            binaryTask = assetsManager.addImageTask(
                instance.playerlist[keys[i]].name + "-classicon",
                "images/classicons/" + instance.playerlist[keys[i]].class + ".webp"
            );
            binaryTask.onSuccess = function (task) {
                instance.scene.assets[task.name] = task.image
            };
        }
    }

    //enemy images if there is a tooltip showing up
    loadEnemyIcons() {
        var instance = this;
        var assetsManager = instance.scene.assetsManager;
        var binaryTask;
        for (let i = 0; i < this.tooltips.length; i++) {

            binaryTask = assetsManager.addImageTask(
                instance.tooltips[i] + "-enemyicon",
                "images/enemyicons/" + instance.tooltips[i] + ".png",
            );
            binaryTask.onSuccess = function (task) {
                instance.scene.assets[task.name] = task.image
            };
        }
    }

    checkTutorial(){
        if(this.tutorial != undefined && this.tutorial != -1 && this.tutorial * 30 <= this.maptimer){
            this.tutorial = -1;
            this.gui.createTutorial(this)
        }
    }

    //layout textures
    //loads a texture for each type of tile
    loadTextures() {
        var instance = this;
        var assetsManager = instance.scene.assetsManager;
        var binaryTask;

        binaryTask = assetsManager.addTextureTask(
            "g",
            "images/textures/" + instance.place + "/g.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "blk",
            "images/textures/" + instance.place + "/blk.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "blue",
            "images/textures/" + instance.place + "/blue.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "red",
            "images/textures/" + instance.place + "/red.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };
        binaryTask = assetsManager.addTextureTask(
            "r",
            "images/textures/" + instance.place + "/r.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "magma",
            "images/textures/magma.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "blood",
            "images/textures/" + instance.place + "/blood.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "bloodblk",
            "images/textures/bloodblk.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "enterright",
            "images/textures/enterright.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "enterleft",
            "images/textures/enterleft.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "entertop",
            "images/textures/entertop.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };
        binaryTask = assetsManager.addTextureTask(
            "enterbottom",
            "images/textures/enterbottom.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "rright",
            "images/textures/rright.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "rleft",
            "images/textures/rleft.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "rtop",
            "images/textures/rtop.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };
        binaryTask = assetsManager.addTextureTask(
            "rbottom",
            "images/textures/rbottom.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "gright",
            "images/textures/gright.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "gleft",
            "images/textures/gleft.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "gtop",
            "images/textures/gtop.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };
        binaryTask = assetsManager.addTextureTask(
            "gbottom",
            "images/textures/gbottom.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "blkright",
            "images/textures/blkright.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "blkleft",
            "images/textures/blkleft.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "blktop",
            "images/textures/blktop.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };
        binaryTask = assetsManager.addTextureTask(
            "blkbottom",
            "images/textures/blkbottom.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "skybox",
            "images/textures/skybox/" + instance.skyboxtext,
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };
        binaryTask = assetsManager.addTextureTask(
            "gdef",
            "images/textures/" + instance.place + "/gdef.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };
        binaryTask = assetsManager.addTextureTask(
            "gheal",
            "images/textures/" + instance.place + "/gheal.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };
    }

    //loads gui images
    loadStaticImages() {
        this.loadTextures()
        var instance = this;
        var assetsManager = instance.scene.assetsManager;
        var binaryTask;

        if (this.tutorial != undefined) {
            binaryTask = assetsManager.addImageTask(
                "tutorial",
                "images/tutorials/"+this.lvlnumber+".png",
            );
            binaryTask.onSuccess = function (task) {
                instance.scene.assets[task.name] = task.image
            };
        }
        binaryTask = assetsManager.addImageTask(
            "retrybutton",
            "images/common/retry.png",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.image
        };
        binaryTask = assetsManager.addImageTask(
            "battlestats",
            "images/common/battlestats.png",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.image
        };
        binaryTask = assetsManager.addImageTask(
            "quitbutton",
            "images/common/quit.png",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.image
        };

        binaryTask = assetsManager.addImageTask(
            "nextbutton",
            "images/common/next.png",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.image
        };

        binaryTask = assetsManager.addImageTask(
            "rdfilter",
            "images/common/rd.png",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.image
        };
        binaryTask = assetsManager.addImageTask(
            "greyfilter",
            "images/common/notavailable.png",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.image
        };

        binaryTask = assetsManager.addImageTask(
            "pausefilter",
            "images/common/greyfilter.png",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.image
        };

        binaryTask = assetsManager.addImageTask(
            "dpicon",
            "images/common/dp.png",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.image
        };

        binaryTask = assetsManager.addImageTask(
            "retreatbutton",
            "images/common/retreat.png",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.image
        };

        binaryTask = assetsManager.addImageTask(
            "losshp",
            "images/common/loss.png",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.image
        };

        binaryTask = assetsManager.addImageTask(
            "poison",
            "images/common/poison.png",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.image
        };
    }

    //load meshes used for scenary
    loadHazards() {
        var instance = this;
        var keys = Object.keys(this.presentHazards)
        for (let i = 0; i < keys.length; i++) {
            let meshTask = this.scene.assetsManager.addMeshTask(
                this.presentHazards[keys[i]],
                "",
                "models/",
                this.presentHazards[keys[i]] + ".glb"
            );
            meshTask.onSuccess = function (task) {
                instance.scene.assets[task.name] = task.loadedMeshes[0]
                instance.scene.assets[task.name].position.x = 3000
            };
            let binaryTask = this.scene.assetsManager.addBinaryFileTask(
                this.presentHazards[keys[i]] + "sound",
                "sounds/hazard/" + this.presentHazards[keys[i]] + "-active.wav"
            );
            binaryTask.onSuccess = function (task) {
                instance.scene.assets[task.name] = new BABYLON.Sound(
                    "ss",
                    task.data,
                    this.scene,
                    null,
                    {
                        loop: false,
                    }
                );
            };

        }

    }

    //plays bgm of the map
    playBGM(volume) {
        var intro = this.scene.assets.bgmintro
        var loop = this.scene.assets.bgmloop
        if (!intro.isPlaying && !loop.isPlaying && !this.gui.showinggui && !this.bgmchanged) {
            intro.setVolume(volume)
            intro.play()
            intro._outputAudioNode.context.addEventListener('statechange', function () {
                if (intro._outputAudioNode.context.state == "running")
                    intro.play()

            });
            intro.onended = function () {
                //when intro ends, play part that loops
                loop.setVolume(volume);
                loop.play()
            }

            var keys = Object.keys(this.playerlist)
            if (keys.length > 0 && !this.depart) {
                //play random depart voiceline of one of the units
                this.depart = true
                this.playSound(this.playerlist[keys[Math.floor(Math.random() * keys.length)]].name + "-depart", this.vcvolume);
            }
        }

    }

    //plays 2nd bgm of the map if applicable
    playBGM2(volume) {
        var intro = this.scene.assets.bgm2intro
        var loop = this.scene.assets.bgm2loop
        this.bgmchanged = true
        this.scene.assets.bgmintro.stop()
        this.scene.assets.bgmloop.stop()
        setTimeout(() => {
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
            }

        }, 1000)


    }

    //plays mission clear voice and music
    playMissionClear() {
        this.scene.assets.bgmintro.stop()
        this.scene.assets.bgmloop.stop()

        if (this.bgm2 != undefined) {
            this.scene.assets.bgm2intro.stop()
            this.scene.assets.bgm2loop.stop()
        }
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

    renderScene() {
        var startingColor = this.scene.clearColor.clone();
        var t;

        //fade in animation
        if (this.frame < 550) {
            this.frame += 5;
            t = 0.5 + Math.cos(this.frame / 100) / 2;
            this.light.intensity = 4 * t;
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
                //if game isn't paused, run the game logic loop
                if (!this.gui.isPaused)
                    this.levelRenderLoop();
            }

        }
        this.scene.render();
    }

    //plays mission failed voice and music
    playMissionFailed() {
        this.scene.assets.bgmintro.stop()
        this.scene.assets.bgmloop.stop()
        if (this.bgm2 != undefined) {
            this.scene.assets.bgm2intro.stop()
            this.scene.assets.bgm2loop.stop()
        }

        var intro = this.scene.assets.loseintro
        var loop = this.scene.assets.loseloop
        intro.setVolume(0.3)
        intro.play()

        intro.onended = function () {
            loop.setVolume(0.3);
            loop.play()
        }
    }


    //load all player sound effects
    loadPlayerSFX() {
        var instance = this;
        var assetsManager = instance.scene.assetsManager;
        var binaryTask;
        var keys = Object.keys(this.playerlist)
        for (let i = 0; i < keys.length; i++) {

            var sfx = Object.keys(this.playerlist[keys[i]].sfx)
            for (let j = 0; j < sfx.length; j++) {
                binaryTask = assetsManager.addBinaryFileTask(
                    instance.playerlist[keys[i]].name + "-" + sfx[j],
                    "sounds/player/sfx/" + instance.playerlist[keys[i]].sfx[sfx[j]].src + ".wav"
                );
                binaryTask.onSuccess = function (task) {
                    instance.scene.assets[task.name] = new BABYLON.Sound(
                        task.name,
                        task.data,
                        instance.scene,
                        null,
                        {
                            loop: false,
                        }
                    );
                };
            }
        }

    }

    //load all enemy sound effects
    loadEnemySFX() {
        var instance = this;
        var assetsManager = instance.scene.assetsManager;
        var binaryTask;
        for (let i = 0; i < this.appearingenemies.length; i++) {

            var sfx = Object.keys(this.enemylist[this.appearingenemies[i]].sfx)
            for (let j = 0; j < sfx.length; j++) {
                binaryTask = assetsManager.addBinaryFileTask(
                    instance.appearingenemies[i] + "-" + sfx[j],
                    "sounds/enemy/sfx/" + instance.enemylist[instance.appearingenemies[i]].sfx[sfx[j]].src + ".wav"
                );
                binaryTask.onSuccess = function (task) {
                    instance.scene.assets[task.name] = new BABYLON.Sound(
                        task.name,
                        task.data,
                        instance.scene,
                        null,
                        {
                            loop: false,
                        }
                    );
                };
            }
        }

    }

    //load all units voicelines
    //win voiceline currently unused
    loadPlayerVoicelines() {
        var instance = this;
        var assetsManager = instance.scene.assetsManager;
        var binaryTask;
        var keys = Object.keys(this.playerlist)
        for (let i = 0; i < keys.length; i++) {

            var sfx = ["depart", "taunt", "skill", "select", "deploy"]
            for (let j = 0; j < sfx.length; j++) {

                binaryTask = assetsManager.addBinaryFileTask(
                    instance.playerlist[keys[i]].name + "-" + sfx[j],
                    "sounds/player/voicelines/" + instance.playerlist[keys[i]].name + "-" + sfx[j] + ".mp3"
                );
                binaryTask.onSuccess = function (task) {
                    instance.scene.assets[task.name] = new BABYLON.Sound(
                        task.name,
                        task.data,
                        instance.scene,
                        null,
                        {
                            loop: false,
                        }
                    );
                };
            }
        }
    }


    loadSprites() {
        this.createSpriteManagers();
    }

    createSpriteManagers() {
        var instance = this;
        var assetsManager = instance.scene.assetsManager;
        var keys = Object.keys(this.enemylist);

        //create set to avoid loading spritesheets shared between enemies multiple times
        var spritesheets = new Set()
        for (let i = 0; i < keys.length; i++) {
            if (this.appearingenemies.includes(keys[i]))
                spritesheets.add(this.enemylist[keys[i]].spritesheet)
        }

        //preloads sprite sheets
        //loads spritesheet image as texture

        for (const item of spritesheets) {
            let binaryTask = assetsManager.addTextureTask(
                item,
                item,
                true,
                false,
                BABYLON.Texture.TRILINEAR_SAMPLINGMODE
                //MUST LOAD IN TRILINEAR_SAMPLINGMODE!!!
            );
            binaryTask.onSuccess = function (task) {
                //after loading texture,
                //creates sprite manager and manually gives it the spritesheet as texture
                instance.spriteManagers[task.name] = new BABYLON.SpriteManager(task.name + "Manager", undefined, 20, { width: 444, height: 302.5 });
                instance.spriteManagers[task.name].texture = task.texture
            };
        }

        keys = Object.keys(this.playerlist);
        for (let i = 0; i < keys.length; i++) {
            let binaryTask = assetsManager.addTextureTask(
                keys[i],
                instance.playerlist[keys[i]].spritesheet,
                true,
                false,
                BABYLON.Texture.TRILINEAR_SAMPLINGMODE
            );
            binaryTask.onSuccess = function (task) {
                instance.spriteManagers[task.name] = new BABYLON.SpriteManager(task.name + "Manager", undefined, 2, { width: 444, height: 302.5 });
                instance.spriteManagers[task.name].texture = task.texture
            };
        }

        let binaryTask = assetsManager.addTextureTask(
            "icons",
            "images/common/icons-sheet.png",
            true,
            false,
            BABYLON.Texture.TRILINEAR_SAMPLINGMODE
        );
        binaryTask.onSuccess = function (task) {
            instance.spriteManagers[task.name] = new BABYLON.SpriteManager("IconsManager", undefined, 100, { width: 444, height: 302.5 });
            instance.spriteManagers[task.name].texture = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "skillaura",
            "images/common/aura-sheet.webp",
            true,
            false,
            BABYLON.Texture.TRILINEAR_SAMPLINGMODE
        );
        binaryTask.onSuccess = function (task) {
            instance.spriteManagers[task.name] = new BABYLON.SpriteManager("AuraManager", undefined, 50, { width: 886, height: 604 });
            instance.spriteManagers[task.name].texture = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "effects",
            "images/common/effects-sheet.png",
            true,
            false,
            BABYLON.Texture.TRILINEAR_SAMPLINGMODE
        );
        binaryTask.onSuccess = function (task) {
            instance.spriteManagers[task.name] = new BABYLON.SpriteManager("EffectsManager", undefined, 50, { width: 888, height: 605 });
            instance.spriteManagers[task.name].texture = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "boom",
            "images/common/boom-sheet.png",
            true,
            false,
            BABYLON.Texture.TRILINEAR_SAMPLINGMODE
        );
        binaryTask.onSuccess = function (task) {
            instance.spriteManagers[task.name] = new BABYLON.SpriteManager("BoomManager", undefined, 50, { width: 888, height: 605 });
            instance.spriteManagers[task.name].texture = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "boomice",
            "images/common/boomice-sheet.png",
            true,
            false,
            BABYLON.Texture.TRILINEAR_SAMPLINGMODE
        );
        binaryTask.onSuccess = function (task) {
            instance.spriteManagers[task.name] = new BABYLON.SpriteManager("BoomIceManager", undefined, 50, { width: 888, height: 605 });
            instance.spriteManagers[task.name].texture = task.texture
        };

        binaryTask = assetsManager.addTextureTask(
            "snow",
            "images/common/snow-sheet.png",
            true,
            false,
            BABYLON.Texture.TRILINEAR_SAMPLINGMODE
        );
        binaryTask.onSuccess = function (task) {
            instance.spriteManagers[task.name] = new BABYLON.SpriteManager("SnowManager", undefined, 1, { width: 500 * 0.96, height: 282 * 0.96 });
            instance.spriteManagers[task.name].texture = task.texture
        };
    }


    //load game sounds
    loadSounds() {
        var instance = this;
        var assetsManager = instance.scene.assetsManager;
        this.loadPlayerSFX();
        this.loadEnemySFX();
        this.loadPlayerVoicelines();


        var binaryTask = assetsManager.addBinaryFileTask(
            "bgm",
            "sounds/bgm/" + this.bgm + "_intro.mp3"
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets.bgmintro = new BABYLON.Sound(
                "bgm",
                task.data,
                this.scene,
                null,
                {
                    loop: false,
                }
            );
        };

        binaryTask = assetsManager.addBinaryFileTask(
            "bgm",
            "sounds/bgm/" + this.bgm + "_loop.mp3"
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets.bgmloop = new BABYLON.Sound(
                "bgm",
                task.data,
                this.scene,
                null,
                {
                    loop: true,
                }
            );
        };
        if (this.bgm2 != undefined) {

            binaryTask = assetsManager.addBinaryFileTask(
                "bgm",
                "sounds/bgm/" + this.bgm2 + "_intro.mp3"
            );
            binaryTask.onSuccess = function (task) {
                instance.scene.assets.bgm2intro = new BABYLON.Sound(
                    "bgm",
                    task.data,
                    this.scene,
                    null,
                    {
                        loop: false,
                    }
                );
            };

            binaryTask = assetsManager.addBinaryFileTask(
                "bgm",
                "sounds/bgm/" + this.bgm2 + "_loop.mp3"
            );
            binaryTask.onSuccess = function (task) {
                instance.scene.assets.bgm2loop = new BABYLON.Sound(
                    "bgm",
                    task.data,
                    this.scene,
                    null,
                    {
                        loop: true,
                    }
                );
            };
        }

        binaryTask = assetsManager.addBinaryFileTask(
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
            "token",
            "sounds/ui/token.wav"
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets.token = new BABYLON.Sound(
                "token",
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

    //activate inactive altars, currently only used by frostnova
    activateAltars() {
        this.playSound("token", 0.3)
        for (let i = 0; i < this.hazards.length; i++) {
            if (this.hazards[i].activateAltar != undefined)
                this.hazards[i].activateAltar()
        }
    }

    //checks enemy status every frame
    checkEnemies() {
        for (let i = 0; i < this.enemies.length; i++) {
            if (this.enemies[i].playerSkill != undefined) {
                //if enemy has a skill that needs them to be alive to stay active, update it
                if (this.enemies[i].playerSkill.skilltype == "alive") {
                    this.enemies[i].playerSkill.updateSkill(this.enemies)
                }
                //if enemy has a skill that has a limited duration, update it
                if (this.enemies[i].playerSkill.skilltype == "duration") {
                    this.enemies[i].playerSkill.updateDurationSkill(this.enemies[i])
                }
            }
            //if enemy reaches a blue box
            if (this.enemies[i].finish) {
                this.playSound("alarmenter", 0.3)
                this.hp -= this.enemies[i].chara.hploss;
                if (this.enemies[i].playerSkill != undefined) {
                    if (this.enemies[i].playerSkill.skilltype == "alive") {
                        this.enemies[i].playerSkill.deactivateSkill(this.enemies)
                    }
                }
                let charaname = this.enemies[i].chara.name
                this.enemies.splice(i, 1)
                //TODO BAD HARD CODED
                if (charaname.includes("Withered") || charaname.includes("Corrupted"))
                    this.updateKnightDeathSkill()
                i--;
                //update enemy killed counter
                this.enemycount++;
                this.gui.updateStatsUI(this.enemycount + "/" + this.enemytot, this.hp, this.maxhp);
            }
            //if enemy hp reaches 0
            else if (this.enemies[i].hp <= 0 || this.enemies[i].hp == NaN) {
                if (this.enemies[i].playerSkill != undefined) {
                    if (this.enemies[i].playerSkill.skilltype == "alive") {
                        this.enemies[i].playerSkill.deactivateSkill(this.enemies)
                    }
                }
                //if the enemy can revive, activate revival
                if (this.enemies[i].chara.revive == true)
                    this.enemiesreviving.push(this.enemies[i])
                else {
                    //else update enemy killed counter
                    this.enemycount++;
                    this.gui.updateStatsUI(this.enemycount + "/" + this.enemytot, this.hp, this.maxhp);
                }
                let charaname = this.enemies[i].chara.name
                this.enemies.splice(i, 1)
                i--;
                this.updateOnAnyDeathSkills()
                //TODO BAD HARD CODED
                if (charaname.includes("Withered") || charaname.includes("Corrupted"))
                    this.updateKnightDeathSkill()

            }
        }
        //activate inspire buff if available
        if (this.enemies.length > 0) {
            let inspired = this.enemies[0].buffs.getInspire()
            for (let i = 0; i < this.enemies.length; i++) {
                if (this.enemies[i].playerSkill != undefined) {
                    if (this.enemies[i].playerSkill.triggertype == "on_inspire") {
                        if (inspired)
                            this.enemies[i].playerSkill.activateSkill([this.enemies[i]])
                        else {
                            if (this.enemies[i].playerSkill.active)
                                this.enemies[i].playerSkill.deactivateSkill([this.enemies[i]], true)
                        }
                    }
                }
            }
        }
    }

    //activates enemy skills with on_anydeath triggertype
    updateOnAnyDeathSkills() {
        for (let i = 0; i < this.enemies.length; i++) {
            if (this.enemies[i].playerSkill != undefined) {
                if (this.enemies[i].playerSkill.triggertype == "on_anydeath")
                    this.enemies[i].playerSkill.updateBloodboilSkill(this.enemies[i])

            }
        }
    }

    //activates enemy skills with on_knightdeath triggertype (twin knights)
    updateKnightDeathSkill() {
        for (let i = 0; i < this.enemies.length; i++) {
            if (this.enemies[i].playerSkill != undefined) {
                if (this.enemies[i].playerSkill.triggertype == "on_knightdeath")
                    this.enemies[i].playerSkill.updateBloodboilSkill(this.enemies[i])

            }
        }
    }


    //checks player skills
    checkPlayerSkill(p) {
        //if player skill is inactive and it charges every second, increase skill points
        if (!p.playerSkill.active) {
            if (p.playerSkill.chargetype == "second") {
                p.playerSkill.currentsp = Math.min(p.playerSkill.currentsp + (1 / 30) / this.gamespeed, p.playerSkill.totalsp);
                p.updateSkillBarCharging()
            }
            //if skill is ready and the skill has to be manually triggered, show skill ready icon
            if (p.playerSkill.currentsp >= p.playerSkill.totalsp && p.playerSkill.triggertype == "manual")
                p.skillready.isVisible = true;
            //if skill is ready and the skill auto triggers, trigger skill
            if (p.playerSkill.triggertype == "auto" && p.playerSkill.currentsp >= p.playerSkill.totalsp && p.playerSkill.duration > 0 && !p.isfrozen) {
                this.playSound(p.chara.name + "-skillact", p.chara.sfx.skillact.volume)
                this.playSound(p.chara.name + "-skill", this.vcvolume)
                p.playerSkill.activateDurationSkill([p], this)
                p.createSkillAura(this.spriteManagers["skillaura"])
                if (p.chara.skillidle != undefined) {
                    p.contact = false;
                    p.spawning = false;
                    p.sprite.playAnimation(p.chara.skillidle.start, p.chara.skillidle.end, true, this.gamespeed * 30);

                }
            }
        }
        //if skill is active, lower the duration timer
        else if (p.playerSkill.active) {
            p.updateSkillBarTrigger()
            p.playerSkill.duration -= (1 / 30) / this.gamespeed;
            if (p.playerSkill.duration <= 0) {
                p.playerSkill.deactivateDurationSkill();
                p.aura.dispose();
                p.aura = undefined;
                if (p.chara.skillidle != undefined) {
                    p.contact = false;
                    p.spawning = false;
                    p.sprite.playAnimation(p.chara.idle.start, p.chara.idle.end, true, this.gamespeed * 30);
                }
            }
        }
    }

    //update buffs/debuffs
    checkEffect(p) {
        var ef = p.buffs.effects
        var keys = Object.keys(ef)
        for (let i = 0; i < keys.length; i++) {
            ef[keys[i]] -= (1 / 30) / this.gamespeed
            if (ef[keys[i]] <= 0) {
                if (p.buffs.effectSprite[keys[i]] != undefined)
                    p.buffs.effectSprite[keys[i]].dispose()
                delete ef[keys[i]]
                delete p.buffs.buffs[keys[i]]
                delete p.buffs.effectSprite[keys[i]]
            }
        }
    }

    //update hazards (special map gimmicks)
    checkHazardSkill(p) {
        if (Math.round(p.currentsp) == p.displaysp)
            p.displayRangeTiles()
        if (p.currentsp >= p.totalsp) {
            this.playSound(p.name + "sound", 0.2)
            p.activateSkill(this.activePlayers, this.enemies)
            p.resetSP()
            p.undisplayTiles()
        }
        p.currentsp = Math.min(p.currentsp + (1 / 30) / this.gamespeed, p.totalsp);
        p.updateSkillBarCharging()
    }

    checkSkills() {
        for (let i = 0; i < this.hazards.length; i++) {
            this.checkHazardSkill(this.hazards[i])
        }
        for (let i = 0; i < this.activePlayers.length; i++) {
            this.checkPlayerSkill(this.activePlayers[i])
        }
    }

    //update bullet positions
    checkBullets() {
        for (let i = 0; i < this.bullets.length; i++) {
            if (this.bullets[i].done) {
                this.bullets[i].mesh.dispose();
                this.bullets.splice(i, 1)
            }
            else this.bullets[i].move(this.gamespeed);
        }
    }


    checkTimeEffects() {
        for (let i = 0; i < this.activePlayers.length; i++)
            // player debuffs
            this.checkEffect(this.activePlayers[i])

        for (let i = 0; i < this.enemies.length; i++) {
            //enemy debuffs
            this.checkEffect(this.enemies[i])
            if (this.enemies[i].invincible)
                this.enemies[i].updateInvincibility()
        }
        //update revival timer for reviving enemies
        for (let i = 0; i < this.enemiesreviving.length; i++) {
            this.enemiesreviving[i].healthBarBackground.value = 0
            this.enemiesreviving[i].chara.revivetimer -= (1 / 30) / this.gamespeed;
            this.enemiesreviving[i].healthBar.value = (this.enemiesreviving[i].chara.revivemax - this.enemiesreviving[i].chara.revivetimer) / this.enemiesreviving[i].chara.revivemax * 100
            //if reviving is done, finish revival (spawn 2nd form as new enemy on top of old one)
            if (this.enemiesreviving[i].chara.revivetimer <= 0) {
                this.enemiesreviving[i].finishRevival()
                this.enemiesreviving.splice(i, 1)
                i--;
            }
        }
    }

    //check units status in battle
    checkPlayers() {
        for (let i = 0; i < this.activePlayers.length; i++) {
            if (!this.pause) {
                this.activePlayers[i].updateHP()
                this.activePlayers[i].checkAliveBuffs()
                this.activePlayers[i].checkBlocking()
            }
            //if player dies, remove all blocking enemies, and remake the player wheel
            if (this.activePlayers[i].hp <= 0) {
                this.tiles[this.activePlayers[i].x][this.activePlayers[i].y].player = undefined;
                this.activePlayers[i].removeAllBlocking()
                //increase cost of player
                this.activePlayers[i].chara.cost = Math.min(this.activePlayers[i].chara.basecost + Math.round(this.activePlayers[i].chara.basecost * 0.5), this.activePlayers[i].chara.basecost * 2),
                    this.playerlist[this.activePlayers[i].chara.name] = this.activePlayers[i].chara
                this.activePlayers.splice(i, 1)
                i--;
                this.squadlimit++;
                this.gui.createPlayerWheelUI(this.playerlist, this)
            }
        }
    }

    //retreat player after clicking retreat button
    retreatPlayer(player) {
        this.playSound("retreat", 0.3)
        player.condtalentcounter = 999

        player.mesh.dispose(true, true)
        player.sprite.dispose()
        player.healthBar.dispose()
        player.healthBarBackground.dispose()
        player.skillBar.dispose()
        player.shadow.dispose()
        player.skillready.dispose()
        player.barriericon.dispose()
        player.barrierBar.dispose()


        if (player.aura != undefined)
            player.aura.dispose();

        var keys = Object.keys(player.buffs.effectSprite)
        for (let i = 0; i < keys.length; i++)
            player.buffs.effectSprite[keys[i]].dispose()

        player.hp = -999;
        //refund half of the player cost
        this.currentdp = Math.min(this.dplimit, this.currentdp + Math.round(player.chara.cost / 2))
        player.dead = true;
        if (this.pause) {
            this.checkPlayers()
            this.gui.updatePlayerWheelUI(this.currentdp, this.squadlimit)
        }
    }

    //pauses the sprites animations
    pauseGame() {
        for (let i = 0; i < this.enemies.length; i++)
            this.enemies[i].pause();
        for (let i = 0; i < this.activePlayers.length; i++)
            this.activePlayers[i].pause();
        for (let i = 0; i < this.enemiesreviving.length; i++)
            this.enemiesreviving[i].pause();
        this.pause = true;
    }

    //resumes the sprites animations
    resumeGame() {
        this.pause = false;
        for (let i = 0; i < this.enemies.length; i++)
            this.enemies[i].resume();
        for (let i = 0; i < this.activePlayers.length; i++)
            this.activePlayers[i].resume();
        for (let i = 0; i < this.enemiesreviving.length; i++)
            this.enemiesreviving[i].resume();
    }

    //removes focus from a player context menu
    unzoom() {
        this.zoom = false;
        this.createGlobalCamera();
        this.undisplayTiles();
        this.gamespeed = this.prevspeed
        this.updateSpeed()
        this.gui.contextMenuController.dispose();
    }

    //drag & drop to place new units or open context menu of already deployed ones
    initDragNDrop() {
        var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 1000, height: 1000 }, this.scene, false);
        ground.visibility = 0;
        var startingPoint;
        var currentMesh = null;
        var dragging = false;
        var sprite = null;
        var currentTile = null;
        var prevtile = null;

        var instance = this;
        var getGroundPosition = function () {
            var pickinfo = instance.scene.pick(instance.scene.pointerX, instance.scene.pointerY, function (mesh) { return mesh == ground; });
            if (pickinfo.hit) {
                return pickinfo.pickedPoint;
            }

            return null;
        }

        //if clicked somewhere valid, slow the game speed
        var pointerDown = function (mesh) {
            if (!dragging) {
                currentMesh = mesh;
                if (instance.gamespeed != 8)
                    instance.prevspeed = instance.gamespeed
                instance.gamespeed = 8
                instance.updateSpeed()
                startingPoint = getGroundPosition();
            }
            else { } //do stuff

        }

        var pointerUp = function () {
            if (startingPoint) {
                startingPoint = null;
                return;
            }
        }

        //udates the current position, based on the position of the pointer on the ground mesh
        var pointerMove = function () {
            if (!startingPoint) {
                return;
            }
            var current = getGroundPosition();
            if (!current) {
                return;
            }

            currentMesh.position = getGroundPosition();
            currentMesh.position.y = 20;

            //currentPlayer.sprite.position.addInPlace(diff);

            startingPoint = current;

        }

        this.scene.onPointerObservable.add((pointerInfo) => {
            if (!(this.gui.showinggui && !this.gui.isPaused)) {
                switch (pointerInfo.type) {
                    case BABYLON.PointerEventTypes.POINTERDOWN:
                        //if clicked on the player wheel, create sprite on mouse of the unit selected
                        //display all deployable tiles
                        if (instance.gui.wheelclick == true) {
                            //if the game was zoomed in, zoom out before creating the player wheel sprite
                            if (instance.zoom) {
                                instance.zoom = false;
                                currentTile = null;
                                instance.createGlobalCamera();
                                instance.undisplayTiles();
                                setTimeout(() => {
                                    instance.gui.contextMenuController.dispose();
                                }, 5)
                            }

                            sprite = new BABYLON.Sprite("", instance.spriteManagers[instance.gui.wheelchoice.name]);
                            sprite.cellIndex = instance.gui.wheelchoice.idle.start
                            sprite.position = new BABYLON.Vector3(pointerInfo.pickInfo.pickedPoint.x, 20, pointerInfo.pickInfo.pickedPoint.z);
                            sprite.size = 65;
                            sprite.width = 90;

                            pointerDown(sprite);
                            instance.displayAvailableTiles(instance.playerlist[instance.gui.wheelchoice.name].type)
                        }
                        else {
                            var x = Math.round(pointerInfo.pickInfo.pickedPoint.x / 30);
                            var y = Math.round(pointerInfo.pickInfo.pickedPoint.z / 30);
                            //zooms on unit and creates context menu
                            if (x < instance.tiles.length && x >= 0 && y < instance.tiles[0].length && y >= 0) {
                                if (instance.tiles[x][y].player != undefined) {
                                    if (!instance.zoom) {
                                        instance.zoom = true;
                                        var pl = instance.tiles[x][y].player
                                        instance.playSound(pl.chara.name + "-select", instance.vcvolume)
                                        instance.displayRangeTiles(x, y, pl)
                                        instance.createFocusCamera(x * 30, y * 30);
                                        if (instance.gamespeed != 8)
                                            instance.prevspeed = instance.gamespeed
                                        instance.gamespeed = 8
                                        instance.updateSpeed()
                                        currentTile = instance.tiles[x][y];
                                        instance.gui.createContextMenu(pl, instance);
                                    }
                                }
                            }
                            if (instance.zoom && (currentTile.x != x || currentTile.z != y)) {
                                currentTile = null;
                                instance.unzoom()
                                //if click outside of context menu, unzoom,
                                //if selected a new unit, instantly zoom on that unit
                                if (x < instance.tiles.length && x >= 0 && y < instance.tiles[0].length && y >= 0) {
                                    if (instance.tiles[x][y].player != undefined) {
                                        instance.zoom = true;
                                        var pl = instance.tiles[x][y].player
                                        instance.playSound(pl.chara.name + "-select", instance.vcvolume)
                                        instance.displayRangeTiles(x, y, pl)
                                        instance.createFocusCamera(x * 30, y * 30);
                                        if (instance.gamespeed != 8)
                                            instance.prevspeed = instance.gamespeed
                                        instance.gamespeed = 8
                                        instance.updateSpeed()
                                        currentTile = instance.tiles[x][y];
                                        instance.gui.createContextMenu(pl, instance);
                                    }
                                }
                            }
                        }
                        break;
                    case BABYLON.PointerEventTypes.POINTERUP:
                        //if stopped clicking and player was trying to deploy a unit
                        //try to deploy the unit if applicable
                        if (instance.gui.wheelclick == true && currentMesh != null) {
                            pointerUp();
                            dragging = false;

                            instance.gamespeed = instance.prevspeed
                            instance.updateSpeed()

                            var tilex = Math.round(currentMesh.position.x / 30)
                            var tiley = Math.round(currentMesh.position.z / 30)
                            //check if player can be deployed on selected tile
                            if (tilex >= 0 && tilex < instance.tiles.length && tiley >= 0 && tiley < instance.tiles[0].length && instance.currentdp >= instance.gui.wheelchoice.cost && instance.squadlimit > 0) {
                                if (instance.tiles[tilex][tiley].player == undefined && instance.tiles[tilex][tiley].canBeDeployed(instance.gui.wheelchoice.type, instance.deployall)) {
                                    instance.createPlayer(instance.gui.wheelchoice.name, tilex, tiley);
                                    delete instance.playerlist[instance.gui.wheelchoice.name]
                                    instance.currentdp -= instance.gui.wheelchoice.cost
                                    instance.squadlimit--;
                                    instance.gui.createPlayerWheelUI(instance.playerlist, instance)
                                }
                            }
                            instance.undisplayTiles()
                            instance.gui.wheelclick = false;
                            currentMesh.dispose();
                            currentMesh = null
                            prevtile = null
                        }
                        else if (sprite != null) {
                            sprite.dispose();
                            sprite = null
                            //instance.undisplayTiles()
                        }
                        break;
                    case BABYLON.PointerEventTypes.POINTERMOVE:
                        //move sprite with mouse
                        if (instance.gui.wheelclick == true) {
                            dragging = true;
                            pointerMove(pointerInfo);
                            var tilex = Math.round(getGroundPosition().x / 30);
                            var tiley = Math.round(getGroundPosition().z / 30);
                            if (tilex > 0 && tilex < instance.tiles.length && tiley > 0 && tiley < instance.tiles[0].length) {
                                if (instance.tiles[tilex][tiley].player == undefined && instance.tiles[tilex][tiley].canBeDeployed(instance.gui.wheelchoice.type, instance.deployall)) {
                                    //display in red the tile where the mouse is hovering if it can be deployed on
                                    //this makes sure the player knows where the unit will end up if they let go of the mouse
                                    if (prevtile != null) {
                                        for (let i = 0; i < prevtile.length; i++) {
                                            if (prevtile[i].canBeDeployed(this.playerlist[instance.gui.wheelchoice.name].type, this.deployall))
                                                prevtile[i].displayDeployable()
                                            else prevtile[i].undisplay()
                                            prevtile[i].mesh.outlineColor = new BABYLON.Color3(0, 0, 0);
                                            prevtile[i].mesh.outlineWidth = 0.1;
                                        }


                                    }
                                    prevtile = this.getTilesInRange(tilex, tiley, this.playerlist[instance.gui.wheelchoice.name].range)
                                    for (let i = 0; i < prevtile.length; i++)
                                        prevtile[i].displayRange()
                                    /*prevtile.mesh.outlineColor = new BABYLON.Color3(0, 0, 0);
                                    prevtile.mesh.outlineWidth = 0.1;
                                    */
                                }
                                else if (prevtile != null) {
                                    for (let i = 0; i < prevtile.length; i++) {
                                        if (prevtile[i].canBeDeployed(this.playerlist[instance.gui.wheelchoice.name].type, this.deployall))
                                            prevtile[i].displayDeployable()
                                        else prevtile[i].undisplay()
                                        prevtile[i].mesh.outlineColor = new BABYLON.Color3(0, 0, 0);
                                        prevtile[i].mesh.outlineWidth = 0.1;
                                    }
                                }
                            }
                            else if (prevtile != null) {
                                for (let i = 0; i < prevtile.length; i++) {
                                    if (prevtile[i].canBeDeployed(this.playerlist[instance.gui.wheelchoice.name].type, this.deployall))
                                        prevtile[i].displayDeployable()
                                    else prevtile[i].undisplay()
                                    prevtile[i].mesh.outlineColor = new BABYLON.Color3(0, 0, 0);
                                    prevtile[i].mesh.outlineWidth = 0.1;
                                }
                            }
                        }
                        break;
                }
            }
        });

    }

    //colors green the tiles where the unit can be deployed
    displayAvailableTiles(type) {
        for (let i = 0; i < this.tiles.length; i++) {
            for (let j = 0; j < this.tiles[i].length; j++) {
                if (this.tiles[i][j].canBeDeployed(type, this.deployall))
                    this.tiles[i][j].displayDeployable()
            }
        }
    }

    //colors red the tiles where the unit can reach with their attacks
    displayRangeTiles(x, y, pl) {
        var rangeexpand = 0
        var ranget = pl.buffs.getFinalRange(pl.chara.range)
        var range = ranget
        var line = false;

        if (range / 0.5 % 2 != 0) {
            if (Math.round(range - 0.3) % Math.round(range) == 0) {
                range = Math.round(ranget - 0.3)
                line = true;
            }
            else {
                range = ranget - 0.5
                rangeexpand += 1
            }
        }
        var squarerange = [[Math.max(x - range, 0), Math.min(x + range, this.tiles.length - 1)], [Math.max(y - range, 0), Math.min(y + range, this.tiles[0].length - 1)]];
        for (let i = squarerange[0][0]; i <= squarerange[0][1]; i++) {
            var counter = Math.abs(Math.abs(i - x) - range);
            for (let j = squarerange[1][0]; j <= squarerange[1][1]; j++) {
                if (Math.abs(j - y) <= counter + rangeexpand && pl.correctDirection(i, j)) {
                    if (line) {
                        if (i - x == 0 || j - y == 0)
                            this.tiles[i][j].displayRange()
                    }
                    else this.tiles[i][j].displayRange()
                }
            }
        }
    }

    getTilesInRange(x, y, range) {
        var rangeexpand = 0
        var ranget = range
        var range = ranget
        var line = false;
        let restiles = [];
        if (range / 0.5 % 2 != 0) {
            if (Math.round(range - 0.3) % Math.round(range) == 0) {
                range = Math.round(ranget - 0.3)
                line = true;
            }
            else {
                range = ranget - 0.5
                rangeexpand += 1
            }
        }
        var squarerange = [[Math.max(x - range, 0), Math.min(x + range, this.tiles.length - 1)], [Math.max(y - range, 0), Math.min(y + range, this.tiles[0].length - 1)]];
        for (let i = squarerange[0][0]; i <= squarerange[0][1]; i++) {
            var counter = Math.abs(Math.abs(i - x) - range);
            for (let j = squarerange[1][0]; j <= squarerange[1][1]; j++) {
                if (Math.abs(j - y) <= counter + rangeexpand) {
                    if (line) {
                        if (i - x == 0 || j - y == 0)
                            restiles.push(this.tiles[i][j])
                    }
                    else restiles.push(this.tiles[i][j])
                }
            }
        }
        return restiles
    }


    undisplayTiles() {
        for (let i = 0; i < this.tiles.length; i++) {
            for (let j = 0; j < this.tiles[i].length; j++) {
                this.tiles[i][j].undisplay()
            }
        }
    }

    createGlobalCamera() {
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(250 + this.cameraOffsetX, 290 + this.cameraOffsetY, 180 + this.cameraOffsetZ), this.scene); //updown,
        camera.alpha = -0.0034155996227517244
        camera.beta = 0.45497477002057213
        this.scene.activeCamera = camera;
    }

    createFocusCamera(x, z) {
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(x + 120, 290 + this.cameraOffsetY, z + this.cameraOffsetZ), this.scene);
        camera.alpha = -0.0034155996227517244
        camera.beta = 0.45497477002057213
        this.scene.activeCamera = camera;

    }

    createScene() {

        this.createLayout();
        this.createGlobalCamera();
        this.createLights();
        this.initDragNDrop();


        //creates the enemy counter
        for (let i = 0; i < this.waves.length; i++)
            this.enemytot += this.waves[i].count;

        if (this.gameconfig.inputStates.pause) {
            if (!this.gui.showinggui)
                this.gui.createPauseScreen(this)
        }

        this.createSkybox()
        if (this.snowstorm)
            this.createSnowstorm()

        return this.scene;
    }

    //creates a snowstorm effect (uses a spritesheet)
    createSnowstorm() {
        let snowstorm = new BABYLON.Sprite("", this.spriteManagers["snow"]);
        snowstorm.position = new BABYLON.Vector3(120, 110, 150);
        snowstorm.size = 180;
        snowstorm.width = 300;
        snowstorm.playAnimation(0, 100, true, 1);

    }

    createSkybox() {
        // Skybox
        let skybox = new BABYLON.MeshBuilder.CreateBox("skybox", { height: 1, depth: 1920 / 2, width: 1080 / 2 }, this.scene);
        skybox.position.x = 20
        skybox.position.z += 180
        skybox.position.y -= 150

        var skyboxMaterial = new BABYLON.StandardMaterial("skyBoxx", this.scene);

        skyboxMaterial.diffuseTexture = this.scene.assets.skybox
        skybox.material = skyboxMaterial;
        skybox.rotation.z = -Math.PI / 5;

    }


    updateSpeed() {
        for (let i = 0; i < this.enemies.length; i++)
            this.enemies[i].updateSpeed(this.gamespeed, this.pause);
        for (let i = 0; i < this.activePlayers.length; i++)
            this.activePlayers[i].updateSpeed(this.gamespeed, this.pause);
    }


    createLayout() {
        let array = this.layout
        for (let i = 0; i < array.length; i++) {
            var line = [];
            var flyingline = [];
            var linetiles = [];
            for (let j = 0; j < array[i].length; j++) {
                var type = array[i][j];
                line.push(this.getWalkable(array[i][j]));
                flyingline.push(0)
                var tile = new Tile(type, i, j, this.scene, this.place)
                linetiles.push(tile);
                if (array[i][j] == "blue")
                    this.hpbox.push(new HPBox("", i, j, this.scene))
                if (array[i][j] == "red")
                    this.spawns.push(new EnemySpawn("", i, j, this.scene))
                if (array[i][j] == "altar")
                    this.hazards.push(new FireAltar(i, j, this))
                if (array[i][j] == "icealtar")
                    this.hazards.push(new IceAltar(i, j, this))
                if (array[i][j] == "inactivealtar")
                    this.hazards.push(new InactiveIceAltar(i, j, this))
                if (array[i][j] == "magma")
                    this.hazards.push(new MagmaTile(tile, this))
                if (array[i][j] == "rtop" || array[i][j] == "gtop" || array[i][j] == "blktop")
                    this.hazards.push(new DirectionTile(tile, this, -1, 0))
                if (array[i][j] == "rbottom" || array[i][j] == "gbottom" || array[i][j] == "blkbottom")
                    this.hazards.push(new DirectionTile(tile, this, 1, 0))
                if (array[i][j] == "rleft" || array[i][j] == "gleft" || array[i][j] == "blkleft")
                    this.hazards.push(new DirectionTile(tile, this, 0, -1))
                if (array[i][j] == "rright" || array[i][j] == "gright" || array[i][j] == "blkright")
                    this.hazards.push(new DirectionTile(tile, this, 0, 1))
                if (array[i][j] == "blood" || array[i][j] == "bloodblk")
                    this.hazards.push(new BloodTile(tile, this))
                if (array[i][j] == "gdef")
                    this.hazards.push(new RuneTile(tile, this, { "flatdef": 200 }))
                if (array[i][j] == "gheal")
                    this.hazards.push(new RuneTile(tile, this, { "hpregenpercent": 0.03 }))
            }
            this.tiles.push(linetiles);
            this.matrix.push(line);
            this.flyingmatrix.push(flyingline);
        }
    }

    //move enemies
    moveEnemies() {
        for (let i = 0; i < this.enemies.length; i++)
            this.enemies[i].move(this.tiles, this.activePlayers.slice());
    }

    //move players
    movePlayers() {
        for (let i = 0; i < this.activePlayers.length; i++)
            this.activePlayers[i].move(this.enemies.slice(), this.activePlayers.slice());
    }

    //check if enemies can walk on the tile type for pathfinding
    getWalkable(tiletype) {
        switch (tiletype) {
            case "bg":
            case "blkr":
            case "inactivealtar":
            case "icealtar":
            case "altar":
            case "e":
            case "gblk":
                return 1;
            default:
                if (tiletype.charAt(0) == 'r' && tiletype != "red")
                    return 1;
                return 0;
        }
    }

    createEnemy(e, start, checkpoints, id, invertU) {
        addToSave(e)
        var enemyUse = JSON.parse(JSON.stringify(this.enemylist[e]))
        var matrixUse = this.matrix
        if (enemyUse.type == "r")
            matrixUse = this.flyingmatrix
        var enemy = new EnemyController(enemyUse, this.scene, start[0], start[1], this, id);
        enemy.createEnemy(matrixUse, checkpoints, this.spriteManagers, this.gui, this.spriteManagers["icons"], invertU);
        enemy.gamespeed = this.gamespeed;
        this.enemies.push(enemy);
    }

    createPlayer(p, x, y) {
        this.playSound("deploy", 2)
        this.playSound(p + "-deploy", this.vcvolume)
        this.playerlist[p].rdcounter = this.playerlist[p].rdtimer * 30;
        var player = new PlayerController(this.playerlist[p], this.scene, x, y, this);
        this.tiles[x][y].player = player;
        player.createPlayer(player, this.spriteManagers[p], this.gui, this.spriteManagers["icons"]);
        player.gamespeed = this.gamespeed;
        if (this.saileach) {
            var keys = Object.keys(this.playerlist);
            for (let i = 0; i < keys.length; i++)
                this.playerlist[keys[i]].cost += 2
            this.saileach = false;
        }
        if (player.chara.name == "Saileach") {
            var keys = Object.keys(this.playerlist);
            for (let i = 0; i < keys.length; i++)
                this.playerlist[keys[i]].cost -= 2
            this.saileach = true;
        }
        this.activePlayers.push(player);
    }

    //spawn enemies using the info from the wave
    spawnEnemies() {
        this.isSpawning = true;
        for (let i = 0; i < this.waves.length; i++) {
            //if the taunt is selected, select a random unit that will taunt the enemy with a voiceline
            if ((this.waves[i]["time"] - 2) * 30 <= this.maptimer && this.waves[i]["line"]) {
                if (this.waves[i]["taunt"]) {
                    var keys = Object.keys(this.playerlist)
                    if (keys.length > 0) {
                        this.playSound(this.playerlist[keys[Math.floor(Math.random() * keys.length)]].name + "-taunt", this.vcvolume);
                    }
                    else {
                        var keys = Object.keys(this.activePlayers)
                        if (keys.length > 0) {
                            this.playSound(this.activePlayers[keys[Math.floor(Math.random() * keys.length)]].chara.name + "-taunt", this.vcvolume);
                        }
                    }
                }
                //if music is true, then play the next bgm
                if (this.waves[i]["music"] == true)
                    this.playBGM2(0.2)

                //if line is true, draw line to show player path
                this.waves[i]["line"] = false;
                this.drawLine(this.waves[i]["checkpoints"], this.waves[i]["flying"] || false)
            }
            //create enemy description tooltip
            if (this.waves[i]["time"] * 30 <= this.maptimer) {
                if (this.waves[i]["tooltip"]) {
                    this.playSound("tooltip", 0.5);
                    this.gui.createTooltip(this.enemylist[this.waves[i]["enemies"]])
                    this.waves[i]["tooltip"] = false;
                }

                this.waves[i]["time"] += this.waves[i]["gap"];

                this.createEnemy(this.waves[i]["enemies"], this.waves[i]["start"], this.waves[i]["checkpoints"], "wave" + this.waves[i]["number"] + this.waves[i]["count"], this.waves[i]["invertU"] || 0);
                this.waves[i]["count"]--;
                if (this.waves[i]["count"] <= 0) {
                    this.waves.splice(i, 1)
                    i--
                }
            }
        }
        this.isSpawning = false;
    }

    //draw path line, creates a line and progressively updates the position 
    drawLine(checkpoints, isFLying) {
        var matrixUse = this.matrix
        var colorUse = new BABYLON.Color3(1, 0, 0);
        var y = 20
        if (isFLying) {
            colorUse = new BABYLON.Color3(1, 1, 0)
            matrixUse = this.flyingmatrix
            y = 40
        }
        var res = this.createPathfinding(checkpoints, matrixUse)

        var myPoints = [new BABYLON.Vector3(res[0][1] * 31, y, res[0][0] * 30)]
        var i = 1;
        var options = {
            points: myPoints,
            updatable: true
        }

        let lines = BABYLON.MeshBuilder.CreateLines("lines", options);
        lines.color = colorUse

        var interval = setInterval(() => {
            lines.dispose();
            if (i < res.length) {
                options.points.push(new BABYLON.Vector3(res[i][1] * 31, y, res[i][0] * 30))
                if (options.points.length > 10) {
                    options.points.shift()
                }
                lines = BABYLON.MeshBuilder.CreateLines("lines", options);
                lines.color = colorUse
                i++
            }
            else {
                if (options.points.length > 1) {
                    options.points.shift()
                    lines = BABYLON.MeshBuilder.CreateLines("lines", options);
                    lines.color = colorUse
                }

                else clearInterval(interval)
            }
        }, 60)
    }

    createPathfinding(points, matrix) {
        var checks = [];
        for (let i = 0; i < points.length; i++) {
            var grid = new PF.Grid(matrix);
            var finder = new PF.AStarFinder({
                allowDiagonal: true,
                dontCrossCorners: true
            });

            var path = finder.findPath(points[i].start[1], points[i].start[0], points[i].end[1], points[i].end[0], grid);
            if (i > 0)
                path.shift()
            checks = checks.concat(path);
        }
        return checks;
    }
}
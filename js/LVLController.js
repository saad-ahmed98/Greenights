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

        this.enemiesreviving = []
        this.presentHazards = lvl.hazards;
        this.tooltips = lvl.tooltips;

        this.gui = new LVLGUIController(this.scene, this.gameconfig);

        this.layout = lvl.layout

        this.bgm = lvl.bgm
        this.maxhp = lvl.hp
        this.hp = lvl.hp

        this.matrix;
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

        this.squadlimit = lvl.squadlimit;

        this.dpregen = 1;
        this.dptimer = 0;
        this.dplimit = 99;

        this.gamespeed = 2;

        this.prevspeed;

        this.activate = false;

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
    }

    restart() {
        new LVLController(this.gameconfig, enemylist, this.restartlist, JSON.parse(JSON.stringify(levels[lvlnumber])))
    }

    createGUIs() {
        this.gui.createStatsUI(this.enemycount + "/" + this.enemytot, this.hp, this);

        this.gui.createPlayerWheelUI(this.playerlist, this);
    }


    createLvl() {
        //this.gameconfig.divFps.innerHTML = this.gameconfig.engine.getFps().toFixed() + " fps";
        this.gameconfig.rollingAverage.add(this.scene.getAnimationRatio());
        this.gui.updateRedeployTimers(this.playerlist, this.gamespeed);

        if (!this.pause) {
            this.moveEnemies();
            this.checkEnemies();
            this.checkPlayers();
            this.movePlayers();
            this.maptimer += 1 / this.gamespeed;
            this.dptimer += 1 / this.gamespeed;
            if (!this.isSpawning)
                this.spawnEnemies();
            this.checkSkills();
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
                if (!instance.gui.showinggui)
                    instance.gui.createLevelClearScreen(instance)
            }, 1000)

        }

        //this.playBGM(0.3);
    }

    loadAssets() {
        this.loadIcons();
        this.loadSounds();
        this.loadSprites();
        this.loadHazards();

        //this.loadBuildings();
        //this.loadSkybox("images/LVL1/skybox.jpg");
    }
    loadIcons() {
        this.loadPlayerIcons();
        this.loadEnemyIcons();
        this.loadStaticImages();
    }
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
                instance.playerlist[keys[i]].classicon
            );
            binaryTask.onSuccess = function (task) {
                instance.scene.assets[task.name] = task.image
            };
        }
    }

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
            "images/textures/blood.jpg",
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
            "skybox",
            "images/common/skybox.jpg",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };
    }
    loadStaticImages() {
        this.loadTextures()
        var instance = this;
        var assetsManager = instance.scene.assetsManager;
        var binaryTask;

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

    }

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
                    "bgm",
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

    renderScene() {

        var startingColor = this.scene.clearColor.clone();
        var t;

        if (this.frame < 550) {
            this.frame += 5;
            t = 0.5 + Math.cos(this.frame / 100) / 2;
            this.light.intensity = 3 * t;
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

    loadPlayerVoicelines() {
        var instance = this;
        var assetsManager = instance.scene.assetsManager;
        var binaryTask;
        var keys = Object.keys(this.playerlist)
        for (let i = 0; i < keys.length; i++) {

            var sfx = ["depart", "taunt", "skill", "select", "deploy", "win"]
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

        for (const item of spritesheets) {
            let binaryTask = assetsManager.addTextureTask(
                item,
                item,
                true,
                false,
                BABYLON.Texture.TRILINEAR_SAMPLINGMODE
            );
            binaryTask.onSuccess = function (task) {
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
            instance.spriteManagers[task.name] = new BABYLON.SpriteManager("AuraManager", undefined, 15, { width: 886, height: 604 });
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
            instance.spriteManagers[task.name] = new BABYLON.SpriteManager("EffectsManager", undefined, 15, { width: 888, height: 605 });
            instance.spriteManagers[task.name].texture = task.texture
        };

    }

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


    checkEnemies() {
        for (let i = 0; i < this.enemies.length; i++) {
            if (this.enemies[i].enemySkill != undefined) {
                if (this.enemies[i].enemySkill.skilltype == "alive") {
                    this.enemies[i].enemySkill.updateSkill(this.enemies)
                }
                if (this.enemies[i].enemySkill.skilltype == "duration") {
                    this.enemies[i].enemySkill.updateDurationSkill(this.enemies[i])
                }
            }
            if (this.enemies[i].finish) {
                this.playSound("alarmenter", 0.3)
                this.hp -= this.enemies[i].chara.hploss;
                if (this.enemies[i].enemySkill != undefined) {
                    if (this.enemies[i].enemySkill.skilltype == "alive") {
                        this.enemies[i].enemySkill.deactivateSkill(this.enemies)
                    }
                }
                this.enemies.splice(i, 1)
                i--;
                this.enemycount++;
                this.gui.updateStatsUI(this.enemycount + "/" + this.enemytot, this.hp, this.maxhp);
            }
            else if (this.enemies[i].hp <= 0 || this.enemies[i].hp == NaN) {
                //this.enemies[i].sprite.dispose();
                this.updateOnAnyDeathSkills()
                if (this.enemies[i].enemySkill != undefined) {
                    if (this.enemies[i].enemySkill.skilltype == "alive") {
                        this.enemies[i].enemySkill.deactivateSkill(this.enemies)
                    }
                }
                if (this.enemies[i].chara.revive == true)
                    this.enemiesreviving.push(this.enemies[i])
                else {
                    this.enemycount++;
                    this.gui.updateStatsUI(this.enemycount + "/" + this.enemytot, this.hp, this.maxhp);
                }
                this.enemies.splice(i, 1)
                i--;

            }
        }
        if (this.enemies.length > 0) {
            let inspired = this.enemies[0].buffs.getInspire()
            for (let i = 0; i < this.enemies.length; i++) {
                if (this.enemies[i].enemySkill != undefined) {
                    if (this.enemies[i].enemySkill.triggertype == "on_inspire") {
                        if (inspired)
                            this.enemies[i].enemySkill.activateSkill([this.enemies[i]])
                        else {
                            if (this.enemies[i].enemySkill.active)
                                this.enemies[i].enemySkill.deactivateSkill([this.enemies[i]], true)
                        }
                    }

                }
            }
        }
    }

    //activates enemy skills with on_anydeath triggertype
    updateOnAnyDeathSkills() {
        for (let i = 0; i < this.enemies.length; i++) {
            if (this.enemies[i].enemySkill != undefined) {
                if (this.enemies[i].enemySkill.triggertype == "on_anydeath")
                    this.enemies[i].enemySkill.updateBloodboilSkill(this.enemies[i])

            }
        }
    }


    checkPlayerSkill(p) {
        if (!p.playerSkill.active && p.playerSkill.chargetype == "second") {
            p.playerSkill.currentsp = Math.min(p.playerSkill.currentsp + (1 / 30) / this.gamespeed, p.playerSkill.totalsp);
            p.updateSkillBarCharging()
            if (p.playerSkill.currentsp >= p.playerSkill.totalsp && p.playerSkill.triggertype == "manual")
                p.skillready.isVisible = true;
            if (p.playerSkill.triggertype == "auto" && p.playerSkill.currentsp >= p.playerSkill.totalsp && p.playerSkill.duration > 0) {
                this.playSound(p.chara.name + "-skillact", p.chara.sfx.skillact.volume)
                this.playSound(p.chara.name + "-skill", this.vcvolume)
                p.playerSkill.activateDurationSkill([p], this)
                p.createSkillAura(this.spriteManagers["skillaura"])
                if (p.chara.skillidle != undefined)
                    p.sprite.playAnimation(p.chara.skillidle.start, p.chara.skillidle.end, true, this.gamespeed * 30);
            }
        }
        else if (p.playerSkill.active) {
            p.updateSkillBarTrigger()
            p.playerSkill.duration -= (1 / 30) / this.gamespeed;
            if (p.playerSkill.duration <= 0) {
                p.playerSkill.deactivateDurationSkill();
                p.aura.dispose();
                p.aura = undefined;
                if (p.chara.skillidle != undefined && !p.attacking)
                    p.sprite.playAnimation(p.chara.idle.start, p.chara.idle.end, true, this.gamespeed * 30);
            }
        }
    }

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
        for (let i = 0; i < this.activePlayers.length; i++) {
            this.checkPlayerSkill(this.activePlayers[i])
        }
        for (let i = 0; i < this.hazards.length; i++) {
            this.checkHazardSkill(this.hazards[i])
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
        for (let i = 0; i < this.enemiesreviving.length; i++) {
            this.enemiesreviving[i].chara.revivetimer -= (1 / 30) / this.gamespeed;
            this.enemiesreviving[i].healthBar.value = (this.enemiesreviving[i].chara.revivemax - this.enemiesreviving[i].chara.revivetimer) / this.enemiesreviving[i].chara.revivemax * 100
            if (this.enemiesreviving[i].chara.revivetimer <= 0) {
                this.enemiesreviving[i].finishRevival()
                this.enemiesreviving.splice(i, 1)
                i--;
            }
        }
    }

    checkPlayers() {
        for (let i = 0; i < this.activePlayers.length; i++) {
            this.activePlayers[i].updateHP()
            this.activePlayers[i].checkAliveBuffs()
            this.activePlayers[i].checkBlocking()
            if (this.activePlayers[i].hp <= 0) {
                this.tiles[this.activePlayers[i].x][this.activePlayers[i].y].player = undefined;
                this.activePlayers[i].removeAllBlocking()
                this.activePlayers[i].chara.cost = Math.min(this.activePlayers[i].chara.basecost + Math.round(this.activePlayers[i].chara.basecost * 0.5), this.activePlayers[i].chara.basecost * 2),

                    this.playerlist[this.activePlayers[i].chara.name] = this.activePlayers[i].chara
                this.activePlayers.splice(i, 1)
                i--;
                this.squadlimit++;
                this.gui.createPlayerWheelUI(this.playerlist, this)
            }

        }
    }

    retreatPlayer(player) {
        this.playSound("retreat", 0.3)
        player.condtalentcounter = 999

        player.mesh.dispose(true, true)
        player.sprite.dispose()
        player.healthBar.dispose()
        player.skillBar.dispose()
        player.shadow.dispose()
        player.skillready.dispose()

        if (player.aura != undefined)
            player.aura.dispose();

        var keys = Object.keys(player.buffs.effectSprite)
        for (let i = 0; i < keys.length; i++)
            player.buffs.effectSprite[keys[i]].dispose()

        player.hp = -999;
        this.currentdp += Math.round(player.chara.cost / 2)
        player.dead = true;

    }

    pauseGame() {
        for (let i = 0; i < this.enemies.length; i++)
            this.enemies[i].pause();
        for (let i = 0; i < this.activePlayers.length; i++)
            this.activePlayers[i].pause();
        this.pause = true;
    }

    resumeGame() {
        this.pause = false;
        for (let i = 0; i < this.enemies.length; i++)
            this.enemies[i].resume();
        for (let i = 0; i < this.activePlayers.length; i++)
            this.activePlayers[i].resume();
    }

    unzoom() {
        this.zoom = false;
        this.createGlobalCamera();
        this.undisplayTiles();

        this.gamespeed = this.prevspeed
        this.updateSpeed()

        this.gui.contextMenuController.dispose();
    }


    initDragNDrop() {
        var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 1000, height: 1000 }, this.scene, false);
        ground.visibility = 0;
        var startingPoint;
        var currentMesh = null;
        var dragging = false;
        var sprite = null;
        var currentTile = null;

        var instance = this;
        var getGroundPosition = function () {
            var pickinfo = instance.scene.pick(instance.scene.pointerX, instance.scene.pointerY, function (mesh) { return mesh == ground; });
            if (pickinfo.hit) {
                return pickinfo.pickedPoint;
            }

            return null;
        }

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
                        if (instance.gui.wheelclick == true) {
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
                            if (x < instance.tiles.length && x >= 0 && y < instance.tiles[0].length && y >= 0) {
                                if (instance.tiles[x][y].player != undefined) {
                                    if (!instance.zoom) {
                                        instance.zoom = true;
                                        var pl = instance.tiles[x][y].player
                                        instance.playSound(pl.chara.name + "-select", instance.vcvolume)
                                        instance.displayRangeTiles(x, y, pl.buffs.getFinalRange(pl.chara.range))
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
                            }

                        }
                        break;
                    case BABYLON.PointerEventTypes.POINTERUP:
                        if (instance.gui.wheelclick == true && currentMesh != null) {
                            pointerUp();
                            dragging = false;

                            instance.gamespeed = instance.prevspeed
                            instance.updateSpeed()

                            var tilex = Math.round(currentMesh.position.x / 30)
                            var tiley = Math.round(currentMesh.position.z / 30)
                            if (tilex >= 0 && tilex < instance.tiles.length && tiley >= 0 && tiley < instance.tiles[0].length && instance.currentdp >= instance.gui.wheelchoice.cost && instance.squadlimit > 0) {
                                if (instance.tiles[tilex][tiley].player == undefined && instance.tiles[tilex][tiley].canBeDeployed(instance.gui.wheelchoice.type)) {
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
                        }
                        else if (sprite != null) {
                            sprite.dispose();
                            sprite = null
                            //instance.undisplayTiles()

                        }
                        break;
                    case BABYLON.PointerEventTypes.POINTERMOVE:
                        if (instance.gui.wheelclick == true) {
                            dragging = true;
                            pointerMove(pointerInfo);
                        }
                        break;
                }
            }
        });

    }

    displayAvailableTiles(type) {
        for (let i = 0; i < this.tiles.length; i++) {
            for (let j = 0; j < this.tiles[i].length; j++) {
                if (this.tiles[i][j].canBeDeployed(type))
                    this.tiles[i][j].displayDeployable()
            }
        }
    }

    displayRangeTiles(x, y, ranget) {
        var rangeexpand = 0
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
                if (Math.abs(j - y) <= counter + rangeexpand) {
                    if (line) {
                        if (i - x == 0 || j - y == 0)
                            this.tiles[i][j].displayRange()
                    }
                    else this.tiles[i][j].displayRange()
                }
            }
        }
    }


    undisplayTiles() {
        for (let i = 0; i < this.tiles.length; i++) {
            for (let j = 0; j < this.tiles[i].length; j++) {
                this.tiles[i][j].undisplay()
            }
        }
    }

    createGlobalCamera() {
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(250+this.cameraOffsetX, 290+this.cameraOffsetY, 180), this.scene); //updown,
        camera.alpha = -0.0034155996227517244
        camera.beta = 0.45497477002057213


        this.scene.activeCamera = camera;
    }

    createFocusCamera(x, z) {
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(x + 125+this.cameraOffsetX, 250+this.cameraOffsetY, z), this.scene);
        camera.alpha = -0.0034155996227517244
        camera.beta = 0.45497477002057213

        this.scene.activeCamera = camera;

    }

    createScene() {


        this.createObstacles();
        this.initDragNDrop();


        this.createGlobalCamera();


        for (let i = 0; i < this.waves.length; i++) {
            this.enemytot += this.waves[i].count;
        }

        //camera.attachControl(this.canvas, true);


        //camera.setPosition(new BABYLON.Vector3(20, 200, 400));
        this.createLights();
        if (this.gameconfig.inputStates.pause) {
            if (!this.gui.showinggui)
                this.gui.createPauseScreen(this)
        }

        this.createSkybox()

        return this.scene;
    }

    createSkybox() {
        // Skybox
        let skybox = new BABYLON.MeshBuilder.CreateBox("skybox", { height: 1, depth: 1920 / 2, width: 1080 / 2 }, this.scene);
        skybox.position.x = 5
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


    createObstacles() {
        let array = this.layout
        this.matrix = [];
        for (let i = 0; i < array.length; i++) {
            var line = [];
            var linetiles = [];
            for (let j = 0; j < array[i].length; j++) {
                var type = array[i][j];
                line.push(this.getWalkable(array[i][j]));
                var tile = new Tile(type, i, j, this.scene)
                linetiles.push(tile);
                if (array[i][j] == "blue")
                    this.hpbox.push(new HPBox("", i, j, this.scene))

                if (array[i][j] == "red")
                    this.spawns.push(new EnemySpawn("", i, j, this.scene))

                if (array[i][j] == "altar")
                    this.hazards.push(new FireAltar(i, j, this))
                if (array[i][j] == "icealtar")
                    this.hazards.push(new IceAltar(i, j, this))
                if (array[i][j] == "magma")
                    this.hazards.push(new MagmaTile(tile, this))
                if (array[i][j] == "blood")
                    this.hazards.push(new BloodTile(tile, this))

            }
            this.tiles.push(linetiles);
            this.matrix.push(line);
        }

    }

    moveEnemies() {
        for (let i = 0; i < this.enemies.length; i++)
            this.enemies[i].move(this.tiles, this.activePlayers);
    }

    movePlayers() {
        for (let i = 0; i < this.activePlayers.length; i++)
            this.activePlayers[i].move(this.enemies, this.activePlayers);
    }

    getWalkable(tiletype) {
        switch (tiletype) {
            case "bg":
            case "blkr":
            case "icealtar":
            case "altar":
            case "r":
                return 1;
            default:
                return 0;
        }
    }

    createEnemy(e, start, checkpoints, id) {
        var enemy = new EnemyController(this.enemylist[e], this.scene, start[0], start[1], this, id);
        enemy.createEnemy(this.matrix, checkpoints, this.spriteManagers, this.gui, this.spriteManagers["icons"]);
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

    spawnEnemies() {
        this.isSpawning = true;
        for (let i = 0; i < this.waves.length; i++) {
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
                this.waves[i]["line"] = false;
                this.drawLine(this.waves[i]["checkpoints"])
            }
            if (this.waves[i]["time"] * 30 <= this.maptimer) {
                if (this.waves[i]["tooltip"]) {
                    this.playSound("tooltip", 0.5);
                    this.gui.createTooltip(this.enemylist[this.waves[i]["enemies"]])
                    this.waves[i]["tooltip"] = false;
                }

                this.waves[i]["time"] += this.waves[i]["gap"];

                this.createEnemy(this.waves[i]["enemies"], this.waves[i]["start"], this.waves[i]["checkpoints"], "wave" + this.waves[i]["number"] + this.waves[i]["count"]);
                this.waves[i]["count"]--;
                if (this.waves[i]["count"] <= 0) {
                    this.waves.splice(i, 1)
                    i--
                }
            }
        }
        this.isSpawning = false;
    }

    drawLine(checkpoints) {

        var res = this.createPathfinding(checkpoints, this.matrix)

        var myPoints = [new BABYLON.Vector3(res[0][1] * 31, 20, res[0][0] * 30)]
        var i = 1;
        var options = {
            points: myPoints,
            updatable: true
        }

        let lines = BABYLON.MeshBuilder.CreateLines("lines", options);
        lines.color = new BABYLON.Color3(1, 0, 0);

        var interval = setInterval(() => {
            lines.dispose();
            if (i < res.length) {
                options.points.push(new BABYLON.Vector3(res[i][1] * 31, 20, res[i][0] * 30))
                if (options.points.length > 10) {
                    options.points.shift()
                }
                lines = BABYLON.MeshBuilder.CreateLines("lines", options);
                lines.color = new BABYLON.Color3(1, 0, 0);
                i++
            }
            else {
                if (options.points.length > 1) {
                    options.points.shift()
                    lines = BABYLON.MeshBuilder.CreateLines("lines", options);
                    lines.color = new BABYLON.Color3(1, 0, 0);
                }

                else clearInterval(interval)
            }
        }, 60)



    }

    createPathfinding(points, matrix) {
        var checks = [];
        for (let i = 0; i < points.length; i++) {
            var grid = new PF.Grid(matrix);
            var finder = new PF.AStarFinder();

            var path = finder.findPath(points[i].start[1], points[i].start[0], points[i].end[1], points[i].end[0], grid);
            if (i > 0)
                path.shift()
            checks = checks.concat(path);
        }
        return checks;
    }


}
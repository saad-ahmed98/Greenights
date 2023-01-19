class MainMenu extends LVLAbstract {
    constructor(gameconfig, startscreen = "") {
        super(gameconfig)
        backgroundimg = "images/menu/backgrounds/main.png",

            this.gameconfig = gameconfig;
        this.scene = new BABYLON.Scene(gameconfig.engine);
        this.lvlcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, this.scene);
        this.opcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("opUI", true, this.scene);

        this.startingscreen = startscreen;
        //this.createSkybox()

        this.gameconfig.scene = this.scene

        this.configureAssetManager();
        this.loadAssets();
        this.scene.assetsManager.load();

        this.texts = {}

        this.skybox;
        this.intro;
        this.loop;
        this.currentbgm;
        this.bgmfix = 0;
        this.filters = [];
    }

    loadAssets() {
        this.loadSounds()
        var junction_font = new FontFace('Butler Stencil', 'url(font-css/ButlerStencil-Light.woff)');
        junction_font.load().then(function (loaded_face) {
            document.fonts.add(loaded_face);
            //document.body.style.fontFamily = '"Junction Regular", Arial';
        })
        this.loadBackgrounds()
    }
    loadBackgrounds() {
        var instance = this;
        var assetsManager = instance.scene.assetsManager;
        var binaryTask;

        binaryTask = assetsManager.addTextureTask(
            "main.png",
            "images/menu/backgrounds/main.png",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };
        binaryTask = assetsManager.addTextureTask(
            "chapter.png",
            "images/menu/backgrounds/chapter.png",
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets[task.name] = task.texture
        };
        let keys = Object.keys(chapters)
        for (let i = 0; i < keys.length; i++) {
            binaryTask = assetsManager.addTextureTask(
                chapters[keys[i]].background,
                "images/menu/backgrounds/" + chapters[keys[i]].background,
            );
            binaryTask.onSuccess = function (task) {
                instance.scene.assets[task.name] = task.texture
            };
        }

    }
    loadSounds() {
        var instance = this;
        var assetsManager = instance.scene.assetsManager;
        var binaryTask = assetsManager.addBinaryFileTask(
            "bgm",
            "sounds/bgm/menu_intro.mp3"
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
            "sounds/bgm/menu_loop.mp3"
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
            "back",
            "sounds/ui/back_click.wav"
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets.back = new BABYLON.Sound(
                "back",
                task.data,
                this.scene,
                null,
                {
                    loop: false,
                }
            );
        };

        binaryTask = assetsManager.addBinaryFileTask(
            "confirm",
            "sounds/ui/confirm_click.wav"
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets.confirm = new BABYLON.Sound(
                "confirm",
                task.data,
                this.scene,
                null,
                {
                    loop: false,
                }
            );
        };

        binaryTask = assetsManager.addBinaryFileTask(
            "chapter",
            "sounds/ui/chapter_click.wav"
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets.chapter = new BABYLON.Sound(
                "chapter",
                task.data,
                this.scene,
                null,
                {
                    loop: false,
                }
            );
        };


        binaryTask = assetsManager.addBinaryFileTask(
            "click",
            "sounds/ui/click.wav"
        );
        binaryTask.onSuccess = function (task) {
            instance.scene.assets.click = new BABYLON.Sound(
                "click",
                task.data,
                this.scene,
                null,
                {
                    loop: false,
                }
            );
        };

        let keys = Object.keys(chapters)
        for (let i = 0; i < keys.length; i++) {
            binaryTask = assetsManager.addBinaryFileTask(
                chapters[keys[i]].bgm + "intro",
                "sounds/bgm/" + chapters[keys[i]].bgm + "_intro.mp3"
            );
            binaryTask.onSuccess = function (task) {
                instance.scene.assets[task.name] = new BABYLON.Sound(
                    task.name,
                    task.data,
                    this.scene,
                    null,
                    {
                        loop: false,
                    }
                );
            };
            binaryTask = assetsManager.addBinaryFileTask(
                chapters[keys[i]].bgm + "loop",
                "sounds/bgm/" + chapters[keys[i]].bgm + "_loop.mp3"
            );
            binaryTask.onSuccess = function (task) {
                instance.scene.assets[task.name] = new BABYLON.Sound(
                    task.name,
                    task.data,
                    this.scene,
                    null,
                    {
                        loop: true,
                    }
                );
            };
        }
    }

    playBGM(name, volume) {
        if (this.current != name) {
            if (this.intro != undefined)
                this.intro.stop()
            if (this.loop != undefined)
                this.loop.stop()
            this.intro = this.scene.assets[name + "intro"]
            this.loop = this.scene.assets[name + "loop"]
            this.current = name;
        }
        var instance = this;

        if (!this.intro.isPlaying && !this.loop.isPlaying) {

            this.intro.setVolume(volume)
            this.intro.play()
            this.intro._outputAudioNode.context.addEventListener('statechange', function () {
                if (instance.intro._outputAudioNode.context.state == "running")
                    instance.intro.play()

            });
            instance.intro.onended = function () {
                instance.loop.setVolume(volume);
                instance.loop.play()
            }
        }
    }

    renderScene() {
        if (this.bgmfix < 20) {
            if (this.startingscreen == "")
                this.playBGM("bgm", 0.2)
            else this.playBGM(chapters[this.startingscreen].bgm, 0.2)
        }
        this.scene.render();
        this.bgmfix++
    }

    createScene() {

        // This creates and positions a free camera (non-mesh)
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -720), this.scene);

        // This targets the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());

        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), this.scene);

        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 1;

        if (this.startingscreen != "")
            this.createLVLSelect(this.startingscreen)
        else this.createMainMenu()
        new BABYLON.FxaaPostProcess("fxaa", 1.0, camera);

        return this.scene;

    }


    createSkybox(src) {
        if (this.skybox != undefined)
            this.skybox.dispose();
        this.skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { height: 720, width: 1280 }, this.scene);
        var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", this.scene);
        skyboxMaterial.diffuseTexture = this.scene.assets[src]
        this.skybox.material = skyboxMaterial;
    }

    createMainMenu() {
        this.playBGM("bgm", 0.2)
        this.createSkybox("main.png");
        this.lvlcontroller.dispose()
        this.opcontroller.dispose()
        this.lvlcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, this.scene);
        var instance = this;

        var label = new BABYLON.GUI.TextBlock();

        label.text = "KRUSSNIGHTS";
        label.fontSize = "20%";
        label.color = "white";
        label.top = "-25%";
        label.fontFamily = "Butler Stencil";


        var credits = new BABYLON.GUI.TextBlock();

        credits.text = "An Arknights fangame in BabylonJS\ndeveloped by Kruss.";
        credits.fontSize = "3%";
        credits.color = "white";
        credits.left = "68%";
        credits.top = "40%";
        credits.fontFamily = "Butler Stencil";
        credits.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT


        var button = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/menu/play.png");
        button.width = "25%";
        button.height = "20%";
        button.color = "transparent";
        button.top = "8%";
        button.hoverCursor = "pointer";

        var button2 = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/menu/howtoplay.png");
        button2.width = "15%";
        button2.height = "15%";
        button2.color = "transparent";
        button2.top = "38%";
        button2.left = "-1%";

        button2.hoverCursor = "pointer";

        var load = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/menu/load.png");
        load.width = "8%";
        load.height = "14%";
        load.color = "transparent";
        load.top = "35%";
        load.left = "-35%";

        load.hoverCursor = "pointer";

        var save = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/menu/save.png");
        save.width = "8%";
        save.height = "14%";
        save.color = "transparent";
        save.top = "35%";
        save.left = "-45%";
        save.hoverCursor = "pointer";

        var savetxt = new BABYLON.GUI.TextBlock();
        savetxt.text = "SAVE";
        savetxt.fontSize = "5%";
        savetxt.color = "white";
        savetxt.top = "45%";
        savetxt.left = "-45%";
        savetxt.fontWeight = "bold";
        savetxt.fontFamily = "Butler Stencil";

        var loadtxt = new BABYLON.GUI.TextBlock();
        loadtxt.text = "LOAD";
        loadtxt.fontSize = "5%";
        loadtxt.color = "white";
        loadtxt.top = "45%";
        loadtxt.left = "-35%";
        loadtxt.fontWeight = "bold";
        loadtxt.fontFamily = "Butler Stencil";


        this.lvlcontroller.addControl(label);
        this.lvlcontroller.addControl(savetxt);
        this.lvlcontroller.addControl(loadtxt);
        this.lvlcontroller.addControl(load);
        this.lvlcontroller.addControl(save);


        this.lvlcontroller.addControl(button);
        this.lvlcontroller.addControl(button2);

        this.lvlcontroller.addControl(credits);

        load.onPointerUpObservable.add(function () {
            instance.playSound("click", 0.3)
            document.getElementById('file-selector').click();

        });
        save.onPointerUpObservable.add(function () {
            instance.playSound("click", 0.3)
            downloadSave();
        });

        button.onPointerUpObservable.add(function () {
            instance.playSound("confirm", 0.3)
            instance.createChapterSelect()
        });

        button2.onPointerUpObservable.add(function () {

            instance.playSound("confirm", 0.3)
            instance.createHowToPlay()

        });
    }


    createPage(pagenb) {
        this.opcontroller.dispose()
        this.opcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, this.scene);
        const pages = 1
        var instance = this;

        let img = new BABYLON.GUI.Image("but", "images/menu/howtoplay/how2play" + pagenb + ".png");
        img.width = (28 * 0.7) + "%";
        img.height = (52 * 0.7) + "%";
        img.color = "transparent";
        img.background = "transparent";
        this.opcontroller.addControl(img);

        var label = new BABYLON.GUI.TextBlock();
        label.text = (pagenb + 1) + "/" + (pages + 1);
        label.fontSize = "5%";
        label.color = "white";
        label.top = "39%";
        label.left = "40%";
        label.fontFamily = "Butler Stencil";
        this.opcontroller.addControl(label)

        if (pagenb < pages) {

            let next = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/menu/howtoplay/next.png");
            next.width = "5%";
            next.height = "10%";
            next.left = "45%";
            next.color = "transparent";
            next.background = "transparent";

            next.onPointerUpObservable.add(function () {
                instance.playSound("click", 0.3)
                instance.createPage(pagenb + 1)
            });
            this.opcontroller.addControl(next);
        }

        if (pagenb > 0) {
            let prev = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/menu/howtoplay/prev.png");
            prev.width = "4%";
            prev.height = "10%";
            prev.left = "-45%";
            prev.color = "transparent";
            prev.background = "transparent";

            prev.onPointerUpObservable.add(function () {
                instance.playSound("click", 0.3)
                instance.createPage(pagenb - 1)
            });
            this.opcontroller.addControl(prev);
        }
    }

    createHowToPlay() {
        this.createSkybox("main.png");
        this.lvlcontroller.dispose()
        this.lvlcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, this.scene);
        this.opcontroller.dispose()
        var instance = this;

        var label = new BABYLON.GUI.TextBlock();
        label.text = "HOW TO PLAY";
        label.fontSize = "9%";
        label.color = "white";
        label.top = "-39%";
        label.left = "15%";
        label.fontFamily = "Butler Stencil";
        this.lvlcontroller.addControl(label)

        var quit = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/menu/back.png");
        quit.width = "17%"
        quit.height = "13%";
        quit.top = "5%";
        quit.color = "transparent";
        quit.background = "transparent"
        quit.cornerRadius = 10;
        quit.left = "10%"
        quit.hoverCursor = "pointer";


        quit.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        quit.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        this.lvlcontroller.addControl(quit);

        quit.onPointerUpObservable.add(function () {
            instance.playSound("back", 0.3)
            instance.createMainMenu()
        });

        this.createPage(0);
    }

    createChapterSelect() {
        this.createSkybox("chapter.png");
        this.lvlcontroller.dispose()
        this.lvlcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, this.scene);
        this.opcontroller.dispose()
        var instance = this;

        let keys = Object.keys(chapters)
        var label = new BABYLON.GUI.TextBlock();
        label.text = "SELECT A CHAPTER";
        label.fontSize = "9%";
        label.color = "white";
        label.top = "-40%";
        label.left = "15%";
        label.fontFamily = "Butler Stencil";
        this.lvlcontroller.addControl(label)
        var j = 0
        var z = 0
        for (let i = 0; i < keys.length; i++) {
            if (i % 2 == 0 && i > 0) {
                j++
                z = 0
            }
            if (i == 4) {
                j = 0.5
                z = 2
            }
            if (i == 5) {
                j = 0
                z = 3.2
            }
            if (i == 6) {
                j = 1
                z = 3.2
            }
            if (checkSave(chapters[keys[i]].unlock) || unlockAllLvl) {
                let title = new BABYLON.GUI.TextBlock();
                title.text = chapters[keys[i]].title;
                title.fontSize = "3%";
                title.color = "white";
                title.top = (7 + j * 40) + "%";
                title.left = (-10 + (z - 1) * 20) + "%";
                title.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                title.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                this.lvlcontroller.addControl(title)
            }
            else {
                let title = new BABYLON.GUI.TextBlock();
                title.text = chapters[keys[i]].unlockmsg;
                title.fontSize = "2.5%";
                title.color = "white";
                title.top = (7 + j * 40) + "%";
                title.left = (-10 + (z - 1) * 20) + "%";
                title.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                title.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                this.lvlcontroller.addControl(title)
            }

            z++
        }
        var z = 0
        j = 0
        for (let i = 0; i < keys.length; i++) {
            if (i % 2 == 0 && i > 0) {
                j++
                z = 0
            }
            if (i == 4) {
                j = 0.5
                z = 2
            }
            if (i == 5) {
                j = 0
                z = 3.2
            }
            if (i == 6) {
                j = 1
                z = 3.2
            }
            let button;
            if (checkSave(chapters[keys[i]].unlock) || unlockAllLvl) {
                button = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/menu/chapters/" + chapters[keys[i]].select);
                button.width = (28 * 0.7) + "%";
                button.height = (50 * 0.7) + "%";
                button.top = (20 + j * 40) + "%";
                button.left = (10 + z * 20) + "%";

                button.color = "transparent";
                button.background = "transparent";
                button.hoverCursor = "pointer";


                button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

                this.lvlcontroller.addControl(button);



                button.onPointerUpObservable.add(function () {
                    instance.playSound("chapter", 0.3)
                    instance.createLVLSelect(chapters[keys[i]].label)
                });
            }
            else {
                button = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/menu/chapters/" + chapters[keys[i]].select);
                button.width = (28 * 0.7) + "%";
                button.height = (50 * 0.7) + "%";
                button.top = (20 + j * 40) + "%";
                button.left = (10 + z * 20) + "%";

                button.color = "transparent";
                button.background = "transparent";
                button.hoverCursor = "pointer";

                const lock = new BABYLON.GUI.Image("lock", "images/menu/chapters/locked.png");
                button.addControl(lock)

                button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

                this.lvlcontroller.addControl(button);
            }
            if (checkSave(chapters[keys[i]].normalclear)) {
                let clear = new BABYLON.GUI.Image("clear", "images/menu/normalclear.png");
                clear.width = "20%"
                clear.height = "20%"
                clear.left = "1.4%"
                clear.top = "1.4%"
                clear.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                clear.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                button.addControl(clear)
            }
            if (checkSave(chapters[keys[i]].hardclear)) {
                let clear = new BABYLON.GUI.Image("clear", "images/menu/hardclear.png");
                clear.width = "20%"
                clear.height = "20%"
                clear.left = "1.4%"
                clear.top = "21.9%"
                clear.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                clear.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                button.addControl(clear)
            }
            z++
        }


        var quit = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/menu/back.png");
        quit.width = "17%"
        quit.height = "13%";
        quit.top = "5%";
        quit.color = "transparent";
        quit.background = "transparent"
        quit.cornerRadius = 10;
        quit.left = "10%"
        quit.hoverCursor = "pointer";


        quit.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        quit.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        this.lvlcontroller.addControl(quit);

        quit.onPointerUpObservable.add(function () {
            instance.playSound("back", 0.3)
            instance.createMainMenu()
        });
    }

    createLVLSelect(label) {
        this.playBGM(chapters[label].bgm, 0.2)
        this.createSkybox(chapters[label].background)
        this.lvlcontroller.dispose()
        this.lvlcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, this.scene);
        this.opcontroller.dispose()
        var instance = this;
        var seltxt = new BABYLON.GUI.TextBlock();
        seltxt.text = "SELECT AN OPERATION";
        seltxt.fontSize = "8%";
        seltxt.color = "white";
        seltxt.top = "-40%";
        seltxt.left = "10%";
        seltxt.fontFamily = "Butler Stencil";
        this.lvlcontroller.addControl(seltxt)

        let keys = Object.keys(levels)
        var z = 0;
        var j = 0;
        let buttons = [];
        var dir = 1;
        let chapterlvl = [];
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].split("-")[0] == label)
                chapterlvl.push(levels[keys[i]])
        }
        let offs = 0
        let stop = false;
        for (let i = 0; i < chapterlvl.length; i++) {
            if (stop)
                break;
            if (i % 6 == 0 && i > 0) {
                j++
                z = 0
                dir *= -1;
                if (dir < 0)
                    z = 5;
                offs++
            }

            var iscleared = checkSave(chapterlvl[i].level)
            if (!iscleared && !unlockAllLvl)
                stop = true;


            const button = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/menu/" + chapterlvl[i].type.split("boss")[0] + ".png");
            button.width = "13%";
            button.height = "7%";
            button.top = (22 + z * 12) + "%";
            button.left = (6 + j * 19) + "%";

            button.color = "transparent";
            button.background = "transparent";
            button.hoverCursor = "pointer";


            var msg = new BABYLON.GUI.TextBlock();
            msg.text = chapterlvl[i].level;
            msg.color = "white";
            msg.fontSize = "60%";
            msg.top = "10%";

            if (chapterlvl[i].type == "normal")
                msg.color = "black";


            this.texts[chapterlvl[i].level] = msg


            button.addControl(msg)
            button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

            if (i < chapterlvl.length - 1 && !stop) {
                if (!(!chapterlvl[i].level.includes("H") && chapterlvl[i + 1].level.includes("H")))
                    if ((i - offs) % 5 == 0 && i > 0 && !(i % 6 == 0)) {
                        var line = new BABYLON.GUI.Image("tooltip", "images/menu/linehorizontal.png");
                        line.width = "6.5%"
                        line.height = "1%"
                        line.top = (25.5 + z * 12) + "%";
                        line.left = (18.6 + j * 19) + "%";
                        line.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                        line.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                        this.lvlcontroller.addControl(line);
                    }
                    else {
                        var line = new BABYLON.GUI.Image("tooltip", "images/menu/linevertical.png");
                        line.width = "0.5%"
                        line.height = "6%"
                        var finalz = z;
                        if (dir < 0)
                            finalz--
                        line.top = (29 + finalz * 12) + "%";
                        line.left = (12.3 + j * 19) + "%";
                        line.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                        line.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                        this.lvlcontroller.addControl(line);
                    }
            }


            this.lvlcontroller.addControl(button);

            if (iscleared) {
                if (chapterlvl[i].level.includes("H"))
                    var image = new BABYLON.GUI.Image("tooltip", "images/menu/hardclear.png");
                else
                    var image = new BABYLON.GUI.Image("tooltip", "images/menu/normalclear.png");
                image.width = "3.9%"
                image.height = "6.8%"
                image.top = (22.4 + z * 12) + "%";
                image.left = (16 + j * 19) + "%";
                image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                this.lvlcontroller.addControl(image);
            }
            else {
                if (chapterlvl[i].unlock != undefined) {
                    var container = new BABYLON.GUI.Rectangle();
                    container.width = "4%"
                    container.height = "7%";
                    container.top = (22.1 + z * 12) + "%";
                    container.left = (16 + j * 19) + "%";
                    container.color = "Black";
                    container.thickness = 3;
                    container.cornerRadius = 50
                    container.background = playerlist[chapterlvl[i].unlock].rarity;
                    container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                    container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

                    var image = new BABYLON.GUI.Image("tooltip", playerlist[chapterlvl[i].unlock].opicon);
                    container.addControl(image)
                    this.lvlcontroller.addControl(container);


                }
            }

            if (chapterlvl[i].type.includes("boss")) {

                var image = new BABYLON.GUI.Image("tooltip", "images/menu/bossicon.png");
                image.width = "7.5%"
                image.height = "11.5%"
                image.top = (19 + z * 12) + "%";
                image.left = (1 + j * 19) + "%";
                image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                this.lvlcontroller.addControl(image);
            }

            if (chapterlvl[i].dplimit == 999) {

                var image = new BABYLON.GUI.Image("tooltip", "images/menu/towericon.png");
                image.width = "7.5%"
                image.height = "12.5%"
                image.top = (18 + z * 12) + "%";
                image.left = (1.5 + j * 19) + "%";
                image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                this.lvlcontroller.addControl(image);
            }

            button.onPointerUpObservable.add(function () {
                instance.playSound("click", 0.3)
                if (instance.texts[chapterlvl[i].level].outlineWidth == 3) {
                    instance.opcontroller.dispose();
                    instance.resetOutlines(chapterlvl)
                }
                else {
                    instance.resetOutlines(chapterlvl)
                    instance.createOperationInfo(chapterlvl[i].level, label)
                    localStorage.setItem("lvl", chapterlvl[i].level)
                    instance.texts[chapterlvl[i].level].outlineColor = "blue"
                    instance.texts[chapterlvl[i].level].outlineWidth = 3
                }
            });
            z += dir;
            buttons.push(button);

        }

        var lvlselected = localStorage.getItem("lvl")
        if (lvlselected != null && this.texts[lvlselected] != undefined) {
            if (lvlselected.split("-")[0] == label) {
                this.createOperationInfo(lvlselected, label)
                this.texts[lvlselected].outlineColor = "blue"
                this.texts[lvlselected].outlineWidth = 3
            }
        }

        var quit = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/menu/back.png");

        quit.width = "17%"
        quit.height = "13%";
        quit.top = "5%";
        quit.color = "transparent";
        quit.background = "transparent"
        quit.cornerRadius = 10;
        quit.left = "10%"
        quit.hoverCursor = "pointer";


        quit.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        quit.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        this.lvlcontroller.addControl(quit);

        quit.onPointerUpObservable.add(function () {
            instance.playSound("back", 0.3)
            instance.createChapterSelect()
        });

    }
    resetOutlines(keys) {
        for (let i = 0; i < keys.length; i++) {
            if (this.texts[keys[i].level] != undefined)
                this.texts[keys[i].level].outlineWidth = 0
        }
    }

    createOperationInfo(lvlname, chapter) {
        this.opcontroller.dispose()
        this.opcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("opUI", true, this.scene);

        let lvl = levels[lvlname]
        var container = new BABYLON.GUI.Rectangle();
        container.width = "40%"
        container.height = "80%";
        container.top = "5%";
        container.color = "White";
        container.background = "rgba(0, 0, 0, 0.8)";

        if (lvl.type.includes("hell")) {
            container.background = "rgba(166, 29, 29,0.8)";
        }

        container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;

        var msg = new BABYLON.GUI.TextBlock();
        msg.text = lvl.name;
        msg.color = "white";
        msg.fontSize = "4.5%";
        msg.top = "-45%"
        msg.left = "-19%"

        container.addControl(msg)

        var diff = new BABYLON.GUI.TextBlock();
        diff.text = lvl.difficulty;
        diff.color = "white";
        diff.fontSize = "4%";
        diff.top = "-45%"
        diff.left = "30%"
        container.addControl(diff)

        var imgcontainer = new BABYLON.GUI.Rectangle();
        imgcontainer.height = "40%"
        imgcontainer.width = "90%"
        imgcontainer.top = "-20%"
        imgcontainer.color = "White";
        imgcontainer.background = "transparent";

        var image = new BABYLON.GUI.Image("", "images/layouts/" + lvl.level + ".png");

        imgcontainer.addControl(image)

        container.addControl(imgcontainer)

        var txtcontainer = new BABYLON.GUI.Rectangle();
        txtcontainer.width = "100%"
        txtcontainer.height = "40%";
        txtcontainer.color = "transparent";
        txtcontainer.top = "20%";



        //container.thickness = 1;
        txtcontainer.background = "transparent";

        var msg = new BABYLON.GUI.TextBlock();
        msg.text = lvl.description;
        msg.color = "white";
        msg.fontSize = "6.5%";
        msg.top = "5%"
        msg.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

        txtcontainer.addControl(msg)


        container.addControl(txtcontainer)

        var image2 = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/menu/combat.png");
        image2.width = "40%"
        image2.height = "15%"
        image2.top = "39%"
        image2.left = "-20%"
        image2.color = "transparent"
        image2.background = "transparent"

        var image3 = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/menu/enemyinfo.png");
        image3.width = "32%"
        image3.height = "12%"
        image3.top = "40%"
        image3.left = "25%"
        image3.color = "transparent"
        image3.background = "transparent"

        container.addControl(image2)
        container.addControl(image3)

        var instance = this

        image2.onPointerUpObservable.add(function () {
            instance.playSound("confirm", 0.3)
            instance.createPlayerSelection(lvlname, chapter)
        });

        image3.onPointerUpObservable.add(function () {
            instance.playSound("confirm", 0.3)
            instance.createEnemyInfo(lvlname, chapter)
        });


        this.opcontroller.addControl(container)
    }

    createEnemyInfo(lvlname, chapter) {
        this.lvlcontroller.dispose()
        this.opcontroller.dispose()
        this.lvlcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, this.scene);
        var instance = this;

        var label = new BABYLON.GUI.TextBlock();
        label.text = "ENEMIES SPOTTED";
        label.fontSize = "8%";
        label.color = "white";
        label.top = "-40%";
        label.left = "10%";
        label.fontFamily = "Butler Stencil";
        this.lvlcontroller.addControl(label)

        const keys = levels[lvlname].enemies.sort(function (a, b) {
            return enemylist[a].id - enemylist[b].id
        })
        let z = 0;
        var myScrollViewer = new BABYLON.GUI.ScrollViewer();
        myScrollViewer.width = "63%"
        myScrollViewer.height = "100%";
        myScrollViewer.left = "-16%";

        myScrollViewer.top = "10%";
        myScrollViewer.color = "transparent"
        let keysused = [];

        let offset = 4
        let w = 17
        let h = 18
        if (keys.length > 16) {
            offset = 5
            w = 13
            h = 14.5
        }
        for (let i = 0; i < keys.length; i++) {
            if (i % offset == 0 && i > 0)
                z = 0

            let button;
            let name = keys[i].split("EX")[0]
            if (keys[i].slice(-1) != '2' && !keysused.includes(name)) {
                if (checkSave(name)) {
                    button = BABYLON.GUI.Button.CreateImageOnlyButton(name, "images/enemyicons/" + name + ".png");
                    button.onPointerUpObservable.add(function () {
                        instance.playSound("click", 0.3)
                        instance.createEnemyTooltip(enemylist[keys[i]])
                    });
                }
                else button = BABYLON.GUI.Button.CreateImageOnlyButton(name, "images/menu/notfound.jpg");

                button.width = w + "%";
                button.height = h + "%";
                button.top = (10 + Math.floor(i / offset) * (h + 1)) + "%";
                button.left = (2 + z * (w + 1)) + "%";
                button.color = "transparent";
                button.hoverCursor = "pointer";

                button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

                myScrollViewer.addControl(button);
                z++
            }
            else {
                keys.splice(i, 1)
                i--
            }
            keysused.push(name)
        }

        this.lvlcontroller.addControl(myScrollViewer)


        var quit = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/menu/back.png");

        quit.width = "17%"
        quit.height = "13%";
        quit.top = "5%";
        quit.color = "transparent";
        quit.background = "transparent"
        quit.cornerRadius = 10;
        quit.left = "10%"
        quit.hoverCursor = "pointer";
        quit.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        quit.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        this.lvlcontroller.addControl(quit);

        quit.onPointerUpObservable.add(function () {
            instance.playSound("back", 0.3)
            instance.createLVLSelect(chapter)
        });
        this.createEmptyEnemyTooltip()

    }

    createPlayerSelection(lvlname, chapter) {
        this.lvlcontroller.dispose()
        this.opcontroller.dispose()
        this.lvlcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, this.scene);
        var instance = this;

        var label = new BABYLON.GUI.TextBlock();
        label.text = "SELECT YOUR TEAM";
        label.fontSize = "8%";
        label.color = "white";
        label.top = "-40%";
        label.left = "10%";
        label.fontFamily = "Butler Stencil";
        this.lvlcontroller.addControl(label)

        let selected = [];
        var storage = localStorage.getItem("team");
        if (storage != null)
            selected = JSON.parse(storage).filter(k => checkSave(k) || unlockAllChara)


        let lastavailable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        let select = new BABYLON.GUI.TextBlock();
        select.text = "SELECTED " + selected.length + "/12";
        select.fontSize = "3%";
        select.color = "white";
        select.top = "35%";
        select.left = "30%";
        this.lvlcontroller.addControl(select)

        let keysall = Object.keys(playerlist)
        var j = 0;
        var z = 0;
        var myScrollViewer = new BABYLON.GUI.ScrollViewer();
        myScrollViewer.width = "63%"
        myScrollViewer.height = "70%";
        myScrollViewer.left = "-10%";

        myScrollViewer.top = "-2%";
        myScrollViewer.color = "transparent"
        let keys = keysall.filter(k => (checkSave(k) || unlockAllChara) && (instance.filters.includes(playerlist[k].class) || instance.filters.length == 0))

        for (let i = 0; i < keys.length; i++) {
            if (i % 9 == 0 && i > 0) {
                j++
                z = 0
            }
            if (checkSave(playerlist[keys[i]].name) || unlockAllChara) {

                var image = new BABYLON.GUI.Image("", playerlist[keys[i]].opicon);
                image.width = "26%"
                image.left = "-35%"

                var image2 = new BABYLON.GUI.Image("", "images/classicons/" + playerlist[keys[i]].class + ".webp");
                image2.width = "22%"
                image2.height = "80%"

                image2.left = "40%"


                let button = BABYLON.GUI.Button.CreateSimpleButton("but", "");
                button.width = "22.5%";
                button.height = "9.5%";
                button.top = (10 + z * 10) + "%";
                button.left = (0 + j * 23.5) + "%";
                button.color = "white";
                button.hoverCursor = "pointer";

                let container = new BABYLON.GUI.Rectangle();
                container.width = "100%";
                container.height = "100%";
                container.color = "transparent";
                container.background = "rgba(77, 184, 255,0)";

                let txt = new BABYLON.GUI.TextBlock();
                txt.text = "";
                txt.color = "white";
                txt.fontSize = "80%";
                txt.left = "-35%"

                for (let x = 0; x < selected.length; x++) {
                    if (selected[x] == keys[i]) {
                        button.color = "blue"
                        button.thickness = 2;
                        container.background = "rgba(77, 184, 255,0.6)";
                        txt.text = lastavailable.shift()
                    }
                }


                button.background = playerlist[keys[i]].rarity;

                var msg = new BABYLON.GUI.TextBlock();
                msg.text = playerlist[keys[i]].name;
                msg.color = "white";
                msg.fontSize = "40%";
                msg.left = "5%"

                button.addControl(image)
                button.addControl(image2)
                button.addControl(container)
                button.addControl(msg)
                button.addControl(txt)

                button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

                myScrollViewer.addControl(button);


                button.onPointerUpObservable.add(function () {
                    instance.playSound("click", 0.3)
                    if (button.color == "blue") {
                        instance.createEmptyTooltip()
                        selected = selected.filter(data => data != keys[i])
                        button.color = "white"
                        button.thickness = 1;
                        container.background = "rgba(77, 184, 255,0)";
                        lastavailable.push(parseInt(txt.text))
                        lastavailable.sort((a, b) => a - b)
                        txt.text = "";

                    }
                    else {
                        if (selected.length < 12) {
                            instance.createPlayerTooltip(playerlist[keys[i]])
                            selected.push(keys[i])
                            button.color = "blue"
                            button.thickness = 2;
                            container.background = "rgba(77, 184, 255,0.6)";
                            txt.text = lastavailable.shift()
                        }
                    }
                    select.text = "SELECTED " + selected.length + "/12";
                });
            }
            z++
        }
        this.createEmptyTooltip()

        //filter

        var container = new BABYLON.GUI.Rectangle();
        container.width = "5%";
        container.height = "59.9%";
        container.left = "1%";
        container.top = "20%";
        container.color = "white";
        container.thickness = 1;
        container.background = "rgba(0, 0, 0, 0.3)";
        container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

        let icon = BABYLON.GUI.Button.CreateImageOnlyButton("tooltip", "images/menu/filter.png");
        icon.width = "80%"
        icon.height = "10%"
        icon.top = "3%"
        icon.left = "-1%"
        icon.color = "transparent"
        icon.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        icon.onPointerUpObservable.add(function () {
            instance.playSound("back", 0.2)
            instance.filters = []
            localStorage.setItem("team", JSON.stringify(selected))
            instance.createPlayerSelection(lvlname, chapter)
        });

        let classes = ["vanguard", "guard", "defender", "sniper", "caster", "supporter", "medic", "specialist"]
        for (let i = 0; i < classes.length; i++) {
            let btnclass = BABYLON.GUI.Button.CreateImageOnlyButton("", "images/classicons/" + classes[i] + ".webp");

            btnclass.width = "80%"
            btnclass.height = "10%"
            btnclass.top = (7 + 10 * (i + 1)) + "%"
            btnclass.left = "-1%"
            btnclass.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            let container2 = new BABYLON.GUI.Rectangle();
            container2.width = "100%";
            container2.height = "100%";
            container2.color = "transparent";
            container2.background = "rgba(77, 184, 255,0)";
            if (this.filters.includes(classes[i])) {
                btnclass.color = "blue"
                btnclass.thickness = 2;
                container2.background = "rgba(77, 184, 255,0.6)";
            }
            btnclass.addControl(container2)
            container.addControl(btnclass)

            btnclass.onPointerUpObservable.add(function () {
                instance.playSound("click", 0.2)
                if (btnclass.color == "blue") {
                    instance.filters = instance.filters.filter(k => k != classes[i])
                    btnclass.color = "white"
                    btnclass.thickness = 1;
                    container2.background = "rgba(77, 184, 255,0)";
                }
                else {
                    instance.filters.push(classes[i])
                    btnclass.color = "blue"
                    btnclass.thickness = 2;
                    container2.background = "rgba(77, 184, 255,0.6)";
                }
                localStorage.setItem("team", JSON.stringify(selected))
                instance.createPlayerSelection(lvlname, chapter)
            });
        }

        container.addControl(icon)

        this.lvlcontroller.addControl(container);



        this.lvlcontroller.addControl(myScrollViewer)


        var quit = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/menu/back.png");

        quit.width = "17%"
        quit.height = "13%";
        quit.top = "5%";
        quit.color = "transparent";
        quit.background = "transparent"
        quit.cornerRadius = 10;
        quit.left = "10%"
        quit.hoverCursor = "pointer";
        quit.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        quit.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        this.lvlcontroller.addControl(quit);

        quit.onPointerUpObservable.add(function () {
            instance.playSound("back", 0.3)
            instance.createLVLSelect(chapter)
            localStorage.setItem("team", JSON.stringify(selected))
        });

        var image2 = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/menu/combat.png");

        image2.width = "20%"
        image2.height = "15%"
        image2.top = "40%"
        image2.left = "0%"
        image2.color = "transparent"

        this.lvlcontroller.addControl(image2)



        image2.onPointerUpObservable.add(function () {
            instance.playSound("confirm", 0.3)

            if (selected.length > 0) {
                localStorage.setItem("team", JSON.stringify(selected))
                let players = {}
                for (let i = 0; i < selected.length; i++) {
                    players[selected[i]] = JSON.parse(JSON.stringify(playerlist[selected[i]]));
                }
                new LVLController(instance.gameconfig, enemylist, players, JSON.parse(JSON.stringify(levels[lvlname])));
            }
        });

    }

    //creates description when clicking on a player
    createPlayerTooltip(player) {

        this.opcontroller.dispose()
        this.opcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("opUI", true, this.scene);


        var container = new BABYLON.GUI.Rectangle();
        container.width = "28%";
        container.height = "18%";
        container.left = "0%";
        container.top = "20%";
        container.color = "white";
        container.thickness = 1;
        container.background = "rgba(0, 0, 0, 0.3)";
        container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;


        var textbox = new BABYLON.GUI.Rectangle();
        textbox.width = "60%";
        textbox.left = "-15%";
        textbox.color = "white";
        textbox.thickness = 0;
        textbox.background = "transparent";

        //stats description
        var text = new BABYLON.GUI.TextBlock();
        text.text = "\"" + player.name + "\"\n\tHP\t\t" + player.hp + "\n\tATK\t\t" + player.atk + "\n\tDEF\t\t" + player.def + "\n\tRES\t\t" + player.res + "\n\tBLOCK\t\t" +
            player.blockcount + "\n\tDMG\t\t" + player.dmgtype.toUpperCase() + "\n\tCOST\t\t" + player.basecost;
        text.color = "white";
        text.fontSize = "10%";
        text.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT
        text.left = "5%";

        var image = new BABYLON.GUI.Image("tooltip", "images/classicons/" + player.class + ".webp");
        image.width = "15%"
        image.height = "40%"
        image.top = "-5%"
        image.left = "9%"

        var textclass = new BABYLON.GUI.TextBlock();
        textclass.text = player.subclass;
        textclass.color = "white";
        textclass.fontSize = "11%";
        textclass.top = "20%";
        textclass.left = "10%";

        var icon = new BABYLON.GUI.Image("tooltip", "images/menu/stats-icon.png");
        icon.width = "14%"
        icon.height = "36%"
        icon.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        icon.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        icon.top = "3%"
        icon.left = "-1%"

        container.addControl(icon)

        container.addControl(image)

        textbox.addControl(text)
        container.addControl(textclass)
        container.addControl(textbox)


        this.opcontroller.addControl(container);
        var image = new BABYLON.GUI.Image("tooltip", player.skill.skillimage);
        image.width = "27%"
        image.height = "75%"
        image.top = "-5%"
        image.left = "-33%"


        var textSP = new BABYLON.GUI.TextBlock();
        let duration = player.skill.duration
        if (duration == 9999)
            duration = "∞"
        textSP.text = player.skill.sp + " 🗲\t\t\t\t" + duration + " ◷"
        textSP.fontSize = "10%";
        textSP.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT

        textSP.left = "7%";
        textSP.top = "43%";

        container = new BABYLON.GUI.Rectangle();
        container.width = "28%";
        container.height = "18%";
        container.left = "0%";
        container.top = "37.8%";
        container.color = "white";
        container.thickness = 1;
        container.background = "rgba(0, 0, 0, 0.3)";
        container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

        textbox = new BABYLON.GUI.Rectangle();
        textbox.width = "60%";
        textbox.left = "12%";
        textbox.color = "white";
        textbox.thickness = 0;
        textbox.background = "transparent";

        //skill description
        text = new BABYLON.GUI.TextBlock();
        text.text = "\"" + player.skill.name + "\"\n\n" + player.skill.chargetype + "\t\t|\t\t" + player.skill.triggertype + "\n\n" + player.skill.description
        text.fontSize = "8.5%";
        text.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT
        text.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP

        text.left = "5%";
        text.top = "6%";

        var icon = new BABYLON.GUI.Image("tooltip", "images/menu/skill-icon.png");
        icon.width = "14%"
        icon.height = "36%"
        icon.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        icon.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        icon.top = "3%"
        icon.left = "-1%"

        container.addControl(icon)
        textbox.addControl(text)
        container.addControl(textSP)
        container.addControl(image)
        container.addControl(textbox)

        this.opcontroller.addControl(container);

        //talents

        var container = new BABYLON.GUI.Rectangle();
        container.width = "28%";
        container.height = "24%";
        container.left = "0%";
        container.top = "55.7%";
        container.color = "white";
        container.thickness = 1;
        container.background = "rgba(0, 0, 0, 0.3)";
        container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;


        var textbox = new BABYLON.GUI.Rectangle();
        textbox.width = "100%";
        textbox.color = "white";
        textbox.thickness = 0;
        textbox.background = "transparent";

        //talents description
        var text = new BABYLON.GUI.TextBlock();
        for (let i = 0; i < player.talents.length; i++) {
            text.text += "\"" + player.talents[i].name + "\"\n" + player.talents[i].description + "\n"
            if (i != player.talents.length - 1)
                text.text += "-------\n"
        }
        text.color = "white";
        text.fontSize = "6.5%";
        text.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT
        text.left = "5%";



        var icon = new BABYLON.GUI.Image("tooltip", "images/menu/talents-icon.png");
        icon.width = "14%"
        icon.height = "30%"
        icon.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        icon.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        icon.top = "3%"
        icon.left = "-1%"

        container.addControl(icon)
        textbox.addControl(text)
        container.addControl(textbox)

        this.opcontroller.addControl(container);
    }

    //creates description when clicking on an enemy
    createEnemyTooltip(enemy) {

        this.opcontroller.dispose()
        this.opcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("opUI", true, this.scene);


        var container = new BABYLON.GUI.Rectangle();
        container.width = "50%";
        container.height = "20%";
        container.left = "-1%";
        container.top = "15%";
        container.color = "white";
        container.thickness = 1;
        container.background = "rgba(0, 0, 0, 0.3)";
        container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;


        var textbox = new BABYLON.GUI.Rectangle();
        textbox.width = "100%";
        textbox.left = "1%";
        textbox.color = "white";
        textbox.thickness = 0;
        textbox.background = "transparent";

        //stats description
        var text = new BABYLON.GUI.TextBlock();
        text.text = "\"" + enemy.name.split("EX")[0] + "\"\n\n\n\tHP:\t" + enemy.hp + "\t\t\tATK:\t" + enemy.atk + "\t\t\tDEF:\t"
            + enemy.def + "\t\t\tRES:\t" + enemy.res + "\t\t\tDMG:\t" + enemy.dmgtype.toUpperCase();
        text.color = "white";
        text.fontSize = "14%";
        text.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT
        text.left = "5%";

        var icon = new BABYLON.GUI.Image("tooltip", "images/menu/stats-icon.png");
        icon.width = "8%"
        icon.height = "36%"
        icon.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        icon.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        icon.top = "3%"
        icon.left = "-1%"

        container.addControl(icon)

        textbox.addControl(text)
        container.addControl(textbox)
        this.opcontroller.addControl(container);


        var textbox = new BABYLON.GUI.Rectangle();
        textbox.width = "100%";
        textbox.left = "1%";
        textbox.color = "white";
        textbox.thickness = 0;
        textbox.background = "transparent";

        var text = new BABYLON.GUI.TextBlock();
        text.text = enemy.description || "nada"
        text.color = "white";
        text.top = "2%"
        text.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT
        text.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

        text.left = "5%";
        text.fontSize = "3.5%";


        textbox.addControl(text)

        container = new BABYLON.GUI.Rectangle();
        container.width = "50%";
        container.height = "64%";
        container.left = "-1%";
        container.top = "35%";
        container.color = "white";
        container.thickness = 1;
        container.background = "rgba(0, 0, 0, 0.3)";
        container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

        var icon = new BABYLON.GUI.Image("tooltip", "images/menu/talents-icon.png");
        icon.width = "9%"
        icon.height = "12%"
        icon.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        icon.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        icon.top = "3%"
        icon.left = "-1%"

        container.addControl(icon)
        container.addControl(textbox)

        this.opcontroller.addControl(container);
    }

    createEmptyTooltip() {
        this.opcontroller.dispose()
        this.opcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("opUI", true, this.scene);

        var container = new BABYLON.GUI.Rectangle();
        container.width = "28%";
        container.height = "59.9%";
        container.left = "0%";
        container.top = "20%";
        container.color = "white";
        container.thickness = 1;
        container.background = "rgba(0, 0, 0, 0.3)";
        container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

        var icon = new BABYLON.GUI.Image("tooltip", "images/menu/noinfo.png");
        icon.width = "60%"
        icon.height = "50%"
        icon.top = "3%"
        icon.left = "-1%"

        container.addControl(icon)

        this.opcontroller.addControl(container);

    }
    createEmptyEnemyTooltip() {
        this.opcontroller.dispose()
        this.opcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("opUI", true, this.scene);
        var container = new BABYLON.GUI.Rectangle();
        container.width = "50%";
        container.height = "84%";
        container.left = "-1%";
        container.top = "15%";
        container.color = "white";
        container.thickness = 1;
        container.background = "rgba(0, 0, 0, 0.3)";
        container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        var icon = new BABYLON.GUI.Image("tooltip", "images/menu/noinfo.png");
        icon.width = "50%"
        icon.height = "50%"
        icon.top = "3%"
        icon.left = "-1%"
        container.addControl(icon)
        this.opcontroller.addControl(container);

    }

}
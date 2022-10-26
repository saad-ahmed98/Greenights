class MainMenu extends LVLAbstract {
    constructor(gameconfig) {
        super(gameconfig)
        backgroundimg = "images/background/default.png"

        this.gameconfig = gameconfig;
        this.scene = new BABYLON.Scene(gameconfig.engine);
        this.lvlcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, this.scene);
        this.opcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("opUI", true, this.scene);


        //this.createSkybox()

        this.gameconfig.scenes.push(this.scene)

        this.configureAssetManager();
        this.loadAssets();
        this.scene.assetsManager.load();


    }

    loadAssets() {
        this.loadSounds()
        var junction_font = new FontFace('Butler Stencil', 'url(font-css/ButlerStencil-Light.woff)');
        junction_font.load().then(function (loaded_face) {
            document.fonts.add(loaded_face);
            //document.body.style.fontFamily = '"Junction Regular", Arial';

        })
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
    }

    playBGM(volume) {
        var intro = this.scene.assets.bgmintro
        var loop = this.scene.assets.bgmloop

        if (!intro.isPlaying && !loop.isPlaying) {

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

    }


    renderScene() {
        this.playBGM(0.2)
        this.scene.render();
    }

    createScene() {
        var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(-30, 90, -100), this.scene);
        this.createMainMenu()
        this.createSkybox()
    }


    createSkybox() {
        // Skybox
        var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: 1000.0 }, this.scene);
        var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", this.scene);
        skyboxMaterial.backFaceCulling = false;
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("images/menu/skybox", this.scene);
        skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        skybox.material = skyboxMaterial;
    }


    createMainMenu() {
        this.lvlcontroller.dispose()
        this.opcontroller.dispose()
        this.lvlcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, this.scene);
        var instance = this;

        var label = new BABYLON.GUI.TextBlock();

        label.text = "KRUSSNIGHTS";
        label.fontSize = "20%";
        label.color = "white";
        label.top = "-20%";
        label.fontFamily = "Butler Stencil";

        var button = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/menu/play.png");
        button.width = "25%";
        button.height = "20%";
        button.color = "transparent";
        button.top = "15%";
        button.hoverCursor = "pointer";

        this.lvlcontroller.addControl(label);
        this.lvlcontroller.addControl(button);

        button.onPointerUpObservable.add(function () {
            instance.playSound("confirm", 0.3)
            instance.createLVLSelect()
        });
    }


    createLVLSelect() {
        this.lvlcontroller.dispose()
        this.lvlcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, this.scene);
        this.opcontroller.dispose()
        var instance = this;

        let keys = Object.keys(levels)
        for (let i = 0; i < keys.length; i++) {
            var button = BABYLON.GUI.Button.CreateSimpleButton("but", "");
            button.width = "30%";
            button.height = "10%";
            button.top = (25 + i * 12) + "%";
            button.color = "transparent";
            button.background = "transparent";
            button.hoverCursor = "pointer";

            button.left = "10%";

            var msg = new BABYLON.GUI.TextBlock();
            msg.text = levels[keys[i]].level;
            msg.color = "white";
            msg.fontSize = "60%";
            msg.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT


            button.addControl(msg)
            button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

            this.lvlcontroller.addControl(button);

            button.onPointerUpObservable.add(function () {
                instance.playSound("click", 0.3)
                instance.createOperationInfo(keys[i])
            });
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

    createOperationInfo(lvlname) {
        this.opcontroller.dispose()
        this.opcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("opUI", true, this.scene);

        let lvl = levels[lvlname]
        var container = new BABYLON.GUI.Rectangle();
        container.width = "60%"
        container.height = "90%";
        //container.left = (i * -8.3) + "%";
        container.color = "White";
        //container.thickness = 1;
        container.background = "transparent";
        container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;

        var msg = new BABYLON.GUI.TextBlock();
        msg.text = lvl.name;
        msg.color = "white";
        msg.fontSize = "5%";
        msg.top = "-45%"
        container.addControl(msg)

        var imgcontainer = new BABYLON.GUI.Rectangle();
        imgcontainer.height = "40%"
        imgcontainer.width = "65%"
        imgcontainer.top = "-20%"
        imgcontainer.color = "White";
        imgcontainer.background = "transparent";

        var image = new BABYLON.GUI.Image("", "images/layouts/" + lvl.level + ".png");

        imgcontainer.addControl(image)

        container.addControl(imgcontainer)

        var txtcontainer = new BABYLON.GUI.Rectangle();
        txtcontainer.width = "90%"
        txtcontainer.height = "40%";
        txtcontainer.color = "white";
        txtcontainer.top = "20%";



        //container.thickness = 1;
        txtcontainer.background = "transparent";

        var msg = new BABYLON.GUI.TextBlock();
        msg.text = lvl.description;
        msg.color = "white";
        msg.fontSize = "7%";
        msg.top = "-10%"
        txtcontainer.addControl(msg)


        container.addControl(txtcontainer)

        var image2 = BABYLON.GUI.Button.CreateImageOnlyButton("but", "images/menu/combat.png");
        image2.width = "30%"
        image2.height = "15%"
        image2.top = "39%"
        image2.left = "3%"
        image2.color = "transparent"
        image2.background = "black"

        container.addControl(image2)

        var instance = this

        image2.onPointerUpObservable.add(function () {
            instance.playSound("confirm", 0.3)
            instance.createPlayerSelection(lvlname)
            //new LVLController(instance.gameconfig, enemylist, playerlist, levels[lvlname]);
        });


        this.opcontroller.addControl(container)
    }

    createPlayerSelection(lvlname) {
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

        let select = new BABYLON.GUI.TextBlock();
        select.text = "SELECTED " + selected.length + "/12";
        select.fontSize = "3%";
        select.color = "white";
        select.top = "30%";
        select.left = "25%";
        this.lvlcontroller.addControl(select)



        let keys = Object.keys(playerlist)
        var j = 0;
        var z = 0;
        var myScrollViewer = new BABYLON.GUI.ScrollViewer();
        myScrollViewer.width = "70%"
        myScrollViewer.height = "60%";
        myScrollViewer.left = "-13.5%";

        myScrollViewer.top = "-5%";
        myScrollViewer.color = "transparent"

        for (let i = 0; i < keys.length; i++) {
            if (i % 7 == 0 && i > 0) {
                j++
                z = 0
            }
            var image = new BABYLON.GUI.Image("", playerlist[keys[i]].opicon);
            image.width = "26%"
            image.left = "-35%"

            
            let button = BABYLON.GUI.Button.CreateSimpleButton("but", "");
            button.width = "20.5%";
            button.height = "12%";
            button.top = (10 + z * 13) + "%";
            button.left = (0 + j * 21.5) + "%";
            button.color = "white";
            button.hoverCursor = "pointer";


            button.background = playerlist[keys[i]].rarity;



            var msg = new BABYLON.GUI.TextBlock();
            msg.text = playerlist[keys[i]].name;
            msg.color = "white";
            msg.fontSize = "50%";
            msg.left = "15%"


            button.addControl(msg)
            button.addControl(image)
            button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

            myScrollViewer.addControl(button);

            this.createEmptyTooltip()

            button.onPointerUpObservable.add(function () {
                instance.playSound("click", 0.3)
                if (button.color == "blue") {
                    instance.createEmptyTooltip()
                    selected = selected.filter(data => data != keys[i])
                    button.color = "white"
                    button.thickness = 1;

                }
                else {
                    if (selected.length < 12) {
                        instance.createPlayerTooltip(playerlist[keys[i]])
                        selected.push(keys[i])
                        button.color = "blue"
                        button.thickness = 4;
                    }
                }
                select.text = "SELECTED " + selected.length + "/12";

            });
            z++
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
            instance.createLVLSelect()
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
                let players = {}
                for (let i = 0; i < selected.length; i++) {
                    players[selected[i]] = JSON.parse(JSON.stringify(playerlist[selected[i]]));
                }
                new LVLController(instance.gameconfig, enemylist, players, JSON.parse(JSON.stringify(levels[lvlname])));
            }
        });

    }

    //creates description when clicking on a deployed player
    createPlayerTooltip(player) {

        this.opcontroller.dispose()
        this.opcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("opUI", true, this.scene);


        var container = new BABYLON.GUI.Rectangle();
        container.width = "28%";
        container.height = "18%";
        container.left = "0%";
        container.top = "15%";
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
            player.blockcount + "\n\tDMG\t\t" + player.dmgtype.toUpperCase() + "\n\tCOST\t\t" + player.cost;
        text.color = "white";
        text.fontSize = "10%";
        text.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT
        text.left = "5%";

        var image = new BABYLON.GUI.Image("tooltip", player.classicon);
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
        image.width = "25%"
        image.height = "75%"
        image.top = "-5%"
        image.left = "-33%"


        var textSP = new BABYLON.GUI.TextBlock();
        textSP.text = player.skill.sp + " 🗲\t\t\t\t" + player.skill.duration + " ◷"
        textSP.fontSize = "10%";
        textSP.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT

        textSP.left = "7%";
        textSP.top = "43%";

        container = new BABYLON.GUI.Rectangle();
        container.width = "28%";
        container.height = "18%";
        container.left = "0%";
        container.top = "32.9%";
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
        text.fontSize = "10%";
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
        container.top = "50.9%";
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
        text.fontSize = "8%";
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

    createEmptyTooltip() {

        this.opcontroller.dispose()
        this.opcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("opUI", true, this.scene);


        var container = new BABYLON.GUI.Rectangle();
        container.width = "28%";
        container.height = "59.9%";
        container.left = "0%";
        container.top = "15%";
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

}
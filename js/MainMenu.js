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
        var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(-30, 80, -100), this.scene);
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

        var button = BABYLON.GUI.Button.CreateSimpleButton("but", "");
        button.width = "20%";
        button.height = "15%";
        button.color = "white";
        button.top = "15%";

        var msg = new BABYLON.GUI.TextBlock();
        msg.text = "PLAY";
        msg.color = "white";
        msg.fontSize = "80%";

        button.background = "black";
        button.addControl(msg)
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
        var instance = this;

        let keys = Object.keys(levels)
        for (let i = 0; i < keys.length; i++) {
            var button = BABYLON.GUI.Button.CreateSimpleButton("but", "");
            button.width = "25%";
            button.height = "10%";
            button.top = (25 + i * 12) + "%";
            button.color = "transparent";
            button.background = "transparent";

            button.left = "10%";

            var msg = new BABYLON.GUI.TextBlock();
            msg.text = levels[keys[i]].level;
            msg.color = "white";
            msg.fontSize = "80%";

            button.addControl(msg)
            button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

            this.lvlcontroller.addControl(button);

            button.onPointerUpObservable.add(function () {
                instance.playSound("click", 0.3)
                instance.createOperationInfo(keys[i])
            });
        }

        var quit = BABYLON.GUI.Button.CreateSimpleButton("but", "");
        quit.width = "20%"
        quit.height = "10%";
        quit.top = "5%";
        quit.color = "white";
        quit.background = "transparent"
        quit.cornerRadius = 10;
        quit.left = "5%"

        var msg = new BABYLON.GUI.TextBlock();
        msg.text = "BACK";
        msg.color = "white";
        msg.fontSize = "80%";
        quit.addControl(msg)

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
        msg.fontSize = "10%";
        msg.top = "-20%"
        txtcontainer.addControl(msg)


        container.addControl(txtcontainer)

        var image2 = new BABYLON.GUI.Image("", "images/menu/combat.png");
        image2.width = "10%"
        image2.height = "11%"
        image2.top = "40%"
        image2.left = "-10%"


        var button = BABYLON.GUI.Button.CreateSimpleButton("but", "");
        button.width = "25%";
        button.height = "9%";
        button.color = "transparent";
        button.top = "40%";
        button.left = "5%"

        var msg = new BABYLON.GUI.TextBlock();
        msg.text = "START";
        msg.color = "white";
        msg.fontSize = "80%";

        button.background = "black";
        button.addControl(msg)
        container.addControl(button)
        container.addControl(image2)

        var instance = this

        button.onPointerUpObservable.add(function () {
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
        myScrollViewer.width = "80%"
        myScrollViewer.height = "63%";
        myScrollViewer.top = "-5%";
        myScrollViewer.color = "transparent"

        for (let i = 0; i < keys.length; i++) {
            if (i % 5 == 0 && i > 0) {
                j++
                z = 0
            }
            var image = new BABYLON.GUI.Image("", playerlist[keys[i]].opicon);
            image.width = "26%"
            image.left = "-35%"
            let button = BABYLON.GUI.Button.CreateSimpleButton("but", "");
            button.width = "25%";
            button.height = "15%";
            button.top = (10 + z * 17) + "%";
            button.left = (0 + j * 30) + "%";
            button.color = "white";

            button.background = "transparent";



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
            

            button.onPointerUpObservable.add(function () {
                instance.playSound("click", 0.3)
                if (button.color == "blue") {
                    selected = selected.filter(data => data != keys[i])
                    button.color = "white"
                    button.thickness = 1;

                }
                else {
                    if (selected.length < 12) {
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


        var quit = BABYLON.GUI.Button.CreateSimpleButton("but", "");
        quit.width = "20%"
        quit.height = "10%";
        quit.top = "5%";
        quit.color = "white";
        quit.background = "transparent"
        quit.cornerRadius = 10;
        quit.left = "5%"

        var msg = new BABYLON.GUI.TextBlock();
        msg.text = "BACK";
        msg.color = "white";
        msg.fontSize = "80%";
        quit.addControl(msg)

        quit.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        quit.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        this.lvlcontroller.addControl(quit);

        quit.onPointerUpObservable.add(function () {
            instance.playSound("back", 0.3)
            instance.createLVLSelect()
        });

        var image2 = new BABYLON.GUI.Image("", "images/menu/combat.png");
        image2.width = "7%"
        image2.height = "11%"
        image2.top = "40%"
        image2.left = "-5%"


        let start = BABYLON.GUI.Button.CreateSimpleButton("but", "");
        start.width = "25%";
        start.height = "9%";
        start.color = "transparent";
        start.top = "40%";
        start.left = "5%"

        var msg = new BABYLON.GUI.TextBlock();
        msg.text = "START";
        msg.color = "white";
        msg.fontSize = "80%";

        start.background = "black";
        start.addControl(msg)
        this.lvlcontroller.addControl(start)
        this.lvlcontroller.addControl(image2)

        start.onPointerUpObservable.add(function () {
            instance.playSound("confirm", 0.3)

            if (selected.length > 0) {
                let players = {}
                for (let i = 0; i < selected.length; i++) {
                    players[selected[i]] = JSON.parse(JSON.stringify(playerlist[selected[i]]));
                }
                new LVLController(instance.gameconfig, enemylist, players,JSON.parse(JSON.stringify(levels[lvlname])));
            }
        });

    }



}
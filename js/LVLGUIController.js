class LVLGUIController {
    constructor(scene, gameconfig, level) {
        this.lvlcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, scene);
        this.scene = scene;
        this.lvl = level;
        this.gameconfig = gameconfig;
        //to avoid calling multiple times and overlap guis
        this.showinggui = false;
        //this.escapeState=false;
        this.isPaused = false;
        this.timerPause = false;
        this.canPause = true;

        this.statscontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI2", true, scene);
        this.wheelController = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI3", true, scene);

        this.contextMenuController;

        this.mapstats;
        this.dpstat;
        this.squadstat;

        this.wheelclick = false;
        this.wheelchoice = undefined;
        this.rdcounters = {};
        this.redfilters = {};

        this.greyfilters = {};

    }


    createContextMenu(player, lvlcontroller) {
        this.contextMenuController = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI4", true, this.scene);
        var image = BABYLON.GUI.Button.CreateImageOnlyButton("retreat", "images/common/retreat.png");
        image.width = "80px";
        image.height = "80px";
        image.linkOffsetX = -50;
        image.linkOffsetY = -150;


        this.contextMenuController.addControl(image)

        if (player.playerSkill.triggertype == "manual") {
            var image2 = BABYLON.GUI.Button.CreateImageOnlyButton("skill", player.playerSkill.skillimage);
            image2.width = "100px";
            image2.height = "100px";
            image2.linkOffsetX = 150;
            image2.linkOffsetY = 150;
            this.contextMenuController.addControl(image2)

            image2.linkWithMesh(player.mesh)
            image2.onPointerUpObservable.add(function () {
                if (player.playerSkill.currentsp >= player.playerSkill.totalsp) {
                    player.skillready.isVisible = false;
                    player.lvlcontroller.playSound(player.chara.name + "-skillact", player.chara.sfx.skillact.volume)
                    player.lvlcontroller.playSound(player.chara.name + "-skill", player.lvlcontroller.vcvolume)
                    player.playerSkill.activateDurationSkill([player])
                    player.createSkillAura(lvlcontroller.spriteManagers["skillaura"])
                }
                lvlcontroller.unzoom()
                //instance.contextMenuController.dispose();

            });
        }

        image.linkWithMesh(player.mesh)
        image.onPointerUpObservable.add(function () {
            lvlcontroller.retreatPlayer(player)
            lvlcontroller.unzoom()
            //instance.contextMenuController.dispose();

        });



    }

    addHPBar(mesh, color, offsetY, width) {
        var slider = new BABYLON.GUI.Slider();
        slider.minimum = 0;
        slider.maximum = 100;
        slider.value = 100;
        //slider.isThumbClamped = isClamped;
        //slider.isVertical = isVertical;
        slider.displayThumb = false;
        slider.height = "15px";
        slider.width = width;
        slider.linkOffsetY = offsetY + (15 * ((mesh.position.x / 30) / 8));
        slider.linkOffsetX = 30 - 20 * (1 - ((mesh.position.z / 30) / 13));

        slider.isEnabled = false;

        slider.color = color;
        slider.background = "transparent";


        this.statscontroller.addControl(slider)
        slider.linkWithMesh(mesh);

        return slider;

    }

    updateRedeployTimers(players, gamespeed) {
        var keys = Object.keys(this.rdcounters);
        for (let i = 0; i < keys.length; i++) {
            players[keys[i]].rdcounter -= 1 / gamespeed;
            this.rdcounters[keys[i]].text = Math.round(players[keys[i]].rdcounter / 30);
            if (players[keys[i]].rdcounter <= 0) {

                this.rdcounters[keys[i]].dispose();
                this.redfilters[keys[i]].dispose();
                delete this.rdcounters[keys[i]];
                delete this.redfilters[keys[i]];

            }
        }
    }

    //on donne la possibilité d'enlever l'écran de pause que quelque secondes après appuye de la touche echappe
    timerPauseActivate() {
        var instance = this
        setTimeout(() => {
            if (instance.showinggui)
                instance.timerPause = true
        }, 500)
    }

    canPauseActivate() {
        var instance = this
        setTimeout(() => {
            instance.canPause = true
        }, 500)
    }


    createLevelClearScreen(lvlcont) {
        setTimeout(() => {
            lvlcont.pauseGame()
        }, 300)
        lvlcont.playMissionClear()
        this.lvlcontroller.dispose();
        this.lvlcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, this.scene);
        this.showinggui = true;

        var container = new BABYLON.GUI.Rectangle();
        container.width = "100%";
        container.height = "30%";
        container.color = "black";
        container.background = "black";


        var msg = new BABYLON.GUI.TextBlock();
        msg.text = "MISSION\nACCOMPLISHED";
        msg.color = "white";
        msg.fontSize = "40%";

        container.addControl(msg)
        this.lvlcontroller.addControl(container);

    }

    createGameOverScreen(lvlcont) {
        setTimeout(() => {
            lvlcont.pauseGame()
        }, 300)
        lvlcont.playMissionFailed()
        this.lvlcontroller.dispose();
        this.lvlcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, this.scene);
        this.showinggui = true;

        var container = new BABYLON.GUI.Rectangle();
        container.width = "100%";
        container.height = "30%";
        container.color = "black";
        container.background = "black";


        var msg = new BABYLON.GUI.TextBlock();
        msg.text = "MISSION\nFAILED";
        msg.color = "white";
        msg.fontSize = "40%";

        container.addControl(msg)
        this.lvlcontroller.addControl(container);

    }

    createStatsUI(enemies, hp, lvlcontroller) {

        var image = new BABYLON.GUI.Image("lvlclear", "images/common/battlestats.png");
        image.width = "30%";
        image.height = "7%";
        image.top = "-46%"
        this.statscontroller.addControl(image);

        var label = new BABYLON.GUI.TextBlock();
        label.text = ".    " + enemies + "               " + hp;
        label.top = "-46%";
        label.fontSize = "5%";
        label.color = "white";
        this.mapstats = label;
        this.statscontroller.addControl(label);

        var container = new BABYLON.GUI.Rectangle();
        container.width = "7%";
        container.height = "12%";
        container.left = "-10%";
        container.color = "white";
        container.thickness = 3;
        container.background = "black";

        container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

        var speed = new BABYLON.GUI.TextBlock();
        speed.text = "1x";
        speed.color = "white";
        speed.fontSize = "60%";

        container.addControl(speed)

        this.statscontroller.addControl(container);
        container.onPointerDownObservable.add(() => {
            if (!(this.showinggui && !this.isPaused)) {
                if (!this.isPaused) {
                    if (speed.text == "1x") {
                        lvlcontroller.gamespeed = 1
                        speed.text = "2x"
                    }
                    else {
                        lvlcontroller.gamespeed = 2
                        speed.text = "1x"
                    }
                    lvlcontroller.updateSpeed()
                }
            }
        });

        var container2 = new BABYLON.GUI.Rectangle();
        container2.width = "7%";
        container2.height = "12%";
        container2.left = "-2%";
        container2.color = "white";
        container2.thickness = 3;
        container2.background = "black";

        container2.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        container2.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

        var pause = new BABYLON.GUI.TextBlock();
        pause.text = "❚❚";
        pause.color = "white";
        pause.fontSize = "60%";

        container2.addControl(pause)

        container2.onPointerDownObservable.add(() => {
            if (!(this.showinggui && !this.isPaused)) {
                if (!this.isPaused) {
                    pause.text = "▶";
                    this.createPauseScreen(lvlcontroller)
                }
                else {
                    pause.text = "❚❚";
                    this.removePauseScreen(lvlcontroller)
                }
            }
        });

        this.statscontroller.addControl(container2);



    }

    updateStatsUI(enemies, hp) {
        this.mapstats.text = ".    " + enemies + "               " + hp;
    }

    updatePlayerWheelUI(dp, squadlimit) {
        this.dpstat.text = dp;
        this.squadstat.text = "UNIT LIMIT : " + squadlimit
        var keys = Object.keys(this.greyfilters)
        for (let i = 0; i < keys.length; i++) {
            if (dp >= this.greyfilters[keys[i]].cost && squadlimit > 0)
                this.greyfilters[keys[i]].filter.dispose()
        }
    }

    createPlayerWheelUI(players, dp, squadlimit) {
        this.wheelController.dispose();
        this.wheelController = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI3", true, this.scene);

        var keys = Object.keys(players);
        keys.sort(function(x, y) {

            if (players[x].cost > players[y].cost) {
              return -1;
            }
            if (players[x].cost < players[y].cost) {
                return 1;
            }
            return 0;
          });
          
        for (let i = 0; i < keys.length; i++) {
            var container = new BABYLON.GUI.Rectangle();
            container.width = "6%"
            container.height = "12%";
            container.left = (i * -6) + "%";
            container.color = "White";
            container.thickness = 1;
            container.background = "transparent";
            var image = new BABYLON.GUI.Image("", players[keys[i]].opicon);

            var container2 = new BABYLON.GUI.Rectangle();
            container2.width = "80%";
            container2.height = "30%";
            container2.color = "black";
            container2.top = "-35%";
            container2.background = "black";

            var classicon = new BABYLON.GUI.Image("", players[keys[i]].classicon);
            classicon.width = "40%";
            classicon.left = "-25%";

            var dpcost = new BABYLON.GUI.TextBlock();
            dpcost.text = players[keys[i]].cost;
            dpcost.color = "white";
            dpcost.left = "25%";
            dpcost.fontSize = "80%";
            dpcost.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;

            container2.addControl(classicon);
            container2.addControl(dpcost);
            container.addControl(image);
            container.addControl(container2);

            if (players[keys[i]].cost > dp || squadlimit == 0) {
                var greyfilter = new BABYLON.GUI.Image("", "images/common/notavailable.png");
                this.greyfilters[keys[i]] = { "filter": greyfilter, "cost": players[keys[i]].cost }
                container.addControl(greyfilter);

            }

            if (players[keys[i]].rdcounter > 0) {
                var redfilter = new BABYLON.GUI.Image("", "images/common/rd.png");
                var timer = new BABYLON.GUI.TextBlock();
                timer.text = players[keys[i]].rdcounter;
                timer.color = "white";
                timer.fontSize = "40%";
                timer.top = "10%";
                this.redfilters[keys[i]] = redfilter;
                this.rdcounters[keys[i]] = timer;
                container.addControl(redfilter);
                container.addControl(timer)

            }


            container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;

            this.wheelController.addControl(container);
            var instance = this;
            container.onPointerDownObservable.add(() => {
                if (players[keys[i]].rdcounter <= 0) {
                    instance.wheelclick = true;
                    instance.wheelchoice = players[keys[i]]
                }
            });

        }

        var container3 = new BABYLON.GUI.Rectangle();
        container3.width = "8%";
        container3.height = "10%";
        container3.top = "-16%";
        container3.color = "black";
        container3.background = "black";

        var dpicon = new BABYLON.GUI.Image("", "images/common/dp.png");
        dpicon.width = "30%";
        dpicon.height = "50%";
        dpicon.left = "-25%";


        var currentdp = new BABYLON.GUI.TextBlock();
        currentdp.text = dp;
        currentdp.color = "white";
        currentdp.left = "20%";
        currentdp.fontSize = "60%";

        container3.addControl(currentdp)
        container3.addControl(dpicon)


        container3.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        container3.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;

        this.wheelController.addControl(container3);

        var sqdlimit = new BABYLON.GUI.Rectangle();
        sqdlimit.width = "12%";
        sqdlimit.height = "5%";
        sqdlimit.top = "-12%";
        sqdlimit.color = "black";
        sqdlimit.background = "black";

        var limitlbl = new BABYLON.GUI.TextBlock();
        limitlbl.text = "UNIT LIMIT : " + squadlimit;
        limitlbl.color = "white";
        limitlbl.fontSize = "70%";
        limitlbl.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;

        sqdlimit.addControl(limitlbl)

        sqdlimit.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        sqdlimit.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        this.wheelController.addControl(sqdlimit);

        this.dpstat = currentdp;
        this.squadstat = limitlbl;

    }

    createPauseScreen(lvlcont) {
        lvlcont.pauseGame()
        this.isPaused = true;
        this.lvlcontroller.dispose();
        this.lvlcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, this.scene);
        this.showinggui = true;

        this.timerPauseActivate()

        var greyfilter = new BABYLON.GUI.Image("", "images/common/notavailable.png");
        greyfilter.width = "100%"
        greyfilter.height = "100%"

        var label = new BABYLON.GUI.TextBlock();
        label.text = "PAUSED";
        label.fontSize = "20%";
        label.color = "white";
        this.lvlcontroller.addControl(greyfilter);

        this.lvlcontroller.addControl(label);

    }

    createTooltip(source, width, height) {
        this.lvlcontroller.dispose();
        this.lvlcontroller = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, this.scene);
        var image = new BABYLON.GUI.Image("tooltip", source);
        var panel = new BABYLON.GUI.StackPanel("panel");
        panel.top = "-350px;"

        this.lvlcontroller.addControl(panel);
        image.width = width;
        image.height = height;

        panel.addControl(image);
        setTimeout(this.removeTool, 8000, panel, image)
    }

    removeTool(panel, image) {
        panel.removeControl(image)
    }

    removePauseScreen(lvlcont) {
        this.showinggui = false;
        this.timerPause = false;
        this.lvlcontroller.dispose()
        this.canPause = false;
        this.canPauseActivate()
        this.isPaused = false;
        lvlcont.resumeGame()
    }
}
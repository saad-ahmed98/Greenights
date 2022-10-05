class LVLController extends LVLAbstract {
    constructor(gameconfig, enemylist, playerlist, lvl) {
        titleLoading = lvl.name
        lvlnumber = lvl.level
        backgroundimg = "images/background/" + lvl.background + ".png"
        super(gameconfig, "lvl1");

        this.layout = lvl.layout

        this.bgm = lvl.bgm

        this.matrix;
        this.maptimer = 0;
        this.waves = lvl.waves;

        this.enemylist = enemylist;
        this.playerlist = playerlist;

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
        this.spcheck = 0;

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

    }

    createGUIs() {
        this.gui.createStatsUI(this.enemycount + "/" + this.enemytot, this.gameconfig.stats.hp, this);

        this.gui.createPlayerWheelUI(this.playerlist, this.currentdp, this.squadlimit);
    }

    createSpriteManagers() {
        var keys = Object.keys(this.enemylist);
        for (let i = 0; i < keys.length; i++) {
            if (this.appearingenemies.includes(keys[i]))
                this.spriteManagers[keys[i]] = new BABYLON.SpriteManager(keys[i] + "Manager", this.enemylist[keys[i]].spritesheet, 60, { width: 888, height: 605 });
        }


        keys = Object.keys(this.playerlist);
        for (let i = 0; i < keys.length; i++)
            this.spriteManagers[keys[i]] = new BABYLON.SpriteManager(keys[i] + "Manager", this.playerlist[keys[i]].spritesheet, 30, { width: 888, height: 605 });

        this.spriteManagers["shadow"] = new BABYLON.SpriteManager("ShadowManager", "images/common/shadow.png", 90, { width: 888, height: 605 });
        this.spriteManagers["skillaura"] = new BABYLON.SpriteManager("AuraManager", "images/common/aura-sheet.png", 90, { width: 886, height: 604 });
        this.spriteManagers["skillready"] = new BABYLON.SpriteManager("SkillManager", "images/common/skillready.png", 120, { width: 888, height: 605 });
        this.spriteManagers["alertbuff"] = new BABYLON.SpriteManager("SkillManager", "images/common/alertbuff.png", 30, { width: 888, height: 605 });

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
            this.spcheck += 1 / this.gamespeed;
            if (!this.isSpawning)
                this.spawnEnemies();
        }
        if (this.spcheck >= 30) {
            this.checkPlayersSkill();
            this.spcheck = 0;
        }
        if (this.dptimer >= 30) {
            this.currentdp = Math.min(this.currentdp + 1, this.dplimit);
            this.dptimer = 0;
            this.gui.updatePlayerWheelUI(this.currentdp, this.squadlimit)
        }
        if (this.gameconfig.stats.hp <= 0) {
            if (!this.gui.showinggui)
                this.gui.createGameOverScreen(this)
        }
        if (this.enemycount >= this.enemytot) {
            if (!this.gui.showinggui)
                this.gui.createLevelClearScreen(this)
        }

        //this.playBGM(0.3);
    }

    loadAssets() {
        //this.loadPlayer();
        this.loadSounds();
        this.loadSprites();

        //this.loadBuildings();
        //this.loadSkybox("images/LVL1/skybox.jpg");
    }

    loadSounds() {
        super.loadSounds()
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


    checkEnemies() {
        for (let i = 0; i < this.enemies.length; i++) {
            if (this.enemies[i].finish) {
                this.playSound("alarmenter", 0.3)
                this.gameconfig.stats.hp--;
                this.enemies.splice(i, 1)
                i--;
                this.enemycount++;
                this.gui.updateStatsUI(this.enemycount + "/" + this.enemytot, this.gameconfig.stats.hp);
            }
            else if (this.enemies[i].hp <= 0) {
                //this.enemies[i].sprite.dispose();
                this.enemies.splice(i, 1)
                i--;
                this.enemycount++;
                this.gui.updateStatsUI(this.enemycount + "/" + this.enemytot, this.gameconfig.stats.hp);
            }
        }
    }

    checkPlayerSkill(p) {
        if (!p.playerSkill.active && p.playerSkill.chargetype == "second") {
            p.playerSkill.currentsp = Math.min(p.playerSkill.currentsp + 1, p.playerSkill.totalsp);
            p.updateSkillBarCharging()
            if (p.playerSkill.currentsp >= p.playerSkill.totalsp && p.playerSkill.triggertype == "manual")
                p.skillready.isVisible = true;
            if (p.playerSkill.triggertype == "auto" && p.playerSkill.currentsp >= p.playerSkill.totalsp && p.playerSkill.duration > 0) {
                this.playSound(p.chara.name + "-skillact", p.chara.sfx.skillact.volume)
                this.playSound(p.chara.name + "-skill", this.vcvolume)
                p.playerSkill.activateDurationSkill([p], this)
                p.createSkillAura(this.spriteManagers["skillaura"])
            }
        }
        else if (p.playerSkill.active) {
            p.updateSkillBarTrigger()
            p.playerSkill.duration--;
            if (p.playerSkill.duration <= 0) {
                p.playerSkill.deactivateDurationSkill();
                p.aura.dispose();
            }
        }
    }

    checkPlayersSkill() {
        for (let i = 0; i < this.activePlayers.length; i++) {
            this.checkPlayerSkill(this.activePlayers[i])
        }

    }

    checkPlayers() {
        for (let i = 0; i < this.activePlayers.length; i++) {
            if (this.activePlayers[i].hp <= 0) {
                this.tiles[this.activePlayers[i].x][this.activePlayers[i].y].player = undefined;
                this.activePlayers[i].chara.cost = Math.min(this.activePlayers[i].chara.cost + Math.round(this.activePlayers[i].chara.cost * 0.5), this.activePlayers[i].chara.basecost * 2),

                    this.playerlist[this.activePlayers[i].chara.name] = this.activePlayers[i].chara
                this.activePlayers.splice(i, 1)
                i--;
                this.squadlimit++;
                this.gui.createPlayerWheelUI(this.playerlist, this.currentdp, this.squadlimit)
            }

        }
    }

    retreatPlayer(player) {
        this.playSound("retreat", 0.3)

        player.mesh.dispose()
        player.sprite.dispose()
        player.healthBar.dispose()
        player.skillBar.dispose()
        player.shadow.dispose()
        player.skillready.dispose()

        if (player.aura != undefined)
            player.aura.dispose();

        player.hp = -999;
        this.currentdp += Math.round(player.chara.cost / 2)

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

            var diff = current.subtract(startingPoint);
            currentMesh.position.addInPlace(diff);
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
                                        instance.playSound(instance.tiles[x][y].player.chara.name + "-select", instance.vcvolume)
                                        instance.displayRangeTiles(x, y, instance.tiles[x][y].player.chara.range)
                                        instance.createFocusCamera(x * 30, y * 30);

                                        instance.prevspeed = instance.gamespeed
                                        instance.gamespeed = 8
                                        instance.updateSpeed()

                                        currentTile = instance.tiles[x][y];
                                        instance.gui.createContextMenu(instance.tiles[x][y].player, instance);
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
                                if (instance.tiles[tilex][tiley].player == undefined && instance.tiles[tilex][tiley].type == instance.gui.wheelchoice.type) {
                                    instance.createPlayer(instance.gui.wheelchoice.name, tilex, tiley);
                                    delete instance.playerlist[instance.gui.wheelchoice.name]
                                    instance.currentdp -= instance.gui.wheelchoice.cost
                                    instance.squadlimit--;
                                    instance.gui.createPlayerWheelUI(instance.playerlist, instance.currentdp, instance.squadlimit)
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
                            pointerMove();
                        }
                        break;
                }
            }
        });

    }

    displayAvailableTiles(type) {
        for (let i = 0; i < this.tiles.length; i++) {
            for (let j = 0; j < this.tiles[i].length; j++) {
                if (this.tiles[i][j].type == type)
                    this.tiles[i][j].displayDeployable()
            }
        }
    }

    displayRangeTiles(x, y, range) {
        var squarerange = [[Math.max(x - range, 0), Math.min(x + range, this.tiles.length - 1)], [Math.max(y - range, 0), Math.min(y + range, this.tiles[0].length - 1)]];
        for (let i = squarerange[0][0]; i <= squarerange[0][1]; i++) {
            var counter = Math.abs(Math.abs(i - x) - range);
            for (let j = squarerange[1][0]; j <= squarerange[1][1]; j++) {
                if (Math.abs(j - y) <= counter)
                    this.tiles[i][j].displayRange()
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
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(250, 290, 180), this.scene); //updown,
        camera.alpha = -0.0034155996227517244
        camera.beta = 0.45497477002057213

        this.scene.activeCamera = camera;
    }

    createFocusCamera(x, z) {
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(x + 125, 250, z), this.scene);
        camera.alpha = -0.0034155996227517244
        camera.beta = 0.45497477002057213

        this.scene.activeCamera = camera;
    }

    createScene() {


        this.createObstacles();
        this.initDragNDrop();

        //this.createSpriteManagers();

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

        return this.scene;
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
                if (array[i][j] == "blue") {
                    this.hpbox.push(new HPBox("", i, j, this.scene))
                    type = "blk";
                }
                if (array[i][j] == "red") {
                    this.spawns.push(new EnemySpawn("", i, j, this.scene))
                    type = "blk";
                }
                var tile = new Tile(type, i, j, this.scene)
                linetiles.push(tile);
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
            case "r":
                return 1;
            default:
                return 0;
        }
    }

    createEnemy(e, start, checkpoints, id) {
        var enemy = new EnemyController(this.enemylist[e], this.scene, start[0], start[1], this, id);
        enemy.createEnemy(this.matrix, checkpoints, this.spriteManagers[e], this.gui, this.spriteManagers["shadow"]);
        enemy.gamespeed = this.gamespeed;
        this.enemies.push(enemy);
    }

    createPlayer(p, x, y) {
        this.playSound("deploy", 2)
        this.playSound(p + "-deploy", this.vcvolume)
        this.playerlist[p].rdcounter = this.playerlist[p].rdtimer * 30;
        var player = new PlayerController(this.playerlist[p], this.scene, x, y, this);
        this.tiles[x][y].player = player;
        player.createPlayer(player, this.spriteManagers[p], this.gui, this.spriteManagers["shadow"], this.spriteManagers["skillready"]);
        player.gamespeed = this.gamespeed;
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
                this.waves[i]["time"] += this.waves[i]["gap"];

                this.createEnemy(this.waves[i]["enemies"], this.waves[i]["start"], this.waves[i]["checkpoints"], "wave" + i + this.waves[i]["count"]);
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
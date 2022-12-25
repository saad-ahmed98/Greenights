class EnemyController extends CharaController {
    constructor(chara, scene, x, y, lvlcontroller, id) {
        super(chara, scene, x, y, lvlcontroller)

        //pattern to follow before reaching its goal
        this.pattern;
        //checkpoints to reach a point
        this.checkpoints;
        //point to reach
        this.currentpoint;
        this.id = id;
        this.lastpoint;

        this.finish = false;
        this.blocked = false;
        this.blockingplayer;
        this.attacking = false;
        this.waittimer = 0;
        this.wait = false;
        this.aura;
        if (this.chara.hasskill)
            this.playerSkill = new EnemySkill(chara.skill.name + id, chara.skill.triggertype, chara.skill.modifiers, chara.skill.aura, chara.skill.skilltype, chara.skill.target, chara.skill.auratype)

        this.buffs = new EnemyBuffs();

        this.spawning = false;
        this.invincible = false;
        this.invincibleaura;
        this.spattacktimer;
        this.skillBar;
        if (this.chara.hasspatk)
            this.spattacktimer = this.chara.spattack.initialsp
        this.stairs = false;

        this.speedoffsetX = 1;
        this.speedoffsetZ = 1;
    }

    //create invincibility aura if enemy can be invincible
    startInvincibility() {
        this.invincible = true;
        this.invincibleaura = new BABYLON.Sprite("", this.lvlcontroller.spriteManagers["skillaura"]);
        this.invincibleaura.position = new BABYLON.Vector3(this.sprite.position.x, this.sprite.position.y + 1, this.sprite.position.z);
        this.invincibleaura.size = 70 * this.chara.size;
        this.invincibleaura.width = 100 * this.chara.size;
        this.invincibleaura.playAnimation(4, 7, true, 30 * this.gamespeed);

    }

    //update invincibility timer, if timer is zero then remove it, and remove the aura
    updateInvincibility() {
        this.chara.invincible -= (1 / 30) / this.gamespeed;
        if (this.chara.invincible <= 0) {
            this.invincible = false;
            this.invincibleaura.dispose()
        }
    }

    //create buff icon depending on buff type
    createBuffAura(bufftype) {
        this.aura = new BABYLON.Sprite("", this.lvlcontroller.spriteManagers["icons"]);
        this.aura.position = new BABYLON.Vector3(this.sprite.position.x, this.sprite.position.y + 1, this.sprite.position.z);
        this.aura.cellIndex = bufftype
        this.aura.size = 65;
        this.aura.width = 90;

        // this.aura.position.z -= (8 - (this.mesh.position.z / 30));
        //this.aura.position.x -= (13 - (this.mesh.position.x / 30));


    }

    //update speed if game speed changes
    updateSpeed(gamespeed, pause) {
        this.gamespeed = gamespeed;
        var x = this.sprite.cellIndex;

        var keys = ["move", "atkanim", "death", "idle", "start", "spatk"]
        for (let i = 0; i < keys.length; i++) {
            if (this.chara[keys[i]] != undefined) {
                if (x <= this.chara[keys[i]].end && x >= this.chara[keys[i]].start) {
                    var duration = this.chara[keys[i]].duration
                    var delay = 30 * this.gamespeed * duration
                    if (keys[i] == "move") {
                        delay = 30 * this.gamespeed * duration
                        //this.running = false
                    }
                    if (keys[i] == "atkanim") {
                        delay = 30 * this.gamespeed * this.buffs.getFinalAtkInterval(duration)
                        this.sprite.playAnimation(x, this.chara.atkanim.end, false, delay);
                    }
                    if (keys[i] == "start")
                        this.sprite.playAnimation(x, this.chara.start.end, false, delay);
                    if (keys[i] == "spatk")
                        this.sprite.playAnimation(x, this.chara.spatk.end, false, delay);

                    else this.sprite.delay = delay
                }
            }
        }
        //if the game is paused, then don't let the animations play
        if (pause)
            this.sprite.stopAnimation()
    }

    angle(cx, cy, ex, ey) {
        var dy = ey - cy;
        var dx = ex - cx;
        var theta = Math.atan2(dy, dx); // range (-PI, PI]
        theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
        return theta;
    }

    //move the enemy across the map
    patrol() {

        if (!this.running) {
            var duration = this.chara.move.duration
            this.sprite.playAnimation(this.chara.move.start, this.chara.move.end, true, 30 * this.gamespeed * duration);
            this.running = true;
        }

        //move on x axis first to the current point x
        var xfound = false;
        var zfound = false;
        if (this.stairs && (Math.abs(this.mesh.position.x / 30 - this.currentpoint[1]) > 1 || Math.abs(this.mesh.position.z / 30 - this.currentpoint[0]) > 1)) {

            this.mesh.position.z = this.currentpoint[0] * 30
            this.sprite.position.z = this.currentpoint[0] * 30
            this.shadow.position.z = this.currentpoint[0] * 30
            this.mesh.position.x = this.currentpoint[1] * 30
            this.sprite.position.x = this.mesh.position.x + (-15 * this.chara.size)
            this.shadow.position.x = this.mesh.position.x + (-15 * this.chara.size)

            if (this.aura != undefined) {
                this.aura.position.z = this.currentpoint[0] * 30
                this.aura.position.x = this.mesh.position.x + (-15 * this.chara.size)

            }
            var keys = Object.keys(this.buffs.effectSprite)
            for (let i = 0; i < keys.length; i++) {
                this.buffs.effectSprite[keys[i]].position.z = this.currentpoint[0] * 30
                this.buffs.effectSprite[keys[i]].position.x = this.mesh.position.x + (-15 * this.chara.size)

            }
            if (this.invincibleaura != undefined) {
                this.invincibleaura.position.z = this.currentpoint[0] * 30
                this.invincibleaura.position.x = this.mesh.position.x + (-15 * this.chara.size)
            }
            if (this.stairs)
                this.unhideInStairs();

            if (this.checkpoints.path.length > 0) {
                this.lastpoint = this.currentpoint;
                this.currentpoint = this.checkpoints.path.shift();
            }
            else {
                //if there isn't any left, wait
                this.wait = true;
            }
        }
        else {
            if (this.mesh.position.x <= this.currentpoint[1] * 30 + 1 && this.mesh.position.x >= this.currentpoint[1] * 30 - 1)
                xfound = true;
            if (this.mesh.position.z <= this.currentpoint[0] * 30 + 1 && this.mesh.position.z >= this.currentpoint[0] * 30 - 1)
                zfound = true;
            if (!xfound && !zfound) {
                this.speedoffsetZ = 2 / 3
                this.speedoffsetX = 2 / 3
            }
            else {
                this.speedoffsetX = 1
                this.speedoffsetZ = 1
            }
            if (!xfound) {
                var dir = 1;
                if (this.mesh.position.x > this.currentpoint[1] * 30)
                    dir = -1;
                let distance = ((this.buffs.getFinalSpeed(this.chara.speed * this.speedoffsetX) * dir) / this.gamespeed);
                this.mesh.position.x += distance
                this.sprite.position.x += distance
                this.shadow.position.x += distance
                if (this.aura != undefined)
                    this.aura.position.x += distance
                var keys = Object.keys(this.buffs.effectSprite)
                for (let i = 0; i < keys.length; i++)
                    this.buffs.effectSprite[keys[i]].position.x += distance

                if (this.invincibleaura != undefined)
                    this.invincibleaura.position.x += distance

            }
            //if x found then move on the y axis to the current pooint z
            if (!zfound) {
                var dir = 1;
                if (this.mesh.position.z > this.currentpoint[0] * 30) {
                    this.sprite.invertU = 1;
                    dir = -1;
                }
                else this.sprite.invertU = 0;
                let distance = ((this.buffs.getFinalSpeed(this.chara.speed * this.speedoffsetZ) * dir) / this.gamespeed);
                this.mesh.position.z += distance
                this.sprite.position.z += distance
                this.shadow.position.z += distance

                if (this.aura != undefined)
                    this.aura.position.z += distance
                var keys = Object.keys(this.buffs.effectSprite)
                for (let i = 0; i < keys.length; i++)
                    this.buffs.effectSprite[keys[i]].position.z += distance
                if (this.invincibleaura != undefined)
                    this.invincibleaura.position.z += distance

            }
            if (zfound && xfound) {
                //if reached, then get the next point of the checkpoint path
                if (this.checkpoints.path.length > 0) {
                    this.lastpoint = this.currentpoint;
                    this.currentpoint = this.checkpoints.path.shift();
                }
                else {
                    //if there isn't any left, wait
                    this.wait = true;
                }
                this.sprite.position.x -= Math.round(this.mesh.position.x / 30) / 40;
                this.sprite.position.z -= Math.round(this.mesh.position.z / 30) / 40;

                this.shadow.position.x -= Math.round(this.mesh.position.x / 30) / 40;
                this.shadow.position.z -= Math.round(this.mesh.position.z / 30) / 40;

                if (this.aura != undefined) {
                    this.aura.position.x -= Math.round(this.mesh.position.x / 30) / 40;
                    this.aura.position.z -= Math.round(this.mesh.position.z / 30) / 40;
                }
                var keys = Object.keys(this.buffs.effectSprite)
                for (let i = 0; i < keys.length; i++) {
                    this.buffs.effectSprite[keys[i]].position.x -= Math.round(this.mesh.position.x / 30) / 40;
                    this.buffs.effectSprite[keys[i]].position.z -= Math.round(this.mesh.position.z / 30) / 40;
                }
                if (this.invincibleaura != undefined) {
                    this.invincibleaura.position.x -= Math.round(this.mesh.position.x / 30) / 40;
                    this.invincibleaura.position.z -= Math.round(this.mesh.position.z / 30) / 40;
                }
            }
        }

    }

    //update hp bar, if hp max then hide the hp bar
    updateHpBar() {
        super.updateHpBar()
        if (this.hp == this.maxhp) {
            this.healthBar.isVisible = false;
            this.healthBarBackground.isVisible = false;
        }
        else {
            this.healthBar.isVisible = true;
            this.healthBarBackground.isVisible = true;
        }
        this.healthBar.linkOffsetX = -10 + this.mesh.position.z / 30
        this.healthBarBackground.linkOffsetX = -10 + this.mesh.position.z / 30;

        if (this.spattacktimer != undefined) {
            this.skillBar.value = this.spattacktimer / this.chara.spattack.sp * 100;
            this.skillBar.linkOffsetX = -10 + this.mesh.position.z / 30
        }

    }

    //create enemy
    //matrix is the matrix of the map that defines which tiles can be passed through or not for the pathfinding of the enemy,
    //points are the checkpoints the enemy has to pass through,
    //spritemanager contains the sprites of the enemy,
    //gui is the gui of the level,
    //iconsmanager contains the icon sprites
    createEnemy(matrix, points, spriteManager, gui, iconsmanager, invertU) {
        this.mesh = this.scene.assets.meshchara.createInstance(this.id)

        this.shadow = new BABYLON.Sprite(this.id + "shadow", iconsmanager);
        this.shadow.isVisible = false;
        setTimeout(() => this.shadow.isVisible = true, 10)

        this.shadow.size = 65 * this.chara.size;

        this.shadow.width = 90 * this.chara.size;

        this.shadow.position = new BABYLON.Vector3((-15 * this.chara.size) + this.x * 30, 19, this.y * 30);
        if (this.chara.name == "Originium Slug") {
            this.shadow.size = 70
            this.shadow.position.x = -16 + this.x * 30
        }

        var player0 = new BABYLON.Sprite(this.id, spriteManager[this.chara.spritesheet]);
        player0.isVisible = false
        setTimeout(() => player0.isVisible = true, 10)
        player0.position = new BABYLON.Vector3((-15 * this.chara.size) + this.x * 30, 20, this.y * 30);
        player0.size = 65 * this.chara.size;
        player0.width = 90 * this.chara.size;
        this.sprite = player0;

        this.sprite.invertU = invertU;

        this.mesh.position.z = 0 + this.y * 30;
        this.mesh.position.x = 0 + this.x * 30;
        this.mesh.position.y = 0;
        //this.mesh.visibility = 0;

        //activate starting talents
        this.startingTalents()

        //create pathfinding route
        this.pattern = this.createPathfinding(points, matrix);
        this.checkpoints = this.pattern.shift();
        this.currentpoint = this.checkpoints.path.shift();
        this.lastpoint = this.currentpoint;


        //create hp bar
        this.addHPBar(gui);
        //this.addParticleEffects()

        //TODO HARD CODED BAD
        if (this.chara.name == "Patriot" || this.chara.name == "PatriotEX") {
            this.buffs.buffs["patriottaunt"] = { "name": "patriottaunt", "modifiers": { "taunt": 2, "attacks": 3 } }
        }
        if (this.chara.name == "Mephisto" || this.chara.name == "MephistoEX") {
            this.buffs.buffs["mephistotaunt"] = { "name": "mephistotaunt", "modifiers": { "taunt": -1 } }
        }
    }

    //skills and talents activating as soon as the enemy spawns
    startingTalents() {

        //if enemy has starting animation
        if (this.chara.start != undefined) {
            this.spawning = true;
            this.sprite.playAnimation(this.chara.start.start, this.chara.start.end, false, this.gamespeed * 30 * this.chara.start.duration);

            if (this.chara.sfx.start != undefined) {
                this.lvlcontroller.playSound(this.chara.name + "-start", this.chara.sfx.start.volume)
            }
            var instance = this;
            //do chain of animations if has multiple
            //TODO clean up
            var interval = setInterval(() => {
                if (instance.chara.sfx.start2 != undefined) {
                    if (instance.sprite.cellIndex == instance.chara.sfx.start2.sprite && !instance.chara.sfx.start2.playing) {
                        instance.chara.sfx.start2.playing = true;
                        instance.lvlcontroller.playSound(instance.chara.name + "-start2", this.chara.sfx.start2.volume)
                    }
                }
                if (instance.chara.sfx.start3 != undefined) {
                    if (instance.sprite.cellIndex == instance.chara.sfx.start3.sprite && !instance.chara.sfx.start3.playing) {
                        instance.chara.sfx.start3.playing = true;
                        instance.lvlcontroller.playSound(instance.chara.name + "-start3", this.chara.sfx.start3.volume)
                    }
                }
                if (instance.sprite.cellIndex == instance.chara.start.end) {
                    if (instance.chara.name == "Frostnova2" || instance.chara.name == "FrostnovaEX2") {
                        instance.lvlcontroller.activateAltars()
                    }

                    instance.spawning = false;
                    if (instance.chara.invincible != undefined) {
                        instance.startInvincibility()
                        instance.invincible = true;
                    }
                    clearInterval(interval);
                }
            }, 1);
        }
        //if has skill that activates on spawn, activate
        if (this.playerSkill != undefined) {
            if (this.playerSkill.triggertype == "on_start") {
                if (this.playerSkill.targettype == "all") {
                    this.playerSkill.activateSkill(this.lvlcontroller.enemies)
                    this.playerSkill.activateSkill([this], true)
                }
                else this.playerSkill.activateSkill([this])
            }
        }
    }

    //creates pathfinding
    createPathfinding(points, matrix) {
        var checks = [];
        for (let i = 0; i < points.length; i++) {
            var grid = new PF.Grid(matrix);
            var finder = new PF.AStarFinder({
                allowDiagonal: true,
                dontCrossCorners: true
            });

            var path = finder.findPath(points[i].start[1], points[i].start[0], points[i].end[1], points[i].end[0], grid);
            checks.push({ "path": path, "pause": points[i].pause });
        }
        return checks;
    }

    //attack a player if available
    attack(players) {
        var player = [];
        if (this.chara.dmgtype == "heal")
            player = this.getLowestHpPlayerInRange(this.lvlcontroller.enemies, this.buffs.getFinalRange(this.chara.range), this.chara.targets + this.buffs.getTargets());
        else {
            if (!this.blocked && this.chara.range != 0) {
                player = this.getFirstPlayerInRange(players, this.chara.range, this.chara.targets + this.buffs.getTargets());
            }
            else {
                if (this.blocked)
                    player = this.getFirstPlayerInRange(players, 0, this.chara.targets + this.buffs.getTargets())
            }
        }
        //if player found
        if (player.length > 0) {
            if (this.playerSkill != undefined) {
                if (this.playerSkill.triggertype == "on_attack") {
                    this.playerSkill.activateSkill([this])
                    this.activateSkillAnims()

                }
            }
            //turn towards the player to hit
            if (player[0].mesh.position.z <= this.mesh.position.z)
                this.sprite.invertU = 1
            else this.sprite.invertU = 0;
            if (this.running) {
                this.sprite.playAnimation(this.chara.idle.start, this.chara.idle.end, true, 30 * this.gamespeed * this.chara.idle.duration);
                this.running = false;
            }
            var instance = this
            if (this.chara.sfx.atk != undefined) {
                //dog rawr spam prevention
                if (Math.random() < 0.20 || this.chara.sfx.atk.src != "dog-atk")
                    this.lvlcontroller.playSound(this.chara.name + "-atk", this.chara.sfx.atk.volume)
            }
            if (this.chara.hasatkanim != undefined) {
                if (this.hp > 0) {
                    for (let i = 0; i < player.length; i++) {
                        if (instance.chara.dmgtype == "heal") {
                            if (player[i].hp > 0)
                                player[i].receiveHealing(instance);
                        }
                        else {
                            for (let j = 0; j < this.buffs.getAttacks(); j++) {
                                if (this.chara.bullet != undefined) {
                                    new Bullet(this, this.scene, player[i], this.lvlcontroller)
                                }
                                else player[i].receiveDamage(instance)
                            }
                        }
                    }
                }
            }
            else {
                this.sprite.playAnimation(this.chara.atkanim.start, this.chara.atkanim.end, false, 30 * this.gamespeed * this.buffs.getFinalAtkInterval(this.chara.atkanim.duration));

                var interval1 = setInterval(() => {
                    if (instance.sprite.cellIndex >= instance.chara.atkanim.contact && instance.hp > 0) {
                        if (this.spattacktimer != undefined && this.chara.spattack.chargetype == "attack")
                            this.spattacktimer += 1;
                        for (let i = 0; i < player.length; i++) {
                            if (instance.chara.dmgtype == "heal")
                                player[i].receiveHealing(instance);
                            else {
                                if (this.chara.splash == undefined) {
                                    for (let j = 0; j < this.buffs.getAttacks(); j++) {
                                        if (this.chara.bullet != undefined) {
                                            new Bullet(this, this.scene, player[i], this.lvlcontroller)
                                        }
                                        else player[i].receiveDamage(instance)
                                    }
                                }
                                else {
                                    let splashenemies = this.getSplashPlayersInRange(players, player[i], this.chara.splash)
                                    for (let j = 0; j < splashenemies.length; j++){
                                        splashenemies[j].receiveDamage(instance,false,this.chara.splashdmg)
                                    }
                                    player[i].receiveDamage(instance)
                                }
                            }
                        }
                        if (this.chara.sfx.hit != undefined && this.chara.bullet == undefined)
                            this.lvlcontroller.playSound(this.chara.name + "-hit", this.chara.sfx.hit.volume)
                        clearInterval(interval1);

                    }
                }, 1);

                //stay idle while waiting to be able to attack again
                var interval2 = setInterval(() => {
                    if (instance.sprite.cellIndex == instance.chara.atkanim.end && instance.hp > 0) {
                        this.sprite.playAnimation(this.chara.idle.start, this.chara.idle.end, true, 30 * this.gamespeed * this.chara.idle.duration);
                        this.attacking = false;
                        clearInterval(interval2);
                    }
                }, 1);
                return true;
            }
        }
        return false;
    }

    //receive damage, attackingplayer can be a hazard
    //mod, dmtype and bombeffects are for skillbombs
    receiveDamage(attackingplayer, hazard = false, mod = 1, dmtype = "", bombeffects) {

        var dmg;
        var dmgtype;

        if (!hazard) {
            let ef = attackingplayer.buffs.applyeffects
            if (bombeffects)
                ef = bombeffects
            var keys = Object.keys(ef)
            for (let i = 0; i < keys.length; i++) {
                if (ef[keys[i]].apply == "hit") {
                    this.buffs.effects[keys[i]] = ef[keys[i]].duration
                    this.buffs.buffs[keys[i]] = { "name": keys[i], "modifiers": ef[keys[i]].modifiers }
                    if (ef[keys[i]].effecticon != undefined && this.buffs.effectSprite[keys[i]] == undefined)
                        this.createDebuffAura(keys[i], ef[keys[i]].effecticon)
                    this.applySpecialEffect(ef[keys[i]].modifiers, this)
                }
            }
            var dmgmodifier = mod;

            //if attackingplayer can activate a on trigger dmg up skill, activate it 
            if (attackingplayer.playerSkill.chargetype == "attack" && attackingplayer.playerSkill.triggertype == "auto" && attackingplayer.playerSkill.currentsp >= attackingplayer.playerSkill.totalsp) {

                dmgmodifier *= attackingplayer.playerSkill.activateDmgUpSkill();
                attackingplayer.playerSkill.applyHitEffects(this.buffs, this)
            }

            var critmod = attackingplayer.buffs.getCritModifier()
            if (critmod != 1) {
                for (let i = 0; i < keys.length; i++) {
                    if (ef[keys[i]].apply == "crit") {
                        this.buffs.effects[keys[i]] = ef[keys[i]].duration
                        this.buffs.buffs[keys[i]] = { "name": keys[i], "modifiers": ef[keys[i]].modifiers }
                        if (ef[keys[i]].effecticon != undefined && this.buffs.effectSprite[keys[i]] == undefined)
                            this.createDebuffAura(keys[i], ef[keys[i]].effecticon)
                    }
                }
            }
            dmgmodifier *= critmod;

            var dmgpen = 0;

            //if attackingplayer is of lord subclass that is blocking, and has the trait dmg pen active, decrease the damage
            if (attackingplayer.chara.subclass = "lord" && attackingplayer.buffs.getDmgPen() && attackingplayer.blocking == 0)
                dmgpen = 0.2;

            dmg = attackingplayer.buffs.getFinalAtk(attackingplayer.chara.atk - (attackingplayer.chara.atk * dmgpen)) * dmgmodifier
            dmgtype = attackingplayer.buffs.getDmgType()
            if (dmgtype == "" || dmgtype == "heal")
                dmgtype = attackingplayer.chara.dmgtype
        }

        //if hazard, then dmg is true
        else {
            dmg = attackingplayer.dmg
            dmgtype = "true"
        }

        if (dmtype != "")
            dmgtype = dmtype;

        var dmgreceived;

        switch (dmgtype) {
            case "physical":
                dmgreceived = Math.max(dmg * 0.05, dmg - this.buffs.getFinalDef(this.chara.def))
                break;
            case "magic":
                dmgreceived = Math.max(dmg * 0.10, (dmg + attackingplayer.buffs.getBonusDefDmg(this.chara.def)) * ((100 - this.buffs.getFinalRes(this.chara.res)) / 100))
                break;
            case "true":
                dmgreceived = dmg;
                break;
        }
        this.hp -= dmgreceived
        this.sprite.color.r = 10
        this.sprite.color.g = 0
        this.sprite.color.b = 0

        setTimeout(() => {
            if (!this.dead) {
                this.sprite.color.r = 1
                this.sprite.color.g = 1
                this.sprite.color.b = 1
            }

        }
            , 100)

        //update hp bar after receiving damage
        this.updateHpBar();

        //if enemy has a on hit skill, activate it
        if (this.chara.hasskill && !this.playerSkill.active) {
            if (this.playerSkill.triggertype == "on_hit") {
                this.activateSkillAnims()
                if (this.playerSkill.targettype == "all")
                    this.playerSkill.activateSkill(this.lvlcontroller.enemies)
                else this.playerSkill.activateSkill([this])
            }
        }

        //if dead
        if (this.hp <= 0) {
            if (!this.dead) {
                //add dp to the lvl dp counter if possible
                if (!hazard) {
                    if (attackingplayer.condtalent != undefined) {
                        if (attackingplayer.condtalent.condition == "kill")
                            attackingplayer.checkConditionTalent();
                    }
                    this.lvlcontroller.currentdp += attackingplayer.buffs.getDpOnKill();
                    this.lvlcontroller.gui.updatePlayerWheelUI(this.lvlcontroller.currentdp, this.lvlcontroller.squadlimit)
                }
            }
            var keys = Object.keys(this.buffs.effectSprite)
            for (let i = 0; i < keys.length; i++)
                this.buffs.effectSprite[keys[i]].dispose()
        }
    }

    activateDeath() {
        if (!this.dead) {
            this.dead = true;
            //remove the elements on the scene
            if (this.aura != undefined)
                this.aura.dispose()
            var keys = Object.keys(this.buffs.effectSprite)
            for (let i = 0; i < keys.length; i++)
                this.buffs.effectSprite[keys[i]].dispose()
            if (this.chara.revive != true) {
                this.mesh.dispose(true, true)

                this.healthBar.dispose()
                this.healthBarBackground.dispose()

                if (this.skillBar != undefined)
                    this.skillBar.dispose();
                this.sprite.stopAnimation();
                this.sprite.color.r = 1
                this.sprite.color.g = 1
                this.sprite.color.b = 1

                var darkening = 1 / (this.chara.death.end - this.chara.death.start) / 2.5
                this.sprite.playAnimation(this.chara.death.start, this.chara.death.end, false, 30 * Math.min(2, this.gamespeed) * (this.chara.death.duration));
                var instance = this
                let interval = setInterval(() => {
                    this.sprite.color.r -= darkening / this.gamespeed
                    this.sprite.color.g -= darkening / this.gamespeed
                    this.sprite.color.b -= darkening / this.gamespeed
                    if (instance.sprite.cellIndex == instance.chara.death.end) {
                        if (this.playerSkill != undefined) {
                            if (this.playerSkill.triggertype == "on_death" && !this.buffs.isSilenced()) {
                                instance.createEffects(instance.lvlcontroller.spriteManagers["boom"])
                                instance.lvlcontroller.playSound(instance.chara.name + "-skillbomb", instance.chara.sfx.skillbomb.volume)
                                instance.playerSkill.activateSkillBomb(instance, instance.lvlcontroller);
                            }
                        }
                        instance.shadow.dispose()
                        instance.sprite.dispose()
                        clearInterval(interval);
                    }
                }, 1);
                this.hp = -999
            }
            //if enemy can revive, activate revival
            else {
                if (this.chara.revival1 != undefined) {
                    this.sprite.playAnimation(this.chara.revival1.start, this.chara.revival1.end, false, 30 * this.gamespeed * (this.chara.revival1.duration));
                    this.lvlcontroller.playSound(this.chara.name + "-revival", this.chara.sfx.revival.volume)
                    var instance = this
                    //execute first revival animation
                    let interval = setInterval(() => {
                        if (instance.sprite.cellIndex == instance.chara.revival1.end) {
                            //execute revival loop after first revival animation is over
                            instance.sprite.playAnimation(this.chara.revival2.start, this.chara.revival2.end, true, 30 * this.gamespeed * (this.chara.revival2.duration));
                            clearInterval(interval);
                        }
                    }, 1);
                }
            }

            //if was blocked, remove itself from block count of blocking player
            if (this.blockingplayer != undefined) {
                this.blockingplayer.blocking = Math.max(this.blockingplayer.blocking - this.chara.blockcount, 0);
                this.blockingplayer.removeBlocked(this.id)
            }
        }
    }

    //if in a stairs tile, render the enemy invisible
    hideInStairs() {
        this.sprite.isVisible = false
        this.shadow.isVisible = false

        if (this.aura != undefined)
            this.aura.isVisible = false

        var keys = Object.keys(this.buffs.effectSprite)
        for (let i = 0; i < keys.length; i++)
            this.buffs.effectSprite[keys[i]].isVisible = false

        if (this.invincibleaura != undefined)
            this.invincibleaura.isVisible = false
        this.stairs = true;
        this.healthBar.isVisible = false
        this.healthBarBackground.isVisible = false

        if (this.spattacktimer != undefined)
            this.skillBar.isVisible = false
    }

    //if it's time to reappear from stairs, render the enemy visible again
    unhideInStairs() {
        this.sprite.isVisible = true
        this.shadow.isVisible = true

        if (this.aura != undefined)
            this.aura.isVisible = true

        var keys = Object.keys(this.buffs.effectSprite)
        for (let i = 0; i < keys.length; i++)
            this.buffs.effectSprite[keys[i]].isVisible = true

        if (this.invincibleaura != undefined)
            this.invincibleaura.isVisible = true
        this.stairs = false;
        this.healthBar.isVisible = true
        this.healthBarBackground.isVisible = true

        if (this.spattacktimer != undefined)
            this.skillBar.isVisible = true

    }

    //sort the targets list to fit the special atk targeting priorities
    sortBySpAtkPriority(targets) {
        switch (this.chara.spattack.target) {
            case "highestatk":
                //sort by highest ATK
                targets.sort(function (x, y) {
                    if (x.buffs.getFinalAtk(x.chara.atk) < y.buffs.getFinalAtk(y.chara.atk)) {
                        return -1;
                    }
                    if (x.buffs.getFinalAtk(x.chara.atk) > y.buffs.getFinalAtk(y.chara.atk)) {
                        return 1;
                    }
                    return 0;
                });
                break;
            case "farthest":
                var instance = this;
                targets.sort(function (x, y) {
                    if (instance.getDistanceFromPlayer(x) < instance.getDistanceFromPlayer(y)) {
                        return -1;
                    }
                    if (instance.getDistanceFromPlayer(x) > instance.getDistanceFromPlayer(y)) {
                        return 1;
                    }
                    return 0;
                });
                break;
            case "allblocking":
                var instance = this;
                targets.sort(function (x, y) {
                    if (instance.blockingplayer != undefined) {
                        if (instance.blockingplayer.chara.name == x.chara.name) {
                            return 1;
                        }
                        if (instance.blockingplayer.chara.name == y.chara.name) {
                            return -1;
                        }
                    }
                    return 0;
                });
                break;
        }
    }

    //activate special skills if any
    activateSpSkill(playerz) {
        var targets = []
        for (let i = 0; i < playerz.length; i++)
            targets.push(playerz[i])
        this.sortBySpAtkPriority(targets)
        if (this.chara.spattack.target == "farthest")
            targets = targets.filter(player => player.chara.type == "r");

        var players = this.getFirstPlayerInRange(targets, this.chara.spattack.range, this.chara.spattack.targets || this.chara.targets + this.buffs.getTargets())
        for (let i = 0; i < players.length; i++) {
            if (players[i].buffs.effects[this.chara.spattack.name] != undefined) {
                players.splice(i, 1)
                i--
            }
        }
        if (players.length > 0) {
            //turn towards the player to hit
            if (players[0].mesh.position.z <= this.mesh.position.z)
                this.sprite.invertU = 1
            else this.sprite.invertU = 0;
            this.running = false;
            this.attacking = true;
            this.sprite.playAnimation(this.chara.spatk.start, this.chara.spatk.end, false, 30 * this.gamespeed * (this.chara.spatk.duration));
            this.lvlcontroller.playSound(this.chara.name + "-spatk", this.chara.sfx.spatk.volume)

            var instance = this;
            let applied = false;
            var interval = setInterval(() => {
                if (instance.sprite.cellIndex == instance.chara.spattack.effectcontact && !applied) {
                    applied = true;
                    for (let i = 0; i < players.length; i++) {
                        players[i].buffs.buffs[this.chara.spattack.name] = { "name": this.name, "modifiers": this.chara.spattack.applyeffects.modifiers }
                        players[i].buffs.effects[this.chara.spattack.name] = this.chara.spattack.applyeffects.duration
                        if (players[i].buffs.effectSprite[this.chara.spattack.name] == undefined && this.chara.spattack.applyeffects.effecticon != undefined)
                            players[i].createDebuffAura(this.chara.spattack.name, this.chara.spattack.applyeffects.effecticon)
                        this.applySpecialEffect(this.chara.spattack.applyeffects.modifiers, players[i])
                    }
                }
                if (instance.sprite.cellIndex == instance.chara.spatk.end) {
                    instance.sprite.playAnimation(instance.chara.idle.start, instance.chara.idle.end, true, 30 * this.gamespeed * instance.chara.idle.duration);
                    instance.attacking = false;
                    instance.spattacktimer = 0;
                    clearInterval(interval);
                }
            }, 1);


            if (this.chara.spattack.dmgmodifier != undefined) {
                var interval2 = setInterval(() => {
                    if (instance.sprite.cellIndex >= instance.chara.spatk.contact && instance.hp > 0) {
                        for (let i = 0; i < players.length; i++)
                            players[i].receiveDamage(instance, false, instance.chara.spattack.dmgmodifier)

                        instance.lvlcontroller.playSound(instance.chara.name + "-sphit", instance.chara.sfx.sphit.volume)
                        clearInterval(interval2);
                    }
                }, 1);
            }

        }
    }

    //if enemy has skill animations
    activateSkillAnims() {
        //activate skill activation animation, enemy can't act or move during the animation
        if (this.chara.skill.begin != undefined) {
            this.skillproc = true;
            this.sprite.playAnimation(this.chara.skill.begin.start, this.chara.skill.begin.end, false, 30 * this.gamespeed * (this.chara.skill.begin.duration));
            if (this.chara.sfx.skillact != undefined)
                this.lvlcontroller.playSound(this.chara.name + "-skillact", this.chara.sfx.skillact.volume)
            var instance = this;
            var timer = this.chara.skill.begin.end - this.chara.skill.begin.start + 2
            var interval = setInterval(() => {
                if (instance.sprite.cellIndex == instance.chara.skill.begin.end || timer <= 0) {
                    instance.skillproc = false;
                    instance.running = false;
                    clearInterval(interval);
                }
                timer--;
            }, 1);


        }

        //if on skill activation, animations change, then modify them
        if (this.chara.skill.idle != undefined)
            this.chara.idle = this.chara.skill.idle
        if (this.chara.skill.atkanim != undefined)
            this.chara.atkanim = this.chara.skill.atkanim
        if (this.chara.skill.move != undefined) {
            this.chara.move = this.chara.skill.move
            this.running = false;
        }
        if (this.chara.skill.death != undefined)
            this.chara.death = this.chara.skill.death

        this.attacking = false;

    }

    //create sp bar
    addHPBar(gui) {
        var offsetY = 10
        if (this.chara.type == "r")
            offsetY = -150
        this.healthBarBackground = gui.addBackgroundBar(this.mesh, "rgb(255, 153, 153)", offsetY, "3%");
        this.healthBarBackground.isVisible = false
        this.healthBar = gui.addHPBar(this.mesh, "red", offsetY, "3%");
        this.healthBar.isVisible = false;
        if (this.spattacktimer != undefined) {
            this.addSPBar(gui)
        }
    }
    addSPBar(gui) {
        this.skillBar = gui.addHPBar(this.mesh, "yellow", 15, "3%");
        this.skillBar.linkOffsetX = this.healthBar.linkOffsetX
        this.skillBar.value = this.spattacktimer / this.chara.spattack.sp * 100;
        this.skillBar.background = "rgba(0, 0, 0, 0.3)";

    }

    //unblock from the player
    unblock() {
        this.blocked = false;
        this.blockingplayer = undefined
    }

    //if enemy could revive, finish the revival stance
    finishRevival() {
        //create new enemy, corresponding to the next form
        var enemy = new EnemyController(this.lvlcontroller.enemylist[this.chara.name + "2"], this.scene, this.x, this.y, this.lvlcontroller, this.id);
        //enemy.createRevivedEnemy()
        enemy.pattern = this.pattern;
        enemy.checkpoints = this.checkpoints;
        enemy.currentpoint = this.currentpoint;
        enemy.mesh = this.mesh;
        enemy.shadow = this.shadow;
        //enemy.aura = this.aura;
        enemy.healthBar = this.healthBar;
        enemy.healthBarBackground = this.healthBarBackground;

        enemy.waittimer = this.waittimer;
        if (this.skillBar != undefined)
            enemy.skillBar = this.skillBar

        var player0 = new BABYLON.Sprite(this.id, this.lvlcontroller.spriteManagers[this.lvlcontroller.enemylist[this.chara.name + "2"].spritesheet]);
        player0.position = this.sprite.position;
        player0.size = 65 * this.chara.size;
        player0.width = 90 * this.chara.size;
        enemy.sprite = player0;
        enemy.sprite.invertU = this.sprite.invertU
        enemy.startingTalents()
        this.sprite.dispose()
        if (enemy.skillBar == undefined && enemy.spattacktimer != undefined) {
            enemy.addSPBar(this.lvlcontroller.gui);
        }
        enemy.updateHpBar();

        this.lvlcontroller.enemies.push(enemy)
    }

    //distance from player, player prioritizes closer enemies
    getDistanceFromPlayer(player) {
        //√ |x2 – x1|² + |y2 – y1|²
        return Math.sqrt(Math.abs((this.mesh.position.x / 30) - player.x) + Math.abs((this.mesh.position.z / 30) - player.y))
    }

    // player prioritizes enemies closer to their final destination
    getCloseToDestination() {
        var res = 0;
        for (let i = 0; i < this.pattern.length; i++)
            res += this.pattern[i].path.length

        res += this.checkpoints.path.length
        return res
    }

    //move logic, do actions depending on state
    move(tiles, players) {
        //if the enemy is spawning (doing start animation), don't move
        if (!this.spawning) {
            this.atktimer += 1 / this.gamespeed;
            if (this.spattacktimer != undefined && this.chara.spattack.chargetype == "second")
                this.spattacktimer = Math.min(this.chara.spattack.sp, this.spattacktimer + (1 / 30) / this.gamespeed);
            this.hp = Math.min(this.maxhp, this.hp + this.buffs.getFinalHpRegen(this.maxhp) * (1 / 30) / this.gamespeed)

            var i = 0;
            var foundblock = false
            while (i < players.length && !foundblock) {
                if (this.mesh.position.x <= players[i].x * 30 + 20 && this.mesh.position.x >= players[i].x * 30 - 20 && this.mesh.position.z <= players[i].y * 30 + 20 && this.mesh.position.z >= players[i].y * 30 - 20) {
                    if (players[i].buffs.getFinalBlock(players[i].chara.blockcount) - players[i].blocking >= this.chara.blockcount && !this.blocked) {
                        this.blockingplayer = players[i];
                        players[i].blockedenemies.push(this)
                        this.blockingplayer.blocking += this.chara.blockcount;
                        this.blocked = true;
                        foundblock = true;
                    }
                    if (this.blockingplayer != undefined) {
                        if (players[i].chara.name == this.blockingplayer.chara.name)
                            foundblock = true;
                    }
                }
                i++
            }
            if (!foundblock)
                this.unblock()

            /* 
            //verify if blocking player can still block the enemy
            if (currenttile.player != undefined) {
                if (currenttile.player.buffs.getFinalBlock(currenttile.player.chara.blockcount) - currenttile.player.blocking >= this.chara.blockcount && !this.blocked) {
                    this.blockingplayer = currenttile.player;
                    currenttile.player.blockedenemies.push(this)
                    this.blockingplayer.blocking += this.chara.blockcount;
                    this.blocked = true;
                }
     
            }
            //if not possible (example: skill increasing block count is over, unblock)
            else {
                this.unblock()
            }
            */
            if (!this.skillproc) {
                //conditions to see if enemy can attack
                if (this.spattacktimer != undefined) {
                    if (this.spattacktimer == this.chara.spattack.sp && this.chara.spattack.chargetype == "second" && !this.attacking && !this.stairs && !this.buffs.isSilenced())
                        this.activateSpSkill(players)
                }
                //if enemy has no atk, can't attack

                var enter = false;

                if (this.chara.atk > 0)
                    enter = true;
                //if enemy is standby, can't attack
                if (this.chara.enemytype == "standby" && this.buffs.getStandby())
                    enter = false;
                if (this.stairs)
                    enter = false;
                //if no not attack condition met, attack if atk timer is over
                if (enter) {
                    if (this.atktimer >= this.buffs.getFinalAtkInterval(this.chara.atkinterval) * 25 && !this.attacking) {
                        if (this.spattacktimer != undefined) {
                            if (this.spattacktimer == this.chara.spattack.sp && this.chara.spattack.chargetype == "attack" && !this.stairs)
                                this.activateSpSkill(players)
                            else this.attacking = this.attack(players);
                        }
                        else this.attacking = this.attack(players);

                        if (this.attacking)
                            this.atktimer = 0
                    }
                }

                //if not attacking, waiting or being blocked, then move
                if (!this.blocked && !this.attacking && !this.wait)
                    this.patrol();
                else {
                    //if wait, then idle
                    if (this.running) {
                        this.sprite.playAnimation(this.chara.idle.start, this.chara.idle.end, true, 30 * this.gamespeed * (this.chara.idle.duration));
                        this.running = false;
                    }
                }
            }

            this.updateHpBar()

            //if waiting, increase wait timer and when the timer reaches the specified amount, get the new checkpoint to reach
            if (this.wait) {
                if (this.lvlcontroller.tiles[Math.round(this.mesh.position.x / 30)][Math.round(this.mesh.position.z / 30)].type.includes("enter")) {
                    this.hideInStairs()
                }
                this.waittimer += 1 / this.gamespeed;
                if (this.waittimer >= this.checkpoints.pause * 30) {
                    if (this.pattern.length > 0) {
                        this.checkpoints = this.pattern.shift()
                        this.waittimer = 0;
                        this.wait = false;
                    }
                    else {
                        //if final checkpoint reached, remove the enemy
                        this.finish = true;
                        this.mesh.dispose(true, true);
                        this.sprite.dispose();
                        this.shadow.dispose();
                        this.healthBar.dispose();
                        this.healthBarBackground.dispose();
                        if (this.skillBar != undefined)
                            this.skillBar.dispose();
                        if (this.aura != undefined)
                            this.aura.dispose()
                        var keys = Object.keys(this.buffs.effectSprite)
                        for (let i = 0; i < keys.length; i++)
                            this.buffs.effectSprite[keys[i]].dispose()
                        if (this.invincibleaura != undefined)
                            this.invincibleaura.dispose()
                    }
                }
            }
            if (this.hp <= 0)
                this.activateDeath()
        }
    }

}
class PlayerController extends CharaController {
    constructor(chara, scene, x, y, lvlcontroller) {
        super(chara, scene, x, y, lvlcontroller)
        this.blocking = 0;
        this.spawning = true;
        this.skillBar;
        this.playerSkill = new PlayerSkill(chara.skill.name, chara.skill.duration, chara.skill.initialsp, chara.skill.sp, chara.skill.chargetype, chara.skill.triggertype, chara.skill.modifiers, chara.skill.apply, chara.skill.skillimage, chara.skill.applyeffects)
        this.buffs = new Buffs();

        this.blockedenemies = []

        this.skillready;

        this.aura;
        this.dead = false;
        this.deploybomb = false;
        this.condtalent;
        this.condtalentcounter = 0;
        this.alivebuffs = [];

    }
    createEffects(auraManager) {
        var aura = new BABYLON.Sprite("", auraManager);
        aura.playAnimation(0, 13, false, 30);
        aura.position = new BABYLON.Vector3(5 + this.x * 30, 19, 10 + this.y * 30);
        aura.size = 70;
        aura.width = 90;

        aura.position.z -= Math.min(5,this.y);
        aura.position.x -= this.x;
    }

    createSkillAura(auraManager) {
        if (this.aura == undefined) {
            this.aura = new BABYLON.Sprite("", auraManager);
            this.aura.playAnimation(0, 3, true, 30 * this.gamespeed);
            this.aura.position = new BABYLON.Vector3(-5 + this.x * 30, 20, 6 + this.y * 30);
            this.aura.size = 65;
            this.aura.width = 100;

            this.aura.position.z -= Math.min(5,this.y);
            this.aura.position.x -= this.x;
        }
    }

    checkBlocking() {

        if (this.blockedenemies.length > this.buffs.getFinalBlock(this.chara.blockcount) && this.blockedenemies.length > 0) {
            this.blockedenemies[this.blockedenemies.length - 1].unblock()
            this.blockedenemies.splice(this.blockedenemies.length - 1, 1)
        }
        var enemies = this.lvlcontroller.enemies
        for (let i = 0; i < enemies.length; i++) {
            if (enemies[i].blockingplayer != undefined) {
                if (enemies[i].blockingplayer.chara.name == this.chara.name) {
                    var j = 0;
                    var found = false;
                    while (j < this.blockedenemies.length && !found) {
                        if (this.blockedenemies[j].id == enemies[i].id)
                            found = true;
                        j++
                    }
                    if (!found)
                        enemies[i].unblock()
                }
            }
        }
        this.blocking = this.blockedenemies.length
    }

    removeAllBlocking() {
        for (let i = 0; i < this.blockedenemies.length; i++) {
            this.blockedenemies[i].unblock()
        }
    }

    removeBlocked(id) {
        for (let i = 0; i < this.blockedenemies.length; i++) {
            if (this.blockedenemies[i].id = id) {
                this.blockedenemies.splice(i, 1)
                return
            }
        }
    }

    updateSpeed(gamespeed, pause) {
        this.gamespeed = gamespeed;
        if (this.sprite.cellIndex >= this.chara.atkanim.start && this.sprite.cellIndex <= this.chara.atkanim.end) {
            this.sprite.playAnimation(this.sprite.cellIndex, this.chara.atkanim.end, false, 30 * this.gamespeed * this.buffs.getFinalAtkInterval(this.chara.atkanim.duration, true));
        }

        if (this.sprite.cellIndex >= this.chara.drop.start && this.sprite.cellIndex <= this.chara.drop.end) {
            this.sprite.playAnimation(this.sprite.cellIndex, this.chara.drop.end, false, 30 * this.gamespeed);
        }
        if (this.sprite.cellIndex >= this.chara.death.start && this.sprite.cellIndex <= this.chara.death.end) {
            this.sprite.playAnimation(this.sprite.cellIndex, this.chara.death.end, false, 30 * this.gamespeed);
        }
        if (this.chara.skillatkanim != undefined) {
            if (this.sprite.cellIndex >= this.chara.skillatkanim.start && this.sprite.cellIndex <= this.chara.skillatkanim.end) {
                this.sprite.playAnimation(this.sprite.cellIndex, this.chara.skillatkanim.end, false, 30 * this.gamespeed * this.buffs.getFinalAtkInterval(this.chara.atkanim.duration, true));
            }
            else this.sprite.delay = 30 * this.gamespeed
        }
        else this.sprite.delay = 30 * this.gamespeed

        if (pause)
            this.sprite.stopAnimation()
    }

    updateHP() {
        var res = this.buffs.getCurrentHpRatio(this.hp, this.maxhp, this.chara.hp)
        this.hp = res.hp
        this.maxhp = res.maxhp
        this.hp = Math.min(this.maxhp, this.hp + this.buffs.getFinalHpRegen(this.maxhp) * (1 / 30) / this.gamespeed)
        if (this.hp / this.maxhp <= 0.4) {
            if (this.condtalent != undefined) {
                if (this.condtalent.condition == "hp") {
                    this.checkConditionTalent();
                }
            }
        }
        this.updateHpBar()
        this.checkDeath()
    }

    createPlayer(id, spriteManager, gui, iconsManager) {
        this.mesh = this.scene.assets.meshchara.clone(id)


        this.mesh.position.z = 0 + this.y * 30;
        this.mesh.position.x = 0 + this.x * 30;
        this.mesh.position.y = 10;
        //this.mesh.visibility = 0;

        this.shadow = new BABYLON.Sprite(id + "shadow", iconsManager);
        this.shadow.cellIndex = 0;
        this.shadow.size = 65;
        this.shadow.width = 90;

        this.skillready = new BABYLON.Sprite(id + "skillready", iconsManager);
        this.skillready.cellIndex = 1

        this.skillready.size = 65;
        this.skillready.width = 90;


        var player0 = new BABYLON.Sprite(id, spriteManager);

        player0.position = new BABYLON.Vector3(-10 + this.x * 30, 20, 6 + this.y * 30);
        this.shadow.position = new BABYLON.Vector3(-10 + this.x * 30, 19, 6 + this.y * 30);
        this.skillready.position = new BABYLON.Vector3(-10 + this.x * 30, 22, 6 + this.y * 30);


        player0.size = 65;
        player0.width = 90;
        this.sprite = player0;


        var instance = this

        this.sprite.playAnimation(this.chara.drop.start, this.chara.drop.end, false, this.gamespeed * 30);
        
        this.mesh.position.z -= Math.min(5,this.y)
        this.mesh.position.x -= this.x;

        this.sprite.position.z -= Math.min(5,this.y);
        this.sprite.position.x -= this.x;

        this.shadow.position.z -= Math.min(5,this.y);
        this.shadow.position.x -= this.x;


        this.skillready.position.z -= Math.min(5,this.y);
        this.skillready.position.x -= this.x;
        

        this.skillready.isVisible = false


        this.addHPBar(gui);
        this.addSkillBar(gui);

        this.activateTalents();

        var interval = setInterval(() => {
            if (instance.sprite.cellIndex >= instance.chara.drop.start + 2) {
                if (instance.chara.deploybomb && !instance.deploybomb) {
                    instance.createEffects(instance.lvlcontroller.spriteManagers["effects"])
                    instance.deploybomb = true
                    instance.lvlcontroller.playSound(instance.chara.name + "-skillbomb", instance.chara.sfx.skillbomb.volume)
                    instance.playerSkill.activateSkillBomb(instance, instance.lvlcontroller);
                }
            }
            if (instance.sprite.cellIndex == instance.chara.drop.end) {
                if (instance.playerSkill.chargetype == "passive") {
                    instance.lvlcontroller.playSound(instance.chara.name + "-skillact", instance.chara.sfx.skillact.volume)
                    instance.lvlcontroller.playSound(instance.chara.name + "-skill", instance.lvlcontroller.vcvolume)
                    instance.createSkillAura(instance.lvlcontroller.spriteManagers["skillaura"])
                    instance.playerSkill.activateDurationSkill([instance], instance.lvlcontroller)
                }
                instance.spawning = false;
                clearInterval(interval);
            }
        }, 1);


    }
    updateSkillBarCharging() {

        this.skillBar.value = Math.round(this.playerSkill.currentsp / this.playerSkill.totalsp * 100)
        this.skillBar.color = "yellow";


    }
    updateSkillBarTrigger() {
        this.skillBar.value = Math.round(this.playerSkill.duration / this.playerSkill.durationtimer * 100)
        this.skillBar.color = "orange";

    }

    getApplyTargets(apply, playerlist) {
        var res = [];
        switch (apply) {
            case "self":
                res.push(this);
                break;
            case "selfplus":
                res.push(this);
                if (playerlist.length > 0) {
                    let random = Math.floor(Math.random() * playerlist.length);
                    let player = playerlist[random]
                    res.push(player)
                }
                break;
        }
        return res;
    }

    activateTalents() {
        var talents = this.chara.talents;
        for (let i = 0; i < talents.length; i++) {
            if (talents[i].condtalent != undefined)
                this.condtalent = talents[i];
            else {

                var targets = [];
                targets = this.getApplyTargets(talents[i].apply, this.lvlcontroller.activePlayers)
                for (let j = 0; j < targets.length; j++) {
                    targets[j].buffs.buffs[talents[i].name] = { "name": talents[i].name, "modifiers": talents[i].modifiers }
                    if (talents[i].applyeffects != undefined) {
                        if (talents[i].applyeffects.apply == "aliveallies")
                            this.alivebuffs.push(JSON.parse(JSON.stringify(talents[i].applyeffects)))
                        else targets[j].buffs.applyeffects[talents[i].name] = talents[i].applyeffects
                    }
                    if (talents[i].effecticon != undefined)
                        targets[j].createDebuffAura(talents[i].name, talents[i].effecticon)

                }
            }
        }
    }

    checkAliveBuffs() {
        var targets = []
        for (let i = 0; i < this.alivebuffs.length; i++) {
            targets = this.getHpPlayerInRange(this.lvlcontroller.activePlayers, this.alivebuffs[i].range, this.alivebuffs[i].targets)
            if (this.alivebuffs[i].targetselected != undefined) {
                if (this.alivebuffs[i].targetselected.length > 0)
                    targets = this.alivebuffs[i].targetselected
                else this.alivebuffs[i].targetselected = targets
            }

            if (targets.length > 0) {
                for (let j = 0; j < targets.length; j++) {
                    this.alivebuffs[i].modifiers = this.constructBuffs(this.alivebuffs[i].modifiers)
                    targets[j].buffs.buffs[this.alivebuffs[i].name] = this.alivebuffs[i]
                    targets[j].buffs.effects[this.alivebuffs[i].name] = this.alivebuffs[i].duration
                    if (this.alivebuffs[i].effecticon != undefined)
                        targets[j].createDebuffAura(this.alivebuffs[i].name, this.alivebuffs[i].effecticon)
                }

            }
        }
    }

    //if the buff is directly tied to the current player stats
    constructBuffs(modifiers) {
        var keys = Object.keys(modifiers);
        for (let i = 0; i < keys.length; i++) {
            if (typeof modifiers[keys[i]] === 'object') {
                modifiers[keys[i]] = this.chara[modifiers[keys[i]].stat] * modifiers[keys[i]].percent
            }
        }
        return modifiers
    }

    addHPBar(gui) {
        this.healthBar = gui.addHPBar(this.mesh, "green", 30, "5%");
    }
    addSkillBar(gui) {
        this.skillBar = gui.addHPBar(this.mesh, "yellow", 35, "5%");
        this.skillBar.value = this.playerSkill.initialsp;
    }


    attack(enemies, players) {
        var enemy;
        var dmgtype = this.buffs.getDmgType()
        if (dmgtype == "")
            dmgtype = this.chara.dmgtype
        if (dmgtype == "heal")
            enemy = this.getLowestHpPlayerInRange(players, this.buffs.getFinalRange(this.chara.range), this.chara.targets + this.buffs.getTargets());
        else {
            if (this.blocking == 0) {
                enemy = this.getFirstEnemyInRange(enemies, this.buffs.getFinalRange(this.chara.range), this.chara.targets + this.buffs.getTargets());
            }
            else {
                enemy = this.getBlockedEnemyInRange(enemies, this.chara.targets + this.buffs.getTargets())
                //enemy = this.getFirstEnemyInRange(enemies, 0,this.chara.targets+this.buffs.getTargets())
            }
        }
        if (enemy.length > 0) {
            this.running = false;
            if (enemy[0].mesh.position.z <= this.mesh.position.z)
                this.sprite.invertU = 1
            else this.sprite.invertU = 0;

            var contactframe = this.chara.atkanim.contact
            if (this.playerSkill.active && this.chara.skillatkanim != undefined) {
                contactframe = this.chara.skillatkanim.contact
                this.sprite.playAnimation(this.chara.skillatkanim.start, this.chara.skillatkanim.end, false, this.buffs.getFinalAtkInterval(this.chara.atkanim.duration, true) * 30 * this.gamespeed);
            }
            else this.sprite.playAnimation(this.chara.atkanim.start, this.chara.atkanim.end, false, this.buffs.getFinalAtkInterval(this.chara.atkanim.duration, true) * 30 * this.gamespeed);

            if (this.playerSkill.active && this.chara.skillsfx) {
                if (this.chara.sfx.skillatk != undefined)
                    this.lvlcontroller.playSound(this.chara.name + "-skillatk", this.chara.sfx.skillatk.volume)
            }
            else if (this.chara.sfx.atk != undefined)
                this.lvlcontroller.playSound(this.chara.name + "-atk", this.chara.sfx.atk.volume)

            var instance = this

            var interval = setInterval(() => {
                if (instance.sprite.cellIndex >= contactframe && instance.hp > 0) {
                    if (this.playerSkill.active && this.chara.skillsfx) {
                        if (this.chara.sfx.skillhit != undefined && this.chara.bullet==undefined)
                            this.lvlcontroller.playSound(this.chara.name + "-skillhit", this.chara.sfx.skillhit.volume)
                    }
                    else if (this.chara.sfx.hit != undefined && this.chara.bullet==undefined)
                        this.lvlcontroller.playSound(this.chara.name + "-hit", this.chara.sfx.hit.volume)

                    if (dmgtype == "heal") {
                        for (let i = 0; i < enemy.length; i++)
                            enemy[i].receiveHealing(instance);
                    }
                    else {
                        for (let i = 0; i < enemy.length; i++) {
                            let splash = this.buffs.getSplash()
                            if (!splash.splash) {
                                for (let j = 0; j < this.buffs.getAttacks(); j++) {
                                    if (this.chara.skillbullet != undefined && this.playerSkill.active) {
                                        new Bullet(this, this.scene, enemy[i], this.lvlcontroller,true)
                                    }
                                    else if (this.chara.bullet != undefined) {
                                        new Bullet(this, this.scene, enemy[i], this.lvlcontroller)
                                    }
                                    else enemy[i].receiveDamage(instance)
                                }
                            }
                            else {
                                let splashenemies = this.getSplashEnemiesInRange(enemies, enemy[i], splash.radius)
                                for (let j = 0; j < splashenemies.length; j++)
                                    splashenemies[j].receiveDamage(instance)
                            }
                        }
                    };
                    if (instance.playerSkill.chargetype == "attack" && instance.playerSkill.triggertype == "auto" && instance.playerSkill.currentsp >= instance.playerSkill.totalsp) {
                        if (Math.random() < 0.30)
                            this.lvlcontroller.playSound(instance.chara.name + "-skill", this.lvlcontroller.vcvolume)
                        if (instance.chara.skillsfx) {
                            if (instance.chara.sfx.skillhit != undefined)
                                this.lvlcontroller.playSound(instance.chara.name + "-skillhit", instance.chara.sfx.skillhit.volume)
                        }
                        instance.playerSkill.currentsp = -1
                    }

                    if (instance.playerSkill.chargetype == "attack" && !instance.playerSkill.active) {
                        instance.playerSkill.currentsp = Math.min(instance.playerSkill.currentsp + 1, instance.playerSkill.totalsp);
                        instance.updateSkillBarCharging();
                    }
                    clearInterval(interval);
                    if (this.buffs.getDoubleHitChance())
                        instance.atktimer += 200000
                }
            }, 1);
            return true;
        }
        return false;
    }

    checkConditionTalent() {
        if (this.condtalent != undefined) {
            if (this.condtalentcounter < this.condtalent.condtalent) {
                this.condtalentcounter++
                this.buffs.buffs[this.condtalent.name + this.condtalentcounter] = { "name": this.condtalent.name + this.condtalentcounter, "modifiers": this.condtalent.modifiers }
                if (this.condtalent.applyeffects != undefined) {
                    this.buffs.buffs[this.condtalent.name + this.condtalentcounter] = { "name": this.condtalent.name + this.condtalentcounter, "modifiers": this.condtalent.applyeffects.modifiers }
                    this.buffs.effects[this.condtalent.name + this.condtalentcounter] = this.condtalent.applyeffects.duration
                }

                if (this.condtalent.modifiers.instantheal != undefined) {
                    this.hp = Math.min(this.maxhp, this.hp + this.maxhp * this.condtalent.modifiers.instantheal)
                    this.updateHpBar()
                }

                if (this.condtalent.modifiers.reactivateskill) {
                    this.playerSkill.deactivateDurationSkill();
                    this.lvlcontroller.playSound(this.chara.name + "-skillbomb", this.chara.sfx.skillbomb.volume)
                    this.createEffects(this.lvlcontroller.spriteManagers["effects"])
                    this.playerSkill.activateSkillBomb(this, this.lvlcontroller);

                    this.createSkillAura(this.lvlcontroller.spriteManagers["skillaura"])
                    this.playerSkill.activateDurationSkill([this], this.lvlcontroller)
                }
            }
        }
    }

    move(enemies, players) {
        if (!this.spawning) {
            if (!this.resuming) {
                if (!this.running && !this.sprite.animationStarted) {
                    if (this.playerSkill.active && this.chara.skillidle != undefined)
                        this.sprite.playAnimation(this.chara.skillidle.start, this.chara.skillidle.end, true, this.gamespeed * 30);
                    else this.sprite.playAnimation(this.chara.idle.start, this.chara.idle.end, true, this.gamespeed * 30);
                    this.running = true;
                }
                this.atktimer += 1 / this.gamespeed;
                if (this.atktimer >= this.buffs.getFinalAtkInterval(this.chara.atkinterval) * 22 && this.buffs.getCanAttack()) {
                    this.atktimer = 0;
                    var success = this.attack(enemies, players);
                    if (!success)
                        this.atktimer += 10000
                }
            }
        }
    }

}
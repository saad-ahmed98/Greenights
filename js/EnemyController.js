class EnemyController extends CharaController {
    constructor(chara, scene, x, y, lvlcontroller, id) {
        super(chara, scene, x, y, lvlcontroller)
        this.pattern;
        this.checkpoints;
        this.currentpoint;
        this.finish = false;
        this.id = id;
        this.blocked = false;
        this.blockingplayer;
        this.attacking = false;
        this.waittimer = 0;
        this.wait = false;
        this.aura;
        if (this.chara.hasskill)
            this.enemySkill = new EnemySkill(chara.skill.name + id, chara.skill.triggertype, chara.skill.modifiers, chara.skill.aura, chara.skill.skilltype, chara.skill.target,chara.skill.auratype)
        this.buffs = new EnemyBuffs();

        this.spawning = false;

        //standby

    }
    /*
    pause() {
        this.running = false;
        this.attacking = false;
        //this.blocked = false;
        this.sprite.stopAnimation();
    }
    */

    createBuffAura(bufftype) {
        this.aura = new BABYLON.Sprite("", this.lvlcontroller.spriteManagers[bufftype+"buff"]);
        //this.aura.playAnimation(0, 3, true, 30 * this.gamespeed);
        this.aura.position = new BABYLON.Vector3(this.mesh.position.x, 20, 6 + this.mesh.position.z);
        this.aura.size = 65;
        this.aura.width = 90;

        this.aura.position.z -= (8 - (this.mesh.position.z / 30));
        this.aura.position.x -= (13 - (this.mesh.position.x / 30));

    }

    updateSpeed(gamespeed, pause) {
        this.gamespeed = gamespeed;
        var x = this.sprite.cellIndex;

        var keys = ["move", "atkanim", "death", "idle"]
        for (let i = 0; i < keys.length; i++) {
            if (x <= this.chara[keys[i]].end && x >= this.chara[keys[i]].start) {
                var duration = this.chara[keys[i]].duration
                var delay = 30 * this.gamespeed * duration
                if (keys[i] == "move") {
                    delay = 30 * this.gamespeed * duration / ((this.chara.speed + this.buffs.getSpeed()) / this.chara.speed)
                }
                if(keys[i]== "atkanim")
                    this.sprite.playAnimation(x + 1, this.chara.atkanim.end, false, delay);

                else this.sprite.delay = delay
            }
        }
        if (pause)
            this.sprite.stopAnimation()
    }

    patrol() {

        if (!this.running) {
            var duration = this.chara.move.duration
            /*
            if (this.chara.enemytype == "standby" && !this.buffs.getStandby())
                duration = 0.5
                */

            this.sprite.playAnimation(this.chara.move.start, this.chara.move.end, true, 30 * this.gamespeed * duration / ((this.chara.speed + this.buffs.getSpeed()) / this.chara.speed));
            this.running = true;
        }

        var xfound = false;

        if (this.mesh.position.x <= this.currentpoint[1] * 30 + 1 && this.mesh.position.x >= this.currentpoint[1] * 30 - 1)
            xfound = true;
        else {
            var dir = 1;
            if (this.mesh.position.x > this.currentpoint[1] * 30)
                dir = -1;
            this.mesh.position.x += (1 * (this.chara.speed + this.buffs.getSpeed()) * dir) / this.gamespeed;
            this.sprite.position.x += (1 * (this.chara.speed + this.buffs.getSpeed()) * dir) / this.gamespeed;
            this.shadow.position.x += (1 * (this.chara.speed + this.buffs.getSpeed()) * dir) / this.gamespeed;
            if (this.aura != undefined)
                this.aura.position.x += (1 * (this.chara.speed + this.buffs.getSpeed()) * dir) / this.gamespeed;




        }

        if (xfound) {
            if (this.mesh.position.z <= this.currentpoint[0] * 30 + 1 && this.mesh.position.z >= this.currentpoint[0] * 30 - 1) {
                if (this.checkpoints.path.length > 0)
                    this.currentpoint = this.checkpoints.path.shift();
                else {
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

            }
            else {
                var dir = 1;
                if (this.mesh.position.z > this.currentpoint[0] * 30) {
                    this.sprite.invertU = 1;
                    dir = -1;
                }
                else this.sprite.invertU = 0;
                this.mesh.position.z += (1 * (this.chara.speed + this.buffs.getSpeed()) * dir) / this.gamespeed;
                this.sprite.position.z += (1 * (this.chara.speed + this.buffs.getSpeed()) * dir) / this.gamespeed;
                this.shadow.position.z += (1 * (this.chara.speed + this.buffs.getSpeed()) * dir) / this.gamespeed;

                if (this.aura != undefined)
                    this.aura.position.z += (1 * (this.chara.speed + this.buffs.getSpeed()) * dir) / this.gamespeed;

            }

        }

    }

    updateHpBar() {
        super.updateHpBar()
        if (this.hp == this.chara.hp)
            this.healthBar.isVisible = false;
        else this.healthBar.isVisible = true;
        this.healthBar.linkOffsetX = 0 + (this.sprite.position.z - this.mesh.position.z) * 2

    }

    createEnemy(matrix, points, spriteManager, gui, shadowmanager) {
        this.mesh = this.scene.assets.meshchara.clone(this.id)

        this.shadow = new BABYLON.Sprite(this.id + "shadow", shadowmanager);
        this.shadow.size = 65 * this.chara.size;
        this.shadow.width = 90 * this.chara.size;

        this.shadow.position = new BABYLON.Vector3(-15 + this.x * 30, 20, 6 + this.y * 30 - (30 * this.chara.size - 30));

        var player0 = new BABYLON.Sprite(this.id, spriteManager);
        player0.position = new BABYLON.Vector3(-15 + this.x * 30, 20, 6 + this.y * 30 - (30 * this.chara.size - 30));
        player0.size = 65 * this.chara.size;
        player0.width = 90 * this.chara.size;
        this.sprite = player0;

        this.mesh.position.z = 0 + this.y * 30;
        this.mesh.position.x = 0 + this.x * 30;
        this.mesh.position.y = 0;



        this.pattern = this.createPathfinding(points, matrix);
        this.checkpoints = this.pattern.shift();
        this.currentpoint = this.checkpoints.path.shift();
        this.addHPBar(gui);

        if (this.chara.start != undefined) {
            this.spawning = true;
            this.sprite.playAnimation(this.chara.start.start, this.chara.start.end, false, this.gamespeed * 30 * this.chara.start.duration);

            if (this.chara.sfx.start != undefined) {
                this.lvlcontroller.playSound(this.chara.name + "-start", this.chara.sfx.start.volume)
            }
            var instance = this;
            var interval = setInterval(() => {
                if (instance.sprite.cellIndex == instance.chara.start.end) {
                    instance.spawning = false;
                    clearInterval(interval);
                }
            }, 1);
        }
        if (this.enemySkill != undefined) {
            if (this.enemySkill.triggertype == "on_start") {
                if (this.enemySkill.targettype == "all"){
                    this.enemySkill.activateSkill(this.lvlcontroller.enemies)
                    this.enemySkill.activateSkill([this],true)
                }
                else this.enemySkill.activateSkill([this])
            }
        }
    }

    createPathfinding(points, matrix) {
        var checks = [];
        for (let i = 0; i < points.length; i++) {
            var grid = new PF.Grid(matrix);
            var finder = new PF.AStarFinder();

            var path = finder.findPath(points[i].start[1], points[i].start[0], points[i].end[1], points[i].end[0], grid);
            checks.push({ "path": path, "pause": points[i].pause });
        }
        return checks;
    }

    attack(players) {
        var player = [];
        if (!this.blocked && this.chara.range != 0) {
            player = this.getFirstPlayerInRange(players, this.chara.range, this.chara.targets + this.buffs.getTargets());
        }
        else {
            if (this.blocked)
                player = this.getFirstPlayerInRange(players, 0, this.chara.targets + this.buffs.getTargets())
        }
        if (player.length > 0) {
            if (player[0].mesh.position.z <= this.mesh.position.z)
                this.sprite.invertU = 1
            else this.sprite.invertU = 0;
            if (this.running) {
                this.sprite.playAnimation(this.chara.idle.start, this.chara.idle.end, true, 30 * this.gamespeed * this.chara.idle.duration);
                this.running = false;
            }
            this.sprite.playAnimation(this.chara.atkanim.start, this.chara.atkanim.end, false, 30 * this.gamespeed * this.chara.atkanim.duration);
            if (this.chara.sfx.atk != undefined) {
                //dog rawr spam prevention
                if (Math.random() < 0.20 || this.chara.sfx.atk.src != "dog-atk")
                    this.lvlcontroller.playSound(this.chara.name + "-atk", this.chara.sfx.atk.volume)
            }
            var instance = this
            var interval1 = setInterval(() => {
                if (instance.sprite.cellIndex >= instance.chara.atkanim.contact && instance.hp > 0) {
                    for (let i = 0; i < player.length; i++)
                        player[i].receiveDamage(instance);
                    if (this.chara.sfx.hit != undefined)
                        this.lvlcontroller.playSound(this.chara.name + "-hit", this.chara.sfx.hit.volume)
                    clearInterval(interval1);

                }
            }, 1);

            var interval2 = setInterval(() => {
                if (instance.sprite.cellIndex == instance.chara.atkanim.end && instance.hp > 0) {
                    this.sprite.playAnimation(this.chara.idle.start, this.chara.idle.end, true, 30 * this.gamespeed * this.chara.idle.duration);
                    this.attacking = false;
                    clearInterval(interval2);
                }
            }, 1);
            return true;
        }
        return false;
    }

    receiveDamage(attackingplayer, hazard = false) {
        var dmg;
        var dmgtype;

        if (!hazard) {
            var dmgmodifier = 1;
            if (attackingplayer.playerSkill.chargetype == "attack" && attackingplayer.playerSkill.triggertype == "auto" && attackingplayer.playerSkill.currentsp >= attackingplayer.playerSkill.totalsp) {
                this.lvlcontroller.playSound(attackingplayer.chara.name + "-skill", this.lvlcontroller.vcvolume)
                dmgmodifier *= attackingplayer.playerSkill.activateDmgUpSkill();
            }

            dmgmodifier *= attackingplayer.buffs.getCritModifier();

            var dmgpen = 0;

            if (attackingplayer.chara.subclass = "lord" && attackingplayer.buffs.getDmgPen() && attackingplayer.blocking == 0)
                dmgpen = 0.2;

            dmg = attackingplayer.buffs.getFinalAtk(attackingplayer.chara.atk - (attackingplayer.chara.atk * dmgpen)) * dmgmodifier
            dmgtype = attackingplayer.buffs.getDmgType()
            if (dmgtype == "")
                dmgtype = attackingplayer.chara.dmgtype
        }

        else {
            dmg = attackingplayer.dmg
            dmgtype = "true"
        }


        var dmgreceived;

        switch (dmgtype) {
            case "physical":
                dmgreceived = Math.max(dmg * 0.05, dmg - this.buffs.getFinalDef(this.chara.def))
                break;
            case "arts":
                dmgreceived = Math.max(dmg * 0.10, dmg * ((100 - this.chara.res) / 100))
                break;
            case "true":
                dmgreceived = dmg;
                break;
        }
        this.hp -= dmgreceived
        this.updateHpBar();
        if (this.chara.hasskill && !this.enemySkill.active) {
            if (this.enemySkill.triggertype == "on_hit") {
                this.activateSkillAnims()
                if (this.enemySkill.targettype == "all")
                    this.enemySkill.activateSkill(this.lvlcontroller.enemies)
                else this.enemySkill.activateSkill([this])
            }
        }

        if (this.hp <= 0) {
            if (!hazard)
                this.lvlcontroller.currentdp += attackingplayer.buffs.getDpOnKill();
            this.lvlcontroller.gui.updatePlayerWheelUI(this.lvlcontroller.currentdp, this.lvlcontroller.squadlimit)

            this.mesh.dispose()
            this.shadow.dispose()
            if (this.aura != undefined)
                this.aura.dispose()


            this.healthBar.dispose()
            this.sprite.stopAnimation();
            this.sprite.playAnimation(this.chara.death.start, this.chara.death.end, false, 30 * this.gamespeed * (this.chara.death.duration));
            var instance = this
            var timer = this.chara.death.end - this.chara.death.start + 2
            var interval = setInterval(() => {
                if (instance.sprite.cellIndex == instance.chara.death.end || timer <= 0) {
                    instance.sprite.dispose()
                    clearInterval(interval);
                }
                timer--;
            }, 1);
            this.hp = -999
            if (this.blockingplayer != undefined) {

                this.blockingplayer.blocking = Math.max(this.blockingplayer.blocking - this.chara.blockcount, 0);


            }
        }
    }

    activateSkillAnims() {
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

    }


    addHPBar(gui) {
        this.healthBar = gui.addHPBar(this.mesh, "red", 10, "3%");
        //this.healthBar.visibility=0;
    }

    move(tiles, players) {
        if (!this.spawning) {
            this.atktimer += 1 / this.gamespeed;
            var currenttile = tiles[Math.round(this.mesh.position.x / 30)][Math.round(this.mesh.position.z / 30)];
            if (currenttile.player != undefined) {
                if (currenttile.player.chara.blockcount - currenttile.player.blocking >= this.chara.blockcount && !this.blocked) {
                    this.blockingplayer = currenttile.player;

                    this.blockingplayer.blocking += this.chara.blockcount;
                    this.blocked = true;
                }

            }
            else {
                this.blocked = false;
                this.blockingplayer = undefined;
            }
            if (!this.skillproc) {
                var enter = false;
                if (this.chara.atk > 0)
                    var enter = true;
                if (this.chara.enemytype == "standby" && this.buffs.getStandby())
                    enter = false;
                if (enter) {
                    if (this.atktimer >= this.chara.atkinterval * 20) {
                        this.atktimer = 0;
                        this.attacking = this.attack(players);
                    }
                }


                if (!this.blocked && !this.attacking && !this.wait)
                    this.patrol();

                else {
                    if (this.running) {
                        this.sprite.playAnimation(this.chara.idle.start, this.chara.idle.end, true, 30 * this.gamespeed * (this.chara.idle.duration));
                        this.running = false;
                    }
                }
            }
            this.updateHpBar()
            if (this.wait) {
                this.waittimer += 1 / this.gamespeed;
                if (this.waittimer >= this.checkpoints.pause * 30) {
                    if (this.pattern.length > 0) {
                        this.checkpoints = this.pattern.shift()
                        this.waittimer = 0;
                        this.wait = false;
                    }
                    else {
                        this.finish = true;
                        this.mesh.dispose();
                        this.sprite.dispose();
                        this.shadow.dispose();
                        this.healthBar.dispose();
                        if (this.aura != undefined)
                            this.aura.dispose()
                    }
                }
            }

        }
    }


    attackSound(scene) {
        var sound
        if (this.attackdmg == 2)
            sound = scene.assets.enemy2attack
        else sound = scene.assets.enemyattack
        sound.setVolume(0.4)
        if (!sound.isPlaying)
            sound.play()
    }

}
class CharaController {
    constructor(chara, scene, x, y, lvlcontroller) {
        this.chara = JSON.parse(JSON.stringify(chara));
        this.mesh;
        this.sprite;
        this.shadow;

        this.hp = chara.hp;
        this.maxhp = chara.hp;
        this.animationGroups
        this.healthBar;
        this.isattacking = false;
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.atktimer = 10000;
        this.running = false;
        this.pauseSpriteIndex = 0;
        this.resuming = false;
        this.skillproc = false;

        this.gamespeed = 1;

        this.lvlcontroller = lvlcontroller

    }


    updateHpBar() {
        this.healthBar.value = Math.round(this.hp / this.maxhp * 100)

    }

    receiveHealing(healer) {
        var dmg = healer.buffs.getFinalAtk(healer.chara.atk)
        this.hp = Math.min(this.maxhp, this.hp + dmg)
        this.updateHpBar();
    }

    getFirstPlayerInRange(players, range, targets) {
        var res = []
        var targetcount = targets;

        var squarerange = [[this.mesh.position.x - 15 - 30 * range, this.mesh.position.x + 15 + 30 * range], [this.mesh.position.z - 15 - 30 * range, this.mesh.position.z + 15 + 30 * range]];
        for (let i = players.length - 1; i >= 0; i--) {
            if (this.between(players[i].x * 30, squarerange[0]) && this.between(players[i].y * 30, squarerange[1])) {
                res.push(players[i])
                targetcount--
                if (targetcount <= 0)
                    return res;
            }
        }

        if (range == 0 && targets > 1) {
            range = this.chara.range
            var squarerange = [[this.mesh.position.x - 15 - 30 * range, this.mesh.position.x + 15 + 30 * range], [this.mesh.position.z - 15 - 30 * range, this.mesh.position.z + 15 + 30 * range]];
            for (let i = players.length - 1; i >= 0; i--) {
                if (this.between(players[i].x * 30, squarerange[0]) && this.between(players[i].y * 30, squarerange[1])) {
                    var found = false;
                    for (let j = 0; j < res.length; j++) {
                        if (res[j].chara.name == players[i].chara.name)
                            found = true;
                    }
                    if (!found) {
                        res.push(players[i])
                        targetcount--
                    }
                    if (targetcount <= 0)
                        return res;
                }
            }
        }
        return res;

    }

    getBlockedEnemyInRange(enemies, targets) {
        var res = [];
        var targetcount = targets;
        var squarerange = [[this.x * 30 - 15, this.x * 30 + 15], [this.y * 30 - 15, this.y * 30 + 15]];

        for (let i = 0; i < enemies.length; i++) {
            if (enemies[i].blockingplayer == this) {
                res.push(enemies[i])
                targetcount--;
                if (targetcount <= 0)
                    return res;
            }
        }

        var range = this.chara.range
        if (range > 0 && targets > 1) {
            var squarerange = [[this.x * 30 - 15 - 30 * range, this.x * 30 + 15 + 30 * range], [this.y * 30 - 15 - 30 * range, this.y * 30 + 15 + 30 * range]];
            for (let i = enemies.length - 1; i >= 0; i--) {
                var counter = Math.abs(Math.abs(Math.round(enemies[i].mesh.position.x / 30) - this.x) - range);
                if (this.between(enemies[i].mesh.position.x, squarerange[0]) && this.between(enemies[i].mesh.position.z, squarerange[1]) && !enemies[i].spawning && !enemies[i].invincible) {
                    if (Math.abs(Math.round(enemies[i].mesh.position.z / 30) - this.y) <= counter) {
                        var found = false;
                        for (let j = 0; j < res.length; j++) {
                            if (res[j].id == enemies[i].id)
                                found = true;
                        }
                        if (!found) {
                            res.push(enemies[i])
                            targetcount--
                        }
                        if (targetcount <= 0)
                            return res;
                    }
                }
            }
        }
        return res;
    }

    getLowestHpPlayerInRange(players, range, targets) {
        var squarerange = [[this.x * 30 - 15 - 30 * range, this.x * 30 + 15 + 30 * range], [this.y * 30 - 15 - 30 * range, this.y * 30 + 15 + 30 * range]];
        var targetcount = targets;
        var res = [];
        for (let i = 0; i < players.length; i++) {
            var counter = Math.abs(Math.abs(Math.round(players[i].mesh.position.x / 30) - this.x) - range);
            if (this.between(players[i].x * 30, squarerange[0]) && this.between(players[i].y * 30, squarerange[1]) && players[i].hp < players[i].chara.hp) {
                if (Math.abs(Math.round(players[i].mesh.position.z / 30) - this.y) <= counter) {
                    if (res.length < targetcount)
                        res.push(players[i])
                    else {
                        let count = 99
                        for (let j = 0; j < res.length; j++) {
                            if (players[i].hp < res[j].hp) {
                                if (count == 99) {
                                    count = j;
                                }
                                else if (res[count].hp > res[j].hp)
                                    count = j
                            }
                        }
                        if (count != 99)
                            res[count] = players[i];
                    }

                }
            }
        }
        return res;
    }

    getFirstEnemyInRange(enemies, range, targets) {
        enemies.sort(function (x, y) {

            if (x.buffs.getTauntLevel() > y.buffs.getTauntLevel()) {
                return -1;
            }
            if (x.buffs.getTauntLevel() < y.buffs.getTauntLevel()) {
                return 1;
            }
            return 0;
        });
        var res = [];
        var targetcount = targets;
        var squarerange = [[this.x * 30 - 15 - 30 * range, this.x * 30 + 15 + 30 * range], [this.y * 30 - 15 - 30 * range, this.y * 30 + 15 + 30 * range]];

        for (let i = 0; i < enemies.length; i++) {
            var counter = Math.abs(Math.abs(Math.round(enemies[i].mesh.position.x / 30) - this.x) - range);
            if (this.between(enemies[i].mesh.position.x, squarerange[0]) && this.between(enemies[i].mesh.position.z, squarerange[1]) && !enemies[i].spawning && !enemies[i].invincible) {
                if (Math.abs(Math.round(enemies[i].mesh.position.z / 30) - this.y) <= counter) {
                    res.push(enemies[i])
                    targetcount--;
                    if (targetcount <= 0)
                        return res;
                }
            }
        }
        return res;
    }

    getSplashEnemiesInRange(enemies, center, radius) {
        var res = [];
        var squarerange = [[center.mesh.position.x - 30 * radius, center.mesh.position.x + 30 * radius], [center.mesh.position.z - 30 * radius, center.mesh.position.z + 30 * radius]];

        for (let i = 0; i < enemies.length; i++) {
            if (this.between(enemies[i].mesh.position.x, squarerange[0]) && this.between(enemies[i].mesh.position.z, squarerange[1]) && !enemies[i].spawning && !enemies[i].invincible) {
                res.push(enemies[i])
            }
        }
        return res;
    }


    receiveDamage(enemy, hazard = false) {
        var dmg;
        var dmgtype;
        if (!hazard) {
            dmg = enemy.buffs.getFinalAtk(enemy.chara.atk)
            dmgtype = enemy.buffs.getDmgType()

            if (dmgtype == "")
                dmgtype = enemy.chara.dmgtype
        }
        else {
            dmgtype = "true"
            dmg = enemy.dmg
        }

        var dmgreceived;
        switch (dmgtype) {
            case "physical":
                dmgreceived = Math.max(dmg * 0.05, dmg - this.buffs.getFinalDef(this.chara.def))
                break;
            case "arts":
                dmgreceived = Math.max(dmg * 0.10, dmg * ((100 - this.buffs.getFinalRes(this.chara.res)) / 100))
                break;
            case "true":
                dmgreceived = dmg;
                break;
        }
        this.hp -= dmgreceived
        this.updateHpBar();
        if (this.hp <= 0) {
            this.lvlcontroller.playSound("charadead", 0.3)
            //this.animationGroups[1].play()
            this.mesh.dispose()
            this.healthBar.dispose()
            this.skillBar.dispose()
            this.shadow.dispose()
            this.skillready.dispose()

            if (this.aura != undefined)
                this.aura.dispose()

            this.sprite.playAnimation(this.chara.death.start, this.chara.death.end, false, 30 * this.gamespeed);

            var instance = this
            var interval = setInterval(() => {
                if (instance.sprite.cellIndex == instance.chara.death.end) {
                    instance.sprite.dispose()
                    clearInterval(interval);
                }
            }, 1);
            this.hp = -999
        }
    }

    pause() {
        this.pauseSpriteIndex = this.sprite.cellIndex;
        this.sprite.stopAnimation();
    }

    resume() {
        this.running = false;
        if (this.pauseSpriteIndex >= this.chara.atkanim.start && this.pauseSpriteIndex <= this.chara.atkanim.end) {
            this.sprite.playAnimation(this.pauseSpriteIndex + 1, this.chara.atkanim.end, false, 30 * this.gamespeed * this.chara.atkinterval);
        }
        else if (this.pauseSpriteIndex >= this.chara.idle.start && this.pauseSpriteIndex <= this.chara.idle.end) {
            this.sprite.playAnimation(this.chara.idle.start, this.chara.idle.end, true, 30 * this.gamespeed * this.chara.idle.duration);
        }

    }

    between(x, range) {
        return x >= range[0] && x <= range[1];
    }

    xleft() {
        return this.mesh.position.x - this.width / 2
    }

    xright() {
        return this.mesh.position.x + this.width / 2
    }

    yup() {
        return this.mesh.position.y + this.height / 2
    }

    ydown() {
        return this.mesh.position.y - this.height / 2
    }

    move() {
        throw "not implemented"
    }

    attack() {
        throw "not implemented"
    }

    die() {
        throw "not implemented"
    }


    xleft() {
        return this.mesh.position.x - this.width / 2
    }

    xright() {
        return this.mesh.position.x + this.width / 2
    }

    yup() {
        return this.mesh.position.y + this.height / 2
    }

    ydown() {
        return this.mesh.position.y - this.height / 2
    }

    colorMesh() {
        var colorMaterial = new BABYLON.StandardMaterial("", this.scene);
        this.mesh.material = colorMaterial
        this.mesh.renderOutline = true;
        this.mesh.outlineColor = new BABYLON.Color3(0, 0, 0);
        this.mesh.outlineWidth = 0.1;
    }
}
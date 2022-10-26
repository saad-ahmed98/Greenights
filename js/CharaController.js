class CharaController {
    constructor(chara, scene, x, y, lvlcontroller) {
        //stats of the character
        this.chara = JSON.parse(JSON.stringify(chara));

        //elements showing up on the screen
        this.mesh;
        this.sprite;
        this.shadow;
        this.healthBar;

        //current hp
        this.hp = chara.hp;

        //max hp
        this.maxhp = chara.hp;

        this.scene = scene;

        //initial x and y
        this.x = x;
        this.y = y;

        //timer of atk
        this.atktimer = 10000;

        //sprite number when the game is paused
        this.pauseSpriteIndex = 0;

        //status booleans
        this.isattacking = false;
        this.running = false;
        this.resuming = false;
        this.skillproc = false;

        //current game speed : 1 is x2, 2 is x1, 8 is slow motion
        this.gamespeed = 1;

        //level controller
        this.lvlcontroller = lvlcontroller

    }

    //update health bar value
    updateHpBar() {
        this.healthBar.value = Math.round(this.hp / this.maxhp * 100)

    }

    //if healed, then receive healing
    receiveHealing(healer) {
        var dmg = healer.buffs.getFinalAtk(healer.chara.atk)
        this.hp = Math.min(this.maxhp, this.hp + dmg)
        this.updateHpBar();
    }

    //used by enemy, get first player in range
    // players is the list of all the active players
    //range is the range of the enemy
    //targets is the number of targets that can be hit
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

        // if range is 0 but the number of targets is higher than 1...
        // then the enemy is ranged,
        // blocked and can still attack more players on top of who's blocking
        if (range == 0 && targets > 1) {
            // get the chara real range
            range = this.chara.range
            var squarerange = [[this.mesh.position.x - 15 - 30 * range, this.mesh.position.x + 15 + 30 * range], [this.mesh.position.z - 15 - 30 * range, this.mesh.position.z + 15 + 30 * range]];
            for (let i = players.length - 1; i >= 0; i--) {
                if (this.between(players[i].x * 30, squarerange[0]) && this.between(players[i].y * 30, squarerange[1])) {
                    var found = false;
                    //check if player is not already a target
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

    //if player is blocked, then hit the blocked enemies in priority
    getBlockedEnemyInRange(enemies, targets) {
        var instance = this;
        var res = [];
        var targetcount = targets;
        var squarerange = [[this.x * 30 - 15, this.x * 30 + 15], [this.y * 30 - 15, this.y * 30 + 15]];

        for (let i = 0; i < enemies.length; i++) {
            if (enemies[i].blockingplayer == this && !enemies[i].spawning && !enemies[i].invincible) {
                res.push(enemies[i])
                targetcount--;
                if (targetcount <= 0)
                    return res;
            }
        }

        //sort by distance between the player
        enemies.sort(function (x, y) {
            if (x.getDistanceFromPlayer(instance) < y.getDistanceFromPlayer(instance)) {
                return -1;
            }
            if (x.getDistanceFromPlayer(instance) > y.getDistanceFromPlayer(instance)) {
                return 1;
            }
            return 0;
        });

        //sort by taunt
        enemies.sort(function (x, y) {

            if (x.buffs.getTauntLevel() > y.buffs.getTauntLevel()) {
                return -1;
            }
            if (x.buffs.getTauntLevel() < y.buffs.getTauntLevel()) {
                return 1;
            }
            return 0;
        });

        //if player can hit more targets, get player range and find enemies that can be hit outside of blocked

        var rangeexpand = 0
        var range = this.buffs.getFinalRange(this.chara.range)
        var line = false
        if (range / 0.5 % 2 != 0) {
            if ((range - 0.3) % Math.round(range) == 0) {
                range = this.buffs.getFinalRange(this.chara.range) - 0.3
                line = true;
            }
            else {
                range = this.buffs.getFinalRange(this.chara.range) - 0.5
                rangeexpand += 1
            }
        }


        if (range > 0 && targets > 1) {
            var squarerange = [[this.x * 30 - 15 - 30 * range, this.x * 30 + 15 + 30 * range], [this.y * 30 - 15 - 30 * range, this.y * 30 + 15 + 30 * range]];
            for (let i = enemies.length - 1; i >= 0; i--) {
                var counter = Math.abs(Math.abs(Math.round(enemies[i].mesh.position.x / 30) - this.x) - range);
                if (this.between(enemies[i].mesh.position.x, squarerange[0]) && this.between(enemies[i].mesh.position.z, squarerange[1]) && !enemies[i].spawning && !enemies[i].invincible) {
                    var x = Math.round(enemies[i].mesh.position.x / 30)
                    var z = Math.round(enemies[i].mesh.position.z / 30)
                    if (Math.abs(z - this.y) <= counter + rangeexpand) {
                        var found = false;

                        //check if enemy is not already a target
                        for (let j = 0; j < res.length; j++) {
                            if (res[j].id == enemies[i].id)
                                found = true;
                        }
                        if (line && !(x - this.x == 0 || z - this.y == 0)) {
                            found = false
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

    //get player for healing, heal the player with the least amount of hp % in priority
    getLowestHpPlayerInRange(players, ranget, targets) {
        var rangeexpand = 0
        var range = ranget
        if (range / 0.5 % 2 != 0) {
            range = ranget - 0.5
            rangeexpand += 1
        }
        var squarerange = [[this.x * 30 - 15 - 30 * range, this.x * 30 + 15 + 30 * range], [this.y * 30 - 15 - 30 * range, this.y * 30 + 15 + 30 * range]];
        var targetcount = targets;
        var res = [];
        for (let i = 0; i < players.length; i++) {
            var counter = Math.abs(Math.abs(Math.round(players[i].mesh.position.x / 30) - this.x) - range);
            if (this.between(players[i].x * 30, squarerange[0]) && this.between(players[i].y * 30, squarerange[1]) && players[i].hp < players[i].chara.hp) {
                if (Math.abs(Math.round(players[i].mesh.position.z / 30) - this.y) <= counter + rangeexpand) {
                    if (res.length < targetcount)
                        res.push(players[i])
                    else {
                        let count = 99
                        for (let j = 0; j < res.length; j++) {
                            if ((players[i].hp / players[i].maxhp) < res[j].hp / res[j].maxhp) {
                                if (count == 99) {
                                    count = j;
                                }
                                else if (res[count].hp / res[count].maxhp > res[j].hp / res[j].maxhp)
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

    // get first enemy in range
    // enemies is the list of the enemies on the map
    // range is the range of the player
    // targets is the number of targets
    getFirstEnemyInRange(enemies, ranget, targets) {
        var instance = this;

        //sort by distance between the player
        enemies.sort(function (x, y) {
            if (x.getDistanceFromPlayer(instance) < y.getDistanceFromPlayer(instance)) {
                return -1;
            }
            if (x.getDistanceFromPlayer(instance) > y.getDistanceFromPlayer(instance)) {
                return 1;
            }
            return 0;
        });

        //sort enemies by taunt level
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
        var rangeexpand = 0
        var range = ranget
        var line = false
        if (range / 0.5 % 2 != 0) {
            if ((range - 0.3) % Math.round(range) == 0) {
                range = ranget - 0.3
                line = true;
            }
            else {
                range = ranget - 0.5
                rangeexpand += 1
            }
        }

        var squarerange = [[this.x * 30 - 15 - 30 * range, this.x * 30 + 15 + 30 * range], [this.y * 30 - 15 - 30 * range, this.y * 30 + 15 + 30 * range]];

        for (let i = 0; i < enemies.length; i++) {
            var counter = Math.abs(Math.abs(Math.round(enemies[i].mesh.position.x / 30) - this.x) - range);
            if (this.between(enemies[i].mesh.position.x, squarerange[0]) && this.between(enemies[i].mesh.position.z, squarerange[1]) && !enemies[i].spawning && !enemies[i].invincible) {
                var x = Math.round(enemies[i].mesh.position.x / 30)
                var z = Math.round(enemies[i].mesh.position.z / 30)
                if (Math.abs(z - this.y) <= counter + rangeexpand) {
                    if (line) {
                        if (x - this.x == 0 || z - this.y == 0) {
                            res.push(enemies[i])
                            targetcount--;
                        }
                    }
                    else {
                        res.push(enemies[i])
                        targetcount--;
                    }
                    if (targetcount <= 0)
                        return res;
                }
            }
        }
        return res;
    }

    //get enemies hit by splash in a radius from the center (first enemy hit)
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

    //receive damage used by player
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
            //if hit by hazard, then always true damage
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

        //update hp bar after receiving damage
        this.updateHpBar();

        //if dead
        if (this.hp <= 0) {
            if (!this.dead) {
                //boolean to avoid playing the sound multiple times from different enemies hitting a dying player at once
                this.lvlcontroller.playSound("charadead", 0.3)
                this.dead = true;

                //dispose of all the scene elements
                this.mesh.dispose(true, true)
                this.healthBar.dispose()
                this.skillBar.dispose()
                this.shadow.dispose()
                this.skillready.dispose()

                if (this.aura != undefined)
                    this.aura.dispose()
                var keys = Object.keys(this.buffs.effectSprite)
                for (let i = 0; i < keys.length; i++)
                    this.buffs.effectSprite[keys[i]].dispose()

                //play death animation
                this.sprite.playAnimation(this.chara.death.start, this.chara.death.end, false, 30 * this.gamespeed);

                var instance = this
                var interval = setInterval(() => {
                    if (instance.sprite.cellIndex == instance.chara.death.end) {
                        //after death animation is over, remove the sprite
                        instance.sprite.dispose()
                        clearInterval(interval);
                    }
                }, 1);
                this.hp = -999
            }
        }
    }

    //if game paused, freeze the sprite and remember the pause sprite
    pause() {
        this.pauseSpriteIndex = this.sprite.cellIndex;
        this.sprite.stopAnimation();
    }

    //resume animations after finishing pause
    resume() {
        var keys = ["atkanim", "death", "start", "drop", "spatk"]

        this.running = false;
        for (let i = 0; i < keys.length; i++) {
            if (this.chara[keys[i]] != undefined) {
                if (this.pauseSpriteIndex >= this.chara[keys[i]].start && this.pauseSpriteIndex <= this.chara[keys[i]].end)
                    this.sprite.playAnimation(this.pauseSpriteIndex, this.chara[keys[i]].end, false, 30 * this.gamespeed * this.chara[keys[i]].duration);
            }
        }
        if (this.pauseSpriteIndex >= this.chara.atkanim.start && this.pauseSpriteIndex <= this.chara.atkanim.end) {
            this.sprite.playAnimation(this.chara.atkanim.start, this.chara.atkanim.end, true, 30 * this.gamespeed * this.chara.atkinterval * this.chara.atkanim.duration);
        }
        if (this.pauseSpriteIndex >= this.chara.idle.start && this.pauseSpriteIndex <= this.chara.idle.end) {
            this.sprite.playAnimation(this.chara.idle.start, this.chara.idle.end, true, 30 * this.gamespeed * this.chara.idle.duration);
        }
        if (this.chara.skillidle != undefined) {
            if (this.pauseSpriteIndex >= this.chara.skillidle.start && this.pauseSpriteIndex <= this.chara.skillidle.end) {
                this.sprite.playAnimation(this.chara.skillidle.start, this.chara.skillidle.end, true, 30 * this.gamespeed * this.chara.skillidle.duration);
            }
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

}
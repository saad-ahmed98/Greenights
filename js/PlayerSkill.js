class PlayerSkill {
    constructor(name, duration, currentsp, totalsp, chargetype, triggertype, modifiers, apply, source, applyeffects) {
        this.name = name;
        this.duration = duration;
        this.durationtimer = duration;
        this.currentsp = currentsp;
        this.totalsp = totalsp;
        this.chargetype = chargetype;
        this.triggertype = triggertype;
        this.modifiers = modifiers;
        this.apply = apply;
        this.targets = [];
        this.active = false;
        this.skillimage = source;
        this.applyeffects = applyeffects
    }
    activateDurationSkill(targets, lvl) {
        this.currentsp = 0;
        this.active = true;
        var keys = Object.keys(this.modifiers)
        if (keys.includes("instantdp")) {
            lvl.currentdp = Math.min(lvl.dplimit, lvl.currentdp + this.modifiers.instantdp)
            lvl.gui.updatePlayerWheelUI(lvl.currentdp, lvl.squadlimit)
        }

        if (keys.includes("instantsleep")) {
            let enemy = targets[0].getBlockedEnemyInRange(lvl.enemies, 99,true);
            
            if (enemy.length > 0) {
                for (let i=0;i<enemy.length;i++){
                    enemy[i].applyAsleep(this.modifiers.instantsleep)
                }
            }
        }

        for (let i = 0; i < targets.length; i++) {
            if (this.modifiers.instantheal != undefined) {
                targets[i].hp = Math.min(targets[i].maxhp, targets[i].hp + targets[i].maxhp * this.modifiers.instantheal)
                targets[i].updateHpBar()
            }

            targets[i].buffs.buffs[this.name] = { "name": this.name, "modifiers": this.modifiers }
            if (this.applyeffects != undefined) {
                if (this.applyeffects.apply == "aliveallies")
                    targets[i].alivebuffs.push(JSON.parse(JSON.stringify(this.applyeffects)))
                else targets[i].buffs.applyeffects[this.name] = this.applyeffects
            }
        }
        this.targets = targets;

    }

    activateSkillBomb(player, lvl) {
        var skillbomb = this.modifiers.skillbomb;
        var enemies = lvl.enemies
        var enemy = [];
        if (!player.canHitFlying())
            enemies = enemies.filter(e => (e.chara.type == "g"))
        if (skillbomb == undefined)
            return;
        if (skillbomb.dmgtype == "heal")
            enemy = player.getLowestHpPlayerInRange(lvl.activePlayers, skillbomb.range, skillbomb.targets);
        else {
            enemy = player.getFirstEnemyInRange(enemies, skillbomb.range, skillbomb.targets);
        }
        if (enemy.length > 0) {
            if (skillbomb.dmgtype == "heal") {
                for (let i = 0; i < enemy.length; i++)
                    enemy[i].receiveHealing(player);
            }
            else {
                for (let i = 0; i < enemy.length; i++) {
                    enemy[i].receiveDamage(player, false, skillbomb.dmg, skillbomb.dmgtype, skillbomb.applyeffects);

                }
            };
        }
    }

    activateDmgUpSkill() {
        return this.modifiers.dmg
    }


    deactivateDurationSkill() {
        this.duration = this.durationtimer;
        this.active = false;

        for (let i = 0; i < this.targets.length; i++) {
            delete this.targets[i].buffs.buffs[this.name]
            if (this.applyeffects != undefined) {
                if (this.applyeffects.apply == "aliveallies") {
                    for (let j = 0; j < this.targets[i].alivebuffs.length; j++) {
                        if (this.applyeffects.name == this.targets[i].alivebuffs[j].name) {
                            this.targets[i].alivebuffs.splice(j, 1)
                            j--
                        }
                    }

                }
                else delete this.targets[i].buffs.applyeffects[this.name]
            }
        }
    }
    applyHitEffects(b, enemy) {
        var ef = this.applyeffects
        if (ef != undefined) {
            if (ef.apply == "hit") {
                b.effects[this.name] = ef.duration
                b.buffs[this.name] = { "name": this.name, "modifiers": ef.modifiers }
                if (ef.effecticon != undefined && b.effectSprite[this.name] == undefined)
                    enemy.createDebuffAura(this.name, ef.effecticon)
            }

        }
    }

}

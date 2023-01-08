class EnemySkill {
    constructor(name, triggertype, modifiers, aura, skilltype, targettype, auratype) {
        this.name = name;

        this.triggertype = triggertype;
        this.skilltype = skilltype;

        this.modifiers = modifiers;
        this.targettype = targettype

        this.targets = [];
        this.active = false;
        this.aura = aura;
        this.auratype = auratype;
        this.durationtimer = 0

    }

    activateSkill(targets, override = false) {
        //if skill is standby type, then disable waiting
        if (this.skilltype == "sarkazstandby") {
            targets[0].running = false;
            targets[0].waittimer += 9999999;
        }
        this.active = true;
        //create buff aura if applicable, if override then force buff aura (used usually when you have "all" skill but only want aura on the caster)
        for (let i = 0; i < targets.length; i++) {
            if (this.aura || override) {
                if (targets[i].aura == undefined)
                    targets[i].createBuffAura(this.auratype)
            }
            targets[i].buffs.buffs[this.name] = { "name": this.name, "modifiers": this.modifiers }
            //if sarkaz alert skill, activate standby enemies
            if (this.skilltype == "sarkazalert") {
                if (targets[i].chara.enemytype == "standby" && targets[i].buffs.getStandby()) {
                    targets[i].activateSkillAnims()
                    targets[i].playerSkill.activateSkill([targets[i]])
                }
            }
        }
    }

    //update skill buffs
    updateSkill(targets) {
        for (let i = 0; i < targets.length; i++) {
            if (targets[i].buffs.buffs[this.name] == undefined)
                targets[i].buffs.buffs[this.name] = { "name": this.name, "modifiers": this.modifiers }
        }
    }

    //update skill buffs
    updateDurationSkill(target) {
        this.durationtimer += (1 / 30) / target.gamespeed
        if (target.buffs.buffs[this.name] != undefined) {
            if (this.durationtimer >= target.buffs.buffs[this.name].modifiers.duration)
                this.deactivateSkill([target], true)
        }
    }

    updateBloodboilSkill(target) {
        if (target.buffs.buffs[this.name] == undefined) {
            target.buffs.buffs[this.name] = {
                "name": this.name, "modifiers": JSON.parse(JSON.stringify(this.modifiers))
            }
            if (target.aura == undefined && this.modifiers.stack>1)
                target.createBuffAura(this.auratype)

        }
        else if (this.durationtimer < this.modifiers.stack) {
            var keys = Object.keys(this.modifiers)
            for (let i = 0; i < keys.length; i++)
                target.buffs.buffs[this.name].modifiers[keys[i]] += this.modifiers[keys[i]]
        }
        this.durationtimer++;
        if (this.durationtimer >= this.modifiers.stack && target.invincibleaura == undefined) {
            target.createRageAura()
            target.activateSkillAnims()
        }

    }

    activateSkillBomb(enemy, lvl) {
        var skillbomb = this.modifiers.skillbomb;
        var players = [];
        if (skillbomb == undefined)
            return;
        players = enemy.getFirstPlayerInRange(lvl.activePlayers, skillbomb.range, skillbomb.targets)

        if (players.length > 0) {
            for (let i = 0; i < players.length; i++) {
                players[i].receiveDamage(enemy, false, skillbomb.dmg)
                if (skillbomb.cold != undefined)
                    players[i].applyCold(skillbomb.cold)
            }
        }
    }

    //deactivate skill
    deactivateSkill(targets, removeaura = false) {
        this.active = false;
        for (let i = 0; i < targets.length; i++) {
            delete targets[i].buffs.buffs[this.name]
            if (removeaura) {
                targets[i].aura.dispose()
                targets[i].aura = undefined
            }
        }
    }
}

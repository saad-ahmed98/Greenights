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
        //this.infinite;

    }
    activateDurationSkill(targets, lvl) {
        this.currentsp = 0;
        this.active = true;

        var keys = Object.keys(this.modifiers)
        if (keys.includes("instantdp")) {
            lvl.currentdp += this.modifiers.instantdp
            lvl.gui.updatePlayerWheelUI(lvl.currentdp, lvl.squadlimit)
        }

        for (let i = 0; i < targets.length; i++) {

            targets[i].buffs.buffs[this.name] = { "name": this.name, "modifiers": this.modifiers }
            if (this.applyeffects != undefined)
                targets[i].buffs.applyeffects[this.name] = this.applyeffects

        }

        this.targets = targets;

    }

    activateDmgUpSkill() {
        return this.modifiers.dmg
    }


    deactivateDurationSkill() {
        this.duration = this.durationtimer;
        this.active = false;

        for (let i = 0; i < this.targets.length; i++) {
            delete this.targets[i].buffs.buffs[this.name]
            if (this.applyeffects != undefined)
                delete this.targets[i].applyeffects[this.name]
        }
    }
    applyHitEffects(b) {
        var ef = this.applyeffects
        if (ef != undefined) {
            if (ef.apply == "hit") {
                b.effects[this.name] = ef.duration
                b.buffs[this.name] = { "name": this.name, "modifiers": ef.modifiers }
            }

        }
    }

}

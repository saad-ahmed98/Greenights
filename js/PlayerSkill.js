class PlayerSkill {
    constructor(name, duration, currentsp, totalsp, chargetype, triggertype, modifiers, apply,source) {
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
        //this.infinite;

    }
    activateDurationSkill(targets,lvl) {
        this.currentsp = 0;
        this.active = true;

        var keys = Object.keys(this.modifiers)
        if(keys.includes("instantdp")){
            lvl.currentdp += this.modifiers.instantdp
            lvl.gui.updatePlayerWheelUI(lvl.currentdp, lvl.squadlimit)
        }

        for (let i = 0; i < targets.length; i++)
            targets[i].buffs.buffs[this.name]={"name":this.name,"modifiers":this.modifiers}
        
        this.targets = targets;

    }

    activateDmgUpSkill() {
        this.currentsp = -1;
        return this.modifiers.dmg
    }


    deactivateDurationSkill() {
        this.duration = this.durationtimer;
        this.active = false;

        for (let i = 0; i < this.targets.length; i++)
            delete this.targets[i].buffs.buffs[this.name]

    }
    
}

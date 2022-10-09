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

    }

    activateSkill(targets, override = false) {
        if (this.skilltype == "sarkazstandby") {
            targets[0].running = false;
            targets[0].waittimer += 9999999;
        }
        this.active = true;
        for (let i = 0; i < targets.length; i++) {
            if (this.aura || override) {
                if (targets[i].aura == undefined)
                    targets[i].createBuffAura(this.auratype)
            }
            targets[i].buffs.buffs[this.name] = { "name": this.name, "modifiers": this.modifiers }
            if (this.skilltype == "sarkazalert") {
                if (targets[i].chara.enemytype == "standby" && targets[i].buffs.getStandby()) {
                    targets[i].activateSkillAnims()
                    targets[i].enemySkill.activateSkill([targets[i]])
                }
            }
        }
    }

    updateSkill(targets) {
        for (let i = 0; i < targets.length; i++) {
            if (targets[i].buffs.buffs[this.name] == undefined)
                targets[i].buffs.buffs[this.name] = { "name": this.name, "modifiers": this.modifiers }
        }
    }

    deactivateSkill(targets,removeaura=false) {
        this.active = false;
        for (let i = 0; i < targets.length; i++) {
            delete targets[i].buffs.buffs[this.name]
            if(removeaura){
                targets[i].aura.dispose() 
                targets[i].aura=undefined
            }
        }
    }

}

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
                    targets[i].enemySkill.activateSkill([targets[i]])
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

    //deactivate skill
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

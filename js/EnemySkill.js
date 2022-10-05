class EnemySkill {
    constructor(name, triggertype, modifiers, aura, skilltype) {
        this.name = name;

        this.triggertype = triggertype;
        this.skilltype = skilltype;

        this.modifiers = modifiers;

        this.targets = [];
        this.active = false;
        this.aura = aura;

    }

    activateSkill(targets) {
        if (this.skilltype == "sarkazstandby") {
            targets[0].running = false;
            targets[0].waittimer += 9999999;
        }
        this.active = true;
        for (let i = 0; i < targets.length; i++) {
            if (this.aura) {
                if (targets[i].aura == undefined)
                    targets[i].createBuffAura()
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

}

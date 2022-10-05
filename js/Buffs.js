class Buffs {
    constructor() {
        this.modifiers = {};
        this.buffs = {};
    }

    initModifiers() {
        this.modifiers = {
            aspd: 0,
            atkinterval: 0,
            atk: 0,
            def: 0,
            flatdef: 0,
            inspireatk: 0,
            range: 0,
            flatres: 0,
            res: 0,
            dmg: 1,
            critdmg : 0,
            critchance :0,
            dponkill: 0,
            block: 0,
            targets:0,
            splash:false,
            splashradius:0,
            dmgtype:"",

            dmgpen:true,

        }
    }

    sumBuffs() {
        var keys = Object.keys(this.buffs);
        for (let i = 0; i < keys.length; i++) {
            var keysmodifiers = Object.keys(this.buffs[keys[i]].modifiers);
            for (let j = 0; j < keysmodifiers.length; j++) {
                if(typeof this.modifiers[keysmodifiers[j]] == "boolean")
                this.modifiers[keysmodifiers[j]] = this.buffs[keys[i]].modifiers[keysmodifiers[j]]
                else this.modifiers[keysmodifiers[j]] += this.buffs[keys[i]].modifiers[keysmodifiers[j]]
            }

        }
    }

    getFinalAtk(atk) {
        this.initModifiers();
        this.sumBuffs();
        return Math.round((atk * (1 + this.modifiers.atk)));
    }

    getFinalAtkInterval(atkinterval) {
        this.initModifiers();
        this.sumBuffs();
        return 100/((100+this.modifiers.aspd)/(atkinterval+this.modifiers.atkinterval));
    }

    getFinalDef(def) {
        this.initModifiers();
        this.sumBuffs();
        return Math.round((def * (1 + this.modifiers.def)));
    }

    getDpOnKill(){
        this.initModifiers();
        this.sumBuffs();
        return this.modifiers.dponkill;
    }

    getSplash(){
        this.initModifiers();
        this.sumBuffs();
        return {"splash":this.modifiers.splash,"radius":this.modifiers.splashradius}
    }

    getTargets(){
        this.initModifiers();
        this.sumBuffs();
        return this.modifiers.targets;
    }

    getDmgType(){
        this.initModifiers();
        this.sumBuffs();
        return this.modifiers.dmgtype;
    }

    getDmgPen(){
        this.initModifiers();
        this.sumBuffs();
        return this.modifiers.dmgpen;
    }

    getCritModifier(){
        this.initModifiers();
        this.sumBuffs();
        if(Math.random()<=this.modifiers.critchance && this.modifiers.critchance>0)
        return this.modifiers.critdmg;
        else return 1;
    }
}
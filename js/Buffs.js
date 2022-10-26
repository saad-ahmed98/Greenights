class Buffs {
    constructor() {
        this.modifiers = {};
        this.buffs = {};

        //temporary effects received by third parties
        this.effects = {};

        //effects to apply depending on condition
        this.applyeffects = {};

        //icons in case of debuffs
        this.effectSprite = {};
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
            critdmg: 0,
            critchance: 0,
            dponkill: 0,
            block: 0,
            targets: 0,
            splash: false,
            splashradius: 0,
            dmgtype: "",
            doublehitchance: 0,
            dmgpen: true,
            taunt:1,
            maxhp:1,
            flatmultiatk:1,
            flatmultidef:1,
            canattack:true,
            flathpregen:0,
            hpregenpercent:0,
        }
    }

    sumBuffs() {
        var keys = Object.keys(this.buffs);
        for (let i = 0; i < keys.length; i++) {
            var keysmodifiers = Object.keys(this.buffs[keys[i]].modifiers);
            for (let j = 0; j < keysmodifiers.length; j++) {
                //if boolean then we change the value
                if (typeof this.modifiers[keysmodifiers[j]] == "boolean")
                    this.modifiers[keysmodifiers[j]] = this.buffs[keys[i]].modifiers[keysmodifiers[j]]
                else {
                    //if movspeed change, then have at least a min of 0.1
                    if(keysmodifiers[j]=="flatmultiatk" || keysmodifiers[j]=="flatmultidef" || keysmodifiers[j]=="speedpercent"){

                        this.modifiers[keysmodifiers[j]] *=this.buffs[keys[i]].modifiers[keysmodifiers[j]]
                    }
                    //add the values to the currently known value
                    else
                        this.modifiers[keysmodifiers[j]] += this.buffs[keys[i]].modifiers[keysmodifiers[j]]
                }
            }

        }
    }

    getFinalAtk(atk) {
        this.initModifiers();
        this.sumBuffs();
        return Math.max(0,Math.round(((atk *this.modifiers.flatmultiatk)* (1 + this.modifiers.atk))));
    }

    getFinalAtkInterval(atkinterval) {
        this.initModifiers();
        this.sumBuffs();
        return 100 / ((100 + this.modifiers.aspd) / (atkinterval + this.modifiers.atkinterval));
    }

    getFinalDef(def) {
        this.initModifiers();
        this.sumBuffs();
        return Math.max(0,Math.round(((def+this.modifiers.flatdef) *(this.modifiers.flatmultidef)* (1 + this.modifiers.def))));
    }

    getFinalRes(res) {
        this.initModifiers();
        this.sumBuffs();
        return Math.max(0,Math.round(((res+this.modifiers.flatres) * (1 + this.modifiers.res))));
    }

    getDpOnKill() {
        this.initModifiers();
        this.sumBuffs();
        return this.modifiers.dponkill;
    }

    getCanAttack() {
        this.initModifiers();
        this.sumBuffs();
        return this.modifiers.canattack;
    }

    getSplash() {
        this.initModifiers();
        this.sumBuffs();
        return { "splash": this.modifiers.splash, "radius": this.modifiers.splashradius }
    }

    getTargets() {
        this.initModifiers();
        this.sumBuffs();
        return this.modifiers.targets;
    }

    getDmgType() {
        this.initModifiers();
        this.sumBuffs();
        return this.modifiers.dmgtype;
    }

    getDmgPen() {
        this.initModifiers();
        this.sumBuffs();
        return this.modifiers.dmgpen;
    }

    getTauntLevel() {
        this.initModifiers();
        this.sumBuffs();
        return this.modifiers.taunt;
    }

    getCritModifier() {
        this.initModifiers();
        this.sumBuffs();
        if (Math.random() <= this.modifiers.critchance && this.modifiers.critchance > 0)
            return this.modifiers.critdmg;
        else return 1;
    }

    getDoubleHitChance() {
        this.initModifiers();
        this.sumBuffs();
        if (Math.random() <= this.modifiers.doublehitchance && this.modifiers.doublehitchance > 0)
            return true
        return false;
    }

    getCurrentHpRatio(hp,maxhp,charahp){
        this.initModifiers();
        this.sumBuffs();
        var newmaxhp = Math.round(charahp*this.modifiers.maxhp)
        if(newmaxhp==maxhp)
            return {"hp":hp,"maxhp":maxhp}
        var currentratio  = hp/maxhp
        return {"hp":Math.round(newmaxhp*currentratio),"maxhp":newmaxhp}
    }

    getFinalHpRegen(maxhp){
        this.initModifiers();
        this.sumBuffs();
        return this.modifiers.flathpregen+maxhp*this.modifiers.hpregenpercent
    }

    getFinalBlock(block){
        this.initModifiers();
        this.sumBuffs();
        return block+this.modifiers.block
    }

    getFinalRange(range){
        this.initModifiers();
        this.sumBuffs();
        return range+this.modifiers.range
    }
}
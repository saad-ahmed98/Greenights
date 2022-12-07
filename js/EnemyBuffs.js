class EnemyBuffs extends Buffs {
    constructor() {
        super()
    }

    initModifiers() {
        this.modifiers = {
            aspd: 0,
            atkinterval: 0,
            atk: 0,
            def: 0,
            flatdef: 0,
            range: 0,
            flatres: 0,
            res: 0,
            dmg: 1,
            targets: 0,
            splash: false,
            splashradius: 0,
            dmgtype: "",
            standby: true,
            speed: 0,
            taunt: 1,
            inspire: false,
            speedpercent:1,
            flatmultiatk:1,
            flatmultidef:1,
            flathpregen:0,
            hpregenpercent:0,
            dmgreduction:0,
            hpregenbuff:1,
            lifesteal:0,
            attacks: 1,
            frozenmod: 1,

        }
    }

    getStandby() {
        this.initModifiers();
        this.sumBuffs();
        return this.modifiers.standby;
    }

    getFinalSpeed(speed){
        this.initModifiers();
        this.sumBuffs();
        return (speed + this.modifiers.speed)*(this.modifiers.speedpercent)
    }
    getInspire(){
        this.initModifiers();
        this.sumBuffs();
        return this.modifiers.inspire;
    }
    getHPRecovered(dmg){
        this.initModifiers();
        this.sumBuffs();
        return dmg*this.modifiers.lifesteal
    }

    getFrozenModifier() {
        this.initModifiers();
        this.sumBuffs();
        return this.modifiers.frozenmod;
    }
}
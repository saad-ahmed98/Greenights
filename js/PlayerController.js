class PlayerController extends CharaController {
    constructor(chara, scene, x, y,lvlcontroller) {
        super(chara, scene, x, y,lvlcontroller)
        this.blocking = 0;
        this.blockingpoints = new Array(this.blockcount).fill(undefined);
        this.spawning = true;
        this.skillBar;
        this.playerSkill = new PlayerSkill(chara.skill.name, chara.skill.duration, chara.skill.initialsp, chara.skill.sp, chara.skill.chargetype, chara.skill.triggertype, chara.skill.modifiers, chara.skill.apply,chara.skill.skillimage)
        this.buffs = new Buffs();

        this.skillready;

        this.aura;

    }

    createSkillAura(auraManager){
        this.aura = new BABYLON.Sprite("", auraManager);
        this.aura.playAnimation(0, 3, true, 30*this.gamespeed);
        this.aura.position = new BABYLON.Vector3(-5 + this.x * 30, 20, 6 + this.y * 30);
        this.aura.size = 65;
        this.aura.width = 100;

        this.aura.position.z -= this.y * 1;
        this.aura.position.x -= this.x * 1;

    }


    updateSpeed(gamespeed,pause) {
        this.gamespeed = gamespeed;
        this.sprite.delay = 30 * this.gamespeed
        if(pause)
            this.sprite.stopAnimation()
    }

    createPlayer(id, spriteManager, gui, shadowManager,skillManager) {
        this.mesh = this.scene.assets.meshchara.clone(id)


        this.mesh.position.z = 0 + this.y * 30;
        this.mesh.position.x = 0 + this.x * 30;
        this.mesh.position.y = 10;
        this.mesh.visibility = 0;

        this.shadow = new BABYLON.Sprite(id + "shadow", shadowManager);
        this.shadow.size = 65;
        this.shadow.width = 90;

        this.skillready = new BABYLON.Sprite(id + "skillready", skillManager);
        this.skillready.size = 65;
        this.skillready.width = 90;


        var player0 = new BABYLON.Sprite(id, spriteManager);

        player0.position = new BABYLON.Vector3(-10 + this.x * 30, 20, 6 + this.y * 30);
        this.shadow.position = new BABYLON.Vector3(-10 + this.x * 30, 20, 6 + this.y * 30);
        this.skillready.position = new BABYLON.Vector3(-10 + this.x * 30, 20, 6 + this.y * 30);


        player0.size = 65;
        player0.width = 90;
        this.sprite = player0;


        var instance = this

        this.sprite.playAnimation(this.chara.drop.start, this.chara.drop.end, false, this.gamespeed * 30);

        this.mesh.position.z -= this.y;
        this.mesh.position.x -= this.x;

        this.sprite.position.z -= this.y;
        this.sprite.position.x -= this.x;

        this.shadow.position.z -= this.y;
        this.shadow.position.x -= this.x;

        
        this.skillready.position.z -= this.y;
        this.skillready.position.x -= this.x;

        this.skillready.isVisible = false

       
        this.addHPBar(gui);
        this.addSkillBar(gui);

        this.activateTalents();

        var interval = setInterval(() => {
            if (instance.sprite.cellIndex == instance.chara.drop.end) {
                instance.spawning = false;
                clearInterval(interval);
            }
        }, 1);


    }
    updateSkillBarCharging(){

        this.skillBar.value = Math.round(this.playerSkill.currentsp / this.playerSkill.totalsp * 100)
        this.skillBar.color = "yellow";
        

    }
    updateSkillBarTrigger(){
        this.skillBar.value = Math.round(this.playerSkill.duration / this.playerSkill.durationtimer * 100)
        this.skillBar.color = "orange";
        
    }

    activateTalents(){
        var talents = this.chara.talents;
        for(let i =0;i<talents.length;i++){
            if(talents[i].apply=="self")
                this.buffs.buffs[talents[i].name] = {"name":talents[i].name,"modifiers":talents[i].modifiers}
        }
    }

    addHPBar(gui) {
        this.healthBar = gui.addHPBar(this.mesh, "green", 30, "5%");
    }
    addSkillBar(gui) {
        this.skillBar = gui.addHPBar(this.mesh, "yellow", 35, "5%");
        this.skillBar.value = this.playerSkill.initialsp;
    }


    attack(enemies, players) {
        var enemy;
        if (this.chara.dmgtype == "heal")
            enemy = this.getLowestHpPlayerInRange(players, this.chara.range,this.chara.targets+this.buffs.getTargets());
        else {
            if (this.blocking == 0) {
                enemy = this.getFirstEnemyInRange(enemies, this.chara.range,this.chara.targets+this.buffs.getTargets());
            }
            else {
                enemy = this.getBlockedEnemyInRange(enemies, this.chara.targets+this.buffs.getTargets())
                //enemy = this.getFirstEnemyInRange(enemies, 0,this.chara.targets+this.buffs.getTargets())
            }
        }
        if (enemy.length>0) {
            this.running = false;
            if (enemy[0].mesh.position.z <= this.mesh.position.z)
                this.sprite.invertU = 1
            else this.sprite.invertU = 0;

            this.sprite.playAnimation(this.chara.atkanim.start, this.chara.atkanim.end, false, this.buffs.getFinalAtkInterval(1)*30 * this.gamespeed);
            if(this.chara.sfx.atk!=undefined)
            this.lvlcontroller.playSound(this.chara.name+"-atk",this.chara.sfx.atk.volume)

            var instance = this

            var interval = setInterval(() => {
                if (instance.sprite.cellIndex >= instance.chara.atkanim.contact && instance.hp > 0) {
                    if(this.chara.sfx.hit!=undefined)
                    this.lvlcontroller.playSound(this.chara.name+"-hit",this.chara.sfx.hit.volume)

                    if (instance.chara.dmgtype == "heal"){
                        for(let i = 0;i<enemy.length;i++)
                        enemy[i].receiveHealing(instance);
                    }
                    else {
                        for(let i = 0;i<enemy.length;i++)
                        enemy[i].receiveDamage(instance)
                    };
                    if(instance.playerSkill.chargetype=="attack" && !instance.playerSkill.active){
                        instance.playerSkill.currentsp = Math.min(instance.playerSkill.currentsp+1,instance.playerSkill.totalsp);
                        instance.updateSkillBarCharging();
                    }
                    clearInterval(interval);
                }
            }, 1);
            return true;
        }
        return false;
    }


    move(enemies, players) {
        if (!this.spawning) {
            if (!this.resuming) {
                if (!this.running && !this.sprite.animationStarted) {
                    this.sprite.playAnimation(this.chara.idle.start, this.chara.idle.end, true, this.gamespeed * 30);
                    this.running = true;
                }
                this.atktimer += 1 / this.gamespeed;
                if (this.atktimer >= this.buffs.getFinalAtkInterval(this.chara.atkinterval) * 20) {
                    this.atktimer = 0;
                    var success = this.attack(enemies, players);
                    if (!success)
                        this.atktimer += 10000
                }
            }
        }
    }

}
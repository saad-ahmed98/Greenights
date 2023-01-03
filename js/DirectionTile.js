class DirectionTile {
    constructor(tile, lvlcontroller, x, y) {
        this.tile = tile;
        this.name = "direction"
        this.skillBar;
        this.scene = lvlcontroller.scene;

        this.skillBar;

        this.lvlcontroller = lvlcontroller
        this.x = this.tile.x
        this.y = this.tile.z
        this.directionx = x;
        this.directiony = y;

        this.totalsp = 0;
        this.dmg = 0
        this.currentsp = 0


        //sp at which the atk effect starts triggering
        this.displaysp = 0

    }


    //brings sp back to 0 or to random value
    resetSP() {
    }

    //update skill bar sp
    updateSkillBarCharging() {
        //nothing
    }

    //activate skill
    //apply buff to all enemies and players
    activateSkill(players, enemies) {
        //get all targets

        let hitenemies = this.getEnemiesInRange(enemies, 0)
        for (let i = 0; i < hitenemies.length; i++) {

            hitenemies[i].buffs.buffs[this.name] = { "name": this.name, "modifiers": { "speedpercent": hitenemies[i].directionMovement(this.directionx, this.directiony) } }
            hitenemies[i].buffs.effects[this.name] = 0.1
            /*
            if (hitenemies[i].buffs.effectSprite[this.name] == undefined)
                hitenemies[i].createDebuffAura(this.name, 11)
                */
        }

        let hitplayers = this.getEnemiesInRange(players, 0)
        //hit all the players
        for (let i = 0; i < hitplayers.length; i++) {
            hitplayers[i].buffs.buffs[this.name] = { "name": this.name, "modifiers": { "directiony": this.directiony, "directionx": this.directionx, "atk": 0.30 } }
            hitplayers[i].buffs.effects[this.name] = 300
            /*
            if (hitplayers[i].buffs.effectSprite[this.name] == undefined)
                hitplayers[i].createDebuffAura(this.name, 2)
                */

        }

    }

    getEnemiesInRange(enemies, range) {
        var res = [];
        var squarerange = [[this.x * 30 - 15 - 30 * range, this.x * 30 + 15 + 30 * range], [this.y * 30 - 15 - 30 * range, this.y * 30 + 15 + 30 * range]];

        for (let i = 0; i < enemies.length; i++) {
            var counter = Math.abs(Math.abs(Math.round(enemies[i].mesh.position.x / 30) - this.x) - range);
            if (this.between(enemies[i].mesh.position.x, squarerange[0]) && this.between(enemies[i].mesh.position.z, squarerange[1]) && !enemies[i].spawning && !enemies[i].invincible) {
                if (Math.abs(Math.round(enemies[i].mesh.position.z / 30) - this.y) <= counter) {
                    res.push(enemies[i])
                }
            }
        }
        return res;
    }

    between(x, range) {
        return x >= range[0] && x <= range[1];
    }

    //display the range of the attack
    displayRangeTiles() {
    }


    //undisplay the range of the attack
    undisplayTiles() {
    }
}



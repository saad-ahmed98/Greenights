class MagmaTile {
    constructor(tile, lvlcontroller) {
        this.tile = tile;
        this.name = "magma"
        this.skillBar;
        this.scene = lvlcontroller.scene;

        this.skillBar;

        this.lvlcontroller = lvlcontroller
        this.x = this.tile.x
        this.y = this.tile.z

        this.totalsp = 19;
        this.dmg = 500
        this.currentsp = Math.floor(Math.random() * 6)

        //sp at which the atk effect starts triggering
        this.displaysp = 19

    }


    //brings sp back to 0 or to random value
    resetSP() {
        this.currentsp = Math.floor(Math.random() * 5)
    }

    //update skill bar sp
    updateSkillBarCharging() {
        //nothing
    }

    //activate skill
    //magma hits all enemies and players
    activateSkill(players, enemies) {
        //get all targets
        let hitenemies = this.getEnemiesInRange(enemies, 0)
        let hitplayers = this.getEnemiesInRange(players, 0)
        for (let i = 0; i < hitenemies.length; i++) {
            hitenemies[i].receiveDamage(this, true)
        }
        //hit all the players
        for (let i = 0; i < hitplayers.length; i++) {
            hitplayers[i].receiveDamage(this, true)
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

        this.tile.mesh.material.diffuseColor = new BABYLON.Color3(0.95, 0, 0);

    }


    //undisplay the range of the attack
    undisplayTiles() {
        this.tile.mesh.material.diffuseColor = new BABYLON.Color3(1, 1, 1);
    }
}



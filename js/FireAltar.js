class FireAltar {
    constructor(x, y, lvlcontroller) {
        this.mesh;
        this.name = "altar"
        this.skillBar;
        this.scene = lvlcontroller.scene;
        this.x = x;
        this.y = y;

        this.skillBar;

        this.lvlcontroller = lvlcontroller
        this.createHazard()

        this.currentsp = 0;
        this.totalsp = 7;
        this.dmg = 500

        //sp at which the atk effect starts triggering
        this.displaysp = 6

    }
    //creates altar on the designated tile
    createHazard() {
        this.mesh = this.scene.assets.altar.clone("")
        this.mesh.position.x = -10 + this.x * 30
        this.mesh.position.z = this.y * 30
        this.mesh.position.y = 7


        this.mesh.scaling.x = 15
        this.mesh.scaling.y = 15
        this.mesh.scaling.z = 15
        this.mesh.rotationQuaternion = null

        this.mesh.rotation.z = -Math.PI / 2;

        this.skillBar = this.lvlcontroller.gui.addHPBar(this.mesh, "yellow", 35, "5%");
        this.skillBar.value = 0;
        this.skillBar.linkOffsetX = 10 - 20 * (1 - ((this.mesh.position.z / 30) / 13));
        //this.skillBar.linkOffsetX+=10
    }

    //update skill bar sp
    updateSkillBarCharging() {
        this.skillBar.value = Math.round(this.currentsp / this.totalsp * 100)
    }

    //brings sp back to 0 or to random value
    resetSP() {
        this.currentsp = 0
    }

    //activate skill
    //altar hits all enemies and players
    activateSkill(players, enemies) {
        //get all targets
        let hitenemies = this.getEnemiesInRange(enemies, 2)
        let hitplayers = this.getEnemiesInRange(players, 2)
        for (let i = 0; i < hitenemies.length; i++) {
            if (hitenemies[i].enemySkill != undefined) {

                //if enemy has skill activating from being hit by altar, then activate it
                if (hitenemies[i].enemySkill.triggertype == "on_altar") {
                    if (!hitenemies[i].enemySkill.active) {
                        hitenemies[i].enemySkill.activateSkill([hitenemies[i]])
                        hitenemies[i].activateSkillAnims()
                    }
                }
                //if not, hit the enemy
                else hitenemies[i].receiveDamage(this, true)
            }
            else
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
        var x = this.x
        var y = this.y
        var range = 2
        var squarerange = [[Math.max(x - range, 0), Math.min(x + range, this.lvlcontroller.tiles.length - 1)], [Math.max(y - range, 0), Math.min(y + range, this.lvlcontroller.tiles[0].length - 1)]];
        for (let i = squarerange[0][0]; i <= squarerange[0][1]; i++) {
            var counter = Math.abs(Math.abs(i - x) - range);
            for (let j = squarerange[1][0]; j <= squarerange[1][1]; j++) {
                if (Math.abs(j - y) <= counter)
                    this.lvlcontroller.tiles[i][j].displayRange(false, new BABYLON.Color3(0.95, 0, 0))
            }
        }
    }

    //undisplay the range of the attack
    undisplayTiles() {
        var x = this.x
        var y = this.y
        var range = 2
        var squarerange = [[Math.max(x - range, 0), Math.min(x + range, this.lvlcontroller.tiles.length - 1)], [Math.max(y - range, 0), Math.min(y + range, this.lvlcontroller.tiles[0].length - 1)]];
        for (let i = squarerange[0][0]; i <= squarerange[0][1]; i++) {
            var counter = Math.abs(Math.abs(i - x) - range);
            for (let j = squarerange[1][0]; j <= squarerange[1][1]; j++) {
                if (Math.abs(j - y) <= counter)
                    this.lvlcontroller.tiles[i][j].undisplay(false)
            }
        }
    }
}


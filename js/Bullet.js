class Bullet {
    constructor(source, scene, target, lvlcontroller, skill = false) {
        this.source = source;
        this.scene = scene,
            this.lvl = lvlcontroller
        this.target = target;
        this.mesh;
        this.done = false;
        this.halfarc;
        if (skill)
            this.sourcebullet = source.chara.skillbullet
        else this.sourcebullet = source.chara.bullet
        this.speed = this.sourcebullet.speed;
        this.offsetX;
        this.offsetZ;
        this.offsetY;
        this.friction = 0;
        this.splashradius;
        this.isplayer = this.source.chara.class != undefined
        this.createBullet();


    }

    createBullet() {
        if (this.source.chara.splashradius != undefined)
            this.splashradius = this.source.chara.splashradius;
        this.mesh = new BABYLON.MeshBuilder.CreateBox(this.id, this.sourcebullet.size, this.scene);
        var dir = 1;
        if (this.source.mesh.position.z <= this.target.mesh.position.z)
            dir = 2
        var offY = 0;
        if (this.source.chara.type == "r" && !this.isplayer)
            offY = 30
        var offX = this.source.mesh.position.x / 30 / 8
        var offZ = Math.min(2, this.source.mesh.position.z / 30)
        this.mesh.position = new BABYLON.Vector3(this.source.mesh.position.x + (5 * offX), 20 + this.source.mesh.position.y + offY, this.source.mesh.position.z + (offZ * dir));
        var colorMaterial = new BABYLON.StandardMaterial("", this.scene);
        colorMaterial.diffuseColor = this.sourcebullet.color;
        this.mesh.material = colorMaterial;
        this.lvl.bullets.push(this)

        this.mesh.lookAt(new BABYLON.Vector3(this.target.mesh.position.x, this.target.mesh.position.y - 10, this.target.mesh.position.z));
        if (this.sourcebullet.arc) {
            this.halfarc = Math.sqrt(Math.abs(this.mesh.position.x - this.target.mesh.position.x) + Math.abs(this.mesh.position.z - this.target.mesh.position.z)) / 2
            this.offsetY = Math.sqrt(Math.abs(this.mesh.position.x - this.target.mesh.position.x) + Math.abs(this.mesh.position.z - this.target.mesh.position.z)) * 2

        }
        this.offsetX = Math.abs(this.mesh.position.x - this.target.mesh.position.x) / this.speed
        this.offsetZ = Math.abs(this.mesh.position.z - this.target.mesh.position.z) / this.speed
    }
    move(gamespeed) {
        var xfound = false;
        var zfound = false;
        if (this.halfarc != undefined) {
            var current = Math.sqrt(Math.abs(this.mesh.position.x - this.target.mesh.position.x) + Math.abs(this.mesh.position.z - this.target.mesh.position.z))
            if (current > this.halfarc) {
                this.mesh.position.y += (this.offsetY - this.friction) / gamespeed;
            }
            this.friction += this.offsetY / 5 / gamespeed
            if (this.friction > this.offsetY)
                this.friction = this.offsetY
            this.mesh.position.y -= this.offsetY / 3 / gamespeed
        }
        if (this.mesh.position.x <= this.target.mesh.position.x + 10 && this.mesh.position.x >= this.target.mesh.position.x - 10) {
            xfound = true;
            if (this.halfarc == undefined)
                this.offsetZ += 0.1
        }
        else {
            var dir = 1;
            if (this.mesh.position.x > this.target.mesh.position.x)
                dir = -1;
            this.mesh.position.x += this.offsetX * dir / gamespeed;
        }
        if (this.mesh.position.z <= this.target.mesh.position.z + 10 && this.mesh.position.z >= this.target.mesh.position.z - 10) {
            zfound = true;
            if (this.halfarc == undefined)
                this.offsetX += 0.1
        }
        else {
            var dir = 1;
            if (this.mesh.position.z > this.target.mesh.position.z)
                dir = -1;
            this.mesh.position.z += this.offsetZ * dir / gamespeed;
        }

        if (this.source.chara.type == "r") {
            if (!(this.mesh.position.y <= this.target.mesh.position.y + 1 && this.mesh.position.y >= this.target.mesh.position.y - 1)) {
                var dir = 1;
                if (this.mesh.position.y > this.target.mesh.position.y)
                    dir = -1;
                this.mesh.position.y += dir / gamespeed;
            }
        }

        if (!this.done && xfound && zfound) {
            this.done = true;
            if (this.source.playerSkill != undefined) {
                if (this.source.playerSkill.active && this.source.chara.skillsfx) {
                    if (this.source.chara.sfx.skillhit != undefined)
                        this.lvl.playSound(this.source.chara.name + "-skillhit", this.source.chara.sfx.skillhit.volume)
                }
                else if (this.source.chara.sfx.hit != undefined)
                    this.lvl.playSound(this.source.chara.name + "-hit", this.source.chara.sfx.hit.volume)
            }
            else if (this.source.chara.sfx.hit != undefined)
                this.lvl.playSound(this.source.chara.name + "-hit", this.source.chara.sfx.hit.volume)

            if (this.splashradius != undefined) {
                let splashenemies = this.source.getSplashEnemiesInRange(this.lvl.activePlayers, this.target, this.splashradius)
                for (let j = 0; j < splashenemies.length; j++) {
                    //TODO CHANGE HARD CODED
                    if (this.source.chara.name == "Oneiros")
                        splashenemies[j].applyCold(10)
                    splashenemies[j].receiveDamage(this.source)

                }
            }
            else {
                //TODO CHANGE HARD CODED
                if (this.source.chara.name == "Frostnova" || this.source.chara.name == "Frostnova2" || this.source.chara.name == "FrostnovaEX" || this.source.chara.name == "FrostnovaEX2")
                    this.target.applyCold(5)
                this.target.receiveDamage(this.source)
            }
        }
    }
}
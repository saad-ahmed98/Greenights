class Bullet {
    constructor(source, scene, target, lvlcontroller) {
        this.source = source;
        this.scene = scene,
            this.lvl = lvlcontroller
        this.target = target;
        this.mesh;
        this.done = false;
        this.halfarc;
        this.speed = source.chara.bullet.speed;
        this.offsetX;
        this.offsetZ;
        this.offsetY;
        this.friction = 0;
        this.splashradius;
        this.createBullet();


    }

    createBullet() {
        if (this.source.chara.splashradius != undefined)
            this.splashradius = this.source.chara.splashradius;
        this.mesh = new BABYLON.MeshBuilder.CreateBox(this.id, this.source.chara.bullet.size, this.scene);
        var dir = -1;
        if (this.source.mesh.position.z <= this.target.mesh.position.z)
            dir = 1

        this.mesh.position = new BABYLON.Vector3(this.source.mesh.position.x + 5, 28 + this.source.mesh.position.y, this.source.mesh.position.z + (7 * dir));
        var colorMaterial = new BABYLON.StandardMaterial("", this.scene);
        colorMaterial.diffuseColor = this.source.chara.bullet.color;
        this.mesh.material = colorMaterial;
        this.lvl.bullets.push(this)
        this.mesh.lookAt(new BABYLON.Vector3(this.target.mesh.position.x, this.mesh.position.y - 10, this.target.mesh.position.z));
        if (this.source.chara.bullet.arc) {
            this.halfarc = Math.sqrt(Math.abs(this.mesh.position.x - this.target.mesh.position.x) + Math.abs(this.mesh.position.z - this.target.mesh.position.z)) / 2
            this.offsetY = Math.sqrt(Math.abs(this.mesh.position.x - this.target.mesh.position.x) + Math.abs(this.mesh.position.z - this.target.mesh.position.z))*2

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
            this.mesh.position.y -= this.offsetY/3 / gamespeed
        }
        if (this.mesh.position.x <= this.target.mesh.position.x + 5 && this.mesh.position.x >= this.target.mesh.position.x - 5)
            xfound = true;
        else {
            var dir = 1;
            if (this.mesh.position.x > this.target.mesh.position.x)
                dir = -1;
            this.mesh.position.x += this.offsetX * dir / gamespeed;
        }
        if (this.mesh.position.z <= this.target.mesh.position.z + 5 && this.mesh.position.z >= this.target.mesh.position.z - 5)
            zfound = true;
        else {
            var dir = 1;
            if (this.mesh.position.z > this.target.mesh.position.z)
                dir = -1;
            this.mesh.position.z += this.offsetZ * dir / gamespeed;
        }

        if (!this.done && xfound && zfound) {
            this.done = true;
            if (this.source.chara.sfx.hit != undefined)
                this.lvl.playSound(this.source.chara.name + "-hit", this.source.chara.sfx.hit.volume)

            if (this.splashradius != undefined) {
                let splashenemies = this.source.getSplashEnemiesInRange(this.lvl.activePlayers, this.target, this.splashradius)
                for (let j = 0; j < splashenemies.length; j++)
                    splashenemies[j].receiveDamage(this.source)
            }
            else this.target.receiveDamage(this.source)
        }
    }
}
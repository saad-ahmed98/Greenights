class Bullet {
    constructor(source, scene, target, lvlcontroller) {
        this.source = source;
        this.scene = scene,
            this.lvl = lvlcontroller
        this.target = target;
        this.mesh;
        this.createBullet();
        this.done = false;
    }

    createBullet() {
        this.mesh = new BABYLON.MeshBuilder.CreateBox(this.id, this.source.chara.bullet.size, this.scene);
        var dir = -1;
        if (this.source.mesh.position.z <= this.target.mesh.position.z)
            dir = 1

        this.mesh.position = new BABYLON.Vector3(this.source.mesh.position.x + 5, 28 + this.source.mesh.position.y, this.source.mesh.position.z + (7 * dir));
        var colorMaterial = new BABYLON.StandardMaterial("", this.scene);
        colorMaterial.diffuseColor = this.source.chara.bullet.color;
        this.mesh.material = colorMaterial;
        this.lvl.bullets.push(this)
        this.mesh.lookAt( new BABYLON.Vector3(this.target.mesh.position.x, this.mesh.position.y-10, this.target.mesh.position.z));

    }
    move(gamespeed) {
        var xfound = false;
        var zfound = false;
        if (this.mesh.position.x <= this.target.mesh.position.x + 5 && this.mesh.position.x >= this.target.mesh.position.x - 5)
            xfound = true;
        else {
            var dir = 1;
            if (this.mesh.position.x > this.target.mesh.position.x)
                dir = -1;
            this.mesh.position.x += (Math.abs(this.mesh.position.x - this.target.mesh.position.x) / 5 * dir) / gamespeed;
        }
        if (this.mesh.position.z <= this.target.mesh.position.z + 5 && this.mesh.position.z >= this.target.mesh.position.z - 5)
            zfound = true;
        else {
            var dir = 1;
            if (this.mesh.position.z > this.target.mesh.position.z)
                dir = -1;
            this.mesh.position.z += (Math.abs(this.mesh.position.z - this.target.mesh.position.z) / 5 * dir) / gamespeed;
        }

        if (!this.done && xfound && zfound) {
            this.done = true;
            if (this.source.chara.sfx.hit != undefined)
                this.lvl.playSound(this.source.chara.name + "-hit", this.source.chara.sfx.hit.volume)
            this.target.receiveDamage(this.source)
        }
    }
}
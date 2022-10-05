class HPBox extends Tile {
    constructor(type, x, z, scene) {
        super(type, x, z, scene);
    }

    create() {
        this.mesh = new BABYLON.MeshBuilder.CreateBox("", { height: 30, depth: 30, width: 30 }, this.scene);
        this.mesh.position.z = 0 + this.z * 30;
        this.mesh.position.x = 0 + this.x * 30;
        this.colorMesh();
        this.mesh.position.y += 30 / 2 + 1.5
        this.mesh.material.diffuseColor = BABYLON.Color3.Blue();
        this.mesh.material.wireframe = true;
        this.mesh.freezeWorldMatrix();
        this.mesh.convertToUnIndexedMesh();

    }
}
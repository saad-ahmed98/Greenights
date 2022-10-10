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
        this.mesh.material.diffuseColor =new BABYLON.Color3(0.21, 0.62, 0.87); 
        this.mesh.material.alpha = 0.3
        this.mesh.enableEdgesRendering();	
        this.mesh.edgesWidth = 50.0;
        this.mesh.edgesColor = new BABYLON.Color4(0, 0, 1, 1);
        //this.mesh.material.wireframe = true;
        this.mesh.freezeWorldMatrix();
        this.mesh.convertToUnIndexedMesh();

    }
}
class Tile {
    constructor(type, x, z, scene, place) {
        this.type = type;
        this.x = x;
        this.z = z;
        this.mesh;
        this.scene = scene;
        this.player;
        this.place = place;
        this.create();
        this.color;
    }

    getBgColor(){
        switch(this.place){
            case "Frozen":
                return new BABYLON.Color3(0.24, 0.4, 0.49)
            case "Long":
                return BABYLON.Color3.FromHexString("#202D37");
            case "Forest":
                return new BABYLON.Color3(0, 0.08, 0);
            default:
                return new BABYLON.Color3(0.17, 0.17, 0.17)
        }
    }
    create() {
        var h;
        var color;
        switch (this.type) {
            case "r":
                h = 10;
                color = new BABYLON.Color3(0.81, 0.8, 0.8)
                break;
            case "inactivealtar":
            case "icealtar":
            case "altar":
                h = 15;
                color = new BABYLON.Color3(0.17, 0.17, 0.17)
                break;
            case "bg":
                h = 15;
                color = this.getBgColor()
                break;
            default:
                h = 3;
                color = BABYLON.Color3.White();
        }

        this.mesh = new BABYLON.MeshBuilder.CreateBox("", { height: h, depth: 30, width: 30 }, this.scene);
        this.mesh.position.z = 0 + this.z * 30;
        this.mesh.position.x = 0 + this.x * 30;

        this.colorMesh();
        if (h >= 6)
            this.mesh.position.y += h / 2 - 1.5
        this.mesh.material.diffuseColor = color;
        this.color = color;
        this.mesh.freezeWorldMatrix();
        this.mesh.convertToUnIndexedMesh();
        if (this.type == "e")
            this.mesh.visibility = 0;

    }

    colorMesh() {
        var colorMaterial = new BABYLON.StandardMaterial("", this.scene);
        switch (this.type) {
            case "inactivealtar":
            case "icealtar":
            case "altar":
                break;
            case "bg":
                break;
            case "gblk":
                let box1 = new BABYLON.MeshBuilder.CreateBox("box2", { height: 5, depth: 24, width: 24 }, this.scene)
                let box2 = new BABYLON.MeshBuilder.CreateBox("box3", { height: 5, depth: 30, width: 30 }, this.scene)
                let hole1 = new BABYLON.CSG.FromMesh(box1);
                let holePlate = new BABYLON.CSG.FromMesh(box2);
                let newHolePlate = holePlate.subtract(hole1);
                let newMeshHolePlate = newHolePlate.toMesh("", null, this.scene);
                newMeshHolePlate.position.z = this.mesh.position.z;
                newMeshHolePlate.position.x = this.mesh.position.x;
                newMeshHolePlate.position.y = 2
                var holeMat = new BABYLON.StandardMaterial("", this.scene);
                newMeshHolePlate.material = holeMat
                box1.dispose()
                box2.dispose()
                newMeshHolePlate.material.diffuseColor = new BABYLON.Color3(0.1, 0.1, 0.1);
                colorMaterial.diffuseTexture = this.scene.assets["g"]
                break;
            default:
                colorMaterial.diffuseTexture = this.scene.assets[this.type]
                break;
        }

        this.mesh.material = colorMaterial
        //this.mesh.material.freeze();
        this.mesh.renderOutline = true;
        this.mesh.outlineColor = new BABYLON.Color3(0, 0, 0);
        this.mesh.outlineWidth = 0.1;
    }

    displayDeployable() {
        this.mesh.material.diffuseColor = new BABYLON.Color3(0, 1, 0.5)
    }

    displayRange(diffuse = true, color) {
        if (diffuse) {
            this.mesh.material.diffuseColor = new BABYLON.Color3(1, 0.51, 0.76);
            this.mesh.outlineColor = new BABYLON.Color3(1, 0.53, 0, 0.9);
            this.mesh.outlineWidth = 1;
        }
        else {
            this.mesh.outlineColor = color
            this.mesh.outlineWidth = 1.5;

        }
    }

    undisplay(diffuse = true) {
        if (diffuse)
            this.mesh.material.diffuseColor = this.color
        this.mesh.outlineColor = new BABYLON.Color3(0, 0, 0);
        this.mesh.outlineWidth = 0.1;

    }
    canBeDeployed(type, deployall) {
        if (!deployall)
            return (this.type == type || (type == "g" && this.type == "magma") || (type == "g" && this.type == "blood") || (type == "g" && this.type == "gblk"))
        return this.type == "g" || this.type == "magma" || this.type == "blood" || this.type == "gblk"
    }
}
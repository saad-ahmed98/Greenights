class Tile {
    constructor(type, x, z, scene) {
        this.type = type;
        this.x = x;
        this.z = z;
        this.mesh;
        this.scene = scene;
        this.player;
        this.create();
        this.color;
    }


    create() {
        var h;
        var color;
        switch (this.type) {
            case "r":
                h = 10;
                color = new BABYLON.Color3(0.81, 0.8, 0.8)
                break;
            case "icealtar":
            case "altar":
            case "bg":
                h = 15;
                color = new BABYLON.Color3(0.17, 0.17, 0.17);
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
            case "icealtar":
            case "altar":
                /*
                let box1 =new BABYLON.MeshBuilder.CreateBox("box2", { height: 15, depth: 24, width: 24 }, this.scene)
                let box2 = new BABYLON.MeshBuilder.CreateBox("box3", { height: 15, depth: 30, width: 30 }, this.scene)

                let hole1 = new BABYLON.CSG.FromMesh(box1);
                let holePlate = new BABYLON.CSG.FromMesh(box2);
                let newHolePlate = holePlate.subtract(hole1);
                let newMeshHolePlate = newHolePlate.toMesh("", null, this.scene);
                newMeshHolePlate.position.z =this.mesh.position.z;
                newMeshHolePlate.position.x = this.mesh.position.x;
                newMeshHolePlate.position.y = 28 / 2 - 1.5
                var holeMat = new BABYLON.StandardMaterial("", this.scene);
                newMeshHolePlate.material = holeMat
                box1.dispose()
                box2.dispose()
                newMeshHolePlate.material.diffuseColor =  new BABYLON.Color3(0.1, 0.1, 0.1);
                */
                break;
            case "bg":
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
    canBeDeployed(type) {
        return (this.type == type || (type == "g" && this.type == "magma") || (type == "g" && this.type == "blood"))
    }
}
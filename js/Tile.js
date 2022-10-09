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
        this.highlight = new BABYLON.HighlightLayer("", scene);

    }


    create() {
        var h;
        var color;
        switch (this.type) {
            case "r":
                h = 10;
                color = new BABYLON.Color3(0.81, 0.8, 0.8)
                break;
            case "bg":
                h = 15;
                color = new BABYLON.Color3(0.17, 0.17, 0.17);
                break;
            case "blkr":
                h = 15;
                color = new BABYLON.Color3(0.4, 0.4, 0.4);
                break;
            case "blk":
                h = 3;
                color = new BABYLON.Color3(0.4, 0.4, 0.4);
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

    }

    colorMesh() {
        var colorMaterial = new BABYLON.StandardMaterial("", this.scene);
        this.mesh.material = colorMaterial
        //this.mesh.material.freeze();
        this.mesh.renderOutline = true;
        this.mesh.outlineColor = new BABYLON.Color3(0, 0, 0);
        this.mesh.outlineWidth = 0.1;
    }

    displayDeployable() {
        this.mesh.material.diffuseColor = new BABYLON.Color3(0, 1, 0.5)
    }

    displayRange(diffuse = true) {
        if (diffuse) {
            this.mesh.material.diffuseColor = new BABYLON.Color3(1, 0.80, 0.7)
            this.mesh.outlineColor = new BABYLON.Color3(1, 0.53, 0, 0.9);
            this.mesh.outlineWidth = 1;
        }
        else{
            this.mesh.outlineColor = new BABYLON.Color3(0.95, 0, 0);
            this.mesh.outlineWidth = 1.5;
            /*this.highlight.addMesh(this.mesh,new BABYLON.Color3(0.95, 0, 0))
            this.highlight.outerGlow = false
            */
        }



    }

    undisplay(diffuse = true) {
        if(diffuse)
        this.mesh.material.diffuseColor = this.color
        this.mesh.outlineColor = new BABYLON.Color3(0, 0, 0);
        this.mesh.outlineWidth = 0.1;
        /*
        }
        else{
            this.highlight.removeMesh(this.mesh)
        }
        */
        
    }
}
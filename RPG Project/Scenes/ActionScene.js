class ActionScene extends Phaser.Scene {
    constructor() {
        super("action");
    }

    preload(){
        this.load.image("backgroundtest", "assets/images/backgroundtest.png");
    }
    create(){
        this.add.image(960,540,"backgroundtest").setScale(8)
        this.add.text(20, 20, "Take the Action", {font: "25px Arial", fill: "yellow"});
    }
    update(){}
}

class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create(){
        // sets class variable for image
        // this.add.image(0,0,"background");
        // position: the x and y coordinates
        // key: the key of the image in preload
        this.backgroundtest = this.add.image(0,0, "backgroundtest");

        // changes pivot of image to top left instead of center
        this.backgroundtest.setOrigin(0,0);

        this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"});
    }
}
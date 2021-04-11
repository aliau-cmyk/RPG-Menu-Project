// name of class must match file name
class Scene1 extends Phaser.Scene {
    // constructor function calls super(), which makes the class inherit 
    // all characteristics of predecessor Scene class
    // "bootGame" will be the identifier for the scene
    constructor() {
        super("bootGame");
    }

    // note all scenes are controlled by init() preload() create() and update()
    create() {
        this.add.text(20, 20, "Loading game...");
        // scene transition
        this.scene.start("playGame");
    }
}

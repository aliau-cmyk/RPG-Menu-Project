// name of class must match file name
class StartScene extends Phaser.Scene {
    // constructor function calls super(), which makes the class inherit 
    // all characteristics of predecessor Scene class
    // "bootGame" will be the identifier for the scene
    constructor() {
        super("startGame");
    }
    

    //preload function (puts all things like assets into memory)
    preload(){
        // this.load.image("key", "url");
        // key: a string to identify the image
        // url: a string path to the image file
        this.load.image("backgroundtest", "assets/images/backgroundtest.png");
        this.load.image("startButton", "assets/images/startButton.png");

    }

    // changeScene function
    changeScene() {
        //changes the scene
        this.scene.start("playGame");
    }

    // note all scenes are controlled by init() preload() create() and update()
    create() {
        const WIDTH = this.sys.game.config.width;
        const HEIGHT = this.sys.game.config.height;

        
        // sets class variable for image
        // this.add.image(0,0,"background");
        // position: the x and y coordinates
        // key: the key of the image in preload
        //this.backgroundtest = this.add.image(0,0, "backgroundtest");
        // changes pivot of image to top left instead of center
        //this.backgroundtest.setOrigin(0,0);
        //this.backgroundtest.setScale(2);

        /*let backgroundtest = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, "backgroundtest")
        let scaleX = this.cameras.main.width / backgroundtest.width
        let scaleY = this.cameras.main.height / backgroundtest.height
        let scale = Math.max(scaleX, scaleY)
        backgroundtest.setScale(scale).setScrollFactor(0)*/

        this.add.image(960,540,"backgroundtest").setScale(8)
        this.add.text(20, 20, "start scene", {font: "25px Arial", fill: "yellow"});
    

        // make button, setInteractive
        var startButton = this.add.image(WIDTH/2, HEIGHT/2, "startButton").setInteractive();
        // clicking startButton will change scene
        this.input.on('gameobjectdown', this.changeScene, this);

        
        // button hover, colors
        startButton.on('pointerover', function (pointer) {
            this.setTint(0xff0000);
            this.scene.start("playGame");
        });
    
        startButton.on('pointerout', function (pointer) {
            this.clearTint();
        });
    
        startButton.on('pointerup', function (pointer) {
            this.clearTint();
        });
        
    }

    update() {
    }
}

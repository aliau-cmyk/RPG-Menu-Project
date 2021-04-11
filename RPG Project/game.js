// object var config that can be passed into game
var config = {
    width: 1920,
    height: 1080,
    backgroundColor: 0x000000,
    // scenes are put into array for config
    scene: [StartScene, Scene2]
}

// create an instance of the game
var game = new Phaser.Game(config);
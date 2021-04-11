// object var config that can be passed into game
var config = {
    with: 800,
    height: 600,
    backgroundColor: 0x000000,
    // scenes are put into array for config
    scene: [Scene1, Scene2]
}

// create an instance of the game
var game = new Phaser.Game(config);
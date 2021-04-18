class ActionScene extends Phaser.Scene {
    constructor() {
        super("action");
    }

    init(data){
        console.log('init',data);
        this.imageID = data.id;
        this.imageFile = data.image;
    }
    preload(){
        this.load.image("nightMountain", "assets/images/night-mountain.png");
        this.load.image('pic'+ this.imageID, "assets/images/"+ this.imageFile);
        this.load.image('enemy', "assets/images/enemy.png");
    }
    create(){
        const WIDTH = this.sys.game.config.width;
        const HEIGHT = this.sys.game.config.height;

        this.scene.launch('UIScene') // Run UI Scene at the same time
        this.add.image(WIDTH/2,HEIGHT/2,"nightMountain")
        this.add.text(20, 20, "Take the Action", {font: "25px Arial", fill: "yellow"});
        //this.player = this.add.image(0,0,this.selectedCharacter).setScale(0.05)
        this.add.image(WIDTH/5,HEIGHT/5*2,'pic'+ this.imageID).setScale(2.5);
        this.add.image(WIDTH/5*4,HEIGHT/2,'enemy').setScale(2.5);
        this.startBattle();
        // on wake event we call startBattle too
        this.sys.events.on('wake', this.startBattle, this);
    }   
    
    update(){}
}








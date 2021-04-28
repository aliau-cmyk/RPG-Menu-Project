class LoseScene extends Phaser.Scene {
    constructor() {
        super("lose");
    }
    upload(){
        this.load.image('win', 'assets/images/win.png');
        this.load.image('lose', 'assets/images/lose.png');
        this.load.image('backgroundtest', 'assets/images/backgroundtest.png')
    }
    create(){
        const WIDTH = this.sys.game.config.width;
        const HEIGHT = this.sys.game.config.height;

        this.add.image(WIDTH/2,HEIGHT/2,"backgroundtest");
        this.add.image(WIDTH/2,HEIGHT/5*2,"lose");
        this.scene.launch('EndUI');
    }
    update(){}

}
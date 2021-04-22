class HealthBar extends Phaser.Scene {
    constructor() {
        super('HealthBar');
    }
    
    preload() {}

    create() {
        const WIDTH = this.sys.game.config.width;
        const HEIGHT = this.sys.game.config.height;

        //make 2 bars
        let myHealthBar=this.makeBar(WIDTH/100*10,HEIGHT/100*10,0x2ecc71);
        this.setValue(myHealthBar,100);


        let enemyHealthBar=this.makeBar(WIDTH/2 + WIDTH/100*20, HEIGHT/100*10,0x2ecc71);
        this.setValue(enemyHealthBar,100);
    }

    //this.add.image(WIDTH/5,HEIGHT/5*2,'pic'+ this.imageID).setScale(2.5);
       // this.add.image(WIDTH/5*4,HEIGHT/2,'enemy').setScale(2.5);

    makeBar(x, y,color) {
        //draw the bar
        let bar = this.add.graphics();

        //color the bar
        bar.fillStyle(color, 1);

        //fill the bar with a rectangle
        bar.fillRect(0, 0, 400, 50);
        
        //position the bar
        bar.x = x;
        bar.y = y;

        //return the bar
        return bar;
    }
    setValue(bar,percentage) {
        //scale the bar
        //percentage in decimal
        bar.scaleX = percentage/100;
    }
    update() {
    }
}
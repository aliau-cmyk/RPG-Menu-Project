class CharacterSelection extends Phaser.Scene {
    constructor() {
        super("select the character");
    }

    preload(){
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
        this.load.image("backgroundtest", "assets/images/backgroundtest.png");
        this.load.image("character1", "assets/images/character_femaleAdventurer_idle.png");
        this.load.image("character2", "assets/images/warrior.png");
        this.load.image("character3", "assets/images/adventurer_idle.png")
        this.load.image("yellowButton", "assets/images/yellow_button00.png");
        this.load.image("yellowButton1", "assets/images/yellow_button01.png");          
    }
    create(){   
            //let backgroundtest = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, "backgroundtest")
            //let scaleX = this.cameras.main.width / backgroundtest.width
            //let scaleY = this.cameras.main.height / backgroundtest.height
            //let scale = Math.max(scaleX, scaleY)
            //backgroundtest.setScale(scale).setScrollFactor(0)
            this.add.image(960,540,"backgroundtest").setScale(8)
            this.add.text(20, 20, "Select the character", {font: "25px Arial", fill: "yellow"});

            //the first button
            this.add.image(480,500,"character1").setScale(2)
            this.Button1 = this.add.sprite(480,800,'yellowButton').setInteractive().setScale(1.2)
            this.Text1 = this.add.text(0,0, "Archer",{font: "32px Arial", fill: "brown"})
            centerButtonText(this.Text1, this.Button1)
            this.Button1.on('pointerdown', function (pointer) {
                this.scene.start("action")
            }.bind(this));
            
            this.input.on('pointerover',function(event,gameObjects){
                gameObjects[0].setTexture('yellowButton1')
            })
            this.input.on('pointerout',function(event,gameObjects){
                gameObjects[0].setTexture('yellowButton')
            })

            this.add.image(960,500,"character2").setScale(2)
            this.Button2 = this.add.sprite(960,800,'yellowButton').setInteractive().setScale(1.2)
            this.Text2 = this.add.text(0,0, "Warrior",{font: "32px Arial", fill: "brown"})
            centerButtonText(this.Text2, this.Button2)
            //this.Button1.on('pointerdown', function (pointer) {}.bind(this));

            this.add.image(1460,500,"character3").setScale(2)
            this.Button3 = this.add.sprite(1460,800,'yellowButton').setInteractive().setScale(1.2)
            this.Text3 = this.add.text(0,0,"Adventurer",{font: "32px Arial", fill: "brown"})
            centerButtonText(this.Text3, this.Button3)
            //this.Button1.on('pointerdown', function (pointer) {}.bind(this));
    
    }
    update(){}
}

var centerButtonText = function(gameText, gameButton){
    Phaser.Display.Align.In.Center(
        gameText,
        gameButton
      );       
}

  
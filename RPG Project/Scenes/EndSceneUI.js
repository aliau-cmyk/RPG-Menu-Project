class EndUIScene extends Phaser.Scene {
    constructor() {
        super("EndUI");
    }
    upload(){
        this.load.image('win', 'assets/images/win.png');
        this.load.image('lose', 'assets/images/lose.png');
        this.load.image('backgroundtest', 'assets/images/backgroundtest.png')
        this.load.image("yellowButton", "assets/images/yellow_button00.png");
        this.load.image("yellowButton1", "assets/images/yellow_button01.png");
    }
    create(){
        const WIDTH = this.sys.game.config.width;
        const HEIGHT = this.sys.game.config.height;

        this.add.image(WIDTH/2,HEIGHT/2,"backgroundtest");
        this.add.image(WIDTH/2,HEIGHT/5*2,"lose");

        this.restartButton = this.add.sprite(WIDTH/6,HEIGHT/3*2,'yellowButton').setInteractive().setScale(1.5)
        this.restartText = this.add.text(0,0, "Restart",{font: "35px Arial", fill: "brown"})
        centerButtonText(this.restartText, this.restartButton);
        this.restartButton.on('pointerdown', function(pointer){this.scene.start('startGame');})

        //button event
        this.input.on('pointerover',function(event,gameObjects){gameObjects[0].setTexture('yellowButton1')});
        this.input.on('pointerout',function(event,gameObjects){gameObjects[0].setTexture('yellowButton')});

        //because I can not see the scene preview, the position could be change
        this.proposalButton = this.add.sprite(WIDTH/6*2,HEIGHT/3*2,'yellowButton').setInteractive().setScale(1.5)
        this.proposalText = this.add.text(0,0, "Proposal",{font: "35px Arial", fill: "brown"});
        centerButtonText(this.proposalText, this.proposalButton);       
        this.proposalButton.on('pointerup', () => { window.open('https://docs.google.com/document/d/10iTpKBtDFZWuAnLiQ77KSVR_MjxdAfD_LLMsd-_i3gg/edit'); });
    
        this.wireFrameButton = this.add.sprite(WIDTH/6*3,HEIGHT/3*2,'yellowButton').setInteractive().setScale(1.5)
        this.wireFrameText = this.add.text(0,0, "Wireframe",{font: "35px Arial", fill: "brown"});
        centerButtonText(this.wireFrameText, this.wireFrameButton);      
        this.wireFrameButton.on('pointerup',()=> { window.open('https://drive.google.com/drive/u/1/folders/1ojty2ajA2eUFKLG-nyVHEeHAFIPWCBlI'); });
        
        this.designButton = this.add.sprite(WIDTH/6*4,HEIGHT/3*2,'yellowButton').setInteractive().setScale(1.5)
        this.designText = this.add.text(0,0, "Design Document",{font: "35px Arial", fill: "brown"});
        centerButtonText(this.designText, this.designButton);
        this.designButton.on('pointerup',()=> { window.open('https://docs.google.com/document/u/1/d/1-3wvWYKyGQTDHfd2nqpDIkfWvydLDgL8dtFhCNV-yMs/edit?usp=drive_web&ouid=117511953987414421332'); });
    
        this.UXButton = this.add.sprite(WIDTH/6*5,HEIGHT/3*2,'yellowButton').setInteractive().setScale(1.5)
        this.UXText = this.add.text(0,0, "UX report",{font: "35px Arial", fill: "brown"});
        centerButtonText(this.UXText, this.UXButton);
        this.UXButton.on('pointerup',()=> { window.open('https://docs.google.com/document/d/1U2IYHzA1WQ5DvMtoxZHsT1gQ50_bLCcdEkzmDBSBMgw/edit'); });
    }





    update(){}
    
}
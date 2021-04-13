class ActionScene extends Phaser.Scene {
    constructor() {
        super("action");
    }

    //init(data){this.selectedCharacter = data.character}
    init(){this.fullWidth = 600}
    preload(){
        this.load.image("backgroundtest", "assets/images/backgroundtest.png");
        this.load.image("yellowButton", "assets/images/yellow_button00.png");
        this.load.image("yellowButton1", "assets/images/yellow_button01.png");

        this.load.image('left-cap', 'assets/images/barHorizontal_green_left.png')
	    this.load.image('middle', 'assets/images/barHorizontal_green_mid.png')
	    this.load.image('right-cap', 'assets/images/barHorizontal_green_right.png')

	    this.load.image('left-cap-shadow', 'assets/images/barHorizontal_shadow_left.png')
	    this.load.image('middle-shadow', 'assets/images/barHorizontal_shadow_mid.png')
	    this.load.image('right-cap-shadow', 'assets/images/barHorizontal_shadow_right.png')
        
        //this.load.atlas(
			//this.selectedCharacter, 
            //"assets/images/${this.selectedCharacter}.png",
			//"characters/${this.selectedCharacter}.js"
		//) 
    }
    create(){
        this.add.image(960,540,"backgroundtest").setScale(8)
        this.add.text(20, 20, "Take the Action", {font: "25px Arial", fill: "yellow"});
        //this.player = this.add.image(0,0,this.selectedCharacter).setScale(0.05)

        this.attackButton = this.add.sprite(960,380,'yellowButton').setInteractive().setScale(2)
        this.attackText = this.add.text(0,0, "Attack",{font: "40px Arial", fill: "brown"})
        centerButtonText(this.attackText, this.attackButton)

        this.itemButton = this.add.sprite(960,580,'yellowButton').setInteractive().setScale(2)
        this.itemText = this.add.text(0,0, "Items",{font: "40px Arial", fill: "brown"})
        centerButtonText(this.itemText, this.itemButton)

        this.leaveButton = this.add.sprite(960,780,'yellowButton').setInteractive().setScale(2)
        this.leaveText = this.add.text(0,0, "Leave",{font: "40px Arial", fill: "brown"})
        centerButtonText(this.leaveText, this.leaveButton)
    }   
    
    update(){}



}

var centerButtonText = function(gameText, gameButton){
    Phaser.Display.Align.In.Center(
        gameText,
        gameButton
      );       
}









class UIScene extends Phaser.Scene {
    constructor() {
        super("UIScene");
    }

    preload(){
        this.load.image("yellowButton", "assets/images/yellow_button00.png");
        this.load.image("yellowButton1", "assets/images/yellow_button01.png");
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });   

        //this.load.image('left-cap', 'assets/images/barHorizontal_green_left.png');
	    //this.load.image('middle', 'assets/images/barHorizontal_green_mid.png');
	    //this.load.image('right-cap', 'assets/images/barHorizontal_green_right.png');

	    //this.load.image('left-cap-shadow', 'assets/images/barHorizontal_shadow_left.png');
	    //this.load.image('middle-shadow', 'assets/images/barHorizontal_shadow_mid.png');
	    //this.load.image('right-cap-shadow', 'assets/images/barHorizontal_shadow_right.png');
    }
    create(){
        const WIDTH = this.sys.game.config.width;
        const HEIGHT = this.sys.game.config.height;
        
        this.attackButton = this.add.sprite(WIDTH/2,HEIGHT/3,'yellowButton').setInteractive().setScale(1.5)
        this.attackText = this.add.text(0,0, "Attack",{font: "35px Arial", fill: "brown"})
        centerButtonText(this.attackText, this.attackButton)

        this.itemButton = this.add.sprite(WIDTH/2,HEIGHT/2,'yellowButton').setInteractive().setScale(1.5)
        this.itemText = this.add.text(0,0, "Items",{font: "35px Arial", fill: "brown"})
        centerButtonText(this.itemText, this.itemButton)

        this.itemButton.on('pointerdown', function (pointer) {
            //pop-up dialog
            var scene = this;
            Alert(scene,'Oops! No item available!')
        }.bind(this));

        this.leaveButton = this.add.sprite(WIDTH/2,HEIGHT/3*2,'yellowButton').setInteractive().setScale(1.5)
        this.leaveText = this.add.text(0,0, "Flee",{font: "35px Arial", fill: "brown"})
        centerButtonText(this.leaveText, this.leaveButton)

        //Button Event
        this.input.on('pointerover',function(event,gameObjects){gameObjects[0].setTexture('yellowButton1')});
        this.input.on('pointerout',function(event,gameObjects){gameObjects[0].setTexture('yellowButton')});

     
    }
    update(){}
}

//const COLOR_PRIMARY = 0x4e342e;
//const COLOR_LIGHT = 0x7b5e57;
//const COLOR_DARK = 0x260e04;

var CreateAlertDialog = function (scene) {
    var dialog = scene.rexUI.add.dialog({
        width: 800,
        height: 250,
        background: scene.rexUI.add.roundRectangle(0, 0, 100, 100, 80, 0x4e342e),

        content: scene.add.text(0, 0, '', {
            fontSize: '40px'
        }),

        actions: [
            scene.rexUI.add.label({
                background: scene.rexUI.add.roundRectangle(0, 0, 400, 100, 20, 0x7b5e57),
                text: scene.add.text(0, 0, 'OK', {
                    fontSize: '24px'
                }),

                space: {
                    left: 60,
                    right: 60,
                    top: 15,
                    bottom: 15
                }
            })
        ],

        space: {
            //title: 25,
            content: 30,
            action: 25,
            left: 20,
            right: 20,
            top:80,
            bottom: 50,
        },

        align: {
            actions: 'center', // 'center'|'left'|'right'
        },

        expand: {
            content: false,  // Content is a pure text object
        }
    })
        .on('button.over', function (button, groupName, index, pointer, event) {
            button.getElement('background').setStrokeStyle(1, 0xffffff);
        })
        .on('button.out', function (button, groupName, index, pointer, event) {
            button.getElement('background').setStrokeStyle();
        });

    return dialog;
}

var SetAlertDialog = function (dialog, content) {
    if (content === undefined) {
        content = '';
    }
    dialog.getElement('content').text = content;
    return dialog;
}

var AlertDialog;
var Alert = function (scene, content, x, y) {
    if (x === undefined) {
        x = 960;
    }
    if (y === undefined) {
        y = 480;
    }
    if (!AlertDialog) {
        AlertDialog = CreateAlertDialog(scene)
    }
    SetAlertDialog(AlertDialog, content);
    AlertDialog
        .setPosition(x, y)
        .setVisible(true)
        .layout();

    return AlertDialog
        .moveFromPromise(1000, undefined, '-=400', 'Bounce')
        .then(function () {
            return scene.rexUI.waitEvent(AlertDialog, 'button.click');
        })
        .then(function () {
            return AlertDialog.moveToPromise(1000, undefined, '-=400', 'Back');
        })
        .then(function () {
            AlertDialog.setVisible(false);
            return Promise.resolve();
        })
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Demo
};

var game = new Phaser.Game(config);
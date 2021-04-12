const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

var content = `Phaser is a fast, free, and fun open source HTML5 game framework that offers WebGL and Canvas rendering across desktop and mobile web browsers. Games can be compiled to iOS, Android and native apps by using 3rd party tools. You can use JavaScript or TypeScript for development.`;


class DialogueScene extends Phaser.Scene {
    constructor() {
        super("playGame");
    }


    preload(){
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
        this.load.image('warrior', 'assets/images/warrior.png')
        this.load.image('arrowSilver', 'assets/images/arrowSilver_right.png')
        //this.load.image('nextPage', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/arrow-down-left.png');
        //this.load.plugin('DialogModalPlugin','Scenes/dialog_plugin.js')
    }

    create(){
        // sets class variable for image
        // this.add.image(0,0,"background");
        // position: the x and y coordinates
        // key: the key of the image in preload
        // let image = this.backgroundtest = this.add.image(0,0, "backgroundtest");

        // changes pivot of image to top left instead of center
        //this.backgroundtest.setOrigin(0,0);

        /*let backgroundtest = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, "backgroundtest")
        let scaleX = this.cameras.main.width / backgroundtest.width
        let scaleY = this.cameras.main.height / backgroundtest.height
        let scale = Math.max(scaleX, scaleY)
        backgroundtest.setScale(scale).setScrollFactor(0)*/
        this.add.image(960,540,"backgroundtest").setScale(8)
        this.add.image(960,450,"warrior").setScale(3)
        this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"});

        this.nextButton = this.add.image(1800,1000,"arrowSilver").setScale(2).setInteractive()
        
        this.nextButton.on('pointerdown', function (pointer) {
            this.scene.start("select the character");
        }.bind(this));

        createTextBox(this, 400, 700, {
            wrapWidth: 900,
            fixedWidth: 1000,
            fixedHeight: 200,
        })
        .start(content, 50);
      
        
    }

    update() {}
}


const GetValue = Phaser.Utils.Objects.GetValue;
var createTextBox = function (scene, x, y, config) {
    var wrapWidth = GetValue(config, 'wrapWidth', 0);
    var fixedWidth = GetValue(config, 'fixedWidth', 0);
    var fixedHeight = GetValue(config, 'fixedHeight', 0);
    var textBox = scene.rexUI.add.textBox({
            x: x,
            y: y,
            background: scene.rexUI.add.roundRectangle(0, 0, 2, 2, 20, COLOR_PRIMARY)
                .setStrokeStyle(2, COLOR_LIGHT),
            text: getBBcodeText(scene, wrapWidth, fixedWidth,fixedHeight),
            action: scene.add.image(0, 0, 'nextPage').setTint(COLOR_LIGHT).setVisible(false),
            space: {
                left: 80,
                right: 20,
                top: 20,
                bottom: 20,
                icon: 10,
                text: 10,
            }
        })
        .setOrigin(0)
        .layout();

    textBox  //set interactive to the text box
        .setInteractive()
        .on('pointerdown', function () {
            var icon = this.getElement('action').setVisible(false);
            this.resetChildVisibleState(icon);
            if (this.isTyping) {
                this.stop(true); // stop and show the all words
            } else {
                this.typeNextPage(); // just show the words of next page
            }
        }, textBox)
        /*.on('pageend', function () {
            if (textBox.isLastPage) {
                //var isLastPage = textBox.isLastPage
                //var nextButton = this.add.image(1000,1000,"nextButton").setScale(0.5)
                //nextButton.input.on('gameobjectdown', this.scene.start("select the character"));
                //textBox.setInteractive().on('pointerdown', this.scene.start("select the character"))
            }
            
            /*var icon = this.getElement('action').setVisible(true);
            this.resetChildVisibleState(icon);
            icon.y -= 30;
            var tween = scene.tweens.add({
                targets: icon,
                y: '+=30', // '+=100'
                ease: 'Bounce', // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 500,
                repeat: 0, // -1: infinity
                yoyo: false
            });
        }, textBox)*/

    return textBox;
}



var getBBcodeText = function (scene, wrapWidth, fixedWidth, fixedHeight) {
    return scene.rexUI.add.BBCodeText(0, 0, '', {
        fixedWidth: fixedWidth,
        fixedHeight: fixedHeight,
        fontSize: '30px',
        wrap: {
            //mode: 'word',
            width: wrapWidth
        },
        maxLines: 4
    })
}






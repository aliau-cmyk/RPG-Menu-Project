
var testtext;
var dialogueString;
var myHealthBar;
var enemyHealthBar;

class HealthBar extends Phaser.Scene {
    constructor() {
        super('HealthBar');
    }
    
    preload() {}

    create() {
        const WIDTH = this.sys.game.config.width;
        const HEIGHT = this.sys.game.config.height;

        //make 2 bars
        myHealthBar=this.makeBar(WIDTH/100*10,HEIGHT/100*10,0x2ecc71);
        this.setValue(myHealthBar,1);


        enemyHealthBar=this.makeBar(WIDTH/2 + WIDTH/100*20, HEIGHT/100*10,0x2ecc71);
        this.setValue(enemyHealthBar,1);


        // test text
        testtext = this.add.text(20, 100, "Nothing Selected", {font: "25px Arial", fill: "yellow"}).setDepth(20);
        //this.scene.get('UIScene').events.on("selectedAttack", this.changeString);

        // NOTE .bind is needed for .this to refer to the game in a method not part of phaser
        this.scene.get('UIScene').events.on("selectedAttack", this.damageCalculator.bind(this));
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
        bar.scaleX = percentage/1;
    }

    //TEST FUNCTION
    changeString(attackobject){
        
        let attackname = attackobject.attackName;
        let somstring = `You selected ${attackname}`;
        testtext.setText(somstring);
    
    }
    //TEST PRINT
    printValue(){
        this.aded.text(20, 120, dialogueString, {font: "25px Arial", fill: "yellow"}).setDepth(20);
    }

    damageCalculator(attackObject){
        dialogueString = "";
        // Testing calls
        // testtext.setText("is working?");
        // testtext.setText(dialogueString);
        let charaName = this.registry.values.currentCharacter.name;
        let attackName = attackObject.attackName;

        dialogueString += `${charaName} tried to use ${attackName}.`;
        dialogueString += '\n';

        
        let initAccuracy = attackObject.accuracy;
        let charaAccuracy = this.registry.values.currentCharacter.accuracy;
        

        
        
        if (this.chanceToMiss(initAccuracy, charaAccuracy)){
            dialogueString += "You missed your Attack";
            dialogueString += '\n';
        }
        else{
            // subtract health, and if less than 0, make it 0
            this.registry.values.currentEnemy.currentHealth -= attackObject.power;
            
            if (this.registry.values.currentEnemy.currentHealth < 0){
                this.registry.values.currentEnemy.currentHealth = 0;
            }
            
            // get percentage
            let percent = this.registry.values.currentEnemy.currentHealth / this.registry.values.currentEnemy.maxHealth;
            
            // set value of hp bar
            this.setValue(enemyHealthBar, percent);

            let attackPower = attackObject.power;
            let enemyTotalHealth = this.registry.values.currentEnemy.maxHealth;
            let enemyHealth = this.registry.values.currentEnemy.currentHealth;

            dialogueString += `Your ${attackName} did ${attackPower} to the enemy.\n`;
            dialogueString += `The enemy now has ${enemyHealth} / ${enemyTotalHealth} health.\n`;
        }

        // accuracy lowered?
        if(attackObject.effect == "accuracy"){
            this.registry.values.currentEnemy.accuracy *= attackObject.effectValue;
            //how much you are lowering opponent's accuracy
            let effectValue = attackObject.effectValue;
            let accuracyLowered = (1 - effectValue) * 100;
            dialogueString += `You lowered your enemy's accuracy by ${accuracyLowered}%.\n`;
        }
        
        testtext.setText(dialogueString);

        this.events.emit("completedAttack", dialogueString);
        
    }

    enemyDamageCalculator(attackObject){

    }

    chanceToMiss(initAccuracy, charaAccuracy){
        
        // ex .75 * 100 = 75
        let combAccuracy = initAccuracy * charaAccuracy * 100;
        // grab randomized value between 1 and 100
        let randomValue = Phaser.Math.Between(1, 100);

        // if doesn't miss
        if (randomValue <= combAccuracy){

            return false;
        }
        
        return true;
    }


    update() {
    }

}
class CharacterDataLoader extends Phaser.Scene {
    // constructor function calls super(), which makes the class inherit 
    // all characteristics of predecessor Scene class
    // "bootGame" will be the identifier for the scene
    constructor() {
        super("characterDataLoader");
        
        this.basicAttack = {
            attackName : "Basic Attack",
            description : "Will perform a basic attack.",
            power : 30,
            accuracy : 1,
            stamina : 20,
            currentStamina : 20,
            effect : "none",
            effectValue : 0
        };

        this.throwDust = {
            attackName : "Throw Dust",
            description : "Throw dust into enemy's eyes. Lowers their accuracy by 25%!",
            power : 0,
            accuracy : 1,
            stamina : 15,
            currentStamina : 15,
            effect : "accuracy",
            effectValue : .75
        };

        this.shark = {
            name : "Shark",
            maxHealth: 100,
            currentHealth: 100,
            moveset : [this.basicAttack, this.throwDust]
        };

        this.getMoveByName = function(movesetArray, nameOfAttack) {
            for (var i = 0; i < movesetArray.length; i++){
                if (movesetArray[i].attackName = nameOfAttack){
                    return movesetArray[i];
                }
            }
        }

    }

    create(){
        this.add.text(20, 60, "chracterdataloader", {font: "25px Arial", fill: "yellow"}).setDepth(20);

        // registry https://phaser.io/phaser3/devlog/119
        // https://photonstorm.github.io/phaser3-docs/Phaser.Data.DataManager.html
        this.registry.set("basicAttack", this.basicAttack);
        this.registry.set("throwDust", this.throwDust);
        this.registry.set("shark", this.shark);
        this.registry.set("getMoveByName", this.getMoveByName);
        
        //THIS WORKS!!!
        //let test = this.registry.get("shark").moveset[0].description;
        //this.add.text(20, 80, test, {font: "25px Arial", fill: "yellow"}).setDepth(20);
        
        //let somfunction = this.registry.get("getMoveByName");
        //let sommoves = this.registry.get("shark").moveset;
        //let test2 = somfunction(sommoves, "Basic Attack").description;
        //this.add.text(20, 80, test2, {font: "25px Arial", fill: "yellow"}).setDepth(20);
    


        /*
        var basicAttack = {
            attackName : "Basic Attack",
            description : "Will perform a basic attack.",
            power : 30,
            accuracy : 1,
            stamina : 20,
            currentStamina : 20,
            effect : "none",
            effectValue : 0
        };

        var throwDust = {
            attackName : "Throw Dust",
            description : "Throw dust into enemy's eyes. Lowers their accuracy by 25%!",
            power : 0,
            accuracy : 1,
            stamina : 15,
            currentStamina : 15,
            effect : "accuracy",
            effectValue : .75
        };

        //this.add.text(20, 80, basicAttack.attackName, {font: "25px Arial", fill: "yellow"}).setDepth(20);

        var shark = {
            name : "Shark",
            maxHealth: 100,
            currentHealth: 100,
            moveset : [basicAttack, throwDust]
        };

        function getMoveByName(movesetArray, nameOfAttack) {
            for (var i = 0; i < movesetArray.length; i++){
                if (movesetArray[i].attackName = nameOfAttack){
                    return movesetArray[i];
                }
            }
        }

        */

        //this.add.text(20, 80, getMoveByName(shark.moveset, "Basic Attack").power, {font: "25px Arial", fill: "yellow"}).setDepth(20);
        

    }
}
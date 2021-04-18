import {shark, getMoveByName} from './Characters/CharacterList.js';

// test to see if import works
//console.log(getMoveByName(shark.moveset, "Throw Dust").description);

//reference: https://phaser.discourse.group/t/solved-use-the-same-player-object-across-scenes/2900/13

let playerData = {
    currentCharacter : shark
}

// test to see if works
//console.log(playerData.currentCharacter.name);

export{playerData, shark, getMoveByName};
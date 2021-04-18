import {shark, getMoveByName} from './Characters/CharacterList.js';

// test to see if import works
//console.log(getMoveByName(shark.moveset, "Throw Dust").description);

let playerData = {
    currentCharacter : shark
}

// test to see if works
//console.log(playerData.currentCharacter.name);

export{playerData, shark, getMoveByName};
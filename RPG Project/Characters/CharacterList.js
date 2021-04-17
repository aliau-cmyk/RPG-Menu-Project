// NOTE, always include .js in file extension 
import {CharacterTemplate} from './CharacterTemplate.js';
import {basicAttack, throwDust} from './AttackList.js';

// node --experimental-modules --es-module-specifier-resolution=node Characters\CharacterList.js
// TESTING TO SEE IF IMPORTS ACTUALLY WORK
console.log("hi");
console.log(basicAttack.attackName);
//to test file, make sure to do in terminal: node Characters\CharacterList.js

var shark = new CharacterTemplate("Shark");
shark.maxHealth = 100;
shark.currentHealth = 100;
//insert key value pairs into dictionary
//note it refers to the object 
shark.moveset[basicAttack] = basicAttack;
shark.moveset[throwDust] = throwDust;

//testsd
console.log(shark.moveset[basicAttack]);
console.log(`The description of Throw Dust is: "${shark.moveset[throwDust].description}"`);





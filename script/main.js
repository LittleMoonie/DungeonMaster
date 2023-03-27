import { Hero } from './hero/hero.class.js';

import { Monster } from './monsters/monster.class.js';
import { SkelMage } from './monsters/skelMage.class.js';
import { Troll } from './monsters/troll.class.js';


// Example of how to use the classes for testing the classes made for monsters :
const skelMage = new SkelMage('Skeleton Mage', 10000, 5, 100, './img/monsters/skeletonMage.gif');
const troll = new Troll('Troll', 20, 15, 100, './img/monsters/troll.gif');

console.log(skelMage);
skelMage.addToDom();

console.log(troll);
troll.addToDom();

// Example of how to use the classes for testing the classes made for heroes :
const hero = new Hero('Doe', 'John', 1, 5000, 5, 100, 9, []);

// Testing if the damage class with weapons as well as the potion count is working correctly
console.log(hero);
console.log(hero.damage);
console.log(hero.weapons); // Should be empty 0/4
hero.autoPickUp("weapon"); // Adds the weapon to his inventory 1/4
hero.autoPickUp("weapon"); // Adds the weapon to his inventory 2/4
hero.autoPickUp("weapon"); // Adds the weapon to his inventory 3/4
hero.autoPickUp("weapon"); // Adds the weapon to his inventory 4/4
hero.autoPickUp("weapon"); // Gives error saying that the hero can't pick up more than 5 weapons
console.log(hero.damage);
console.log(hero.weapons)

console.log(hero.potions); // Should be at 9/10
hero.autoPickUp("potion") // Adds the potion to his inventory 10/10

console.log(hero.potions); // Should be at 10/10
hero.autoPickUp("potion") // Gives error saying that the hero can't pick up more than 10 potions


// Testing if the attack method is working correctly
console.log(skelMage.hp); // Should be at 100 (skelMage's hp
hero.attack(skelMage);
console.log(skelMage.hp); // Appropriate amount of damage should be taken off of the skelMage's hp

console.log(hero.hp); // Should be at 100
skelMage.attack(hero);
console.log(hero.hp); // Appropriate amount of damage should be taken off of the hero's hp

// ONLY TESTING CLASSES HERE ATM WHILE WAITING FOR THE OF THE SUBJECT TO BE GIVEN.

console.log(skelMage.dropLoot())
hero.autoPickUp(skelMage.dropLoot());
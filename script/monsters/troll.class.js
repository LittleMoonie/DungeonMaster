import { Monster } from './monster.class.js';

/*
Troll Class - This class is used to create Trolls.
Trolls have a name, attack, defense, hp, img, and target.
The target is the hero. Trolls can attack, drop weapons, and drop potions.
Trolls can also be added to the DOM and removed from the DOM.
*/

export class Troll extends Monster {
    constructor(name, damage, defense, hp, img) {
        super(name, damage, defense, hp, img);
    }
    // This is the addToDom() method from the Monster class.
    addToDom() {
        super.addToDom();
        const monsterDiv = document.createElement('div');
        monsterDiv.classList.add('monster')
        const monsterImg = document.createElement('img');
        monsterImg.src = this.img;
        monsterDiv.appendChild(monsterImg);
        document.querySelector('#game').appendChild(monsterDiv);
    }

    // This is the removeFromDom() method from the Monster class.
    removeFromDom() {
        super.removeFromDom();
        document.querySelector('.monster').remove();
    }

    // This is the attack() method from the Monster class.
    attack(target) {
        console.log('Troll attacks!');
        super.attack(target);
    }

    // This is the dropLoot() method from the Monster class.
    // We can override it here to change the behavior of the method.
    dropLoot() {
        const loot = Math.floor(Math.random() * 3);
        if (loot === 0) {
            console.log(`${this.name} dropped an HP potion`);
        } 
        else if (item === 1) {
            console.log(`${this.name} dropped a sword`);
        } 

        // If we want to add more potions or weapons, we can add them here.
        //     else if (loot === 2) {
        //         console.log(`${this.name} dropped a mana potion`);
        //      } else if (loot === 3) {
        //         console.log(`${this.name} dropped a sword`);
        //     } else {
        //         console.log(`${this.name} dropped a shield`);
        //     }
    }
}
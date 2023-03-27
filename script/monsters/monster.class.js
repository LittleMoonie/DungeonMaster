import { Hero } from '../hero/hero.class.js';


/* 
Monster Class - This class is used to create monsters. 
Monsters have a name, attack, defense, hp, img, and target. 
The target is the hero. Monsters can attack, drop weapons, and drop potions. 
Monsters can also be added to the DOM and removed from the DOM. 
*/

export class Monster {

    // The constructor is used to create a new instance of the class and set the properties of the monster object.
    constructor(name, damage, defense, hp, img) {
        this._name = name;
        this._damage = damage;
        this._defense = defense;
        this._hp = hp;
        this._img = img;
        this._target = Hero;
    }

    // Getters and setters for the properties of the monsters
    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set damage(damage) {
        this._damage = damage;
    }

    get damage() {
        return this._damage;
    }

    set defense(defense) {
        this._defense = defense;
    }

    get defense() {
        return this._defense;
    }

    set hp(hp) {
        this._hp = hp;
    }

    get hp() {
        return this._hp;
    }

    set img(img) {
        this._img = img;
    }

    get img() {
        return this._img;
    }

    set target(target) {
        this._target = target;
    }

    get target() {
        return this._target;
    }

    // Attack method for the monsters to attack the hero
    attack(target) {
        if (this.damage > target.defense) {
            target.hp -= this._damage - target.defense;
            console.log(`${this.name} attacks ${target.lastname} ${target.firstname} and inflicts ${(this.damage - target.defense)} damage!`);

            if(this.target.hp <= 0) {
                console.log(`${this.target.name} has been defeated!`);
                // target.removeFromDom(); // Used in future when we put the hero into the DOM. Also implement hero into the DOM which is probably part 2 of project.
            } 
            else{
            console.log(`${target.lastname} ${target.firstname} now has ${target.hp} HP.`);
            }
        }

        // If the monster's attack is less than or equal to the hero's defense, then the hero's hp is reduced by 1
        else {
            target.hp -= 1;
            console.log(`${this.name} attacked ${target.lastname} ${target.firstname} for 1 damage!`);
        }

        // If the hero's hp is less than or equal to 0, then the hero's hp is set to 0 and the hero is removed from the DOM
        if (target.hp <= 0) {
            target.hp = 0;
            console.log(`${target.lastname} ${target.firstname} has been defeated!`)
        }
    }

    // Drop weapon method for the monsters to drop weapons
    dropLoot() {
        console.log(`${this.name} dropped loot!`);
    }

    // Add to DOM method for the monsters to be added to the DOM
    addToDom() {
        console.log("Adding " + this.name + " to DOM");
    }

    // Remove from DOM method for the monsters to be removed from the DOM
    removeFromDom() {
        console.log("Removing " + this.name + " from DOM");
    }
}

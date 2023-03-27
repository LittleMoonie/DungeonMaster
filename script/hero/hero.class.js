import { Monster } from "../monsters/monster.class.js";

/*
Hero Class - This class is used to create heroes.
Heroes have a lastname, firstname, strength, defense, hp, potions, and weapons.
Heroes can attack, use potions, and use weapons.
*/

export class Hero {

    // Base stats of hero class as statics
    static baseDamage = 3;
    static minStrength = 3;
    static maxStrength = 10;
    static minDefense = 1;
    static maxDefense = 5;

    // Init method to set the stats of the hero randomly and clear the inventory
    init() {
        // do the stats using the static variables strength, defense, and damage
        this._strength = Math.floor(Math.random() * (Hero.maxStrength - Hero.minStrength + 1)) + Hero.minStrength;
        this._defense = Math.floor(Math.random() * (Hero.maxDefense - Hero.minDefense + 1)) + Hero.minDefense;
        this._damage = Hero.baseDamage + this._strength;
        this._weapons = [];
    }

    // Constructor for the hero class that takes in the lastname, firstname, strength, defense, hp, potions, and weapons as parameters 
    // and sets them to the properties of the hero class
    constructor(lastname, firstname, strength, damage, defense, hp, potions, weapons) {
        this._lastname = lastname;
        this._firstnamae = firstname;
        this._strength = strength;
        this._damage = damage;
        this._defense = defense;
        this._hp = hp;
        this._potions = potions;
        this._weapons = weapons;

        this.init();
    }

    // Getters and setters for the properties of the hero
    set lastname(value) {
        this._lastname = value;
    }

    get lastname() {
        return this._lastname;
    }

    set firstname(value) {
        this._firstnamae = value;
    }

    get firstname() {
        return this._firstnamae;
    }

    set strength(value) {
        this._strength = value;
    }

    get strength() {
        return this._strength;
    }

    set damage(value) {
        this._damage = damage;
    }

    get damage() {
        return this._damage;
    }

    set defense(value) {
        this._defense = value;
    }

    get defense() {
        return this._defense;
    }

    set hp(value) {
        this._hp = value;
    }

    get hp() {
        return this._hp;
    }

    set potions(value) {
        this._potions = value;
    }

    get potions() {
        return this._potions;
    }

    set weapons(value) {
        this._weapons = value;
    }

    get weapons() {
        return this._weapons;
    }

    // Attack method for the hero to attack the monster
    attack(target) {
        if (this._damage > target.defense) {
            target.hp -= this._damage - target.defense;
            console.log(`${this.lastname} ${this.firstname} attacks ${target.name} and inflicts ${(this._damage - target.defense)} damage!`);

            if(target.hp <= 0) {
                console.log(`${target.name} has been defeated!`);
                target.removeFromDom(); // Used in future when we put the hero into the DOM. Also implement hero into the DOM which is probably part 2 of project.
                return true;
            } 
            else{
            console.log(`${target.name} now has ${target.hp} HP.`);
            return false;
            }
        }

        // If the monster's attack is less than or equal to the hero's defense, then the hero's hp is reduced by 1
        else {
            target.hp -= 1;
            console.log(`${this.name} attacked ${target.name} for 1 damage!`);

            if(target.hp <= 0) {
                console.log(`${target.name} has been defeated!`);
                target.removeFromDom(); // Used in future when we put the hero into the DOM. Also implement hero into the DOM which is probably part 2 of project.
                return true;
            }

            else {
                console.log(`${target.name} now has ${target.hp} HP.`);
                return false;
            }
        }
    }

    autoPickUp(item) {
        if (item == "potion") {
            if (this._potions < 10) {
                this._potions += 1;
                console.log("Potion added to inventory!");
            }
            else {
                console.log("Error: inventory is full. Potion dropped.");
            }
        }
        else if (item == "weapon") {
            if (this._weapons.length < 4) {
                this._weapons.push("sword");
                this._damage += 4;
                console.log("Weapon added to inventory!");
            }
            else {
                console.log("Error: inventory is full. Weapon dropped.");
            }
        }
    }

    

    // Potion consumption method
    usePotion() {

        // Avoid hp getting over 100
        if (this._hp > 100) {
            this._hp = 100;
            console.log("Error: hp is already at max. Potion Consummed for nothing.");
        }

        // If there are potions in inventory, then the hero's hp is increased by 10 and the number of potions in inventory is decreased by 1
        else {
            this._potions -= 1;
            this._hp += 10;
            console.log("Potion consumed. +10 hp.");
        }

        // Error message if there are no more potions in inventory
        if (this._potions == 0) {
            console.log("Error: no more potions in inventory.");
        }
    }
}
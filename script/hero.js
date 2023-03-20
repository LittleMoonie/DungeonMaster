export default class hero{

    // Base stats of hero
    static baseDamage = 3;
    static minStrength = 3;
    static maxStrength = 10;
    static minDefense = 1;
    static maxDefense = 5;

    // Init method
    init() {
        this.strength = Math.floor(Math.random * maxStrength) + minStrength;
        this.defense = Math.floor(Math.random * maxDefense) + minDefense;
        this.damage = this.strength * baseDamage;
    }

    constructor(lastname, firstname, strength, defense, hp, potions, weapons) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.strength = strength;
        this.damage = damage;
        this.defense = defense;
        this.hp = hp;
        this.potions = potions;
        this.weapons = weapons;

        this.init();
    }

    // Attack method
    attack(target) {
        // Remove hp to target based on damage/defense
        target.hp -= (this.damage - target.defense);
        
        // Return true if target hp is below 0 -> is dead!
        if(target.hp <= 0) {
            return true;
        }
    }

    // AutoPickUp method
    autoPickUp(type) {
        if(type === "potion" && this.potions < 10) {
            // Add +1 potion to inventory
            this.potions++;
        } 
        else if(type === "weapon" && this.weapons < 4) {
            // Add +1 weapon to inventory
            this.weapons++;

            // Add +4 base damage to hero
            this.baseDamage += 4;
        } 
        else {
            // Error message 
            console.log("error: unknown equipment or not enough space in inventory");
        }
    }

    // Potion consumption method
    usePotion() {
        // Remove 1 potion from inventory
        this.potions -= 1;

        // Add +10 hp
        this.hp += 10;

        // Avoid hp getting over 100
        if(this.hp > 100) {
            this.hp = 100;
        }
    }


    // Getter/Setter
    set lastname(value) {
        this.lastname = value;
    }

    get lastname() {
        return this.lastname;
    }

    set firstname(value) {
        this.firstname = value;
    }

    get firstname() {
        return this.firstname;
    }

    set strength(value) {
        this.strength = value;
    }

    get strength() {
        return this.strength;
    }

    set damage(value) {
        this.damage = damage;
    }

    get damage() {
        return this.damage;
    }

    set defense(value) {
        this.defense = value;
    }

    get defense() {
        return this.defense;
    }

    set hp(value) {
        this.hp = value;
    }

    get hp() {
        return this.hp;
    }

    set potions(value) {
        this.potions = value;
    }

    get potions() {
        return this.potions;
    }

    set weapons(value) {
        this.weapons = value;
    }

    get weapons() {
        return this.weapons;
    }
}
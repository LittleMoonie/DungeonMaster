export default class hero{
    lastname;
    firstname;
    strength;
    damage;
    defense;
    hp;
    potions;
    weapons;

    static baseDamage = 3;
    static minStrength = 3;
    static maxStrength = 10;
    static minDefense = 1;
    static maxDefense = 5;

    constructor(lastname, firstname, strength, defense, hp, potions, weapons) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.strength = strength;
        this.damage = damage;
        this.defense = defense;
        this.hp = hp;
        this.potions = potions;
        this.weapons = weapons;

        const init = () => {
            this.strength = Math.floor(Math.random * maxStrength) + minStrength;
            this.defense = Math.floor(Math.random * maxDefense) + minDefense;
            this.damage = this.strength * baseDamage;
        }
    }

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
import {default as hero} from './hero.js'

export default class Monster{
    constructor(name, attack, defense, hp, images, target){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.images = images;
        this.target = target;
    }

    set name(value){
        return this.name;
    }
    
}
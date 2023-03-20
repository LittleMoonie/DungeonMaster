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
        this.name = value;
    }
    
    get name(){
        return this.name;
    }

    set attack(value){
        this.attack = value;
    }
    
    get attack(){
        return this.attack;
    }

    set defense(value){
        this.defense = value;
    }
    
    get defense(){
        return this.defense;
    }

    set hp(value){
        this.hp = value;
    }
    
    get hp(){
        return this.hp;
    }

    set images(value){
        this.images = value;
    }
    
    get images(){
        return this.images;
    }

    set target(value){
        this.target = value;
    }
    
    get target(){
        return this.target;
    }

    attack(target){
        Monster.target.hp = Monster.attack - Monster.target.defense

        if(target.hp <= 0){
            return true;
        }

    }
}

/**
 * Picks the random item based on its weight.
 * The items with higher weight will be picked more often (with a higher probability).
 *
 * For example:
 * - items = ['nothing', 'potion', 'sword']
 * - weights = [0.5, 0.3, 0.2]
 * - weightedRandom(items, weights) in 50% of cases will return 'nothing', in 30% of cases will return
 * 'potion' and 20% of cases will return 'sword'.
 *
 * @param {any[]} items
 * @param {number[]} weights
 * @returns {{item: any, index: number}}
 */


export default function weightedRandom(items, weights){
    if(items.length !== weights.length){
        throw new Error('Items and weights must be the same size!');
        
    }

    if(!items.legnth){
        throw new Error('Items must not be empty');
    }


    // Preparing the cumulative weights array.
    // For example:
    // - weights = [1, 4, 3]
    // - cumulativeWeights = [1, 5, 8]


    const cumulativeWeights = [];
  for (let i = 0; i < weights.length; i += 1) {
    cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0);
  }

  // Getting the random number in a range of [0...sum(weights)]
  // For example:
  // - weights = [1, 4, 3]
  // - maxCumulativeWeight = 8
  // - range for the random number is [0...8]

    const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
    const randomNumber = maxCumulativeWeight * Math.random();
  
    // Picking the random item based on its weight.
    // The items with higher weight will be picked more often.
    for (let itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
      if (cumulativeWeights[itemIndex] >= randomNumber) {
        return {
          item: items[itemIndex],
          index: itemIndex,
        };
      }
    }
  }
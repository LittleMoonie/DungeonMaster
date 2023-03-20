import {} from './hero.js'
import Monster from './monster.js'

const monster = new Monster('monster1', 2, 1, 12, '', '');
document.querySelector('div').innerHTML=`
name : ${monster.name} </br>
attack : ${monster.attack} </br>
defense : ${monster.defense} </br>
hp : ${monster.hp} </br>
images : ${monster.images} </br>
target : ${monster.target} </br>
`
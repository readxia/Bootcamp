
const pokemon = require('pokemon')
console.log(pokemon.random())

let deck = []
for (let i = 0; i < 5; i++) {
    let pkm = {
        name: pokemon.random(),
        attack: Math.floor(Math.random() * 100) + 1 //randomly generates number 1-100
    }

    deck.push(pkm)
}
console.log(deck)
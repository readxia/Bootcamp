let readline = require('readline-sync')
let name = readline.question('What is your name? ')
let food = readline.question('What is your fav food? ')
let drink = readline.question('What is your fav drink? ')

console.log(`Hi ${name}, your favorite food is ${food} and your favorite drink is ${drink}.`)
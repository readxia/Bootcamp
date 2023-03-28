let marvel = require('marvel-characters')

//console log a random marvel character
console.log('random marvel character: ' + marvel())

//shows how mayn characters are in the database
let allChar = marvel.characters
console.log('number of characters in list: ' + allChar.length)

//grab all characters that start with "man"
let manChar = []
for (let i = 0; i < allChar.length; i++) {
    if (allChar[i].startsWith('Man')) {
        manChar.push(allChar[i])
    }
}
if (manChar.length === 0) {
    console.log('no characters that start with "Man"')
}
else {
    console.log(manChar)
}

//check if iron man is in list
let err = true
for (let i = 0; i < allChar.length; i++) {
    if (allChar[i] === 'Iron Man') {
        console.log(allChar[i])
        err = false
        break
    }
}
if (err) {
    console.log('No iron man found')
}


//check if batman is in list
err = true
for (let i = 0; i < allChar.length; i++) {
    if (allChar[i] === 'Batman') {
        console.log(allChar[i])
        err = false
        break
    }
}

if (err) {
    console.log('No batman found')
}
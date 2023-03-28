let readline = require('readline-sync'),

    spiceChoices = ['spicy', 'very spicy', "so spicy, you won't be able to feel your face"]
    index = readline.keyInSelect(spiceChoices, 'How spicy would you like your tacos?')
if (readline.keyInYN(`Ok, so you want your tacos to be ${spiceChoices[index]}. Are you sure about this?`)) {
    console.log('Ok, we will ahve your order right out')
}
else {
    console.log("What's the matter? Can't handle the heat?")
}



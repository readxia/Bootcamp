let logpets = require('log.pets')
let animals = require('animals')

//step 2 and 3 and 4
console.log(animals())
console.log(logpets.lion())
console.log(logpets.zoo(animals(), animals(), animals()))

//step 5
let animalList = animals.words
console.log('num of animals in generator: ' + animalList.length)

//step 6
let animalsStartWithG = animalList.filter( (name) => {
    if (name.startsWith('g')) {
        return name
    }
})

if (animalsStartWithG.length === 0) {
    console.log('no matches found')
}
else {
    console.log(animalsStartWithG)
}

//step 7
if (animalsStartWithG.length === 0) {
    console.log('no matches found')
}
else {
    console.log('num of animals starting with G: ' + animalsStartWithG.length)
}

// builds a function that takes an array of objects sorts them by value
exports.cardSort = (arr) => {
    arr.sort((a, b) => a.value - b.value)
}


//build a function that converts values equally
exports.valueConvertor = (arr) => {
    let newCardArray = arr.map(el => {
        switch(el.value){
            case 'JACK':
                el.value = 11
                break
            case 'QUEEN':
                el.value = 12
                break
            case 'KING':
                el.value = 13
                break
            case 'ACE':
                el.value = 14
                break
            default:
                el.value = Number(el.value)

        }
        return el

    })
    return newCardArray
}

//build a function that deals the cards
exports.dealCards = (arr) => {
    let counter = 0
    let player = []
    let computer = []
    arr.forEach((element) => {
        if (counter % 2 !== 0) {
            player.push(element)
        } else {
            computer.push(element)
        }
        counter += 1
    })
    return [player, computer]

}
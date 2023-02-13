var name = prompt("Tell me your name.")
var x = prompt("Give me a number.")
var y = prompt("Give me another number.")

function wonderfulDay(name) {
    return "You are going to have a wonderful day " + name + "."
}

function numberSum(x, y) {
    return "By the way, the sum of your numbers is " + (parseInt(x) + parseInt(y)) + "."
}

console.log(wonderfulDay(name))
console.log(numberSum(x, y))
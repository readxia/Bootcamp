

var x = parseInt(prompt("Give a number."))
var y = parseInt(prompt("Give another number."))
var z = parseInt(prompt("Give a number again."))

var total = 0

for (var i = 0; i < 3; i++) {
    if (i === 0) {
        total += x
    }
    else if (i === 1) {
        total += y
    }
    else {
        total += z
    }
}

alert("The sum of all your numbers is " + total + ".")
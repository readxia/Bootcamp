// // Using JavaScript, write a program that returns the numbers from 5 to 100. 
// But for multiples of 5 print “Doggy” instead of the number and for the multiples of 7 print 
// “Horse”. For numbers which are multiples of both 5 and 7 log “Doggy Horse”.  You have 20 min

// // Wrap this program into a function that you can call from a console.log (function should only return the value)

function doggyHorse() {
    let ret = ''
    for (let i = 5; i < 101; i++) {
        let str = ''
        if (i % 7 === 0 && i % 5 === 0) {
            str = 'Doggy Horse'
        }
        else if (i % 5 === 0) {
            str = 'Doggy'
        }
        else if (i % 7 === 0) {
            str = 'Horse'
        }
        else {
            str = i
        }
        ret = ret + ' ' + str
    }
    return ret
}

console.log(doggyHorse())
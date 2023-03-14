//assuming the number is an int, we can cast into a string, else we could do int division
function squareConcat(n) {
    //create return string variable since we are going to concatenate
    let ret = ''
    //send the input to a string so we can increment through it using string, else we can use int division to increment thru
    let s = n.toString()
    
    //loop through number string
    for (let i = 0; i < s.length; i++) {
        //grab first number and convert to int
        let squared = parseInt(s[i])
        //square the number
        squared *= squared
        //concat to ending return string at the end
        ret = ret + squared
    }
    return ret
}

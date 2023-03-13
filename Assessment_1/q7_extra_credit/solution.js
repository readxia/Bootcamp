//assuming the number is an int, we can cast into a string, else we could do int division
function squareConcat(n) {
    let ret = ''
    let s = n.toString()
    for (let i = 0; i < s.length; i++) {
        let squared = parseInt(s[i])
        squared *= squared
        ret = ret + squared
    }
    return ret
}
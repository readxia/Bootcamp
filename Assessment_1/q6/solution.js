//used set for o(n) time

function countVowels(s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let ret = 0
    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i].toLowerCase())) {
            ret += 1
        }
    }
    return ret
}
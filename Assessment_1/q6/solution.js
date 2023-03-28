//used set for o(n) time

function countVowels(s) {
    //create set of vowels to check if character is a vowel in o(1)
    //there might be a built in method in JS that can check if a char is a vowel though
    let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    //initiate return counter variable
    let ret = 0
    //loop through the string
    for (let i = 0; i < s.length; i++) {
        //check if the character sent to lowercase exists in set vowels
        if (vowels.has(s[i].toLowerCase())) {
            //increment ret if so
            ret += 1
        }
    }
    return ret
}

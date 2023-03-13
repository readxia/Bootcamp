function findHay(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'hay') {
            return 'found the word at position ' + i
        }
    }
    return 'did not find the word "hay"'
}
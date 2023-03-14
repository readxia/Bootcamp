function findHay(arr) {
    //loop through array with for loop
    for (let i = 0; i < arr.length; i++) {
        //check if array element === keyword 'hay'
        if (arr[i] === 'hay') {
            //return concatenated phrase with index location
            return 'found the word at position ' + i
        }
    }
    //return exit if no 'hay' was found in arr
    return 'did not find the word "hay"'
}

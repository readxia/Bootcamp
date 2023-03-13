function countTrue(arr) {
    let ret = 0
    for (let i = 0; i < arr.length; i++) {
        //used === true in case of non-boolean values such as strings and ints
        if (arr[i] === true) {
            ret += 1
        }
    }
    return ret
}
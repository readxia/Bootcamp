function countTrue(arr) {
    //initiate return value
    let ret = 0
    
    //loop through entire array
    for (let i = 0; i < arr.length; i++) {
        //used === true in case of non-boolean values such as strings and ints
        if (arr[i] === true) {
            //increment ret by one
            ret += 1
        }
    }
    return ret
}

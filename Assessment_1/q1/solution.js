function positiveSum (arr){
    
    //initiate return value
    let ret = 0
    
    //loop through array
    for (let i = 0; i < arr.length; i++) {
        //checks if value is greater than 0
        if (arr[i] > 0) {
            //adds value if is positive to the running return total
            ret += arr[i]
        }
    }
    return ret
}

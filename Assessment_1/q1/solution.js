function positiveSum (arr){
    let ret = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            ret += arr[i]
        }
    }
    return ret
}
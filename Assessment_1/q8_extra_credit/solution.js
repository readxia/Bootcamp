
//assuming the array HAS to be at least of size 3
//probably not the most efficient way but it should work i think
function differentNum(arr) {
    
    let hashmap = {}
    for (let i = 0; i < arr.length; i++) {

        //adds next element into hashmap, and updates num of occurences
        if (arr[i] in hashmap) {
            hashmap[arr[i]] += 1
        }
        else {
            hashmap[arr[i]] = 1
        }

        // check if there is already a unique number in the map AND if there has been at least 3 iterations (because you can't tell with only 2 iterations)
        //then break out of the for loop since we dont need it anymore
        if (Object.keys(hashmap).length > 1 && i > 1) {
            break
        }
    }

    // finds the unique element in the object
    for (let n in hashmap) {
        if (hashmap[n] === 1) {
            return n
        }
    }
    
}
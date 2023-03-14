
//assuming the array HAS to be at least of size 3
//probably not the most efficient way but it should work i think
function differentNum(arr) {
    
    //using js object to keep track of how many of each number we have so far as we loop thru
    let hashmap = {}
    
    //loop through the array
    for (let i = 0; i < arr.length; i++) {

        //adds next element into hashmap, and updates num of occurences
        if (arr[i] in hashmap) {
            //add one to value if key exists
            hashmap[arr[i]] += 1
        }
        else {
            //create value to key if key does not exist and set it to 1
            hashmap[arr[i]] = 1
        }

        // check if there is already a unique number in the map AND if there has been at least 3 iterations (because you can't tell with only 2 iterations)
        //then break out of the for loop since we dont need to keep iterating anymore if these conditions are met
        if (Object.keys(hashmap).length > 1 && i > 1) {
            break
        }
    }

    // finds the unique element in the object (should equal to value 1)
    for (let n in hashmap) {
        if (hashmap[n] === 1) {
            return n
        }
    }
    
}

const nums = []

nums.push(parseInt(prompt("Give a number.")))
nums.push(parseInt(prompt("Give another number.")))
nums.push(parseInt(prompt("Give a number again.")))

let total = 0

for (let i = 0; i < 3; i++) {
    total += nums[i]
}

alert("The sum of all your numbers is " + total + ".")
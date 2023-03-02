// DEFINE VARAIBLES 
let coinFlip, randomNumber
let totalHeads = 0

// FUNCTIONS FOR GETTING HEADS AND HOW MANY BEFORE END ONCE THE coinFlip BECOME “Tails”
do {
    randomNumber = Math.round(Math.random())        
    if (randomNumber === 0) {
        coinFlip = "Heads"
        console.log(coinFlip)
        totalHeads++
        console.log(`Total Heads is: ${totalHeads}`)
    } else {
        break
    }
} while (coinFlip === "Heads")
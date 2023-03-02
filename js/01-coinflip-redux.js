// DEFINE VARIABLES
let coinFlip, playTimes
let i = 0

// CHECK THE COIN FLIP RESULTS AND SHOW THE HEADS OR TAILS

// VERIFY IF THE NUMBER IS VALID
playTimes = parseInt(prompt("Please enter your playing times: "));
while (isNaN(playTimes)) {
    alert("The number you entered is wrong! Please re-enter an intiger number.")
    playTimes = parseInt(prompt("Please enter your playing times: "))
    continue    
};
// CONFIRM AND SHOW THE RESULTS
for (i = 0; i < playTimes; i++) {
    randomNumber = Math.round(Math.random());
    if (randomNumber === 0) {
        coinFlip = "Heads"
        console.log(coinFlip)
    } else {
        coinFlip = "Tails"
        console.log(coinFlip)
    }
};


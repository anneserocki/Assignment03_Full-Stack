// DEFINE VARAIBLES
let countNumbers, i

// THE FUNCTION FOR COUNTDOWN
countNumbers = parseInt(prompt("Please enter the number for countdown: "))
while (isNaN(countNumbers)) {  
    alert("The number you entered is wrong! Please re-enter an intiger number.")
    countNumbers = parseInt(prompt("Please enter the number for countdown: "))
    continue
}; 

for (i = countNumbers; i >= 0; i-- ) {
    document.write(`${i}<br>`)
};
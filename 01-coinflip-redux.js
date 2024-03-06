//coinFlip variable without assigning it a number
let coinFlip;

// Collect the number of times to execute the loop from the user
const timesToFlip = parseInt(prompt("How many times would you like to flip the coin?"), 10);

// Use a for loop to execute the flips
for (let i = 0; i < timesToFlip; i++) {
    // Assign a randomly generated number to coinFlip
    coinFlip = Math.round(Math.random());

    // Use a conditional statement to check the result and display it
    if (coinFlip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}

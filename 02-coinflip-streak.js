// Declare the coinFlip variable
let coinFlip;

// Initialize a variable to count the number of "Heads" in a row
let headsStreak = 0;

do {
    // Randomly generated number
    coinFlip = Math.round(Math.random());

    // Use a conditional statement to check the result and display it
    if (coinFlip === 0) {
        console.log("Heads");
        headsStreak++;
    } else {
        // If the coin flip is not "Heads", reset the streak and exit the loop
        headsStreak = 0;
        console.log("Tails - Streak is broken!");
    }
} while (coinFlip === 0); // Continue looping while coinFlip is 0 (Heads)



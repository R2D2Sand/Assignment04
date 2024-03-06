let userInput = prompt("Enter a number to count down from:");

// Convert user input to a number
let countDownFrom = parseInt(userInput);

// Check if userInput is a valid number
if (!isNaN(countDownFrom)) {
    // Loop from countDownFrom to 0
    for (let i = countDownFrom; i >= 0; i--) {
        console.log(i);
    }
} else {
    console.log("Invalid input. Please enter a number.");
}

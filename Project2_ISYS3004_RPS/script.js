// Determine the result based on the user's choice
    let result = "";
    if (user === 'rock') {
        result = "tie";
        draws++;
    } else if (user === 'paper') {
        result = "win";
        wins++;
    } else if (user === 'scissors') {
        result = "loses"; // Consider changing this to "loses" for correct spelling
        loses++;
    }

    // Construct the message with game outcome and scores
    let mymessage = "Computer chose rock, you " + result + "!" + 
        "\n\n" + wins + " wins" +
        "\n\n" + loses + " loses" +
        "\n\n" + draws + " draws";
    
    // Display the message in an alert and speak it
    alert(mymessage);
    say(mymessage);
}

// Variables to keep track of wins, loses, and draws
let wins = 0; 
let loses = 0; 
let draws = 0;

// Function to speak a message using SpeechSynthesis API
function say(themessage) {
    let msg = new SpeechSynthesisUtterance(themessage);
    speechSynthesis.speak(msg);
}
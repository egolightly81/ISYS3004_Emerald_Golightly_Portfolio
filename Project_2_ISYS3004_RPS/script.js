// JavaScript (script.js)

function play(user) {
    let result = "";
    if (user === 'rock') {
        result = "tie";
    } else if (user === 'paper') {
        result = "win";
    } else if (user === 'scissors') {
        result = "lose";
    }
    alert("Computer chose rock, you " + result + "!");
}

document.getElementById('rock-btn').addEventListener('click', function() {
    play('rock');
});

document.getElementById('paper-btn').addEventListener('click', function() {
    play('paper');
});

document.getElementById('scissors-btn').addEventListener('click', function() {
    play('scissors');
});

// assisted trouble shooting with ChatGPT https://chat.openai.com/share/269586b3-e929-4c86-bdb3-d4d44cb2bf9d
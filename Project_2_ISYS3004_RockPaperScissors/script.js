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
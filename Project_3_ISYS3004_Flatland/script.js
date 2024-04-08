// 1. Locate the Element(s)

// 2. Write the functionality needed when event occurs 

//3. Link element, event to functionality 

// above is the 3 step method to follow which is followed below

var square = document.getElementById('square');
var words = document.getElementById('words');

function changeColour(Colour) {
    square.style.background = Colour;
}

square.addEventListener('click', (event) => {
    changeColour('green');
    updateText(); // Call the function to update the text
});

square.addEventListener('mouseover', (event) => {
    changeColour('red');
});

square.addEventListener('mouseout', (event) => {
    changeColour('grey');
});

function createBuzzwordPhrase() {
    var buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
    var action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused", "aligned"];
    var outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];

    var idx_buz = Math.floor(Math.random() * buzz.length);
    var idx_act = Math.floor(Math.random() * action.length);
    var idx_out = Math.floor(Math.random() * outcome.length);

    return buzz[idx_buz] + " " + action[idx_act] + " " + outcome[idx_out];
}

function updateText() {
    words.textContent = createBuzzwordPhrase();
}

// Initial text update
updateText();

// https://chat.openai.com/share/8017b117-d659-4873-b3a3-ed07550957e8
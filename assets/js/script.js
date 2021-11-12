// Send the output name into the DB
// make the function check if the output name is already in the DB, if so, output another word

// DOM elements which we will use
const btn = document.getElementById("btn");
const result = document.getElementById("result");

// variables
const names = ["Nicolas", "Tania", "Aurélien", "Sarah", "Nathalie", "Arnaud", "Sébastien"];
let random = Math.floor(Math.random() * names.length);

// function to randomize and output a name
function secretSanta() {
    let randNames = names[random];
    result.innerHTML = randNames;
}

// Event listener for the btn
btn.addEventListener("click", () => {
    secretSanta()
});
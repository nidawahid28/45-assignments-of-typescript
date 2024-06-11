"use strict";
/*42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.*/
Object.defineProperty(exports, "__esModule", { value: true });
// Array of magician's names
let magician_names = ["Khalid", "Saeed", "Hammad", "Ali", "Mubbashir"];
// Function to print each magician's name
function show_magicians(magician_names) {
    magician_names.forEach(magician => {
        console.log(magician);
    });
}
// Function to add "the Great" to each magician's name
function make_great(magician_names) {
    return magician_names.map(magician => `the Great ${magician}`);
}
// Modify the magicians array by adding "the Great"
let great_magicians = make_great(magician_names);
// Show the modified list of magicians
show_magicians(great_magicians);

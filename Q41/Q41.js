"use strict";
/*
41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.*/
Object.defineProperty(exports, "__esModule", { value: true });
// Array of magician's names
let magician_names = ["Khalid", "Saeed", "Hammad", "Ali", "Mubbashir"];
// Function to print each magician's name
function show_magicians(magician_names) {
    magician_names.forEach(magician => {
        console.log(magician);
    });
}
// Call the function with the array of magician's names
show_magicians(magician_names);

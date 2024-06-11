/*43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/

// Array of magician's names

let magician_names: string[] = ["Khalid", "Saeed", "Hammad", "Ali", "Mubbashir"];

// Function to print each magician's name

function show_magicians(magician_names: string[]): void {
    magician_names.forEach(magician => {
        console.log(magician);
    });
}

// Function to add "the Great" to each magician's name

function make_great(magician_names: string[]): string[] {
    return magician_names.map(magician => `the Great ${magician}`);
}

// Make a copy of the original magicians array
let magician_names_copy = [...magician_names];

// Modify the copied array by adding "the Great"
let great_magicians = make_great(magician_names_copy);

// Show the original list of magicians

console.log("Original Magicians:");
show_magicians(magician_names);

// Show the modified list of magicians

console.log("\nGreat Magicians");
show_magicians(great_magicians);


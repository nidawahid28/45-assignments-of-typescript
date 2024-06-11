/*
41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.*/

// Array of magician's names

let magician_names: string[] = ["Khalid", "Saeed", "Hammad", "Ali", "Mubbashir"];

// Function to print each magician's name

function show_magicians(magician_names: string[]): void {
    magician_names.forEach(magician => {
        console.log(magician);
    });
}

// Call the function with the array of magician's names

show_magicians(magician_names);
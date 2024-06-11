/*3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/

// Store a person's name in a variable

let personName: string = "Rameez Qureshi";

// print name in lower case

console.log("lowercase:", personName.toLowerCase());

// print name in upper case

console.log("uppercase:",personName.toUpperCase());

// print name in titlecase

let nameInTitleCase = personName[0].toUpperCase() + personName.slice(1,6).toLowerCase() + " " + 
personName[7].toUpperCase() + personName.slice(8).toLowerCase();

console.log("titlecase:",nameInTitleCase);








"use strict";
/*44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.*/
Object.defineProperty(exports, "__esModule", { value: true });
// Function to print the summary of sandwich
function makeSandwich(...items) {
    console.log("\nSandwich with the following items: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy Sandwich");
}
// Call the function three times three different number of arguments
makeSandwich("Chicken", "Cheese", "Ketchup", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Chicken", "Tomato", "Egg");

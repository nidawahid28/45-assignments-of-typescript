"use strict";
/*36. T-Shirt: Write a function called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt. The function should print
a sentence summarizing the size of the shirt and the message printed on it.
Call the function.*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define the function make_shirt
function make_shirt(size, message) {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}".`);
}
// Examples calls to the function
make_shirt('Small', 'Code is Poetry');
make_shirt('Medium', 'Hello World!');
make_shirt('Large', 'Code is Life ');

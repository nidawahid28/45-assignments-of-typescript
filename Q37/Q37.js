"use strict";
/*37. Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.*/
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "Large", message = "I Love TypeScript") {
    console.log(`The shirt size is ${size} and the message to be printed on it is: "${message}".`);
}
// Making a large shirt with the default message
make_shirt();
// Making a medium shirt with the default message
make_shirt("M");
// Making a shirt of any size with a different message
make_shirt("S", "JavaScript is Great!");
make_shirt("XL", "Coding is Fun!");

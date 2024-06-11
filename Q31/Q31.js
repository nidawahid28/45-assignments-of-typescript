"use strict";
/*31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
Object.defineProperty(exports, "__esModule", { value: true });
// Array of usernames 
let userNames = ["admin", "hammad", "usman", "zara", "sobia"];
// check if the array is empty
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Using forEach loop on Array
    userNames.forEach(username => {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username},  thank you for logging in again.`);
        }
    });
}
// Remove all usernames from the array
userNames = [];
// check if the array is empty again 
if (userNames.length === 0) {
    console.log("We need to find some users!");
}

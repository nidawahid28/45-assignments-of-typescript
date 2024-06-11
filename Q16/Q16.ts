/*16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/

let guestList: string[] = ["Faryal","Sana","Madiha","Hira","Sehar"];

let canNotAttend: string = "Sehar";
// console.log(canNotAttend + ' ' + "can not make it for Dinner");

let newGuest: string = "Rabia";
guestList[guestList.indexOf(canNotAttend)] = newGuest;
// console.log(guestList);
// guestList.map((item) => (
//     console.log(`Dear ${item}, I found a bigger Dinner Table`)
// ));
let guestBegin: string = "Rameez";
guestList.unshift(guestBegin);
// console.log(guestList);

let middleGuest: string = "Hafsa";
let middleIndex = guestList.length/2
guestList.splice(middleIndex,0,middleGuest)
// console.log((guestList));

guestList.push("Fatima")
// console.log(guestList);

guestList.map((item) => (
    console.log(`Dear ${item}, You are cordinally invited to a Dinner`)
));





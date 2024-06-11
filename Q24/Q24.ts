/*24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/

// Tests for equality and inequality with strings

let str1: string = "Hello";
let str2: string = "World";
let str3: string = "hello";

console.log(str1 === "Hello");
console.log(str1 === str2);

// Tests using the lower case function

console.log(str1.toLowerCase() === "hello");
console.log(str2.toLowerCase() === "hello");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num1: number = 10;
let num2: number = 20;
let num3: number = 10;

console.log(num1 === num3);
console.log(num2 > num1);
console.log(num2 >= num1 );
console.log(num1 <= num3);
console.log( num1 !== num3);
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num2 <= num1);

// Tests using "and" and "or" operators

console.log((num1 < num2) && (str1 === "Hello"));
console.log((num1 === num3) || (num1 > num2));
console.log((num1 > num2) && (str2 === "Hello"));
console.log((num1 !== num3) || (num1 > num2));

// Test whether an item is in a array

let cities: string[] = ["Karachi","Lahore","Multan"];

console.log(cities.includes("Karachi"));
console.log(cities.includes("Islamabad"));

// Test whether an item is not in a array

console.log(!cities.includes("Islamabad"));
console.log(!cities.includes("Karachi"));
















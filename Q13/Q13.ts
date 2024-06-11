/*13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/

let cars: string[] = ["Mehran","Bmw","Ford","Ferrari","Kia"];

// 1st Method

//  cars.map((items) => console.log(`“I would like to own a ${items}.”`));

// 2nd Method

 for (let i = 0; i < cars.length; i++){
     console.log(`I would like to own a `+cars[i]);
 }
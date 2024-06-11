/*14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/

let guestList: string[] = ["Faryal","Sana","Madiha","Hira","Sehar"];

// guestList.map((item) => (console.log(`Dear ${item}, You are invited to a Dinner`)));

// 2nd Method

for(let index = 0; index < guestList.length; index++){
    console.log(`Dear ${guestList[index]}, You are invited to dinner`);
    
}

export{guestList}
let planet = "Earth";
let message;

if (planet.toUpperCase == "Mars") {
    message = "Welcome to Mars"
}

console.log(message);

let planet = "mars";
let message;

let firstLetter = planet.charAt(0)
let firstLetterCapital = firstLetter.toUpperCase()
planet.charAt(0) = firstLetterCapital;
console.log(planet)
if (planet.toUpperCase() == "MARS") {
    message = "Welcome to Mars!"
}
console.log(message);


let accessLevel = 8;
let employeeType;
if (accessLevel > 6) {
    console.log("Welcome, Special Agent")
} else {
    employeeType = "Normal Employee"
}

console.log("Welcome, " + employeeType)


employeeType = accessLevel > 6 ? "Special Agent" : "Normal Employee"
console.log("Welcome " + employeeType);

let Name = "Massoud";
let dangerLevel = 2;
let bravery = 7;
let location = "Canada"

if (bravery >= dangerLevel) {
    console.log(Name, " is going to ", location);
}

let access = accessLevel = 7;

let access = accessLevel > 6 ? "Welcome, Special Agent!" : "Access denied."
console.log(access)

let assignmentDifficulty = 3;
let myCodeSkills = 5;
let freeTime = 8;
let assignmentTime = 3;
let canComplete;
if (myCodeSkills > assignmentDifficulty) {
    //check normal time
    if (freeTime > assignmentTime) {
        canComplete = true
    }
} else {
    //check double time
    if (freeTime >= assignmentTime*2) {
        canComplete = true
    }
}



if (canComplete) {
    console.log("You can do it!")
} else {
    console.log("No Time...")
}


if (myCodeSkills > assignmentDifficulty && freeTime >= assignmentTime || freeTime < assignmentTime) {
    // check normal time
    canComplete = true;
} else if (freeTime >= assignmentTime*2) {
    canComplete = true;
}

if (canComplete) {
    console.log("You can do it!")
} else {
    console.log("No Time...")
}



if (myCodeSkills > assignmentDifficulty && freeTime >= assignmentTime){
    canCompete = true
} else if (myCodeSkills < assignmentDifficulty && freeTime > assignmentTime*2){
    canCompete = false
}
console.log (canCompete)


let time = assignmentDifficulty > myCodeSkills ? assignmentTime*2 : assignmentTime;
// Same as:
if (assignmentDifficulty > myCodeSkills) {
    time = assignmentTime*2;
} else {
    time = assignmentTime;
}

if (freeTime> time) {
    canComplete = true;
}

for (let i=1, i < 11, i++) {
    console.log(i)
};

for (let i=1; i < 21; i++;) {
    let isEven = i%2 === 0;
    if (isEven) {
     console.log(i);
    };
    
};

// for (let i = 0; i < 21; i += 2) {
//   console.log(i)
// }

let myString = "apples are great"

//1. Strings have a length property
//So, we can know how long the stirng is.
//2. We can look at the letters using .charAt() tool.

let thisLetter = mystring.charAt(0)
//console.log(thisLetter)
let total = 0;
for (let i=0; i<myString.length; i++) {
    //Can I see each Letter?
    let thisLetter = myString.charAt(i);
    console.log(thisLetter)
    //If we find a vowel, =1 to the total.
    if (thisLetter === "a" || thisLetter === "e" || thisLetter === "i" || thisLetter === "o" || thisLetter === "u") {
        total = total+1;
    }
}

console.log(total)

console.log(total);


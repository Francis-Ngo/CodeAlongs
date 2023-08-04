// syntax (how to write)
 

let trueOrFalse;
 

// if statement////////////////////////
if (trueOrFalse) {
 

}
//////////////////////////////////////



// if / else statement
if (trueOrFalse) {
 

} else {
 

}
///////////////////////////////////////
// if / else if statement
if (trueOrFalse) {
 

} else if (trueOrFalse) {
 

}
////////////////////////////////////////
// 1
let people = 6;
let seatsInCar = 5;
//write an if statement to check if everyone can fit in the car
if (people >= seatsInCar) {
    seatsInCar = "Too many people not enough seats, will not legally fit people in car"
} else (people < seatsInCar) {
    "Everyone will fit in the car"
}
console.log(seatsInCar)


//2
let climbingSkill = 11
let difficulty = 15;
//write and if / else statement to check if I can climb the wall.
if (climbingSkill >= difficulty) { "You can climb the wall"

} else if (climbingSkill < difficulty) {
    "You cannot climb the wall"
}
console.log(climbingSkill)


//3
let cash = 9.50
// write some if statements to tell me what I can buy
// burger - $8
// fries - $3
// hot dog - $4
// ice cream - $4
// Tacos - $10
if (cash >= 10) {
    cash ="You may buy 1 order of Tacos, or 1 Burger, or a hot dog, or fries, or ice cream"
} else if (cash >= 8){
    cash ="You may buy a burger or a hot dog with an ice cream"
} else if (cash >= 4) {
    cash = "You may buy a hot dog or an ice cream"
} else if (cash >= 3) {
    cash = "You may buy at atleast an order of fries."
} else if (cash < 3) {
    cash = "You starving today."}
console.log(cash)

//4
let name = "Daren";
let checkName;
// write an if statement to check if the name is "Jessie"
// if yes "it's a match!"
if (name === "Jessie") {
    checkName = "it's a match"
} else {
    checkName ="it's not a match"
}
console.log(checkname);

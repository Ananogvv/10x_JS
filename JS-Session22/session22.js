// Easy Exercises
// Exercise 1: pokemon Battle - Function Basics

function compareAttack(pokemon1, attack1, pokemon2, attack2){
    if (attack1 > attack2){
        console.log(pokemon1 + " is stronger!")
    }else{
        console.log(pokemon2 + " is stronger!")
    }
}

compareAttack("Pikachu", 55, "charizard", 84);

//Exercise 2: Hogwarts Spell Casting - Function Parameters 
function castSpell(spell, wizard){
    return wizard + ' casts ' + spell + '!';
}

console.log(castSpell("Expelliarmus", "Hermione"));

//Exercise 3: One Piece Bounty Calculator - Return Values
function calculateBounty(currentBounty, increase){
    return currentBounty + increase;
}

let result = calculateBounty(1500000000, 500000000);
console.log(result);

//Exercise 4: Jedi Training - Default Parameters
function trainJedi(name, strength = 50){
   return name + " has " + strength + " Power ";

}

console.log(trainJedi('Luke', 100));
console.log(trainJedi('Rey'));

//Exercise 5: Gollum's Precious - String Manipulation
function gollumSays(phrase){
    return phrase +"..." + phrase +"..." + phrase +"...";
}

console.log(gollumSays("My precious"));

//Exercise 6: Super Mario Power-Up - Function Expressions
function powerUp(jumpHeight){
    return jumpHeight * 2;
 
}

console.log(powerUp(5));

//Exercise 7: Naruto's Shadow Clone Jutsu - Arrow Functions
const shadowClone = (count) => count * 5;

console.log(`${shadowClone(10)} clones created!`);

//MEDIUM 4 EXERCISES

//Exercise 8: Sorting the Sorting Hat - Callback Functions

function sortStudent(name, callback) {
    console.log(`Sorting ${name} into...`);
    console.log(callback());
}

function randomHouse() {
    const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
    return houses[Math.floor(Math.random() * houses.length)];
}

sortStudent("Harry", () => "Gryffindor");
sortStudent("Hermione", randomHouse);

//Exercise 9: Infinity Gauntlet - Function Scope

function snapFingers(){
    const stones = 6;

    function checkStones(){
        console.log(`Thanos has ${stones} stones. The universe trembles!`);
    }

    checkStones();
}

snapFingers();

//Exercise 10: Time-Turner – Function Hoisting

turnBackTime();
/* In JavaScript, hoisting is a feature that moves function declarations to the top of the code before it runs. This means you can call a function before defining it, as long as you use the function keyword. */

function turnBackTime(){
    console.log("Going back in time!");
}

//Exercise 11:  Batman’s Secret Identity – Function Closures

function batman() {
    let batmanSay = "I am Batman!";

    function batmanIdentity(){
        console.log(batmanSay);

    }
    return batmanIdentity;
}
const batmanClosure = batman();
batmanClosure();

//Hard - Exercise 12: The Enchanted Mirror - Higher-Order Functions

function magicMirror(message, transformFunction) {
    const transformedMessage =  transformFunction(message);
    return `The mirror says: ${transformedMessage}`;
}

const resultMessage = magicMirror("Will I be rich?", str => str.toUpperCase());
console.log(resultMessage);



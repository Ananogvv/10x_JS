//Exercise 1: The Power of Variables and Operators

let gandalfPower = 90;
let dumbledorePower = 95;

gandalfPower = 95;
dumbledorePower = 93;

console.log("Gandal power is:" + gandalfPower);
console.log("Dumbledore Power is:" + dumbledorePower);

if (gandalfPower > dumbledorePower){
    console.log("Gandalf the Grey is stronger!");
}else{
    console.log("Dumbledore is stronger!");
}

// Exercise 2: The Treasure Chest of Data types

let gold = 100;
let map = "Gold Treasure Chest Map";
let isAmuletCursed = true;

console.log(typeof gold);
console.log(typeof map);
console.log(typeof isAmuletCursed);

map = "Treasure Map";
console.log("" + map);

// Exercise 3: The Potion Shop's Price Calculator

let healtPotions = 10;
let manaPotions = 5;

let totalCost = 3 * healtPotions + 2 * manaPotions;
console.log(totalCost);



if(totalCost > 50) {
    console.log("20% Discount is applied" )
}else{
    console.log("Total cost is:" + totalCost);
}

//Exercise 4: The Brave Knight's Inventory

let swordDamage = 180;
const armor = "Mooncloth armor";
let isShield = true;

console.log(`The valian Sir Debugalot stand ready to embark on his nuble quest! With his mighty sword, forged with ${swordDamage} power, and clad in the enchanted ${armor}, he fears no foe. Does he wield a shield to guard against the darkness? ${isShield}!`)

//Exercise 5: The Bakery's Daily Earnings 

let breadPrice = 3;
let cakePrice = 5;
let breadSold = 100;
let cakeSold = 76;

let dailySale = breadSold * breadPrice + cakePrice *  cakeSold;

console.log(`Today, we have sold ${breadSold} bread, which costs ${breadPrice}$ and sold ${cakeSold}, which costs ${cakePrice}$. It means that our daily sale was ${dailySale}$.`);

// Exercise 6: The Space Mission's Fuel Check

let fuelCapacity = 500;
let currentFuel = 450;
let readyToLaunch = fuelCapacity * 0.8;

if (currentFuel > readyToLaunch ){
    console.log("Spaceship is ready to Launch!");
}else{
    console.log("Fuel needs to be filled!");
}


// Exercise 7: The Time Traveler's Stopwatch (Updated)
const currentYear = new Date().getFullYear();
const timeJump = 27;
const newYear = currentYear + timeJump;

console.log(`After a time jump of ${timeJump} years, the new year is ${newYear}.`)

//Exercise 8: The Wizard's Spell Strenght Test

let aetherialBind = 120;
let emberwakeSurge = 200;
let echoOfTime = 130;

let strongestSpell;

if (aetherialBind > emberwakeSurge && atherialBind > echoOfTime){
    strongestSpell = "atherialBind";
}else if(emberwakeSurge > aetherialBind && emberwakeSurge > echoOfTime){
    strongestSpell = "emberwakeSurge";
}else if(echoOfTime > aetherialBind && echoOfTime > emberwakeSurge){
    strongestSpell = "echoOfTime";
}else if( aetherialBind === emberwakeSurge < echoOfTime){
    strongestSpell = "echoOfTime";
}else if( aetherialBind > emberwakeSurge === echoOfTime){
    strongestSpell = "aetherialBind";
}else if( emberwakeSurge > aetherialBind === echoOfTime){
    strongestSpell = "emberwakeSurge";
}

console.log("The Stronges Spell is:" + strongestSpell);

// Exercise 9: The Haunted House Mystery

let kitchenHasGhost = true;
let livingRoomHasGhost = false;
let houseIsSafe = kitchenHasGhost === false && livingRoomHasGhost === false;

if( houseIsSafe){
    console.log("The house is safe! No ghosts in the Kitchen or Living Room.")
}else{
    console.log("Danger! the house is NOT safe. Ghosts detected!")
}

// Exercise 10: The Robot's Battery Check

let batteryLvl = 90;
let sufficient = 30;

if(batteryLvl > sufficient){
    console.log("Battery Sufficient!")
}else{
    console.log("Low Battery!")
}

// Exercise 11: The Dragon's Health Meter 
 let dragonHealth = 100;
 let knightAttackDamage = 25;

 dragonHealth -= knightAttackDamage;

 let healthValue = dragonHealth;

 console.log(`Dragon's Health After Attack: ${healthValue}`);

 // Exercise 12: Speeding Race Car

 let speedLimit = 50;
 let carSpeed = 30;

 carSpeed += 25;

 if(carSpeed > speedLimit){
    console.log("Speed Warning: You are going too fast!");
 }else{
    console.log("Speed is okay!");
 }

 console.log(`current Speed: ${carSpeed}`);

 // Exercise 13: The Superhero Strenght Test

 let heroStrenght = 95;
 let villainStrength = 90;
 let heroDifference = heroStrenght - villainStrength;
 let villainDifference = villainStrength - heroStrenght;

 if(heroDifference > 10){
    console.log("Decisive Victory! Valiant triumphs decisively! Malakor is utterly outmatched!");
 }else if(villainDifference > 10){
    console.log("Decisive Victory! Malakor's power is overwhelming! Valiant is soundly defeated!");
 }else if(heroStrenght === villainStrength){
    console.log("Stalemate! It's a strength stalemate! Neither Valiant nor Malakor can overpower the other!");
 }else if(heroDifference <= 10){
    console.log("Close Call! Valiant barely edges out! A close call vicroty against Malakor!");
 }else if(villainDifference <= 10){
    console.log("Close Call! Malakor narrowly prevails! A hard-fought win over Valiant.");
 }

 // Exercise 14: The Tricky Treasure Hunt

 let treasureMap = true;
 let foundAncientKey = false;
 let solvedRiddleScroll = true;
 let hasCompass = true;
 let fullMoon = false;

 let canFindTreasure = treasureMap === true && foundAncientKey || treasureMap && solvedRiddleScroll && hasCompass;

 if(canFindTreasure){
    console.log("Success! Alex can find the legendary treasure;");
 }else{
    console.log("Alas, Alex is missing crucial clues and cannot find the treasure yet.");
 }

 // Exercise 15: The Ice Cream Shop's Daily Sales with Volume Discount

 let iceCreamCone = 4;
 let iceCreamSundae = 8;
 let coneSoldToday = 250;
 let sundaesSoldToday = 120;

 let coneSales = iceCreamCone * coneSoldToday;
 let sundaesSale = iceCreamSundae * sundaesSoldToday;
 let todaysSales = coneSales + sundaesSale;
 let discountedMoney = todaysSales * 0.95;
 let discountFinal = todaysSales - discountedMoney;
 let discount = "5%";

 if(todaysSales >= 1000){
    console.log(`Todays Sale is: ${todaysSales}$`);
    console.log(`Discount applied today is ${discount}. Final total daily earnings after discount is: ${discountedMoney}.Volume Discount Applied: Yes! `);
 } else{
    console.log(`Todays Sale is: ${todaysSales}`);
    console.log(`Discount applied $0, Final total daily earnings after discount: ${todaysSales}. Volume Discount Applied: No!`)
 }

 // Exercise 16:  Music Band Concert Profit Check
let ticketPrice = 20;
let ticketsSold = 500;
let concertCosts = 8000;

let totalEarnings = ticketPrice * ticketsSold;
let profitLoss =  totalEarnings - concertCosts;

if(profitLoss > 0){
    console.log(`Concert ProfiT: ${profitLoss}$. Great Success!`)
}else if(profitLoss = 0){
    console.log(`Concert did not cover costs. Earnings:${totalEarnings}. Costs:${concertCosts}.`)
}else if(profitLoss < 0){
    console.log(`Concert Loss!Earnings:${totalEarnings}. Costs:${concertCosts}. `)
}



 





 








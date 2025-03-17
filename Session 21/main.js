// Exercise 1: The Power of Variables and Operators
let gandalfPower = 80;
let dumbledorePower = 85;

gandalfPower += 10;
dumbledorePower -= 7;

if (gandalfPower > dumbledorePower) {
  console.log("Gandalf is the winner");
} else if (gandalfPower < dumbledorePower) {
  console.log("Dumbledore is the winner");
}

// Exercise 2: The Treasure Chest of Data Types

let gold = 0;
let treasureMap = "paper";
let curse = true;

console.log(typeof gold);
console.log(typeof treasureMap);
console.log(typeof curse);

treasureMap = "treasure of the lost island";
console.log(treasureMap);

// Exercise 3: The Potion Shop’s Price Calculator
let healthPotion = 10;
let manaPotion = 8;

let totalPrice = healthPotion * 3 + manaPotion * 2;

if (totalPrice > 50) {
  console.log("You are getting a discount!");
  //   totalPrice -= 10;
}
console.log(totalPrice);

//Exercise 4: The Brave Knight’s Inventory
let swordPower = 10;
let armorName = "armor of the king";
let shield = false;

console.log(
  "I'm ready for battle! Without a shield, but with a " +
    armorName +
    " and a sword with a power of " +
    swordPower
);

// Exercise 5: The Bakery's Daily Earnings
let breadPrice = 1.5;
let cakePrice = 5;

let breadAmount = 26;
let cakeAmount = 14;

let total = breadPrice * breadAmount + cakePrice * cakeAmount;
console.log(total);

// Exercise 6: The Space Mission’s Fuel Check
const fuelCapacity = 100;
let currentFuel = 70;

if (currentFuel >= fuelCapacity * 0.8) {
  console.log("You have enough fuel!");
} else {
  console.log("You need to refuel!");
}
// Exercise 7: The Time Traveler’s Stopwatch (Updated)
let currentYear = new Date().getFullYear();

let yearsJumped = 10;

let newYear = currentYear + yearsJumped;

console.log(newYear);
// Exercise 8: The Wizard’s Spell Strength Test
let power1 = 70;
let power2 = 85;
let power3 = 90;

if (power1 === power2 && power1 === power3) {
  console.log("All spells have equal power.");
} else if (power1 >= power2 && power1 >= power3) {
  console.log("Power 1 is the strongest");
  if (power1 === power2) console.log("Power 1 and Power 2 are equally strong");
  if (power1 === power3) console.log("Power 1 and Power 3 are equally strong");
} else if (power2 >= power1 && power2 >= power3) {
  console.log("Power 2 is the strongest");
  if (power2 === power3) console.log("Power 2 and Power 3 are equally strong");
} else {
  console.log("Power 3 is the strongest");
}

// Exercise 9: The Haunted House Mystery
let kitchenHasGhost = true;
let livingRoomHasGhost = false;

let isHouseSafe = kitchenHasGhost == false && livingRoomHasGhost == false;

if (isHouseSafe) {
  console.log("The house is safe! No ghosts in the Kitchen or Living Room.");
} else {
  console.log("Danger! The house is NOT safe. Ghosts detected!");
}

// Exercise 10: The Robot’s Battery Check
let batteryLevel = 25;

if (batteryLevel > 30) {
  console.log("Battery sufficient");
} else {
  console.log("Low battery");
}

// Exercise 11: The Dragon’s Health Meter
let dragonHealth = 100;
let knightAttackDamage = 25;
dragonHealth -= knightAttackDamage;

console.log("The dragon's health is now " + dragonHealth);

// Exercise 12: The Speeding Race Car
const speedLimit = 50;
let carSpeed = 30;
carSpeed += 25;

if (carSpeed > speedLimit) {
  console.log("Your speed is high", carSpeed, "km/h");
  console.log("Speed Warning: You are going too fast!");
} else {
  console.log("Your speed is good", carSpeed, "km/h");
  console.log("Speed is okay");
}
// task 13
const heroStrength = 95;
const villainStrength = 90;

let difference = Math.abs(heroStrength - villainStrength);

if (heroStrength > villainStrength && difference > 10) {
  console.log("Valiant triumphs decisively! Malakor is utterly outmatched!");
} else if (villainStrength > heroStrength && difference > 10) {
  console.log("Malakor's power is overwhelming! Valiant is soundly defeated");
} else if (heroStrength == villainStrength) {
  console.log(
    "It's a strength stalemate! Neither Valiant nor Malakor can overpower the other"
  );
} else if (heroStrength > villainStrength) {
  console.log(
    "Valiant barely edges out! A close call victory against Malakor!"
  );
} else {
  console.log("Malakor narrowly prevails! A hard-fought win over Valiant!");
}

//Exercise 14: The Tricky Treasure Hunt
let hasTreasureMap = false;
let foundAncientKey = false;
let solvedRiddleScroll = true;
let hasCompass = true;
// let isFullMoon = false; THIS VARIABLE IS NOT NEEDED
let findTreasure =
  hasTreasureMap && (foundAncientKey || (solvedRiddleScroll && hasCompass));
if (findTreasure) {
  console.log("Success! Alex can find the legendary treasure!");
} else {
  console.log(
    "Alas, Alex is missing crucial clues and cannot find the treasure yet."
  );
}
// Exercise 15: The Ice Cream Shop’s Daily Sales with Volume Discount

const iceCreamCone = 4;
const iceCreamSundae = 8;

let conesSoldToday = 250;
let sundaesSoldToday = 120;

let total = conesSoldToday * iceCreamCone + sundaesSoldToday * iceCreamSundae;

console.log("Total sales for today before discount: $" + total);
let discount = "NO";
if (total >= 1000) {
  total = total * 0.95;
  console.log("You are getting a discount! like 5%. total price is: $" + total);

  discount = "YES";
} else {
  total = total;
  console.log("No discount applied.");
}
console.log("Total sales for today after discount: $" + total);
console.log("Volume Discount Applied: " + discount);

// Exercise 16: Music Band Concert Profit Check
const ticketPrice = 20;
const concertCosts = 8000;
let ticketsSold = 50;

if (ticketPrice * ticketsSold >= concertCosts) {
  console.log(
    "Concert Profit: $" +
      (ticketPrice * ticketsSold - concertCosts) +
      ". Great success!"
  );
} else {
  console.log(
    "Concert did not cover costs. Earnings:" +
      ticketPrice * ticketsSold +
      " Costs: $8000."
  );
}


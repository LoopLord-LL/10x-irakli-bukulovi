// task 1: Pokemon Battle
function compareAttack(pockemon1, attack1, pockemon2, attack2) {
  if (attack1 > attack2) {
    return "Pikachu is stronger!";
  } else if (attack1 < attack2) {
    return "Charizad is stronger!";
  } else {
    return "Both are equally strong";
  }
}
console.log(compareAttack("Pikachu", 55, "Charizad", 84));

// task 2: Hogwarts Spell casting
function castSpell(spell, wizard) {
  return `${wizard} casts ${spell}!`;
}
console.log(castSpell("Expelliarmus", "Hermione"));

// task 3: One Piece Bobunty Calculator

function calculateBounty(currentBounty, increase) {
  return currentBounty + increase;
}
console.log(calculateBounty(1500000000, 500000000));
// task 4: Jedi Training – Default Parameters

function trainJedi(name, strength = 50) {
  return `${name} has ${strength} Power`;
}
console.log(trainJedi("Luke", 100));
console.log(trainJedi("Rey"));
// task 5:  Gollum’s Precious – String Manipulation
function gollumSays(phrase) {
  return `${phrase}... ${phrase}... ${phrase}...`;
}
console.log(gollumSays("My precious"));
// task 6 : Super Mario Power-Up – Function Expressions
const powerUp = function (jumpHeight) {
  return jumpHeight * 2;
};
console.log(powerUp(5));
// task 7: Naruto’s Shadow Clone Jutsu – Arrow Function
const shadowClone = (count) => count * 5;
console.log(`${shadowClone(10)} clones created!`);
// task 8:  Sorting the Sorting Hat – Callback Functions
function sortStudent(name, callback) {
  console.log(`Sorting ${name} into... ${callback()}`);
}

function randomHouse() {
  const house = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
  return house[Math.floor(Math.random() * house.length)];
}
sortStudent("Harry Potter", randomHouse);

//task 9:  Infinity Gauntled - function scope

function snapFingers() {
  let stones = 6;
  function checkStones() {
    console.log(`Thanos has ${stones} stones. The universe trembles!`);
  }
  return checkStones();
}
snapFingers();

// task 10: Time - Turner -  function hoisting
// JavaScript moves function declarations to the top of the file before executing code. This is called hoisting.
turnBackTime();

function turnBackTime() {
  console.log("Going back in time!");
}

//task 11: . Batman’s Secret Identity – Function Closures
function batman() {
  function identity() {
    return "I am batman";
  }
  return identity;
}
const secret = batman();
console.log(secret());

//task: 12  The Enchanted Mirror – Higher-Order Functions
function magicMirror(message, transformFunction) {
  return `The mirror says: ${transformFunction(message)}`;
}

console.log(magicMirror("Will I be rich?", (str) => str.toUpperCase()));

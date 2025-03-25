// 1. Batman’s Night Patrol (If Statements & Boolean Conditions)
function batmanPatrol(signalOn) {
  if (signalOn == true) {
    console.log("Batman is on patrol!");
  } else {
    console.log("Gotham is quiet tonight.");
  }
}
batmanPatrol(true);
batmanPatrol(false);

// 2. Sorting Avengers (Truthy & Falsy Values)
function availableAvengers(avengers) {
  return avengers.filter(Boolean).sort();
}
console.log(availableAvengers(["Iron Man", "", null, "Thor", undefined]));

// 3. Spider-Man’s Mask Check (Negation !)
function canRemoveMask(peopleAround) {
  if (peopleAround <= 0) {
    console.log("Safe to remove mask!");
  } else {
    console.log("Keep the mask on!");
  }
}
canRemoveMask(3);
canRemoveMask(0);

// 4. Naruto’s Chakra Levels (Ternary Operator)
function checkChakra(level) {
  if (level > 80) {
    return "Full Power";
  } else if (level >= 50) {
    return "Still Fighting";
  } else {
    return "Need Ramen Recharge";
  }
}
console.log(checkChakra(90));
console.log(checkChakra(60));
console.log(checkChakra(30));

// 5. Jedi Academy: Light vs. Dark Side (Comparison & Logical Operators)
function isJediMaster(angerLevel, wisdomLevel) {
  if (angerLevel < 30 && wisdomLevel > 70) {
    return true;
  } else {
    return false;
  }
}
console.log(isJediMaster(20, 80));
console.log(isJediMaster(50, 90));

// 6. One Piece Treasure Hunt (Boolean Coercion & Conditionals)
function isTreasureSpot(content) {
  return Boolean(content);
}
console.log(isTreasureSpot("gold"));
console.log(isTreasureSpot(0));

// 7. Doctor Strange’s Multiverse Passcode (Coercion & Quirky Comparisons)
function strangePasscode(code1, code2) {
  return code1 == code2 && code1 !== code2;
}
console.log(strangePasscode(null, undefined));
console.log(strangePasscode("0", 0));
console.log(strangePasscode(0, false));
console.log(strangePasscode(0, 0));

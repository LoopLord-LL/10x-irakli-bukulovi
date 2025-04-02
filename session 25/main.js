// BASIC TASKS
// --------------------------------------------------------------
// Task 1: Basic Counting Loop (For Loop)
function countDownFrom(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}

// Task 2: Iterate Over an Array (For...of Loop)
function printArrayElements(arr) {
  for (const fruits of arr) {
    console.log(fruits);
  }
}

// Task 3: Sum of Numbers (While Loop)
// function sumNumbersUpTo(n){
//     let sum = 0
//     while()
// }
// sumNumbersUpTo(5);

// Task 4: Repeat a String (Do...While Loop)
function repeatString(str, n) {
  let result = "";
  let counter = 0;
  do {
    result += str;
    counter++;
  } while (counter != n);
  return result;
}
const output = repeatString("Helloo", 3);
// second variant
function repeatString2(str, n) {
  do {
    console.log(str);
    n--;
  } while (n != 0);
}

// Task 5: Iterate Over Object Properties (For...in Loop)
function printObjectKeys(obj) {
  for (let object in obj) {
    console.log(`${object}`);
  }
}
// printObjectKeys({ name: "Alice", age: 25 });
// --------------------------------------------------------------------------------
// MEDIUM TASKS

// Task 1: Filter Odd Numbers (For Loop)
function filterOdds(numbers) {
  let oddNums = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      oddNums.push(numbers[i]);
    }
  }
  if (oddNums.length == 0) {
    return "No odds there";
  } else {
    return oddNums;
  }
}

// Task 2: Find Maximum Value (For...of Loop)
function maxValue(numArr) {
  if (numArr.length === 0) {
    return "array is empty";
  }
  let max = numArr[0];
  for (let value of numArr) {
    if (value > max) {
      max = value;
    }
  }
  return max;
}

// Task 3: Reverse a String (While Loop)
function reverseString(str) {
  let text = "";
  let counter = str.length - 1;
  while (counter >= 0) {
    text += str[counter];
    counter--;
  }
  return text;
}

// Task 4: Validate User Input (Do...While Loop)
function getValidInput() {
  let userInput;
  let isValid = false;

  do {
    userInput = prompt("Please enter a number between 1 and 10:");

    if (userInput !== null) {
      const num = parseInt(userInput);
      if (!isNaN(num) && num >= 1 && num <= 10) {
        isValid = true;
      } else {
        alert("Invalid input. Please enter a number between 1 and 10.");
      }
    } else {
      alert("Input cancelled.");
      isValid = true;
    }
  } while (!isValid);

  return parseInt(userInput);
}
// :))))))))))))))))))))))
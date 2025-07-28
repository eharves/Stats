
/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  {
    let sum = 0;
    let i = 0;
    while (i < numbers.length) {
      const number = numbers[i];
      sum += number;
      i += 1;
    }
    return sum;
  }

  {
    // For loop is syntactic sugar for a while loop
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      sum += number;
    }
    return sum;
  }

  {
    // For..of loop is syntactic sugar for a for loop
    // We use it when we don't care about indexes and only care about the elements
    let sum = 0;
    for (const n of numbers) {
      sum += n;
    }
    return sum;
  }
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  // We can call other functions inside a function!
  return getSum(numbers) / getLength(numbers);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  // We default min to Infinity in case the array is empty
  let min = Infinity;
  for (const n of numbers) {
    if (n < min) {
      min = n;
    }
  }
  return min;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  let max = -Infinity;
  for (const n of numbers) {
    if (n > max) {
      max = n;
    }
  }
  return max;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  return getMax(numbers) - getMin(numbers);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  const evens = [];
  for (const n of numbers) {
    if (n % 2 === 0) {
      evens.push(n);
    }
  }
  return evens;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  const odds = [];
  for (const n of numbers) {
    if (n % 2 === 1) {
      odds.push(n);
    }
  }
  return odds;
}

// === READ BUT DO NOT EDIT THE CODE BELOW ===

/**
 * @param {string} commaSeparatedNumbers
 * @returns {number[]} the string converted into an array of numbers
 */
function convertStringToNumbers(commaSeparatedNumbers) {
  // Split the string of numbers into an array of strings.
  const strings = commaSeparatedNumbers.split(",");

  // Convert the array of strings into an array of numbers
  const numbers = [];
  for (const s of strings) {
    const number = parseInt(s);
    numbers.push(number);
  }
  return numbers;
}

/**
 * Prints some descriptive statistics about the provided numbers.
 * @param {number[]} numbers
 */
function describeNumbers(numbers) {
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
}

const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "28,-15,30,975,400"
);
const numbers = convertStringToNumbers(userInputString);
describeNumbers(numbers);

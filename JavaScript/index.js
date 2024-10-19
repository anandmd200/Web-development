/**
 * what is function
 * Function declarations
 * Function statement
 * function Expression
 *
 *
 *
 *
 */

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  accumulator += currentValue;
  return accumulator;
}, 0);

console.log(`Final Sum: ${sum}`);

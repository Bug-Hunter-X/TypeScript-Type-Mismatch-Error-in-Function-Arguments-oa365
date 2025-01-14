function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // Correct: result1 is 8
const result2 = subtract(10, 5); // Correct: result2 is 5

// Corrected: Type guard or type assertion
const result3 = add(5, parseInt("3", 10)); //Corrected using parseInt to convert string to number
const result4 = add(5, <number>"3"); //Corrected using type assertion, but less safe than type guard
// A function that takes two numbers, rounds them, and returns the sum of the rounded values
const calculateNumber = (a, b) => {
  // Round the first number 'a' to the nearest integer
  const aRound = Math.round(a);
  
  // Round the second number 'b' to the nearest integer
  const bRound = Math.round(b);

  // Return the sum of the rounded values
  return aRound + bRound;
};

// Export the 'calculateNumber' function for use in other modules
module.exports = calculateNumber;

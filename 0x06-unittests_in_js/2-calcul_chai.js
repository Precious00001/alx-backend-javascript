// This function performs mathematical operations based on the provided type.
// The operations include addition, subtraction, and division.
const calculateNumber = (type, a, b) => {
  // Round the input numbers to the nearest integer.
  const aRound = Math.round(a);
  const bRound = Math.round(b);

  // Check the operation type for different mathematical operations.
  if (type === 'SUBTRACT') {
    // If the type is 'SUBTRACT', return the result of subtraction.
    return aRound - bRound;
  }

  if (type === 'DIVIDE') {
    // If the type is 'DIVIDE', check for division by zero before performing the operation.
    if (bRound === 0) {
      // If division by zero is attempted, return an error message.
      return 'Error';
    }
    // Otherwise, return the result of division.
    return aRound / bRound;
  }

  // For any other type (or if no valid type is provided), perform addition.
  return aRound + bRound;
};

// Export the calculateNumber function for external use.
module.exports = calculateNumber;

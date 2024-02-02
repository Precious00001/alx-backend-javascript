// Utils object containing a calculateNumber
// method for basic arithmetic operations.
const Utils = {
  // Method to calculate the result based on the
	// provided type and input numbers.
  calculateNumber(type, a, b) {
    // Round the input numbers to the nearest integers.
    const aRound = Math.round(a);
    const bRound = Math.round(b);

    // Check the operation type for different
	  // mathematical operations.
    if (type === 'SUM') {
      // If the type is 'SUM',
	    // return the result of addition.
      return aRound + bRound;
    }

    if (type === 'SUBTRACT') {
      // If the type is 'SUBTRACT',
	    // return the result of subtraction.
      return aRound - bRound;
    }

    if (type === 'DIVIDE') {
      // If the type is 'DIVIDE', check for division
	    // by zero before performing the operation.
      return bRound === 0 ? 'Error' : aRound / bRound;
    }

    // If the type is not recognized, return 0.
    return 0;
  },
};

// Export the Utils object with the
// calculateNumber method for external use.
module.exports = Utils;

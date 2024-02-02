// Import the Utils module for using the calculateNumber method.
const Utils = require('./utils');

// Function to send a payment request to an API.
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  // Calculate the total result by using the
	// calculateNumber method from the Utils module.
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  // Log the calculated total result to the console.
  console.log(`The total is: ${result}`);
};

// Export the sendPaymentRequestToApi function for external use.
module.exports = sendPaymentRequestToApi;

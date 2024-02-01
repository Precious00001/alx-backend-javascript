const assert = require('assert');
const calculateNumber = require('./path-to-your-file/calculateNumber');

// Test cases
assert.strictEqual(calculateNumber(1.5, 2.7), 5);
assert.strictEqual(calculateNumber(2.3, 4.8), 7);
assert.strictEqual(calculateNumber(-3.4, 5.9), 3);
assert.strictEqual(calculateNumber(0, 0), 0);
assert.strictEqual(calculateNumber(0.1, 0.2), 0); // Rounded values are both 0

// Edge case: Decimal rounding
assert.strictEqual(calculateNumber(2.1, 3.4), 6);
assert.strictEqual(calculateNumber(2.6, 3.8), 7);
assert.strictEqual(calculateNumber(-2.4, 3.1), 1);

console.log('All tests passed successfully!');


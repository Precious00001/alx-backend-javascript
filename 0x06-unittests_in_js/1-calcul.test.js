const assert = require('assert').strict;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  // ... existing test cases ...

  describe('SUM large numbers', function () {
    it('should return 200000000', function () {
      assert.equal(calculateNumber('SUM', 100000000, 100000000), 200000000);
    });
  });

  describe('SUBTRACT negative result', function () {
    it('should return -2.5', function () {
      assert.equal(calculateNumber('SUBTRACT', 2.5, 5), -2.5);
    });
  });

  describe('DIVIDE decimal result', function () {
    it('should return 0.333333', function () {
      assert.equal(calculateNumber('DIVIDE', 1, 3), 0.333333);
    });
  });

  describe('DIVIDE decimal result with rounding', function () {
    it('should return 0.25', function () {
      assert.equal(calculateNumber('DIVIDE', 1, 4), 0.25);
    });
  });

  describe('DIVIDE Error: division by zero', function () {
    it('should return "Error"', function () {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Unknown operation', function () {
    it('should return "Error"', function () {
      assert.equal(calculateNumber('UNKNOWN_OPERATION', 2, 3), 'Error');
    });
  });
});

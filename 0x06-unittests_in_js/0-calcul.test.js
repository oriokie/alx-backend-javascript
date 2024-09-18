const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return a sum of rounder numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-1, -3), -4);
    assert.strictEqual(calculateNumber(-1, -3.7), -5);
  });

  it('should handle zero', () => {
    assert.strictEqual(calculateNumber(0, 3), 3);
    assert.strictEqual(calculateNumber(3, 0), 3);
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle invalid numbers', () => {
    assert.strictEqual(calculateNumber('a', 3), NaN);
    assert.strictEqual(calculateNumber(3, 'a'), NaN);
    assert.strictEqual(calculateNumber('a', 'b'), NaN);
  });

  it('should handle floats', () => {
    assert.strictEqual(calculateNumber(1.1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});

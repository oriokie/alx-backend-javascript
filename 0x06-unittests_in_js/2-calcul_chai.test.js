const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5), 6);
      expect(calculateNumber('SUM', 1.2, 3.7), 5);
      expect(calculateNumber('SUM', 1.5, 3.7), 6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the difference of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      expect(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
      expect(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      expect(calculateNumber('DIVIDE', 4, 2), 2);
      expect(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});

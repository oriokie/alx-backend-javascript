function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  if (Number.isNaN(roundedA) || Number.isNaN(roundedB)) {
    throw TypeError();
  }

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error';
      }
      return roundedA / roundedB;
    default:
      throw TypeError();
  }
}

module.exports = calculateNumber;

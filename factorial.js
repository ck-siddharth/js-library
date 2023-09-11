// factorial.js

function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}

// Export the calculateFactorial function for external use
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = calculateFactorial;
}

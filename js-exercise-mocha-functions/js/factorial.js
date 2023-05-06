module.exports = function factorial(number) {
    // Verify whether a number is equal or less than 1
    if (number <= 1) {
      return 1;
    }
  
    // Compute factorial recursively
    return number * factorial(number - 1);
  };
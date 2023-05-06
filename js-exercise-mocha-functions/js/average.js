module.exports = function calculateAverage(numbers) {
    // Compute the sum of all numbers
    const sum = numbers.reduce((total, number) => total + number, 0);
  
    //Compute the average
    const average = sum / numbers.length;
  
    return average;
  };
  
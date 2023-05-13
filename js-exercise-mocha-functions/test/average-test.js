var assert = require('assert');
var calculateAverage = require('../js/average.js');

describe('calculate average tests', function() {
    it('should return 3 for argument [1, 2, 3, 4, 5]', function() {
        assert.equal(3, calculateAverage([1, 2, 3, 4, 5]));
    });

    it('should return -3 for argument [-1, -2, -3, -4, -5]', function(){
        assert.equal(-3, calculateAverage([-1, -2, -3, -4, -5]));
    });

    it('should return 5 for argument [5]', function(){
        assert.equal(5, calculateAverage([5]));
    });

    it('should return 2.925 for argument [2.5, 3.7, 4.2, 1.3]', function(){
        assert.equal(2.925, calculateAverage([2.5, 3.7, 4.2, 1.3]));
    });

    it('should return 8 for argument [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]', function(){
        assert.equal(8, calculateAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
    });

    it('should return NaN if argument is an empty array', function(){
        assert.equal(NaN, calculateAverage([]));
    });

    it('should throw an exception if argument is missing', function(){
        var call = () => calculateAverage();
        assert.throws(call, Error, 'Invalid Argument!')
    });
});
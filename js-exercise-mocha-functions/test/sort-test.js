
var assert = require('assert');
var sortNumbers = require('../js/sort.js');

describe('sortNumbers', function() {

    it('should return [1, 2, 3, 5, 8] for argument [5, 2, 8, 1, 3] (ascending)', function() {
        assert.deepEqual([1, 2, 3, 5, 8], sortNumbers([5, 2, 8, 1, 3]));
    });

    it('should return [8, 5, 3, 2, 1] for argument ([5, 2, 8, 1, 3], false) (ascending)', function() {
        assert.deepEqual([1, 2, 3, 5, 8], sortNumbers([5, 2, 8, 1, 3], false));
    });
});

var assert = require('assert');
var factorial = require('../js/factorial.js');

describe('factorial tests :)', function() {
    it('should return 120 for argument 5', function() {
        assert.equal(120, factorial(5));
    });

    it('should return 1 for argument 0', function() {
        assert.equal(1, factorial(0));
    });

    it('should return 1 for argument 1', function() {
        assert.equal(1, factorial(1));
    });

    it('should return 1307674368000 for argument 15', function() {
        assert.equal(1307674368000, factorial(15));
    });

    it('should throw an Error for an negative argument', function() {
        var call = () => factorial(-5);
        assert.throws(call, Error, 'Invalid Argument!')
    });

    it('should throw an exception if argument is missing', function(){
      var call = () => factorial();
      assert.throws(call, Error, 'Invalid Argument!')
    });
});
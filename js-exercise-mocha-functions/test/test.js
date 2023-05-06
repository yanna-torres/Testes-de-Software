
var assert = require('assert');
var isPalindrome = require('../js/palindrome.js');

describe.skip('my first test weee', function(){
  it('should pass this canary test', function(){
    assert.equal(true, true);
  });

  it('should return true for argument mom', function(){
    assert.equal(isPalindrome('mom'), true);
  });

  it('should return true for argument dad', function(){
    assert.equal(isPalindrome('dad'), true);
  });

  it('should return false for argument dude', function(){
    assert.equal(isPalindrome('dude'), false);
  });

  it('should return true for argument mom mom');

  it('should return false for argument dad mom');

  it('should return false for an empty string', function(){
    assert.equal(isPalindrome(''), false);
  });

  it('should return false for empty string argument (just space)');

  it('should throw an exception if argument is missing', function(){
    var call = function() { isPalindrome(); };
    assert.throws(call, Error, 'Invalid Argument!')
  });
    
  
});

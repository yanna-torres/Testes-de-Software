
var assert = require('assert');
var isPalindrome = require('../js/palindrome.js');

describe('my first test weee', function(){
  it('should pass this canary test', function(){
    assert.equal(true, true);
  });
  
  it('should return true for argument mom', function(){
    assert.equal(isPalindrome('mom'), true);
  });

  it('should return true for argument dad', function() {
    assert.equal(isPalindrome('dad'), true);
  });

  it('should return false for argument dude', function() {
    assert.equal(isPalindrome('dude'), false);
  });

  it('should return true for argument mom mom', function() {
    assert.equal(isPalindrome('mom mom'), true);
  });

  it('should return false for argument dad mom', function() {
    assert.equal(isPalindrome('dad mom'), false);
  });

  it('should return false for an empty string', function() {
    assert.equal(isPalindrome(''), false);
  });

  it('should return false for empty string argument (just space)', function() {
    assert.equal(isPalindrome(' '), false);
  });

  it('should throw an exception if argument is missing', function(){
    // https://stackoverflow.com/questions/14966821/testing-for-errors-thrown-in-mocha
    assert.throws(isPalindrome, Error, 'Missing Argument');
  });
    
  
});

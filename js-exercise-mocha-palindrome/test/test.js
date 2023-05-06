
var assert = require('assert');
var isPalindrome = require('../js/palindrome.js');

describe('my first test weee', function(){
  it.only('should pass this canary test', function(){
    assert.equal(true, true);
  });
  
  it('should return true for argument mom', function(){
    assert.equal(isPalindrome('mom'), true);
  });

  it('should return true for argument dad');

  it('should return false for argument dude');

  it('should return true for argument mom mom');

  it('should return false for argument dad mom');

  it('should return false for an empty string');

  it('should return false for empty string argument (just space)');

  it('should throw an exception if argument is missing');
    
  
});

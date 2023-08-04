// Write your tests here!
const { expect } = require('chai');
const mocha = require('mocha');
const { caesar } = require('../src/caesar');

describe('Caesar cipher', function() {
  it('should return false if shift is not present, equal to 0, less than -25, or greater than 25', function() {
    expect(caesar('hello', undefined)).to.be.false;
    expect(caesar('hello', 0)).to.be.false;
    expect(caesar('hello', -26)).to.be.false;
    expect(caesar('hello', 26)).to.be.false;
  });

  it('should ignore capital letters', function() {
    expect(caesar('HELLO', 3)).to.equal('khoor');
  });
  
  it('should ignore lowercase letters', function() {
    expect(caesar('hello', 3)).to.equal('khoor');
  });

  it('should wrap around the alphabet if a letter is shifted off the end', function() {
    expect(caesar('z', 3)).to.equal('c');
    expect(caesar('a', -3)).to.equal('x');
  });

  it('should preserve spaces and other non-alphabetic characters', function() {
    expect(caesar('hello world!', 3)).to.equal('khoor zruog!');
  });
});



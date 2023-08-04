// Write your tests here!
const { expect } = require('chai');
const mocha = require('mocha');
const { polybius } = require('../src/polybius');

describe("polybius", () => {
 it('should encode a message by mapping letters to numbers', () => {
    const result = polybius('hello');
    expect(result).to.equal('3251131343');
  });
  
  it('should decode a message by mapping numbers to letters', () => {
    const result = polybius('3251131343', false);
    console.log(result)
    expect(result).to.equal('hello');
  });
  
  it('should return false if the input has an odd number of characters', () => {
    const result = polybius('224225131', false);
    expect(result).to.be.false;
  });
  
  it('should ignore capital letters', () => {
    const result = polybius('JIGGLE', true);
    expect(result).to.equal('424222221351');
  });
  
  it('should maintain spaces', () => {
    const result = polybius('jiggle   ', true); 
    console.log("jiggile", result)
    expect(result).to.equal('424222221351   ');
  });
  
  it('should encode I and J as 42', () => {
    const result = polybius('jiggle');
    expect(result).to.equal('424222221351');
  });
  
  it('should decode 42 as I and J', () => {
    const result = polybius('424222221351', false);
    expect(result).to.equal('(i/j)(i/j)ggle');
  });
 });
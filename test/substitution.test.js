// Write your tests here!
const { expect } = require('chai');
const mocha = require('mocha');
const { substitution } = require('../src/substitution');

describe("substitution", () => {
//   it("should return false if the alphabet parameter is not a string of exactly 26 characters", () => {
//      expect(substitution('hello', 'abc')).to.be.false
//   });

//   it("should return false if any characters in the alphabet parameter repeat", () => {
//      expect(substitution('hello', 'abccba')).to.be.false
//   });

  it("should encode a message correctly", () => {
    const result = substitution('hello', 'xoyqmcgrukswaflnthdjpzibev')
     expect(result).to.equal('rmwwl')
  });

  it("should decode a message correctly", () => {
    const result = substitution('hello', 'xoyqmcgrukswaflnthdjpzibev')
    expect(result).to.equal('rmwwl')
  });
  
  it("should ignore capital letters", () => {
    const result = substitution('HELLO', 'xoyqmcgrukswaflnthdjpzibev')
    expect(result).to.equal('rmwwl')
  });
});

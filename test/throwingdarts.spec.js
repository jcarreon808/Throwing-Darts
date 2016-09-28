const chai = require ('chai');
const expect = chai.expect;

const throwingDarts = require ('../throwingdarts');

describe('Dart function',()=>{
  it('should exist', ()=> {
    expect(throwingDarts).to.exist;
  });
  it('should be a function', ()=>{
    expect(throwingDarts).to.be.a('function');
  });
  it('should return a score',()=>{
    expect(throwingDarts([1,5,11])).to.equal(15);
  });
});
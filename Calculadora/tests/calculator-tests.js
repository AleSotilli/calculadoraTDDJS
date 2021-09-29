const chai = require('chai');
const expect = chai.expect;
const Calculator = require('../src/calculator.js')

describe('The Calculator', () => {
  
    before(() => {
        calculator = new Calculator
    });

    it('Should sum two positive integers', () => {
      expect(calculator.sum(2, 3)).to.equal(5);
    });
    it('deve somar 49 com 50 e retornar 99', () => {
      expect(calculator.sum(49, 50)).to.equal(99);
    });
  
});

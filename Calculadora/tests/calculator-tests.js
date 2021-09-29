const chai = require('chai');
const expect = chai.expect;
const Calculator = require('../src/calculator.js')

describe('The Calculator', () => {
  
    before(() => {
        calculator = new Calculator
    });

    
    it('deve multiplicar 10 com 5 e retornar 50', () => {
      expect(calculator.multiply(10, 5)).to.equal(50);
    });
  
    it('deve multiplicar 5 com 5 e retornar 25', () => {
      expect(calculator.multiply(5, 5)).to.equal(25);
    });

    
});

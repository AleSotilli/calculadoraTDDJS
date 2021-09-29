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


describe("A calculadora de menos do Ale", () =>{

    before(() => {
      calculator = new Calculator
    });

    it ("Deve fazer uma conta de menos com dois numeros inteiros e ser diferente de 8", () =>{
      expect(calculator.less(5, 12)).to.equal(-7);
      expect(calculator.less(5, 13)).to.not.equal(8);
    });

    it ("Deve fazer uma conta com dois negativos e ser maior que 2 ", () => {
      expect(calculator.less(-2, -5)).to.equal(+3);
      expect(calculator.less(2, -5)).is.at.least(2);
    })

})
const chai = require('chai');
const expect = chai.expect;
const Calculator = require('../src/calculator.js')
const a = 21
const b = 7

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
    //---------------------divisão
    it('deve dividir 10 por 5, retornando 2', () => { 
      expect(calculator.divide(10, 5)).to.equal(2);
    });
    it('deve dividir dois numeros negativos', () => { 
      expect(calculator.divide(-6, -3)).to.equal(2);
    });
    it('deve dividir 20 por 3 e não ser 36', () => { 
      expect(calculator.divide(20,3)).to.not.equal(36);
    });
    it('deve dividir 100 por 20 e ser maior que 4', () => {
      expect(calculator.divide(100, 20)).is.at.least(4);
    });
    it('deve dividir 2 constantes', () => {
      expect(calculator.divide(a, b)).to.be.an('number');
    });
});

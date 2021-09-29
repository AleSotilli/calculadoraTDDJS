const chai = require('chai');
const expect = chai.expect;
const Calculator = require('../src/calculator.js')
const a = 21
const b = 7

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

    
=======
    //---------------------divisão
    const a = 21
    const b = 7
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
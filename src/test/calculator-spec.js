import Calculator from '../app/calculator.js';

describe('ES6 Foo', function () {

  let calculator;

  beforeEach(()=>{
    calculator = new Calculator();
  });

  it('should subtract two numbers', () => {
    let sum = calculator.subtract(4,1);
    expect(sum).toEqual(3);
  });

  it('should add two numbers', () => {
    let sum = calculator.add(1,4);
    expect(sum).toBe(5);
  });
});

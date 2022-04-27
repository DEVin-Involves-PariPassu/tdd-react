import { multiply } from '../util/operations';

describe('Multiply function', () => {
  it('should return 4 when passed 2 and 2', () => {
    // O que eu quero testar -> multiply 
    // O que eu quero validar 
    // Entrada -> 5 e 2 
    // Resultado esperado -> 10 
    const result = multiply(5,2); 

    expect(result).toEqual(10); 
  })

  it('should return 0 when passed 1 and 0', () => { 
    // O que eu quero testar -> multiply 
    // O que eu quero validar -> 5 * 2 = 10 
    const result = multiply(1,0);

    expect(result).toEqual(0);
  })

  it('should throw an Error when pass a invalid number', () => {
    expect(() => multiply('as', 'd')).toThrow('parameters is not a number');
  })
})
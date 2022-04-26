import { multiply } from '../util/operations';

describe('Multiply function', () => {
  it('should return 4 when passed 2 and 2', () => {
    const result = multiply(2,2);
    expect(result).toEqual(4);
  })

  it('should throw an Error when pass a invalid number', () => {
    expect(() => multiply('as', 'd')).toThrow('parameters is not a number');
  })
})
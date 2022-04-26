export function multiply(num1, num2) {
  if(isNaN(num1) || isNaN(num2)) throw new Error('parameters is not a number')
  return num1 * num2;
}
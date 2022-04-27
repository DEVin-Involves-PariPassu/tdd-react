export function multiply(num1, num2) {
  if(isNaN(num1) || isNaN(num2)) throw new Error('parameters is not a number')
  
  // let result = 0;
  // for(let i = 0; i < num2; i++) {
  //   result = num1 + result;
  // }
  
  // return result;
  return num1 * num2;
}
/**
 * Filtrar os itens de um array por um texto
 * 
 * Array de entrada = ["maça", "laranja", "limão"]
 * 
 * Parametro de filtro de entrada = ra
 * 
 */

export function filterByTerm(inputArray, searchTerm, index = 'name') {
  if(!searchTerm) throw Error("searchTerm cannot be empty");
  if(!inputArray.length) throw Error("inputArray cannot be empty");

  const regex = new RegExp(searchTerm, 'i')

  return inputArray.filter(element => 
    element[index].match(regex));
}
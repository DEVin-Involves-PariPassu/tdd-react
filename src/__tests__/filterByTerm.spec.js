import { filterByTerm } from '../util/filterByTerm';

//filterByTerm.spec.js ou filterByTerm.test.js ou filterByTerm.js
describe('Filter function', () => {
  test('it should filter by a search term', () => {
    const inputArray = [
      { id: 1, name: "Maça"},
      { id: 2, name: "Laranja"},
      { id: 3, name: "Limão"},
      { id: 4, name: "Melão"},
    ]

    const output = [{ id: 2, name: "Laranja"}]

    expect(filterByTerm(inputArray, "ra")).toEqual(output);

    expect(filterByTerm(inputArray, "RA")).toEqual(output);

  })

  test('it should filter by a search term with another array', () => {
    const inputArray = [
      { id: 1, url: 'http://www.devinhouse.tech'},
      { id: 2, url: 'http://www.senai.com'},
    ]

    const output = [{id: 2, url: 'http://www.senai.com'}];

    expect(filterByTerm(inputArray, "senai", 'url')).toEqual(output);
  })

  it('should throw an error with empty array', () => {
    expect(() => filterByTerm([], "test", 'url')).toThrowError("inputArray cannot be empty");
  })

  it('should throw an error with empty searchTerm', () => {
    expect(() => filterByTerm(["1", "2"], "", 'url')).toThrowError("searchTerm cannot be empty");
  })

})




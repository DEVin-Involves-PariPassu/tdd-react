import { lookup } from '../util/lookup';

describe('lookup function', () => {
  it("lookup(<login>, 'likes') should return likes for the specified user.", () => {
    const result = lookup('camila', 'likes');
    const expected = ['React', 'Javascript'];

    expect(result).toEqual(expected);
  })

  it("lookup(<login>, 'lastName') should return the last name for the specified user.", () => {
    const result = lookup('danilo.sales', 'lastName');
    const expected = 'Sales';

    expect(result).toEqual(expected);
  })

  it('with unknown user should throw an error with the correct message', () => {
    expect(() => lookup('nobody', 'likes')).toThrow(/Could not find user/)
  })

  it('with unknown property should throw an error with the correct message', () => {
    expect(() => lookup('danilo.sales', 'noprop')).toThrow(/Could not find property/)
  })
})
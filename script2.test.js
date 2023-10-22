const swapi = require('./script2');


test('calls swapi to get people', () => {
    //expect.assertions(number) verifies that a
    // certain number of assertions are called during a
    // test. This is often useful when testing asynchronous
    //code, in order to make sure that assertions in a
    //callback actually got called.
    expect.assertions(1)
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87);
    })
})

test('calls swapi to get people with promise', () => {
    expect.assertions(2)
    return swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    })
})  

test('getPeople returns count and results', () => {
    mockFetch = jest.fn().mockReturnValue(Promise.resolve({
      json: () => Promise.resolve({
          count: 87,
          results: [0,1,2,3,4,5]
      })
    }))
  
    expect.assertions(4)
    return swapi.getPeoplePromise(mockFetch).then(data => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith('http://swapi.py4e.com/api/people');
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    })
    // done() 
})
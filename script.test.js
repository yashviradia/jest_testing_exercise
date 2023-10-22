const googleSearch = require('./script');

dbMock = [
  'cheesepuff.com',
  'disney.com',
] 

test('silly test', () => {
  expect('hello').toBe('hello');
});

test('hi test', () => {
    expect('hi').toBe('hi');
})

test('is running', () => {
  expect(googleSearch('dog', dbMock)).toExist;
});

// test('is is working', () => {
//   expect(googleSearch('dog', dbMock)).toEqual(['dogs.com', 'dogpictures.com', 'myfavoritedogprictures.com'])
// });

test('works with undefined and null input', () => {
  expect(googleSearch(undefined, dbMock)).toEqual([])
  expect(googleSearch(null, dbMock)).toEqual([])
});


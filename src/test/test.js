const array = require('../js/app');

test('filter test', () => {
  expect(array.newArray).toEqual([
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]);
});

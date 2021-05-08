const simpleSorter = require('../index');

test('should return array that was passed in', () => {
  const initialArray = [{ name: 'sam' }, { name: 'floyd' }];
  const sortedArray = simpleSorter(initialArray, 'name');
  expect(sortedArray).toBe(initialArray);
});

test('should sort by top level attribute with strings', () => {
  const initialArray = [{ name: 'sam' }, { name: 'floyd' }, { name: 'robert' }];
  const sortedArray = simpleSorter(initialArray, 'name');
  expect(sortedArray[0].name).toBe('floyd');
  expect(sortedArray[1].name).toBe('robert');
  expect(sortedArray[2].name).toBe('sam');
});

test('should sort by top level attribute with numbers', () => {
  const initialArray = [
    { name: 'sam', age: 32 },
    { name: 'floyd', age: 17 },
    { name: 'robert', age: 63 },
  ];
  const sortedArray = simpleSorter(initialArray, 'age');
  expect(sortedArray[0].name).toBe('floyd');
  expect(sortedArray[1].name).toBe('sam');
  expect(sortedArray[2].name).toBe('robert');
});

xtest('should sort descending with numbers', () => {
  const initialArray = [
    { name: 'sam', age: 32 },
    { name: 'floyd', age: 17 },
    { name: 'robert', age: 63 },
  ];
  const sortedArray = simpleSorter(initialArray, 'age', { descending: true });
  expect(sortedArray[0].name).toBe('robert');
  expect(sortedArray[1].name).toBe('sam');
  expect(sortedArray[2].name).toBe('floyd');
});

test('should sort nested objects', () => {
  const initialArray = [
    { info: { name: 'sam', age: 32 } },
    { info: { name: 'floyd', age: 17 } },
    { info: { name: 'robert', age: 63 } },
  ];
  const sortedArray = simpleSorter(initialArray, 'info.age', {
    descending: true,
  });
  expect(sortedArray[0].info.name).toBe('floyd');
  expect(sortedArray[1].info.name).toBe('sam');
  expect(sortedArray[2].info.name).toBe('robert');
});

const createCompare = require('../index');

test('should return a function', () => {
  const initialArray = [{ name: 'sam' }, { name: 'floyd' }];
  const compareFn = createCompare('name');
  expect(typeof compareFn).toBe('function');
});

xtest('should sort array of string primitives', () => {
  const initialArray = ['sam', 'floyd', 'robert'];
});

xtest('should sort array of number primitives', () => {
  const initialArray = [23, 1, 7];
});

test('should sort by top level attribute with strings', () => {
  const initialArray = [{ name: 'sam' }, { name: 'floyd' }, { name: 'robert' }];
  const compareFn = createCompare('name');
  const sortedArray = [...initialArray.sort(compareFn)];
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
  const compareFn = createCompare('age');
  const sortedArray = [...initialArray.sort(compareFn)];
  expect(sortedArray[0].name).toBe('floyd');
  expect(sortedArray[1].name).toBe('sam');
  expect(sortedArray[2].name).toBe('robert');
});

test('should sort nested objects', () => {
  const initialArray = [
    { info: { name: 'sam', age: 32 } },
    { info: { name: 'floyd', age: 17 } },
    { info: { name: 'robert', age: 63 } },
  ];
  const compareFn = createCompare('info.age');
  const sortedArray = [...initialArray.sort(compareFn)];
  expect(sortedArray[0].info.name).toBe('floyd');
  expect(sortedArray[1].info.name).toBe('sam');
  expect(sortedArray[2].info.name).toBe('robert');
});

xtest('should sort descending with numbers', () => {
  const initialArray = [
    { name: 'sam', age: 32 },
    { name: 'floyd', age: 17 },
    { name: 'robert', age: 63 },
  ];
  const sortedArray = createCompare('age', { descending: true });
  expect(sortedArray[0].name).toBe('robert');
  expect(sortedArray[1].name).toBe('sam');
  expect(sortedArray[2].name).toBe('floyd');
});

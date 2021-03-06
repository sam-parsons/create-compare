# create-compare

Simple compare function generator for use with `Array.prototype.sort`. Provide the property name (or nested property path) to easily sort objects in an array.

## Install

```
npm install create-compare
```

## API

```js
const generatedCompareFunction = compareFunc(property);
```

### <i>Argument</i>

> <b>property</b> | `string` | _required_

For top-level properties, simply provide a string of the property you want to sort values on. For nested properties, use a string in the format `"prop.prop.prop"`.

### <i>Return value</i>

> <b>generatedCompareFunction</b> | `function(a: object, b: object)`

Use this callback as an argument to `Array.prototype.sort`.

## Usage

<i>Top-level property</i>

```js
const createCompare = require('create-compare');

const unsortedArray = [
  { name: 'Robert' },
  { name: 'Paul' },
  { name: 'Champagne' },
];

const sortedNames = unsortedArray
  .sort(createCompare('name')) // [{ name: 'Champagne' }, { name: 'Paul' }, { name: 'Robert' }]
  .map((person) => person.name); // sortedNames = ["Champagne","Paul","Robert"]
```

<i>Nested Properties</i>

```js
const createCompare = require('create-compare');

const unsortedArray = [
  {
    data: {
      user: {
        name: 'Champagne',
        age: 69,
      },
    },
  },
  {
    data: {
      user: {
        name: 'Robert',
        age: 18,
      },
    },
  },
  {
    data: {
      user: {
        name: 'Paul',
        age: 42,
      },
    },
  },
];

const sortedNames = unsortedArray
  .sort(createCompare('data.user.age'))
  .map((person) => person.name); // sortedNames = ["Robert","Paul","Champagne"]
```

## License

MIT

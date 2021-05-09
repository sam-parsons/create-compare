# create-compare

Simple compare function generator for use with `Array.prototype.sort`. Provide the property name (or nested property path) to easily sort objects in an array.

## Install

```
npm install create-compare
```

## API

### "property"

> `string` | _required_

For top-level properties, simply provide a string of the property you want to sort values on. For nested properties, use a string in the format `"prop.prop.prop"`.

## Usage

<i>Top-level property</i>

```js
const createCompare = require('create-compare');

const unsortedArray = [
  { name: 'Robert' },
  { name: 'Paul' },
  { name: 'Champange' },
];

const sortedNames = unsortedArray
  .sort(createCompare('name'))
  .map((person) => person.name);
// sortedNames = ["Champange","Paul","Robert"]
```

<i>Nested Properties</i>

```js
const createCompare = require('create-compare');

const unsortedArray = [
  {
    data: {
      user: {
        name: 'Champange',
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
  .map((person) => person.name);
// sortedNames = ["Robert","Paul","Champagne"]
```

## License

MIT

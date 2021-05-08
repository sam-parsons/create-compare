function createStringCompareFunc(property) {
  return function stringCompareFunc(a, b) {
    if (a[property] < b[property]) return -1;
    if (a[property] > b[property]) return 1;
    return 0;
  };
}

function createNumberCompareFunc(property) {
  return function numberCompareFunc(a, b) {
    return a[property] - b[property];
  };
}

module.exports = function (array, property, opts) {
  let compareFunc;

  switch (typeof array[0][property]) {
    case 'string':
      compareFunc = createStringCompareFunc(property);
      break;
    case 'number':
      compareFunc = createNumberCompareFunc(property);
      break;
  }

  return array.sort(compareFunc);
};

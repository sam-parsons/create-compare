function createStringCompareFunc(property, propertyArr) {
  return function stringCompareFunc(a, b) {
    if (a[property] < b[property]) return -1;
    if (a[property] > b[property]) return 1;
    return 0;
  };
}

function createNumberCompareFunc(property, propertyArr) {
  return function numberCompareFunc(a, b) {
    const aObj = findLocalObject(a, propertyArr);
    const bObj = findLocalObject(b, propertyArr);
    return (
      aObj[propertyArr[propertyArr.length - 1]] -
      bObj[propertyArr[propertyArr.length - 1]]
    );
  };
}

function findLocalObject(object, propertyArr) {
  const newPropertyArr = Object.assign([], propertyArr);
  if (newPropertyArr.length === 1 && object.hasOwnProperty(newPropertyArr[0])) {
    return object;
  }
  if (newPropertyArr.length === 0) return;
  const nextProperty = newPropertyArr.shift();
  return findLocalObject(object[nextProperty], newPropertyArr);
}

function findPropertyDataType(object, propertyArr) {
  const newPropertyArr = Object.assign([], propertyArr);
  if (newPropertyArr.length === 1 && object.hasOwnProperty(newPropertyArr[0])) {
    return typeof object[newPropertyArr[0]];
  }
  if (newPropertyArr.length === 0) return;
  const nextProperty = newPropertyArr.shift();
  return findPropertyDataType(object[nextProperty], newPropertyArr);
}

module.exports = function (array, property, opts) {
  let compareFunc;

  // split the property on "."
  const propertyArray = property.split('.');

  const propertyType = findPropertyDataType(array[0], propertyArray);

  switch (propertyType) {
    case 'string':
      compareFunc = createStringCompareFunc(property, propertyArray);
      break;
    case 'number':
      compareFunc = createNumberCompareFunc(property, propertyArray);
      break;
  }

  array.sort(compareFunc);

  return array;
};

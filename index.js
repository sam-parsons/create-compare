function createCompareFunc(propertyArr) {
  return function (a, b) {
    const aObj = findLocalObject(a, propertyArr);
    const bObj = findLocalObject(b, propertyArr);
    const property = propertyArr[propertyArr.length - 1];
    if (aObj[property] < bObj[property]) return -1;
    if (aObj[property] > bObj[property]) return 1;
    return 0;
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

module.exports = function (property) {
  // split the properties on "."
  // turns "info.age" -> ["info", "age"]
  const propertyArray = property.split('.');

  return createCompareFunc(propertyArray);
};

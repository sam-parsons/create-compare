module.exports = function (array, property, opts) {
  return array.sort(function (a, b) {
    return a[property] - b[property];
  });
};

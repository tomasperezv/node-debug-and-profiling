var randomData = require('./random-data');

/**
 * @method swap
 * @param {Array} a
 * @param {Number} i
 * @param {Number} j
 * @public
 */
var swap = function(a, i, j) {
  var tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
};

/**
 * @method partition
 * @param {Array} a
 * @param {Number} left
 * @param {Number} right
 * @param {Number} pivotPos
 * @return {Number}
 * @public
 */
var partition = function(a, left, right, pivotPos) {
  var pivotValue = a[pivotPos];
  var limit = left;

  swap(a, pivotPos, right);

  for (var i = left; i < right; i++) {
    if (a[i] < pivotValue) {
      swap(a, i, limit);
      limit++;
    }
  }

  swap(a, right, limit);
  return limit;
};

/**
 * @method quicksort
 * @param {Array} a
 * @param {Number} left
 * @param {Number} right
 * @public
 */
var quicksort = function(a, left, right) {

  if (left >= right) {
    return;
  }

  if (typeof left === 'undefined') {
    left = 0;
  }

  if (typeof right === 'undefined') {
    right = a.length - 1;
  }

  var pivotPos = Math.floor((left + right)/2) + 1;
  pivotPos = partition(a, left, right, pivotPos);

  quicksort(a, left, pivotPos-1);
  quicksort(a, pivotPos + 1, right);
};

quicksort(randomData);
console.log(randomData);

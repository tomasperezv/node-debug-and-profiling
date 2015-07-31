var randomData = require('./random-data');

/**
 * @method merge
 * @param {Array} v1
 * @param {Array} v2
 * @return {Array}
 * @public
 */
var merge = function(v1, v2) {
  var result = [];

  while (v1.length > 0 || v2.length > 0) {
    if (v1.length > 0 && v2.length > 0) {
      if (v1[0] <= v2[0]) {
        result.push(v1.shift());
      } else {
        result.push(v2.shift());
      }
    } else {
      if (v1.length > 0) {
        result.push(v1.shift());
      } else {
        result.push(v2.shift());
      }
    }
  }

  return result;
};

/**
* @method mergesort
* @param {Array} a
* @return {Arra}
* @public
*/
var mergesort = function(a) {

  if (a.length <= 1) {
    return a;
  }

  var m = Math.floor(a.length/2);
  var v1 = a.slice(0, m);
  var v2 = a.slice(m);
  v1 = mergesort(v1);
  v2 = mergesort(v2);
  return merge(v1, v2);
};

var result = mergesort(randomData);
console.log(result);

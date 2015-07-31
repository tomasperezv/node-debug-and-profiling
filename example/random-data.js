// Generates a random data array to be used by the sorting examples.
var data = [];
for (var i = 0; i < 10000; i++) {
  data.push(Math.floor((Math.random() * 1000) + 1));
}

module.exports = data;

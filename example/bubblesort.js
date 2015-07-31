var randomData = require('./random-data');

// O(n^2)
for (var i = 0; i < randomData.length; i++) {
  for (var j = i+1; j < randomData.length; j++) {
    if (randomData[i] > randomData[j] ) {
      var tmp = randomData[j];
      randomData[j] = randomData[i];
      randomData[i] = tmp;
    }
  }
}

console.log(randomData);

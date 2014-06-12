// Prefill the example array with 1000000 elements
var data = [];
for (var i = 0; i < 10000; i++) {
  data.push(Math.floor((Math.random() * 1000) + 1));
}

// O(n^2)
for (var i = 0; i < data.length; i++) {
  for (var j = i+1; j < data.length; j++) {
    if (data[i] > data[j] ) {
      var tmp = data[j];
      data[j] = data[i];
      data[i] = tmp;
    }
  }
}

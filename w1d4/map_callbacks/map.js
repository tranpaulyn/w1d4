var words = ["ground", "control", "to", "major", "tom"];

function greatestMap(list, cb) {
    var results = [];
    for (var i = 0; i < list.length; i++) {
        var result = cb(list[i], i, list);
        results.push(result);
    }
    return results;
}

var results = greatestMap(words, function callback1(num) {
    return 
});

let a = greatestMap(words, function(word) {
  return word.length;
});

let b = greatestMap(words, function(word) {
  return word.toUpperCase();
});

let c = greatestMap(words, function(word) {
  return word.split('').reverse().join('');
});



console.log(a);
console.log(b);
console.log(c);
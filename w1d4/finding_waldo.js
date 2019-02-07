// The second argument/parameter is expected to be a function
// var holder = ""
var index = ""
// found is the cb
function findWaldo(arr, found) {
    // for (var i = 0; i < arr.length; i++) {
    //   if (arr[i] === "Waldo") {
    //     holder = i;
    //     found();   // execute callback
    //   }
    // }
    var list = arr
    list.forEach(function(x) {
        if (x === "Waldo") {
            index = list.findIndex(waldo => waldo === "Waldo");
            found ();
        }
    });
  }  

function actionWhenFound() {
   console.log("Found Waldo in index " + index + "!");
}
  
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



// var list = [1, 2, 3, 4, 5];

// list.forEach(function(x) {
//     console.log(x);
// });


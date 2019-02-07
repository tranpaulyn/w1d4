// The second argument/parameter is expected to be a function
var holder = ""

function findWaldo(arr, found) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "Waldo") {
        holder = i + 1;
        found();   // execute callback
      }
    }
  }
  
  function actionWhenFound() {
    console.log("Found Waldo in index " + holder + "!");
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
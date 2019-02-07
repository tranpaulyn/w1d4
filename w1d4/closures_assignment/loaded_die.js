// rolls a die, returns a random number between 1 and 6
    // var rollDie = function () {
    //     return Math.floor(1 + Math.random() * 6);
    //   }
    
    //   console.log(rollDie());  // 1 (for example)

// Create a cheat die that predicts the next number
// create function named makeLoadedDie()
// this function (makeLoadedDie) returns another function

function makeLoadedDie() {
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    /* your code here */
    var empt = 0
    
    return function() {
      /* your code here */
      currentVal = list[empt]
      empt += 1;
      if(currentVal === undefined) {
          console.log("I'm not cheating!");
      } return currentVal
    }
  }
  
  var rollLoadedDie = makeLoadedDie();
  
  console.log(rollLoadedDie());  // 5
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie());  // 6

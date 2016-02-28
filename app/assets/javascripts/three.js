var box1 = 0;
var box2 = 0;
var box3 = 0;


function clickBox(boxNumber) {
  
  if(boxNumber === 1) {
    box1 ++;
    // console.log(box1)
  } else if(boxNumber === 2) {
    box2 ++;
    // console.log(box2);
  } else if(boxNumber === 3) {
    box3 ++;
    // console.log(box3);
  }

  if(box1 >= 1 && box2 >= 1 && box3 >= 1) {
    alert("You win!");
  }
}

// var boxNumbersClicked = [];

// function clickBox(num){
//   if (boxNumbersClicked.indexOf(num) === -1){
//   boxNumbersClicked.push(num);
//   }
//   checkIfWinner();
// }

// function checkIfWinner(){
//   if (boxNumbersClicked.length !== 3) {
//     alert("You win!");
//   }
// }
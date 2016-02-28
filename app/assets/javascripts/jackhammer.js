var click = 1;

function jackhammer() {
  
  if (click === 5) {
    alert("You win!");
  } else {
    click ++;
    console.log(click);
  }

}

var colors = ["red", "green", "orange", "pink"] 
function changeColor(box) {
  console.log(box);
  // .style["CSS-ATTRIBUTE"] can change the styling of the element
  box.style["background-color"] = colors.shift();
}


// fution jackhamer () {
//   numberOfClicks++;
//   if(numberOfClicks === 5){
//     win();
//   }
// }

// function win(){
//   alert("You win!!");
// }
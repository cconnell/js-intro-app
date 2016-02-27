// // Exercise #1:

// Do the NASA countdown through the console. That is, the console should say:

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// BLASTOFF!

// Hint: Use a for loop!

// var count = 10;

// for(count = 10; count > 0; count --){
//   console.log(count);
// }

// console.log("BLASTOFF!");

// // Exercise #2:

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];

// Write some code that prints all the numbers in the 'numbers' array to the console.

// Hint: Use a for loop!

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// var i = 0;
// for(i = 0; i < numbers.length; i++ ){
//   console.log(numbers[i]);
// }



// // Exercise #3:

// Write code that finds the average of all the numbers in the 'numbers' array.
// Hint: Use a for loop!

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// var sum = 0;

// for(var i = 0; i < numbers.length; i++ ){
//   sum += numbers[i];
// }

// console.log(sum/numbers.length);

// // Exercise #4:

// Implement FizzBuzz in JavaScript. Write a program that prints the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

// Hint: See other hints!

// for(var i = 1; i <= 100; i++){
//   if(i % 3 == 0 && i % 5 == 0) {
//   console.log("FizzBuzz");
//   } else if(i % 5 == 0){
//     console.log("Buzz");
//   } else if(i % 3 == 0){
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

// // Exercise #5:

// Recreate the guess a number game between 1 and 100. That is, the computer chooses a random number between 1 and 100, and tells the user to pick higher or lower. The user has 10 tries. Use the prompt function to help you with this. (NOTE: prompt will return a string, and you may need to "cast" it into a number.)
// For example:


// var answer = Math.floor((Math.random() * 100) + 1);
// var attempt = 0;

// while(attempt < 10 && guess != answer){
//   var guess = prompt("Guess a number");
//     if(guess == answer){
//     alert("Boom!")
//     } else {
//       if(guess < answer){
//         alert("Higher!")
//       } else {
//         alert("Lower!")
//       }
//       }
//   } attempt++;


// // Exercise #6:

// Create a function that accepts two numbers as parameters and returns their sum.

// var a = 4;
// var b = 6;
// function sum(a,b) {
//   return (a + b);
// }

// console.log(sum(a,b));

// // Exercise #7:

// Create a function that accepts an array as an argument and returns the average. (Basically the same as Exercise #3, but wrap that code in a function and demonstrate its usage.)


// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// var sum = 0;

// var average = function (array){
//   for(var i = 0; i < array.length; i++ ){
//   sum += numbers[i];
//   return sum;
// }

// average(numbers);



// // Exercise #8:

// Create an object that represents a particular book, having attributes of title, author, isbn, pages, and year of publication.

// var book = {

//   title: "Dictionary",
//   author: "Webster",
//   isbn: 00000000000000000002,
//   pages: 1000,
//   published: 1,
//   }

// console.log(book);

// // Exercise #9:

// Add a function to the above book object that console.logs out all the above information 

// var book = {

//   title: "Dictionary",
//   author: "Webster",
//   isbn: 00000000000000000002,
//   pages: 1000,
//   published: 1,
//   printDetails: function () {
//     return this.title + " is written by " + this.author + " and was published in the year " + this.published + ". It has " + this.pages + " and an ISBN of " + this.isbn + ".";
//     }
//   }



// console.log(book.printDetails);

// // Extra exercises can be found here: http://www.ling.gu.se/~lager/teaching/dialogue_systems%20II/labs/javascript.html 
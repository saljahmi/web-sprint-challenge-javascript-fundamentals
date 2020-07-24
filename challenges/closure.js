// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// nestedFunction is a closure, so it can access variables within the scope of the function that contains it. This includes the variable internal. 

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. 
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

// function summation(num){
//   let sum = 0;
//   function counter(num){
//     for(i=1; i <= num; i++){
//       sum += i;
//     }
//     return sum;
//   }
//   return counter(num);
// }

function summation(num){
  let counter = 0;
  for(i=1; i <= num; i++){
    counter += i;
  }
  return counter;
}

console.log(summation(4));

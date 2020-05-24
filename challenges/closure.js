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

nestedFunction can access the variable internal because of closure and block scope:
The child/inner function called "nestedFunction" has access to variables from a higher level scope even after the variable has been called.
nestedFunction has access to the variable "internal" because it is being passed down to the nestedFunction.
The variable "internal" is declared with const which has block scope, so it is bound to the block in which it is declared, not to the function in which it is declared.


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. 
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */


function summation(num) {
  if (num === 0 || num === 1)
    return 1;
  for (let i = num - 1; i >= 1; i--) {
    num += i;
  }
  return num;
};

console.log(summation(4));

// AND there's also this way to do it as well!....

function summation2(x) { 
if (x === 0) {
return 0;
 }
 return x + summation2(x-1);        
}
console.log(summation2(4));



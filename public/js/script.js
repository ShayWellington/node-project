console.log('nodejs');

let x=2;
const y=10; // cannot change the value when a variable is declared const because its constant
// y=25;
console.log(y);

// let has block scope - it is known only inside the structure where it is declared
for (var i = 0; i < 5; i++) {
  console.log(i);
}

// console.log(i); i not available here
// var p,q; -- global scope outside of the function


// es5
// total(5,8); //first define
//
// function total(p,q){
//   console.log(p+q); //local scope only available inside the function
// }

//es6
let total=(p,q) => console.log(p+q); //local scope only available inside the function


total(2,3); // can be called only after defining the function

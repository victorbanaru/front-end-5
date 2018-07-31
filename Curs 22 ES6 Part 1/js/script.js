// test function is hoisted so we can call it
// before it's defined in the code

test();

// global scope
// `str` is not declared, nor defined
// it will throw a reference error
// console.log("str in global scope", str); // reference error

function test() {
  // considering Hoisting principle - it is like `var str;` here
  // although `str` is not declared or defined yet it is
  // hoisted from the fisrt line in for loop
  console.log("str in local scope", str); // undefined
  
  for (var i = 1; i < 10; i++) {
    var str = "Something " + i;
    console.log(str);
  }
}

// myFunction();
var myFunction = function myFunction() {
  console.log("My Function");
}

// under the hood
// only the declaration is moved at the top of the scope
// not the assignment
// var myFunction;
// myFunction();
myFunction = function() {
  console.log("My Function");
}

const myNumber = 2;
// myNumber = 7; // error: assignment to a constant variable

const user = {
  name: "John",
  age: 35
};

// user = {
//   name: "Marry",
//   age: 35
// }; // error: assignment to a constant variable

user.name = "Marry";
console.log ("user", user);




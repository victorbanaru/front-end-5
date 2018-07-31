function myFirstFunction() {
	console.log('My first JS function');
}

// Call function
myFirstFunction();

function myFirstFunctionReturn() {
	return "My first JS function return";
}

var message = myFirstFunctionReturn();
document.write(message);
document.writeln('<strong>' + message + '</strong>');


function displayStars() {
  var line = "";
  for (i = 0; i < 4; i++) {
    line += "*";
    console.log(line);
  }
}

displayStars();
displayStars();
// Functions with params
function displayStars1(nr) {
  var line = "";
  for (i = 0; i < nr; i++) {
    line += "*";
    console.log(line);
  }
}

displayStars1(4);
displayStars1(2);
displayStars1(9);

// Function with default value for param
function displayStars2(nr = 4, char = '*') {
  var line = "";
  for (i = 0; i < nr; i++) {
    line += char;
    console.log(line);
  }
}

displayStars2();
displayStars2();
displayStars2(2);
displayStars2(4, '-');

// Pentru variabile primitive suprascrierea valorii in interioul functiei nu suprascrie valoarea ei initiala/de referinta
var fname = "Ana";
var lname = "Pop";
function displayName(fname, lname) {
  console.log(fname + " " + lname);
  fname = "Ion";
  console.log("Inside function fname", fname); // Ion
}
displayName(fname, lname);
console.log("Outside function fname", fname); // Ana

function displayNameObject(person) {
  console.log(person.fname + " " + person.lname);
  person.fname = "Ion";
  console.log("Inside function fname", person.fname); // Ion
}
var person = {fname: "Ana", lname: "Pop"};
displayNameObject(person);
console.log("Outside function fname", person.fname); // Ana


// Statement function
function statementFunction () {
  console.log("Statement function");
}
statementFunction();

// Exrpesion function
var expFunction = function () {
  console.log("Expresion function");
}
expFunction();

// Immediately Invoked Function Expression
(function () {
  console.log("Immediately Invoked Function - This is self-invoked");
})();

// Function with function as parameter
function testFunction() {
  alert("Exec from another function");
}
function execOtherFunction(testFunction) {
  testFunction();  
}
execOtherFunction(testFunction);

// Variables scope
var a = 1;    // Global
b = 2;        // Global
window.c = 3; // Global

function displayVariable() {
  var d = 4;  // Local
  e = 5;      // Global (fara declaratia var devine globala)
  console.log("Inside Variable d = ", d);
  console.log("Inside Variable e = ", e);
}
displayVariable();
// console.log("Outside Variable d = ", d);
console.log("Outside Variable e = ", e);

// Closure
var x = 1; // Global scope
function firstF() {
  var y = 2; // Local firstF
  secondF(); // Functia poate fi apelata chiar daca este definita mai jos in cod
  function secondF() {
    var z = 3; // Local secondF
    w = 4;
    console.log("second x =", x); //1
    console.log("second y =", y); //2
    console.log("second z =", z); //3
  }
  console.log("first x =", x); //1
  console.log("first y =", y); //2
//   console.log("second z =", z); // undefined
}
firstF();
console.log("x =",x); //1
// console.log("y =", y); // undefined
// console.log("z =", z); // undefined
console.log("w =", w); // undefined
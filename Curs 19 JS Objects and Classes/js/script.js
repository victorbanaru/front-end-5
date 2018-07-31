var emptyObject = {}; // no properties and no methods
console.log(emptyObject);

var emptyObject2 = new Object();
console.log(emptyObject2);

var userMe = {
  name: "Victor Banaru",
  age: 40,
  height: 188,
  weight:125,
  "eyes color": "green",
//   age: 22 - duplicated keys are not possible
  
  sayHi: function() { //method without parameters
    console.log("Hello world from an object method!");
  },
  
  sayHiTo: function(name) { //method with parameters
    console.log("Hello, " + name + "!");
  },
};

console.log(userMe);
userMe.sayHi();
userMe.sayHiTo("Grupa 5!");

console.log(userMe.name); // dot notation
console.log(userMe["eyes color"]); // brackets notation
console.log(userMe["name"]); // brackets notation

var prop = "height";
console.log("Heihgt ", userMe[prop]); // will display height
console.log(userMe.prop); // same as: userMe["prop"]

prop = "age";
console.log("Age ", userMe[prop]); // will display age

console.log("userMe keys", Object.keys(userMe));
console.log("userMe values", Object.values(userMe));

var keys = Object.keys(userMe);
for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  console.log("Value for each key ", key, userMe[key]);
}

// constructor function
function User(options) {
  // this is used to avoid console errors if any key is left empty
  options = options || {};
  // if we're not sending a name, the object will get empty string in its name
  this.name = options.name || "";
  this.age = options.age;
  this.height = options.height;
  this.weight = options.weight;
  this.calculatedBMI = function() {
    return (this.weight / (this.height / 100) ** 2);
  }
}

var user = new User({
  name: "Victor",
  age: 40,
  height: 188,
  weight: 125
});

console.log("User created with constructor function ", user);
console.log("Calculated BMI ", user.calculatedBMI());

var colleague = new User ({
  name: "Simon",
  age: 25,
  height: 180,
  weight: 72
});

console.log("Calculated BMI of " + colleague.name + " is " + colleague.calculatedBMI());

console.log("User prototype ", User.prototype);

// user.sayHi();

User.prototype.sayHi = function() {
  console.log("Hi there from " + this.name);
}

user.sayHi();
colleague.sayHi();
console.log("There is no property on objects", user.prototype); // => undefined
console.log("prototype attribute",
           Object.getPrototypeOf(user),
           Object.getPrototypeOf(colleague));

console.log("class is prototype of object",
           User.prototype.isPrototypeOf(user),
           User.prototype.isPrototypeOf(colleague));

console.log(user.toString());
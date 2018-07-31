function User(options) {
  options = options || {};
  
  this.name = options.name;
  this.age = options.age;
  this.weight = options.weight;
  this.height = options.height;
}

User.prototype.calculatedBMI = function(){
  return this.weight / (this.height * this.height);
}

var ana = new User({
  name: "Ana Popescu",
  age: 25,
  weight: 55,
  height: 1.70,
});

console.log("Ana's BMI ", ana.calculatedBMI());

console.log("User's prototype property ", User.prototype);
console.log("Ana's prototype attribute ", Object.getPrototypeOf(ana));
console.log("They are the same");

console.log(User.prototype.isPrototypeOf(ana));

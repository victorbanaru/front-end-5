// Empty object
var robot = {};
console.log("Robot = ", robot);

var robot = {
  model: "TRX1000",
  weight: 100
};
console.log("Robot = ", robot);

// Add new property
robot.color = "red";
console.log("Robot = ", robot);

// Update property
robot.weight = 99;
console.log("Robot = ", robot);

// Delete property
// delete robot.model;
// console.log("Robot = ", robot);

var robot = {
  model: "TRX1000",
  weight: 100,
  run: function () {
    console.log("The robot is running"); 
  }
};
console.log("Robot = ", robot);
// Call robot method
robot.run();

// Typeof data
var name = "Anca";
console.log("TYpe of string ", typeof name);

var age = 10;
console.log("TYpe of string ", typeof age);

var isNull = null;
console.log("TYpe of string ", typeof isNull);

var isUndefined;
console.log("TYpe of string ", typeof isUndefined);

var list = [];
console.log("TYpe of array ", typeof list);
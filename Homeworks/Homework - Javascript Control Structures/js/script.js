// 1. display in the console the numbers from 1 to 20
var r = "";
for (var i = 1; i <= 20; i++) {
	r += " " + i;
}
console.log(r);

// 2. display in the console the odd numbers from 1 to 20
var r = "";
for (var i = 1; i <= 20; i++) {
	if (i % 2 !== 0) {
		r += " " + i;
	}
}
console.log(r);

// 2. alternativa (doar pentru cazul nostru: numere de la 1 la 20)
console.log("Varianta alternativa la p. 2, doar pentru cazuri in care se cunosc limitele intervalului")
var r = "";
for (i = 1; i <= 20; i+=2) {
	r += " " + i;
}
console.log(r);

// 3. compute the sum of the elements of an array and display it in the console
var myArray = [3, 5, 8, 19, 4, 2];
var r = 0;
console.log("Given the array", myArray);
for (i = 0; i < myArray.length; i++) {
	r += myArray[i];
}
console.log("Sum of the elements of my array is", r);

// 4. compute the maximum of the elements of an array and display it in the console
var myArray = [6, 4, 2, 11, 21, 8, 10];
var max;
max = myArray[0];
console.log("Given the array", myArray)
for (i = 0; i < myArray.length; i++) {
	if (max < myArray[i]) {
		max = myArray[i];
	}
}
console.log("Maximum of the elements of the array is", max);

// 5. compute how many times a certain element appears in an array
var myArray = [5, 3, 6, 5, 9, 3, 11, 3];
var count = 0;
console.log("Given the array", myArray, "we will count how many times number 3 (certain element) appears in the array");
for (i = 0; i < myArray.length; i++) {
	if (myArray[i] === 3) {
		count ++;
	}
}
console.log("Number 3 appears in my array", count, "times");

// sper ca am inteles bine cererea la p. 5 "certain element" si nu "any element"
// in caz contrar am incercat varianta de mai jos
var t0 = performance.now();
var myArray = [4, 6, 2, 3, 2, 8, 6, 9, 4, 2, 6, 8, 10, 3, 5];
var elements = [];
var counts = [];
var previous;
console.log("Given the array", myArray, "this time we will count how many times each element appears in the array");
myArray.sort(function(a,b){return a-b}); 
for (i = 0; i < myArray.length; i++) {
	if (myArray[i] !== previous) {
		elements.push(myArray[i]);
		counts.push(1);
	} else {
		counts[counts.length-1]++;
	}
	previous = myArray[i];
}
console.log(elements);
console.log(counts);
for (i = 0; i < elements.length; i++) {
	console.log("Element", elements[i], "appears", counts[i], "time(s)")
}
var t1 = performance.now();
console.log("This method took " + (t1 - t0) + " milliseconds");

// Metoda prin generarea unui obiect in care parametrii indica de cate ori se repeta elementul unic
var t0 = performance.now();
var myArray = [4, 6, 2, 3, 2, 8, 6, 9, 4, 2, 6, 8, 10, 3, 5];
var counts = {};
for (var i = 0; i < myArray.length; i++) {
	counts[myArray[i]] = 1 + (counts[myArray[i]] || 0);
}
console.log(counts);
var t1 = performance.now();
console.log("This method took " + (t1 - t0) + " milliseconds");

// Incercare

var myArray = [4, 6, 2, 3, 2, 8, 6, 9, 4, 2, 6, 8, 10, 3, 5];
var elements = [];
var counts = [];
elements[0] = myArray[0];
counts[0] = 1;
for (var i = 0; i < myArray.length; i++) {
  console.log(elements, counts);
  for (var j = elements.length; j >= 0; j--) {
    console.log("j is " + j);
    
  }
}


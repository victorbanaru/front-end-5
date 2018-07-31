var personString = '{ "name": "Mihai", "age": 25, "gender": "M" }'
// var doubleQuotesExample = " \"name\": \"Mihai\", \"age\": 25, \"gender\": \"M\" "
var person = {
  name: "Ionut",
  age: 25,
  gender: "M"
}

console.log('Name', person.name);
person.age = person.age + 1;
console.log('Person Age', person.age);

console.log('Type of', typeof personString);
console.log('Type of', typeof person);
console.log('Type of age', typeof age);
console.log('Type of age', typeof person.age);

// Deserializare (conversie din string in obiect) 
var convertedPersonStringToObject = JSON.parse(personString);
// Serializare (conversie din obiect in string) 
var convertedPersonObjectToString = JSON.stringify(person);

console.log('Type of', typeof convertedPersonStringToObject);
console.log('Type of', typeof convertedPersonObjectToString);


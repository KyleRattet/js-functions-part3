// add scripts

$(document).on('ready', function() {

//EXAMPLE
// function test (str) {
//   return "test" + str
// }
// console.log(test("ing"));


//PROBLEM 1
// Define a function called getStudentName that takes a single object as an argument and returns the value of the name property/key.
var name = {name: 'Michael', age: 27 }

function getStudentName (name) {
   return name.name;
 }
console.log(getStudentName(name));



});

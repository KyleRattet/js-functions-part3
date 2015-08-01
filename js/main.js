// add scripts

$(document).on('ready', function() {

//EXAMPLE
// function test (str) {
//   return "test" + str
// }
// console.log(test("ing"));


//PROBLEM 1
// Define a function called getStudentName that takes a single object as an argument and returns the value of the name property/key.
// var name = {name: 'Michael', age: 27 }

// function getStudentName (name) {
//    return name.name;
//  }
// console.log(getStudentName(name));

//PROBLEM 2
// Define a function called getTotalLetters that takes an array of strings as an argument and returns the total number of letters in all strings.
// var stringArray = ['javascript', 'is', 'not', 'python'];

// function getTotalLetters(stringArray) {
//   var totalLength = 0;
//   for (var i = 0; i < stringArray.length; i++) {
//     totalLength += stringArray[i].length;
//   }
//   return totalLength;
// }

// console.log(getTotalLetters(stringArray));

//PROBLEM 3
// Define a function called 'createObject' that takes two arguments and returns a new object with a key of the first argument and the value of the second argument.
function createObject (keyName, valueName) {
  var object = [];
  object.push({key: keyName,
               value: valueName
              });
  return object;
}

console.log(createObject('city', 'Boulder'));


});

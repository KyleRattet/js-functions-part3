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

// function getStudentName (test) {
//    return test.name;
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
// function createObject (keyName, valueName) {
//   var object = [];
//   object.push({key: keyName,
//                value: valueName
//               });
//   return object;
// }

// console.log(createObject('city', 'Boulder'));

//PROBLEM 4
// Define a function called getNegativeIndex that takes an array and a negative number as arguments and returns the value from the array at the given negative index.
// var letterArray = ['a', 'b', 'c', 'd', 'e'];
// function getNegativeIndex (arr, negNum) {
//   //translate negative number to positive number, and subtract 1 to get correct index
//   var numIndex = ((negNum*(-1))-1);
//   return arr[numIndex];
// }

// console.log(getNegativeIndex(letterArray,-3));

//PROBLEM 5
// Define a function called removeCharacter that takes a string and a single character (string or integer) as arguments and returns the string with the characters removed. Do not modify the original string. STRETCH: Write a test case for this last requirement.
// function removeCharacter (str, removeChar) {
//     var strCopy = str.replace(removeChar,"");
//     return strCopy;
// }

// console.log(removeCharacter("testing", "e"));

//PROBLEM 6
// Define a function called ouputObject that takes an object as an argument and returns each key-value pair in the following format 'key .
// var ages = {john: 10, jerry: 11, jenny: 12 };

// function ouputObject (object) {
//   var objectKeysArray = Object.keys(ages);
//   return Object.keys(object)[0] + " is " + object.john +", " +
//   Object.keys(object)[1] + " is " + object.jerry + ", " +
//   Object.keys(object)[2] + " is " + object.jenny;
// }
// console.log(ouputObject(ages));

// PROBLEM 7
// Define a function called getVowels that takes a string as an argument and returns an array of all the vowels in the string. Do not include duplicates.

// function getVowels (str) {
//   var vowels = ["a", "e", "i", "o", "u"];
//   var vowelArr = [];
//   var strArray = str.split("");

//   for (var i = 0; i < strArray.length; i++) {
//     for (var j = 0; j < vowels.length; j++) {
//       if (strArray[i] === vowels[j]) {
//         vowelArr.push(strArray[i]);
//         vowels.splice(j,1);
//       }
//     }

//   } return vowelArr;

// }

// console.log(getVowels("javascripting"));

//PROBLEM 8
// Define a function called captureTwins that takes an array as an argument and returns true if every adjacent pair of items in the array is the same, otherwise return false.

// var testTrueArr = ['m', 'm', 'n', 'n', 's', 's'];
// var testFalseArr = ['m', 'm', 'm', 'n', 's', 's'];

// function captureTwins (arr) {
//   //test to see if arr is evenly paired
//   if (arr.length % 2 !== 0) {
//     return false;
//   } else {
//     while(arr.length > 0) {
//       var element = arr.shift();
//       if (element !== arr[0]) {
//         return false;
//       }
//       arr.shift();
//     }
//     return true;
//   }
// }

// console.log(captureTwins(testFalseArr));

// console.log(captureTwins(testTrueArr));


//PROBLEM 9
// Define a function called testBooleanLogic that takes an array of boolean values and returns true if any value is true.
//indexOf() to check for values of each index
// var testTrueArr = [false, true, false, false];
// var testFalseArr = [false, false, false];

// function testBooleanLogic (arr) {
//  if (arr.length === 0) {
//   return false;
//  } else {
//    if(arr.indexOf(true) >= 0) {
//     return true;
//    } else {
//     return false;
//    }
//  }

// }
// console.log(testBooleanLogic(testFalseArr));

//PROBLEM 10
// Define a function called getUniqueValues that takes an array of strings, and returns a new array consisting of the unique values.
var testArr = ["m", "n", "m", "r", "s", "r", "q", "q"];

function getUniqueValues(arr) {
  //create empty array container
  var uniqueArray = [];
  //for each (loop characteristics)
  arr.forEach(function(item) {
    if(uniqueArray.indexOf(item) === -1) {
      uniqueArray.push(item);
    }
  });
  return uniqueArray;
}

console.log(getUniqueValues(testArr));

});

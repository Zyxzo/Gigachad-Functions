// The point of this assignment is not to use the functional elements that are part of your chosen language (JavScript/Python).
// But, rather, implement the functionality from scratch using pure functions and higher level functions.
// Do the implimentation in order as given. 
// We have linked to info at MDN, this is just to give a sence of how the reduce,forEach,map and filter functions should work.
//
// 🛠️ Prerequisite:
// You must create an array persons that will contain the data from https://raw.githubusercontent.com/MM-203/misc/main/data/data.json
// This must be done before the first task
//
let people =[

    {"name":"Paula Key", "age":23},
     {"name":"Riya Dickerson" , "age":99},
     {"name":"Layne Colon" , "age":53},
     {"name":"Pranav Giles" , "age":51},
     {"name":"Kamryn Davis" , "age":27},
     {"name":"Taniyah Yu" , "age":17},
     {"name":"Brendon Porter" , "age":23},
     {"name":"Jordin Hancock" , "age":86},
     {"name":"Shawn Vargas" , "age":88},
     {"name":"Sawyer Copeland" , "age":14},
     {"name":"Gustavo Baldwin" , "age":7},
     {"name":"Renee Wilson" , "age":29}
];
// ----------------------------------------------------------------------------------------------------------------------------------
// Bonus challenge 🎉 (a bit hard), the functions forEach, filter and map can all be created using the function reduce. 
// If you feel up for a challenge, try doing so. NB! The bonus challenge is optional. 



// ----------------------------------------------------------------------------------------------------------------------------------



// 1
// Implement your own reduce function and count the number of people above the age of 50
// You can read about a reduce function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce 
function customReduce(arr, reducer, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
      accumulator = reducer(accumulator, arr[i]);
    }
    return accumulator;
  }

  function countPeopleAbove50(accumulator, person) {
    if (person.age > 50) {
      return accumulator + 1;
    }
    return accumulator;
  }

  let count = customReduce(people, countPeopleAbove50, 0);

console.log("People over 50:", count);
// 2
// Implement your own forEach function and use it to greet all the people in the persons array (say Hi, persons name).
// Read about forEach https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

function customForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
  }
  function greetPeople(people) {
    console.log("Ayo, " + people.name);
  }

  customForEach(people, greetPeople);
// 3
// Implement your own map function and make everyone a year older.
// You can read about what the map function should do https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 

function customMap(arr, mapper) {
    let mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
      mappedArray.push(mapper(arr[i]));
    }
    return mappedArray;
  }

  function makePersonOneYearOlder(person) {
    return { "name": person.name, "age": person.age + 1 };
  }

let peopleOneYearOlder = customMap(people, makePersonOneYearOlder);

console.log(peopleOneYearOlder);
// 4
// Implement your own filter function, and use it to find evryone under the drinking age.
// Read about filter https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function customFilter(arr, predicate) {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

function isUnderDrinkingAge(person) {
  return person.age < 21;
}

let underDrinkingAge = customFilter(people, isUnderDrinkingAge);
console.log("These younglings are too young")
console.log(underDrinkingAge);

// 5
// Now create a function sum, that takes a list of numbers and returns the sum
// Try to use your previously created functions to make this function 
// Sum the total age of persons using this new function 
// NB! Do not manualy create the age listing

function customReduce(arr, reducer, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = reducer(accumulator, arr[i]);
  }
  return accumulator;
}
function sum(numbers) {
  return customReduce(numbers, (acc, num) => acc + num, 0);
}
let ages = people.map(person => person.age);
let totalAge = sum(ages);
console.log("Total Age:", totalAge);
// 6
// Now create a function average, that returns the average of a list of numbers
// Try to use your previously created functions to make this function 
// calculate the average age of the persons using this function
// NB! Do not manualy create the age listing

function customReduce(arr, reducer, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = reducer(accumulator, arr[i]);
  }
  return accumulator;
}
function sum(numbers) {
  return customReduce(numbers, (acc, num) => acc + num, 0);
}
function average(numbers) {
  if (numbers.length === 0) {
    return 0; // Avoid division by zero for empty lists
  }
  const total = sum(numbers);
  return total / numbers.length;
}
let averageAge = average(ages);
console.log("Avreage Age:", averageAge);
// 7
// Finaly create a max and a min function that respectivly returns the maximum value and the minimum value
// Only use previously created functions to acchive this.
// Then find the min and max age of ther persons.


function customReduce(arr, reducer, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = reducer(accumulator, arr[i]);
  }
  return accumulator;
}
// probably something with thise code ^ , i gave up 乁༼ ☯‿☯✿༽ㄏ
// Only change code below this line

function splitArrayInGrups(arr, n) {

result = [];

    while (arr.length) {
      result.push(arr.splice(0, n));
    }
    return result;
  };


// Only change code above this line

console.log(splitArrayInGrups(["a", "b", "c", "d"],2));
console.log(splitArrayInGrups([0, 1 , 2, 3, 4, 5, 6],3));
console.log(splitArrayInGrups([0, 1, 2, 3, 4, 5],2));
console.log(splitArrayInGrups([0, 1, 2, 3, 4, 5, 6, 7, 8],3));
console.log(splitArrayInGrups([0, 1, 2, 3, 4, 5, 6, 7, 8],2));
module.export = splitArrayInGrups;
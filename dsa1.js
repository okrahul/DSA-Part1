// 🚀 question
// 🙋‍♂️question1: - checking sum of zero
function checkZero(arr) {
  for (let num of arr) {
    for (let j = 1; j < arr.length; j++) {
      if (num + arr[j] === 0) {
        return [num, arr[j]];
      }
    }
  }
}
//o(n^2) quadratic time complexity
// console.log("sol1", checkZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]));
// _______________________________________________________________________;

// 🚀 optimize solution
function findZeroPair(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
      // check if sum > 0 so shift right pointer to one step behind
    } else if (sum > 0) {
      right--;
      // else shift left to one step forward
    } else {
      left++;
    }
  }
}
// o(n) linear
// console.log("sol2", findZeroPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]));
// _______________________________________________________________________;

// 🙋‍♂️question: - checking Anagram of string

function checkAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let count = {};
  for (let letter of string1) {
    count[letter] = (count[letter] ?? 0) + 1;
  }
  for (let letter of string2) {
    if (!count[letter]) {
      return false;
    }
    count[letter] -= 1;
  }
  return true;
}
//linear time complexity
// console.log("sol3", checkAnagram("rahul", "rauhl"));
// _______________________________________________________________________;

// 🙋‍♂️question: - count unique number
// [1,2,3,4,5,6,7,8,6,7,8,8]

function count(arr) {
  if (arr.length > 0) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array is empty");
  }
}
//o(n) linear
// console.log("sol4", count([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]));

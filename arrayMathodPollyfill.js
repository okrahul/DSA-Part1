// Polyfill for the map() method
// To create a polyfill for the map() method, you can use the following code:
function useMap(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

// use of map mathod
// Here is an example of how to use the map() polyfill:
const array = [1, 2, 3, 4, 5];
const newArray = useMap(array, function (element) {
  return element * 2;
});

console.log(">>", newArray); // [2, 4, 6, 8, 10]

// example two

Array.prototype.thisMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

// example

const out = [2, 4, 5, 3, 6, 4].thisMap((ele, i) => {
  return ele * 8;
});

console.log("return", out);

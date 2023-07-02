const arr = [1, 3, 2, 4, 5, 6, 4, 2];
const myarr = new Set(arr);
// Set
// The Set object lets you store unique values of any type, whether primitive values or object references.
// 🇮🇳 ❤️ The specification requires sets to be implemented "that, on average, provide access times that are sub linear on the number of elements in the collection". Therefore, it could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N).
myarr.add({ name: "Rahul sharma" });
myarr.delete({ name: "Rahul sharma" });
// console.log(myarr.has(4));
// console.log(myarr.size);
// console.log(myarr.clear);

// The ❤️ Map 🔥 object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const myMap = new Map([
  ["name", "john"],
  ["surname", "sharma"],
]);
myMap.set("name2", "Rahul");
myMap.delete("name");
myMap.has("name");
//size clear also their
console.log(myMap);

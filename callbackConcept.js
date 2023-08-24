console.log("start fun");

function asyncTask(callback) {
  console.log("function running");
  //   setTimeout(callback, 1000);
  //   callback();
  setTimeout(() => {
    callback(null, "this is data");
  }, 1000);
}
asyncTask((err, data) => {
  if (err) {
    console.log("error");
  } else {
    console.log("data", data);
  }
});

const name = "rahul";
```javascript

console.log("hello")
```;

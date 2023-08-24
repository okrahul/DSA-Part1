const initApp = () => {
  //   const multyby10 = memoize();
  //   console.log("memo", multyby10(20));
  //   console.log("memo", multyby10(30));
  //   console.log("memo", multyby10(20));
  //   const fabiMemo = memoFabi(fibonacci);
  //   console.log("memo fabi", fabiMemo(20));
  //   console.log("memo fabi", fabiMemo(20));
  //   console.log("memo fabi", fabiMemo(40));
};

document.addEventListener("DOMContentLoaded", initApp);

const memoize = () => {
  const cache = {}; // closures concept also covered

  return (num) => {
    if (num in cache) {
      console.log("memo cache", cache);
      return cache[num];
    }
    const result = num * 10;
    cache[num] = result;
    return result;
  };
};

const fibonacci = (num) => {
  if (num <= 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

const memoFabi = (fn) => {
  const cache = {};

  return (...args) => {
    if (args.toString() in cache) {
      console.log("memo fabs>>", cache);
      return cache[args.toString()];
    }
    const result = fn(...args);
    cache[args.toString()] = result;
    return result;
  };
};

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) { }
};

function sum(...args) {
  sleep(100);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
};

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((obj, index) => obj === arr2[index]);;
};

function memorize(fn, limit) {
  const memory = [];

  return function (...args) {
    const finder = memory.find(obj => compareArrays(obj.args, args));
    if (finder) {
      return finder.result;
    } else {
      return fn(...args);
    };
    memory.push({ args: args, result: fn(...args) });
    if (memory.length > limit) {
      memory.shift();
    };
  };
};
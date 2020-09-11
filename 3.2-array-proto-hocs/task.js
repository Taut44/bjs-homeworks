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
    };
    if (!finder) {
      memory.push({ args: args, result: fn(...args) });
    };
    if (memory.length > limit) {
      memory.shift();
    };
    return fn(...args)
  };
};

let test = [[1, 2, 3], [1, 2], [1, 2, 3], [1, 2], [9, 5, 2, 4]];

function testCase(testFunction, timerName) {
  console.time(timerName);
  for (let i = 0; i < 100; i++) {
    test.forEach(arr => testFunction(...arr));
  };
  console.timeEnd(timerName);
};
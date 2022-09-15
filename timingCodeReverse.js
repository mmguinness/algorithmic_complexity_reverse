// const reverse = require("./reverse");

const timeToExecuteReverse = () => {
  const warmups = [];
  const tests = [];

  // create timer function
  const runReverse = () => {
    const arr = [];
    // CHANGE SIZE OF ARRAY HERE
    for (let n = 0; n < 5500000; n++) {
      arr.push(n);
    }
    arr.sort((a, b) => 0.5 - Math.random());

    const startTime = Date.now();
    arr.reverse();
    // reverse(arr);
    const timeTaken = Date.now() - startTime;
    return Math.floor(timeTaken);
  };

  // perform warm-up iterations
  for (let n = 0; n < 10; n++) {
    let result = runReverse();
    warmups.push(result);
  }

  // perform tests
  for (let n = 0; n < 20; n++) {
    let result = runReverse();
    tests.push(result);
  }

  // get the average of tests
  const total = tests.reduce((a, b) => a + b);
  const averageResult = total / tests.length;
  console.log(`Average : ${averageResult}`);
};

timeToExecuteReverse();

// My Alogrithm for reverse
// Array Size     Time(miliseconds)
// 5000           3.2
// 10000          17.4
// 15000          41.25
// 20000          71.25
// 25000          115.05
// 30000          166.1
// 35000          236.4
// 40000          305.15
// 45000          403.95
// 50000          553.4
// 55000          641.9
// 60000          761.7
// 65000          898.05
// 70000          1058.2
// 75000          1235.25
// 80000          1405.65
// 85000          1598.65
// 90000          1794.9
// 95000          2037.1
// 100000         2237.2

// Built-in reverse function
// Array Size     Time(miliseconds)
// 5000000         0.55
// 1000000          1.2
// 1500000          1.9
// 2000000          2.2
// 2500000          3
// 3000000          3.4
// 3500000          4.1
// 4000000          4.5
// 4500000          5.5
// 5000000          5.7
// 5500000          6.2
// 6000000
// 6500000
// 7000000
// 7500000
// 8000000
// 8500000
// 9000000
// 9500000
// 10000000

// const reverse = require("./reverse");

const timeToExecuteReverse = () => {
  const warmups = [];
  const tests = [];

  // create timer function
  const runReverse = () => {
    const arr = [];
    // CHANGE SIZE OF ARRAY HERE
    for (let n = 0; n < 100000; n++) {
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

// My Alogrithm for reverse VERSION ONE - QUADRATIC
// Array Size     Time(milliseconds)
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

// My Alogrithm for reverse VERSION TWO - LINEAR?
// Array Size     Time(milliseconds)
// 5000           0.15
// 10000          0.15
// 15000          0.05
// 20000          0.2
// 25000          0.1
// 30000          0.15
// 35000          0.55
// 40000          0.3
// 45000          0.4
// 50000          0.6
// 55000          0.4
// 60000          0.4
// 65000          0.4
// 70000          0.55
// 75000          0.6
// 80000          0.5
// 85000          0.75
// 90000          0.6
// 95000          0.5
// 100000         0.7

// Built-in reverse function
// Array Size     Time(milliseconds)
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

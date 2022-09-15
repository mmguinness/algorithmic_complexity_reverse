const reverse = (array) => {
  // QUADRATIC COMPLEXITY
  // const reversedArray = []
  //   array.forEach((item) => {
  //     reversedArray.unshift(item);
  //   });
  // return reversedArray;
  // }

  // LINEAR COMPLEXITY
  const len = array.length - 1;
  const numIterations = array.length / 2;
  for (let i = 0; i < numIterations; i++) {
    [array[i], array[len - i]] = [array[len - i], array[i]];
  }
  return array;
};

module.exports = reverse;

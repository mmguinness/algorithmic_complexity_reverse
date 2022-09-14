const reverse = (array) => {
  const reversedArray = []
    array.forEach((item) => {
      reversedArray.unshift(item);
    });
  
  return reversedArray;
};

module.exports = reverse;

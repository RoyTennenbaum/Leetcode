/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = 0;
  const result = [];
  nums.forEach((num) => {
    sum += num;
    result.push(sum);
  });
  return result;
};

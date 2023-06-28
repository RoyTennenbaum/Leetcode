//Two solutions: one using brute force and iterating over the entire array with two loops,
//resulting in time complexity on O(n^2) and space complexity of O(1).

//The second solution includes using a hashmap (new Map()) to memorize all values we came across,
//till hitting the correct value, thus not iterating through the whole array.
//Time complexity: O(n) ; Space complexity: O(n) :)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashmap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hashmap.has(complement)) {
      return [hashmap.get(complement), i];
    }
    hashmap.set(nums[i], i);
  }
  return null;
};

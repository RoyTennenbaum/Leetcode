//Side note: this is a non-perfect solution, which does not use the priority queue data structure, uploaded it since it is very consice.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const res = [];
  for (let i = 0; i < nums1.length && i < k; i++) {
    for (let j = 0; j < nums2.length; j++) {
      res.push([nums1[i], nums2[j]]);
    }
  }
  res.sort((a, b) => {
    const sum1 = a[0] + a[1];
    const sum2 = b[0] + b[1];

    return sum1 - sum2;
  });
  res.splice(k);
  return res;
};

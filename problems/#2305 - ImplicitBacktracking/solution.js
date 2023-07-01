/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function (cookies, k) {
  let children = new Array(k).fill(0);
  let minUnfair = Infinity;

  const distribution = (n) => {
    if (n === cookies.length) {
      const max = Math.max(...children);
      minUnfair = Math.min(minUnfair, max);
      return;
    }
    for (let i = 0; i < k; i++) {
      children[i] += cookies[n];
      distribution(n + 1);
      children[i] -= cookies[n];
    }
  };

  distribution(0);
  return minUnfair;
};

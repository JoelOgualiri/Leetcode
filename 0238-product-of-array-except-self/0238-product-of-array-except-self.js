/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let zero = 0;
  let product = 1;
  const res = new Array(nums.length).fill(0);
  for (let num of nums) {
    if (num === 0) {
      zero++;
    } else {
      product = product * num;
    }
  }
  if (zero > 1) {
    return res;
  } else if (zero !== 0) {
    for (let i = 0; i < res.length; i++) {
      if (nums[i] !== 0) {
        continue;
      } else {
        res[i] = product;
      }
    }
  } else {
    for (let i = 0; i < res.length; i++) {
      res[i] = product / nums[i];
    }
  }
  return res;
    
};
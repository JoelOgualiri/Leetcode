/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a-b)
  const hm = {};
  const result = subsetsWithDupHelper(nums);
  for (let nums of result) {
    hm[nums] = nums;
  }

  return Object.values(hm);
}

function subsetsWithDupHelper(array) {
  if (array.length === 0) return [[]];
  const first = array[0];
  const includeNum = [];
  const subset = subsetsWithDupHelper(array.slice(1));
  for (let num of subset) {
    includeNum.push([...num, first]);
  }
  return [...includeNum, ...subset];
}


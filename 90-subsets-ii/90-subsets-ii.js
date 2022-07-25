/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
       const hashmap = {};
    nums.sort((a,b) => (a-b))
  const res = dfs((i = 0), nums, (result = []), (slate = []));

  for (let val of res) {
    if (hashmap[val]) continue;
    hashmap[val] = val;
  }
  return Object.values(hashmap);
};

function dfs(i, nums, result, slate) {
  if (i === nums.length) {
    
      result.push(slate.slice());
    
    return;
  }
  //exclude

  dfs(i + 1, nums, result, slate);
  //include
  slate.push(nums[i]);
  dfs(i + 1, nums, result, slate);
  slate.pop();

  return result;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    const result = []
    for (let i = 0; i < nums.length-1; i++){
            if( i > 0 && nums[i] === nums[i -1]) {
            continue;
        }
       let res = threeSumHelper(nums,i, left = i+1, right = nums.length-1)
      
           result.push(...res)
       
    }
    return result
};
function threeSumHelper(nums,i, left, right){
    let tempArr = []
    let sum = 0
    while ( right > left){
        sum = nums[i] + nums[left] + nums[right]
        if (sum === 0){
            tempArr.push([nums[i], nums[left], nums[right]])
            left++
            right--  
            while (nums[left] === nums[left-1] && left < right){
                left++
            }
         
        }
        else if (sum < 0){
            left++
            
        }
        else if (sum > 0){
            right--
        }
    }
    return tempArr
}
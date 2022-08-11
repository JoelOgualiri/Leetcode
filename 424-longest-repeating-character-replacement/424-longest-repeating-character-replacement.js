/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
   
    const hm = {};
    let left = 0;
    let right = 0;
    let max = 0
    let strLen = 0
    while (right < s.length){
        strLen++
        if (!(s[right] in hm)){
            hm[s[right]] = 1
        }else{
            hm[s[right]]++
        }
        
        let len = longestChaLength(hm)
        if (Math.max(strLen - len) <= k){
            max = Math.max(max,strLen)
        }else{
            while(left < right && Math.max(strLen - len) > k){
                hm[s[left]]--
                len = longestChaLength(hm)
                strLen--
                left++
            }
        }
        right++
    }
    
    return max
};

function longestChaLength(hm){
    let max = 0
    for (let key in hm){
        max = Math.max(max,hm[key])
    }
    return max
}
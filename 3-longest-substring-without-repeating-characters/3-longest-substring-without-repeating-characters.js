/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s === " ") return 1
    let L = 0
    let R = 0
    let max = 0;
    let current = 0
    let hm = {}
    
    while (R < s.length){
        if (!(s[R] in hm)){
            current++
            max = Math.max(current,max)
            hm[s[R]] = 1
            R++
        }else{
            max = Math.max(current,max)
            delete hm[s[L]]
            current--
            L++
        }
    }
    return max
};
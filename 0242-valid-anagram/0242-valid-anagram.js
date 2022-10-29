/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const hm_s = {};
    
    for (let str of s){
        if (str in hm_s){
            hm_s[str]++
        }
        else{
            hm_s[str] = 1
        }
    }
    for (let str of t){
        if (str in hm_s){
            hm_s[str]--
            if (hm_s[str] < 0) return false
        }
        else{
            return false
        }
    }
    for (let char in hm_s){
        if (hm_s[char] > 0) return false
    }
    return true
    
};
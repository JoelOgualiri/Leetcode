/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const s_hashmap = {};
    const t_hashmap = {};
    for (let char of s){
        if (char in s_hashmap){
            s_hashmap[char]++
        }else{
            s_hashmap[char] = 1
        }
    }
    for (let char of t){
        if (char in t_hashmap){
            t_hashmap[char]++
        }else{
            t_hashmap[char] = 1
        }
    }
    for (let key in s_hashmap){
        if (s_hashmap[key] !== t_hashmap[key]) return false
    }
    return true
};
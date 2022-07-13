/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote === "") return true
    const hashmap = {};
    for (let char of magazine){
        if (char in hashmap){
            hashmap[char]++
        }else{
            hashmap[char] = 1
        }
    }
    for (let char of ransomNote){
        if (char in hashmap && hashmap[char]>0){
            hashmap[char]--
        }else{
            return false
        }
    }
    return true
};
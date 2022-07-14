/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const hashmap = {}
    let count = 0

    
    for (let char of s){
        if (char in hashmap){
            hashmap[char]++
        }else{
            hashmap[char] = 1
        }
    }
    for (let char in hashmap){
        count+=Math.floor(hashmap[char]/2)*2;
        if (count%2===0 && hashmap[char]%2 === 1){
            count++
        }

        }
    
    return count
}
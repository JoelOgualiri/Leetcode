/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let newStr = ""
    for (let s of strs){
        newStr = newStr + s.length + "#" + s
    }
    
    return newStr
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(str) {
    let i = 0;
    let  j = 0;
    const result = []
    while (j < str.length){
        while(str[j] !== "#"){
            j++
        }
        let len = Number(str.slice(i,j))
        j++
        result.push(str.slice(j,j+len))
        i = j+len
        j = i
    }
    return result
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
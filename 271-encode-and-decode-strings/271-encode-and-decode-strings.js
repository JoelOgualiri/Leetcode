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
     const res = [];
     let i = 0;
    let j = 0;

    while (j < str.length) {
     
        while (str[j] !== '#') {
            j++;
        }

        const len = Number(str.slice(i,j));
        j++
        res.push(str.slice(j, j + len));
        i = j + len;
        j = i
    }

    return res;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
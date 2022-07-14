/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const stack = []
    let str1 = []
    let str2 = []
    for (let char of s){
        if (char === '#'){
            str1.pop()
        }else{
            str1.push(char)
        }
    }
    for (let char of t){
        if (char === '#'){
            str2.pop()
        }else{
            str2.push(char)
        }
    }
    return str1.join('') === str2.join('')
};
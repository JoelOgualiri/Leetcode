/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    const brackets = {
        "(":")",
        "{":"}",
        "[":"]"
    }
    for (let brack of s){
        if (brack === "(" || brack === "{" || brack === "["){
            stack.push(brack)
        }else{
            if (stack.length === 0) return false
            const openingBrac = stack.pop();
            if (brackets[openingBrac] !== brack) return false
        }
    }
    if (stack.length !== 0) return false
    return true
};
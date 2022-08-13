/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let pair = "()".repeat(n)
    const result =  helper(pair, n)
    return result
}

function helper(pair, n){
    if (pair.length === 0) return [""]
    
    let open = "("
    let close = ")"
    let stack = []
    let bracketPairs = helper(pair.slice(1), n)
    
    for (let ch of bracketPairs){
        let openCount = getOpenCount(ch)
        let closeCount = getCloseCount(ch)
        if (openCount < n && openCount > closeCount){
         
            stack.push(ch + open)
            stack.push(ch + close)
        }
        if (openCount === n && closeCount < n){
            stack.push(ch + close)
        }
        if (openCount < n && openCount === closeCount){
            stack.push(ch + open)
        }
    }
    return stack
    
}

function getOpenCount(ch){
    let count = 0
    for (let c of ch){
        if (c === "("){
            count++
        }
    }
    return count
}
function getCloseCount(ch){
    let count = 0
    for (let c of ch){
        if (c === ")"){
            count++
        }
    }
    return count
}
/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
    let root = p
    let foundNode = dfs(p,q)
    if (foundNode) return p
    return findCommonRoot(p,q)
};

function dfs(p,q){
    if (p === null) return false
    if (p.val === q.val) return true;
    
    const left = dfs(p.left,q)
    if (left) return true
    const right = dfs(p.right, q)
    if (right) return true
    return left || right
}
function findCommonRoot(p,q){
    
    const hm = {}
    hm[p.val] = 1
    let stack = [p.parent]
    while(stack.length > 0){
        let curr = stack.pop()

        if (findNode(curr,q, hm)) return curr
        if (curr.parent){
            stack.push(curr.parent)
        }else{
            return curr
        }
    }
}
function findNode(curr,q,hm){
    if (curr === null) return false
    if (curr.val in hm) return false
    if (curr.val === q.val) return true
    hm[curr.val] = 1
    
    const left = findNode(curr.left,q, hm)
    if (left) return true
    const right = findNode(curr.right,q, hm)
    if (right) return true
    
    return false
}
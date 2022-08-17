/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
        return dfs(root, min = -Infinity, max = Infinity)
}
function dfs(root,min,max){
    if (root === null) return true
    if (root.val <= min || root.val >= max) return false
    
    const left = dfs(root.left, min, root.val)
    const right = dfs(root.right, root.val, max)

    return left && right
}
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    const result = helper(root,k)
    return result[k-1]
}

function helper(root,k){
    if (root === null) return []
    
    const left = helper(root.left)
    const right = helper(root.right)
    return [...left,root.val,...right]
}
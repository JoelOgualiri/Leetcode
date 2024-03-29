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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return null
    if (root.left === null && root.right === null) return root
    
    let temp 
    const left = invertTree(root.left)
    const right = invertTree(root.right)
    
    temp = root.left;
    root.left = root.right;
    root.right = temp
    
    return root
}
    
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
 * @return {number}
 */
var goodNodes = function(root) {
    const result = goodNodeshelper(root, max=-Infinity)
    return result
    
};

function  goodNodeshelper(root,max=-Infinity){
    let count = 0
    if (root === null) return 0
    max = Math.max(max,root.val)
    if (root.val >= max)count++
    if (root.left === null && root.right === null) return count
    
    
    const left = goodNodeshelper(root.left, max)
    const right = goodNodeshelper(root.right, max)
    
    return count = count + left +right
}
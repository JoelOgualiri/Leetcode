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
var diameterOfBinaryTree = function(root) {
    const res = diameterOfBinaryTreeHelper(root)
    return res[0]
};

function diameterOfBinaryTreeHelper(root){
    if (root === null) return [0,-1];
    if (root.left === null && root.right === null) return [0,0];
    let res = [-1,-1]
    let left = diameterOfBinaryTreeHelper(root.left) 
    let right = diameterOfBinaryTreeHelper(root.right)
    
    let currentDiameter = 2 + left[1] + right[1]
    res[0] = Math.max(res[0], currentDiameter, left[0], right[0])
    res[1] = Math.max(left[1],right[1])+1
    return res
}
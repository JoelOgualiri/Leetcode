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
var isBalanced = function(root) {
    if (root === null) return true;
    const res = isBalancedHelper(root)
    if (res !== false) return  true
    return false

};

function isBalancedHelper(root){
    if (root === null) return 0;
    if (root.left === null && root.right === null) return 1;
    
    const left = isBalancedHelper(root.left)
    if (left === false) return false
    const right = isBalancedHelper(root.right)
    if (right === false) return false
    
    if ( Math.abs(right-left) > 1) return false
    return Math.max(left,right)+1
}
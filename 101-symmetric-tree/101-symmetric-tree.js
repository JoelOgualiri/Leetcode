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
var isSymmetric = function(root) {
    return isMirror(root,root)
};

function isMirror(leftTree,rightTree){
    if (leftTree === null && rightTree === null) return true
    if (leftTree === null || rightTree === null) return false
    if (leftTree.val === rightTree.val){
        const p1 = isMirror(leftTree.left,rightTree.right) 
        const p2 = isMirror(leftTree.right,rightTree.left)
        if (p1 && p2) return true
    }
    return false
}
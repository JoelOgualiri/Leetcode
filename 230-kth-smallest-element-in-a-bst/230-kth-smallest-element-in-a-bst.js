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
    
    const values = kthSmallestHelper(root,k)
    return values[k-1]
};
function kthSmallestHelper(root, k){
    if (root === null) return []
    const left = kthSmallestHelper(root.left, k)
    const right = kthSmallestHelper(root.right, k)
    return [...left, root.val, ...right]
}
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
    return countNodes(root, max = -Infinity)
}

function countNodes(root, max){
    let count = 0;
    if (root === null) return count
    
    if (root.val >= max){
        count++
        max = root.val
    }
    const left = countNodes(root.left, max)
    const right = countNodes(root.right, max)

    return count+left+right
}
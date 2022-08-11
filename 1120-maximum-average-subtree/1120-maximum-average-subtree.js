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
var maximumAverageSubtree = function(root) {
        return dfs(root).maxAve
};

function dfs(root){
    if (root === null) return {maxAve:0, sum:0, count:0}
    if (root.left === null && root.right === null) return {maxAve:root.val, sum:root.val, count:1}
    
    const left = dfs(root.left)
    const right = dfs(root.right)
    
    let currMax = Math.max(left.maxAve, right.maxAve, ((left.sum + right.sum + root.val)/(left.count + right.count + 1)))
    let currSum = left.sum + right.sum + root.val
     return {maxAve:currMax, sum:currSum, count:left.count+right.count+1}
}
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return []
    const queue = [{node:root, level:0}]
    const result = []
    while (queue.length > 0){
        const {node,level} = queue.shift();
        if (result.length === level){
            result[level] = [node.val]
        }else{
            result[level].push(node.val)
        }
        if (node.left){
            queue.push({node:node.left, level:level+1})
        }
        if (node.right){queue.push({node:node.right, level:level+1})}
    }
    return result
};
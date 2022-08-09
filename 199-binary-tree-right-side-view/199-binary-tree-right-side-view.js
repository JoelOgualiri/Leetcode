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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (root === null) return []
     let result = [];
    let queue = [root];

    while (queue.length > 0){
        const length = queue.length
        for (let i = 0; i < length; i++){
            const node = queue.shift()
            if (i === length - 1){
                result.push(node.val)
            }
            if (node.left)queue.push(node.left)
            if (node.right)queue.push(node.right)
        }
    }
    return result
};
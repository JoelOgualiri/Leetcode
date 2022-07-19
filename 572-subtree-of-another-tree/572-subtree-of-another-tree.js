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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    let queue = [root]
    while(queue.length > 0){
        const current = queue.shift()
        if (current.val === subRoot.val){
            const res = validateTree(current, subRoot)
            if (res) return true
        }
        if (current.left)queue.push(current.left)
        if (current.right)queue.push(current.right)
    }
    return false
};

function validateTree(root, subRoot){
    if (root === null && subRoot ===null) return true
    if (root === null || subRoot === null) return false
    
    return root.val === subRoot.val && validateTree(root.left, subRoot.left) && validateTree(root.right,subRoot.right)
}
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
   if (root === null){
       if (subRoot === null) return true
       return false
   }
    const queue = [root]
    while(queue.length > 0){
        const curr = queue.shift()
        if (curr.val === subRoot.val){
            if (dfs(curr,subRoot)) return true
        }
        if (curr.left){
            queue.push(curr.left)
        }
        if (curr.right){
            queue.push(curr.right)
        }
    }
    return false
}

function dfs(root, subRoot){
    if (root === null && subRoot === null) return true
    if (root === null || subRoot === null) return false
    
    if (root.val === subRoot.val){
        return dfs(root.left, subRoot.left) && dfs(root.right, subRoot.right)
    }
    return false
}
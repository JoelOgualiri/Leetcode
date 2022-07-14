/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null) return null
   if (root.val === p.val || root.val === q.val) return root;
    if (root.left == null && root.right == null) return null;
    let left, right

        left = lowestCommonAncestor(root.left, p, q)
    
    
        right = lowestCommonAncestor(root.right, p, q)
    
    if (left && right) return root
    return left==null?right:left
}
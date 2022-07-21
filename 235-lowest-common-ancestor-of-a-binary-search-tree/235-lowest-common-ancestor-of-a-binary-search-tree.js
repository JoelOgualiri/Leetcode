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
    if (p.val === root.val || q.val === root.val) return root;
    if (!(p.val < root.val && q.val < root.val) && !(p.val > root.val && q.val > root.val)) return root;
    let left, right
    if (p.val < root.val && q.val < root.val){
         left = lowestCommonAncestor(root.left, p, q)
    }
    if (p.val > root.val && q.val > root.val){
       right = lowestCommonAncestor(root.right, p, q)
    }
    return left?left:right
}
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (root === null) return []
    let stack = []
    stack.push(root.val)
    for (let child of root.children){
        stack.push(...preorder(child))
    }

    return stack
};

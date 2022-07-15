/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let stack1 = [p]
    let stack2 = [q]
    while (stack1.length > 0 && stack2.length > 0){
        let current1 = stack1.pop();
        let current2 = stack2.pop();
        if (current1 && current2){
            if (current1.val !== current2.val) return false
            if (current1.right){
               stack1.push(current1.right);
            }else{
                stack1.push(null);
            }
            if (current1.left){
                stack1.push(current1.left);
            }
            else{
                stack1.push(null);
            }
             if (current2.right){
               stack2.push(current2.right);
            }else{
                stack2.push(null);
            }
            if (current2.left){
                stack2.push(current2.left);
            }
            else{
                stack2.push(null);
            }
        }
        else if (current1 === null && current2 === null){
            continue
        }
        else{
            return false
        }
    }
    if (stack1.length > 0 || stack2.length > 0) return false
    return true
    
};
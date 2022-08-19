/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (node === null) return null
    const cloned = {}
    const queue = [node]
    while (queue.length > 0){
        const currNode = queue.shift()
        if (!(currNode.val in cloned)){
            cloned[currNode.val] = new Node(currNode.val)
        }
        for (let neighbor of currNode.neighbors){
            if (!(neighbor.val in cloned)){
                cloned[neighbor.val] = new Node(neighbor.val);
                queue.push(neighbor)
            }
            cloned[neighbor.val].neighbors.push(cloned[currNode.val])
        }
        
    }

    return cloned[node.val]

    
};


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
    if (node=== null) return null
   const visited = {};
    const queue = [node]
    let copy = new Node(node.val)
    visited[node.val] = copy
    
    while(queue.length > 0){
        const current = queue.shift();
        for (let neighbor of current.neighbors){
            if (!(neighbor.val in visited)){
      
                visited[neighbor.val] = new Node(neighbor.val);
                queue.push(neighbor)
            }
            visited[neighbor.val].neighbors.push(visited[current.val])
  
        }
    };
    return visited[node.val]

    
};


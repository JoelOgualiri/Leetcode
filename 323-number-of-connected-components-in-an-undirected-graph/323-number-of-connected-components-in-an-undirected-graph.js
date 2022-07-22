/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
   [adjacencyList, numberofnodes ]= edgeToList(edges);
  
    const visited = new Set();
    let count = 0;
    
    for (let node in adjacencyList){
        if (visited.has(Number(node))) continue;
        visited.add(Number(node));
        count++;
        const stack = [node];
        while (stack.length > 0){
            const current = stack.pop();
            const neighbours = adjacencyList[current];
            for (let neighbour of neighbours){
                if (!(visited.has(Number(neighbour)))){
                    stack.push(neighbour);
                    visited.add(Number(neighbour))
                }
            }
        }
        
        
    }
    if (numberofnodes !== n){
        return count + (n - numberofnodes )
    }
    
    
    return count 
};

function edgeToList(edges){
    const hm = {};
    let num = 0
    for (let edge of edges){
        const [src, dst] = edge
        if (src in hm){
            hm[src].push(dst)
        }else{
            hm[src] = [dst]
            num++
        }
        if (dst in hm){
            hm[dst].push(src)
        }else{
            hm[dst] = [src]
            num++
        }
    }
    
    return [hm, num]
}
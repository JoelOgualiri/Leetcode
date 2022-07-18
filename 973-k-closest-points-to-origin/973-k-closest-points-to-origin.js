/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const origin = [0,0]
    const distance = []
    const result = []
    for (let point of points){
        calculateDistance(origin, point, distance)
    }
    distance.sort((a,b)=>(a[0]-b[0]))
    
    for (let i = 0; i < k; i ++){
        result.push(distance[i][1])
    }
    return result

};

function calculateDistance(origin, point, distance){
    let eucDis = Math.sqrt(Math.pow((origin[0]-point[0]), 2) + Math.pow((origin[1] -point[1]),2));
    distance.push([eucDis, point])
    return
                           
}
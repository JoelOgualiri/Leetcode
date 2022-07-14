/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    for (let i = 0; i < intervals.length; i++){
        for (let j = 0; j < intervals.length; j++){
                if(intervals[i][0] > intervals[j][0]){
                    if (intervals[j][1] > intervals[i][0]) return false
                }else if (intervals[j][0]< intervals[i][0]){
                    if (intervals[j][1]> intervals[i][0]) return false
                }else if ((intervals[j][0] === intervals[i][0] || intervals[j][1] === intervals[i][1]) && i !== j){
                    return false
                }
            
        }
        
    }
    return true
};
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false
    const hm = {}
   for (let s of s1){
       if (s in hm){
           hm[s]++
       }
       else{
           hm[s] = 1
       }
   }
    
    for (let i = 0; i < s2.length; i++){
        if (s2[i] in hm){
            const newHm = generateHm(s2.slice(i,i+(s1.length)))
            if (validateHm(newHm, hm)){
                return true
            }
        }
    }
    return false
};

function generateHm(str){
    const hm = {}
   for (let s of str){
       if (s in hm){
           hm[s]++
       }
       else{
           hm[s] = 1
       }
   }
    return hm
}

function validateHm(hm1, hm2){
    for (let key in hm2){
        if (!(key in hm1 && hm1[key] === hm2[key])){
            return false
        }
    }
    return true
}
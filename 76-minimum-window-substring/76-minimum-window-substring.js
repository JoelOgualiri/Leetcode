/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
if (t.length > s.length) return ""
    let left = 0;
    let right = 0;
    let len = 0;
    let minLength = [0, Infinity]
    const sHashmap = {};
    const tHashmap = {};
    let count = 0
    
    for (let ch of t){
        if (ch in tHashmap){
            tHashmap[ch]++
        }else{
            count++
            tHashmap[ch] = 1
        }
    }
    while (right < s.length){
        if (s[right] in tHashmap){
            if (s[right] in sHashmap){
                sHashmap[s[right]]++
                
            }else{
                sHashmap[s[right]] = 1
            }
            if (tHashmap[s[right]] === sHashmap[s[right]]){
                len++
                
            }
            if (len === count){
                let currentLength = (right - left)+1
           
                let seenMin = (minLength[1]-minLength[0])+1
                   
                if (currentLength < seenMin){
                    minLength[0] = left
                    minLength[1] = right
                }
                while (len === count){
                    if (s[left] in sHashmap){
                          sHashmap[s[left]]--
                    }
                  
                    left++
                    for (let key in tHashmap){
                        if (sHashmap[key] < tHashmap[key]){
                            len--
                        }
                    }
                    if (len === count){
                        currentLength = (right - left)+1
                        if (currentLength < seenMin){
                            minLength[0] = left
                            minLength[1] = right
                }
                    }
                }
            }
            
        }
        right++
    }
    
    if (minLength[1] === Infinity){
        return ""
    }
    return s.slice(minLength[0],minLength[1]+1)
    
};
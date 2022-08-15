/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) return ""
    const tHashmap = {};
    const sHashmap = {};
    const minLen = [0, Infinity]
    let len = 0;
    let satisfyLen = 0
    let left = 0;
    let right = 0;
    let currMin = 0
    
    for (let ch of t){
        if (ch in tHashmap){
            tHashmap[ch]++
        }else{
            satisfyLen++
            tHashmap[ch] = 1
        }
    }
    while(right < s.length){
        if (s[right] in tHashmap){
            if (s[right] in sHashmap){
                sHashmap[s[right]]++
            }else{
                sHashmap[s[right]] = 1
            }
            if (sHashmap[s[right]] === tHashmap[s[right]]){
            len++
        }
        
        }

        if (len === satisfyLen){
             currMin = (right - left) + 1;
                
            if ((minLen[1]-minLen[0])+1 > currMin){
                    minLen[0] = left
                    minLen[1] = right
                }
            while (len === satisfyLen){
                if (s[left] in sHashmap){
                    if (sHashmap[s[left]] === tHashmap[s[left]]){
                        len--
                    }
                     sHashmap[s[left]]--

                }
                left++
                if (len === satisfyLen){
                     currMin = (right - left) + 1;
                
                if ((minLen[1]-minLen[0])+1 > currMin){
                    minLen[0] = left
                    minLen[1] = right
                }
                }
                
            }
        }
        right++
        
        
    }
    
    if (minLen[1] === Infinity) return ""
    return s.slice(minLen[0], minLen[1]+1)
};
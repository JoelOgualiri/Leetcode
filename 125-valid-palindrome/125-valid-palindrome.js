/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alpha = {
        a:1,
        b:1,
        c:1,
        d:1,
        e:1,
        f:1,
        g:1,
        h:1,
        i:1,
        j:1,
        k:1,
        l:1,
        m:1,
        n:1,
        o:1,
        p:1,
        q:1,
        r:1,
        s:1,
        t:1,
        u:1,
        v:1,
        w:1,
        x:1,
        y:1,
        z:1,
        1:1,
        2:1,
        3:1,
        4:1,
        5:1,
        6:1,
        7:1,
        8:1,
        9:1,
        0:1
    }
    let newStr = ""
    if (s.length < 2) return true;
    s.toLowerCase();
    for (let ch of s){
        if (!(ch.toLowerCase() in alpha)){
            continue
        }
        newStr = newStr + ch
    }
    let lo = 0;
    let hi = newStr.length-1
    
    while(hi > lo){
        if (newStr[hi].toLowerCase() !== newStr[lo].toLowerCase()){
            return false
        }
        hi--
        lo++
    }
    return true
};
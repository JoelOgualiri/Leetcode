class Solution(object):
    def isAnagram(self, s, t):
        if len(s) != len(t):
            return False
        s_dict = {}
        t_dict = {}
        for i in range(0,len(s)):
            s_dict[s[i]] = s_dict.get(s[i],0)+1
        for i in range(0,len(t)):
            t_dict[t[i]] = t_dict.get(t[i],0)+1
        
        for char in s_dict:
            if (char in t_dict) == False:
                return False
            if t_dict[char] != s_dict[char]:
                return False
            
        return True
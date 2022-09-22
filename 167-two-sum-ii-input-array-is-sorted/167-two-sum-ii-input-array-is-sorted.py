class Solution(object):
    def twoSum(self, numbers, target):
        dict = {}
        for i in range(0, len(numbers)):
            if target-numbers[i] in dict:
                return [dict.get(target-numbers[i])+1, i+1]
            dict[numbers[i]] = i
        
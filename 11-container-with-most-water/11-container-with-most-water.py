class Solution:
    def maxArea(self, height: List[int]) -> int:
        max_amount = 0
        left = 0
        right = len(height)-1
        while(right > left):
            current_area = (right - left)*min(height[left],height[right])
            max_amount = max(max_amount,current_area)
            if height[right] < height[left]:
                right=right-1
            else:
                left=left+1
        return max_amount
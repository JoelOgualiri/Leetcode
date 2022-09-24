class MinStack:

    def __init__(self):
        self.stack = []

    def push(self, val):
        stack_index = len(self.stack)-1
        if (stack_index < 0):
            self.stack.append([val,val])
        else:
            lastElement = self.stack[len(self.stack)-1][1]
            self.stack.append([val, min(lastElement,val)])
    
    def pop(self):
        self.stack.pop()
    
    def top(self):
        return self.stack[len(self.stack)-1][0]
    
    def getMin(self):
        return self.stack[len(self.stack)-1][1]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
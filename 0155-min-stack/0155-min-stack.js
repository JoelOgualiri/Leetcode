class MinStack{
    
    constructor(){
        this.stack = []
    }
    
    push(val){
        if (this.stack.length === 0){
          this.stack.push([val,val])  
        }else{
            this.stack.push([val, Math.min(val,this.stack[this.stack.length-1][1])])
        }
        
    }
    pop(){
        this.stack.pop()
    }
    top(){
        return this.stack[this.stack.length -1][0]
    }
    getMin(){
        return this.stack[this.stack.length-1][1]
    }



}

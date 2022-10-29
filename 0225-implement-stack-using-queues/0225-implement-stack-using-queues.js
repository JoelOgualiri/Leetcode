class MyStack{
    constructor(){
        this.queue1 = []
    }
    push(x){
        if (this.queue1.length === 0){
            this.queue1.push(x)
        }else{
            let queue2 = []
            while (this.queue1.length >0){
                queue2.push(this.queue1.shift())
            }
            this.queue1.push(x)
            while (queue2.length > 0){
                this.queue1.push(queue2.shift())
            }
        }
    }
    pop(){
        return this.queue1.shift()
    }
    top(){
        return this.queue1[0]
    }
    empty(){
        return this.queue1.length === 0
    }
}
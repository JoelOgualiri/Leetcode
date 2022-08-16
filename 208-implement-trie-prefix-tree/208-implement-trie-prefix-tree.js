
class TrieNode{
    constructor(){
        this.children = {}
        this.isWord = false
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode
    }
    
    insert(word, node = this.root){
       for (let char of word){
           if (!(node.children[char])){
               const child = new TrieNode
               node.children[char] = child
           }
           node = node.children[char]
       }
        return node.isWord = true
    }
    search(word, node = this.root){
            for (let char of word){
                if (!(node.children[char])){
                    return false
                }
                node = node.children[char]
            }
            return node.isWord
        }
        
    startsWith(word, node = this.root){
            for (let char of word){
                if (!(node.children[char])){
                    return false
                }
                node = node.children[char]
            }
            return true
        }
};

/** 
 * @param {string} word
 * @return {void}
 */


/** 
 * @param {string} word
 * @return {boolean}
 */


/** 
 * @param {string} prefix
 * @return {boolean}
 */


/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
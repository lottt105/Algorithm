class Node {
    constructor (value, index){
        this.i = index+1;
        this.v = value;
        this.l = null;
        this.r = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    insert(value, index) {
        let newNode = new Node(value, index);
        if(this.root === null){
            this.root = newNode;
            return;
        }
        let current = this.root;
        while(true){
            if(value < current.v){
                if(current.l === null){
                    current.l = newNode;
                    return;
                }
                current = current.l;
            } else if(value > current.v){
                if(current.r === null){
                    current.r = newNode;
                    return;
                }
                current = current.r;
            }
        }
    }
    
    dfsPre(){
        let result = [];
        
        function traverse(node){
            result.push(node.i);
            if(node.l) traverse(node.l);
            if(node.r) traverse(node.r);
        }
        traverse(this.root);
        return result;
    }
    dfsPost(){
        let result = [];
        
        function traverse(node){
            if(node.l) traverse(node.l);
            if(node.r) traverse(node.r);
            result.push(node.i);
        }
        traverse(this.root);
        return result;
    }
}

function solution(nodeinfo) {
    const nodes = nodeinfo.map((v, i) => [...v, i]);
    nodes.sort((a, b) => b[1] - a[1]);

    const bst = new BST();
    nodes.forEach((v) => {
        bst.insert(v[0], v[2]);
    });
    return [bst.dfsPre(), bst.dfsPost()]
}
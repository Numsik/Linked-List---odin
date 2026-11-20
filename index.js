class Node{
    constructor(value = null,nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }


}

export class LinkedList{
    constructor(){
        this.headNode = null;
    }

    append(value){
    if(this.value === null){
        return this.headNode = new Node(value);
    }
    }
    toString(){
        let current = this.headNode;
        while(current !== null){
            let result = "";
        }
    }
}
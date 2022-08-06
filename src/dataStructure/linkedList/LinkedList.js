import LinkedListNode from "./LinkedListNode";


export default class LinkedList {
    /**
     *
     * @param {function} comparatorFunction
     */
    constructor(comparatorFunction) {
        this.head = null;
        this.tail = null;
        this.compare = comparatorFunction

    }

    /**
     *
     * @param value
     * @returns {LinkedList}
     */
    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;
        if(!this.tail){
            this.tail = newNode;
        }
        return this;
    }

    /**
     *
     * @param value
     * @returns {LinkedList}
     */
    append(value) {
        const newNode = new LinkedListNode(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    toArray() {
        const nodes = [];
        let currentNode = this.head
        while(currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }

    toString(callback) {
        return this.toArray().map((node)=>node.toString(callback)).toString()
    }
}

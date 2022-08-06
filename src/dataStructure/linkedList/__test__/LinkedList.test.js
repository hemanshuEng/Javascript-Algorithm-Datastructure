import LinkedList from "../LinkedList";

describe('DataStructure',()=>{
    describe('LinkedList',()=>{
        it('should create node to the LinkedList',()=>{
            const linkedList = new LinkedList();
            expect(linkedList.toString()).toBe('');
        })
        it('should append node to LinkedList',()=>{
            const linkedList = new LinkedList();
            linkedList.append(2);
            linkedList.append(3);
            expect(linkedList.toArray().toString()).toBe('2,3');
            expect(linkedList.head.toString()).toBe('2');
            expect(linkedList.tail.toString()).toBe('3');
        })
        it('should prepend node to the LinkedList',() =>{
            const linkedList = new LinkedList();
            linkedList.prepend(1);
            linkedList.prepend(3);
            expect(linkedList.toArray().toString()).toBe('3,1');
        })
    })
})

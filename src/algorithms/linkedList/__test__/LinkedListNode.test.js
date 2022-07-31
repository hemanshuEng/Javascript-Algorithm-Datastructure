import LinkedListNode from "../LinkedListNode";

describe('Algorithms',()=>{
    describe('LinkedListNode',()=>{
        it('should be create linked list with value',()=>{
            const node = new LinkedListNode(1);
            expect(node.value).toBe(1);
            expect(node.next).toBeNull();
        })
        it('should be crete linked list with object',()=>{
            const obj = {'value': 1 , 'key': 'test'}
            const node = new LinkedListNode(obj);
            expect(node.value.value).toBe(1)
            expect(node.value.key).toBe('test');
            expect(node.next).toBeNull()
        })
        it('should link together',()=>{
            const node2 = new LinkedListNode(2);
            const node1 = new LinkedListNode(3,node2);
            expect(node1.next).toBeDefined();
            expect(node2.next).toBeNull();
            expect(node2.value).toBe(2)
            expect(node1.next.value).toBe(2);
        })
        it('should convert to string',()=>{
            const node = new LinkedListNode(1);
            expect(node.toString()).toBe('1');
            node.value = 'string value';
            expect(node.toString()).toBe('string value');
        })

        it('should convert node to string with custom stringifier', () => {
            const nodeValue = { value: 1, key: 'test' };
            const node = new LinkedListNode(nodeValue);
            const toStringCallback = (value) => `value: ${value.value}, key: ${value.key}`;
            expect(node.toString(toStringCallback)).toBe('value: 1, key: test');
        });
    })
})


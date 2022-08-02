import Comparator from "../Comparator";

describe('Comparator',()=>{
    it('should compare with default comparator function',()=>{
        const comparator = new Comparator()
        expect(comparator.equal(1,1)).toBe(true)
        expect(comparator.equal(1,2)).toBe(false)
    })
})
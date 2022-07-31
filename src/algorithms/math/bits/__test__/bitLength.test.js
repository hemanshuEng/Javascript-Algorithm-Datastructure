import bitLength from "../bitLength";

describe('Algorithms',()=>{
    describe('bitLength',()=>{
        it('should calculate number of bits that the number is consists of',()=>{
            expect(bitLength(0b0)).toBe(0);
            expect(bitLength(0b01)).toBe(1);
            expect(bitLength(0b010)).toBe(2);
        })
    })
})


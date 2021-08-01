import getBit from "../getBit";

describe('getBit',()=>{
   it('should get bit at specific position', () => {

       //42 = 0b101010
       expect(getBit(42,0)).toBe(0);
       expect(getBit(42,1)).toBe(1);
       expect(getBit(42,5)).toBe(1);
   })
});

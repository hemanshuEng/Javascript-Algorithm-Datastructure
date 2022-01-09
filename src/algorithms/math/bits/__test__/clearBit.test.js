import clearBit from "../clearBit";

describe('clearBit', () => {
    it('should clear bit at specifi position', () => {
        expect(clearBit(1, 0)).toBe(0)
    })
})

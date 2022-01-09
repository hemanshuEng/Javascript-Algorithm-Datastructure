import isEven from '../isEven'
describe('isEven', () => {
    it('should detect if a number is even', () => {
        expect(isEven(0)).toBe(true);
    })
})

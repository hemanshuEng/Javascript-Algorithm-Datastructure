import isAnagram from '../validAnagram'

describe('242. Valid Anagram', () => {
    it('should detect if two strings are  valid anagram', () => {
        expect(isAnagram('anagram', 'nagaram')).toBe(true);
        expect(isAnagram('rat', 'cat')).toBe(false)
    })
})

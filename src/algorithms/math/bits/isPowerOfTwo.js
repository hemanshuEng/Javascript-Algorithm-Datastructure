/**
 * @param {number} number
 * @return boolean 
 */
export default function isPowerOfTwo(number) {
    return (number & (number - 1) === 0 )
}

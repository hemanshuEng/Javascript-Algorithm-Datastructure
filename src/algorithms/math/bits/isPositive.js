/**
 * @param {number} number - 32 bit integer
 * @return {boolean}
 */

export default function isPositive(number) {
    if(number === 0) {
        return false;
    }
    return ((number >> 31) & 1) === 0;
}

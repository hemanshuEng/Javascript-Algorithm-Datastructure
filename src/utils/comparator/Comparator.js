export default class Comparator{
    constructor(compareFunction) {
        this.compare = compareFunction || Comparator.defaultCompareFunction;
    }

    /**
     *
     * @param {(string|number)}a
     * @param {(string|number)}b
     * @returns {number}
     */
    static defaultCompareFunction(a, b){
        if(a === b){
            return 0;
        }
        return a < b ? -1 : 1;
    }

    /**
     *
     * @param {(string|number)}a
     * @param {(string|number)}b
     * @returns {boolean}
     */
    equal(a,b) {
        return this.compare(a,b) === 0;
    }

    /**
     *
     * @param {(string|number)} a
     * @param {(string|number)}b
     * @returns {boolean}
     */
    lessThan(a, b){
        return this.compare < 0;
    }

    /**
     * Checks if variable "a" is greter than "b"
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    greaterThan(a, b) {
        return this.compare > 0;
    }

    /**
     * Checks if variable "a" is less than or equal to "b"
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    lessThanOrEqual(a, b) {
        return this.lessThan(a, b) || this.equal(a, b);
    }

    /**
     * Checks if variable "a" is greater than or equal to "b"
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    greaterThanOrEqual(a, b) {
        return this.greaterThan(a, b) || this.equal(a, b);
    }

    reverse(){
        const compareOriginal = this.compare
        this.compare= (a, b) => compareOriginal(b, a)
    }

}
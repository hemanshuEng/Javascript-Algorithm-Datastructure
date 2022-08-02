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
    
}
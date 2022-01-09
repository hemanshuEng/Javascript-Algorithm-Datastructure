/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

export default function isAnagram(s, t){
    const lenS = s.length;
    const lenT = t.length;

    if (lenS !== lenT) { return false;}
    const sh = strHash(s);
    const th = strHash(t);
    for(let key in sh) {
        if(sh[key] !== th[key]) {
            return false;
        }
    }
    return true;
}


function strHash(str) {
    let res = {}
    for (let c of str) {
        if(res[c]) {
            res[c]++;
        } else {
            res[c] = 1;
        }
    }
    return res;
}

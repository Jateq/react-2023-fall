// 2666. Allow One Function Call
// Easy

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let usedOnce = false;
    return function(...args){
        let onceFn = fn(...args)
        if(!usedOnce){
            usedOnce = true;
            return onceFn
        }
        return undefined

    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
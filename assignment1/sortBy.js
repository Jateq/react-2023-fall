// 2724. Sort By
// Easy

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.slice().sort((a, b) => fn(a) - fn(b));
};
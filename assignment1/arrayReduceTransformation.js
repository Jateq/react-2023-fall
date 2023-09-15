// 2626. Array Reduce Transformation
// Easy

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // if(nums.length == 0){
    //     return init;
    // }
    let val = init;
    nums.forEach(num => {
        val = fn(val,num)
    })
    return val;
};
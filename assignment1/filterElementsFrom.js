// 2634. Filter Elements from Array
// Easy

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const myArr = new Array(0)

    for(let i = 0; i < arr.length;i++){
        if(fn(arr[i],i)){
            myArr.push(arr[i])
            continue
        }
    }
    return myArr
};
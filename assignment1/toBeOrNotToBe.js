// 2704. To Be Or Not To Be
// Easy

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const throwError = (errorStr) => {throw new Error(errorStr)};
    const toBe = (va) => {
        if (va === val) {
            return true
        }
        else{
            return throwError ("Not Equal")
        }
    }

    const notToBe = (va) =>{
        if(va !== val){
            return true;
        }
        else{
            return throwError("Equal")
        }
    }
    return {toBe, notToBe}
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
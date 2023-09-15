// 2726. Calculator with Method Chaining
// Easy

class Calculator {
    /** 
     * @param {number} value
     */
    constructor(value) {
      this.init = value || 0;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
      this.init += value;
      return this;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
      this.init -= value;
      return this;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
      this.init *= value;
      return this;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
      if(value === 0)throw new Error("Division by zero is not allowed");
      this.init /= value;
      return this;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
      this.init = Math.pow(this.init, value);
      return this;
    }
    
    /** 
     * @return {number}
     */
    getResult() {
      return this.init;
    }
  }
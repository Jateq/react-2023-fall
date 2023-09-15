// 2723. Add Two Promises
// Easy

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
function addTwoPromises(promise1, promise2) {
    return Promise.all([promise1, promise2])
      .then((values) => {
        const sum = values[0] + values[1];
        return Promise.resolve(sum);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
  
  /**
   * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
   *   .then(console.log); // 4
   */
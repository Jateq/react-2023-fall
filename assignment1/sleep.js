// 2621. Sleep
// Easy

/**
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise(time => {
        setTimeout(time, millis)
    })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
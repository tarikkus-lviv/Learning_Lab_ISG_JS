// EXCERCISE 1-3
let sum = 4;

function makePromiseResolveWith3 () {
    return new Promise((resolve, reject) => {
        if (sum === 9){
            resolve ('EX:1-3. Yes, you are right!')
        } else {
            reject('EX:1-3. No, you are not right!')
        }
    })
}

makePromiseResolveWith3().then((output) => {
    console.log(output)
}).catch((error) => {
    console.log(error)
})


// EXCERCISE 4
let value = true;
console.log(value);

function makeDelayPromise(value, delayInMs){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value = false);
        }, delayInMs);
    })    
}

makeDelayPromise(value, 2000).then((output) => {
    console.log(output);
})
  


// EXCERCISE 1 PART 2
function waitForPromise(promice, action){
    promice.then(action);
}
  

// EXCERCISE 2 PART 2
function consumePromise(promise, consumer, handler){
    promice.then(response => {promice.handler(response)});
}

module.exports = {
    waitForPromise,
    consumePromise,
};
  

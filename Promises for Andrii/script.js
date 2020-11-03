// Ex 1
function makePromiseResolveWith3(){

return new Promise( resolve => { 
    resolve(3);
    });

}

// Ex 2
function makePromiseRejectWithBoo(){
    return new Promise( reject=> { 
        reject("Boo");
    });
}

// Ex 3
function makePromiseWithConstructor(itShouldResolve){

    return new Promise((resolve, reject) => {
        itShouldResolve ? resolve(true) : reject(false);
    });    

}

// Ex 4
function makeDelayPromise(value, delayInMs){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(value);
        }, delayInMs);
    }) ;
}
 


// Part 2

// Ex 1

function waitForPromise(promise, action){
promise.then(action)
}

// Ex 2
function consumePromise(promise, consumer, handler){
    Promise.then(x => consumer(handler(x))).catch(x => consumer(handler(x)));
}


module.exports = {
    makePromiseResolveWith3,
    makePromiseRejectWithBoo,
    makePromiseWithConstructor,
    makeDelayPromise,
    waitForPromise,
    consumePromise,
};
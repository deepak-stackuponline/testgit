//In asynchronous programs to avoid call back hell JS introduces promises
//A promise is an object representing the eventual completion or failure of an asynchronouse operation
//An object representing eventual completion or failure

let myPromise = new Promise(function(resolve,reject){
    let sucess = true;

    if (sucess){
        resolve("Operation Suceeded");
    }
    else{
        reject("Operation Failed");
    }
});

console.log(myPromise);

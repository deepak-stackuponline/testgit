function delayWithPromise(ms){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Step 1: Data revieved after " + ms + " milliseconds");
        },ms);
    });
}

console.log("Step 0: Before calling delay");

delayWithPromise(2000)
    .then((message)=>{
        console.log(message);
        return "Step 2: After calling delay";
    })

    .then((step2Message)=>{
        console.log(step2Message);
        return "Step 3: Doing other work";
    })

    .then((step3Message)=>{
        console.log(step3Message);
    })
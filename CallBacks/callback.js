//Call Backs can be classified into synchronous and asynchronouse call backs

//SYNCHRONOUS CALL BACK

function greet(name){//Call Back Function
    console.log(`Hello,${name}`);
}

function processName(callback){
    const name = "Deepak";
    callback(NavigationPreloadManager);
    console.log("Processing Completed");
}

processName(greet);
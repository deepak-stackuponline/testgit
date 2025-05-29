
//Using Call Back
/*
function doSomething(sucessFunction, failureFunction){
    let sucess = false;
    if(sucess){
        sucessFunction("Operation Succeeded");
    }
    else{
        failureFunction("Operation Failed");
    }
}

function sucessHandler(message){
    console.log("Sucess:", message);
}

function failureHandler(error){
    console.log("Error:",error);
}

doSomething(sucessHandler, failureHandler);

*/

//Using Promise
function doSomething(){
    return new Promise(function(resolve, reject){
        let sucess = true;

        if (sucess){
            resolve("Operation Succeeded");
        }
        else{
            reject("Operation Failed");
        }
    });
}

function sucessHandler(message){
    console.log("Sucess:", message);
}

function failureHandler(error){
    console.log("Error:", error);
}

doSomething().then(sucessHandler).catch(failureHandler);
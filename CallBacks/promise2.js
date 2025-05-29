/*Call Back Hell=A situation in JS where callbacks are nested within each other to the extent that the code becomes difficult to read. This is an old pattern to handle asynchronous functions */
function task1(){

    return new Promise((resolve, reject) => {
        setTimeout(function(){
        resolve("Task 1 completed");
        
    }, 1000);
    });
}

function task2(){
    return new Promise((resolve, reject) => {
         setTimeout(function(){
        resolve("Task 2 completed")
        
    }, 1000);
    });
   
}
function task3(callback){

    return new Promise((resolve, reject) => {
          setTimeout(function(){
        resolve("Task 3 completed");
        
    }, 1000);
    });
  
}
function task4(callback){
    return new Promise((resolve, reject) => {
           setTimeout(function(){
        resolve("Task 4 completed");
        
    }, 1000);
    });
 
}

function task5(callback){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
        resolve("All Task completed");
    },1000)
    });
    
}

task1().then(value =>{console.log(value);return task2() })
        .then(value =>{console.log(value);return task3()})
        .then(value =>{console.log(value);return task4()})
        .then(value=>{console.log(value);return task5()})
        .then(value=>{console.log(value);})
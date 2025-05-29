/*Call Back Hell=A situation in JS where callbacks are nested within each other to the extent that the code becomes difficult to read. This is an old pattern to handle asynchronous functions */
function task1(){

    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const task1 = true;
            if(task1){
                resolve("Task 1 completed");
            }
            else{
                reject("Task 1 failed");
            }
    }, 1000);
    });
}

function task2(){
    return new Promise((resolve, reject) => {
         setTimeout(function(){
        const task2 = true;
            if(task2){
                resolve("Task 2 completed");
            }
            else{
                reject("Task 2 failed");
            }
        
    }, 1000);
    });
   
}
function task3(){

    return new Promise((resolve, reject) => {
          setTimeout(function(){
        const task3 = true;
            if(task3){
                resolve("Task 3 completed");
            }
            else{
                reject("Task 3 failed");
            }
        
    }, 1000);
    });
  
}
function task4(){
    return new Promise((resolve, reject) => {
           setTimeout(function(){
        const task4 = false;
            if(task4){
                resolve("Task 4 completed");
            }
            else{
                reject("Task 4 failed");
            }
        
    }, 1000);
    });
 
}

function task5(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
        const task5 = false;
            if(task5){
                resolve("Task 5 completed");
            }
            else{
                reject("Task 5 failed");
            }
    },1000)
    });
    
}



task1().then(value => {console.log(value);return task2();})
  .catch(error => {console.error(error);return Promise.resolve();})
  .then(value => {if (value) console.log(value);
    return task3();
  })
  .catch(error => {console.error(error);return Promise.resolve();})
  .then(value => {
    if (value) console.log(value);
    return task4();
  })
  .catch(error => {console.error(error);return Promise.resolve();})
  .then(value => {
    if (value) console.log(value);
    return task5();
  })
  .catch(error => {console.error(error);return Promise.resolve();})
  .then(value => {
    if (value) console.log(value);
  })
  .catch(error => {console.error(error);});

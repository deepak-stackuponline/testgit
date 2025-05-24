/*Call Back Hell=A situation in JS where callbacks are nested within each other to the extent that the code becomes difficult to read. This is an old pattern to handle asynchronous functions */
function task1(callback){
    setTimeout(function(){
        console.log("Task 1 completed");
        callback();
    }, 5000);
}

function task2(callback){
    setTimeout(function(){
        console.log("Task 2 completed");
        callback();
    }, 4000);
}
function task3(callback){
    setTimeout(function(){
        console.log("Task 3 completed");
        callback();
    }, 3000);
}
function task4(callback){
    setTimeout(function(){
        console.log("Task 4 completed");
        callback();
    }, 2000);
}

function task5(callback){
    setTimeout(function(){
        console.log("All Task completed");
        callback();
    },3000)
}

task1(function(){
    task2(function(){
        task3(function(){
            task4(function(){
                task5(function(){

                });
                
            })
        })
    })
})


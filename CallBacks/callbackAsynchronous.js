// function task1(){
//     setTimeout(function(){
//         console.log("Task 1 completed");
//     }, 2000);
// }

// function task2(){
//     console.log("Task 2 completed");
// }

// task1();
// task2();

function task1(myCallBack){
    setTimeout(function(){
        console.log("task 1 completed");
        myCallBack();
    },3000);
}

function task2(){
    console.log("Task 2 completed");
}

function additionalTask1(){
    console.log("additional task 1 completed");
}

function additionalTask2(){
    console.log("additional task 2 completed");
}

task1(task2);
additionalTask1();
additionalTask2();
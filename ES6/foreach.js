/*
let numbers = [1,2,3,4,5];
for (i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
    */

let numbers = [1,2,3,4,5];
function displayElement(element,index,totalArray){
    console.log(`${element} is in position ${index} of the array ${totalArray}`);
}

numbers.forEach(displayElement);
//Process the values inside the array and covert it into a single value

let numbers = [10, 20, 30, 40];
function sum(accumulator, num){
    return accumulator + num;
}

//let total = numbers.reduce(sum,0);
let total = numbers.reduce(sum);
console.log(total);
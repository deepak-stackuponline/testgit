let number = [1,2,3,4,5];

function isEven(num){
    return num % 2 == 0;
}

let result = number.filter(isEven);
console.log(result);
//MAP returns a modified array while foreeach will return undefined only
let number = [1, 2, 3, 4, 5];
function squareNumber(num){
    return num * num;
}
//let result = number.forEach(squareNumber);
let result = number.map(squareNumber);
console.log(result);
console.log(number);
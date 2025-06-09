//default parameters, spread and rest operators
/*
function mul(a,b){
    return a * b;
}

console.log(mul(1,2));
*/
function mul(a,b){
    return a * b;
}
const prompt = require ("prompt-sync")({sigint: true});
let a = prompt("Enter first number ");
let b = prompt("Enter second number ");
var x=parseInt(a);
var y=parseInt(b);

console.log(mul(a,b));
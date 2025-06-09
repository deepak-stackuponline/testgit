const prompt = require ("prompt-sync")({sigint: true});
let a = parseInt(prompt("Please enter First10 value "));
let b = parseInt(prompt("Please enter Second value "));
let c = a + b;
console.log(`The output is ${c}`);
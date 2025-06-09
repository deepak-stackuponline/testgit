const prompt = require ("prompt-sync")({sigint: true});
const x = prompt("Please enter the age"+ " ");

if (x>=18 && x<=50){
    console.log(`The person age is ${x} and he is eligible to apply for driving liscence`);
}
else{
    console.log(`The age is ${x}, so he is not eligible to apply for driving liscence`);
}
const prompt = require ("prompt-sync")({sigint: true});
let input = prompt("Please enter the Boolean"+ " ");
let boolValue = input.toLowerCase()=== "true";


function getReceipeOne(receipiename){
    return receipiename;
}

function getReceipeTwo(receipiename){
    return receipiename;
}

/*
if(boolValue){
    console.log(getReceipeOne('Pizza'));
}else{
    console.log(getReceipeTwo('Coke'));
}
    */

boolValue ? console.log(getReceipeOne('Pizza')) : console.log(getReceipeTwo('Coke'));
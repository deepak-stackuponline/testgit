//Loose Equality vs Strict Equality Operator
let age = 25;
if(age == "25"){
    console.log("valid number");
}
else{
    console.log("Invaid Number");
}

if(age === "25"){
    console.log("valid number");
}
else{
    console.log("Invaid Number");
}
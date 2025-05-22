//Function Decleration
function calcAge(birthYear){
    return 2025-birthYear;
}
const age = calcAge(1996);
console.log(age);

//Function Expression

const calcAge2 = function(birthYear){
    return 2025 - birthYear;
}
const age2 = calcAge2(2002);
console.log(age2);
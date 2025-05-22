const calcAge3 = birthYear => 2025 - birthYear;
const age2 = calcAge3(1996);
console.log(age2);


const yearsUntilRetirement = (birthYear1,name1)=>{
    const age = 2025 - birthYear1;
    return `${name1} have ${60-age} years of service left`
}
console.log(yearsUntilRetirement(1996,"Deepak"));
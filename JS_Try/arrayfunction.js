const calcAge = function(birthYear){
    return 2025 - birthYear;
}

const years = [1999,2000,2001,2002,2003];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);

    const ages = [age1, age2, age3];
    console.log(ages);

    const ageArray = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
    console.log(ageArray);
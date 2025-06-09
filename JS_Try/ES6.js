//map, filter, find, some, every, includes, indexOf, findindexOf
const personArray = [
    {
    name : 'Deepak',
    age: 28,
    country : 'India',
    },
    {
    name : 'Vijay',
    age: 24,
    country : 'Canada',
    },
    {
    name : 'Midhun',
    age: 30,
    country : 'USA',
    },
    {
    name : 'Manu',
    age: 45,
    country : 'USA',
    },
];
//MAP Array
let getALLNames = personArray.map((singlePerson, index)=>{
    return singlePerson.name;
});
console.log(getALLNames);

//Find Array
let getPersonFromUSA = personArray.find((singlePerson, index)=>{
    return singlePerson.country === "USA";
});
console.log(getPersonFromUSA);

//Filter Array
let getAllPersonFromUSA = personArray.filter((singlePerson,index)=>{
    return singlePerson.country === "USA";
});
console.log(getAllPersonFromUSA);

//Some Array
//will true if any one person age is greater than 30
let checkSomeArrayMethodWithExample = personArray.some((singlePerson,index)=>{
    return singlePerson.age > 30;
});
//console.log(checkSomeArrayMethodWithExample);

//EveryArray
//will true if every person age is greater than 30
let checkEveryArrayMethodWithExample = personArray.every((singlePerson,index)=>{
    return singlePerson.age >30;
});
//console.log(checkEveryArrayMethodWithExample);

//Includes array
const fruitsArray = ['Apple',  'Banana', 'Orange'];
//console.log(fruitsArray.includes('Apple'));

//IndexOf Array

//console.log(fruitsArray.includes('Apple'), fruitsArray.indexOf('Banana'));

//FindIndexOf
let getIndexofPersonWhoIsFromUSA = personArray.findIndex((singlePerson,index)=>{
    return singlePerson.country === "USA";
});

//console.log(getIndexofPersonWhoIsFromUSA);
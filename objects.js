//OBJECTS
let sachin = [
    "Sachin",
    "Tendulkar",
    2025-1973,
    ["Sehwag","Dravid","Ganguly","Laxman"]
];

let sachinobject = {
    firstName : "Sachin",
    lastName : "Tendulkar",
    age : 2025-1973,
    job: "Cricketer",
    friends :["Sehwag","Dravid","Ganguly","Laxman"]
};
//console.log(sachinobject);

//DOT Notation
//console.log(sachinobject.friends[3]);
//console.log(sachinobject.lastName);
//console.log(sachinobject.age);

//BRACKET Notatiom

//console.log(sachinobject["firstName"]);
console.log(sachinobject["friends"][0]);

let nameKey = "Name";
//console.log(sachinobject["first" + nameKey]);
//console.log(sachinobject["last" + nameKey]);

sachinobject.nationality = "Indian";
//console.log(sachinobject);

sachinobject["battingStyle"] = "Right Handed";
//console.log(sachinobject);
let students=[
    {name : "Deepak", marks : 200},
    {name : "Vivek", marks : 180},
    {name : "Priya", marks : 150},
    {name :"Shanu", marks : 110},
    {name: "Shoba", marks: 90}
];

function ifFailed(student){
    return student.marks <=150;
}

let result = students.filter(ifFailed);
console.log(result);
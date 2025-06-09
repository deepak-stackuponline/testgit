//Defining Explicit Types in TypeScript
// This code demonstrates how to define explicit types in TypeScript for variables, arrays, and objects.
let userName: string = "John Doe";
let userAge:number = 30;
let isActive: boolean = true;
let skills: string[] = ["JavaScript", "TypeScript", "Node.js"];
let multiTypeArray: (string | number | boolean)[] = ["Alice", 28, true, "Bob", 30, false];



let age:number[] = [25, 30, 35];
let emptyArray: string[] = [];
let userDetails: { name: string; age: number; active: boolean } = {
    name: userName,
    age: userAge,
    active: isActive
};
console.log(userName);






// let userDetails: { name: string; age: number; active: boolean } = {
//     name: userName,
//     age: userAge,
//     active: isActive
// };  
// let userList: Array<{ name: string; age: number; active: boolean }> = [
//     { name: "Alice", age: 25, active: true },
//     { name: "Bob", age: 28, active: false }
// ];  
// function greetUser(user: { name: string; age: number; active: boolean }): string {
//     return `Hello, ${user.name}! You are ${user.age} years old and your account is ${user.active ? "active" : "inactive"}.`;
// }   
// console.log(greetUser(userDetails));
// console.log(userList.map(user => greetUser(user)).join("\n"));
// console.log("User Details:", userDetails);
// console.log("User List:", userList);    
let colors = ["red","blue","Black"];
let i;
colors.push("green");
console.log(colors);

colors.unshift("Yellow");
console.log(colors);

colors.pop();
console.log(colors);

console.log(colors.length);


let index = colors.indexOf("red");
colors.splice(index, 0);
console.log(colors);
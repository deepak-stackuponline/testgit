let colors = ["red","blue","Black"];
let count=0,i;
colors.push("green");
console.log(colors);

colors.unshift("Yellow");
console.log(colors);

colors.pop();
console.log(colors);

for(i=0; i<colors.length;i++){
    count = count + i;
    
}
console.log(count);

let index = colors.indexOf("red");
colors.splice(index, 0);
console.log(colors);
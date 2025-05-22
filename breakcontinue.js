let fruits = ["marngo", "orange", "apple", "Kiwi", "Pear"];

for(let i=0; i<=fruits.length-1;i++){
    if(fruits[i]=="apple"){
        continue;
    }
console.log(fruits[i]);
}
console.log("first loop Ended");

for(let i=0; i<=fruits.length-1;i++){
    if(fruits[i]=="apple"){
        break;
    }
console.log(fruits[i]);
}

console.log("Second loop ended");


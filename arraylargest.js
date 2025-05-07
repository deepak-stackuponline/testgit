let marks = [1,2,3,4,5];
let largest = marks[0];
let i;
for (i=0; i<marks.length;i++){
    if(marks[i] > largest){
        largest = marks[i];
    }
}
console.log(largest);

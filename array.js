let marks = [1,2,3,4,5,6,7,8,9,10];
let sum=0;
let i;
let oddsum = 0, evensum = 0;
let avg;

for(i=0;i<marks.length;i++){
    sum = sum + marks[i];
}
console.log("Total Sum is "+sum);

for(i=0;i<marks.length;i++)
{
    if(marks[i]%2 == 0){
    oddsum = oddsum + marks[i];
}
else{
    evensum = evensum + marks[i];   
}
}
console.log("Odd Sum is "+evensum);
console.log("Even sum is "+oddsum);
avg=sum/(marks.length);
console.log("Average is "+ avg);
console.log("Length of Array is "+marks.length);

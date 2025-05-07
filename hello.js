let marks = [1,2,4,5,6,7,8,9,0,12,13,14,15,24,27,29,31,36,40,41, 45, 48, 50,55,52,53,51,51,51,51,50];
let evensum=0, oddsum=0;
let oddcount=0, evencount=0;

for(i=0;i<marks.length;i++){
    if(marks[i]%2 == 0){
       // console.log("Even Number is "+marks[i]);
        evensum = evensum + marks[i];
        evencount = evencount + 1;
    }
    else{
        console.log("Odd number is "+marks[i]);
        oddsum = oddsum + marks[i];
        oddcount=oddcount +1;
        
    }

}
console.log(evencount);
console.log(oddcount);
console.log(oddsum);
console.log(evensum);

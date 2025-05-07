let marks = [-1,-2,-3,0,1,2,3,4,5,-200];
smallest = marks[0];

for(let i=0; i<marks.length;i++){
    if(marks[i]<smallest){
        smallest = marks[i];
    }
}
console.log(smallest);
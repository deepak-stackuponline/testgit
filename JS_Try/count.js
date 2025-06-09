let num = 400012;
let count = 0;

if(num == 0){
    count = 1;
}
else{
    while(num!=0){

    
    count = count + 1;
    num = Math.floor(num/10);
    }
}
console.log(count);


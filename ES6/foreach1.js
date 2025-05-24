function squareNumber(element){
    let squared = element* element;
    let cubed = element * element * element;
    console.log(`Number : ${element} squared ${squared}`);
    console.log(`Number : ${element} cubed ${cubed}`);
}

let numbers = [1,2,3,4,5];
numbers.forEach(squareNumber);
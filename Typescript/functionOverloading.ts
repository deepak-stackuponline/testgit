//Function Overloading in TypeScript
//In TypeScript, function overloading means you declare multiple function signatures for the same function name, allowing different parameter types or counts.
//Function Overloading in TypeScript

// Overload signatures
function add(num1: number, num2: number): number;
function add(num1: string, num2: string): string;

// Implementation
function add(num1: any, num2: any): any {
    return num1 + num2;
}

console.log(add(5, 10));         // 15
console.log(add("5", "10"));     // "510"
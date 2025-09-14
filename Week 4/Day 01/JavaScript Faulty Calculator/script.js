// Faulty Calculator

// const Calculator = (a, b, c,oper) => {
//     let random = Math.random();
//     console.log(`Random number generated: ${random}`);
//     let result = (random >0.1 && oper == "+")? (a + b + c) :
//                 (random > 0.1 && oper == "-")? (a - b - c) :
//                 (random > 0.1 && oper == "*")? (a * b * c) :
//                 (random > 0.1 && oper == "/")? (a / b / c) :
//                 (random > 0.1 && oper == "%")? (a % b % c) :
//                 (random > 0.1 && oper == "**")? (a ** b ** c) : 
//                 (random <0.1 && oper == "+")? (a + b - c) :
//                 (random < 0.1 && oper == "-")? (a - b + c) :
//                 (random < 0.1 && oper == "*")? (a * b / c) :
//                 (random < 0.1 && oper == "/")? (a / b * c) :
//                 (random < 0.1 && oper == "%")? (a % b + c) :
//                 (random < 0.1 && oper == "**")? (a ** b / c) :"Invalid operation";
//     return result;
                
  
// }

// let a = prompt("Enter first number:");
// let b = prompt("Enter second number:");  
// let c = prompt("Enter third number:");
// let oper= prompt("Enter Operator");
// let result = Calculator(a, b, c,oper);
// console.log(`The result of ${a} ${oper} ${b} ${oper} ${c} is: ${result}`);

//Calculate Factorial 
let factorial = (n) =>{
   return (n < 0) ? "Factorial is not defined for negative numbers" :
   (n === 0 || n === 1) ? 1 : n * factorial(n - 1);
}

let answer = factorial(10000);
console.log(`My love for her is like a factorial of 10000: ${answer}`);
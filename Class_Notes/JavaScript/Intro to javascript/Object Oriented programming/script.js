console.log("Hello World") //____________------Prototype based Language------------?//
//Javascript Classes

 //--------------------------// Abstraction // Polymorphism // Inheretance // Encaplucation----------------------//
 // Ananymous class
 // Normal Class

 // console.log("Hello World");


// JS Classes

// let calculator = {
//     firstNumber: 0,
//     operand: '+',
//     secondNumber: 0,
//     result: 0,
//     displayResult(){
//         console.log("The result of the calculator is: " + this.result);
//     },
//     calculate() {
//         let result;
//         let firstNumber = this.firstNumber
//         let secondNumber = this.secondNumber;
//         let operand = this.operand
//         if (operand == "+") {
//             result = firstNumber + secondNumber;
//           } else if (operand == "-") {
//             result = firstNumber - secondNumber;
//           } else if (operand == "*") {
//             result = firstNumber * secondNumber;
//           } else {
//             result = firstNumber / secondNumber;
//           }
//           this.result = result
//           this.displayResult()
//     },
//     initiatePrompts(){
//         let firstNumber = prompt("Please choose your first number:");
//         this.firstNumber = firstNumber;
//         let operand = prompt(
//         "Please choose your operator from the following choices: '+', '-', '*', '/'"
//         );
//         this.operand = operand;
//         let secondNumber = prompt("Please choose your second number:");
//         this.secondNumber = secondNumber;
//         this.calculate()
//     }
// }
// calculator.initiatePrompts()





// class Calculator {
//     constructor(firstNumberArg, operand, secondNumber, result = 0){
//         this.firstNumber = firstNumberArg
//         this.operand = operand
//         this.secondNumber = secondNumber
//         this.result = result
//     }

//     displayResult(){
//         console.log("The result of the calculator is " + this.result)
//     }

//     calculate(){
//         let result;
//         let firstNumber = this.firstNumber
//         let secondNumber = this.secondNumber;
//         let operand = this.operand
//         if (operand == "+") {
//             result = firstNumber + secondNumber;
//           } else if (operand == "-") {
//             result = firstNumber - secondNumber;
//           } else if (operand == "*") {
//             result = firstNumber * secondNumber;
//           } else {
//             result = firstNumber / secondNumber;
//           }
//           this.result = result
//           this.displayResult()
//     }

//     initiatePrompts(){
//         let firstNumber = prompt("Please choose your first number:");
//         this.firstNumber = firstNumber;
//         let operand = prompt(
//         "Please choose your operator from the following choices: '+', '-', '*', '/'"
//         );
//         this.operand = operand;
//         let secondNumber = prompt("Please choose your second number:");
//         this.secondNumber = secondNumber;
//         this.calculate()
//     }
// }

// let calc = new Calculator(0,'+',0,0)

// calc.initiatePrompts()



// let car1 = {
//     year: 2024,
//     brand: 'chevrolet',
//     price: 55000,
//     preowned: false,
//     color: "white"
// }

// let car2 = {
//     year: 2025,
//     brand: 'chevrolet',
//     price: 40500,
//     preowned: false,
//     color: "red"
// }


class Car {
    constructor(yearArg, brandArg, price, preowned = false, color) { // The first method that runs by default anytime a new isntance of this class is instantiated
        console.log('I am the constructor')
        this.year = yearArg
        this.brand = brandArg
        this.price = price
        this.preowned = preowned
        this.color = color
    }

    discountPrice(){
        this.price -= 1000
    }

    
}


class Motorcycle extends Car { // This is an example of inheritance
    
    myProperty = 1;
    #myPrivateProperty = 2;
    
    constructor(yearArg, brandArg, price, preowned = false, color, numOfWheels = 2){
        super(yearArg, brandArg, price, preowned, color) // Super will invoke the constructor of the parent class
        this.numOfWheels = numOfWheels
    }

    discountPrice(){
        this.price -= 500
    }

    static displayName(){
        console.log("Motorcycle Class")
    }

}

let moto = new Motorcycle(2023, "Honda", 14000, false, 2)

moto.discountPrice()

Motorcycle.displayName()

console.log(moto.myPrivateProperty)


// let car3 = new Car(2025, 'chevrolet', 39000, true, 'blue') // We are creating a new instance of the Car class
// console.log(car2)
// console.log(car3)

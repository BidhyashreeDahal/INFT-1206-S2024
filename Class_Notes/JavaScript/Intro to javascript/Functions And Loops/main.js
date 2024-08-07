//-------------Loops---------------//
//console.log("Script is running....")
// For loops
// for( let i= 0; i<10; i++){
//     console.log[i]
// }
// 
// let i = 0;
// while(i <= 20){
//     console.log[i]
//     i += 3

// Do while loop
// let i =0;
// do{
//     console.log(i)
//     i+=3;
// }while(i<=20)
//------For Of loop
// let numArray = [1,2,3,4,5,6,7]
// for(let num of numArray){
//     console.log(num)
// }

// // For In loop
// let car = {type:"Hypercar", brand:"Porshe", model:'Spyder'}
// for(let key in car){
//     console.log(key)
//     console.log(car[key])
// }
// --------------------Functions-------------------------
// Take 2 number the input and return the sum
//()   ->commonly used when envoking the function or method
// function sumOfTwoNumber(num1, num2){
//     let num1 =5
//     let num2 = 2
//     return num1 + num2
//     //Body of the function
// }
// let c = sumOfTwoNumber()
// let d = sumOfTwoNumber(4,6)
// console.log(c)
// console.log(d)



// +++++++Function declaration+++++++++++++++// Hoisting (Scope of the function becomes global)
// function sum(a,b){
//     return a + b
// }
// console.log(sum(1,2))



//++++++++++++Function Expression++++++++++
// let sum = function(){
//     return a+b
// }
// console.log(sum(5,7))



 
//******************Arrow Function****************************//
// let sum =(a,b)=> a+b// Behaves like a variable you cant call it out of the scope
// console.log(sum(5,10))


//------------ClosedFunction---------------------------------//
// let a = 5// Defined in the global scope
// function closedScope(){
//     let a = 5  // Enclosed in the local function scope
// }
// console.log(a)


// Closure
// let x = 10
// function outerFunction(){
//     let x = 5// Defined in a lexical scope
//     function innerFunction(){
//         console.log(x)
//     }
//     innerFunction()
// }
// outerFunction()

                    // 
///1. Write a function that display the number from 1 to 999.

function displayNumbers(){
    for(count=1; count<=999; count++){
        console.log(count)
    }
}
//displayNumbers()
//2. Write a function that will display all the even number from 1 to 999.
function displayEvenNumber(){
    for(count=1; count<=999; count++){
        if(count%2 ==0){
            console.log(count)
        }
    }
}
//displayEvenNumber()
// 3. Write a function that will display divisible by 7 from 1 to 999
function displayNumberDivisibleBySeven(){
    for(count=1; count<=999; count++){
        if(count % 7 == 0){
            console.log(count)
        }
    }
}
//displayNumberDivisibleBySeven()

//4.Write a function that will iterate through an object and display all of it's keys and value.
let obj ={key1: "value1",key2: "value2", key3: "value3"}
function objectIterative(){
    console.log(Object.entries(obj))
}
//objectIterative()
//5.Write a function that will iterate througth a number array and display all of it's element.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// function displayElement(){
//     for(count in arr){
//         console.log(arr[count])
//     }
// }
// displayElement()
//6.Write a function that will iterate through a numbers array and add 1 to each of it's values.
let arr = [1,2,3,4,5,6,7,8,9,10]
function displayElementAdd(){
    for(count in arr){
        console.log(arr[count]+1)
    }
}
//displayElementAdd()
//7.Write a function that will iterate a prompt where you write the name of the month and it will return(log) 
//which season the month is in.
let season = prompt("Which is this season?:")
function displaySeason(){
    if (season=="january" ||season=="february"|| season =="december"){
        console.log("winter")
    }
    if (season=="march" ||season=="april"|| season =="may"){
        console.log("spring")
    }
    if (season=="june" ||season=="july"|| season =="august"){
            console.log("summer")}
    if(season=="september"|| season=="october"){
        console.log("fall")
    }
}
displaySeason()

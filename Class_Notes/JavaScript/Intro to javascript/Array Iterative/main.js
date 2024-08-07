// console.log("Hello")
// const arr = [1,2,3,4,5]
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }
// arr.forEach(
//     function logNumber(num){
//         console.log(num)
//     }
// )

//arr.forEach(num => console.log(num))
// arr.forEach((element,indexOfElement,
//     array) => {// Always takes 3 arguments
//     console.log(element)
//     console.log(indexOfElement)
//     console.log(array)
// })

//     console.log(foodItem.name)
// })

// //map      --------------> Mutable
// const foodTypes = foods.map((foodItem, index )=>{
//     return(foodItem.calories+800)
// })

// //------------------------------Filter Element--------------------------------//
// const foodsUnder100Carlories= foods.filter(foodItem =>foodItem.calories <100)

// //-------------------------------Find-----------------------------//
// const Mango = foods.find(foodItem=>{// Only return one item
//     return foodItem.name = "Mango"
// })


// const Banana = foods.findIndex(foodItem=>{// Only return one item
//     return foodItem.name = "Mango"
// })


//-------------------------------Exercise---------------------------//


const foods = [
    {name:"Apple", type:"fruit", calories:95},
    {name:"Banana", type:"fruit", calories:45},
    {name: "Mango", type:"vegetable", calories: 35}
]
// Get an array of food types using map();
const food = foods.map((foodItem) =>{   //[ MAP =>]//
    return foodItem.type

})
console.log(food)
// Filter foods with calories greater than 100;
const foodsUnder100Carlories = foods.filter(foodItem =>{
    return foodItem.calories < 100
})
console.log(foodsUnder100Carlories)

// Find the first fruit in the array
let firstFruit = foods.find(foodItem =>{
    return foodItem.type = "fruit"
}) 
console.log(firstFruit)
// Check if there is any food with the name "Apple"
let findFood = food.some(foodItem =>{
    return foodItem.name ="Apple"
})
console.log(firstFruit)
// Check if all foods have calories less than 700
const allFood = food.every(foodItem =>{
    return foodItem.calories < 700
})
// Calculate the average calories of all foods using reduce()
// Sort foods alphabetically by name using sorts()
// Create an array of food names with their types as a string, ex.
//["Apple ia a fruit", "Banana is a fruit", etc.....]
// Filter foods that are fruits
// Find the index of "Alligator Pears"

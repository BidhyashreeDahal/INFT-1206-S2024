
console.log("Script is running.....");
// Objects => MDN
// Arrays=> MDN
let car = {
    type:"Supercar",//type=>KEY, Supercar =>VALUE
    brand:"Porshe",
    model:"Spyder",
    year:"2023",
    color:"red hot",
    SubCar:{
        brand:"Rimac",
        color:"blue"
    },
    numArray:[1,2,3],
    startEngine: function(){
        console.log("Engine started")
    }
}
    //car.brand=car // This is an example of circular refrance => When an object reference itself
    // console.log(car)
    // console.log(car.brand)//Porsche
    // console.log(car[brand])//Porsche
    // console.log(car.SubCar.brand)//Rimac
    // console.log(car["SubCar"]["brand"])// Rimac
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));// Both key and value
//-----------Arrays----------------//

let num = 5;
let classSubject = 'javascript';
let isCodingFun = true
let mixArray =[5,'javascript', true, {key1:"value1"}, [1,2,3],()=>{}]
let numArray =[1,2,3]
numArray.push(5)// Append the 5 to the end of the array
numArray.pop()// Will remove the element in the end of the array
console.log(numArray.length)
console.log(numArray[1])
numArray.shift()// Will remove or delete the element at the beginning of the array
numArray.unshift(5)// Will append 5 at the beginning of the array
console.log(numArray.concat(mixArray))//Combine
console.log(mixArray.splice(4,1,"python"))//
console.log(mixArray.join("---->"))
let copyOfMixArray = [...mixArray]//...The JavaScript spread operator (...) expands an iterable (like an array) into more elements.
// copy the contents of iterable objects on javaScrpt.
 
//-----------Functions-------------//
//-----------Loops-----------------//
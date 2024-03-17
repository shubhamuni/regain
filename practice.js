// import data from "D:/test/regain/practice.json"
// Pass by value and pass by reference
const obj = {
    a:"a",
    b:"b",
    c:"c",
    d:{
        deep:"deep inside object then d",
        start:"And another property value pair"
    }
}

const square = (x)=>x**2;
const cube = (y)=>y**3;

const obj1 = Object.assign({},obj);
const obj2 = {...obj}
const obj3 = JSON.parse(JSON.stringify(obj));
obj.d.deep = "value changed"

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log("Square",square(3));
console.log("Cube",cube(3));
// const parse = JSON.parse(data)
// console.log(parse);

const flat = [1,[2,3,4,[5,6]],7];
console.log(flat.flat(3));

const detailedBasket = {
    apple:5,
    banana:3,
    oranges:10,
    grapes: 1000
}
for (item in detailedBasket){
    console.log(item)
}










// // Reference types
// const object1 = {value:10};
// const object2 = object1;   //object1 === object2 return true because the object referencing to the same memory location as object1.
// const object3 = {value:10}; //object3 === object1 return false  because the memory location of object1 and object3 is different despite of these values are same.

// // Instantiation

// class Player {
//     constructor(name, type) {
//         this.name = name
//         this.type = type
//     }
//     introduction() {
//         console.log(`Hello ${this.name} i'm a ${this.type}`)
//     }
//     who(){
//         console.log(`You are a "${this.type}" in this game.`)
//     }
// };
// class Wizard extends Player {
//     constructor(name,type){
//         super(name,type)
//     }
//     play(){
//         console.log(`Hello player ${this.name} you want to play ${this.type} type f games!!`);
//     }
//     sayHello() {
//         console.log(`Hello ${this.name} you are welcome to javascript practice.`)
//     }
// };
// const player1 = new Wizard("Shubham", "Developer");
// player1.introduction();
// player1.sayHello();
// player1.who();








// // Example of basic map function
// const array = [1,2,4,7,6,8,9,3,5];
// const double = [];
// const newArray = array.map(element => element*2);
// console.log(newArray)
// //Examples of map, filter and reduce
// const users = [
//     {firstName:"Shubham",lastName:"Patil",age:25},
//     {firstName:"Akshay",lastName:"Kumar",age:58},
//     {firstName:"Akshay",lastName:"Saini",age:25},
//     {firstName:"Elon",lastName:"Musk",age:54},
//     {firstName:"Sunil",lastName:"Shetty",age:35},
// ]

// //Firstly the output of array via map
// const outputMap = users.map(x => x.firstName+" "+x.lastName);
// console.log("Below array is created by map method");
// console.log(outputMap);

// //And the filter 
// const outputFilter = users.filter((x) => x.age > 30);
// console.log("Below array is created by filter method");
// console.log(outputFilter);


// //And filter with map
// const outputFilterWithMap = users.filter((x) => x.age > 30).map(x => x.firstName +" "+ x.lastName);
// console.log("Below array is created by filter method");
// console.log(outputFilterWithMap);


// //Array is used in reduce method 
// const outputReduce = users.reduce(function(acc, cur){
//     if(acc[cur.age]){
//         acc[cur.age] = ++acc[cur.age]
//     }
//     else{
//         acc[cur.age] = 1;
//     }
//     return acc
// },{});
// console.log(outputReduce);

// //Filter and map replacing reduce 
// const outputAttach = users.reduce(function(acc, cur){
//     if(cur.age < 30){
//         acc.push(cur.firstName)
//     }
//     return acc;
// },[]);
// console.log(outputAttach);

// //compose

// const compose = (f, g) => (a) => f(g(a));

// const powerOf = (x) => x*x;

// const compoutput = compose(powerOf, powerOf)(1);
// console.log(compoutput);


// const array = [2,1,4,3,7,8,9,5];

// function isOdd(x) {
//     return x % 2;
// }

// const out = array.filter(isOdd)
// console.log(out)


// const radius = [3,2,1,4];

// const area = function (radius) {
//     return Math.PI*radius*radius;
// };

// const circumference = function (radius) {
//     return 2*Math.PI*radius;
// }
// const diameter = function (radius){
//     return 2*radius;
// }

// //This below function is also converted as same as map method

// Array.prototype.calculate = function (logic) {
//     const output = [];
//     for(let i = 0; i < this.length; i++){
//         output.push(logic(this[i]))
//     }
//     return output;
// };

// This below function is also converted as same as map method
// function calculateArea(x,logic) {
//     const output = [];
//     for(let i = 0; i < x.length; i++){
//         output.push(logic(x[i]))
//     }
//     return output;
// };

// area of a circle is also can be calculated by array.map method as below
// console.log(radius.map(area));

// console.log(radius.calculate(area));
// console.log(radius.calculate(circumference));
// console.log(radius.calculate(diameter));








// console.log("Start");

// function cb() {
//     console.log("Callback called")
// }
// setTimeout(cb, 1000);

// console.log("End calling")

// let start = new Date().getTime();
// let end = start;

// while(end < start + 7000){
//     end = new Date().getTime();
// }
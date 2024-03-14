//Examples of map, filter and reduce
const users = [
    {firstName:"Shubham",lastName:"Patil",age:25},
    {firstName:"Akshay",lastName:"Kumar",age:58},
    {firstName:"Akshay",lastName:"Saini",age:25},
    {firstName:"Elon",lastName:"Musk",age:54},
    {firstName:"Sunil",lastName:"Shetty",age:35},
]

//Firstly the output of array via map
const outputMap = users.map(x => x.firstName+" "+x.lastName);
console.log("Below array is created by map method");
console.log(outputMap);

//And the filter 
const outputFilter = users.filter((x) => x.age > 30);
console.log("Below array is created by filter method");
console.log(outputFilter);


//And filter with map
const outputFilterWithMap = users.filter((x) => x.age > 30).map(x => x.firstName +" "+ x.lastName);
console.log("Below array is created by filter method");
console.log(outputFilterWithMap);


//Array is used in reduce method 
const outputReduce = users.reduce(function(acc, cur){
    if(acc[cur.age]){
        acc[cur.age] = ++acc[cur.age]
    }
    else{
        acc[cur.age] = 1;
    }
    return acc
},{});
console.log(outputReduce);

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
const radius = [3,2,1,4];
const area = function (radius) {
    Math.PI*radius*radius;
}

function calculateArea(x) {
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(Math.PI * x[i]* x[i])
    }
    return output;
}
console.log(calculateArea(radius));








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
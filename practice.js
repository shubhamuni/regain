console.log("Start");

function cb() {
    console.log("Callback called")
}
setTimeout(cb, 1000);

console.log("End calling")

let start = new Date().getTime();
let end = start;

while(end < start + 7000){
    end = new Date().getTime();
}
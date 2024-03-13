console.log("Start");

function cb() {
    console.log("Callback called")
}
setTimeout(cb, 1000);

console.log("End calling")
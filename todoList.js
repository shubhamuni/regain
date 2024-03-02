let button = document.getElementById("enter")
let input = document.getElementById("userinput")
let ul = document.querySelector("ul");

let appendList = function(event) {
    // console.log(event)
    if (input.value.length > 0 && event.key === "Enter"){
        let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value ="";
    }
}
    

button.addEventListener("click",appendList)
input.addEventListener("keydown",appendList)

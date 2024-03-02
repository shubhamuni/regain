let button = document.getElementById("enter")
let input = document.getElementById("userinput")
let ul = document.querySelector("ul");
let appendList = function() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
}

button.addEventListener("click",appendList)

let button = document.getElementById("enter")
let input = document.getElementById("userinput")
let ul = document.querySelector("ul");

function createListItem() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value ="";
}

let addListAfterClick = function() {
    if (input.value.length > 0){
        createListItem();
    }
}
let addListAfterEnter = function(event) {
    // console.log(event)
    if (input.value.length > 0 && event.key === "Enter"){
        createListItem();
    }
}
    
    
button.addEventListener("click",addListAfterClick)
input.addEventListener("keydown",addListAfterEnter)

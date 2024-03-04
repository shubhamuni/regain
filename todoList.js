let button = document.getElementById("enter")
let input = document.getElementById("userinput")
let ul = document.querySelector("ul");

function createListItem() {
    let delButton = document.createElement("button");   
    let div = document.createElement("div");
    let li = document.createElement("li");
    div.append(li, delButton);
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(div);
    input.value ="";
    delButton.classList.add("delClass");
	delButton.innerHTML='Del';
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
function doneTask(task) {
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}
function deleteListElement(element) {
	if (element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}
function handleTodos(element) {
    doneTask(element);
    deleteListElement(element);
}
ul.addEventListener("click",handleTodos)
button.addEventListener("click",addListAfterClick)
input.addEventListener("keydown",addListAfterEnter)

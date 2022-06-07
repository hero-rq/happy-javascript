const toDoform = document.getElementById("todo-form");
const toDoHandle = document.querySelector("#todo-form input");
const toDolist = document.getElementById("todo-list");

function PaintTodo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newToDo;
    toDolist.appendChild(li);
}

function toDoHandlerSubmit(event) {
    event.preventDefault();
    const newToDo = toDoHandle.value;
    toDoHandle.value = "";
    PaintTodo(newToDo);
}

toDoform.addEventListener("submit", toDoHandlerSubmit);

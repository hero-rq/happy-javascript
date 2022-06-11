const toDoform = document.getElementById("todo-form");
const toDoHandle = document.querySelector("#todo-form input");
const toDolist = document.getElementById("todo-list");

const doingKey = "todo";

let toDos = [];

function SaveTodo(){
    localStorage.setItem(doingKey, JSON.stringify(toDos));
}

function returnTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function PaintTodo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = " / return";
    button.addEventListener("click", returnTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDolist.appendChild(li);
}

function toDoHandlerSubmit(event) {
    event.preventDefault();
    const newToDo = toDoHandle.value;
    toDoHandle.value = "";
    toDos.push(newToDo);
    PaintTodo(newToDo);
    SaveTodo();
}

toDoform.addEventListener("submit", toDoHandlerSubmit);

const savedTodo = localStorage.getItem(doingKey);
if (savedTodo != null) {
    const parsedTodo = JSON.parse(savedTodo);
    toDos = parsedTodo;
    console.log(parsedTodo);
    parsedTodo.forEach(PaintTodo);
}

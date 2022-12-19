let header = document.getElementById("header");
let list = document.getElementById("list");
let todayDate = new Date();
let list_lists = [];

header.innerHTML = `<h1>ToDo list app</h1><div id="header_date_and_ltasks"><p>Today date: ${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()}</p><p id="header_left_tasks"> </p></div><div id="header_task"><input id="header_task_input" placeholder="Enter task name"></input><button id="header_task_button">Add ToDo</button></div>`;
list.innerHTML = `<h1 id="list_h1">ToDo lists</h1>`

let header_left_tasks = document.getElementById("header_left_tasks");

function addToDolist() {
    if (header_task_input.value.length > 0) {
        list_lists.push(header_task_input.value);
        let ToDo;
        for (let j = 0; j < list_lists.length - 1; j++) {
            list.removeChild(list.lastChild);
        }
        for (let i = 0; i < list_lists.length; i++) {
            ToDo = document.createElement("div");
            ToDo.className = "ToDo"
            ToDo.innerHTML = `<div class="ToDo_name">${list_lists[i]}</div><i class="fa-solid fa-pen edit${i} icons" onclick="edit()"></i><i class="fa-regular fa-square-check checkmark${i} icons" onclick="checkMark()"></i><i class="fa-solid fa-trash-can remove${i} icons remove" onclick="removeParent()"></i>`;
            list.appendChild(ToDo);
        }
        ToDo.class = "ToDo";
        header_task_input.value = "";

        if (list_lists.length > 0) {
            header_left_tasks.innerHTML = `${list_lists.length} task left`;
        } else {
            header_left_tasks.innerHTML = "";
        }
    }
}

header_task_button.addEventListener("click", addToDolist);

let editBtn = document.querySelector("#edit");
let checkMarkBtn = document.querySelector("#checkmark");
let removeBtn = document.querySelector("#remove");

function edit() {
    event.srcElement.parentElement.innerHTML = `<div class="ToDo_name1">${event.srcElement.previousElementSibling.innerHTML}</div><i class="fa-solid fa-floppy-disk" onclick="save()"></i><i class="fa-regular fa-square-check icons" onclick="checkMark()"></i><i class="fa-solid fa-trash-can icons remove" onclick="removeParent()"></i>`;
    header_task_input.value = `${event.srcElement.previousElementSibling.innerHTML}`;
}
function checkMark() {
    event.srcElement.previousElementSibling.previousElementSibling.style.textDecorationLine = "line-through"
}
function removeParent() {
    event.srcElement.parentElement.remove();
    if (document.getElementsByClassName("ToDo").length > 0) {
        header_left_tasks.innerHTML = `${document.getElementsByClassName("ToDo").length} task left`;
    } else {
        header_left_tasks.innerHTML = "";
    }
}
function save() {
    event.srcElement.parentElement.innerHTML = `<div  class="ToDo_name">${event.srcElement.previousElementSibling.value}</div><i class="fa-solid fa-pen icons" onclick="edit()"></i><i class="fa-regular fa-square-check icons" onclick="checkMark()"></i><i class="fa-solid fa-trash-can icons remove" onclick="removeParent()"></i>`;
}


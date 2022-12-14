let header_h1 = document.createElement("h1");
let header_date_and_ltasks = document.createElement("div");
let header_date = document.createElement("p");
let header_left_tasks = document.createElement("p");
let header_task = document.createElement("div")
let header_task_input = document.createElement("input");
let header_task_button = document.createElement("button");
let list_h1 = document.createElement("h1");
let list_lists = [];
let header = document.getElementById("header");
let list = document.getElementById("list");
let todayDate = new Date();

let divIDname;

header_h1.innerHTML = "ToDo list app";
header_date.innerHTML = `Today date: ${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()}`;
header_task_button.innerHTML = "Add ToDo";
list_h1.innerHTML = "ToDo lists";
header_date_and_ltasks.id = "header_date_and_ltasks";
header_task.id = "header_task";
header_task_input.id = "header_task_input";
header_task_button.id = "header_task_button";
list_h1.id = "list_h1";
header_task_input.placeholder = "Enter task name"

header.appendChild(header_h1);
header.appendChild(header_date_and_ltasks);
header_date_and_ltasks.appendChild(header_date);
header_date_and_ltasks.appendChild(header_left_tasks);
header.appendChild(header_task);
header_task.appendChild(header_task_input);
header_task.appendChild(header_task_button);
list.appendChild(list_h1);

function addToDolist() {
    list_lists.push(header_task_input.value);
    let ToDo;
    for (let j = 0; j < list_lists.length - 1; j++) {
        list.removeChild(list.lastChild);
    }
    for (let i = 0; i < list_lists.length; i++) {
        ToDo = document.createElement("div");
        ToDo.className = "ToDo"
        ToDo.innerHTML = `<div class="ToDo_name">${list_lists[i]}</div><i class="fa-solid fa-pen edit${i} icons"></i><i class="fa-regular fa-square-check checkmark${i} icons" onclick="checkMark()"></i><i class="fa-solid fa-trash-can remove${i} icons remove"></i>`;
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

header_task_button.addEventListener("click", addToDolist);

let editBtn = document.querySelector("#edit");
let checkMarkBtn = document.querySelector("#checkmark");
let removeBtn = document.querySelector("#remove");

function edit() {

}
function checkMark() {
    event.srcElement.previousElementSibling.previousElementSibling.style.textDecorationLine = "line-through"
}
// function remove() {
//     let delete;
//     for (let l = 0; l < list_lists.length; l++) {
//         delete =
//         if ()
        
//     }
// }


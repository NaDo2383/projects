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

let list_ToDo = document.createElement("div");
let list_ToDo_Name = document.createElement("p");
let list_ToDo_icons = document.createElement("div");
let list_ToDo_icon1 = document.createElement("i");
let list_ToDo_icon2 = document.createElement("i");
let list_ToDo_icon3 = document.createElement("i");
let divIDname;

header_h1.innerHTML = "ToDo list app";
header_date.innerHTML = `Today date: ${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()}`;
header_left_tasks.innerHTML = "1 task left";
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
list_ToDo.appendChild(list_ToDo_Name);
list_ToDo.appendChild(list_ToDo_icons);
list_ToDo_icons.appendChild(list_ToDo_icon1);
list_ToDo_icons.appendChild(list_ToDo_icon2);
list_ToDo_icons.appendChild(list_ToDo_icon3);

function addToDolist() {
    list_lists.push(header_task_input.value);
    for (let i = 0; i < list_lists.length; i++) {
        list_ToDo_Name.innerHTML = list_lists[i];
        let ToDo = document.createElement("div");
        ToDo.innerHTML = "<div class='ToDo' id='${ i}'></div>";

    }

    header_task_input.value = "";
}

header_task_button.addEventListener("click", addToDolist);

let input = document.querySelector("#input");
let table = document.querySelector("#table");


input.innerHTML = `<input id="firstName" placeholder="Enter first name"></input><input id="lastName" placeholder="Enter last name"></input><select id="gender"><option>Male</option><option>Female</option></select><input type="number" id="score" placeholder="Enter score"></input><button>Enter</button>`;
table.innerHTML = `<div id="scoreEl"></div>`

let array = [];
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let score = document.querySelector("#score");
let gender = document.querySelector("#gender");
let row = "";

function addElToArray() {
    let studentscore = { firsname: firstName.value, lastname: lastName.value, gender: gender.value, score: score.value };
}

function addElToTable() {
    let scoreEl =
}
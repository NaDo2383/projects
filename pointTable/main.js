let input = document.querySelector("#input");
let table = document.querySelector("#table");


input.innerHTML = `<input id="firstName" placeholder="Enter first name"></input><input id="lastName" placeholder="Enter last name"></input><select id="gender"><option>Male</option><option>Female</option></select><input type="number" id="score" placeholder="Enter score"></input><button onclick="addElToArray(event)">Enter</button>`;


let array = [];
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let score = document.querySelector("#score");
let gender = document.querySelector("#gender");


function addElToArray(event) {
    event.preventDefault();

    if (firstName.value.length == 0 || lastName.value.length == 0 || score.value.length == 0 || gender.value.length == 0) {
        alert("Fill all field pls");
    } else {
        let studentscore = { firsname: firstName.value, lastname: lastName.value, gender: gender.value, score: score.value };
        array.push(studentscore);
        addElToTable();
        firstName.value = "";
        lastName.value = "";
        score.value = "";
        // event.preventDefault();
    }

}

function addElToTable() {
    let row = `<div style="display:flex">
    <div class="tablefirstname">firstname</div>
    <div class="tablelastname">lastname</div>
    <div class="tablegender">gender</div>
    <div class="tablescore">score</div>
    </div>`;

    for (let i = 0; i < array.length; i++) {
        row += `<div style="display:flex">
        <div class="tablefirstname">${array[i].firsname}</div>
        <div class="tablelastname">${array[i].lastname}</div>
        <div class="tablegender">${array[i].gender}</div>
        <div class="tablescore">${array[i].score}</div>
        <span class="tablebutton" id="removeBtn" onclick="deleteEle(${i})" >Remove</span>
        <span class="tablebutton" id="addScoreBtn" onclick="addScore(${i})" >+5 score</span>
        </div>`
    }

    table.innerHTML = row;
}

function deleteEle(id) {
    array.splice(id, 1);
    addElToTable();
}

function addScore(id) {
    array[id].score = Number(array[id].score) + 5;
    addElToTable();
}
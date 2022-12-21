let input = document.querySelector("#input");
let table = document.querySelector("#table");


input.innerHTML = `<input id="firstName" placeholder="Enter first name"></input><input id="lastName" placeholder="Enter last name"></input><select id="gender"><option>Male</option><option>Female</option></select><input type="number" id="score" placeholder="Enter score"></input><button onclick="addElToArray()">Enter</button>`;


let array = [];
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let score = document.querySelector("#score");
let gender = document.querySelector("#gender");


function addElToArray() {
    if (firstName.value.length == 0 || lastName.value.length == 0 || score.value.length == 0 || gender.value.length == 0) {
        alert("Fill all field pls");
    } else {
        let studentscore = { firsname: firstName.value, lastname: lastName.value, gender: gender.value, score: score.value };
        array.push(studentscore);
        addElToTable();
        firstName.value = "";
        lastName.value = "";
        score.value = "";
        event.preventDefault();
    }
    event.preventDefault();
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
        <span class="tablebutton" id="removeBtn" >Remove</span>
        <span class="tablebutton" id="addScoreBtn" >+5 score</span>
        </div>`
    }

    // let rmvBtn = document.querySelector("#removeBtn");
    // rmvBtn.addEventListener("click", function () {
    //     event.srcElement.parentElement.remove();
    // })

    table.innerHTML = row;
}
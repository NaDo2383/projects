let proImg = document.getElementById("proImg");
let detEl1 = document.getElementById("detail1");
let detEl2 = document.getElementById("detail2");
detEl1.innerHTML = `
<div id="fName"><div class="sub">First Name</div><div id="fNameValue"></div></div>
<div id="lName"><div class="sub">Last Name</div><div id="lNameValue"></div></div>
<div id="gender"><div class="sub">Gender</div><div id="genderValue"></div></div>`

detEl2.innerHTML = `
<div id="eMail"><div class="sub">E-Mail</div><div id="eMailValue"></div></div>
<div id="phone"><div class="sub">Phone Number</div><div id="phoneValue"></div></div>
<div id="cell"><div class="sub">Gender</div><div id="cellValue"></div></div>`

let fName = document.getElementById("fNameValue");
let lName = document.getElementById("lNameValue");
let gender = document.getElementById("genderValue");
let eMail = document.getElementById("eMailValue");
let cell = document.getElementById("cellValue");
let phone = document.getElementById("phoneValue");



fetch("https://randomuser.me/api")
    .then((result) => result.json())
    .then((data) => {
        proImg.src = `${data.results[0].picture.large}`
        fName.innerHTML = `${data.results[0].name.first}`
        lName.innerHTML = `${data.results[0].name.last}`
        gender.innerHTML = `${data.results[0].gender}`
        eMail.innerHTML = `${data.results[0].email}`
        phone.innerHTML = `${data.results[0].phone}`
        cell.innerHTML = `${data.results[0].cell}`
    })
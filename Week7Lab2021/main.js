// get variables and inputs
let uname = document.querySelector("#uname");
let pass1 = document.querySelector("#pass1");
let pass2 = document.querySelector("#pass2");
let email = document.querySelector("#email");
let age = document.querySelector("#age");
let form = document.querySelector('#classmateform');
let error = document.querySelectorAll("p.error");
let table = document.querySelector("table");
console.log("Script loaded");
let errors = {
  unameerr: false,
  pass1err: false,
  pass2err: false,
  emailerr: false,
  age: false
};
//add button edit, del, cancel
function addeditbutton(targ) {
  let td = targ.parentElement;
  console.log(td);
  let btns = '<button class="btn btn-outline - success btn - sm update">Update</button>'
  btns += ' <button class="btn btn-outline-success btn-sm delete">Delete</button>'
  btns += ' <button class="btn btn-outline-success btn-sm cancel">Cancel</button>'
  td.innerHTML = btns;
}
function addupdateinput(targ) {

  let row = targ.closest('tr');
  console.log("row", row);
  let inputtext = '<input type="text" name="uname" id="" value="' + row.children[1].textContent+'">'
  let inputnum = '<input type = "number" id = "" value="' + row.children[2].textContent + '">';
  row.children[1].innerHTML = inputtext;
  row.children[2].innerHTML = inputnum;
}
function updaterow(targ) {
  let row = targ.closest('tr');
  let uname = row.children[1];
  let age = row.children[2];
  console.log('uname',uname);
  let newname = uname.firstChild.value;
  let newage = age.children[0].value;
  uname.innerHTML = newname;
  age.innerHTML = newage;
  uname.children[0].remove;
  age.children[0].remove;
}
function removeeditbtns(targ) {
  targ.parentElement.innerHTML = '<a href="#" class="edit">edit</a>'
}
 let editsnode = [];
table.addEventListener("click", function (e) {
  console.log('clicked');
  let targ = e.target;
  e.preventDefault();
  if (targ.classList.contains('edit')) {
    
    editsnode.push(targ.closest('tr').cloneNode(true).children);

    console.log(editsnode);

    addupdateinput(targ);
    addeditbutton(targ);
  }
  else if (targ.classList.contains('delete')) {
    targ.closest('tr').remove();
  }
  else if (targ.classList.contains('update')) {
    updaterow(targ);
  }
  else if (targ.classList.contains('cancel')) {
    console.log(editsnode);

  }


  console.log(targ);
})

// Add event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form Submitted");
  checkName();
  checkPass1();
  matchPasswords();
  checkAge();
  checkEmail();
  let formfail = false;
  // loop through errors obj to check if any errors = true
  Object.keys(errors).forEach(function (item) {
    console.log(item + ": " + errors[item]);
    if (errors[item]) {
      //if an error is found set formfail to true
      formfail = true;
    }
  })
  if (formfail) {
    alert("The form failed, please correct errors");
  } else {
    alert("form submitted successfully");
    addClassmate();
  }
});

pass1.addEventListener("keyup", function () {
  console.log("key up event");
  checkLength();
})
// Update DOM
function addClassmate() {
  let tr = document.querySelectorAll("tr");
  let newrow = table.insertRow();
  let td = "<td>" + tr.length + "</td>";
  td += "<td>" + uname.value + "</td>";
  td += "<td>" + age.value + "</td>";
  td += "<td><a href='#' class='edit'>edit</a></td>";
  console.log(td);
  newrow.innerHTML = td;
}

// Perform Functions

//check username is between 5 - 20 chars
function checkName() {
  if (uname.value.length < 5 || uname.value.length > 20) {
    errors.unameerr = true;
    error[0].style = "display:initial";
  } else {
    errors.unameerr = false;
    error[0].style = "display:none";
  }
}

function checkPass1() {
  console.log("password check 1");
  if (pass1.value.length < 10 || pass1.value.length > 20) {
    errors.pass1err = true;
    error[2].style = "display:initial";
  } else {
    errors.pass1err = false;
    error[2].style = "display:none";
  }
}

function matchPasswords() {
  if (pass1.value != pass2.value) {
    errors.pass2err = true;
    error[3].style = "display:initial";
  } else {
    errors.pass2err = false;
    error[3].style = "display:none";
  }
}

function checkLength() {
  let passlen = pass1.value.length;
  let percent = (passlen / 10) * 100;
  let progressbar = document.querySelector(".progress-bar");
  progressbar.style = "width: " + percent + "%";
  if (percent >= 100 && percent <= 200) {
    progressbar.classList.add("bg-success");
    progressbar.classList.remove("bg-danger");
  } else if (percent > 200) {
    progressbar.classList.remove("bg-success");
    progressbar.classList.add("bg-danger");
  } else if (percent < 100) {
    progressbar.classList.remove("bg-success");
  }
  console.log(percent);
}

// check user email
function checkEmail() {
  let pattern = new RegExp(/^[+a-zA-Z1-9._-]+@[a-zA-Z1-9.-]+\.[a-zA-Z]{2,4}$/i);
  if (pattern.test(email.value)) {
    console.log("true, email valid");
    hideFalse(error[1], errors.emailerr);
  } else {
    console.log("false, email invalid");
    showTrue(error[1], errors.emailerr);
  }
}
// check age within range
function checkAge() {
  if (age.value < 15 || age.value > 40) {
    showTrue(error[4], errors.age);
  } else {
    hideFalse(error[4], errors.age);
  }
}

//Helper functions
function showTrue(el, err) {
  el.style = "display: initial";
  err = true;
}

function hideFalse(el, err) {
  el.style = "display: none";
  err = false;
}


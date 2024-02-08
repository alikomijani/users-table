const users = [
  {
    id: 1,
    firstName: "ali",
    lastName: "Komijani",
    email: "alikomijani@hotmail.com",
    phone: "0939690****",
  },
  {
    id: 2,
    firstName: "ali",
    lastName: "Komijani",
    email: "alikomijani@hotmail.com",
    phone: "0939690****",
  },
  {
    id: 3,
    firstName: "ali",
    lastName: "Komijani",
    email: "alikomijani@hotmail.com",
    phone: "0939690****",
  },
];
const userObjectKeys = ["id", "firstName", "lastName", "email", "phone"];

function actionGeneration() {
  const actionCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", deleteUser);
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.addEventListener("click", updateUser);
  const div = document.createElement("div");
  div.classList.add("d-flex", "space-between");
  div.append(editButton);
  div.append(deleteButton);
  actionCell.append(div);
  return actionCell;
}

function appendRowToTable(rows, table) {
  const tbody = table.querySelector("tbody");
  tbody.append(...rows);
}

function renderUsers() {
  const table = document.querySelector("#users-table");
  const rows = users.map((user) => createTableRow(user, userObjectKeys));
  appendRowToTable(rows, table);
}

function updateUser(event) {
  const cells = event.target.closest("tr").querySelectorAll("td");
  const userObject = {};
  cells.forEach((cell, index) => {
    console.log(cell, index);
    userObject[userObjectKeys[index]] = cell.innerText;
  });

  userObjectKeys.forEach((key) => {
    const input = document.querySelector(`input[name=${key}]`);
    input.value = userObject[key];
  });
}

function deleteUser(event) {
  if (confirm("are you sure?")) {
    const elem = event.target.closest("tr");
    elem.remove();
  }
}

function createTableRow(object, keys) {
  const newRow = document.createElement("tr");
  keys.forEach((key) => {
    const td = document.createElement("td");
    td.innerText = object[key];
    newRow.append(td);
  });
  newRow.id = object["id"];
  newRow.append(actionGeneration());
  return newRow;
}

function getFromDataAsObj(form) {
  // const inputs = form.querySelectorAll("input");
  // const data = {};
  // inputs.forEach((input) => {
  //   data[input.name] = input.value;
  // });
  const formData = new FormData(form);
  const userData = Object.fromEntries(formData);
  return userData;
}

function updateTableRow(object, id) {
  const row = document.getElementById(id);
  const cells = row.querySelectorAll("td");
  userObjectKeys.forEach((key, index) => {
    cells[index].innerText = object[key];
  });
}

function createUser(event) {
  event.preventDefault();
  const userData = getFromDataAsObj(event.target);
  const table = document.querySelector("#users-table");
  if (userData.id) {
    // update user
    updateTableRow(userData, userData.id);
    event.target.reset();
  } else {
    // create
    userData.id = new Date().getTime();
    const row = createTableRow(userData, userObjectKeys);
    appendRowToTable([row], table);
  }
}

const createUserForm = document.getElementById("create-user");
createUserForm.addEventListener("submit", createUser);

renderUsers();

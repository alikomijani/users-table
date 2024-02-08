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
];
const userObjectKeys = ["id", "firstName", "lastName", "email", "phone"];

function actionGeneration() {
  const actionCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", deleteUser);
  actionCell.append(deleteButton);
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

function deleteUser(event) {
  const elem = event.target.closest("tr");
  elem.remove();
}

function createTableRow(object, keys) {
  const newRow = document.createElement("tr");
  keys.forEach((key) => {
    const td = document.createElement("td");
    td.innerText = object[key];
    newRow.append(td);
  });
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

function createUser(event) {
  event.preventDefault();
  const userData = getFromDataAsObj(event.target);
  const row = createTableRow(userData, userObjectKeys);
  const table = document.querySelector("#users-table");
  appendRowToTable([row], table);
}

const createUserForm = document.getElementById("create-user");
createUserForm.addEventListener("submit", createUser);

renderUsers();

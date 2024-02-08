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

function actionGeneration() {
  const actionCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", deleteUser);
  actionCell.append(deleteButton);
  return actionCell;
}

function renderUsers() {
  const tbody = document.querySelector("#users-table > tbody");
  const keys = ["id", "firstName", "lastName", "email", "phone"];
  const rows = users.map((user) => {
    const newRow = document.createElement("tr");
    keys.forEach((key) => {
      const td = document.createElement("td");
      td.innerText = user[key];
      newRow.append(td);
    });
    newRow.append(actionGeneration());
    return newRow;
  });
  tbody.append(...rows);
}

function deleteUser(event) {
  const elem = event.target.closest("tr");
  elem.remove();
}

renderUsers();

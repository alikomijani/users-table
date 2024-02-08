let users = [
  {
    id: 1,
    firstName: "Ali",
    lastName: "Komijani",
    email: "alikomijani@hotmail.com",
    phone: "0939690****",
  },
  {
    id: 2,
    firstName: "Ali",
    lastName: "Komijani",
    email: "alikomijani@hotmail.com",
    phone: "0939690****",
  },
  {
    id: 3,
    firstName: "Ali",
    lastName: "Komijani",
    email: "alikomijani@hotmail.com",
    phone: "0939690****",
  },
  {
    id: 4,
    firstName: "Ali",
    lastName: "Komijani",
    email: "alikomijani@hotmail.com",
    phone: "0939690****",
  },
  {
    id: 5,
    firstName: "Ali",
    lastName: "Komijani",
    email: "alikomijani@hotmail.com",
    phone: "0939690****",
  },
  {
    id: 6,
    firstName: "Ali",
    lastName: "Komijani",
    email: "alikomijani@hotmail.com",
    phone: "0939690****",
  },
];

function renderUsers() {
  const root = document.querySelector(".user-container");
  root.innerHTML = "";
  users.forEach((user) => {
    // card header
    const cardHeader = document.createElement("h1");
    cardHeader.classList.add("card__header");
    cardHeader.innerText = `${user.id}-${user.firstName} ${user.lastName}`;

    // card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card__body");
    const phone = document.createElement("a");
    phone.href = `tel:${user.phone}`;
    phone.innerText = user.phone;
    const email = document.createElement("a");
    email.href = `mailto:${user.email}`;
    email.innerText = user.email;
    cardBody.append(phone, email);

    //card actions
    const cardActions = document.createElement("div");
    cardActions.classList.add("card__action");
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", () => updateUser(user));
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => deleteUser(user.id));
    cardActions.append(editButton, deleteButton);
    // card
    const card = document.createElement("div");
    card.classList.add("card");
    card.append(cardHeader, cardBody, cardActions);
    root.append(card);
  });
}

renderUsers();

function deleteUser(userID) {
  setUsers(users.filter((user) => user.id !== userID));
}

const userForm = document.getElementById("create-user");
userForm.addEventListener("submit", handleUserForm);

function getFromDataAsObj(form) {
  const formData = new FormData(form);
  const userData = Object.fromEntries(formData);
  return userData;
}

function handleUserForm(event) {
  event.preventDefault();
  const userData = getFromDataAsObj(event.target);
  if (userData.id) {
    setUsers(
      users.map((user) =>
        user.id.toString() === userData.id.toString() ? userData : user
      )
    );
  } else {
    // create
    userData.id = new Date().getTime();
    setUsers([...users, userData]);
  }
  event.target.reset();
}

function updateUser(userObject) {
  for (const key in userObject) {
    const input = document.querySelector(`input[name=${key}]`);
    input.value = userObject[key];
  }
}

function setUsers(newUsers) {
  users = newUsers;
  renderUsers();
}

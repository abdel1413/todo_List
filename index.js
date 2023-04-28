// search for a tutorial for local storage to have persistent data (data stays after refresh)

let plus = document.querySelector(".fa-plus");
let input = document.querySelector("#text-field");
let body = document.querySelector("body");
let section = document.querySelector("section");
let ul = document.querySelector("ul");
let alertMessage = document.querySelector(".alert-message");
let dropdown = document.querySelector(".list");
let dropdownContainer = document.querySelector(".dropdown-container");
let inputField = document.querySelector(".input-field");
let container = document.querySelector(".container");
let delt = document.querySelector("#delete-all");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let themes = document.getElementsByClassName("themes");
let themeItems = document.getElementsByClassName("themes-data");
let dataContainer = document.querySelectorAll(".data-container");
let listData = document.getElementsByClassName("list-data");
let containerListItems = document.getElementsByClassName("list-data");
let deletBotton = document.getElementsByClassName("delete-btn");
let editBotton = document.getElementsByClassName("edit-btn");
let btns = document.querySelector(".btn-div");
let palette = document.querySelector(".palette");
let iPalette = document.querySelector(".fa-palette");
let saveTask = document.querySelector("#save-task");
let showAlert = document.querySelector(".alert-message");

dropdown.addEventListener("click", paletteColorList);
let edited;

const addingTask = () => {
  let e2 = null;

  plus.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value) {
      let isEditing = plus.classList.contains("fa-check");
      // console.log("isEditing", isEditing);

      //if edite is active and there is an event
      //then assign new values to list base on the event target;
      if (isEditing && e2) {
        showAlert.innerHTML = "";
        let div = document.createElement("div");
        div.classList.add("alert-edit");
        div.style.backgroundColor = "#67D49B";
        div.style.border = "1px solid #67D49B";
        div.style.padding = "15px";
        div.style.borderRadius = "10px";
        div.style.marginBottom = "10px";

        // div.style.fontFamily = "Courier New, Courier, monospace";
        div.style.fontFamily = " sans-serif";
        div.style.transition = "all 3s ease";
        div.style.transform = "scale(1)";

        let span = document.createElement("span");
        span.textContent = "Task updated successfully";
        span.style.display = "flex";
        span.style.color = "white";

        div.appendChild(span);

        showAlert.classList.add("show");

        showAlert.style.display = "block";
        if (showAlert.style.display == "block") {
          showAlert.classList.add("show");
        }
        setTimeout(() => {
          showAlert.style.display = "none";
          showAlert.classList.remove("show");
          showAlert.classList.add("hide");
        }, 2000);

        showAlert.append(div);

        if (e2.target.parentNode.className == "edit-btn") {
          e2.target.parentNode.parentNode.previousSibling.innerHTML =
            input.value;
        } else if (e2.target.parentNode.className == "btn-div") {
          e2.target.parentNode.previousSibling.innerHTML = input.value;
        }

        plus.classList.remove("fa-check");

        //save new edited value into local storage by
        // using ul nod child textContent
        let newValues = [];
        let ulChild = ul.childNodes;
        for (let i = 0; i < ulChild.length; i++) {
          newValues.push(ulChild[i].innerText);
        }
        localStorage.setItem("task", JSON.stringify(newValues));

        //display alert message when task is updated
      } else {
        // create the li with the edit and delete buttons and
        // append the li to the ul
        let li = document.createElement("li");
        li.classList.add("list-data");

        let h2 = document.createElement("h2");
        h2.classList.add("data-item");
        h2.textContent = input.value;

        li.appendChild(h2);

        let editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");

        let editIcon = document.createElement("i");
        editIcon.classList.add("fa-solid");
        editIcon.classList.add("fa-pen");
        editBtn.appendChild(editIcon);

        editBtn.addEventListener("click", function (ev) {
          e2 = ev;
          editTask(this);
        });

        let delBtn = document.createElement("button");
        delBtn.classList.add("delete-btn");
        let delIcon = document.createElement("i");
        delIcon.classList.add("fa-regular");
        delIcon.classList.add("fa-trash-can");
        delBtn.appendChild(delIcon);

        delBtn.addEventListener("click", deleteTask);

        let btnDivs = document.createElement("div");
        btnDivs.classList.add("btn-div");

        btnDivs.appendChild(editBtn);
        btnDivs.appendChild(delBtn);

        li.appendChild(btnDivs);

        ul.appendChild(li);

        let c = ul.childNodes;
        let t = [];
        for (let i = 0; i < c.length; i++) {
          t.push(c[i].textContent);
        }
        localStorage.setItem("task", JSON.stringify(t));
      }

      //

      if (input.value && !isEditing) {
        showAlert.innerHTML = "";
        let div = document.createElement("div");
        div.classList.add("alert-error");
        div.style.backgroundColor = "#67D49B";
        div.style.border = "1px solid #67D49B";
        div.style.padding = "15px";
        div.style.borderRadius = "10px";
        div.style.marginBottom = "10px";
        // div.style.fontFamily = "Courier New, Courier, monospace";
        div.style.fontFamily = " sans-serif";
        div.style.transition = "all 3s ease";
        div.style.transform = "scale(1)";

        let span = document.createElement("span");
        span.textContent = "Task added successfully";
        span.style.display = "flex";

        div.appendChild(span);

        showAlert.classList.add("show");

        showAlert.style.display = "block";
        if (showAlert.style.display == "block") {
          showAlert.classList.add("show");
        }

        setTimeout(() => {
          showAlert.style.display = "none";
          showAlert.classList.remove("show");
          showAlert.classList.add("hide");
        }, 2000);

        showAlert.append(div);
      }

      input.value = "";
    } else {
      // showAlert.style.display = "block";
      if (!input.value) {
        showAlert.innerHTML = "";
        let div = document.createElement("div");
        div.classList.add("alert-error");
        div.style.backgroundColor = "#EC7071";
        div.style.border = "1px solid #EC7071";
        div.style.padding = "15px";
        div.style.borderRadius = "10px";
        div.style.marginBottom = "10px";
        // div.style.fontFamily = " sans-serif";
        div.style.fontFamily = "Courier New, Courier, monospace";

        div.style.transition = "all 3s ease-in-out";
        div.style.transform = "scale(1)";

        let span = document.createElement("span");
        span.textContent = "Please enter a task";
        span.style.display = "flex";

        div.appendChild(span);

        showAlert.classList.add("show");

        showAlert.style.display = "block";
        if (showAlert.style.display == "block") {
          showAlert.classList.add("show");
        }

        setTimeout(() => {
          showAlert.style.display = "none";
          showAlert.classList.remove("show");
          showAlert.classList.add("hide");
        }, 2000);

        showAlert.append(div);
      }
    }
  });

  //get local storage values using tanery operator
  let saveItems = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];

  for (let i = 0; i < saveItems.length; i++) {
    let text = saveItems[i];

    // create the li with the edit and delete buttons as above
    // append the li to the list
    let li = document.createElement("li");
    li.classList.add("list-data");

    let h2 = document.createElement("h2");
    h2.classList.add("data-item");
    h2.textContent = text;

    li.appendChild(h2);

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");

    let editIcon = document.createElement("i");
    editIcon.classList.add("fa-solid");
    editIcon.classList.add("fa-pen");
    editBtn.appendChild(editIcon);

    editBtn.addEventListener("click", function (ev) {
      e2 = ev;
      editTask(this);
    });

    let delBtn = document.createElement("button");
    delBtn.classList.add("delete-btn");
    let delIcon = document.createElement("i");
    delIcon.classList.add("fa-regular");
    delIcon.classList.add("fa-trash-can");

    delBtn.appendChild(delIcon);

    delBtn.addEventListener("click", deleteTask);

    let btnDivs = document.createElement("div");
    btnDivs.classList.add("btn-div");

    btnDivs.appendChild(editBtn);
    btnDivs.appendChild(delBtn);

    li.appendChild(btnDivs);
    ul.appendChild(li);
  }
};

addingTask();

function deleteTask() {
  //get the task to delete
  const taskToRemove = this.parentNode.parentNode.textContent;
  const tasks = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];

  // get the current tasks in local storage and return all
  //of them except the one you want to delete.

  const filtered = tasks.filter((task) => task != taskToRemove);
  localStorage.setItem("task", JSON.stringify(filtered));

  this.parentNode.parentNode.remove();
  showAlert.innerHTML = "";
  let div = document.createElement("div");
  div.classList.add("alert-edit");
  div.style.backgroundColor = "#67D49B";
  div.style.border = "1px solid #67D49B";
  div.style.padding = "15px";
  div.style.borderRadius = "10px";
  div.style.marginBottom = "10px";

  // div.style.fontFamily = "Courier New, Courier, monospace";
  div.style.fontFamily = " sans-serif";
  div.style.transition = "all 3s ease";
  div.style.transform = "scale(1)";

  let span = document.createElement("span");
  span.textContent = "Task deleted successfully";
  span.style.display = "flex";
  span.style.color = "white";

  div.appendChild(span);

  showAlert.classList.add("show");

  showAlert.style.display = "block";
  if (showAlert.style.display == "block") {
    showAlert.classList.add("show");
  }
  setTimeout(() => {
    showAlert.style.display = "none";
    showAlert.classList.remove("show");
    showAlert.classList.add("hide");
  }, 2000);

  showAlert.append(div);
}

function editTask(e) {
  input.value = e.parentNode.parentNode.firstChild.innerHTML;
  plus.classList.add("fa-check");
}

function deletAll() {
  delt.addEventListener("click", function () {
    if (ul.innerHTML != "") {
      showAlert.innerHTML = "";

      let div = document.createElement("div");
      div.classList.add("alert-edit");
      div.style.backgroundColor = "#67D49B";
      div.style.border = "1px solid #67D49B";
      div.style.padding = "15px";
      div.style.borderRadius = "10px";
      div.style.marginBottom = "10px";

      div.style.fontFamily = " sans-serif";
      div.style.transition = "all 3s ease";
      div.style.transform = "scale(1)";

      let span = document.createElement("span");
      span.textContent = " All the tasks cleared successfully";
      span.style.display = "flex";
      span.style.color = "#00000";

      div.appendChild(span);

      showAlert.classList.add("show");

      showAlert.style.display = "block";
      if (showAlert.style.display == "block") {
        showAlert.classList.add("show");
      }

      setTimeout(() => {
        showAlert.style.display = "none";
        showAlert.classList.remove("show");
        showAlert.classList.add("hide");
      }, 2000);

      showAlert.append(div);
      ul.innerHTML = "";
      localStorage.clear();
    } else {
      showAlert.innerHTML = "";
      let div = document.createElement("div");
      div.classList.add("alert-edit");
      div.style.backgroundColor = "#EC7071";
      div.style.border = "1px solid #EC7071";
      div.style.padding = "15px";
      div.style.borderRadius = "10px";
      div.style.marginBottom = "10px";

      div.style.fontFamily = " sans-serif";
      div.style.transition = "all 3s ease";
      div.style.transform = "scale(1)";

      let span = document.createElement("span");
      span.textContent = " No task to delete";
      span.style.display = "flex";
      span.style.color = "#00000";

      div.appendChild(span);

      showAlert.classList.add("show");

      showAlert.style.display = "block";
      if (showAlert.style.display == "block") {
        showAlert.classList.add("show");
      }

      setTimeout(() => {
        showAlert.style.display = "none";
        showAlert.classList.remove("show");
        showAlert.classList.add("hide");
      }, 2000);

      showAlert.append(div);
    }
  });
}
deletAll();

function paletteColorList() {
  let colors = [
    "cupcake",
    "dark",
    "light",
    "bumblebee",
    "synthwave",
    "halloween",
    "fantasy",
    "dracula",
    "aqua",
    "luxury",
    "night",
  ];

  let colorTheme = document.getElementsByClassName("themes");
  const body = document.getElementsByTagName("body")[0];

  if (!colorTheme || !colorTheme.length) {
    colorTheme = document.createElement("ul");
    colorTheme.classList.add("themes");

    for (let i = 0; i < colors.length; i++) {
      let li = document.createElement("li");
      li.classList.add("themes-data");
      let a = document.createElement("a");
      a.textContent = colors[i];

      a.addEventListener("click", () => {
        changeTheme(body, colors[i]);
      });

      li.appendChild(a);
      colorTheme.appendChild(li);
    }
    dropdownContainer.appendChild(colorTheme);
  } else {
    colorTheme[0].remove();
  }
}

function changeTheme(body, theme) {
  body.removeAttribute("class");
  body.classList.add(theme);
}

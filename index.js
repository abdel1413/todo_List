// search for a tutorial for local storage to have persistent data (data stays after refresh)

let plus = document.querySelector(".fa-plus");
let input = document.querySelector("#text-field");
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
let dataContainer = document.querySelector(".data-container");
let listData = document.querySelectorAll(".list-data");
let containerListItems = document.getElementsByClassName("list-data");
let deletBotton = document.getElementsByClassName("delete-btn");
let editBotton = document.getElementsByClassName("edit-btn");
let btns = document.querySelector(".btn-div");

alertMessage.style.display = "none";

let arrayElement = [];

dropdown.addEventListener("click", paletteColorList);

const addingTask = () => {
  //let u = document.getElementsByTagName("li");
  let e = null;

  plus.addEventListener("click", () => {
    if (input.value) {
      let isEditing = plus.classList.contains("fa-check");
      console.log("isEditing", isEditing);

      if (isEditing && e) {
        e.target.parentElement.parentElement.previousSibling.innerHTML =
          input.value;
        plus.classList.remove("fa-check");
      } else {
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
          e = ev;
          // console.log("ev", e.target.parentNode.parentNode);
          //console.log("test", this);
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
        // console.log(li);
        ul.appendChild(li);
      }
      input.value = "";
    } else {
      let modal = document.createElement("modal");
      alert("you have to enter a task!!!");
    }
  });
};

addingTask();

function deleteTask() {
  this.parentNode.parentNode.remove();
}
function editTask(e) {
  // console.log(e.targe);

  input.value = e.parentNode.parentNode.firstChild.innerHTML;
  console.log(plus.className);

  plus.classList.add("fa-check");

  // console.log("etGE", e.target);
  //<i class="fa-solid fa-check"></i>
}

function deletAll() {
  delt.addEventListener("click", function () {
    ul.innerHTML = "";
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

  /**
   *  { cupcake: "#FAF7F5" },
    { dark: "#2A303C" },
    { light: "#FFFFFF" },
    { bumblebee: "#FFFFFF" },
    { synthwave: "#2D1B69" },
    { halloween: "#212121" },
    { fantasy: "#FFFFFF" },
    { dracula: "#272935" },
    { aqua: "#335CA8" },
    { luxury: "#09090B" },
    { night: "#0F1729" },
   */

  let colorTheme = document.getElementsByClassName("themes");

  if (!colorTheme || !colorTheme.length) {
    colorTheme = document.createElement("ul");
    colorTheme.classList.add("themes");

    for (let i = 0; i < colors.length; i++) {
      let li = document.createElement("li");
      li.classList.add("themes-data");
      let a = document.createElement("a");
      a.textContent = colors[i];

      // console.log("a", a);
      a.addEventListener("click", () => {
        //  console.log(a.innerHTML);

        if (a.innerHTML == "dark") {
          // console.log("dark is clicked");
          a.style.color = "#A6ADBA";
          let body = document.querySelector("body");
          body.style.backgroundColor = "#2A303C";

          plus.style.backgroundColor = "#AF3888";
          plus.style.borderRadius = "10px";
          plus.style.border = "1px solid #4A4E5A ";
          plus.style.color = "white";

          delt.style.borderRadius = "10px";
          delt.style.border = "1px solid #4A4E5A ";
          delt.style.backgroundColor = "#AF3888";
          delt.style.color = "white";

          container.style.backgroundColor = "#4A4E5A";

          input.style.border = "1px solid #AF3888";
          input.style.backgroundColor = "#2A303C";
          input.style.borderRadius = "10px";
          input.style.color = "#A6ADBA";
          input.style.placeHolder = "#A6ADBA";

          h1.style.color = "#A6ADBA";

          //listData.style.backgroundColor = "#4A4E5A";
          //listData[0].style.backgroundColor = "#4A4E5A";
          //h2.style.color = "#A6ADBA";

          for (item of containerListItems) {
            // item.style.backgroundColor = "green";
            item.style.backgroundColor = "#4A4E5A";
            item.style.color = "#A6ADBA";
            item.style.borderBottom = "1px solid #A6ADBA ";
          }

          Array.from(themes).map((i) => {
            // console.log("this is themes u");
            i.style.backgroundColor = "#2A303C";
            i.style.border = "1px solid #2A303C";
          });

          for (let edit of editBotton) {
            edit.style.borderRadius = "10px";
          }
          // console.log("editBotton", editBotton[0]);
          // console.log("deletBotton", deletBotton[0]);
          for (let del of deletBotton) {
            del.style.borderRadius = "10px";
          }
        }

        //work on hover later
        Array.from(themeItems).map((e) => {
          // console.log("this is list ", e);
          e.style.backgroundColorHover = "#2A303C";
        });
      });
      li.appendChild(a);
      colorTheme.appendChild(li);
    }

    dropdownContainer.appendChild(colorTheme);
  } else {
    colorTheme[0].remove();
  }
}

// let expr = '"#FAF7F5"';
// switch (expr) {
//   case "#FFFFFF":
//     a.addEventListener("onclick", function () {
//       console.log(`case ${"#FFFFFF"} is clicked`);
//     });
//     break;
//   case "#2A303C":
//     a.addEventListener("onclick", function () {
//       console.log(`case ${"#2A303C"} is clicked`);
//     });
//     break;
//   case "#FFFFFF":
//     a.addEventListener("onclick", function () {
//       console.log(`case ${"#FFFFFF"} is clicked`);
//     });
//     break;
//   case '#2D1B69':
//      a.addEventListener("onclick", function () {
//       console.log(`case ${"#2D1B69"} is clicked`);
//     });
//     break;
// }

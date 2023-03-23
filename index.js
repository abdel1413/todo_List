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
let dataContainer = document.querySelector(".data-container");
let listData = document.querySelectorAll(".list-data");
let containerListItems = document.getElementsByClassName("list-data");
let deletBotton = document.getElementsByClassName("delete-btn");
let editBotton = document.getElementsByClassName("edit-btn");
let btns = document.querySelector(".btn-div");
let palette = document.querySelector(".palette");
let iPalette = document.querySelector(".fa-palette");

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
        if (input.value != null) {
          plus.addEventListener("click", function () {
            console.log("imputval", input.value);
          });
        }

        if (a.innerHTML == "dark") {
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

          palette.style.backgroundColor = "#111318";
          palette.style.borderRadius = "10px";
          palette.style.padding = "5px";
          // palette.i.style.color = "#FFFFFF";

          dropdown.style.backgroundColor = "#111318";
          dropdown.style.borderRadius = "10px";
          iPalette.style.color = "#A6ADBA";

          //listData.style.backgroundColor = "#4A4E5A";
          //listData[0].style.backgroundColor = "#4A4E5A";
          //h2.style.color = "#A6ADBA";

          for (item of containerListItems) {
            let dataItem = document.querySelector(".dataItem");

            item.style.backgroundColor = "#4A4E5A";
            item.style.color = "#A6ADBA";
            item.style.borderBottom = "1px solid #A6ADBA ";
          }

          Array.from(themes).map((i) => {
            i.style.backgroundColor = "#2A303C";
            i.style.border = "1px solid #2A303C";
            i.style.color = "#A6ADBA";

            i.style.fontSize = "20px";
          });

          for (let edit of editBotton) {
            edit.style.borderRadius = "10px";
          }

          for (let del of deletBotton) {
            del.style.borderRadius = "10px";
          }
        } else if (a.innerHTML == "cupcake") {
          body.style.backgroundColor = "#faf7f5";
          plus.style.backgroundColor = "#ef9fbc";
          plus.style.borderRadius = "20px";
          plus.style.border = "1px solid pink ";

          delt.style.borderRadius = "20px";
          delt.style.border = "1px solid pink ";
          //delt.style.backgroundColorHover = "#ea407e";
          delt.backgroundColor = "#ef9fbc";
          delt.style.color = "black";

          container.style.backgroundColor = "#FBF8F6";

          input.style.border = "1px solid #da5d8b";
          input.style.backgroundColor = "#FAF7F5";
          input.style.borderRadius = "25px";
          input.style.placeHolder = "#A6ADBA";

          for (item of containerListItems) {
            let dataItem = document.querySelector(".dataItem");

            item.style.backgroundColor = "#FBF8F6";
            item.style.padding = "10px";
          }

          Array.from(themes).map((i) => {
            i.style.backgroundColor = "#FAF7F5";
            i.style.border = "3px solid #efe8eb";
            i.style.borderRadius = "10px";
            i.style.color = "black";
          });

          for (let edit of editBotton) {
            edit.style.borderRadius = "10px";
          }

          for (let del of deletBotton) {
            del.style.borderRadius = "10px";
          }
        } else if (a.innerHTML == "light") {
          h1.style.color = "black";
          body.style.backgroundColor = "#faf7f5";

          palette.style.backgroundColor = "#303540";
          palette.style.borderRadius = "10px";
          palette.style.padding = "8px";

          dropdown.style.backgroundColor = "#303540";
          dropdown.style.borderRadius = "10px";
          iPalette.style.color = "#FFFFFF";

          plus.style.backgroundColor = "#f823b1";
          plus.style.borderRadius = "10px";
          plus.style.border = "1px solid #f823b1 ";
          plus.style.color = "white";

          delt.style.borderRadius = "10px";
          delt.style.border = "1px solid #f823b1";
          delt.style.backgroundColor = "#f823b1";
          delt.style.color = "white";

          container.style.backgroundColor = "#faf7f5";

          input.style.border = "1px solid #AF3888";
          input.style.backgroundColor = "#FFFFFF";
          input.style.borderRadius = "10px";
          input.style.placeHolder = "#A6ADBA";

          for (item of containerListItems) {
            let dataItem = document.querySelector(".dataItem");

            item.style.backgroundColor = "#FAF7F5";
          }

          Array.from(themes).map((i) => {
            i.style.backgroundColor = "#faf7f5";
            i.style.border = "2px solid #E8E9EB";
            i.style.borderRadius = "10px";
            i.style.boxShadow = "15px 10px 4px 0 rgba(155 155 155 0.8)";
          });

          for (let edit of editBotton) {
            edit.style.borderRadius = "10px";
          }

          for (let del of deletBotton) {
            del.style.borderRadius = "10px";
          }
        } else if (a.innerHTML == "bumblebee") {
          body.backgroundColor = "#FFFFFF";
          h1.backgroundColor = "#333333";

          container.style.backgroundColor = "#FFFFFF";

          plus.style.backgroundColor = "#E4BF45";
          plus.style.color = "black";
          plus.style.borderRadius = "10px";
          plus.style.border = "1px solid #E4BF45 ";

          input.style.border = "1px solid #E4BF45";
          input.style.borderRadius = "10px";
          input.style.backgroundColor = "#FFFFFF";

          delt.style.backgroundColor = "#E4BF45";
          delt.style.borderRadius = "10px";
          delt.style.color = "black";
          delt.style.border = "1px solid #E4BF45";

          palette.style.backgroundColor = "#181F2B";
          palette.style.borderRadius = "10px";
          palette.style.padding = "8px";

          dropdown.style.backgroundColor = "#181F2B";
          dropdown.style.borderRadius = "10px";
          iPalette.style.color = "#B9CFEF";
          for (let edit of editBotton) {
            edit.style.borderRadius = "10px";
          }

          for (let del of deletBotton) {
            del.style.borderRadius = "10px";
          }
        } else if (a.innerHTML == "synthwave") {
          //#2D1B69
          console.log("sunthwave");
          body.style.backgroundColor = "#2D1B69";
          h1.style.color = "#F9F7FD";

          container.style.backgroundColor = "#4B357F";

          plus.style.backgroundColor = "#4FB4F0";
          plus.style.color = "black";
          plus.style.borderRadius = "10px";
          plus.style.border = "1px solid #4FB4F0";

          input.style.border = "1px solid #4FB4F0";
          input.style.borderRadius = "10px";
          input.style.backgroundColor = "#2D1B69";

          delt.style.backgroundColor = "#4FB4F0";
          delt.style.borderRadius = "10px";
          delt.style.color = "black";
          delt.style.border = "1px solid #4FB4F0";

          palette.style.backgroundColor = "#131325";
          palette.style.borderRadius = "10px";
          palette.style.padding = "8px";

          dropdown.style.backgroundColor = "#131325";
          dropdown.style.borderRadius = "10px";
          iPalette.style.color = "#F9F7FD";
          for (let edit of editBotton) {
            let editIcon = document.querySelector(".fa-pen");
            console.log(editIcon);
            edit.style.borderRadius = "10px";
            edit.style.backgroundColor = "#71EAD2";
            edit.style.border = "1px solid #71EAD2";
            // editIcon.style.color = '#27476D'
          }

          for (let del of deletBotton) {
            let DeltIcon = document.querySelector(".fa-trash-can");
            console.log(DeltIcon);

            del.style.borderRadius = "10px";
            del.style.backgroundColor = "#E34056";
            del.style.border = "1px solid #E34056";
            DeltIcon.style.color = "#F9F7FD";
          }

          Array.from(themes).map((i) => {
            i.style.backgroundColor = "#2D1B69";
            i.style.border = "2px solid #2D1B69";
            i.style.borderRadius = "10px";
            i.style.color = "#F9F7FD";
            i.style.boxShadow = "15px 10px 4px 0 rgba(155 155 155 0.8)";
          });
        } else if (a.innerHTML == "halloween") {
          body.style.backgroundColor = "#212121";
          h1.style.color = "#D4D4D4";

          container.style.backgroundColor = "#424242";

          plus.style.backgroundColor = "#582F7F";
          plus.style.color = "#E1C2FB";
          plus.style.borderRadius = "10px";
          plus.style.border = "1px solid #582F7F";

          input.style.border = "1px solid #582F7F";
          input.style.borderRadius = "10px";
          input.style.backgroundColor = "#212121";

          delt.style.backgroundColor = "#582F7F";
          delt.style.borderRadius = "10px";
          delt.style.color = "#E1C2FB";
          delt.style.border = "1px solid #582F7F";

          palette.style.backgroundColor = "#161818";
          palette.style.borderRadius = "10px";
          palette.style.padding = "8px";

          dropdown.style.backgroundColor = "#161818";
          dropdown.style.borderRadius = "10px";
          iPalette.style.color = "#F9F7FD";
          for (let edit of editBotton) {
            let editIcon = document.querySelector(".fa-pen");
            console.log(editIcon);
            edit.style.borderRadius = "10px";
            edit.style.backgroundColor = "#4EA24B";
            edit.style.border = "1px solid #4EA24B";
            // editIcon.style.color = '#27476D'
          }

          for (let del of deletBotton) {
            let DeltIcon = document.querySelector(".fa-trash-can");
            console.log(DeltIcon);

            del.style.borderRadius = "10px";
            del.style.backgroundColor = "#E34056";
            del.style.border = "1px solid #E34056";
            DeltIcon.style.color = "#F9F7FD";
          }

          Array.from(themes).map((i) => {
            i.style.backgroundColor = "#212121";
            i.style.border = "2px solid #212121";
            i.style.borderRadius = "10px";
            i.style.color = "#F9F7FD";
            i.style.boxShadow = "15px 10px 4px 0 rgba(155 155 155 0.8)";
          });
        } else if (a.innerHTML == "fantasy") {
          body.style.backgroundColor = "#FFFFFF";
          h1.style.backgroundColor = "#333333";

          container.style.backgroundColor = "#FFFFFF";

          plus.style.backgroundColor = "#29679A";
          plus.style.color = "#BDE9FB";
          plus.style.borderRadius = "10px";
          plus.style.border = "1px solid #29679A ";

          input.style.border = "1px solid #29679A";
          input.style.borderRadius = "10px";
          input.style.backgroundColor = "#FFFFFF";

          delt.style.backgroundColor = "#29679A";
          delt.style.borderRadius = "10px";
          delt.style.color = "#B3E2F6";
          delt.style.border = "1px solid #29679A";

          palette.style.backgroundColor = "#131325";
          palette.style.borderRadius = "10px";
          palette.style.padding = "8px";

          dropdown.style.backgroundColor = "#131325";
          dropdown.style.borderRadius = "10px";
          iPalette.style.color = "#BABAEE";
          for (let edit of editBotton) {
            edit.style.borderRadius = "10px";
          }

          for (let del of deletBotton) {
            del.style.borderRadius = "10px";
          }
        } else if (a.innerHTML == "dracula") {
          body.style.backgroundColor = "#272935";
          h1.style.backgroundColor = "#474853";
          h1.style.color = "#F8F8F2";

          container.style.backgroundColor = "#474853";

          plus.style.backgroundColor = "#904CF4";
          plus.style.color = "#231352";
          plus.style.borderRadius = "10px";
          plus.style.border = "1px solid #904CF4 ";
          plus.style.cursor = "pointer";

          input.style.border = "1px solid #29679A";
          input.style.borderRadius = "10px";
          input.style.color = "#F8F8F2";
          input.style.backgroundColor = "#272935";

          delt.style.backgroundColor = "#904CF4";
          delt.style.borderRadius = "10px";
          delt.style.color = "#231352";
          delt.style.border = "1px solid #904CF4";
          delt.style.cursor = "pointer";

          palette.style.backgroundColor = "#343746";
          palette.style.borderRadius = "10px";
          palette.style.padding = "8px";

          dropdown.style.backgroundColor = "#343746";
          dropdown.style.borderRadius = "10px";
          iPalette.style.color = "#C2CAF5";
          for (let edit of editBotton) {
            edit.style.borderRadius = "10px";
            edit.style.backgroundColor = "#79F47C";
            edit.style.cursor = "pointer";
          }

          for (let del of deletBotton) {
            del.style.borderRadius = "10px";
            del.style.backgroundColor = "#E93F36";
            del.style.color = "#F8DBDA";
            del.style.cursor = "pointer";
          }
          Array.from(themes).map((i) => {
            i.style.backgroundColor = "#212121";
            i.style.border = "2px solid #212121";
            i.style.borderRadius = "10px";
            i.style.color = "#F9F7FD";
            i.style.boxShadow = "15px 10px 4px 0 rgba(155 155 155 0.8)";
          });
        } else if (a.innerHTML == "aqua") {
          //#335CA8
          body.style.backgroundColor = "#335CA8";
          h1.style.backgroundColor = "#5173B4";
          h1.style.color = "#C7DBFB";

          container.style.backgroundColor = "#5173B4";

          plus.style.backgroundColor = "#784F97";
          plus.style.color = "#EAD0FB";
          plus.style.borderRadius = "10px";
          plus.style.border = "1px solid #784F97 ";
          plus.style.cursor = "pointer";

          input.style.border = "1px solid #784F97";
          input.style.borderRadius = "10px";
          input.style.color = "#C7DBFB";
          input.style.backgroundColor = "#335CA8";

          delt.style.backgroundColor = "#784F97";
          delt.style.borderRadius = "10px";
          delt.style.color = "#EAD0FB";
          delt.style.border = "1px solid #784F97";
          delt.style.cursor = "pointer";

          palette.style.backgroundColor = "#2F6F9D";
          palette.style.borderRadius = "10px";
          palette.style.padding = "8px";

          dropdown.style.backgroundColor = "#2F6F9D";
          dropdown.style.border = "1px solid  #2F6F9D";
          dropdown.style.borderRadius = "10px";

          iPalette.style.color = "#CCE9FC";
          for (let edit of editBotton) {
            edit.style.borderRadius = "10px";
            edit.style.backgroundColor = "#4EA24B";
            edit.style.border = "1px solid #4EA24B";
            edit.style.cursor = "pointer";
            edit.style.color = "#A1E8BB";
          }

          for (let del of deletBotton) {
            del.style.borderRadius = "10px";
            del.style.backgroundColor = "#E93F36";
            del.style.color = "#F8DBDA";
            del.style.border = "1px solid #E93F36";
            del.style.cursor = "pointer";
          }
          Array.from(themes).map((i) => {
            i.style.backgroundColor = "#335CA8";
            i.style.border = "2px solid #335CA8";
            i.style.borderRadius = "10px";
            i.style.color = "#F9F7FD";
            i.style.boxShadow = "15px 10px 4px 0 rgba(155 155 155 0.8)";
          });

          for (item of containerListItems) {
            let dataItem = document.querySelector(".dataItem");

            // item.style.backgroundColor = "#C7DBFB";
            let b = document.createElement("hr");
            console.log("h", b);
            b.style.color = "#C7DBFB";
            item.style.borderBottom = ".1px solid #C7DBFB";
            item.style.padding = "7px";

            //item.appendChild(b);
          }
        } else if (a.innerHTML == "luxury") {
          //#09090B
          body.style.backgroundColor = "#09090B";
          h1.style.backgroundColor = "#2E2E2F";
          h1.style.color = "#DCA54C";

          container.style.backgroundColor = "#2E2E2F";

          plus.style.backgroundColor = "#111F37";
          plus.style.color = "#ADCBFA";
          plus.style.borderRadius = "10px";
          plus.style.border = "1px solid #111F37 ";
          plus.style.cursor = "pointer";

          input.style.border = "1px solid #111F37";
          input.style.borderRadius = "10px";
          input.style.color = "#C7DBFB";
          input.style.backgroundColor = "#09090B";

          delt.style.backgroundColor = "#111F37";
          delt.style.borderRadius = "10px";
          delt.style.color = "#ADCBFA";
          delt.style.border = "1px solid #111F37";
          delt.style.cursor = "pointer";

          palette.style.backgroundColor = "#121112";
          palette.style.borderRadius = "10px";
          palette.style.padding = "8px";

          dropdown.style.backgroundColor = "#121112";
          dropdown.style.border = "1px solid  #121112";
          dropdown.style.borderRadius = "10px";

          iPalette.style.color = "#DCA54C";

          for (let edit of editBotton) {
            edit.style.borderRadius = "10px";
            edit.style.backgroundColor = "#87D03A";
            edit.style.border = "1px solid #87D03A";
            edit.style.cursor = "pointer";
            edit.style.color = "#1A3307";
          }

          for (let del of deletBotton) {
            del.style.borderRadius = "10px";
            del.style.backgroundColor = "#EB6D6E";
            del.style.color = "#470C0A";
            del.style.border = "1px solid #EB6D6E";
            del.style.cursor = "pointer";
          }
          Array.from(themes).map((i) => {
            i.style.backgroundColor = "#09090B";
            i.style.border = "2px solid #09090B";
            i.style.borderRadius = "10px";
            i.style.color = "#DCA54C";
            i.style.boxShadow = "15px 10px 4px 0 rgba(155 155 155 0.8)";
          });

          for (item of containerListItems) {
            let dataItem = document.querySelector(".dataItem");

            //  item.style.backgroundColor = "#C7DBFB";
            item.style.borderBottom = "1px solid  gray";
            item.style.padding = "7px";

            //item.appendChild(b);
          }
        } else if (a.innerHTML == "night") {
        } else {
        }

        //work on hover later
        Array.from(themeItems).map((e) => {
          e.style.backgroundColorHover = "#272935";
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

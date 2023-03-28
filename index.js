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
let saveTask = document.querySelector("#save-task");

alertMessage.style.display = "none";

dropdown.addEventListener("click", paletteColorList);

const addingTask = () => {
  let e = null;
  plus.addEventListener("click", (e) => {
    e.preventDefault();
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
        //console.log(li);

        localStorage.setItem("task", li);
        let storage = localStorage.getItem("task");

        ul.appendChild(li);

        localStorage.setItem("task", ul.innerHTML);
      }
      input.value = "";
    } else {
      let modal = document.createElement("modal");
      alert("you have to enter a task!!!");
    }
  });

  let saveItems = localStorage.getItem("task");
  if (saveItems) {
    ul.innerHTML = saveItems;
  }
};

addingTask();

function deleteTask() {
  this.parentNode.parentNode.remove();
}
function editTask(e) {
  console.log(e.target);
  input.value = e.parentNode.parentNode.firstChild.innerHTML;
  plus.classList.add("fa-check");
}

function deletAll() {
  delt.addEventListener("click", function () {
    // ul.innerHTML = "";
    localStorage.clear();
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
        if (a.innerHTML == "dark") {
          dark();
        } else if (a.innerHTML == "cupcake") {
          cupcake();
        } else if (a.innerHTML == "light") {
          light();
        } else if (a.innerHTML == "bumblebee") {
          bumblebee();
        } else if (a.innerHTML == "synthwave") {
          console.log("sunthwave");
          synthwave();
        } else if (a.innerHTML == "halloween") {
          halloween();
        } else if (a.innerHTML == "fantasy") {
          fantasy();
        } else if (a.innerHTML == "dracula") {
          dracula();
        } else if (a.innerHTML == "aqua") {
          aqua();
        } else if (a.innerHTML == "luxury") {
          luxury();
        } else if (a.innerHTML == "night") {
          night();
        } else {
          defaultFunction();
        }
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

let cupcake = () => {
  body.style.backgroundColor = "#faf7f5";

  plus.style.backgroundColor = "#ef9fbc";
  plus.style.borderRadius = "20px";
  plus.style.border = "1px solid pink ";
  plus.style.padding = "17px";

  plus.onmouseover = function () {
    console.log("mousin");
    plus.style.backgroundColor = "#e2598c";
    plus.style.borderRadius = "20px";
    plus.style.border = "1px solid pink ";
    plus.style.padding = "17px";
    plus.style.cursor = "pointer";
  };
  plus.onmouseout = function mouseOut() {
    console.log("mouse out ");
    plus.style.backgroundColor = "#ef9fbc";
    plus.style.borderRadius = "20px";
    plus.style.border = "1px solid pink ";
    plus.style.padding = "17px";
  };

  delt.style.borderRadius = "30px";
  delt.style.border = "1px solid pink ";
  delt.backgroundColor = "#ef9fbc";
  delt.style.color = "black";
  delt.style.padding = "10px 5px";
  delt.style.textTransform = "uppercase";

  /**
   * #delete-all:hover {
  background-color: #e2598c;
  cursor: pointer;
}
   */

  h1.style.backgroundColor = "#FBF8F6";
  h1.style.color = "#1F2937";

  container.style.backgroundColor = "#fbf8f6";
  container.style.width = "500px";
  container.style.margin = "auto";
  container.textAlign = "center";
  container.style.boxShadow = "0 8px 32px 0 rgb(31, 38, 135, 0.6)";
  container.style.padding = "20px";

  input.style.border = "1px solid #da5d8b";
  input.style.backgroundColor = "#FAF7F5";
  input.style.borderRadius = "25px";
  input.style.placeHolder = "#A6ADBA";

  palette.style.backgroundColor = "#200f29";
  palette.style.borderRadius = "20px";
  palette.style.padding = "10px";
  palette.style.float = "right";
  palette.style.marginLeft = "0";

  dropdown.style.backgroundColor = "#200f29";
  dropdown.style.borderRadius = "30px";
  dropdown.style.border = "1px solid #200f29";
  dropdown.style.float = "right";
  dropdown.style.padding = "0 5px";
  dropdown.style.marginLeft = "0";
  dropdown.style.marginTop = "10px";

  iPalette.style.color = "#e0b0f8";
  iPalette.style.size = "1.5rem";
  iPalette.style.padding = "5px";

  for (item of containerListItems) {
    let dataItem = document.querySelector(".dataItem");
    item.style.color = "#4A4E5A";
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
    edit.style.borderRadius = "20px";
    edit.style.backgroundColor = "#67d49b";
    edit.style.border = " 1px solid #67d49b";
    edit.style.marginRight = "10px";
    edit.style.padding = "17px";
  }

  for (let del of deletBotton) {
    del.style.borderRadius = "20px";
    del.style.backgroundColor = "#ec7071";
    del.style.padding = "17px";
    del.style.border = "solid 1px #ec7071";
  }
};

let dark = () => {
  let body = document.querySelector("body");
  body.style.backgroundColor = "#2A303C";

  plus.style.borderRadius = "10px";
  plus.style.padding = "17px";
  plus.style.cursor = "pointer";
  plus.style.color = "white";
  plus.style.backgroundColor = "#f360c2";
  plus.style.border = "1px solid #f360c2";

  plus.onmouseover = function () {
    plus.style.backgroundColor = "#AF3888";
    plus.style.border = "1px solid #AF3888";
  };
  plus.onmouseout = function mouseOut() {
    console.log("mouse out ");
    plus.style.backgroundColor = "#f360c2";
    plus.style.border = "1px solid #f360c2 ";
  };

  delt.style.borderRadius = "10px";
  delt.style.color = "white";
  delt.style.border = "1px solid #f360c2";
  delt.style.backgroundColor = "#f360c2";

  delt.onmouseover = function () {
    delt.style.border = "1px solid #4A4E5A ";
    delt.style.backgroundColor = "#AF3888";
    delt.style.cursor = "pointer";
  };
  delt.onmouseout = function () {
    delt.style.border = "1px solid #f360c2";
    delt.style.backgroundColor = "#f360c2";
  };

  container.style.backgroundColor = "#4A4E5A";
  input.style.border = "1px solid #AF3888";
  input.style.backgroundColor = "#2A303C";
  input.style.borderRadius = "10px";
  input.style.color = "#A6ADBA";
  input.style.placeHolder = "#A6ADBA";

  h1.style.backgroundColor = "#4A4E5A";
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
    edit.style.fontSize = "20px";
    edit.style.padding = "10px 15px";
  }

  for (let del of deletBotton) {
    del.style.borderRadius = "10px";
    del.style.fontSize = "20px";
    del.style.padding = "10px 15px";
    del.style.color = "#470C0A";
  }
};

let light = () => {
  h1.style.color = "black";
  h1.style.backgroundColor = "#FAF7F5";
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
  plus.onmouseover = function () {
    plus.style.backgroundColor = "#C43F95";
    plus.style.border = "1px solid #C43F95";
  };

  plus.onmouseout = function () {
    plus.style.backgroundColor = "#f823b1 ";
    plus.style.border = "#f823b1  1px solid";
  };

  delt.style.borderRadius = "10px";
  delt.style.border = "1px solid #f823b1";
  delt.style.backgroundColor = "#f823b1";
  delt.style.color = "white";

  delt.onmouseover = function () {
    delt.style.backgroundColor = "#C43F95";
    delt.style.border = " 1px solid #C43F95";
  };
  delt.onmouseout = function () {
    delt.style.border = "1px solid #f823b1";
    delt.style.backgroundColor = "#f823b1";
  };

  container.style.backgroundColor = "#faf7f5";

  input.style.border = "1px solid #AF3888";
  input.style.backgroundColor = "#FFFFFF";
  input.style.borderRadius = "10px";

  Array.from(themes).map((i) => {
    i.style.backgroundColor = "#faf7f5";
    i.style.border = "2px solid #E8E9EB";
    i.style.borderRadius = "10px";
    i.style.color = "#000000";
    i.style.boxShadow = "15px 10px 4px 0 rgba(155 155 155 0.8)";
  });

  for (let edit of editBotton) {
    edit.style.borderRadius = "10px";
    edit.style.fontSize = "20px";
    edit.style.padding = "10px 15px";
  }

  for (let del of deletBotton) {
    del.style.borderRadius = "10px";
    del.style.fontSize = "20px";
    del.style.padding = "10px 15px";
    del.style.color = "#470C0A";
  }

  for (let item of containerListItems) {
    item.style.backgroundColor = "#FAF7F5";
    item.style.color = "#000000";
    item.style.borderBottom = "";
  }
};

let bumblebee = () => {
  body.style.backgroundColor = "#FFFFFF";
  h1.style.backgroundColor = "#FFFFFF";
  h1.style.color = "#333333";

  container.style.backgroundColor = "#FFFFFF";

  plus.style.backgroundColor = "#f8d76a";
  // plus.style.backgroundColor = "yellow";
  plus.style.border = "1px solid #f8d76a";
  plus.style.color = "black";
  plus.style.borderRadius = "10px";

  plus.onmouseover = function () {
    plus.style.border = "1px solid #E4BF45 ";
    plus.style.backgroundColor = "#E4BF45";
  };
  plus.onmouseout = function () {
    plus.style.border = "1px solid #f8d76a";
    plus.style.backgroundColor = "#f8d76a";
  };
  input.style.border = "1px solid #E4BF45";
  input.style.borderRadius = "10px";
  input.style.backgroundColor = "#FFFFFF";

  delt.style.backgroundColor = "#f8d76a";
  delt.style.border = "1px solid #f8d76a";
  delt.style.borderRadius = "10px";
  delt.style.color = "black";

  delt.onmouseover = function () {
    delt.style.border = "1px solid #E4BF45 ";
    delt.style.backgroundColor = "#E4BF45";
  };
  delt.onmouseout = function () {
    delt.style.backgroundColor = "#f8d76a";
    delt.style.border = "1px solid #f8d76a";
  };

  palette.style.backgroundColor = "#181F2B";
  palette.style.borderRadius = "10px";
  palette.style.padding = "8px";

  dropdown.style.backgroundColor = "#181F2B";
  dropdown.style.borderRadius = "10px";
  iPalette.style.color = "#B9CFEF";

  for (let edit of editBotton) {
    edit.style.borderRadius = "10px";
    edit.style.fontSize = "20px";
    edit.style.padding = "10px 15px";
  }

  for (let del of deletBotton) {
    del.style.borderRadius = "10px";
    del.style.fontSize = "20px";
    del.style.padding = "10px 15px";
    del.style.color = "#470C0A";
  }

  for (let item of containerListItems) {
    item.style.backgroundColor = "#FFFFFF";
    item.style.color = "#333333";
    item.style.borderBottom = "";
  }

  Array.from(themes).map((i) => {
    i.style.backgroundColor = "#FFFFFF";
    i.style.border = "1px solid #efe8eb";
    i.style.borderRadius = "10px";
    i.style.color = "black";
  });
};

let synthwave = () => {
  body.style.backgroundColor = "#2D1B69";
  h1.style.color = "#F9F7FD";
  h1.style.backgroundColor = "#4B357F";

  container.style.backgroundColor = "#4B357F";

  plus.style.backgroundColor = "#86c6eb";
  plus.style.color = "black";
  plus.style.borderRadius = "10px";
  plus.style.border = "1px solid #86c6eb";

  plus.onmouseover = function () {
    plus.style.backgroundColor = "#4FB4F0";
  };

  plus.onmouseout = function () {
    plus.style.backgroundColor = "#86c6eb";
  };

  input.style.border = "1px solid #4FB4F0";
  input.style.borderRadius = "10px";
  input.style.backgroundColor = "#2D1B69";

  delt.style.backgroundColor = " #86c6eb";
  delt.style.border = "1px solid  #86c6eb";
  delt.style.borderRadius = "10px";
  delt.style.color = "black";

  delt.onmouseover = function () {
    delt.style.backgroundColor = "#4FB4F0";
    delt.style.border = "1px solid #4FB4F0";
  };
  delt.onmouseout = function () {
    delt.style.backgroundColor = " #86c6eb";
    delt.style.border = "1px solid  #86c6eb";
  };
  palette.style.backgroundColor = "#131325";
  palette.style.borderRadius = "10px";
  palette.style.padding = "8px";

  dropdown.style.backgroundColor = "#131325";
  dropdown.style.borderRadius = "10px";
  iPalette.style.color = "#F9F7FD";

  for (let edit of editBotton) {
    edit.style.borderRadius = "10px";
    edit.style.backgroundColor = "#71EAD2";
    edit.style.fontSize = "20px";
    edit.style.padding = "10px 15px";
  }

  for (let del of deletBotton) {
    del.style.borderRadius = "10px";
    del.style.backgroundColor = "#E34056";
    del.style.fontSize = "20px";
    del.style.padding = "10px 15px";
    del.style.color = "#F9F7FD";
  }

  Array.from(themes).map((i) => {
    i.style.backgroundColor = "#2D1B69";
    i.style.border = "3px solid #2D1B69";
    i.style.borderRadius = "10px";
    i.style.color = "#F9F7FD";
    i.style.boxShadow = "15px 10px 4px 0 rgba(155 155 155 0.8)";
  });

  for (item of containerListItems) {
    let dataItem = document.querySelector(".dataItem");
    item.style.backgroundColor = "#4B357F";
    item.style.color = "#F9F7FD";
    item.style.borderBottom = "";
    item.style.padding = "7px";
  }
};

let halloween = () => {
  body.style.backgroundColor = "#212121";
  h1.style.color = "#D4D4D4";
  h1.style.backgroundColor = "#424242";

  container.style.backgroundColor = "#424242";

  plus.style.backgroundColor = "#733da7";
  plus.style.border = "1px solid #733da7";
  plus.style.color = "#E1C2FB";
  plus.style.borderRadius = "10px";
  plus.onmouseover = function () {
    plus.style.backgroundColor = "#582F7F";
    plus.style.border = "1px solid #582F7F";
  };

  plus.onmouseout = function () {
    plus.style.backgroundColor = "#733da7";
    plus.style.border = "1px solid #733da7";
  };

  input.style.border = "1px solid #582F7F";
  input.style.borderRadius = "10px";
  input.style.backgroundColor = "#212121";

  delt.style.backgroundColor = "#733da7";
  delt.style.border = "1px solid #733da7";
  delt.style.borderRadius = "10px";
  delt.style.color = "#E1C2FB";

  delt.onmouseout = function () {
    delt.style.backgroundColor = "#733da7";
    delt.style.border = "1px solid #733da7";
  };
  delt.onmouseover = function () {
    delt.style.backgroundColor = "#582F7F";
    delt.style.border = "1px solid #582F7F";
  };
  palette.style.backgroundColor = "#161818";
  palette.style.borderRadius = "10px";
  palette.style.padding = "8px";

  dropdown.style.backgroundColor = "#161818";
  dropdown.style.borderRadius = "10px";
  iPalette.style.color = "#F9F7FD";

  for (let edit of editBotton) {
    edit.style.backgroundColor = "#4EA24B";
    edit.style.border = "1px solid #4EA24B";
    edit.style.borderRadius = "10px";
    edit.style.fontSize = "20px";
    edit.style.padding = "10px 15px";
    edit.style.color = "#BBF9D5";
  }

  for (let del of deletBotton) {
    del.style.backgroundColor = "#DD3B33";
    del.style.color = "#F6CBCB";
    del.style.borderRadius = "10px";
    del.style.fontSize = "20px";
    del.style.padding = "10px 15px";
  }

  Array.from(themes).map((i) => {
    i.style.backgroundColor = "#212121";
    i.style.border = "2px solid #212121";
    i.style.borderRadius = "10px";
    i.style.color = "#F9F7FD";
    i.style.boxShadow = "15px 10px 4px 0 rgba(155 155 155 0.8)";
  });

  for (item of containerListItems) {
    console.log("item", item);
    let dataItem = document.getElementsByClassName("data-item");
    console.log("dataitem", dataItem);
    let deltBtn = document.querySelector(".delete-btn");
    item.style.backgroundColor = "#424242";
    console.log("delete", deltBtn);

    item.style.color = "#F9F7FD";
    item.style.borderBottom = "1px solid lightgray";
    item.style.padding = "7px";
  }
};

let fantasy = () => {
  body.style.backgroundColor = "#FFFFFF";
  h1.style.backgroundColor = "#FFFFFF";
  h1.style.color = "#1F2937";

  container.style.backgroundColor = "#FFFFFF";

  plus.style.backgroundColor = "#3a84c0";
  plus.style.border = "1px solid #3a84c0";
  plus.style.color = "#BDE9FB";
  plus.style.borderRadius = "10px";

  plus.onmouseover = function () {
    plus.style.backgroundColor = "#29679A";
    plus.style.border = "1px solid #29679A ";
  };
  plus.onmouseout = function () {
    plus.style.backgroundColor = "#3a84c0";
    plus.style.border = "1px solid #3a84c0";
  };

  input.style.border = "1px solid #29679A";
  input.style.borderRadius = "10px";
  input.style.backgroundColor = "#FFFFFF";

  delt.style.backgroundColor = " #3a84c0";
  delt.style.border = "1px solid  #3a84c0";
  delt.style.borderRadius = "10px";
  delt.style.color = "#B3E2F6";

  delt.onmouseover = function () {
    delt.style.backgroundColor = "#29679A";
    delt.style.border = "1px solid #29679A";
  };
  delt.onmouseout = function () {
    delt.style.backgroundColor = " #3a84c0";
    delt.style.border = "1px solid  #3a84c0";
  };

  palette.style.backgroundColor = "#131325";
  palette.style.borderRadius = "10px";
  palette.style.padding = "8px";

  dropdown.style.backgroundColor = "#131325";
  dropdown.style.borderRadius = "10px";
  iPalette.style.color = "#BABAEE";

  for (let edit of editBotton) {
    edit.style.backgroundColor = "#67D49B";
    edit.style.border = "1px solid #67D49B";
    edit.style.borderRadius = "10px";
    edit.style.fontSize = "20px";
    edit.style.padding = "10px 15px";
    edit.style.color = "#143321";
  }

  for (let del of deletBotton) {
    del.style.backgroundColor = "#EC7071";
    delt.style.border = "1px solid #EC7071";
    del.style.color = "#470C0A";
    del.style.borderRadius = "10px";
    del.style.fontSize = "20px";
    del.style.padding = "10px 15px";
  }

  Array.from(themes).map((i) => {
    i.style.backgroundColor = "#FFFFFF";
    i.style.border = "2px solid #FFFFFF";
    i.style.borderRadius = "10px";
    i.style.color = "";
    i.style.boxShadow = "15px 10px 4px 0 rgba(155 155 155 0.8)";
  });

  for (item of containerListItems) {
    console.log("item", item);
    let dataItem = document.getElementsByClassName("data-item");
    console.log("dataitem", dataItem);
    let deltBtn = document.querySelector(".delete-btn");
    item.style.backgroundColor = "#FFFFFF";
    console.log("delete", deltBtn);
    // deltBtn.style.color = "white";
    item.style.color = "";
    item.style.borderBottom = "";
    item.style.padding = "7px";
  }
};

let dracula = () => {
  body.style.backgroundColor = "#272935";
  h1.style.backgroundColor = "#474853";
  h1.style.color = "#F8F8F2";

  container.style.backgroundColor = "#474853";

  plus.style.backgroundColor = "#b892f0";
  plus.style.border = "1px solid #b892f0 ";
  plus.style.color = "#231352";
  plus.style.borderRadius = "10px";

  plus.style.cursor = "pointer";

  plus.onmouseout = function () {
    plus.style.backgroundColor = "#b892f0";
    plus.style.border = "1px solid #b892f0 ";
  };
  plus.onmouseover = function () {
    plus.style.backgroundColor = "#904CF4";
    plus.style.border = "1px solid #904CF4";
  };

  input.style.border = "1px solid #b892f0";
  input.style.borderRadius = "10px";
  input.style.color = "#F8F8F2";
  input.style.backgroundColor = "#272935";

  delt.style.backgroundColor = "#b892f0";
  delt.style.border = "1px solid #b892f0";
  delt.style.borderRadius = "10px";
  delt.style.color = "#231352";

  delt.style.cursor = "pointer";
  delt.onmouseover = function () {
    delt.style.backgroundColor = "#904CF4";
    delt.style.border = "1px solid #904CF4";
  };
  delt.onmouseout = function () {
    delt.style.backgroundColor = "#b892f0";
    delt.style.border = "1px solid #b892f0";
  };

  palette.style.backgroundColor = "#343746";
  palette.style.borderRadius = "10px";
  palette.style.padding = "8px";

  dropdown.style.backgroundColor = "#343746";
  dropdown.style.borderRadius = "10px";
  iPalette.style.color = "#C2CAF5";
  for (let edit of editBotton) {
    edit.style.backgroundColor = "#5DB96C";
    edit.style.border = "1px solid #5DB96C";
    edit.style.borderRadius = "10px";
    edit.style.fontSize = "20px";
    edit.style.padding = "10px 15px";
    edit.style.color = "#1C4212";
    edit.style.cursor = "pointer";
  }

  for (let del of deletBotton) {
    del.style.backgroundColor = "#EA5253";
    delt.style.border = "1px solid #EA5253";
    del.style.color = "#F8DBDA";
    del.style.borderRadius = "10px";
    del.style.fontSize = "20px";
    del.style.padding = "10px 15px";
    del.style.cursor = "pointer";
  }

  Array.from(themes).map((i) => {
    i.style.backgroundColor = "#272935";
    i.style.border = "2px solid #272935";
    i.style.borderRadius = "10px";
    i.style.color = "#F9F7FD";
    i.style.boxShadow = "15px 10px 4px 0 rgba(155 155 155 0.8)";
  });

  for (let item of containerListItems) {
    item.style.backgroundColor = "#474853";
    item.style.color = "#F8F8F2";
    item.style.borderBottom = "1px solid lightgray";
  }
};

let aqua = () => {
  body.style.backgroundColor = "#335CA8";
  h1.style.backgroundColor = "#5173B4";
  h1.style.color = "#C7DBFB";

  container.style.backgroundColor = "#5173B4";

  plus.style.backgroundColor = "#a973d1";
  plus.style.border = "1px solid #a973d1";
  plus.style.color = "#EAD0FB";
  plus.style.borderRadius = "10px";

  plus.style.cursor = "pointer";

  plus.onmouseout = function () {
    plus.style.backgroundColor = "#a973d1";
    plus.style.border = "1px solid #a973d1";
  };
  plus.onmouseover = function () {
    plus.style.backgroundColor = "#784F97";
    plus.style.border = "1px solid #784F97 ";
  };

  input.style.border = "1px solid #784F97";
  input.style.borderRadius = "10px";
  input.style.color = "#C7DBFB";
  input.style.backgroundColor = "#335CA8";

  delt.style.backgroundColor = "#a973d1";
  delt.style.border = "1px solid #a973d1";
  delt.style.borderRadius = "10px";
  delt.style.color = "#EAD0FB";

  delt.style.cursor = "pointer";
  delt.onmouseover = function () {
    delt.style.backgroundColor = "#784F97";
    delt.style.border = "1px solid #784F97";
  };

  delt.onmouseout = function () {
    delt.style.backgroundColor = "#a973d1";
    delt.style.border = "1px solid #a973d1";
  };
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
    item.style.color = "#C7DBFB";
    item.style.backgroundColor = "#5173B4";

    //item.appendChild(b);
  }
};

let luxury = () => {
  //#09090B
  body.style.backgroundColor = "#09090B";
  h1.style.backgroundColor = "#2E2E2F";
  h1.style.color = "#DCA54C";

  container.style.backgroundColor = "#2E2E2F";
  container.style.border = "1px solid gray";
  container.style.borderRadius = "10px";
  container.style.boxShadow = "0 8px 32px 0 rgb(31, 38, 135, 0.3";

  plus.style.backgroundColor = "#182c4e";
  plus.style.border = "1px solid #182c4e ";
  plus.style.color = "#ADCBFA";
  plus.style.borderRadius = "10px";

  plus.style.cursor = "pointer";
  plus.onmouseout = function () {
    plus.style.backgroundColor = "#182c4e";
    plus.style.border = "1px solid #182c4e ";
  };
  plus.onmouseover = function () {
    plus.style.backgroundColor = "#111F37";
    plus.style.border = "1px solid #111F37 ";
  };

  input.style.border = "1px solid #111F37";
  input.style.borderRadius = "10px";
  input.style.color = "#C7DBFB";
  input.style.backgroundColor = "#09090B";

  delt.style.backgroundColor = "#182c4e";
  delt.style.border = "1px solid #182c4e";
  delt.style.borderRadius = "10px";
  delt.style.color = "#ADCBFA";

  delt.style.cursor = "pointer";

  delt.onmouseout = function () {
    delt.style.backgroundColor = "#182c4e";
    delt.style.border = "1px solid #182c4e";
  };
  delt.onmouseover = function () {
    delt.style.backgroundColor = "#111F37";
    delt.style.border = "1px solid #111F37";
  };

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
    edit.style.fontSize = "20px";
    edit.style.padding = "10px 15px";
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
    del.style.fontSize = "20px";
    del.style.padding = "10px 15px";
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

    item.style.backgroundColor = "#2E2E2F";
    item.style.color = "#DCA54C";
    item.style.borderBottom = "1px solid  gray";
    item.style.padding = "7px";
  }
};

let night = () => {
  body.style.backgroundColor = "#0F1729";
  h1.style.backgroundColor = "#323949";
  h1.style.color = "#B3C5EF";

  container.style.backgroundColor = "#323949";
  container.style.border = "1px solid gray";
  container.style.borderRadius = "10px";
  container.style.boxShadow = "0 8px 32px 0 rgb(31, 38, 135, 0.3";

  plus.style.backgroundColor = "#8994f6";
  plus.style.border = "1px solid #8994f6 ";
  plus.style.color = "#020F4D";
  plus.style.borderRadius = "10px";

  plus.style.cursor = "pointer";
  plus.onmouseout = function () {
    plus.style.backgroundColor = "#8994f6";
    plus.style.border = "1px solid #8994f6 ";
  };
  plus.onmouseover = function () {
    plus.style.backgroundColor = "#3A4CF4";
    plus.style.border = "1px solid #3A4CF4";
  };

  input.style.border = "1px solid #8994f6";
  input.style.borderRadius = "10px";
  input.style.color = "#C7DBFB";
  input.style.backgroundColor = "#09090B";

  delt.style.backgroundColor = "#8994f6";
  delt.style.border = "1px solid #8994f6";
  delt.style.borderRadius = "10px";
  delt.style.color = "#020F4D";

  delt.style.cursor = "pointer";
  delt.onmouseover = function () {
    delt.style.backgroundColor = "#3A4CF4";
    delt.style.border = "1px solid #3A4CF4";
  };

  delt.onmouseout = function () {
    delt.style.backgroundColor = "#8994f6";
    delt.style.border = "1px solid #8994f6";
  };
  palette.style.backgroundColor = "#273449";
  palette.style.borderRadius = "10px";
  palette.style.padding = "8px";

  dropdown.style.backgroundColor = "#273449";
  dropdown.style.border = "1px solid  #273449";
  dropdown.style.borderRadius = "10px";

  iPalette.style.color = "#B3CCF5";

  for (let edit of editBotton) {
    edit.style.borderRadius = "10px";
    edit.style.backgroundColor = "#66D5BE";
    edit.style.border = "1px solid #66D5BE";
    edit.style.cursor = "pointer";
    edit.style.color = "#1A3307";
  }

  for (let del of deletBotton) {
    del.style.borderRadius = "10px";
    del.style.backgroundColor = "#EB6C83";
    del.style.color = "#470D0B";
    del.style.border = "1px solid #EB6C83";
    del.style.cursor = "pointer";
  }
  Array.from(themes).map((i) => {
    i.style.backgroundColor = "#0F1729";
    i.style.border = "2px solid #0F1729";
    i.style.borderRadius = "10px";
    i.style.color = "#B3C5EF";
    i.style.boxShadow = "15px 10px 4px 0 rgba(155 155 155 0.8)";
  });

  for (item of containerListItems) {
    item.style.backgroundColor = "#323949";
    item.style.color = "#B3C5EF";
    item.style.borderBottom = "1px solid  gray";
    item.style.padding = "7px";
  }
};

const defaultFunction = () => {
  body.style.margin = "0";
  body.style.backgroundColor = "#faf7f5";

  h1.style.color = "black";
  h1.style.textAlign = "center";

  palette.style.backgroundColor = "#200f29";
  palette.style.borderRadius = "20px";
  palette.style.float = "right";
  palette.style.marginLeft = "0";
};

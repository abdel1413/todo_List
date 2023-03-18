let plus = document.querySelector(".fa-plus");
let input = document.querySelector("#text-field");
let section = document.querySelector("section");
let ul = document.querySelector("ul");
let alertMessage = document.querySelector(".alert-message");
let dropdown = document.querySelector(".list");
let dropdownContainer = document.querySelector(".dropdown-container");

alertMessage.style.display = "none";

// edit.addEventListener("click", () => {
//   console.log("editing");
// });

dropdown.addEventListener("click", paletteColorList);
// console.log(input.value);
const adding = () => {
  let u = document.getElementsByTagName("li");

  plus.addEventListener("click", () => {
    if (input.value) {
      let li = document.createElement("li");
      li.classList.add("list-data");

      let h2 = document.createElement("h2");
      h2.classList.add("data-item");
      h2.textContent = input.value;
      li.appendChild(h2);

      let editBtn = document.createElement("button");
      editBtn.classList.add("edit-btn");
      //console.log(editBtn);

      let editIcon = document.createElement("i");
      editIcon.classList.add("fa-solid");
      editIcon.classList.add("fa-pen");
      editBtn.appendChild(editIcon);

      //console.log("edit", editBtn);
      //let list = document.querySelectorAll("li");
      // console.log(list);
      editBtn.addEventListener("click", editTask);

      // console.log("ul", li);
      // let array = Array.from(list);
      // for (let i = 0; i < array.length; i++) {
      //   console.log(array[i], i);
      // }
      // let h2 = document.querySelector("h2");

      let delBtn = document.createElement("button");
      delBtn.classList.add("delete-btn");
      let delIcon = document.createElement("i");
      delIcon.classList.add("fa-regular");
      delIcon.classList.add("fa-trash-can");
      delBtn.appendChild(delIcon);
      //console.log("det", delBtn);

      delBtn.addEventListener("click", deleteTask);

      let btnDivs = document.createElement("div");
      btnDivs.classList.add("btn-div");

      btnDivs.appendChild(editBtn);
      btnDivs.appendChild(delBtn);

      li.appendChild(btnDivs);

      ul.appendChild(li);

      //console.log(ul);
      input.value = "";
    } else {
      let modal = document.createElement("modal");
      alert("you have to enter a task!!!");
    }
  });

  //deleting items function
};

adding();

function deleteTask() {
  this.parentNode.parentNode.remove();
}
function editTask(e) {
  let editable;
  let li = document.querySelectorAll("li");
  //console.log("li", li);
  let h2 = document.querySelector("h2");

  console.log(this.parentNode.parentNode.firstChild.innerHTML);
  input.value = this.parentNode.parentNode.firstChild.innerHTML;
  plus.setAttribute("fa-plus", 'fa-check"');
  //console.log("e", (e.target.onclick = h2.textContent));
  ///<i class="fa-solid fa-check"></i>

  // for (let i = 0; i < ul.length; i++) {
  //   //console.log(ul[i].textContent);
  //   editable = ul[i].textContent;
  //   console.log("eeeed", editable);

  //   // ul[i].textContent.onclick = function () {
  //   //   //console.log(e.target);
  //   //   input.value = e.target;
  //   // };
  // }
}

function deletAll() {
  let delt = document.querySelector("#delete-all");
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
  let colorTheme = document.createElement("ul");
  colorTheme.classList.add("themes");

  for (let i = 0; i < colors.length; i++) {
    let li = document.createElement("li");
    li.classList.add("themes-data");
    let a = document.createElement("a");
    a.textContent = colors[i];
    li.appendChild(a);
    colorTheme.appendChild(li);
  }

  dropdownContainer.appendChild(colorTheme);
  console.log(colorTheme);
}

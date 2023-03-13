let plus = document.querySelector(".fa-plus");
let input = document.querySelector("#text-field");
let section = document.querySelector("section");

// edit.addEventListener("click", () => {
//   console.log("editing");
// });

// console.log(input.value);
const adding = () => {
  let ul = document.createElement("ul");
  ul.classList.add("data-container");
  plus.addEventListener("click", () => {
    if (input.value) {
      let div = document.createElement("d");
      div.classList.add("container");

      let li = document.createElement("li");
      li.classList.add("list-data");

      let h2 = document.createElement("h2");
      h2.classList.add("data-item");
      h2.textContent = input.value;
      li.appendChild(h2);

      let editBtn = document.createElement("button");
      editBtn.classList.add("edit-btn");
      //console.log(editBtn);
      editBtn.addEventListener("click", () => {
        let h2 = document.querySelector("h2");
        input.value = h2.textContent;
      });

      let editIcon = document.createElement("i");
      editIcon.classList.add("fa-solid");
      editIcon.classList.add("fa-pen");
      editBtn.appendChild(editIcon);

      let delBtn = document.createElement("button");
      delBtn.classList.add("delete-btn");
      let delIcon = document.createElement("i");
      delIcon.classList.add("fa-regular");
      delIcon.classList.add("fa-trash-can");
      delBtn.appendChild(delIcon);

      let btnDiv = document.createElement("div");
      btnDiv.classList.add("btn-div");

      btnDiv.appendChild(editBtn);
      btnDiv.appendChild(delBtn);

      li.appendChild(btnDiv);
      //   li.appendChild(btnDiv)

      ul.appendChild(li);
      div.appendChild(ul);
      console.log(li);
      //   console.log(div);
      section.appendChild(div);
      input.value = "";
    } else {
      alert("you have to ente a task");
    }
  });
};

adding();

let plus = document.querySelector(".fa-plus");
let input = document.querySelector("#text-field");
console.log(input.value);
const adding = () => {
  plus.addEventListener("click", () => {
    let div = document.createElement("d");
    div.classList.add("container");

    let chilDiv = document.createElement("div");
    chilDiv.textContent = input.value;
    let edit = document.createElement("i");
    edit.classList.add("fa-solid");
    edit.classList.add("fa-pen");
    // console.log(edit);
    div.appendChild(chilDiv);
    div.appendChild(edit);

    let del = document.createElement("i");
    del.classList.add("fa-regular");
    del.classList.add("fa-trash-can");
    // console.log(del);
    div.appendChild(del);
    console.log(div);
  });
};

adding();

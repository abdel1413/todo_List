let plus = document.querySelector(".fa-plus");
let input = document.querySelector("#text-field");
console.log(input.value);
const adding = () => {
  plus.addEventListener("click", () => {
    let div = document.createElement("d");
    div.classList.add("container");

    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.textContent = input.value;

    let edit = document.createElement("i");
    edit.classList.add("fa-solid");
    edit.classList.add("fa-pen");
    // console.log(edit);
    li.appendChild(edit);

    let del = document.createElement("i");
    del.classList.add("fa-regular");
    del.classList.add("fa-trash-can");

    li.appendChild(del);
    ul.appendChild(li);
    div.appendChild(ul);
    // console.log(li);
    console.log(div);
  });
};

adding();

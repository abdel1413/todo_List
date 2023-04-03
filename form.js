let displayItem = document.querySelector("#display-items");

//let inputText = document.getElementById("input-text").value;

function storedItems() {
  let inputText = document.getElementById("input-text");
  if (inputText.value == "") return;

  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", "[]");
  }

  var oldData = JSON.parse(localStorage.getItem("data"));
  oldData.push(inputText.value);

  localStorage.setItem("data", oldData);

  inputText.value = " ";

  localStorage.setItem("data", JSON.stringify(oldData));
}
let li = document.createElement("li");

function viewItems() {
  let display = document.querySelector("ul");

  li.classList.add("data-item");
  li.style.backgroundColor = "yellow";
  li.style.display = "flex";
  li.style.flexDirection = "row";
  li.style.boxSizing = "boder box";

  let i = document.createElement("i");
  i.classList.add("fa-light");
  i.classList.add("fa-delete-left");
  i.style.fontSize = "15px";
  i.style.fontFamily = "Font Awessome 6 Pro";
  i.style.lineHeight = "1em";
  i.style.marginLeft = "10px";
  i.style.backgroundColor = "pink";
  i.style.boxSizing = "border box";

  let data = JSON.parse(localStorage.getItem("data"));

  let ar = [];
  data.map((e) => {
    // console.log("e", e);
    li.textContent = e;
    // console.log(li);
  });
  for (let i = data.length - 1; i >= 0; i--) {
    console.log("d", data[i]);
    li.textContent = data[i];
    console.log("dd", li);
  }

  if (data) {
    displayItem.innerHTML = data;
    //console.log(displayItem.innerHTML);
    //ar.push(data);

    // for (let a = 0; a < ar.length; a++) {
    //   ar[a].map((element) => {
    //     console.log(element);
    //     li.textContent = element;
    //     li.appendChild(i);
    //     // console.log(li);
    //     return displayItem.appendChild(li);
    //   });
    // }
  }
}

function deletAll() {
  localStorage.clear();
}

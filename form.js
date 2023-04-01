let displayItem = document.querySelector("#display-item");
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

function viewItems() {
  let display = document.querySelector("#display-items");
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  li.classList.add("data-item");
  li.style.backgroundColor = "yellow";
  li.style.display = "flex";
  li.style.flexDirection = "row";
  li.style.boxSizing = "boder box";
  let span = document.createElement("span");
  let i = document.createElement("i");

  i.classList.add("fa-light");
  i.classList.add("fa-delete-left");
  i.style.fontSize = "15px";
  i.style.fontFamily = "Font Awessome 6 Pro";

  i.style.lineHeight = "1em";
  //i.style.marginBottom = "0px";
  i.style.marginLeft = "10px";
  i.style.backgroundColor = "pink";
  i.style.boxSizing = "border box";

  //i.style.verticalAlign = "01em";
  //span.appendChild(i);
  let data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
  for (let d of data) {
    li.textContent = d;
    li.appendChild(i);
  }
  console.log(li);
  ul.appendChild(li);
  display.appendChild(ul);
}

function deletAll() {
  localStorage.clear();
}

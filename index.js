let plus = document.querySelector(".fa-plus");
let inputValue = document.querySelector("input").value;
console.log(inputValue);
plus.addEventListener("click", () => console.log("you clicke on ", inputValue));

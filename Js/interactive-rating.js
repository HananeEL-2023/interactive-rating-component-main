const form = document.getElementById("form");
const buttons = document.querySelectorAll(".input-label .btn");
const submitBtn = document.getElementById("submit");
const result = document.getElementById("result");
const popup = document.getElementById("popup");
let ratingClicked = "";

function handleClick() {
  ratingClicked = this.value;
}
buttons.forEach((button) => button.addEventListener("click", handleClick));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (ratingClicked == "") {
    alert("Please click a button first");
  } else {
    result.innerHTML = `${ratingClicked}`;
    popup.style.visibility = "visible";
  }
});

let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".button");
let del = document.querySelector(".delete");
let allclear = document.querySelector(".all-clear");
let equal = document.querySelector(".equal");
let temp = "";

let myImg;
function myFunction() {
  var x = document.getElementsByClassName("myImg").src;
  document.getElementById("demo").innerHTML = x;
}
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const lightModeStylesheet = document.querySelector(
  'link[href="calculator.css"]'
);
const darkModeStylesheet = document.querySelector('link[href="dark.css"]');

darkModeToggle.addEventListener("click", () => {
  if (darkModeStylesheet.disabled) {
    darkModeStylesheet.disabled = false;
    lightModeStylesheet.disabled = true;
    darkModeToggle.getElementsByClassName(myImg);
  } else {
    lightModeStylesheet.disabled = false;
    darkModeStylesheet.disabled = true;
    darkModeToggle.getElementsByClassName(myImg);
  }
});
buttons.forEach((e) => {
  console.log(e.value);
});

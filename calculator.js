let display = document.querySelector("#display");
let button = document.querySelectorAll("button");
let theme = document.querySelector("#theme");
let container = document.querySelector(".container");
let string = "";

const equal = (e) => {
  console.log(e);
  if (e.target.innerHTML == "=") {
    string = eval(string);

    display.value = string;
  } else if (e.target.innerHTML == "AC") {
    string = "";
    display.value = string;
  } else if (e.target.innerHTML == "DE") {
    string = string.substring(0, string.length - 1);
    display.value = string;
  } else {
    string += e.target.innerHTML;
    display.value = string;
  }
};
// const enterKey = (e) => {
//   if (e.keyCode == 13 || e.keyCode == 61) {
//     string = eval(string);

//     display.value = string;
//   } else if (e.keyCode == 13 || e.keyCode == 61) {
//     string = "";
//     display.value = string;
//   } else if (e.keyCode == 13 || e.keyCode == 61) {
//     string = string.substring(0, string.length - 1);
//     display.value = string;
//   } else {
//     string += e.target.innerHTML;
//     display.value = string;
//   }
// };

button.forEach((button) => {
  button.addEventListener("click", equal);
});

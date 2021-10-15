const btn = document.querySelector(".btn-alert");

btn.addEventListener("click", function (e) {
  alert("button clicked");
});

const btnBackground = document.querySelector("#mybutton2");
const btnToggle = document.querySelector("#mybutton3");
const bodyBackground = btnBackground.parentElement;
const bodyBackgroundToggle = btnToggle.parentElement;

// btnBackground.addEventListener("click", function (e) {
//     const bodyBackground = btnBackground.parentElement;
//     // console.log(bodyBackground);
//     bodyBackground.classList.add("red-background");
// });

const changeColor = function () {
  bodyBackground.classList.add("red-background");
};

btnBackground.addEventListener("click", changeColor);

const toggleColor = function () {
  bodyBackgroundToggle.classList.toggle("red-background");
};

btnToggle.addEventListener("click", toggleColor);

// variabele voor de body tag
const bodyElement = document.body;
// bodyElement.classList.add("make-grey");
//variabel li items
const colorLinks = document.querySelectorAll("li");

//maak array van li items en zet een event listener op het individuele li element, voer functie om kleur te veranderen uit.

const addColorClass = function (colorClass) {
  const bodyColor = bodyElement.className;
  console.log("dit is de bodycolor", bodyColor);
    if (bodyColor) {
        console.log("laat bodycolor zien", bodyColor);
        bodyElement.classList.remove(bodyColor);
        bodyElement.classList.add(colorClass);
    } else {
        bodyElement.classList.add(colorClass);
    }
};

Array.from(colorLinks).forEach(function (link) {
    const colorClass = link.className;
    link.addEventListener("click", addColorClass(colorClass));
});


// name === undefined || name === null || name.length === 0
// een berg console logs
// console.log(colorLinks);
//   console.log(link);
//   console.log(colorClass);
//   console.log(bodyElement);

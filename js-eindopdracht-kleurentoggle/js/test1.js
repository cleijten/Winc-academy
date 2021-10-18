// variabele voor de body tag
const bodyElement = document.body;
//variabele li items
const colorLinks = document.querySelectorAll("li");
//maak array van li items en zet een event listener op het individuele li element, voer functie om kleur te veranderen uit.
Array.from(colorLinks).forEach(function (link) {
  link.addEventListener("click", function (e) {
    const colorClass = link.className;
    bodyElement.classList.add(colorClass);
  });
});

const buttonBigFive = document.getElementsByClassName("big-five-button");

// deel 1 - Elementen toevoegen aan de DOM
const btnArray = Array.from(buttonBigFive);

btnArray.forEach((item) => {
  const buttonContent = item.textContent;
  item.addEventListener("click", (event) => {
    console.log("Button", buttonContent, "is clicked");
    const ulAnimalsSpotted = document.getElementById("spotted-animals-list");
    const newLi = document.createElement("li");
    newLi.classList.add("spotted-animals-list-item");
    ulAnimalsSpotted.appendChild(newLi);
    newLi.innerHTML = buttonContent;
  });
});

//deel 2 - 1 element verwijderen uit de DOM

const btnRemoveFirst = document.getElementById("remove-first-item-button");
// console.log(btnRemoveFirst);

btnRemoveFirst.addEventListener("click", (event) => {
  const parentUl = document.getElementById("spotted-animals-list");
  console.log(parentUl);

  const childLi = parentUl.getElementsByTagName("li")[0];

  console.log(childLi);
  const removed = parentUl.removeChild(childLi)[0];
});

//deel 3 - meerdere elementen verwijderen uit de DOM

const btnRemoveAll = document.getElementById("remove-all-button");
//console.log(btnRemoveAll);

btnRemoveAll.addEventListener("click", (event) => {
  const parentUl = document.getElementById("spotted-animals-list");
  console.log(parentUl);
  const childLi = parentUl.getElementsByTagName("li");
  console.log(childLi);
  childLiArray = Array.from(childLi);
  for (i = 0; i < childLiArray.length; i++) {
    const removed = parentUl.removeChild(childLiArray[i]);
  }
});

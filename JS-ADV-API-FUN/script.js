//function for getting a random dad joke on the screen
const setRandomDadJokes = async () => {
  const ulElement = document.getElementById("dadjokes");
  ulElement.innerHTML = "";
  const dadjoke = await getRandomDadJoke();
  const li = document.createElement("li");
  const liContent = document.createTextNode(`${dadjoke.joke}`);
  li.appendChild(liContent);
  ulElement.append(li);
};

// function for getting a list of dad jokes based on a search term
const setDadJokes = async (searchTerm) => {
  const ulElement = document.getElementById("dadjoke-zoeken");
  ulElement.innerHTML = "";
  const jokes = await getDadJoke(searchTerm);
  jokes.results.forEach((e) => {
    const li = document.createElement("li");
    const liContent = document.createTextNode(`${e.joke}`);
    li.appendChild(liContent);
    ulElement.append(li);
  });
};

//get search term event listener
const keyTerm = () => {
  const button = document.getElementById("dadjoke-zoek-submit");
  button.addEventListener("click", () => {
    const searchTerm = document.getElementById("dadjoke-zoek").value;
    setDadJokes(searchTerm);
  });
};

//event listener
const random = () => {
  const button = document.getElementById("random-dadjoke");
  button.addEventListener("click", () => {
    setRandomDadJokes();
  });
};


document.addEventListener("DOMContentLoaded", () => {

  random();
  keyTerm();
});

async function get() {
  const result = await getGenres();
  const h2 = document.createElement("h2");
  const body = document.querySelector("body");
  body.appendChild(h2);
  h2.innerHTML = "Movie Genres";
  const ulElement = document.createElement("ul");
  ulElement.classList.add("genres");
  body.appendChild(ulElement);

  result.genres.forEach((element) => {
    const liElement = document.createElement("li");
    ulElement.appendChild(liElement);
    liElement.innerHTML = `genre naam: ${element.name} id: ${element.id}`;
  });
  return result;
}

async function getMovie() {
  const result = await getFavouriteMovie();
  const h1 = document.createElement("h1");
  const body = document.querySelector("body");
  body.appendChild(h1);
  h1.innerHTML = `Mijn favoriete film is: ${result.movie_results[0].original_title}`;
}

async function topRated() {
  const result = await getTopRatedMovies();
  const sortedArray = result.results.sort(function (a, b) {
    return b.vote_average - a.vote_average;
  });
  const topRatedArray = sortedArray.slice(0, 10);
  const h2 = document.createElement("h2");
  const body = document.querySelector("body");
  body.appendChild(h2);
  h2.innerHTML = "Top 10 of best rated movies of all time";
  const ulElement = document.createElement("ul");
  ulElement.classList.add("toprated");
  body.appendChild(ulElement);

  topRatedArray.forEach((element) => {
    const liElement = document.createElement("li");
    ulElement.appendChild(liElement);
    liElement.innerHTML = `title: ${element.title}, rating: ${element.vote_average}`;
  });
  return result;
}

async function topRatedAction() {
  const result = await getTopRatedActionMovies();
  const topRatedArray = result.results.slice(0, 10);
  const h2 = document.createElement("h2");
  const body = document.querySelector("body");
  body.appendChild(h2);
  h2.innerHTML = "Top Rated Action Movies";
  const ulElement = document.createElement("ul");
  ulElement.classList.add("toprated-action");
  body.appendChild(ulElement);

  topRatedArray.forEach((element) => {
    const liElement = document.createElement("li");
    ulElement.appendChild(liElement);
    liElement.innerHTML = `title: ${element.title}, rating: ${element.vote_average}, genre id : ${element.genre_ids}`;
  });
  return result;
}

async function movies1975() {
  const result = await getMovies75();
  const h2 = document.createElement("h2");
  const body = document.querySelector("body");
  body.appendChild(h2);
  h2.innerHTML = "Movies from 1975";
  const ulElement = document.createElement("ul");
  ulElement.classList.add("1975");
  body.appendChild(ulElement);

  result.results.forEach((element) => {
    const liElement = document.createElement("li");
    ulElement.appendChild(liElement);
    liElement.innerHTML = element.title;
  });
  return result;
}

getMovie();
get();
topRated();
topRatedAction();
movies1975();

//postman get https://api.themoviedb.org/3/find/tt1979376?api_key=bcd7211512731adb3ea370a9c891d2d4&language=en-US&external_source=imdb_id
//film id wordt gevonden op imdb.com, geen idee hoe anders
//favoriete film Bohemian Rhapsody id is tt1727824

//postman opdrachten POST en DEL niet uit kunnen voeren, ik krijg geen session id terug, vanwege een foutmelding die ik niet kan oplossen.

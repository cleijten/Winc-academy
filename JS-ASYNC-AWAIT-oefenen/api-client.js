const API_KEY = "bcd7211512731adb3ea370a9c891d2d4";

const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
const apiMovieUrl = `https://api.themoviedb.org/3/find/tt1727824?api_key=${API_KEY}&language=en-US&external_source=imdb_id`;
const urlTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&region=NL`;
const urlTopRatedActionMovie = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=100&with_genres=28&region=NL`;
const urlMovies75 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&region=NL&sort_by=popularity.desc&primary_release_year=1975`;

async function getGenres() {
  try {
    const res = await fetch(apiUrl);
    const movies = await res.json();
    return movies;
  } catch (err) {
    console.log("er is iets foutgegaan");
  }
}

async function getMovies75() {
  try {
    const res = await fetch(urlMovies75);
    const movies = await res.json();
    console.log("alle films", movies);
    return movies;
  } catch (err) {
    console.log("er is iets foutgegaan");
  }
}

async function getFavouriteMovie() {
  try {
    const response = await fetch(apiMovieUrl);
    const favouriteMovie = await response.json();
    return favouriteMovie;
  } catch (err) {
    console.log("er is iets foutgegaan");
  }
}

async function getTopRatedMovies() {
  try {
    const res = await fetch(urlTopRated);
    const movies = await res.json();
    return movies;
  } catch (err) {
    console.log("er is iets foutgegaan");
  }
}

async function getTopRatedActionMovies() {
  try {
    const res = await fetch(urlTopRatedActionMovie);
    const movies = await res.json();
    return movies;
  } catch (err) {
    console.log("er is iets foutgegaan");
  }
}

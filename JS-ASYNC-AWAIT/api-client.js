const API_KEY = 'geheim';
const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
console.log(apiUrl);

async function getData() {
	try {
		const res = await fetch(apiUrl);
		const movies = await res.json();
		console.log(movies);
		return movies;
     
	} catch (err) {
		console.log("er is iets foutgegaan");
	}
}




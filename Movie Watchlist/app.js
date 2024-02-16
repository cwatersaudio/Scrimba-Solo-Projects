//create movie class {img, title, rating, runtime, genres[],watchlistbutton, description}

import movie from "./movieClass.js";

//API GET function --> gets movies

//store movie list in localStorage
//

let currentMovies = [];
const movieWatchlist = [];

const searchButtonEl = document.getElementById("search--button");
const searchTitle = document.getElementById("searchArea");
const movieListEl = document.getElementById("movie--area");

searchButtonEl?.addEventListener("click", searchMovie);

searchTitle?.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		searchButtonEl.click();
	}
});

function searchMovie() {
	clearMovieArea();
	//gets an array of movies
	fetch(`http://www.omdbapi.com/?apikey=a8022ea&s=${searchTitle.value}`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			if (data.Response) {
				const movieResults = data.Search.map((item) => item.imdbID);
				makeMovObjects(movieResults, movieListEl); //sends list of movie IDs to object renderer
			} else if (data.Response === false) {
				throw Error;
			}
		})
		.catch((err) => console.error("error in fetching"));
	searchTitle.value = "";
}

async function makeMovObjects(movies, location) {
	for (const ID of movies) {
		const res = await fetch(`http://www.omdbapi.com/?apikey=a8022ea&i=${ID}`);
		const movObj = await res.json().then((movObj) => {
			//turns each movie returned into a movie object and displays them
			const currentMovie = new movie(
				movObj.Title,
				movObj.Poster,
				movObj.imdbRating,
				movObj.Runtime,
				movObj.Genre,
				movObj.Plot,
				movObj.imdbID,
			);
			currentMovies.push(currentMovie);
		});
	}
	console.log(currentMovies);
	renderMovieCards(currentMovies, location);
}
//renders each movie object as a card
export function renderMovieCards(movieArray, location) {
	//is it bad to pass 'location' through MakeMovObjects to renderMovieCards?
	console.log(movieArray);
	console.log(location);
	// movieArray.forEach((item) => {
	// 	console.log(item);
	// 	location.innerHTML += item.renderHTML();
	// });

	for (const mov of movieArray) {
		const cardHTML = renderHTML(mov);
		location.innerHTML += cardHTML;
	}
}

function clearMovieArea() {
	currentMovies = [];
	movieListEl.innerHTML = "";
}

document.addEventListener("click", (e) => {
	if (e.target.dataset.imdbid) {
		addToWatchlist(e.target.dataset.imdbid);
	}
});

function addToWatchlist(movieID) {
	const movToAdd = currentMovies.find((item) => item._ID === movieID); //finds the movie object w/ID that was clicked
	if (movieWatchlist.some((item) => item._ID === movieID)) {
		console.log("that was a duplicate");
	} else {
		//checks for dups in watchlist
		movieWatchlist.push(movToAdd); //adds that object to an array
		localStorage.setItem("movieWatchlist", JSON.stringify(movieWatchlist)); //pushes array to localStorage
		console.log(JSON.parse(localStorage.getItem("movieWatchlist")));
	}
}

// logic for 'read more/less' button in description
// document.addEventListener('DOMContentLoaded', function () {
//     var text = document.querySelector('.description');
//     var readMoreBtn = document.querySelector('.read-more');

//     if (text.scrollHeight > text.clientHeight) {
//         readMoreBtn.style.display = 'inline';
//     }

//     readMoreBtn.addEventListener('click', function (event) {
//         event.preventDefault();
//         text.classList.toggle('show-more');

//         if (text.classList.contains('show-more')) {
//             readMoreBtn.textContent = 'Read less';
//         } else {
//             readMoreBtn.textContent = 'Read more';
//         }
//     });
// });

export function renderHTML(movie) {
	const movieHTML = `<div class="movie--card">
		<img src="${movie._imgAddress}"
			alt="" class="movie--poster">
		<div class="movie--text">
			<div class="movie--row title--rating">
				<span class="title">${movie._title}</span>
				<span>⭐️ ${movie._rating}</span>
			</div>
			<div class="movie--row stats">
				<p>${movie._runtime}</p>
				<p>${movie._genres}</p>
				<img src="./assets/Plus.svg" alt="add to watchlist button" name="addToWatchlist" data-imdbID=${movie._ID}>
				<label for="addToWatchlist">Add to Watchlist</label>

			</div>
			<p class="description">
			${movie._description}
			</p>
			<a href="#" class="read-more">Read more</a>
		</div>
		

	</div>
	<hr />`;
	return movieHTML;
}

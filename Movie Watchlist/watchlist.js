import { renderMovieCards, renderHTML } from "./app.js";

const watchlistEl = document.getElementById("watchlist");
let movieWatchlist = JSON.parse(localStorage.getItem("movieWatchlist"));
console.log(movieWatchlist);

document.addEventListener(
	"DOMContentLoaded",
	renderMovieCards(movieWatchlist, watchlistEl),
);

document.addEventListener("click", (e) => {
	if (e.target.dataset.imdbid) {
		removeFromWatchlist(e.target.dataset.imdbid);
	}
});
//remove from watchlist ()
// function removeFromWatchlist(movieID) {
// 	const delID = movieWatchlist.indexOf(movieID);
// 	console.log(delID);
// 	movieWatchlist.splice(delID, 1);
// 	renderMovieCards(movieWatchlist, watchlistEl);
// }

//////////////////////////////

//remove from watchlist ()
// function removeFromWatchlist(movieID) {
// 	const delID = movieWatchlist.indexOf(movieID);
// 	console.log(delID);
// 	movieWatchlist.splice(delID, 1);
// 	renderMovieCards(movieWatchlist, watchlistEl);
// }

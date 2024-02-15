import { renderMovieCard, movieWatchlist, makeMovObjects } from "./app.js";

const watchlistEl = document.getElementById("watchlist");
//populates watchlist with objects and renders them
makeMovObjects(movieWatchlist, watchlistEl);

document.addEventListener("click", (e) => {
	if (e.target.dataset.imdbid) {
		removeFromWatchlist(e.target.dataset.imdbid);
	}
});
//remove from watchlist ()
function removeFromWatchlist(movieID) {
	const delID = movieWatchlist.indexOf(movieID);
	console.log(delID);
	movieWatchlist.splice(delID, 1);
	renderMovieCard;
}

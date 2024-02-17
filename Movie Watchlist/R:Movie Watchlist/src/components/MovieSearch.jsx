import React from "react";

export default function MovieSearch(props) {


	return (
		<div className="movie--card">
			<img src={props.imgAddress} alt="" class="movie--poster">
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
				</div>);
}


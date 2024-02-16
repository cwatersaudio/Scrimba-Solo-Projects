import React from "react";

export default function Navbar(props) {
	return (
		<nav class="navbar">
			<div class="top--nav">
				<h1>Find Your Film</h1>
				{}
				<a href="">My Watchlist</a>
			</div>
			<div id="searchbar">
				<input
					id="searchArea"
					type="text"
					placeholder="&#128270 Type your movie here"
				/>
				<button id="search--button" type="submit">
					Search
				</button>
			</div>
		</nav>
	);
}

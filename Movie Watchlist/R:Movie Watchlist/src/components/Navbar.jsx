import React from "react";

export default function Navbar(props) {

	console.log(props.buttonStatus)
	return (
		<nav class="navbar">
			<div class="top--nav">
				<h1>Find Your Film</h1>
				<a href="">{props.buttonStatus === 'watchlist'?`My Watchlist`:`Search for Movies`}</a>
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

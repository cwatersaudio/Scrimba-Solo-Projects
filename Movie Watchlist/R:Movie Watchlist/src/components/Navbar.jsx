import React from "react";

export default function Navbar(props) {

	const [searchText, setSearchText] = React.useState("")

	function handleChange(event) {
		setSearchText(event.target.value)
	}
	return (
		<nav class="navbar">
			<div class="top--nav">
				<h1>Find Your Film</h1>
				<a href="">{props.buttonStatus === 'watchlist' ? `My Watchlist` : `Search for Movies`}</a>
			</div>
			<div id="searchbar">
				<input
					id="searchArea"
					type="text"
					placeholder="Type your movie here"
					value={searchText}
					onChange={handleChange}
				/>
				<button id="search--button" type="submit" onClick={() => {
					props.searchMovie(searchText)
					setSearchText("")
				}}>
					Search
				</button>
			</div>
		</nav>
	);
}

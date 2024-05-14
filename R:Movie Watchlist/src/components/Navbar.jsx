import React from "react";

export default function Navbar(props) {

	const [searchText, setSearchText] = React.useState("")

	function handleChange(event) {
		setSearchText(event.target.value)
	}
	return (
		<nav className="navbar">
			<div className="top--nav">
				{screen === "search" ? <h1>Find Your Film</h1> : <h1>Watchlist</h1>}
				<button type='button' onClick={props.toggleScreen}>{props.screen === 'watchlist' ? "My Watchlist" : "Search for Movies"}</button>
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

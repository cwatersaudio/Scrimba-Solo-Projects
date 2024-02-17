import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";

//State: CURRENT MOVIES
// STATE: WATCHLIST
const {buttonStatus,setButtonStatus} = React.useState("watchlist")
//fn:Movie Search

function searchMovie(title) {
	// clearMovieArea();
	//gets an array of movies
	fetch(`http://www.omdbapi.com/?apikey=a8022ea&s=${title}`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			if (data.Response) {
				const movieResults = data.Search.map((item) => item.imdbID);
			} else if (data.Response === false) {
				throw Error;
			}
		})
		.catch((err) => console.error("error in fetching"));
}

function App() {
	return (
		<>
			<Navbar 
			buttonStatus = {buttonStatus}
			handleClick = {searchMovie}
			/>

		</>
	);
}

export default App;

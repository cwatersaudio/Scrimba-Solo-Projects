import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";



export function App() {

	const [buttonStatus, setButtonStatus] = React.useState("watchlist")


	//State: CURRENT MOVIES
	// STATE: WATCHLIST
	//fn:Movie Search


	// clearMovieArea();
	//gets an array of movies


	function searchMovie(title) {
		console.log(title)

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
	return (
		<>
			<Navbar
				buttonStatus={buttonStatus}
				searchMovie={searchMovie}
			/>

		</>
	);
}

export default App;

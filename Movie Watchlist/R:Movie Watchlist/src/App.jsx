import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";



export default function App() {

	const [buttonStatus, setButtonStatus] = React.useState("watchlist")
	const [currentMovies, setCurrentMovies] = React.useState([])

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
					setCurrentMovies(movieResults) //current movies is here a list of IDs
					getMovieData(currentMovies)
				} else if (data.Response === false) {
					throw Error;
				}
			})
			.catch((err) => console.error("error in fetching"));
	}


	async function getMovieData(currentMovies) {
		console.log('function ran')
		let fullMovieData = []
		for (const ID of currentMovies) {
			const res = await fetch(`http://www.omdbapi.com/?apikey=a8022ea&i=${ID}`);
			const movData = await res.json()
			const currentMovie = {
				title: movData.Title,
				poster: movData.Poster,
				imdbRating: movData.imdbRating,
				runtime: movData.Runtime,
				genre: movData.Genre,
				plot: movData.Plot,
				imdbID: movData.imdbID
			}
			fullMovieData.push(currentMovie)
			console.log(currentMovie)
		}
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


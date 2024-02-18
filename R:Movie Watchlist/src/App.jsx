import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchDisplay from "./components/SearchDisplay";
import movieIcon from "./assets/Icon.svg"





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
					getMovieData(movieResults)
				} else if (data.Response === false) {
					throw Error;
				}
			})
			.catch((err) => console.error("error in fetching"));
	}


	async function getMovieData(currentIDs) {
		console.log('function ran')
		const fullMovieData = []
		for (const ID of currentIDs) {
			const res = await fetch(`http://www.omdbapi.com/?apikey=a8022ea&i=${ID}`);
			const movData = await res.json()
			const currentMovie = {
				title: movData.Title,
				poster: movData.Poster,
				imdbRating: movData.imdbRating,
				runtime: movData.Runtime,
				genre: movData.Genre,
				plot: movData.Plot,
				imdbID: movData.imdbID,
				watchlist: false
			}
			fullMovieData.push(currentMovie)
			console.log(currentMovie)
			console.log(fullMovieData)
		}
		setCurrentMovies(fullMovieData)
	}





	return (
		<div className="app--container">
			<Navbar
				buttonStatus={buttonStatus}
				searchMovie={searchMovie}
			/>
			<div className="movie--area">
				<SearchDisplay
					currentMovies={currentMovies}
				/>

				{/* // (currentMovies.length > 0) ?
				// 	<SearchDisplay
				// 		currentMovies={currentMovies}
				// 	/>
					// :
					// <div className="no--movies">
					// 	<img
					// 		src={movieIcon}
					// 		alt="movie icon"
					// 	/>
					// 	<p className="dafault--text">Start Exploring</p>
					// </div>
				// } */}

			</div>


		</div >
	);
}


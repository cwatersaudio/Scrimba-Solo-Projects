import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchDisplay from "./components/SearchDisplay";
import movieIcon from "./assets/Icon.svg"
import Watchlist from "./components/Watchlist";





export default function App() {

	const [screen, setScreen] = React.useState("search")
	const [currentMovies, setCurrentMovies] = React.useState([])
	const [watchlist, setWatchlist] = React.useState([])
	const [loading, setLoading] = React.useState(false)
	//State: CURRENT MOVIES
	// STATE: WATCHLIST
	//fn:Movie Search


	// clearMovieArea();
	//gets an array of movies
	React.useState

	function searchMovie(title) {
		setLoading(true)
		if (title.length > 0) {
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
				.catch((err) => {
					setLoading(false)
					console.error("error in fetching")

				}
				);
		}
	}


	async function getMovieData(currentIDs) {
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
		setLoading(false)
	}

	function toggleWatchlist(ID) {
		const indexToToggle = currentMovies.findIndex(item => item.imdbID === ID)
		const newList = [...currentMovies]
		newList[indexToToggle].watchlist = !newList[indexToToggle].watchlist
		setCurrentMovies(newList)

	}

	function addToWatchlist(ID) {
		const indexToAdd = currentMovies.findIndex(item => item.imdbID === ID)
		const itemToAdd = currentMovies[indexToAdd]
		toggleWatchlist(ID)
		setWatchlist(prevList => {
			return [
				...prevList,
				itemToAdd
			]
		})
		console.log(watchlist)
	}

	function removeFromWatchlist(ID) {
		// const indexToRemove = watchlist.findIndex(item => item.imdbID === ID)
		const newWatchlist = watchlist.filter(item => item.imdbID !== ID)
		toggleWatchlist(ID)
		setWatchlist(newWatchlist)
	}

	function toggleScreen() {
		setScreen(prevScreen => {
			return prevScreen === "search" ? "watchlist" : "search"
		})
	}








	return (
		<div className="app--container">
			<Navbar
				screen={screen}
				searchMovie={searchMovie}
				toggleScreen={toggleScreen}
			/>
			<div className="movie--area">
				{screen === "search" ? (
					loading ? (
						<div className="no--movies">
							<img
								src={movieIcon}
								alt="movie icon"
							/>
							<p className="dafault--text">Loading...</p>
						</div>
					) : currentMovies.length > 0 ? (
						<SearchDisplay
							currentMovies={currentMovies}
							addToWatchlist={addToWatchlist}
							removeFromWatchlist={removeFromWatchlist}
						/>
					) : (
						<div className="no--movies">
							<img
								src={movieIcon}
								alt="movie icon"
							/>
							<p className="dafault--text">Start Exploring</p>
						</div>
					)
				) : screen === "watchlist" ? (
					<Watchlist
						watchlist={watchlist}
						removeFromWatchlist={removeFromWatchlist} />
				) : null}
			</div>
		</div>
	);

}


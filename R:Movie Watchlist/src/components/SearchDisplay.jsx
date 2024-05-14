import React from "react";
import { MovieCard } from "./MovieCard";
import { WatchlistContext } from "../App"


export default function SearchDisplay(props) {
	const { currentMovies, addToWatchlist, removeFromWatchlist } = React.useContext(WatchlistContext)
	const searchResults = currentMovies.map((mov) => {

		return (<MovieCard
			// key={index} //need an index here
			movie={mov}
		// addToWatchlist={addToWatchlist}
		// removeFromWatchlist={removeFromWatchlist}
		/>)

	})


	return (
		<>
			{searchResults}
		</>
	)

}


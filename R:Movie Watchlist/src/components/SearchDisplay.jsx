import React from "react";
import { MovieCard } from "./MovieCard";

export default function SearchDisplay({ currentMovies, addToWatchlist, removeFromWatchlist }) {


	const searchResults = currentMovies.map((mov) => {

		return (<MovieCard
			// key={index} //need an index here
			movie={mov}
			addToWatchlist={addToWatchlist}
			removeFromWatchlist={removeFromWatchlist}
		/>)

	})


	return (
		<>
			{searchResults}
		</>
	)

}


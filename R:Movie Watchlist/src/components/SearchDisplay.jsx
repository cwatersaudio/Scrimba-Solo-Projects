import React from "react";
import { MovieCard } from "./MovieCard";

export default function SearchDisplay({ currentMovies }) {


	const searchResults = currentMovies.map((mov, index) => {

		return (<MovieCard
			// key={index} //need an index here
			movie={mov}
		/>)

	})


	return (
		<>
			{searchResults}
		</>
	)

}

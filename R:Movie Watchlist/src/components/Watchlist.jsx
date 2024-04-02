import React from "react";
import { MovieCard } from "./MovieCard";

//receives array of movie objects

//function to map through array and make <MovieCard />

export default function WatchlistDisplay({ watchlist, removeFromWatchlist }) {

	const watchlistUI = watchlist.map((mov) => {

		return (<MovieCard
			// key={index} //need an index here
			movie={mov}
			removeFromWatchlist={removeFromWatchlist}
		/>)

	})



	return <>
		{watchlistUI}
	</>;
}

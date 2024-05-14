import React from "react";
import { MovieCard } from "./MovieCard"
import { WatchlistContext } from "../App"


export default function WatchlistDisplay(props) {

	const { watchlist, removeFromWatchlist } = React.useContext(WatchlistContext)

	const watchlistUI = watchlist.map((mov) => {

		return (<MovieCard
			key={mov.title} //need an index here
			movie={mov}
			removeFromWatchlist={removeFromWatchlist}
		/>)

	})



	return <>
		{watchlist.length > 0 ? watchlistUI : <h1>Your watchlist is empty</h1>}
	</>;
}

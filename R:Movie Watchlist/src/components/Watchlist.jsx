import React from "react";
import { MovieCard } from "./MovieCard"
import { WatchlistContext } from "../App"


export default function WatchlistDisplay(props) {

	const { watchlist } = React.useContext(WatchlistContext)

	const watchlistUI = watchlist.map((mov) => {

		return (<MovieCard
			key={mov.title} //need a unique index here
			movie={mov}
		/>)

	})

	return <>
		{watchlist.length > 0 ? watchlistUI : <h1>Your watchlist is empty</h1>}
	</>;
}

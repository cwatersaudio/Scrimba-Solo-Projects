import React from "react";
import plus from "../assets/Plus.svg"
import minus from "../assets/Minus.svg"
import { WatchlistContext } from "../App"

export const MovieCard = ({ movie }) => {
	const { title, poster, imdbRating, runtime, genre, plot, imdbID, onWatchlist } = movie
	const { addToWatchlist, removeFromWatchlist } = React.useContext(WatchlistContext)


	return (
		<>
			<div class="movie--card">
				<img src={poster} alt="" className="movie--poster" />
				<div className="movie--text">
					<div className="movie--row title--rating">
						<span className="title">{title}</span>
						<span>⭐️ {imdbRating}</span>
					</div>
					<div className="movie--row stats">
						<p>{runtime}</p>
						<p>{genre}</p>
						{!onWatchlist ? < img
							src={plus}
							alt="add to watchlist button"
							name="addToWatchlist"
							onClick={() => { addToWatchlist(imdbID) }}
						/>
							: <img
								src={minus}
								alt="remove to watchlist button"
								name="removeFromWatchlist"
								onClick={() => { removeFromWatchlist(imdbID) }}
							/>

						}

					</div>
					<p className="description">{plot}</p>
					{/* <a href="" class="read-more">Read more</a> */}
				</div>
			</div>
			<hr />

		</>



	)
}

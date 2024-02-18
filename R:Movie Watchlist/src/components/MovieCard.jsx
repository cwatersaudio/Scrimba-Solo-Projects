import React from "react";
import plus from "../assets/Plus.svg"
import minus from "../assets/Minus.svg"

export const MovieCard = (props) => {
	const { title, poster, imdbRating, runtime, genre, plot, imdbID, watchlist } = props.movie


	function toggleAdded() {

	}
	return (

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
					{!watchlist ? < img
						src={plus}
						alt="add to watchlist button"
						name="addToWatchlist"
					/>
						: <img
							src={minus}
							alt="remove to watchlist button"
							name="removeFromWatchlist"
						/>

					}

				</div>
				<p className="description">${plot}</p>
				{/* <a href="" class="read-more">Read more</a> */}
			</div>
			<hr />
		</div>


	)
}

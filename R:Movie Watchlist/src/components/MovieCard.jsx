import React from "react";
import plus from "../assets/Plus.svg"
import minus from "../assets/Minus.svg"

export const MovieCard = (movie) => {


	function toggleAdded() {

	}
	return (

		<div class="movie--card">
			<img src={movie._imgAddress} alt="" className="movie--poster" />
			<div className="movie--text">
				<div className="movie--row title--rating">
					<span className="title">{movie._title}</span>
					<span>⭐️ {movie._rating}</span>
				</div>
				<div className="movie--row stats">
					<p>{movie._runtime}</p>
					<p>{movie._genres}</p>
					{!movie.added ? < img
						src={plus}
						alt="add to watchlist button"
						name="addToWatchlist"
					/>
						: <img
							src={minus}
							alt="add to watchlist button"
							name="addToWatchlist"
						/>

					}

				</div>
				<p className="description">${movie._description}</p>
				{/* <a href="" class="read-more">Read more</a> */}
			</div>
			<hr />
		</div>


	)
}

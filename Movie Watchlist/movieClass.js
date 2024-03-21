export default class movie {
	constructor(title, imgAddress, rating, runtime, genres, description, ID) {
		this._title = title;
		this._rating = rating;
		this._runtime = runtime;
		this._genres = genres;
		this._description = description;
		this._imgAddress = imgAddress;
		this._ID = ID;

		function getTitle() {
			return this._title;
		}

		function setTitle(title) {
			this._title = title;
		}

		function getRating() {
			return this.rating;
		}

		function setRating(rating) {
			this.rating = rating;
		}

		function getRuntime() {
			return this.runtime;
		}

		function setRuntime(runtime) {
			this.runtime = runtime;
		}

		function getGenres() {
			return this.genres;
		}

		function setGenres(genres) {
			this.genres = genres;
		}

		function getDescription() {
			return this.description;
		}

		function setDescription(description) {
			this.description = description;
		}

		function getImgAddress() {
			return this.imgAddress;
		}

		function setImgAddress(imgAddress) {
			this.imgAddress = imgAddress;
		}

		function getID() {
			return this.ID;
		}
	}

	//movie methods

	renderHTML() {
		const movieHTML = `<div class="movie--card">
            <img src="${this._imgAddress}"
                alt="" class="movie--poster">
            <div class="movie--text">
                <div class="movie--row title--rating">
                    <span class="title">${this._title}</span>
                    <span>⭐️ ${this._rating}</span>
                </div>
                <div class="movie--row stats">
                    <p>${this._runtime}</p>
                    <p>${this._genres}</p>
                    <img src="./assets/Plus.svg" alt="add to watchlist button" name="addToWatchlist" data-imdbID=${this._ID}>
                    <label for="addToWatchlist">Add to Watchlist</label>

                </div>
                <p class="description">
                ${this._description}
                </p>
                <a href="#" class="read-more">Read more</a>
            </div>
            

        </div>
        <hr />`;
		return movieHTML;
	}
}

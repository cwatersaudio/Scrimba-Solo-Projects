export default class Movie {
    constructor(
        imgAddress,
        title,
        rating,
        runtime,
        genres,
        description) {
        this._title = title;
        this._rating = rating;
        this._runtime = runtime;
        this._genres = genres;
        this._description = description;
        this._imgAddress = imgAddress;

        function getTitle() {
            return this.title;
        }

        function setTitle(title) {
            this.title = title;
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

    }


}
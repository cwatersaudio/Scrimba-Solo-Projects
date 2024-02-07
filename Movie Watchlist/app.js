//create movie class {img, title, rating, runtime, genres[],watchlistbutton, description}

//API GET function --> gets movies

//store movie list in localStorage
//


function searchMovie() {
    event.preventDefault(); //why is this 'depreciated'?
    const searchTitle = document.getElementById('searchArea').value
    console.log(searchTitle)

    fetch(`http://www.omdbapi.com/?apikey=a8022ea&s=${searchTitle}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

}

function renderMovieCard(movObj) {


}


// logic for 'read more/less' button in description
document.addEventListener('DOMContentLoaded', function () {
    var text = document.querySelector('.description');
    var readMoreBtn = document.querySelector('.read-more');

    if (text.scrollHeight > text.clientHeight) {
        readMoreBtn.style.display = 'inline';
    }

    readMoreBtn.addEventListener('click', function (event) {
        event.preventDefault();
        text.classList.toggle('show-more');

        if (text.classList.contains('show-more')) {
            readMoreBtn.textContent = 'Read less';
        } else {
            readMoreBtn.textContent = 'Read more';
        }
    });
});


const sampleMovie = {
    "Title": "The Lord of the Rings: The Fellowship of the Ring",
    "Year": "2001",
    "Rated": "PG-13",
    "Released": "19 Dec 2001",
    "Runtime": "178 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
    "Actors": "Elijah Wood, Ian McKellen, Orlando Bloom",
    "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "Language": "English, Sindarin",
    "Country": "New Zealand, United States",
    "Awards": "Won 4 Oscars. 125 wins & 127 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    "Metascore": "92",
    "imdbRating": "8.9",
    "imdbVotes": "1,973,498",
    "imdbID": "tt0120737",
}

{/* <div class="movie--card">
                <img src="https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
                    alt="" class="movie--poster">
                <div class="movie--text">
                    <div class="movie--row title--rating">
                        <span class="title">The Lord of the Rings</span>
                        <span>⭐️ 4.5</span>
                    </div>
                    <div class="movie--row stats">
                        <p>Runtime</p>
                        <p>Genres</p>
                        <img src="./assets/Plus.svg" alt="add to watchlist button" name="addToWatchlist">
                        <label for="addToWatchlist">Add to Watchlist</label>

                    </div>
                    <p class="description">A meek Hobbit from the Shire and eight companions set out on a journey to
                        destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron. A meek Hobbit
                        from the Shire and eight companions set out on a journey to destroy the powerful One Ring and
                        save Middle-earth from the Dark Lord Sauron.
                    </p>
                    <a href="#" class="read-more">Read more</a>
                </div>

            </div> */}
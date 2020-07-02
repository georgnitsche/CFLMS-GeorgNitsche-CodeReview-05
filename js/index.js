var allMovies = [];

JSON.parse(movies).forEach(function(movie) {
    var newMovie = new Movie(movie.name, movie.description, movie.imageUrl);
    allMovies.push(newMovie);
    document.getElementById('list').appendChild(newMovie.getMovieHtml());
});

function addLikes(movie) {
    movie.addLikes();
}
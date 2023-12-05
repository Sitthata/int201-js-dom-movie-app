
export class MovieManager {
  constructor() {
    this.movies = [];
  }

  getMovies() {
    return this.movies;
  }

  setMovies(movies) {
    this.movies = movies;
  }

  addMovie(movie) {
    this.movies.push(movie);
  }

  sortByRating() {
    return this.movies.sort((a, b) => b.rating - a.rating);
  }

  sortByName() {
    return this.movies.sort((a, b) => a.title.localeCompare(b.title));
  }

  findMovie(id) {
    return this.movies.find((movie) => movie.id === id);
  }

  findMovieIndex(id) {
    return this.movies.findIndex((movie) => movie.id === id);
  }

  findByName(name) {
    return this.movies.filter((movie) => movie.include(name));
  }
}

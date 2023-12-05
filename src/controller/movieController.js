import { MovieManager } from "./../model/moviesList";
import { initializeMovies } from "./../utils/initMovies";

export function pageManager() {
  const movieManager = new MovieManager();
  movieManager.setMovies(initializeMovies());

  const initalPage = () => {
    const input = document.getElementsByTagName("input")[0];
    const ratingBtn = document.getElementById("rating");
    const nameBtn = document.getElementById("name");
    const movies = movieManager.getMovies();
    showCards(movies);
    input.addEventListener("keydown", searchHandler);
    ratingBtn.addEventListener("click", () => {
      const sortedByRating = movieManager.sortByRating();
      showCards(sortedByRating);
    })
    nameBtn.addEventListener("click", () => {
      const sortedByName = movieManager.sortByName()
      showCards(sortedByName);
    })
    console.log(input);
  }

  const showCards = (movies) => {
    const createMovieCard = (movie) => {
      const div = document.createElement("div");
      div.className = "card-body bg-white text-slate-900 rounded-md";

      const h2 = document.createElement("h2");
      h2.className = "card-title flex items-center";
      h2.textContent = movie.title;

      const badge = document.createElement("div");
      badge.className = "badge";
      badge.textContent = movie.category;

      const p = document.createElement("p");
      p.setAttribute("id", "description");
      p.textContent = movie.description;

      const h3 = document.createElement("h3");
      h3.className = "text-lg font-bold";
      h3.textContent = "Rating: ";
      const span = document.createElement("span");
      span.textContent = movie.rating;
      span.setAttribute("id", "rating");
      h3.appendChild(span);

      div.appendChild(badge);
      div.appendChild(h2);
      div.appendChild(p);
      div.appendChild(h3);
      return div;
    }
    const cardList = document.getElementById("card-list");
    cardList.innerHTML = "";
    movies.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      cardList.appendChild(movieCard);
    });
  }

  const searchHandler = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredMovies = movieManager.getMovies().filter((movie) => movie.title.toLowerCase().includes(value))
    showCards(filteredMovies);
  }

  return {
    initalPage
  }
}




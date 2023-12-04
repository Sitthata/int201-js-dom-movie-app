import { MovieManager } from "./../model/moviesList";
import { initializeMovies } from "./../utils/initMovies";

const movieManager = new MovieManager();
movieManager.setMovies(initializeMovies());

export function renderMovies(movies) {
  const cardList = document.getElementById("card-list");
  movies.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    cardList.appendChild(movieCard);
  });
}

function createMovieCard(movie) {
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

document.addEventListener("DOMContentLoaded", () => {
  renderMovies(movieManager.getMovies());
});

const searchBox = document.getElementById("search-box");
const input = searchBox.children[0];
const searchButton = document.getElementById("search-btn");
const error = document.getElementById("error");

searchButton.addEventListener("click", () => {
    if (!input.value) {
        error.textContent = "Enter movie name first!"
        return;
    }

    error.textContent = "";
})
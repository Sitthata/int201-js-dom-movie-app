import { Movie } from "../model/movies";

export function initializeMovies() {
  const movie1 = new Movie(
    "Eternal Sunshine of the Spotless Mind",
    "Drama",
    "A couple undergo a procedure to erase each other from their memories when their relationship turns sour, but it is only through the process of loss that they discover what they had to begin with.",
    8.3
  );
  const movie2 = new Movie(
    "Interstellar",
    "Sci-fi",
    "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    8.6
  );
  const movie3 = new Movie(
    "The Grand Budapest Hotel",
    "Comedy",
    "A famous hotel's concierge and his lobby boy become close friends and go on various adventures to protect a priceless Renaissance painting.",
    8.1
  );
  const movie4 = new Movie(
    "Inception",
    "Action",
    "A thief who steals corporate secrets through dream-sharing technology is tasked with planting an idea into the mind of a CEO.",
    8.8
  );
  const movie5 = new Movie(
    "Moonlight",
    "Drama",
    "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
    7.4
  );
  const movie6 = new Movie(
    "The Shape of Water",
    "Romance",
    "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.",
    7.3
  );
  const movie7 = new Movie(
    "Mad Max: Fury Road",
    "Action",
    "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    8.1
  );
  const movie8 = new Movie(
    "Parasite",
    "Thriller",
    "A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. But their easy life gets complicated when their deception is threatened with exposure.",
    8.6
  );
  const movie9 = new Movie(
    "Whiplash",
    "Drama",
    "A young drummer enrolls at a music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    8.5
  );
  const movie10 = new Movie(
    "La La Land",
    "Musical",
    "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    8.0
  );
  return [
    movie1,
    movie2,
    movie3,
    movie4,
    movie5,
    movie6,
    movie7,
    movie8,
    movie9,
    movie10,
  ];
}

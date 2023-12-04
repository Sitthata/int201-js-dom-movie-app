export class Movie {
  static currentId = 1;
  constructor(title, category, description, rating) {
    this.id = Movie.currentId++;
    this.title = title;
    this.category = category;
    this.description = description;
    this.rating = rating;
  }

  getMovie() {
    return this;
  }
}

const numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const nameFilm1 = prompt("Один з останніх переглянутих фільмів", ""),
  ratingFilm1 = prompt("Яку б ви оцінку йому поставили?", ""),
  nameFilm2 = prompt("Один з останніх переглянутих фільмів", ""),
  ratingFilm2 = prompt("Яку б ви оцінку йому поставили?", "");


personalMovieDB.movies[nameFilm1]=ratingFilm1;
personalMovieDB.movies[nameFilm2]=ratingFilm2


  console.log(personalMovieDB);

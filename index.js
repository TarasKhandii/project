const numberOfFilms = prompt("Скільки фільмів ви вже подивились?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// const nameFilm1 = prompt("Один з останніх переглянутих фільмів", ""),
//   ratingFilm1 = prompt("Яку б ви оцінку йому поставили?", ""),
//   nameFilm2 = prompt("Один з останніх переглянутих фільмів", ""),
//   ratingFilm2 = prompt("Яку б ви оцінку йому поставили?", "");

// personalMovieDB.movies[nameFilm1] = ratingFilm1;
// personalMovieDB.movies[nameFilm2] = ratingFilm2;

//  заміняєм повторення питань на цикл (внизу)

// for (let i = 0; i < 2; i++) {
//   const nameFilm1 = prompt("Один з останніх переглянутих фільмів", ""),
//     ratingFilm1 = prompt("Яку б ви оцінку йому поставили?", "");

// // умови на пусту строку , відміну і к-ть символів більше ніж 50

//   if (nameFilm1 != null && ratingFilm1 != null&& nameFilm1!='' && ratingFilm1!='' && nameFilm1.length<50){
//     personalMovieDB.movies[nameFilm1] = ratingFilm1;
// console.log('done');
//   } else{
//     console.log('error');
//     // повертає один цикл назад, і воно запускає ше раз питання
//     i--
//   }
// }
// console.log(personalMovieDB);


if (personalMovieDB.count <= 10) {
  alert("Мало фільмів");
} else if (personalMovieDB.count < 30) {
  alert("Середна к-сть фільмів");
} else if (personalMovieDB.count >=30) {
  alert("кіноман");
} else{
  alert('error')
}

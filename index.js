let numberOfFilms;

function start() {
  numberOfFilms = prompt("Скільки фільмів ви вже подивились?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Скільки фільмів ви вже подивились?", "");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

//  заміняєм повторення питань на цикл (внизу)

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один з останніх переглянутих фільмів", ""),
      b = prompt("Яку б ви оцінку йому поставили?", "");

    // умови на пусту строку , відміну і к-ть символів більше ніж 50

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
      // повертає один цикл назад, і воно запускає ше раз питання
    }
  }
}
rememberMyFilms();

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] =prompt(`Ваш любимий жанр під номером ${i + 1}`, "");
  }
}
writeYourGenres();

function detectPersonalLevel() {
  if (personalMovieDB.count <= 10) {
    alert("Мало фільмів");
  } else if (personalMovieDB.count < 30) {
    alert("Середна к-сть фільмів");
  } else if (personalMovieDB.count >= 30) {
    alert("кіноман");
  } else {
    alert("error");
  }
}
detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

console.log(personalMovieDB);

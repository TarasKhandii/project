const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  // privat: true,
  start: function () {
    personalMovieDB.count = prompt("Скільки фільмів ви вже подивились?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = prompt("Скільки фільмів ви вже подивились?", "");
    }
  },
  rememberMyFilms: function () {
    //  заміняєм повторення питань на цикл
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count <= 10) {
      alert("Мало фільмів");
    } else if (personalMovieDB.count < 30) {
      alert("Середна к-сть фільмів");
    } else if (personalMovieDB.count >= 30) {
      alert("кіноман");
    } else {
      alert("error");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
      console.log("*", personalMovieDB.privat);
    } else {
      personalMovieDB.privat = true;
      console.log("+", personalMovieDB.privat);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      // let gener = prompt(`Ваш любимий жанр під номером ${i + 1}`, "");
      // if (gener === "" || gener === null) {
      //   console.log("ви влели не коректні дані");
      //   i--;
      // } else {
      //   personalMovieDB.genres[i] = gener;
      // }

      let genres = prompt('введіть ваші улюблені жанри черех кому', "").toLowerCase();
      if (genres === "" || genres === null) {
        console.log("ви влели не коректні дані");
        i--;
      } else {
        personalMovieDB.genres = genres.split(',')
        personalMovieDB.genres.sort()
      }
    }
    personalMovieDB.genres.forEach((item, index) => {
      console.log(` любимий жанр ${index + 1} - це ${item}`);
    });
  },
};

// toggleVisibleMyDB(personalMovieDB.privat);
// console.log(personalMovieDB);

"use strict";

let numberOfFilms = prompt ('Сколько фильмов Вы уже просмотрели?', '');

const personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false

};


if (numberOfFilms < 10){
    alert ('Вы просмотрели слишком мало фильмов');
} else if (numberOfFilms >= 10 && numberOfFilms <= 30){
    alert ('Вы классический зритель');
} else if (numberOfFilms > 30){
    alert('Вы киноман');
} else {
    alert ('Произошла ошибка');
}

for (let i = 1; i <=2; i++){

    let lastFilm = prompt ('Какой последний фильм Вы просмотрели?', ''),
        lastFilmRang = prompt ('Во сколько Вы оцените этот фильм?', '');

    if (lastFilm == null || lastFilm.length == 0 || lastFilm.length >= 50) {
        i--;
        continue;
    }
   

    personalMovieDB.movies[lastFilm] = lastFilmRang;

}

console.log(personalMovieDB);
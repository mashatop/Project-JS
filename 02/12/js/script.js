"use strict";

let numberOfFilms = prompt ('Сколько фильмов Вы уже просмотрели?', '');

const personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false

};

let lastFilm = prompt ('Какой последний фильм Вы просмотрели?', ''),
    lastFilmRang = prompt ('Во сколько Вы оцените этот фильм?', '');

personalMovieDB.movies[lastFilm] = lastFilmRang;


lastFilm = prompt ('Какой последний фильм Вы просмотрели?', '');
lastFilmRang = prompt ('Во сколько Вы оцените этот фильм?', '');

personalMovieDB.movies[lastFilm] = lastFilmRang;

console.log(personalMovieDB);
"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt ('Сколько фильмов Вы уже просмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt ('Сколько фильмов Вы уже просмотрели?', ''); 
    }
}

start();

const personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false

};


function rememberMyFilms(){
    for (let i = 1; i <=2; i++){

        let lastFilm = prompt ('Какой последний фильм Вы просмотрели?', ''),
            lastFilmRang = prompt ('Во сколько Вы оцените этот фильм?', '');
    
        if (lastFilm == null || lastFilm.length == 0 || lastFilm.length >= 50) {
            i--;
            continue;
        }
       
    
        personalMovieDB.movies[lastFilm] = lastFilmRang;
    
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (numberOfFilms < 10){
        alert ('Вы просмотрели слишком мало фильмов');
    } else if (numberOfFilms >= 10 && numberOfFilms <= 30){
        alert ('Вы классический зритель');
    } else if (numberOfFilms > 30){
        alert('Вы киноман');
    } else {
        alert ('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log('Хрень');
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр № ${i}`);
    }
}
writeYourGenres();
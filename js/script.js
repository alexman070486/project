"use strict";
// Задача №1

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

const lastMovieOne = prompt("Один из последних фильмов?");
const lastMovieOneMark = prompt("На сколько оцените его?");

const lastMovieTwo = prompt("Еще один из последних фильмов?");
const lastMovieTwoMark = prompt("На сколько оцените его?");


const personalMovieDb = {
   private: false,
   actor: {},
   genres: [],
   movies: {},
   count: numberOfFilms,
};

console.log(personalMovieDb);

personalMovieDb.movies[lastMovieOne] = lastMovieOneMark;
personalMovieDb.movies[lastMovieTwo] = lastMovieTwoMark;

console.log(personalMovieDb);

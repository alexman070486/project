"use strict";
// Задача №1
/*
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
*/
/*
let i = 5
do {
   console.log(i);
   i++;
} while (i < 11);
*/
/*
for (let num = 20; num > 9; num--){
   console.log(num);
   if (num == 13) {
      console.log("break"); 
      break;
   }
}
*/
/*
for (let num = 2; num < 11; num = num + 2){
   console.log(num);
}
*/
/*
let i = 2;
while (i < 11) {
   if (i % 2 === 0) {
      continue;
   } else {
      console.log(i);
      i++;
   }
}
*/
/*
const arrayOfNumbers = [];
let i = 0;
for (let num = 5; num < 11; num++){
   arrayOfNumbers[i] = num;
   i++;
}
console.log(arrayOfNumbers);
*/
/*
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (let i = 0; i < arr.length; i++){
   result[i] = arr[i];
}
console.log(result);
*/
/*
const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++){
   if (typeof(data[i]) == "number"){
      data[i] = data[i] * 2;
   }
   else {
      data[i] = data[i] + " - done"
   }
}
console.log(data);

*/
/*
const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
let j = 0;
for (let i = data.length - 1; i >= 0; i--){
   result[j] = data[i];
   j++;
}

console.log(result);
*/
/*
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
   for (let j = 0; j < lines - i; j++) {
      result += " ";
   }
    for (let j = 0; j < 2 * i + 1; j++) {
      result += "*";
   }
   result += "\n";
}

console.log(result);
*/
"use strict";
// Задача №1

let numberOfFilms;

function start(){
   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
   }
};

start();

const personalMovieDb = {
   private: false,
   actor: {},
   genres: [],
   movies: {},
   count: numberOfFilms,
};

function rememberMyFilms(){
   for( let i = 0; i < 2 ; i++){
      const lastMovie = prompt("Один из последних фильмов?"),
            lastMovieMark = prompt("На сколько оцените его?");
   
      if (lastMovie != null && lastMovieMark != null && lastMovie !="" && lastMovieMark !=""  && lastMovie.length < 50){
         personalMovieDb.movies[lastMovie] = lastMovieMark;
         console.log("done");
      }
      else {
         console.log("error");
         i--;
      }
   }
}

rememberMyFilms();

function detectPersonalLevel(){
   if (personalMovieDb.count < 10){
      console.log("Вы посмотрели мало");
   } else if (personalMovieDb.count >= 10 && personalMovieDb.count <= 30){
      console.log("Вы классический зритель");
   } else if (personalMovieDb.count > 30){
      console.log("Вы киноман");
   } else {
      console.log("Произошла оштбка");
   }
}

detectPersonalLevel();

console.log(personalMovieDb);

function showMyDB(hidden){
   if (!hidden){
      console.log(personalMovieDb);
   }
}

showMyDB(personalMovieDb.private);

function writeYourGenres(){
   for (let i = 1; i < 3; i++){
      personalMovieDb.genres[i-1] = prompt(`Ваш любимый жанр №${i}`);
}
}

writeYourGenres();


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
/*
const userName = "Антон";
function sayHello(userName) {
return `Привет, ${userName}`;
}

console.log(sayHello(userName));
*/
/*
const num = 5;
function returnNeighboringNumbers(num) {
   const arr = {};
   arr[0] = num - 1;
   arr[1] = num;
   arr[2] = num + 1;
return arr;
}
console.log(returnNeighboringNumbers(num));
*/
/*
function getMathResult(base, cof) {
   if (cof <= 0 || typeof(cof) == "string"){
      return base;
   } else {
      let str = ``;
      for (let i = 1; i <= cof; i++){
         if (i === cof){
            str += `${base*i}`;
         }else {
            str += `${base*i}---`;
         }
      }
      return str;
   }

}

console.log(getMathResult(10, 45));
*/

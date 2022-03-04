

// let numbers = [1, 4, 5, 2, 9, 5, 1];
// let UnicumNumbers = [];
// let lastIndex = 0;

// for (let i = 0; i <= numbers.length - 1; i++) {
//     let swap = numbers[lastIndex];
//     console.log(swap);
//     if (swap != numbers[i]) {
//         UnicumNumbers.push(numbers[i]);
//         lastIndex += numbers[i];
//     }
//     lastIndex = numbers[i];
//     console.log(UnicumNumbers);
// }

// var mnogo = 5;
// const obg = {
//     a: 50
// };

// obg.a = 10;
// console.log(obg);

// const number = 4;
// number = 5;
// console.log(number);

// const result = confirm("Are you ready?");
// console.log(result);

// const answer =  +prompt("what is your name", "");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваша фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");

// document.write(answers);

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);
// const newObj = {};
// console.log(newObj);
// const num  = 87;
// // const show = false;
// // (num === 50 && show ) ? console.log('ок') : console.log('error');

// switch (num) {
//     case 49:
//     console.log("неверно");
//     break;

//     case 100:
//     console.log("неверно");
//     break;

//     case 50:
//     console.log("верно");
//     break;

//     default:
//     console.log("в другой раз");
//     break;
// }

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let filmFirst = prompt("Один из последних просмотренных фильмов?", "");
let gradeOne = prompt("На сколько оцените его?", "");
let filmSecond = prompt("Один из последних просмотренных фильмов?", "");
let gradeTwo = prompt("На сколько оцените его?", "");

personalMovieDB.movies[filmFirst] = gradeOne;
personalMovieDB.movies[filmSecond] = gradeTwo;

console.log(personalMovieDB);


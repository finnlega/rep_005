

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


// let filmSecond = prompt("Один из последних просмотренных фильмов?", "");
// let gradeTwo = prompt("На сколько оцените его?", "");
// let count = 1;
// while (count < 3) {
//     personalMovieDB.movies[filmFirst] = gradeOne;
//     count++;
// }

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять
let filmFirst;
let gradeOne;

for (let i = 1; i < 3; i++) {
       
        console.log(i);
        filmFirst = prompt("Один из последних просмотренных фильмов?", "");
        gradeOne = prompt("На сколько оцените его?", "");
        if (filmFirst.length > 10) {
            console.log("Слишком длинное название фильма");
            i--;
        }
        else { personalMovieDB.movies[filmFirst] = gradeOne; }
    
    
    console.log(i);

    
}

// personalMovieDB.movies[filmFirst] = gradeOne;
// personalMovieDB.movies[filmSecond] = gradeTwo;

console.log(personalMovieDB);

// let num = 50;

// while (num < 1020) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }

// while (num <= 55);

// for (let i = 1; i < 10; i++ ) {
//     if (i === 7) {
//         continue;

//     }
//     console.log(i);

// }1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/
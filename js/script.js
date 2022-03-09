

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

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function getLevel () {
    if (personalMovieDB.count <= 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
        }
      else {
        console.log("Произошла ошибка");  
      
    }
} 

getLevel();


function rememberMyFilms () {
    let lastFilm;
    let grade;

for (let i = 1; i < 3; i++) {
       
        console.log(i);
        lastFilm = prompt("Один из последних просмотренных фильмов?", "");
        grade = prompt("На сколько оцените его?", "");
        if (lastFilm != null && grade != null && lastFilm != '' && grade != '' && lastFilm.length < 50) {
            console.log("выполнено");
            personalMovieDB.movies[lastFilm] = grade; 
                        
        }
        else { 
            console.log("Ошибка");
            i--;
        }   
}
}

rememberMyFilms();


function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }

}

showMyDB();

function writeYourGenres() {
    for (let j = 0; j < 3; j++ ) {
        personalMovieDB.genres[j] = prompt(`Ваш любимый жанр под номером ${j+1}`);
    }
    
}

writeYourGenres();

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять



//     // 016 Функции

// function getName ( text ) {
//     console.log(text);

// }

// getName("Иван");

// Практическое задание 2

// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно*/



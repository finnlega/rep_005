

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

// let options = {
//     name: 'vlad',
//     width: 1024,
//     height: 860,
//     colors: {
//         bg: 'red',
//         color: 'yellow'
//     }
// };

    // console.log(Object.keys(options).length);

    // // 021 Массивы и псевдомассивы

    // const arr = [1, 2, 16, 7, 6, 13, 4, 56];

    // arr.sort(compareNum);

    // function compareNum (a, b) {
    //     return a-b;
    // }
    // console.log(arr);
    // // arr.pop();
    // // console.log(arr);
    // // arr.push(11);
    // // console.log(arr);

    // arr.forEach (function (item, i, arr) {
    //     console.log(`${i}: ${item} внутри ${arr}`);
    // });

    // const str =  prompt ("", "");
    // const products = str.split(", ");
    // console.log(products.sort());

 
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


function binarySearch(value, list) {
    let first = 0;    //left endpoint
    let last = list.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;
 
    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (list[middle] == value) {
            found = true;
            position = middle;
        } else if (list[middle] > value) {  //if in lower half
            last = middle - 1;
        } else {  //in in upper half
            first = middle + 1;
        }
    }
    
    return console.log(position);
}

binarySearch(8, [1,2,3,4,5,6,7,8,9,10]);
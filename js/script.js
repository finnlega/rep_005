
// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
// }

// start();

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
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
    },
    getLevel: function () {
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
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    
    },
    
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
            // console.log(personalMovieDB);
        } else {
            personalMovieDB.privat = true;
            // console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let j = 0; j < 3; j++ ) {
            let genre = prompt(`Ваш любимый жанр под номером ${j+1}`, "");
            if (genre == null || genre =="") {
                j--;
                console.log("ошибка");
            }
            else {
                personalMovieDB.genres[j] = genre;
                console.log("выполнено");
            }
                          
        }
        personalMovieDB.genres.forEach( (value, i) => {
            console.log(`Любимый жанр ${i+1} - ${value}`);
        });
    }
};


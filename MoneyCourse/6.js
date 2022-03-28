const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", ""); // + - для работы с числами

const personalMovieDB = { 
    count: numberOfFilms,
    movies: {},
    actors: {}, 
    genres: [], 
    privat: false
    
};

for (let i = 0; i < 2; i++) { 
    const a = prompt("Один из последних просмотренных фильмов?", ""), 
          b = prompt("На сколько оцените его?", "");
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) { 
        personalMovieDB.movies[a] = b;
        console.log('Готово');
    } else {
        console.log('Ошибка');
        i--;
    }
}

if (personalMovieDB.count < 10) { 
    console.log('Просмотрено довольно мало фильмов!');
} else if (personalMovieDB.count >= 10 && personalMovieDB <30) { 
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Ошибка');
}

console.log(personalMovieDB);


/* actors: Object {  }
count: "2"
genres: Array []
movies: Object { test1: "10", test2: "9" }
privat: false **/ 
// Консоль выведет это, я просмотрел 2 фильма, первый - test1, который я оценил на 10, а второй - test2, который я оценил на 9
